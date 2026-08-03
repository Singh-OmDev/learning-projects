import  {Request , Response} from 'express';

 import {promises as fs} from 'fs';
  import path from  "path";

 export const uploadFile = (

     req: Request ,
      res: Response
       

 ) :
  void => {
     if (!req.file){
         res.status ( 400).json ({
             message:" nof file uploaded",

         });
          return ;

     }

      res.status (201).json ({
         message: "file uploaded successfully",
          file: req.file.filename,  orignalname :  req.file.originalname, size: req.file.size, 
        
        

      })
  };


  export const getFiles = async (req: Request, res: Response) => {
  try {
    const uploadPath = path.join(
      process.cwd(),
      "src",
      "storage",
      "uploads"
    );

    // Read all filenames
    const filenames = await fs.readdir(uploadPath);

    // Get details for every file
    const files = await Promise.all(
      filenames.map(async (filename) => {
        const filePath = path.join(uploadPath, filename);

        const stats = await fs.stat(filePath);

        return {
          filename,
          size: stats.size,
        };
      })
    );

    res.json(files);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
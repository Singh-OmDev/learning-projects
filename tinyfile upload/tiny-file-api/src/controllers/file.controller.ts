import  {Request , Response} from 'express';
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


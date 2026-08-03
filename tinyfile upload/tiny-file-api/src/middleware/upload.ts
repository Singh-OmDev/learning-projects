import multer from 'multer';
 import path from  "path";
  import {v4 as uuid} from 'uuid';

 //configure where and how  files are stored
  const storage  = multer.diskStorage ({
     destination : ( req, file , cb)=> {
         cb (null , "src/storage/uploads");

     },

      filename : ( req, file  , cb)=> {
         //keep original file extension
          const extension = path.extname (file.originalname);
        //generate unique  filename
         const filename = `${uuid ()} ${extension}`;

          cb (null  , filename);


      },
       



  });
   const upload =  multer ({
     storage ,
   })
   
    export default upload;

import {Router} from "express";


 import upload from  "../middleware/upload";
  import {uploadFile , getFiles} from "../controllers/file.controller";

   const router = Router ();

    router.post ("/", upload.single ("file"),
 uploadFile);
    router.get ("/", getFiles);

  export default router;

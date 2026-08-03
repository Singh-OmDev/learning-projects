import {Router} from "express";


 import upload from  "../middleware/upload";
  import {uploadFile} from "../controllers/file.controller";

   const router = Router ();

    router.post ("/", upload.single ("file"),
 uploadFile);

  export default router;
  
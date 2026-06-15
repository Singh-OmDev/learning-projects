import express from "express";
 import {createStudent} from "../controllers/studentControllers.js";
  import  {getAllStudents}  from "../controllers/studentControllers.js";
   import{getStudentById} from "../controllers/studentControllers.js";
  
    import {updateStudentById} from "../controllers/studentControllers.js";
    


   const router = express.Router();

   router.post("/", createStudent);
    router.get("/", getAllStudents);

router.get("/:id", getStudentById);

router.put("/:id", updateStudentById);


   export default router ;
   
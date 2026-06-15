import express from "express";
 import createStudent from "../controllers/studentControllers.js";
  


   const router = express.Router();

   router.post("/", createStudent);


   export default router ;
   
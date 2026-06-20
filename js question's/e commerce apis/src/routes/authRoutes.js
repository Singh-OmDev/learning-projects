import express from "express";

 import {register,login, profile}  from "../controllers/authController.js";

import {protect} from "../middleware/authMiddleware.js";
import {isAdmin} from "../middleware/adminMiddleware.js";



 


  const router = express.Router();


   router.post ("/register", register);
   router.post("/login", login);
   
 router.get("/profile", protect, profile);

router.get("/admin", protect, isAdmin, (req , res)=> {
    res.json({message:"welcome admin"});
})
    export default router;



import express from "express";

 import {register,login, profile}  from "../controllers/authController.js";

import {protect} from "../middleware/authMiddleware.js";
import {isAdmin} from "../middleware/adminMiddleware.js";
 import {refreshToken} from "../controllers/authController.js"
  import {generateAccessToken, generateRefreshToken} from  "../utils/generateTokens.js";


 


  const router = express.Router();


   router.post ("/register", register);
   router.post("/login", login);
   
 router.get("/profile", protect, profile);

router.get("/admin", protect, isAdmin, (req , res)=> {
    res.json({message:"welcome admin"});
})


router.post(
  "/refresh-token",
  refreshToken
);



    export default router;



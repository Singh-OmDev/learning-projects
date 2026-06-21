import express from "express";

 import {addToWishlist} from "../controllers/wishlistController.js";
import {protect} from "../middleware/authMiddleware.js";
import {isAdmin} from "../middleware/adminMiddleware.js";
 
 const router = express.Router();



  router.post ("/add", protect, addToWishlist);

  

   export default router;

import express from "express";


import {addToCart} from "../controllers/cartController.js";
import {protect} from "../middleware/authMiddleware.js";
import {isAdmin} from "../middleware/adminMiddleware.js";
 import {getCart} from "../controllers/cartController.js";




 const router = express.Router ();


 router.post ("/add", protect, addToCart);
 router.get("/", protect, getCart);


  export default router;

import express from "express";


import {addToCart} from "../controllers/cartController.js";
import {protect} from "../middleware/authMiddleware.js";
import {isAdmin} from "../middleware/adminMiddleware.js";
 import {getCart} from "../controllers/cartController.js";
 import {removeFromCart} from "../controllers/cartController.js";
 
import {updateCart} from "../controllers/cartController.js";




 const router = express.Router ();


 router.post ("/add", protect, addToCart);
 router.get("/", protect, getCart);
  router.put("/update/:productId", protect, addToCart);
router.delete ("/remove/:productId", protect , removeFromCart);

  export default router;

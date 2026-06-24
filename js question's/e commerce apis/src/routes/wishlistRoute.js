import express from "express";

 import {addToWishlist} from "../controllers/wishlistController.js";
import {protect} from "../middleware/authMiddleware.js";
import {isAdmin} from "../middleware/adminMiddleware.js";
 import { getWishlist } from "../controllers/wishlistController.js";
 import { removeFromWhishlist } from "../controllers/wishlistController.js";

 const router = express.Router();



  router.post ("/add", protect, addToWishlist);

  
router.get("/:id", protect,getWishlist );
 router.delete("/:id", protect, removeFromWhishlist);



   export default router;

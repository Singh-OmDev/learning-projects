import express from "express";

 import {createOrder} from "../controllers/orderController.js";

 import {protect} from "../middleware/authMiddleware.js";
import {getAllOrders} from "../controllers/orderController.js";




 const router  = express.Router();

  router.post ("/", protect, createOrder);

   router.get ("/", protect, getAllOrders);

   


   export default router;


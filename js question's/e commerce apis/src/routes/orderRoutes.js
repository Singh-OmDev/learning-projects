import express from "express";

 import {createOrder} from "../controllers/orderController.js";

 import {protect} from "../middleware/authMiddleware.js";
import {getAllOrders} from "../controllers/orderController.js";

 import {isAdmin} from "../middleware/adminMiddleware.js";

import {updateOrderStatus} from "../controllers/orderController.js";


 const router  = express.Router();

  router.post ("/", protect, createOrder);

   router.get ("/", protect, getAllOrders);

router.get(
  "/all",
  protect,
  isAdmin,
  getAllOrders
);


 router.patch  ("/:id/status", protect ,isAdmin, updateOrderStatus);

   export default router;


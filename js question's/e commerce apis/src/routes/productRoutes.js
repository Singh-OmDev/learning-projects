import express from "express";


 import {createProduct} from "../controllers/productController.js";
import {protect} from "../middleware/authMiddleware.js";
import {isAdmin} from "../middleware/adminMiddleware.js";
 import {getAllProducts , getProductById} from "../controllers/productController.js";
  import {updateProduct} from "../controllers/productController.js";

 import {deleteProduct} from "../controllers/productController.js";






 const router = express.Router ();


  router.post ("/", protect, isAdmin, createProduct);

router.get("/", getAllProducts);

router.get(
  "/:id",
  getProductById
);


 router.put  ("/:id", protect, isAdmin, updateProduct);

  router.delete ("/:id", protect , isAdmin , deleteProduct);
  

export default router;
import express from "express";

import { createShortId } from "../controllers/urlControllers.js";
 import { redirectToOriginalUrl } from "../controllers/urlControllers.js";
 const router = express.Router ();

 
  router.post ("/", createShortId);
router.get ("/:shortCode", redirectToOriginalUrl);

   export default router;

   
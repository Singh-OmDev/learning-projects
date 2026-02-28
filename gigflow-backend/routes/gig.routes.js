const express = require("express");
const router = express.Router();
const {
  createGig,
  getAllGigs
} = require("../controllers/gig.controller");
const authMiddleware = require("../middleware/auth.middleware");

// Public route (with optional search)
router.get("/", getAllGigs);

// Protected route
router.post("/", authMiddleware, createGig);

module.exports = router;
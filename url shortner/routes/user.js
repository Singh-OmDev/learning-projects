const express = require("express");
const {
  handleUserSignup,
  handleUserLogin,
} = require("../controllers/user");

const router = express.Router();

// signup
router.post("/signup", handleUserSignup);

// login
router.post("/login", handleUserLogin);

module.exports = router;

const express = require("express");
const router = express.Router();
const { addComment, getPostWithComments } = require("../controllers/commentController");
const auth = require("../middleware/authMiddleware");

router.post("/:postId", auth, addComment);
router.get("/:postId", getPostWithComments);

module.exports = router;
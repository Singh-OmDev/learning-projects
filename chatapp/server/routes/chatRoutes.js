const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  createOrGetConversation,
  sendMessage,
  getMessages,
} = require("../controllers/chatController");

router.post("/conversation", protect, createOrGetConversation);
router.post("/message", protect, sendMessage);
router.get("/messages/:conversationId", protect, getMessages);

module.exports = router;
const Conversation = require("../models/Conversation");
const Message = require("../models/Message");

// ✅ Create or get conversation
exports.createOrGetConversation = async (req, res) => {
  try {
    const { userId } = req.body;

    let conversation = await Conversation.findOne({
      participants: { $all: [req.user._id, userId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [req.user._id, userId],
      });
    }

    res.json(conversation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Send message
exports.sendMessage = async (req, res) => {
  try {
    const { conversationId, content } = req.body;

    const message = await Message.create({
      sender: req.user._id,
      conversation: conversationId,
      content,
    });

    await Conversation.findByIdAndUpdate(conversationId, {
      lastMessage: content,
    });

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get messages
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      conversation: req.params.conversationId,
    })
      .populate("sender", "name email")
      .sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
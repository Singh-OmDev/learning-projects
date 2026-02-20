const express = require("express");
const cors = require("cors");
require("dotenv").config();
const http = require("http");
const { Server } = require("socket.io");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");

connectDB();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ create HTTP server
const server = http.createServer(app);

// ✅ socket setup
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// 🔥 socket logic
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // join conversation room
  socket.on("joinConversation", (conversationId) => {
    socket.join(conversationId);
  });

  // send message realtime
  socket.on("sendMessage", (data) => {
    io.to(data.conversationId).emit("receiveMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
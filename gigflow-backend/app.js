const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");


const app = express();
app.use(express.json());

// Middleware

app.use(cookieParser());

app.use("/api/auth", authRoutes);


app.use(
  cors({
    origin: "http://localhost:5173", // Vite frontend
    credentials: true
  })
);

// Test route
app.get("/", (req, res) => {
  res.send("GigFlow API Running 🚀");
});

module.exports = app;
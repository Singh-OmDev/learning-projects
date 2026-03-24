import express from "express";

const app = express();  // ✅ THIS WAS MISSING

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Test route
app.get("/health", (req, res) => {
  res.send("Server is running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
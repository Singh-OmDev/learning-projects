
require("dotenv").config();

const express = require("express");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Blog API Running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
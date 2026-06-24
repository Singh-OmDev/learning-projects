import express from "express";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();


const app = express();
app.use(cors());

app.use("/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
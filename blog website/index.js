import express from "express";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import Blog from "./models/blog.js";
import blogRoute from "./routes/blog.js";
import userRoute from "./routes/user.js";
import { checkAuthenticationCookie } from "./routes/middlewares/authentication.js";

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/blogify")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Static files (images, css, js)
app.use(express.static(path.resolve("./public")));

// Cookies + Auth middleware
app.use(cookieParser());
app.use(checkAuthenticationCookie("token"));

// ✅ Make user available in all EJS files
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// Routes
app.use("/blog", blogRoute);
app.use("/user", userRoute);

// Home page - show blogs
app.get("/", async (req, res) => {
  const allBlogs = await Blog.find({});
  res.render("home", { blogs: allBlogs });
});

// Server start
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));

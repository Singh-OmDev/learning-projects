import express from "express";
import dotenv from "dotenv";
import User from "./models/User.js";
 import app from "./app.js";
  import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";

 import authRoutes from "./routes/authRoutes.js";

 import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js"
 import wishlistRoutes from "./routes/wishlistRoute.js";

  import notificationRoutes from  "./routes/notificationRoutes.js";
import "./workers/notificationWorker.js";

dotenv.config();
connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);

 app.use ("/api/notifications",notificationRoutes);

app.use(
  "/api/products",
  productRoutes
);
 app. use ("/api/reviews", reviewRoutes);
 

 app.use  ("/api/wishlist", wishlistRoutes);

app.use(
  "/api/cart",
  cartRoutes
);

app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the E-commerce API");
}   
);

 


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
}   
)




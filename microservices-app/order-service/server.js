require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://order-db:27017/orderDB")
  .then(() => console.log("Order DB Connected"))

const Order = mongoose.model("Order", {
  userId: String,
  productId: String,
  quantity: Number
})

const axios = require("axios")

app.post("/api/orders", async (req, res) => {
  const { userId, productId, quantity } = req.body

  try {
    // Verify product exists
    const productResponse = await axios.get(
      `http://product-service:5002/api/products/${productId}`
    )

    if (!productResponse.data) {
      return res.status(400).json({ message: "Product not found" })
    }

    const order = await Order.create({
      userId,
      productId,
      quantity
    })

    res.json(order)

  } catch (err) {
    res.status(400).json({ message: "Invalid product" })
  }
})

app.get("/api/orders", async (req, res) => {
  const orders = await Order.find()
  res.json(orders)
})

app.listen(5003, () => {
  console.log("Order Service running on port 5003")
})
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

app.post("/api/orders", async (req, res) => {
  const order = await Order.create(req.body)
  res.json(order)
})

app.get("/api/orders", async (req, res) => {
  const orders = await Order.find()
  res.json(orders)
})

app.listen(5003, () => {
  console.log("Order Service running on port 5003")
})
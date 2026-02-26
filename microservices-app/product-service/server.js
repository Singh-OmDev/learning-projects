require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://product-db:27017/productDB")
  .then(() => console.log("Product DB Connected"))

const Product = mongoose.model("Product", {
  name: String,
  price: Number
})

app.post("/api/products", async (req, res) => {
  const product = await Product.create(req.body)
  res.json(product)
})

app.get("/api/products", async (req, res) => {
  const products = await Product.find()
  res.json(products)
})
app.get("/api/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (!product) return res.status(404).json({ message: "Not found" })
  res.json(product)
});

app.listen(5002, () => {
  console.log("Product Service running on port 5002")
})
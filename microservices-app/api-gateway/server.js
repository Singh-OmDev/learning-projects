const express = require("express")
const { createProxyMiddleware } = require("http-proxy-middleware")
const cors = require("cors")

const app = express()
app.use(cors())

// Auth routes
app.use(
  "/api/auth",
  createProxyMiddleware({
    target: "http://auth-service:5001",
    changeOrigin: true,
  })
)

// Product routes
app.use(
  "/api/products",
  createProxyMiddleware({
    target: "http://product-service:5002",
    changeOrigin: true,
  })
)

// Order routes
app.use(
  "/api/orders",
  createProxyMiddleware({
    target: "http://order-service:5003",
    changeOrigin: true,
  })
)

app.listen(5000, () => {
  console.log("API Gateway running on port 5000")
})
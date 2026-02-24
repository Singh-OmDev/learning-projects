const express = require("express")
const { createProxyMiddleware } = require("http-proxy-middleware")
const cors = require("cors")
const jwt = require("jsonwebtoken")


const app = express()
app.use(cors())







function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1]

  if (!token) return res.status(401).json({ message: "No token" })

  try {
    const decoded = jwt.verify(token, "supersecretkey")
    req.user = decoded
    next()
  } catch (err) {
    res.status(401).json({ message: "Invalid token" })
  }
}
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
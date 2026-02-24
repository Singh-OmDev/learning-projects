require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const authRoutes = require("./routes/authRoutes")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Auth DB Connected"))
  .catch(err => console.log(err))

app.use("/api/auth", authRoutes)

app.listen(5001, () => {
  console.log("Auth Service running on port 5001")
})
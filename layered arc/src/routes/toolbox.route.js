const express = require('express');


const router = express.Router();

 router.get("/", (req, res) => {
     res.json({ message: "Welcome to the Toolbox API" });
     success: false

     
 })

 module.exports = router;
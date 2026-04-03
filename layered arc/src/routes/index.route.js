const express = require('express');

 const toolboxRoutes = require('./toolbox.route');
const router = express.Router();

router.use ("/tools", toolboxRoutes)

 module.exports = router;

 
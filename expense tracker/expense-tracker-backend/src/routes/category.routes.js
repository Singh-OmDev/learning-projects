const express  = require ("express");

  const router  = express.Router ();

   const categoryController = require ("../controllers/category.controller");
  

    const   protect = require ("../middlewares/auth.middleware");
    
 
    router.post ("/", protect, categoryController.createCategory);

     module.exports = router;

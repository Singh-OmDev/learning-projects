 const categoryService = require ("../services/category.service");
  const createCategory = async ( req , res)=> {


     try {
         const {name} = req.body;
         const category = await categoryService.createCategory(name);
     }
  }




  
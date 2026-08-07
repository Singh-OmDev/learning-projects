 const categoryService = require ("../services/category.service");
  const createCategory = async ( req , res)=> {


     try {
         const {name} = req.body;
          const  {userId} = req.user.id;
         const category = await categoryService.createCategory(name, userId);
          res.status ( 201).json ({

              success: true,
               message: "category created successfully",
                category,
            

          })
        
     }
      catch ( error ){
          res.status ( 400).json ({

            success: false,
            message: error.message,
             
          })
      }
  }




  
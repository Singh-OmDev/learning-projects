import Product from "../models/Product.js";


export const createProduct = async (req, res)=>{
    try {

        const {
             name,
             description,
             price,
              stock,
              category,
              image,

        }
         = req.body;

          const product = await Product.create({
             name,
                description,
                    price,

                        stock,
                            category,
                                image,
                                    createdBy: req.user._id,    
          });
           res.status (201).json ({message:"product created successfully", product});


    }
     catch (error ){
         res.status (500).json ({message:"internal server error"});



     }
}
export const getAllProducts = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const filter = {};

    if (req.query.category) {
      filter.category = req.query.category;
    }

    const products = await Product.find(filter)
      .skip(skip)
      .limit(limit);

    const totalProducts =
      await Product.countDocuments(filter);

    res.status(200).json({
      page,
      limit,
      totalProducts,
      totalPages: Math.ceil(
        totalProducts / limit
      ),
      products,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
 
  export const getProductById = async ( req, res)=> {
     try {

         const product = await Product.findById(req.params.id);

          if (!product){
             return res.status (404).json ({message: "product not found"});

          }
           res.status (200).json ({product});


      }
       catch ( error){
         res.status (500).json({message: "internal server error"    }     );
       }
       

  }



   export const updateProduct = async (req, res)=> {


    try {
 const product = await Product.findByIdAndUpdate (req.params.id, req.body, {new: true});
 
  if (!product){
     return res.status (404).json({message:"product not found"});

  }
   res.status (200).json ({message: "product updated successfully", product});


 
    }

     catch (error){
        res.status (500).json ({message: "internal server error"});

     }
   }
   

    export const deleteProduct = async ( req, res)=> {


        try {
            const product = await Product.findByIdAndDelete(req.params.id);


             if (!product){
                 return res.status  (404).json ({message: "product not found"});


             }
              res.status (200).json ({message: "product deleted successfully hehhehheh"});


        }
         catch (error){
             res.status (500).json ({message: "internal server error heheh"});

             
         }
    }
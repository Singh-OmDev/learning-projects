import Wishlist from "../models/Wishlist.js";
import Product from "../models/Product.js";

export const addToWishlist = async (
  req,
  res
) => {

  try {

    const { productId } = req.body;

    const product =
      await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    let wishlist =
      await Wishlist.findOne({
        user: req.user,
      });

    if (!wishlist) {

      wishlist =
        await Wishlist.create({
          user: req.user,
          products: [productId],
        });

      return res.status(201).json({
        message:
          "Wishlist created",
        wishlist,
      });
    }

    const alreadyExists =
      wishlist.products.includes(
        productId
      );

    if (alreadyExists) {
      return res.status(400).json({
        message:
          "Product already in wishlist",
      });
    }

    wishlist.products.push(productId);

    await wishlist.save();

    res.status(200).json({
      message:
        "Product added to wishlist",
      wishlist,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

 export const getWishlist = async (req, res)=> {

    try {
        const wishlist = await Wishlist.findOne ({
            user: req.user,

        }).populate("products");

        res.status (200).json ({
            wishlist,

        })
    }
     catch (error){
         res.status (500).json 
        ({
             message: error.message,
        })
     }
 }

  export const removeFromWhishlist = async (req, res)=> {
    try {
         const wishlist = await Wishlist.finOne({
            user: req.user,


         });
          if (!wishlist){
            return res.status (404).json ({
                 message: "wishlist not found",
            })
          }
           wishlist.products =
            wishlist.products.filter (
                 product => 
                     product.toString()!==
                  req.params.includes
            );
            await wishlist.save();

             res.status (200).json ({
                 message: "product removed",
                 wishlist,
             });


    }
     catch (error){
         res.status (500).json({
             message: error.message,

         });

         
     }
  }

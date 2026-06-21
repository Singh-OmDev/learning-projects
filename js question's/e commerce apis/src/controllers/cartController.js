import Cart from  "../models/Cart.js";
import Product from "../models/Product.js";



export const addToCart = async (req, res) => {
  try {

    const { productId, quantity } = req.body;

    const product = await Product.findById(
      productId
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    let cart = await Cart.findOne({
      user: req.user,
    });

    if (!cart) {

      cart = await Cart.create({
        user: req.user,
        items: [
          {
            product: productId,
            quantity,
          },
        ],
      });

      return res.status(201).json({
        message: "Cart created",
        cart,
      });
    }

    const existingProduct =
      cart.items.find(
        item =>
          item.product.toString() ===
          productId
      );

    if (existingProduct) {

      existingProduct.quantity += quantity;

    } else {

      cart.items.push({
        product: productId,
        quantity,
      });

    }

    await cart.save();

    res.status(200).json({
      message: "Product added to cart",
      cart,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

 export const getCart = async (req, res) => {
  try {

    const cart = await Cart.findOne({
      user: req.user
    }).populate(
      "items.product",
      "name price stock category image"
    );

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found"
      });
    }

    let totalPrice = 0;

    cart.items.forEach(item => {
      totalPrice +=
        item.product.price * item.quantity;
    });

    res.status(200).json({
      totalItems: cart.items.length,
      totalPrice,
      cart
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


 export const updateCart = async (req, res)=> {
     try {
        const {productId, quantity}= req.body;
        const cart = await Cart.findOne({user:req.user});

         if (!cart){
            return res.status(404).json ({message:"cart not found"});


         }

          const item = cart.items.find(item=> item.product.toString()=== productId);
          if(!item){
             return res.status (404).json ({message:"product not found in cart"});

          }

          item.quantity = quantity;
          await cart.save ();
          res.json({message:"cart updated successfully", cart});



     }
      catch (error){
         res.status(500).json ({message:"internal server  error"});


      }
 }

  export const removeFromCart = async (req, res)=> {
     try {
        const {productId} = req.body;

         const cart = await Cart.findOne ({user:req.user});
if (!cart){
     return res.status (404).json ({message: "cart not found"});


}

 cart.items = cart.items.filter (item=> item.product.toString() !== productId);
 await cart.save ();
  res.json ({message: "product removed from cart successfully", cart});




     }

      catch (error){
         res.status (500).json ({message: "internal server error"});
         
      }
  }
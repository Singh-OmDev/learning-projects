import Order from "../models/Order.js";

 import Cart from "../models/Cart.js";

  import Product from "../models/Product.js";


  export const createOrder = async ( req, res)=> {


     try {
        const cart = await Cart.findOne({user:req.user}).populate("items.product");

        if (!cart || cart.items.length === 0){

            return res.status (400).json ({message: "cart is empty"});


        }
         
    
    let totalPrice = 0;
    const orderItems = [];

    for (const item of cart.items) {

      const product = item.product;

      // Stock Check
      if (product.stock < item.quantity) {
        return res.status(400).json({
          message: `Not enough stock for ${product.name}`,
        });
      }

      // Reduce Inventory
      product.stock -= item.quantity;

      await product.save();

      orderItems.push({
        product: product._id,
        quantity: item.quantity,
        price: product.price,
      });

      totalPrice +=
        product.price * item.quantity;
    }

    const order = await Order.create({
      user: req.user,
      items: orderItems,
      totalPrice,
    });

    // Clear Cart
    cart.items = [];

    await cart.save();

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

//  export  const getAllOrders = async ( req, res)=> {
//     try {
//          const orders = await Order.find({user: req.user}).populate("items.product");
//          res.status (200).json   ({
//              message: "orders fetched successfully",
//               count : orders.length,
//                orders,

//          })


//     }
     
//      catch (error){
//          res.status (500).json ({message: "internal server error"});

//      }
//  }


export const getAllOrders = async (
  req,
  res
) => {

  try {

    const orders = await Order.find()
      .populate("user", "name email")
      .populate(
        "items.product",
        "name price"
      );

    res.status(200).json({
      message:
        "All orders fetched successfully",
      count: orders.length,
      orders,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

 export const updateOrderStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const order = await Order.findById(
      req.params.id
    );

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    order.status = status;

    await order.save();

    res.status(200).json({
      message: "Order status updated",
      order,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};
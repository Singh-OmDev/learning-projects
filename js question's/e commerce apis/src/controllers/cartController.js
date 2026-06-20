import Cart from  "../models/Cart";
import Product from "../models/Product";



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
      user: req.user.id,
    });

    if (!cart) {

      cart = await Cart.create({
        user: req.user.id,
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
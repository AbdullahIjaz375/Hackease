const Cart = require("../models/CartModel");
const Product = require("../models/ProductsModel");

// Controller to get current user's cart
exports.getCart = async (req, res) => {
  try {
    const userId = req.userId; // Assuming isAuth middleware sets req.userId
    const cart = await Cart.findOne({ user: userId }).populate(
      "items.productId"
    );
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addToCart = async (req, res) => {
  const userId = req.userId;
  const productId = req.body.productId;
  const quantity = req.body.quantity || 1;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId });
    }

    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (existingItemIndex !== -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    cart.totalPrice += product.price * quantity;

    await cart.save();

    res.status(201).json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCartItem = async (req, res) => {
  const userId = req.userId;
  const productId = req.params.productId;
  const quantity = req.body.quantity;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (existingItemIndex !== -1) {
      cart.totalPrice -= cart.items[existingItemIndex].quantity * product.price;
      cart.items[existingItemIndex].quantity = quantity;
      cart.totalPrice += quantity * product.price;
    }

    await cart.save();

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to remove item from current user's cart
exports.removeFromCart = async (req, res) => {
  const userId = req.userId; // Assuming isAuth middleware sets req.userId
  const productId = req.params.productId;

  try {
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (existingItemIndex !== -1) {
      const product = await Product.findById(productId);
      if (product) {
        cart.totalPrice -=
          cart.items[existingItemIndex].quantity * product.price;
      }
      cart.items.splice(existingItemIndex, 1);
    }

    await cart.save();

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

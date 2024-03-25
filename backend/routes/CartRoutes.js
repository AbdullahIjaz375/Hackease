const express = require("express");
const router = express.Router();
const isAuth = require("../middleware/isAuthMiddleware");

const cartController = require("../controllers/CartControllers");

router.get("/get-cart", isAuth, cartController.getCart);

router.post("/add", isAuth, cartController.addToCart);

router.put("/update/:productId", isAuth, cartController.updateCartItem);

router.delete("/remove/:productId", isAuth, cartController.removeFromCart);

module.exports = router;

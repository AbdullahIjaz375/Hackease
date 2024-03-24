const express = require("express");
const router = express.Router();

const isAuth = require("../middleware/isAuthMiddleware");
const upload = require("../middleware/multerMiddleware");

const ShopController = require("../controllers/ShopController");

router.get("/get-products", isAuth, ShopController.getProducts);

router.post(
  "/create-product",
  isAuth,
  upload.single("photo"),
  ShopController.createProduct
);

module.exports = router;

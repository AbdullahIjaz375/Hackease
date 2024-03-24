const Product = require("../models/ProductsModel");
const path = require("path");
const bucket = require("../utils/firebaseAdmin");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    if (!name || !description) {
      return res
        .status(400)
        .json({ message: "Name and description are required" });
    }

    // Set a default photo URL in case no file is uploaded
    let photoURL = "https://example.com/path/to/your/default/image.jpg"; // Update with your actual default image URL

    if (req.file && req.file.buffer) {
      const timestamp = Date.now();
      const firebaseFileName = `images/${timestamp}-${req.file.originalname}`;
      const file = bucket.file(firebaseFileName);

      await file.save(req.file.buffer, {
        metadata: {
          contentType: req.file.mimetype,
        },
      });

      await file.makePublic();
      photoURL = `https://storage.googleapis.com/${bucket.name}/${firebaseFileName}`;
    } else {
      console.error("No file buffer available");
      // You might want to handle this scenario differently, depending on your application's requirements.
    }

    const product = new Product({
      name,
      description,
      price,
      photo: photoURL,
    });

    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error in createProduct:", error);
    res.status(500).json({ message: error.message });
  }
};

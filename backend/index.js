const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

// Importing Firebase Admin bucket for use in file uploads
const { bucket } = require("./utils/firebaseAdmin");

const app = express();

// Enable CORS for all requests
app.use(cors());

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files middleware for serving images and other static resources
// Assuming you store your static files (like images) in a 'public' directory
// Serve static files from the assets/uploads directory
app.use(
  "/uploads",
  cors(),
  express.static(path.join(__dirname, "assets/uploads"))
);
app.use(
  "/images",
  cors(),
  express.static(path.join(__dirname, "assets/images"))
);

const PORT = process.env.PORT || 5000;

// Multer configuration for handling multipart/form-data
// If you're processing files to upload to Firebase, you might not need to store them locally
const storage = multer.memoryStorage(); // Stores files in memory
const upload = multer({ storage: storage });

// Example route for file upload
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // Create a reference to the Firebase Storage bucket
  const file = bucket.file(req.file.originalname);

  // Upload the file to Firebase Storage
  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
    },
  });

  stream.on("error", (e) => {
    console.error(e);
    return res.status(500).send(e);
  });

  stream.on("finish", async () => {
    // Make the file public and get the public URL
    await file.makePublic();
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${file.name}`;
    res.status(200).send({ path: publicUrl });
  });

  stream.end(req.file.buffer);
});

// Routes
const AuthRoutes = require("./routes/AuthRoutes");
const ShopRoutes = require("./routes/ShopRoutes");
const CartRoutes = require("./routes/CartRoutes");

app.use("/auth", AuthRoutes);
app.use("/shop", ShopRoutes);
app.use("/cart", CartRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Database: ", error);
  });

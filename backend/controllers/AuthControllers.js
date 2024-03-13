const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    // Create a new user instance
    const newUser = new User({
      username,
      email,
      password: password,
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success message
    res
      .status(201)
      .json({ message: "User registered successfully", data: newUser });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // If the password matches, create a session or JWT token for authentication
    // Here you can implement session-based or token-based authentication as per your application's requirements

    res.status(200).json({ message: "Login successful", data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

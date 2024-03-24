const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Check if the header exists and extract the token

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded user information to the request object
    req.user = decoded;
    next(); // Call next middleware
  } catch (error) {
    // If token is not valid, return error
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = isAuth;

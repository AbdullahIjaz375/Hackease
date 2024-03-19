const express = require("express");
const router = express.Router();

const UserController = require("../controllers/AuthControllers");

router.put("/signup", UserController.signup);

router.post("/login", UserController.login);

module.exports = router;

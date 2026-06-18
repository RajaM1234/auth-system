const express = require("express");
const router = express.Router();
const registerUser = require("../controller/authcontroller").registerUser;
const loginUser = require("../controller/authcontroller").loginUser;
router.post("/register", registerUser);
router.post("/login", loginUser);
module.exports = router;

const User = require("../models/user");
async function registerUser(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("All fields are required");
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(409).send("Email already exists");
  }
  await User.create({
    name,
    email,
    password,
  });

  console.log("User saved successfully");

  res.status(201).send("User Registered");
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and Password are required");
  }

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.status(401).send("Invalid credentials");
  }

  res.send("Login successful");
}

module.exports = {
  registerUser,
  loginUser,
};

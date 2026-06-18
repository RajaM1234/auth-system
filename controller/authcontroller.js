const users = [];

function registerUser(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("All fields are required");
  }

  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return res.status(409).send("Email already exists");
  }

  users.push({
    name,
    email,
    password,
  });

  console.log(users);

  res.status(201).send("User Registered");
}

function loginUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and Password are required");
  }

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).send("Invalid credentials");
  }

  res.send("Login successful");
}

module.exports = {
  registerUser,
  loginUser,
};

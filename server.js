const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.get("/users", (req, res) => {
  res.send("Users endpoint");
});
app.get("/login", (req, res) => {
  res.send("Login endpoint");
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.send("OK");
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

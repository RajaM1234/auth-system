const express = require("express");
const app = express();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authroutes");

app.use(express.json());
app.use(authRoutes);

connectDB();

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

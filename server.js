const express = require("express");
const app = express();
const authroutes = require("./routes/authroutes");
app.use(express.json());
app.use(authroutes);
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

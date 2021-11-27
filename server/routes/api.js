const app = require("express").Router();
const auth = require("./api/auth");

app.get("/", (req, res) => {
  res.json("API Route!");
});
app.use("/auth", auth);

module.exports = app;

const app = require("express").Router();

app.get("/", (req, res) => {
  res.json("API Server Running!");
});

module.exports = app;

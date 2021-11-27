const app = require("express").Router();

app.get("/", (req, res) => {
  res.json("API Route!");
});

module.exports = app;

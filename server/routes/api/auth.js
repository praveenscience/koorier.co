const app = require("express").Router();

app.get("/", (req, res) => {
  res.json("Tell if it's auth'd");
});

module.exports = app;

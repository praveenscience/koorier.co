const app = require("express").Router();

app.get("/", (req, res) => {
  res.json("Tell if it's auth'd");
});
app.post("/", (req, res) => {
  res.json("Call the login function");
});
app.put("/", (req, res) => {
  res.json("Call the register function");
});
app.delete("/", (req, res) => {
  res.json("Call the logout function");
});

module.exports = app;

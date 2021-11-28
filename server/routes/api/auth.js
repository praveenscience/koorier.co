const app = require("express").Router();

app.get("/", (req, res) => {
  if (req.session.User) {
    res.json({
      Error: false,
      Message: req.session
    });
  } else {
    res.status(403).json({
      Error: true,
      Message: "User not logged in."
    });
  }
  res.json("Tell if it's auth'd");
});
app.post("/", (req, res) => {
  res.json("Call the login function");
});
app.put("/", (req, res) => {
  res.json("Call the register function");
});
app.delete("/", (req, res) => {
  req.session.destroy(function () {
    res.status(204).end();
  });
});

module.exports = app;

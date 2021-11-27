const app = require("express").Router();
const api = require("./api");

app.get("/", (req, res) => {
  res.json("API Server Running!");
});
app.use("/api", api);

module.exports = app;

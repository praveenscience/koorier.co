const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.json("API Server Running!");
});

app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 5000;

// Import routes
const root = require("./routes/root");

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", root);

app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const app = express();
const port = 5000;

// Import routes
const root = require("./routes/root");

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const sess = {
  secret: "k00ri3r",
  cookie: {},
  resave: true,
  saveUninitialized: true
};
if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}
app.use(session(sess));

app.use("/", root);

app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});

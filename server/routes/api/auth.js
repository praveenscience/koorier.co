const app = require("express").Router();
const Users = require("../../constants/Users.json");

app.get("/", (req, res) => {
  if (req.session.User) {
    res.json({
      Error: false,
      Message: {
        ...req.session,
        SessionID: req.sessionID
      }
    });
  } else {
    res.status(403).json({
      Error: true,
      Message: "User not logged in."
    });
  }
});
app.post("/", (req, res) => {
  const { Username, Password } = req.body;
  if (!Username || !Password) {
    res.status(400).json({
      Error: true,
      Message: "Need both Username and Password!"
    });
  } else {
    if (typeof Users[Username] === "undefined") {
      res.status(404).json({
        Error: true,
        Message: "User not found!"
      });
    } else {
      if (Users[Username].Password === Password) {
        const User = { Username, ...Users[Username] };
        delete User.Password;
        req.session.User = User;
        res.json({
          Error: false,
          Message: req.session.User
        });
      } else {
        res.status(404).json({
          Error: true,
          Message: "Username and Password Incorrect!"
        });
      }
    }
  }
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

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
          Message: {
            ...req.session,
            SessionID: req.sessionID
          }
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
  const { Username, Password, Fullname, Email } = req.body;
  if (!Username || !Password || !Fullname || !Email) {
    res.status(400).json({
      Error: true,
      Message: "Need all Username, Password, Fullname and Email!"
    });
  } else {
    if (typeof Users[Username] === "undefined") {
      Users[Username] = {
        Password,
        Fullname,
        Email
      };
      res.status(201).json({
        Error: false,
        Message: `User ${Fullname} created with username ${Username}.`
      });
    } else {
      res.status(409).json({
        Error: true,
        Message: "User already exists."
      });
    }
  }
});
app.delete("/", (req, res) => {
  req.session.destroy(function () {
    res.status(204).end();
  });
});

module.exports = app;

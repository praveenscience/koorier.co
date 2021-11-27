const Users = {
  Praveen: {
    Password: "Praveen",
    Fullname: "Praveen Kumar",
    Email: "praveen@koorier.com"
  },
  Koorier: {
    Password: "Koorier",
    Fullname: "Koorier Kumar",
    Email: "koorier@koorier.com"
  }
};
export const LoginUser = (Username, Password) => {
  if (typeof Users[Username] === "undefined") {
    // User doesn't exist.
  } else {
    if (Users[Username].Password === Password) {
      // Correct User & Password
    } else {
      // Correct User but Wrong Password
    }
  }
};

export const RegisterUser = (Username, Password, Fullname, Email) => {
  if (typeof Users[Username] === "undefined") {
    // User doesn't exist.
    Users[Username] = {
      Password,
      Fullname,
      Email
    };
  } else {
    // User is already there!
  }
};

const Users = {
  Praveen: "Praveen",
  Koorier: "Koorier"
};
export const LoginUser = (Username, Password) => {
  if (typeof Users[Username] === "undefined") {
    // User doesn't exist.
  } else {
    if (Users[Username] === Password) {
      // Correct User & Password
    } else {
      // Correct User but Wrong Password
    }
  }
};

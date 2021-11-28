import Axios from "axios";

export const GetCurrentUser = () => Axios.get("/api/auth");

export const LoginUser = (Username, Password) =>
  Axios.post("/api/auth", { Username, Password });

export const RegisterUser = (Username, Password, Fullname, Email) =>
  Axios.put("/api/auth", { Username, Password, Fullname, Email });

export const LogoutUser = () => Axios.delete("/api/auth");

export const CheckUser = Username => Axios.get("/api/auth/" + Username);

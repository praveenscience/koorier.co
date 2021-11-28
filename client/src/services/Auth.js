import Axios from "axios";

export const GetCurrentUser = () => Axios.get("/api/auth");

export const LoginUserService = (Username, Password) =>
  Axios.post("/api/auth", { Username, Password });

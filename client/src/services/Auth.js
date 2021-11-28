import Axios from "axios";

export const LoginUserService = (Username, Password) =>
  Axios.post("/api/auth", { Username, Password });

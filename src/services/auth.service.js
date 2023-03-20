import axios from "../utils/axios";

export const loginUser = (payload) => {
  return axios.post("/api/auth/login", payload);
};

export const registerUser = (payload) => {
  return axios.post("/api/auth/register", payload);
};

export const logout = () => {
  return axios.get("/api/auth/logout");
};

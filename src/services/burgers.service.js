import axios from "../utils/axios";

export const getBurgersList = () => {
  return axios.get("/api/");
};

export const getBurgerById = (id) => {
  return axios.get(`/api/${id}`);
};

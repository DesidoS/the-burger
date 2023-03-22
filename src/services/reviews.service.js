import axios from "../utils/axios";

export const getComments = (id) => {
  return axios.get(`/api/comments/${id}`);
};

export const addComment = ({ id, data }) => {
  return axios.patch(`/api/comments/${id}`, data);
};

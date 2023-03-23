import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_SERVECE_BASE_URL,
});

export default axiosInstance;

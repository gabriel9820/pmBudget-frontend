import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5047/api",
});

/* add accessToken on every request */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("acessToken");

    if (token) {
      if (!config.headers) config.headers = {};
      config.headers["Authorization"] = "Bearer " + token;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

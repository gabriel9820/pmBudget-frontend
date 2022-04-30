import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:7047/api",
});

/* adiciona o accessToken em cada request */
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

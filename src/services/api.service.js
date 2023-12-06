import axios from "axios";
import { getToken } from "./storage.service";

const main = axios.create({
  baseURL: "https://urbanscholaria.my.id/api/",
});

main.interceptors.request.use(
  function (config) {
    const userToken = getToken() || "";

    config.headers = {
      // Accept: "application/json",
      // "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default main;

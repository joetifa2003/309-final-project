import axios from "axios";

const api = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "" : "http://localhost:2000",
  timeout: 1000,
  headers: {},
});

export default api;

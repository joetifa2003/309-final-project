import axios from "axios";
import { getApiUrl } from "./getApiUrl";

const api = axios.create({
  baseURL: getApiUrl(),
  timeout: 1000,
  headers: {},
});

export default api;

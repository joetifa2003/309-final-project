import axios from "axios";
import { getApiUrl } from "./getApiUrl";

const api = axios.create({
  baseURL: getApiUrl(),
  timeout: 15000,
  headers: {},
});

export default api;

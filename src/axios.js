import axios from "axios";

export const makeRequest = axios.create({
  // baseURL: "http://localhost:8800/api/",
  baseURL: "https://social-api-wfyk.onrender.com/api/",
  withCredentials: true,
});

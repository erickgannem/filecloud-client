import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3030"
});

export const setAuthorizationToken = token => {
  if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  delete axios.defaults.headers.common["Authorization"];
};

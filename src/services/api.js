import axios from "axios";

export const api = axios.create({
  baseURL: "https://filecloud-server.herokuapp.com"
});

export const setAuthorizationToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

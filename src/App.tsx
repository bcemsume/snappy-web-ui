import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import React from "react";
import "./App.css";
import { LoginRouter } from "./router/LoginRouter";

// axios.defaults.baseURL = "https://snappy-app-api.herokuapp.com/api/";
axios.defaults.baseURL = "http://localhost:4000/api/";

axios.interceptors.request.use(
  (req: AxiosRequestConfig) => {
    req.headers.Authorization = localStorage.getItem("token");
    return req;
  },
  (err) => {
    return err.response;
  }
);

axios.interceptors.response.use(
  (req: AxiosResponse) => {
    return req;
  },
  (err) => {
    return err.response;
  }
);

function App() {
  return <LoginRouter children={null} />;
}

export default App;

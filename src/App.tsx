import React from "react";
import "./App.css";
import { LoginRouter } from "./router/LoginRouter";

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:4000/api/";

axios.interceptors.request.use(
  (req: AxiosRequestConfig) => {
    req.headers.Authorization = localStorage.getItem("token");
    return req;
  },
  (err) => {
    return {
      message: err.response,
      data: null,
      isSuccess: false,
    };
  }
);

axios.interceptors.response.use(
  (req: AxiosResponse) => {
    return req;
  },
  (err) => {
    return {
      message: err.response,
      data: null,
      isSuccess: false,
    };
  }
);

function App() {
  return <LoginRouter children={null} />;
}

export default App;

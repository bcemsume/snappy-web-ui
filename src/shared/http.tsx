import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const http = axios.create({
  baseURL: "http://localhost:4000/api/",
  responseType: "json",
});

axios.interceptors.request.use(
  (req: AxiosRequestConfig) => {
    req.headers.Authorization = "asdasd";
    return req;
  },
  (err) => {
    return err.response;
  }
);

axios.interceptors.response.use(
  (req: AxiosResponse) => {
    req.headers.Authorization = "asdasd";
    return req;
  },
  (err) => {
    return err.response;
  }
);

export default http;

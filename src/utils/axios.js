import axios from 'axios';

const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
  timeout: 5000
});
// 请求拦截器
http.interceptors.request.use(
  (config) => {
    // 提供了每次请求发出之前的修改机会
    return config;
  },
  () => {}
);
// 响应拦截器
http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  () => {}
);

export default http;

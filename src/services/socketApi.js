import axios from 'axios';

const socketApi = axios.create({
  baseURL: 'http://192.168.0.132:7070/api',
});

socketApi.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    console.warn(error);
    return Promise.reject(error);
  }
);

export default socketApi;

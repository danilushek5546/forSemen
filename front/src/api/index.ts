import axios from 'axios';

import { config } from '../config';

const host = axios.create({
  baseURL: config.apiURL,
});

host.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
);

export default host;
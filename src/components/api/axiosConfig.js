
// axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true, // ✅ crucial for cookie-based auth
});

export default axiosInstance;
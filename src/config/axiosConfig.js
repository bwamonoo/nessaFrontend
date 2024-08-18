import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: ' https://f8fe-102-176-101-48.ngrok-free.app',
  withCredentials: true,
});

export default axiosInstance;

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://d9e3-102-176-65-170.ngrok-free.app',
  withCredentials: true,
});

export default axiosInstance;

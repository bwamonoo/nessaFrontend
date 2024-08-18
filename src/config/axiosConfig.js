import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://787b-102-176-65-211.ngrok-free.app',
  withCredentials: true,
});

export default axiosInstance;

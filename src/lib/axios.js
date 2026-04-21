import axios from 'axios';

export const axiosInstance = axios.create({
  // uncomment before deployment
  // baseURL: 'https://ecommerce-backend-complete-code-c5ak.onrender.com/api/v1',

  // comment before deployment
  baseURL: import.meta.env.MODE === 'development' ? 'http://localhost:4000/api/v1' : '/',
  withCredentials: true,
});

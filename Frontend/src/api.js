import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/products', // Adjust if your backend is on a different port or URL
});

export default api;

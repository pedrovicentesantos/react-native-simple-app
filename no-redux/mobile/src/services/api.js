import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/eduardobvale/demo/rentals',
});

export default api;
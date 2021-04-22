import axios from 'axios'
const api = axios.create({
  baseURL: 'https://idsgeo.com/job/'
});
export default api;

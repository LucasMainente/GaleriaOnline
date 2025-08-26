import axios from "axios";

const apiPorta = '7023'

const apiLocal = `https://localhost:${apiPorta}/api`

const api = axios.create({
  baseURL: apiLocal,
});
export default api;
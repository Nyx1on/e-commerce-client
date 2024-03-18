import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  timeout: 20000,
  withCredentials: false,
});

const get = instance.get;

const post = instance.post;

const apiClient = { get, post };

export default apiClient;

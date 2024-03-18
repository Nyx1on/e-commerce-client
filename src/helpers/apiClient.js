import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  withCredentials: false,
});

const get = instance.get;

const post = instance.post;

const apiClient = { get, post };

export default apiClient;

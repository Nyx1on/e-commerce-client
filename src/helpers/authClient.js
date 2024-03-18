import { instance } from "./apiClient";

const storeTokenLocally = (token) => {
  localStorage.setItem("token", token);
};

const setAuthToken = (token) => {
  if (token) {
    instance.defaults.headers.common["Authorization"] = `${token}`;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
};

const authClient = { storeTokenLocally, setAuthToken };

export default authClient;

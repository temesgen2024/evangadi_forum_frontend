import axios from "axios";
const axiosBase = axios.create({
  // baseURL: "http://localhost:5500/api",
  baseURL:"https://evangadi-forum-backend-zg0r.onrender.com/api"
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosBase;

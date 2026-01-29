import axios from "axios";

const API = axios.create({
  baseURL: "https://age-calculater-backend.onrender.com",
});

export default API;

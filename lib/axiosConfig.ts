import axios from "axios";
import { getAuthToken } from "./auth";

const API_BASE_URL = "https://tradesphere-u7ys.onrender.com/api"; // Spring Boot backend (Now deployed on render)

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
});

axiosInstance.interceptors.request.use((config) => {
    const token = getAuthToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;
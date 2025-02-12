import axiosInstance from "../axiosConfig";
import { setAuthToken } from "../auth";

export const login = async (email: string, password: string) => {
    try {
        const response = await axiosInstance.post("/auth/login", { email, password });
        const { token } = response.data;
        setAuthToken(token); // Store token for future requests
        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};

export const register = async (name: string, email: string, password: string) => {
    try {
        const response = await axiosInstance.post("/auth/register", { name, email, password });
        return response.data;
    } catch (error) {
        console.error("Registration failed:", error);
        throw error;
    }
};
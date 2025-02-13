import axiosInstance from "../axiosConfig";
import { setAuthToken } from "../auth";

export const login = async (email: string, password: string) => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    try {
        const response = await axiosInstance.post("/auth/login", { email: trimmedEmail, passwordHash: trimmedPassword });
        const { token } = response.data;
        setAuthToken(token);
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
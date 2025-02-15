import axiosInstance from "../axiosConfig";
import { setAuthToken } from "../auth";

let isLoggingin = false;

export const login = async (email: string, password: string) => {

    if (isLoggingin) return;
    isLoggingin = true;
    
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

export const register = async (name: string, email: string, password: string, role: string, company: string, location: string, tradeInterests: string[]) => {
    
    const trimmedEmail = email.trim();
    const trimmedName = name.trim();
    const trimmedPassword = password.trim();
    const trimmedRole = role.trim();
    const trimmedLocation = location.trim();
    const trimmedCompany = company.trim();
    
    try {
        const response = await axiosInstance.post("/users/create_user", { 
            name: trimmedName, 
            email: trimmedEmail, 
            passwordHash: trimmedPassword, 
            role: trimmedRole, 
            company: trimmedCompany,
            location: trimmedLocation,
            tradeInterests: tradeInterests
        });
        return response.data;
    } catch (error) {
        console.error("Registration failed:", error);
        throw error;
    }
};
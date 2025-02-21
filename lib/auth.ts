export const setAuthToken = (token: string) => {
    localStorage.setItem("authToken", token);
};

export const getAuthToken = () => {
    if (typeof window === "undefined") {
        console.log("localStorage is unavailable (running on server)");
        return null;
    }
    
    const token = localStorage.getItem("authToken");
    console.log("Retrieved token:", token);
    return token;
};


export const removeAuthToken = () => {
    localStorage.removeItem("authToken");
};
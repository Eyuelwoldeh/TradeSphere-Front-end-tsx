export const setAuthToken = (token: string) => {
    localStorage.setItem("authToken", token);
};

export const getAuthToken = () => {
    if (typeof window !== "undefined") { // Ensure it's running in the browser
        console.log(localStorage.getItem("authToken"));
        return localStorage.getItem("authToken");
    }
    return null;
};

export const removeAuthToken = () => {
    localStorage.removeItem("authToken");
};
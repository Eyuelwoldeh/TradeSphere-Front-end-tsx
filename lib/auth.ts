export const setAuthToken = (token: string) => {
    localStorage.setItem("authToken", token);
};

export const getAuthToken = () => {
    console.log(localStorage.getItem("authToken"));
    return localStorage.getItem("authToken");
};

export const removeAuthToken = () => {
    localStorage.removeItem("authToken");
};
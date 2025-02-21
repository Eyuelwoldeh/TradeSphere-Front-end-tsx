import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getAuthToken } from "../auth";

export const useAuth = () => {
    const router = useRouter();

    useEffect(() => {
        const token = getAuthToken();
        if (!token) {
            router.push("/signin"); // Redirect to login if no token
        }
        else {
            console.log(token);
        }
    }, []);
};
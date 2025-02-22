import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAuthToken } from "../auth";

export const useAuth = (redirectUnauthorized = true) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(!!getAuthToken());

  useEffect(() => {
    // Function to check token validity
    const checkAuth = () => {
      const token = getAuthToken();
      const isValid = !!token;
      
      setIsAuthenticated(isValid);
      
      // Only redirect if we should and the user isn't authenticated
      if (redirectUnauthorized && !isValid) {
        router.push("/signin");
      }
    };
    
    // Check immediately on component mount
    checkAuth();
    
    // Set up periodic checks every 5 seconds
    const interval = setInterval(checkAuth, 50);
    
    // Clean up interval when component unmounts
    return () => clearInterval(interval);
  }, [router, redirectUnauthorized]);

  return { isAuthenticated };
};
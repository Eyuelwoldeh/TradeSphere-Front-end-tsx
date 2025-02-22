import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAuthToken } from "../auth";

export const useAuth = (redirectUnauthorized = true) => {
  const router = useRouter();
  // Initialize with null to represent "loading" state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      const token = getAuthToken();
      const isValid = !!token;
      
      setIsAuthenticated(isValid);
      
      if (redirectUnauthorized && !isValid) {
        router.push("/signin");
      }
    };
    
    checkAuth();
    
    const interval = setInterval(checkAuth, 50);
    
    return () => clearInterval(interval);
  }, [router, redirectUnauthorized]);

  return { isAuthenticated, isLoading: isAuthenticated === null };
};
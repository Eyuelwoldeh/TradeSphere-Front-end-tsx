"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { removeAuthToken } from "@/lib/auth";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedValue = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedValue === "true");

    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleSignOut = () => {
    removeAuthToken();
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("storage"));
    router.push("/");
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-700 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="/contribs" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </Link>
            {isLoggedIn && (
              <Link href="/profile" className="text-gray-700 hover:text-gray-900 transition-colors">
                Profile
              </Link>
            )}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <button
                onClick={handleSignOut}
                className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link href="/signin" className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  Sign In
                </Link>
                <Link href="/signup" className="px-4 py-2 text-sm bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

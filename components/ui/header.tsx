"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-sm">
      <div className="mx-auto w-full px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Site branding */}
          <div className="flex shrink-0 items-center">
            <Logo />
          </div>

          {/* Navigation links */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-150 text-sm font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-300 hover:text-white transition-colors duration-150 text-sm font-medium"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/contribs"
                  className="text-gray-300 hover:text-white transition-colors duration-150 text-sm font-medium"
                >
                  How to Contribute?
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <div className="flex items-center gap-4">
            <Link
              href="/signin"
              className="hidden md:inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors duration-150"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
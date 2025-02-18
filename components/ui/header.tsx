"use client";

import Link from "next/link";
import Logo from "./logo";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import clsx from 'clsx';
import { Fragment } from "react";

export default function Header() {
  const links = [
    { href: '/settings', label: 'Settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    {href: '/signup', label: 'Register'}
  ];

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-sm">
      <div className="mx-auto w-full px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Site branding */}
          <div className="flex shrink-0 items-center mr-10">
            <Logo />
          </div>

          {/* Navigation links */}
          <nav className="hidden md:flex flex-1 justify-left gap-4">
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white hover:underline transition-colors duration-150 text-sm font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-300 hover:text-white hover:underline transition-colors duration-150 text-sm font-medium"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/contribs"
                  className="text-gray-300 hover:text-white hover:underline transition-colors duration-150 text-sm font-medium"
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
              className="hidden md:inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:underline transition-colors duration-150"
            >
              Sign In
            </Link>
            <Menu as="div" className="relative">
              <MenuButton className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors duration-150">
                {({ open }) => (
                  <>
                    My Account
                    <ChevronDown
                      className={clsx(
                        "ml-2 h-4 w-4 transition-transform duration-200",
                        open && "rotate-180"
                      )}
                    />
                  </>
                )}
              </MenuButton>
              <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {links.map((link) => (
                  <MenuItem key={link.href}>
                    {({ active }) => (
                      <Link
                        href={link.href}
                        className={clsx(
                          'block px-4 py-2 text-sm text-gray-700',
                          active && 'bg-gray-200'
                        )}
                      >
                        {link.label}
                      </Link>
                    )}
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
}
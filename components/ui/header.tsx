"use client";
import Link from "next/link";
import Logo from "./logo";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDown, LayoutGrid } from "lucide-react";
import clsx from 'clsx';
import { getAuthToken } from "@/lib/auth";


export default function Header({ isLoggedIn = false }) {
  const links = [
    { href: '/settings', label: 'Settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
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

          {/* Desktop auth links */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                {/* Dashboard navigation */}
                <Menu as="div" className="relative mr-2">
                  <MenuButton className="inline-flex items-center justify-center rounded-lg p-2 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-150">
                    <LayoutGrid className="h-5 w-5" />
                  </MenuButton>
                  <MenuItems className="absolute right-0 mt-2 w-60 origin-top-right rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="grid grid-cols-3 gap-1 p-2">
                      {[
                        { href: '/dashboard', label: 'Dashboard', icon: 'LayoutGrid' },
                        { href: '/projects', label: 'Projects', icon: 'Folder' },
                        { href: '/analytics', label: 'Analytics', icon: 'BarChart' },
                        { href: '/messages', label: 'Messages', icon: 'MessageSquare' },
                        { href: '/calendar', label: 'Calendar', icon: 'Calendar' },
                        { href: '/files', label: 'Files', icon: 'FileText' },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-100 text-gray-700"
                        >
                          <div className="w-8 h-8 mb-1 flex items-center justify-center rounded-md bg-indigo-100 text-indigo-600">
                            <LayoutGrid className="h-4 w-4" />
                          </div>
                          <span className="text-xs">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </MenuItems>
                </Menu>

                {/* Account dropdown */}
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
                    <MenuItem>
                      {({ active }) => (
                        <button
                          className={clsx(
                            'block w-full text-left px-4 py-2 text-sm text-red-600',
                            active && 'bg-gray-200'
                          )}
                        >
                          Sign Out
                        </button>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="hidden md:inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:underline transition-colors duration-150"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors duration-150"
                >
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
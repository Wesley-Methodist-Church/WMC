/**
 * Import Modules
 */
"use client";

/**
 * Import React and Next.js
 */
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Navbar Components
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (href) => pathname === href;

  return (
    <div className="fixed top-0 left-0 right-0 z-10 text-white navbar bg-zinc-900">
      <div className="navbar-start">
        <Link href="/" className="text-xl btn btn-ghost">
          daisyUI
        </Link>
      </div>

      <div className="navbar-end">
        <ul className="hidden px-1 menu menu-horizontal md:flex">
          <li>
            <Link
              href="/"
              className={`${
                isActive("/") ? "bg-red-600 text-white" : ""
              } hover:bg-red-600`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/activities"
              className={`${
                isActive("/activities") ? "bg-red-600" : ""
              } hover:bg-red-600`}
            >
              Activities
            </Link>
          </li>
          <li>
            <Link
              href="/committee"
              className={`${
                isActive("/committee") ? "bg-red-600" : ""
              } hover:bg-red-600`}
            >
              Committee
            </Link>
          </li>
          <li>
            <Link
              href="/donation"
              className={`${
                isActive("/donation") ? "bg-red-600" : ""
              } hover:bg-red-600`}
            >
              Donation
            </Link>
          </li>
        </ul>

        <div className="dropdown" onClick={handleToggle}>
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-zinc-900 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow right-0"
            >
              <li>
                <Link
                  href="/"
                  className={`${
                    isActive("/") ? "bg-red-600 text-white" : ""
                  } hover:bg-red-600`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className={`${
                    isActive("/activities") ? "bg-red-600" : ""
                  } hover:bg-red-600`}
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  href="/committee"
                  className={`${
                    isActive("/committee") ? "bg-red-600" : ""
                  } hover:bg-red-600`}
                >
                  Committee
                </Link>
              </li>
              <li>
                <Link
                  href="/donation"
                  className={`${
                    isActive("/donation") ? "bg-red-600" : ""
                  } hover:bg-red-600`}
                >
                  Donation
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

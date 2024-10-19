// using 'use client' to enable client-side rendering for stateful components
"use client";

// import modules
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// navigation bar component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10 text-white navbar bg-zinc-900 py-4">
      <div className="navbar-start">
        <Link href="/" className="text-xl btn btn-ghost">
          <Image src={`./logo.svg`} alt="logo" height={50} width={130} />
        </Link>
      </div>

      <div className="navbar-end md:mr-8">
        <ul className="hidden gap-12 px-1 md:flex">
          <li>
            <Link href="/" className="flex flex-col items-center">
              Home
              {pathname === "/" && (
                <div className="w-12 border border-slate-400"></div>
              )}
            </Link>
          </li>
          <li>
            <Link href="/Activities">
              Activities
              {pathname === "/Activities" && (
                <div className="w-16 border border-slate-400"></div>
              )}
            </Link>
          </li>
          <li>
            <Link href="/Committee">
              Committee
              {pathname === "/Committee" && (
                <div className="border border-slate-400 w-22"></div>
              )}
            </Link>
          </li>
          <li>
            <Link href="/Donation">
              Donation
              {pathname === "/Donation" && (
                <div className="border border-slate-400 w-18"></div>
              )}
            </Link>
          </li>
        </ul>

        {/* Mobile Version */}
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
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Activities">Activities</Link>
              </li>
              <li>
                <Link href="/Committee">Committee</Link>
              </li>
              <li>
                <Link href="/Donation">Donation</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

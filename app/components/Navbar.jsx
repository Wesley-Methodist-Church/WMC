// import modules
"use client";

import React, { useState } from 'react';
import Link from 'next/link'

// navbar component
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true); // State to manage dropdown visibility

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="navbar bg-zinc-900 text-white fixed top-0 left-0 right-0 z-10">
            <div className="navbar-start">
                <Link href="/" className="btn btn-ghost text-xl">daisyUI</Link>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 hidden md:flex">
                    <li>
                        <Link href="/" className='active:bg-blue-600'>Home</Link>
                    </li>
                    <li>
                        <Link href="/">Activities</Link>
                    </li>
                    <li>
                        <Link href="/">Committee</Link>
                    </li>
                    <li>
                        <Link href="/">Donation</Link>
                    </li>
                </ul>
                <div 
                    className="dropdown" 
                    onClick={handleToggle}
                >
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
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
                        <Link href="/">Activities</Link>
                    </li>
                    <li>
                        <Link href="/">Committee</Link>
                    </li>
                    <li>
                        <Link href="/">Donation</Link>
                    </li>
                </ul>
            )}
                </div>
            </div>
        </div>
    )
}

export default Navbar

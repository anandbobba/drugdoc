import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { navItems } from "../contents/index";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 shadow-lg">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="text-white font-bold text-2xl font-sans">
                    <NavLink to="/" className="hover:text-aqua-300">DRUG DOC</NavLink>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-white font-sans font-semibold">
                    {navItems.map((item, index) => (
                        <li key={index} className="relative group">
                            <NavLink
                                to={item.href}
                                className="px-4 py-2 rounded-md transition-colors duration-200 hover:bg-aqua-300"
                                activeclassname="bg-aqua-500"
                            >
                                {item.label}
                            </NavLink>
                            {/* Dropdown menu for Consultation */}
                            {item.items && (
                                <ul className="absolute left-0 hidden bg-white text-black group-hover:block shadow-md mt-2 rounded-md z-10">
                                    {item.items.map((subItem, idx) => (
                                        <li key={idx} className="px-4 py-2 hover:bg-cyan-200 font-semibold">
                                            <NavLink
                                                to={subItem.href}
                                                className="block font-sans"
                                                activeclassname="bg-aqua-500"
                                            >
                                                {subItem.label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-4">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="font-semibold font-sans">
                                <NavLink
                                    to={item.href}
                                    className="block px-4 py-2 rounded-md transition-colors duration-200 hover:bg-aqua-300"
                                    activeclassname="bg-aqua-500"
                                >
                                    {item.label}
                                </NavLink>
                                {/* Dropdown for mobile */}
                                {item.items && (
                                    <ul className="text-left ml-4 mt-2 bg-cyan-600 rounded-md font-sans font-semibold">
                                        {item.items.map((subItem, idx) => (
                                            <li key={idx}>
                                                <NavLink
                                                    to={subItem.href}
                                                    className="block px-4 py-2 rounded-md hover:bg-cyan-300"
                                                    activeclassname="bg-aqua-500"
                                                >
                                                    {subItem.label}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

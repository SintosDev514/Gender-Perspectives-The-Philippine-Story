import React, { useState } from "react";
import logo from "../assets/imges/logs.png";
import "../assets/Style/NavStyle.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="holder bg-white text-black  w-full h-auto p-3 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-10">
          <a href="/" className="hover:text-gray-400 transition duration-300">
            Home
          </a>
          <a
            href="/about"
            className="hover:text-gray-400 transition duration-300"
          >
            About
          </a>
          <a
            href="/research"
            className="hover:text-gray-400 transition duration-300"
          >
            Research
          </a>
          <a
            href="/contact"
            className="hover:text-gray-400 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-200 bg-opacity-10 text-black  space-y-4 px-6 py-4">
          <a
            href="/"
            className="block hover:text-black transition duration-300"
          >
            Home
          </a>
          <a
            href="/about"
            className="block hover:text-gray-400 transition duration-300"
          >
            About
          </a>
          <a
            href="/research"
            className="block hover:text-gray-400 transition duration-300"
          >
            Research
          </a>
          <a
            href="/contact"
            className="block hover:text-gray-400 transition duration-300"
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}

export default Nav;

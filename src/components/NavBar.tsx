// src/components/NavBar.jsx
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Function to handle the hash change
    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#home"); // Default to #home if no hash is present
    };

    // Set the initial active section on component mount
    handleHashChange();

    // Listen for hash changes in the URL
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav className="bg-[#1f2937] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-400 flex-shrink-0">
          <img
            src="/src/assets/logoDevEngine.png"
            alt="Logo"
            className="inline-block w-8 h-8 mr-2"
          />
          <span className="text-lg text-gray-400">EquipLink</span>
        </div>

        {/* Centered Links for large screens */}
        <div className="hidden md:flex space-x-6 justify-center w-full">
          <a
            href="#hero"
            className={`cursor-pointer hover:text-blue-400 ${
              activeSection === "#hero" ? "text-blue-400" : ""
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`cursor-pointer hover:text-blue-400 ${
              activeSection === "#about" ? "text-blue-400" : ""
            }`}
          >
            About Us
          </a>
          <a
            href="#featured"
            className={`cursor-pointer hover:text-blue-400 ${
              activeSection === "#featured" ? "text-blue-400" : ""
            }`}
          >
            Featured
          </a>
          <a
            href="#testimonials"
            className={`cursor-pointer hover:text-blue-400 ${
              activeSection === "#testimonials" ? "text-blue-400" : ""
            }`}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className={`cursor-pointer hover:text-blue-400 ${
              activeSection === "#contact" ? "text-blue-400" : ""
            }`}
          >
            Contact Us
          </a>
        </div>

        {/* Login Button */}
        <div className="hidden md:flex">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-full transition-transform transform hover:scale-105">
            Login
          </button>
        </div>

        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <button className="focus:outline-none">
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
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-[#1f2937] text-white px-6 py-4">
        <a
          href="#hero"
          className={`block py-2 cursor-pointer hover:text-blue-400 ${
            activeSection === "#hero" ? "text-blue-400" : ""
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`block py-2 cursor-pointer hover:text-blue-400 ${
            activeSection === "#about" ? "text-blue-400" : ""
          }`}
        >
          About Us
        </a>
        <a
          href="#featured"
          className={`block py-2 cursor-pointer hover:text-blue-400 ${
            activeSection === "#featured" ? "text-blue-400" : ""
          }`}
        >
          Featured
        </a>
        <a
          href="#testimonials"
          className={`block py-2 cursor-pointer hover:text-blue-400 ${
            activeSection === "#testimonials" ? "text-blue-400" : ""
          }`}
        >
          Testimonials
        </a>
        <a
          href="#contact"
          className={`block py-2 cursor-pointer hover:text-blue-400 ${
            activeSection === "#contact" ? "text-blue-400" : ""
          }`}
        >
          Contact Us
        </a>
        <button className="block bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-full mt-4 w-full">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

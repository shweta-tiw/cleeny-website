import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/images/fav-icon/logo.png";

const ComponentNavbar = () => {
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-[#021233] text-white text-xs sm:text-sm flex flex-col sm:flex-row justify-between px-4 sm:px-6 md:px-20 py-2 sm:py-3">
        <p className="flex items-center justify-center sm:justify-start text-sm sm:text-base mb-1 sm:mb-0">
          👋 Welcome to Cleeny Cleaning Service
        </p>
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-1 sm:gap-2">
          <a
            href="#"
            className="p-1 sm:p-2 bg-blue-800 hover:text-yellow-400 flex items-center justify-center"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="p-1 sm:p-2 bg-cyan-600 hover:text-yellow-400 flex items-center justify-center"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="p-1 sm:p-2 bg-sky-800 hover:text-yellow-400 flex items-center justify-center"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="p-1 sm:p-2 bg-red-600 hover:text-yellow-400 flex items-center justify-center"
          >
            <FaPinterestP />
          </a>
          <span className="flex items-center gap-1 sm:gap-2 font-bold mt-1 sm:mt-0">
            <FaPhoneAlt className="bg-white text-blue-500 h-4 w-4 sm:h-5 sm:w-5 p-1 rounded" />
            Call: +980 234 4567
          </span>
        </div>
      </div>

      <header className="bg-white flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-20 py-3 sm:py-4 shadow">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <img
            src={Logo}
            alt="Cleeny Logo"
            className="w-36 sm:w-40 md:w-45 h-12 sm:h-14 md:h-16 object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-6 text-blue-900 font-medium text-sm sm:text-base">
          <span className="flex items-center gap-1">
            <FaPhoneAlt /> +123 (4567) 890
          </span>
          <span className="flex items-center gap-1">
            <FaEnvelope /> example@gmail.com
          </span>
          <span className="flex items-center gap-1">
            <FaClock /> Mon – Fri 9am to 5pm
          </span>
        </div>
      </header>

      <div className="relative">
        <nav className="absolute top-0 left-2 right-2 sm:left-[6%] sm:right-[6%] bg-[#2F6EFF] text-white py-4 sm:py-6 px-4 sm:px-8 md:px-8 shadow-md z-20 rounded-lg">
          <ul className="flex flex-wrap md:flex-nowrap gap-4 sm:gap-6 md:gap-8 font-medium items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li className="relative group">
              <button className="flex items-center gap-1">
                Pages
                <svg
                  className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
              </button>
              <ul className="absolute left-0 top-full mt-2 w-48 sm:w-56 bg-[#1E40AF] text-white rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-xs sm:text-sm">
                <li className="px-4 sm:px-5 py-2 hover:bg-blue-500">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="px-4 sm:px-5 py-2 hover:bg-blue-500">
                  <Link to="/services">Our Service</Link>
                </li>

                <li className="px-4 sm:px-5 py-2 hover:bg-blue-500">
                  <Link to="/blog">Blog Page</Link>
                </li>
                <li className="px-4 sm:px-5 py-2 hover:bg-blue-500">
                  <Link to="#">Testimonial</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li className="ml-auto flex items-center gap-2 sm:gap-4">
              <FaSearch />
              <span className="hidden sm:inline">|</span>
              <button className="px-3 sm:px-5 py-1 sm:py-2 rounded-md text-white hover:text-yellow-300 transition text-xs sm:text-sm">
                Free Appointment →
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ComponentNavbar;

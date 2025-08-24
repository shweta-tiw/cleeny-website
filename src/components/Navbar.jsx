import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/images/fav-icon/logo.png";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-blue-600 text-white text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-2 px-4 md:px-0">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>102/B New Market, Sandigo–USA</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>example@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-6 flex-wrap mt-2 md:mt-0">
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="p-2 bg-blue-800 hover:text-yellow-400 flex items-center justify-center"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 bg-cyan-600 hover:text-yellow-400 flex items-center justify-center"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 bg-sky-800 hover:text-yellow-400 flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="p-2 bg-red-600 hover:text-yellow-400 flex items-center justify-center"
              >
                <FaPinterestP />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>
                Call : <strong>+980 234 4567</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md border-b border-blue-600 relative z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-45 h-16 object-contain" />
          </div>

          <div className="hidden md:flex gap-6 text-blue-900 font-medium items-center">
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
            <Link to="/about" className="hover:text-yellow-500">
              About
            </Link>
            <Link to="/services" className="hover:text-yellow-500">
              Services
            </Link>

            <div className="relative group">
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
              <ul className="absolute left-0 top-full mt-2 w-52 bg-blue-800 text-white rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-sm z-50 list-none">
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
            </div>

            <Link to="/blog" className="hover:text-yellow-500">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-yellow-500">
              Contact
            </Link>
            <FaSearch className="text-gray-500 text-xl cursor-pointer" />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-full font-semibold text-sm ml-4">
              Get Free Quote
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <FaTimes className="text-2xl text-blue-900" />
              ) : (
                <FaBars className="text-2xl text-blue-900" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-blue-50 px-4 py-4">
            <Link to="/" className="block py-2 text-blue-900 font-medium">
              Home
            </Link>
            <Link to="/about" className="block py-2 text-blue-900 font-medium">
              About
            </Link>
            <Link
              to="/services"
              className="block py-2 text-blue-900 font-medium"
            >
              Services
            </Link>
            <Link to="/blog" className="block py-2 text-blue-900 font-medium">
              Blog
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-blue-900 font-medium"
            >
              Contact
            </Link>
            <Link to="/about" className="block py-2 text-blue-900 font-medium">
              Pages
            </Link>
            <button className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-full font-semibold text-sm">
              Get Free Quote
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

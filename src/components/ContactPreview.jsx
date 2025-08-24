import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import centerImg from "../assets/images/subscribe-bg.png";
import logo from "../assets/images/footer-logo.png";
import blogThumb1 from "../assets/images/fav-icon/blog-thumb.png";
import blogThumb2 from "../assets/images/fav-icon/blog-thumb2.png";
import callIcon from "../assets/images/subscribe-icon.png";

const Footer = () => {
  const companyLinks = [
    "Home",
    "About Us",
    "Our Services",
    "Meet Our Team",
    "Latest Blog",
  ];
  const latestBlogs = [
    {
      img: blogThumb1,
      title: "10 Most Popular Clean Tips for Housey",
      date: "Nov 16, 2024",
    },
    {
      img: blogThumb2,
      title: "Floor Cleeny and Washing New...",
      date: "Nov 16, 2024",
    },
  ];

  return (
    <footer className="bg-[#00197E] text-white relative pt-0">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative w-full max-w-7xl mx-auto">
          <img
            src={centerImg}
            alt="Center"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />

          <div className="absolute top-1/2 left-4 sm:left-6 md:left-12 transform -translate-y-1/2 flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-2 sm:py-3 rounded-xl  transition-all duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <img
                src={callIcon}
                alt="Call Icon"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
            <div className="text-left">
              <p className="text-xs sm:text-sm text-black">Call Us Now</p>
              <p className="font-bold text-sm sm:text-base text-black">
                +980 765 (546) 900
              </p>
            </div>
          </div>

          <div className="absolute top-1/2 right-4 sm:right-6 md:right-12 transform -translate-y-1/2 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <p className="font-bold text-lg sm:text-2xl text-white whitespace-nowrap">
              Subscribe Now
            </p>
            <div className="flex w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 sm:py-3 rounded-l text-black bg-white focus:outline-none w-full sm:w-auto"
              />
              <button className="bg-[#00197E] px-4 sm:px-6 py-2 sm:py-3 rounded-r font-semibold hover:bg-yellow-500 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 text-left">
          <div className="text-center sm:text-left">
            <img
              src={logo}
              alt="Cleeny Logo"
              className="mb-4 w-28 sm:w-32 mx-auto sm:mx-0"
            />
            <p className="text-gray-200 mb-4 text-sm sm:text-base">
              Competently repurpose forward conveniently target e-business
              multipurpose clean
            </p>
            <div className="flex justify-center sm:justify-start gap-2 sm:gap-3 mt-2">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-[#00197E] flex items-center justify-center cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    <Icon />
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 cursor-pointer hover:text-yellow-400 transition-all duration-300 text-sm sm:text-base"
                >
                  <FaArrowRight className="text-yellow-400" /> {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Latest Blog</h3>
            <ul className="space-y-3 sm:space-y-4">
              {latestBlogs.map((blog, idx) => (
                <li
                  key={idx}
                  className="flex gap-2 sm:gap-3 cursor-pointer hover:text-yellow-400 transition-all duration-300"
                >
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold text-xs sm:text-sm md:text-base">
                      {blog.title}
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      {blog.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Address</h3>
            <p className="flex items-center gap-2 mb-2 sm:mb-3 text-gray-200 text-sm sm:text-base">
              <FaMapMarkerAlt /> 102/B Philosophy Market Road, California, USA
            </p>
            <h3 className="text-lg font-bold mb-2">Call Us</h3>
            <p className="flex items-center gap-2 mb-2 sm:mb-3 text-gray-200 text-sm sm:text-base">
              <FaPhoneAlt /> +880 123 (4567) 890
            </p>
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <p className="flex items-center gap-2 text-gray-200 text-sm sm:text-base">
              <FaEnvelope /> example@yahoo.com
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-400 pt-4 sm:pt-6 pb-6 text-center text-gray-300 text-xs sm:text-sm md:text-base">
          © Copyright 2024 Cleeny. All rights reserved by{" "}
          <span className="text-yellow-400">Dream IT</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

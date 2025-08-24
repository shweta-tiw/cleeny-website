import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import profileShape from "../assets/images/portfolio-shape-1.png";
import ManImg from "../assets/images/fav-icon/address-thumb.png";

const CallSection = () => {
  return (
    <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-between bg-[#16209E] p-6 sm:p-8 md:p-12 rounded-xl relative overflow-visible">
      <img
        src={profileShape}
        alt="Background"
        className="absolute inset-0 w-full h-full object-contain opacity-20 z-0"
      />

      <div className="text-center md:text-left mb-8 md:mb-0 z-10 md:w-1/2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
          Please Call Us to Take the <br /> Extraordinary Service!
        </h2>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:relative md:top-auto md:left-auto md:translate-x-0 md:translate-y-0 md:mx-0 md:order-2">
        <img
          src={ManImg}
          alt="Person"
          className="w-32 sm:w-40 md:w-52 h-32 sm:h-40 md:h-52 object-contain"
        />
      </div>

      <div className="z-10 mt-6 md:mt-0 md:ml-8">
        <a
          href="tel:1234567890"
          className="flex items-center gap-3 bg-yellow-400 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#2F6EFF] hover:text-white transition-colors duration-300 shadow-lg"
        >
          <FaPhoneAlt className="text-lg sm:text-xl" />
          Call : 123 (4567) 890
        </a>
      </div>
    </div>
  );
};

export default CallSection;

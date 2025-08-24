import React from "react";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import heroThumb from "../assets/images/hero-thumb.png";
import heroBg from "../assets/images/hero-bg.png";
import houseImg from "../assets/images/feature-icon.png";
import windowImg from "../assets/images/feature-icon2.png";
import instrumentImg from "../assets/images/feature-icon3.png";

const Hero = () => {
  const features = [
    {
      img: houseImg,
      title: "House Cleaning",
      desc: "Competently repurpose clean conveniently target",
    },
    {
      img: windowImg,
      title: "Window Cleaning",
      desc: "Competently repurpose clean conveniently target",
    },
    {
      img: instrumentImg,
      title: "Instrument",
      desc: "Competently repurpose clean conveniently target",
    },
  ];

  return (
    <section
      className="relative w-full min-h-[90vh] bg-cover bg-center text-white px-6 sm:px-12 md:px-16 pt-20 pb-40 md:pb-60"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        <div className="max-w-xl space-y-4 sm:space-y-6 text-center md:text-left">
          <p className="text-yellow-400 font-semibold uppercase tracking-wide text-sm sm:text-base">
            Best Cleeny Agency
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            NEED CLEENY? <br />
            <span className="text-yellow-400">CALL US TODAY</span>
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg">
            Need Clean of your home or office? Just Feel Free to Contact us. We
            try to Help you as soon as possible.
          </p>
          <button className="mt-4 bg-yellow-400 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-yellow-300 transition flex items-center gap-2 shadow-md text-sm sm:text-base">
            Get Started Now <FaArrowRight />
          </button>
        </div>

        <div className="relative w-64 sm:w-80 md:w-96 lg:w-[460px] mt-10 md:mt-0 mx-auto md:mx-0">
          <div className="absolute inset-0 rounded-full border-8 sm:border-10 border-white/30 z-0" />
          <div className="absolute inset-2 sm:inset-2.5 rounded-full border-8 sm:border-10 border-blue-600 z-0" />
          <div className="absolute inset-4 sm:inset-5 rounded-full border-8 sm:border-10 border-yellow-400 z-0" />
          <img
            src={heroThumb}
            alt="Cleaner"
            className="relative z-10 w-full rounded-full object-cover"
          />
        </div>
      </div>

      <div className="absolute top-5 sm:top-10 right-4 sm:right-10 bg-white text-blue-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg flex items-center gap-2 sm:gap-3 z-20 text-xs sm:text-sm">
        <FaPhoneAlt className="text-yellow-500 text-base sm:text-lg" />
        <div className="flex flex-col text-xs sm:text-sm">
          <span className="font-semibold">Help Line</span>
          <span className="text-base sm:text-xl font-bold">246900</span>
        </div>
      </div>

      <div className="absolute bottom-[-5rem] left-0 w-full px-4 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#f5f6fa] p-4 sm:p-6 rounded-lg text-left text-black border-b-4 border-transparent hover:border-blue-600 transition-all duration-300 shadow-sm flex items-start gap-3 sm:gap-4"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#0b2b81] mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

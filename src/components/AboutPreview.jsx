import React from "react";
import mainImg from "../assets/images/fav-icon/about-thumb.png";
import { HiOutlinePlay } from "react-icons/hi2";
import trophy from "../assets/images/counter-icon.png";
import AboutShape from "../assets/images/fav-icon/about-shape2.png";

const AboutUs = () => {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-8 md:px-16 relative overflow-hidden">
      <img
        src={AboutShape}
        alt="Decorative Shape"
        className="absolute right-0 top-0 w-16 sm:w-20 md:w-28 opacity-70 animate-spin-slow"
        style={{ transformOrigin: "center" }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center relative">
        <div className="relative w-full">
          <div className="absolute -left-3 -bottom-3 w-full h-full bg-blue-600 rounded-lg -z-10"></div>
          <img
            src={mainImg}
            alt="About Us"
            className="rounded-lg w-full h-auto object-cover shadow-lg"
          />
          <div className="absolute top-1/3 left-3/4 transform -translate-y-1/2 -translate-x-1/2 sm:left-3/4 sm:top-1/3 md:left-[75%] md:top-1/3 z-20">
            <div className="relative">
              <span className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-500 opacity-30 animate-ping"></span>
              <span className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-500 opacity-30 animate-pulse"></span>
              <div className="bg-white p-1 sm:p-2 rounded-full shadow-lg relative z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-600 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <HiOutlinePlay className="text-white text-2xl sm:text-3xl md:text-4xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm sm:text-base text-blue-600 font-semibold uppercase tracking-wide mb-2 sm:mb-3">
            About Us
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-snug mb-4 sm:mb-5">
            Making Your House Clean <br /> Looks Like Brand New
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
            Competently repurpose forward-thinking solutions and benefits
            without goal-oriented ROI. Conveniently target e-business
            opportunities while providing exceptional web services.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            <div className="flex flex-col gap-4 sm:gap-6 flex-1">
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Clean Your Home or Office",
                  "24/7 Emergency Quality Services",
                  "Online Booking System Available",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm sm:text-base text-blue-900 font-medium"
                  >
                    <span className="text-blue-600 text-lg mr-2">✔</span> {item}
                  </li>
                ))}
              </ul>

              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-full transition duration-300 w-max">
                More About Us →
              </button>
            </div>

            <div className="bg-yellow-400 p-6 sm:p-8 md:p-10 rounded-lg text-center shadow-md flex flex-col items-center gap-1 sm:gap-2 w-40 sm:w-48 md:w-52 flex-shrink-0">
              <img
                src={trophy}
                alt="Trophy"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-blue-900">
                12+
              </h3>
              <p className="text-xs sm:text-sm md:text-sm text-blue-900">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

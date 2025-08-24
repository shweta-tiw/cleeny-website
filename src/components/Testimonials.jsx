import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import profile1 from "../assets/images/fav-icon/testi-thumb-2.png";
import profile2 from "../assets/images/fav-icon/testi-thumb.png";
import Quote from "../assets/images/testi-icon.png";
import BgImg from "../assets/images/fav-icon/team-bg.png";
import AboutBg from "../assets/images/about-bg.png";

const testimonials = [
  {
    name: "Jhon D. Alexon",
    designation: "Web Developer",
    service: "Service Quality",
    quote:
      "Competently cultivate worldwide e-tailers through to principles professionally engineer high-payoff deliverables without excet Rapidiously network effective",
    profile: profile1,
  },
  {
    name: "Anjelina Watson",
    designation: "UI/UX Designer",
    service: "Service Quality",
    quote:
      "Competently cultivate worldwide e-tailers through to principles professionally engineer high-payoff deliverables without excet Rapidiously network effective",
    profile: profile2,
  },
  {
    name: "Michael Johnson",
    designation: "Project Manager",
    service: "Customer Support",
    quote:
      "Outstanding service! They delivered on time and exceeded my expectations. Highly recommended!",
    profile: profile1,
  },
  {
    name: "Sophia Lee",
    designation: "Marketing Specialist",
    service: "Service Quality",
    quote:
      "Truly professional team, very supportive and their work speaks for itself. I’ll definitely come back.",
    profile: profile2,
  },
];

const Testimonials = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    if (!isAboutPage) {
      const handleResize = () => {
        if (window.innerWidth < 640) setVisibleCount(1);
        else if (window.innerWidth < 1024) setVisibleCount(2);
        else setVisibleCount(2);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isAboutPage]);

  const maxIndex = testimonials.length - visibleCount;

  const goToIndex = (index) => {
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;
    setCurrentIndex(index);
  };

  const visibleTestimonials = isAboutPage
    ? testimonials.slice(0, 2)
    : testimonials;

  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage: `url(${isAboutPage ? AboutBg : BgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center mb-16 relative z-10">
        <p className="text-yellow-400 font-semibold uppercase mb-3 tracking-wide">
          TESTIMONIALS
        </p>
        <h2
          className={`text-3xl md:text-5xl font-bold ${
            isAboutPage ? "text-blue-900" : "text-white"
          }`}
        >
          Our Customer’s Feedback
        </h2>
      </div>

      <div
        className={`relative z-10 max-w-6xl mx-auto overflow-hidden ${
          !isAboutPage
            ? "flex transition-transform duration-500"
            : "grid grid-cols-1 md:grid-cols-2 gap-6"
        }`}
        style={
          !isAboutPage
            ? {
                transform: `translateX(-${
                  currentIndex * (100 / visibleCount)
                }%)`,
              }
            : {}
        }
      >
        {visibleTestimonials.map((item, idx) => (
          <div
            key={idx}
            className={`relative flex-none rounded-2xl p-10 shadow-lg cursor-pointer overflow-hidden group ${
              isAboutPage ? "bg-white" : "bg-[#072398] text-white"
            }`}
            style={
              !isAboutPage
                ? { width: `${100 / visibleCount}%`, marginRight: "1rem" }
                : {}
            }
          >
            <div className="absolute inset-0 bg-[#2F6EFF] scale-0 group-hover:scale-100 transition-transform duration-500 origin-center z-0"></div>

            <div className="relative z-10">
              <img
                src={Quote}
                alt="quote icon"
                className="absolute top-10 right-10 w-10 h-10 md:w-12 md:h-12 opacity-80"
              />
              <div className="flex items-center mb-6">
                <img
                  src={item.profile}
                  alt={item.name}
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                />
                <div className="ml-4">
                  <div className="flex text-yellow-400 mb-1 gap-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <h3
                    className={`text-xl font-semibold ${
                      isAboutPage ? "text-blue-900" : "text-white"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      isAboutPage ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    {item.designation}
                  </p>
                  <h4
                    className={`text-lg font-semibold mb-3 ${
                      isAboutPage ? "text-blue-900" : "text-yellow-400"
                    }`}
                  >
                    {item.service}
                  </h4>
                </div>
              </div>
              <p
                className={`text-base leading-relaxed ${
                  isAboutPage ? "text-gray-700" : "text-gray-200"
                }`}
              >
                “{item.quote}”
              </p>
            </div>
          </div>
        ))}
      </div>

      {!isAboutPage && (
        <div className="mt-8 flex justify-center gap-2 relative z-10">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              onClick={() => goToIndex(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                idx === currentIndex ? "bg-yellow-400" : "bg-white/40"
              }`}
            ></span>
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonials;

import React, { useState, useEffect } from "react";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import portfolioImg1 from "../assets/images/fav-icon/portfolio-img.png";
import portfolioImg2 from "../assets/images/fav-icon/portfolio-img2.png";
import portfolioImg3 from "../assets/images/fav-icon/portfolio-img3.png";

const PortfolioPreview = () => {
  const portfolioData = [
    {
      id: 1,
      location: "San Diego, USA",
      title: "House Floor Cleaning",
      category: "Cleaning",
      img: portfolioImg1,
    },
    {
      id: 2,
      location: "San Diego, USA",
      title: "House Floor Cleaning",
      category: "Cleaning",
      img: portfolioImg2,
    },
    {
      id: 3,
      location: "San Diego, USA",
      title: "House Floor Cleaning",
      category: "Cleaning",
      img: portfolioImg3,
    },
    {
      id: 4,
      location: "San Diego, USA",
      title: "House Floor Cleaning",
      category: "Cleaning",
      img: portfolioImg1,
    },
    {
      id: 5,
      location: "San Diego, USA",
      title: "House Floor Cleaning",
      category: "Cleaning",
      img: portfolioImg2,
    },
    {
      id: 6,
      location: "San Diego, USA",
      title: "House Floor Cleaning",
      category: "Cleaning",
      img: portfolioImg3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = portfolioData.length - visibleCount;
  const goToIndex = (index) =>
    setCurrentIndex(Math.min(Math.max(index, 0), maxIndex));

  return (
    <section className="py-16 bg-[#F3F3F7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-left md:text-left mb-4 md:mb-0">
            <h4 className="text-blue-500 font-semibold uppercase tracking-wide mb-2">
              CLEENY PORTFOLIO
            </h4>
            <h2 className="text-4xl font-bold mb-2">Latest Cleeny Portfolio</h2>
            <p className="text-gray-600">from Work Gallery</p>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {portfolioData.map((item) => (
              <div
                key={item.id}
                className="flex-none relative group h-[320px]"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-bold shadow">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-0 w-full bg-blue-600 px-4 py-4 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 flex justify-between items-start rounded-t-lg">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FaMapMarkerAlt className="text-white text-xs" />
                      <p className="text-xs text-white font-medium">
                        {item.location}
                      </p>
                    </div>
                    <h3 className="text-lg text-white font-semibold">
                      {item.title}
                    </h3>
                  </div>
                  <a
                    href="#"
                    className="bg-yellow-400 p-3 rounded-full flex items-center justify-center shadow-lg hover:scale-110 -rotate-45 transition-transform"
                  >
                    <FaArrowRight className="text-blue-600 text-xl" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToIndex(idx)}
              className={`w-8 h-2 cursor-pointer rounded-full transition-colors duration-300 ${
                idx === currentIndex ? "bg-blue-700" : "bg-blue-200"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;

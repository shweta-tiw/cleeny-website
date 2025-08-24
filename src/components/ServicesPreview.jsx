import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import bubbleBg from "../assets/images/service-shape-1.png";
import serviceImg1 from "../assets/images/fav-icon/service-img.png";
import serviceImg2 from "../assets/images/fav-icon/service-img2.png";
import serviceImg3 from "../assets/images/fav-icon/service-img3.png";

const services = [
  {
    title: "Office Floor Cleaning",
    features: ["House Floor Cleaning", "Roof Clean & Wash"],
    img: serviceImg1,
  },
  {
    title: "House Wash & Clean",
    features: ["House Floor Cleaning", "Roof Clean & Wash"],
    img: serviceImg2,
  },
  {
    title: "House Kitchen Cleaning",
    features: ["House Floor Cleaning", "Roof Clean & Wash"],
    img: serviceImg3,
  },
  {
    title: "Bathroom Deep Cleaning",
    features: ["Tile Cleaning", "Sanitization"],
    img: serviceImg1,
  },
  {
    title: "Window Cleaning",
    features: ["Glass Wash", "Frame Cleaning"],
    img: serviceImg2,
  },
];

const ServicesPreview = () => {
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

  const maxIndex = services.length - visibleCount;
  const goToIndex = (index) =>
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));

  return (
    <section className="relative bg-[#002383] py-20 px-4 md:px-10 text-white overflow-hidden">
      <img
        src={bubbleBg}
        alt="bubble bg"
        className="absolute inset-0 w-full h-full object-contain opacity-20"
      />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h5 className="text-yellow-400 font-semibold mb-2">OUR SERVICES</h5>
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Professional Cleeny Services
        </h2>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex-none bg-white text-black rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
                style={{ width: `${100 / visibleCount}%`, marginRight: "1rem" }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[220px] object-cover"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span className="text-blue-500 font-bold">✔</span>{" "}
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="text-blue-700 font-medium flex items-center gap-2">
                    View Details <FaArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {services.map((_, idx) => (
            <span
              key={idx}
              onClick={() => goToIndex(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                idx === currentIndex ? "bg-yellow-400" : "bg-white/40"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;

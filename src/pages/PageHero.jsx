import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import HeroImg from "../assets/images/fav-icon/breatcome-bg.png";
import Sparkle from "../assets/images/breatcome-shape.png";

const PageHero = ({ title }) => {
  return (
    <section
      className="relative w-full h-[28rem] flex items-center justify-center text-center text-white overflow-hidden md:h-[32rem] lg:h-[36rem]"
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src={Sparkle}
        alt="sparkle"
        className="absolute bottom-[20%] left-[10%] w-24 h-24 md:w-32 md:h-32 animate-float-slow drop-shadow-lg"
      />
      <img
        src={Sparkle}
        alt="sparkle"
        className="absolute top-[25%] right-[15%] w-24 h-24 md:w-32 md:h-32 animate-float-slow"
      />

      <div className="relative z-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
          {title}
        </h1>
        <p className="flex flex-wrap items-center justify-center gap-2 text-gray-200 text-sm sm:text-base md:text-lg">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
          >
            <FaHome className="text-base sm:text-lg text-yellow-500" />
            Cleeny
          </Link>
          <span className="hover:text-yellow-400 transition-colors">→</span>
          <span className="hover:text-yellow-400 transition-colors">
            {title}
          </span>
        </p>
      </div>
    </section>
  );
};

export default PageHero;

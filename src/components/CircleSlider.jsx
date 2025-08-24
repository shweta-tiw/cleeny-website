import React, { useState } from "react";

const CircleSlider = ({ total = 4 }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
      {Array.from({ length: total }, (_, index) => {
        const num = index + 1;
        const formattedNum = num < 10 ? `0${num}` : num;
        return (
          <div
            key={num}
            onClick={() => setActive(num)}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center cursor-pointer text-sm sm:text-lg transition-all duration-300 border-2 border-blue-100 bg-white text-blue-900 hover:bg-blue-900 hover:text-white hover:scale-110 ${
              active === num ? "bg-blue-900 text-white" : ""
            }`}
          >
            {formattedNum}
          </div>
        );
      })}
    </div>
  );
};

export default CircleSlider;

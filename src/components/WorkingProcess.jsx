import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaHandshake, FaCalendarCheck } from "react-icons/fa";
import leftImg from "../assets/images/fav-icon/work-shape3.png";
import rightImg from "../assets/images/fav-icon/work-shape4.png";

const steps = [
  {
    icon: <FaSearch />,
    title: "Find Us Online",
    desc: "Repurpose go forward benefits more conveniently e-business",
    number: "1",
  },
  {
    icon: <FaHandshake />,
    title: "Choose Services",
    desc: "Repurpose go forward benefits more conveniently e-business",
    number: "2",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Book Appointment",
    desc: "Repurpose go forward benefits more conveniently e-business",
    number: "3",
  },
];

const WorkingProcess = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <img
        src={leftImg}
        alt="left decoration"
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-52 animate-slideX"
      />
      <img
        src={rightImg}
        alt="right decoration"
        className="hidden md:block absolute right-1 bottom-[-10px] w-40 animate-floatY"
      />

      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <h5 className="text-blue-600 font-semibold uppercase tracking-wide">
          Working Process
        </h5>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Easy Steps to Works
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Competently repurpose go forward benefits without goal-oriented ROI
          conveniently target e-business opportunities whereas
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <svg
          className="absolute top-5 left-0 w-full h-24 hidden md:block"
          viewBox="0 2 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M150 50 Q250 0 500 25 Q750 70 1000 15"
            stroke="#BFDBFE"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray="5 5"
            strokeLinecap="round"
          />
        </svg>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="relative flex flex-col items-center text-center w-full md:w-1/3 z-10 mt-8 md:mt-0 group"
          >
            <div className="relative w-24 h-24 flex items-center justify-center rounded-3xl bg-white shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] group-hover:bg-blue-600 transition-all duration-300 p-5 cursor-pointer">
              {React.cloneElement(step.icon, {
                className:
                  "text-4xl text-blue-600 group-hover:text-white transition-colors duration-300",
              })}
              <span className="absolute -top-2 -right-2 w-7 h-7 flex items-center justify-center bg-yellow-400 text-sm font-bold text-gray-900 rounded-full shadow">
                {step.number}
              </span>
            </div>

            <h3 className="mt-4 text-lg md:text-xl font-semibold text-gray-900 relative">
              {step.title}
              <span className="block h-1 bg-blue-600 mx-auto mt-1 w-full scale-x-25 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
            </h3>

            <p className="text-gray-500 mt-2 text-sm md:text-base">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;

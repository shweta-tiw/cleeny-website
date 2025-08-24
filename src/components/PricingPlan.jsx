import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const PricingPlan = () => {
  const plans = [
    {
      name: "Starter Plan",
      price: 39,
      features: [
        "15% OFF All Service",
        "Floor Wash & Clean",
        "Maintenance Equipment",
        "Schedule Working",
        "24/7 Support",
      ],
    },
    {
      name: "Standard Plan",
      price: 59,
      features: [
        "20% OFF All Service",
        "Deep Floor Wash",
        "Advanced Equipment",
        "Scheduled Maintenance",
        "Priority Support",
      ],
    },
    {
      name: "Premium Plan",
      price: 99,
      features: [
        "30% OFF All Service",
        "Full Cleaning Package",
        "All Equipment",
        "Priority Scheduling",
        "24/7 Premium Support",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-md uppercase text-blue-600 mb-2">Pricing Plans</p>
        <h2 className="text-5xl font-extrabold mb-12 text-[#00197E]">
          Affordable Pricing Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 rounded-xl shadow-lg p-8 pt-20 transition-all duration-500 hover:bg-blue-600 hover:scale-105 hover:text-white"
            >
              {/* Price Tag */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-10 py-4 rounded shadow-lg text-lg font-bold transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black">
                ${plan.price}
                <span className="block text-sm font-normal">Monthly</span>
              </div>

              {/* Plan Name */}
              <h3 className="absolute top-16 left-0 px-10 py-3 font-bold text-lg shadow-lg bg-white rounded-r-full transition-all duration-300 group-hover:text-black">
                {plan.name}
              </h3>

              {/* Features */}
              <ul className="text-left space-y-3 mb-6 mt-24">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className="text-blue-600 group-hover:text-white" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                aria-label={`Choose ${plan.name}`}
                className="flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-gray-900"
              >
                Choose Plan
                <FaArrowRight className="text-white group-hover:text-gray-900" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;

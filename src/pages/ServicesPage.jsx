import React from "react";
import PageHero from "./PageHero";
import { FaHome, FaBuilding, FaUtensils } from "react-icons/fa";
import img1 from "../assets/images/fav-icon/service-img4.png";
import img2 from "../assets/images/fav-icon/service-img5.png";
import img3 from "../assets/images/fav-icon/service-img6.png";
import img4 from "../assets/images/fav-icon/service-img7.png";
import img5 from "../assets/images/fav-icon/service-img8.png";
import img6 from "../assets/images/fav-icon/service-img9.png";
import CallSection from "../components/CallSection";
import PricingPlan from "../components/PricingPlan";

const ServicesPage = () => {
  const services = [
    {
      title: "House Wash & Clean",
      image: img1,
      icon: <FaHome className="text-white text-xl" />,
    },
    {
      title: "Office Floor Cleaning",
      image: img2,
      icon: <FaBuilding className="text-white text-xl" />,
    },
    {
      title: "Kitchen Cleaning",
      image: img3,
      icon: <FaUtensils className="text-white text-xl" />,
    },
    {
      title: "Glass Cleaning",
      image: img4,
      icon: <FaHome className="text-white text-xl" />,
    },
    {
      title: "Carpet Cleaning",
      image: img5,
      icon: <FaBuilding className="text-white text-xl" />,
    },
    {
      title: "Door Cleaning",
      image: img6,
      icon: <FaUtensils className="text-white text-xl" />,
    },
  ];

  return (
    <>
      <PageHero title="Our Services" extraClass="pt-28 md:pt-32" />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <div className="md:w-1/2">
              <p className="text-sm md:text-md text-blue-500 uppercase mb-2">
                Our Services
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                Professional Cleeny Services
                <br />
                What we Provide
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                Competently repurpose go forward benefits without goal-oriented
                strategies, conveniently targeting e-business opportunities and
                parallel multimedia-based web services.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover sm:h-64 md:h-56 lg:h-64"
                />
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <div className="bg-blue-900 text-white flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer hover:bg-blue-700 transition">
                    <span className="text-sm sm:text-base font-medium">
                      View Details
                    </span>
                    {service.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CallSection />
        <PricingPlan />
      </section>
    </>
  );
};

export default ServicesPage;

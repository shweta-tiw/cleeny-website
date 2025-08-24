import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import BgImg from "../assets/images/fav-icon/team-bg.png";
import Profile from "../assets/images/fav-icon/team-thumb.png";
import Profile2 from "../assets/images/fav-icon/team-thumb2.png";
import Profile3 from "../assets/images/fav-icon/team-thumb3.png";

const TeamSection = () => {
  const team = [
    { name: "Anjelina Watson", role: "House Cleaner", img: Profile },
    { name: "John Doe", role: "Window Cleaner", img: Profile2 },
    { name: "Sophia Lee", role: "Carpet Cleaner", img: Profile3 },
    { name: "Michael Smith", role: "Office Cleaner", img: Profile },
  ];

  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center mb-20 md:mb-40">
        <p className="text-yellow-400 font-medium text-xl">Our Team</p>
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
          Meet Our Expert Members
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-lg p-6 pt-20 text-center transition duration-300 group hover:bg-blue-500"
          >
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
              <div className="w-32 h-32 rounded-full border-4 overflow-hidden shadow-md transition duration-300 border-blue-900 group-hover:border-blue-500">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="relative z-10 mt-16">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 group-hover:text-white transition">
                {member.name}
              </h3>
              <p className="text-gray-500 mb-4 group-hover:text-gray-200 transition">
                {member.role}
              </p>
              <hr className="border-gray-300 my-4 group-hover:border-white transition" />

              <div className="flex justify-center gap-3">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-[#00197D] transition group-hover:bg-white group-hover:text-blue-500"
                    >
                      <Icon />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

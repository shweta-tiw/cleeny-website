import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BlogPreview = ({ posts, limit = 3 }) => {
  if (!posts || posts.length === 0) return null;

  const blogs = limit ? posts.slice(0, limit) : posts;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 sm:mb-12">
          <div className="text-left mb-4 md:mb-0">
            <p className="text-sm sm:text-base text-blue-500 font-semibold mb-2 uppercase">
              LATEST BLOG
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00197E] leading-snug">
              Learn about our Latest <br /> News from Blog
            </h2>
          </div>
          <button className="bg-yellow-400 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-all duration-300">
            View All Blog <FaArrowRight />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((post, index) => {
            let day = "",
              month = "";
            if (post.date.includes(" ")) {
              const parts = post.date.split(" ");
              day = parts[1] ? parts[1].replace(",", "") : "";
              month = parts[0];
            }

            return (
              <div
                key={index}
                className="bg-gray-100 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
              >
                {post.img && (
                  <div className="relative">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-yellow-400 text-black text-center font-bold px-2 sm:px-3 py-1 sm:py-2 rounded-lg shadow-md group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                      <div className="text-base sm:text-lg md:text-xl">
                        {day}
                      </div>
                      <div className="text-xs sm:text-sm md:text-base">
                        {month}
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-blue-500">
                    {post.title}
                  </h3>
                  <p className="text-[#00197E] text-sm sm:text-base mb-3 sm:mb-4 transition-colors duration-300">
                    {post.desc || post.excerpt}
                  </p>
                  <div className="text-blue-900 font-semibold flex items-center gap-1 cursor-pointer text-sm sm:text-base transition-colors duration-300 group-hover:text-blue-500">
                    Read More <FaArrowRight />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;

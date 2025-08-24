import React from "react";
import appointmentThumb from "../assets/images/fav-icon/appointment-thumb.jpg";

const RequestQuote = () => {
  return (
    <section className="relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-2 before:bg-blue-500 before:-z-10 after:absolute after:right-0 after:top-0 after:h-full after:w-2 after:bg-blue-500 after:-z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img
              src={appointmentThumb}
              alt="Appointment"
              className="w-full max-w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute top-4 right-4 md:top-6 md:right-6">
              <button
                className="w-20 h-20 md:w-28 md:h-28 text-white bg-blue-600 flex justify-center items-center relative z-10
                before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border before:border-dashed before:border-white before:rounded-full before:animate-spin"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="border-b-8 border-r-8 border-blue-500 w-full h-full flex flex-col rounded-lg overflow-hidden">
            <h2 className="font-bold text-3xl md:text-4xl mb-8 px-6 pt-6">
              Request A Quote
            </h2>
            <form
              action="#"
              method="post"
              className="flex flex-col gap-6 px-6 pb-6 flex-1"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  required
                  className="border border-gray-300 rounded py-3 px-4 outline-none w-full"
                />
                <input
                  type="text"
                  name="number"
                  placeholder="Your Number"
                  className="border border-gray-300 rounded py-3 px-4 outline-none w-full"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Your E-Mail*"
                  required
                  className="border border-gray-300 rounded py-3 px-4 outline-none w-full"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Your Address"
                  className="border border-gray-300 rounded py-3 px-4 outline-none w-full"
                />
              </div>

              <textarea
                name="message"
                placeholder="Write A Message..."
                className="border border-gray-300 rounded py-3 px-4 outline-none resize-none w-full h-36"
              ></textarea>

              <button
                type="submit"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-full transition-colors duration-300 w-full md:w-auto justify-center"
              >
                Submit Now
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestQuote;

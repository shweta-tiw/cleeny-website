import React from "react";

const MapEmbed = () => {
  return (
    <div className="mt-0 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0863784522853!2d-122.41941508468192!3d37.77492977975966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c3c1f7f%3A0x8c0c2c0b2e1c1d1!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1692967890123!5m2!1sen!2sin"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Our Location"
      ></iframe>
    </div>
  );
};

export default MapEmbed;

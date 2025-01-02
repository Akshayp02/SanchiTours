import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-5 py-10 bg-[#19746B] md:bg-white overflow-hidden">
      {/* Social Media Icons with Vertical Lines */}
      <div className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 z-10 flex flex-col items-center space-y-3">
        {/* Vertical Line Above Icons */}
        <div className="w-px h-8 bg-gray-400"></div>

        {/* Icons */}
        <FaInstagram
          className="text-white md:text-gray-800 hover:text-gray-300 md:hover:text-gray-500 cursor-pointer"
          size={20}
        />
        <FaTwitter
          className="text-white md:text-gray-800 hover:text-gray-300 md:hover:text-gray-500 cursor-pointer"
          size={20}
        />
        <FaFacebookF
          className="text-white md:text-gray-800 hover:text-gray-300 md:hover:text-gray-500 cursor-pointer"
          size={20}
        />

        {/* Vertical Line Below Icons */}
        <div className="w-px h-8 bg-gray-400"></div>
      </div>

      {/* Left Content */}
      <div className="space-y-6 md:space-y-8 max-w-lg z-10 text-center md:text-left md:ml-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white md:text-gray-800 leading-tight">
          Fast And Easy Way <br /> To Rent A Car!
        </h1>
        <p className="text-white text-sm md:text-gray-600">
          "Find your perfect ride with 'Sanchi Car Rentals'. Affordable rates, top-notch service, and a car for every journey. Your adventure starts here!" 
        </p>
        <button className="px-6 py-2 md:px-8 md:py-3 border-2 border-white md:border-black text-white md:text-black rounded hover:bg-gray-800 hover:text-white hover:border-gray-800">
          Book Now
        </button>
      </div>

      {/* Right Content (Image Placeholder) */}
      <div className="mt-10 md:mt-0 z-10">
        {/* Replace this div with your image */}
        <div className="w-60 h-36 md:w-80 md:h-48 bg-gray-300 rounded shadow-lg flex items-center justify-center">
          <span className="text-gray-500">Car Image</span>
        </div>
      </div>

      {/* Background Rectangle */}
      <div
        className="absolute right-0 top-0 h-full w-full md:w-[450px] bg-[#19746B] z-0"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      ></div>
    </section>
  );
};

export default HeroSection;

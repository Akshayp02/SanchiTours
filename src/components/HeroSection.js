import React, { useRef } from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import car_img from "../assets/jeep.png";
import { motion } from "framer-motion";
import HowItWorks from "./HowItWorks";

const HeroSection = () => {
  const howItWorksRef = useRef(null);

  const scrollToHowItWorks = () => {
    if (howItWorksRef.current) {
      howItWorksRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative flex flex-col md:flex-row items-center justify-between px-5 h-auto bg-[#19746B] md:bg-white overflow-hidden">
        {/* Social Media Icons with Vertical Lines (Hidden on small screens) */}
        <div className="hidden md:flex flex-col items-center justify-center space-y-4 md:space-y-6">
          {/* Vertical Line Above Icons */}
          <div className="w-[2px] h-16 bg-gray-400"></div>

          {/* Icons */}
          <FaInstagram
            className="text-white md:text-gray-800 hover:text-gray-300 md:hover:text-button cursor-pointer"
            size={28}
          />
          <FaTwitter
            className="text-white md:text-gray-800 hover:text-gray-300 md:hover:text-button cursor-pointer"
            size={28}
          />
          <FaFacebookF
            className="text-white md:text-gray-800 hover:text-gray-300 md:hover:text-button cursor-pointer"
            size={28}
          />

          {/* Vertical Line Below Icons */}
          <div className="w-[2px] h-16 bg-gray-400"></div>
        </div>

        {/* Left Content */}
        <div className="flex flex-col items-start  justify-center space-y-6 max-w-lg z-10 text-left md:ml-10">
          <motion.h1
            className="text-3xl md:text-4xl text-balance gap-y-2 font-bold text-white md:text-gray-800 leading-tight"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Fast and easy way to rent a Car!
          </motion.h1>
          <p className="text-white text-sm md:text-gray-600">
            "Find your perfect ride with 'Sanchi Car Rentals'. Affordable rates,
            top-notch service, and a car for every journey. Your adventure
            starts here!"
          </p>
          <button
            onClick={scrollToHowItWorks}
            className="px-6 py-2 md:px-8 md:py-3 border-2 border-white md:border-black text-white md:text-black rounded hover:bg-button hover:text-white hover:border-button"
          >
            Book Now
          </button>
        </div>

        {/* Right Content (Car Image) */}
        <div className="flex justify-center md:justify-start items-center mt-10 md:mt-0 z-10 w-full md:w-auto">
          <div className="w-96 h-60 md:w-[600px] md:h-[400px]">
            <img
              src={car_img}
              alt="Car"
              className="w-full h-full object-contain md:ml-[-50px]" 
            />
          </div>
        </div>

        {/* Background Rectangle */}
        <div className="absolute right-0 top-0 h-full w-full md:w-[450px] bg-[#19746B] z-0 clip-path-class"></div>
      </section>

      {/* How It Works Section */}
      <div ref={howItWorksRef}>
        <HowItWorks />
      </div>
    </>
  );
};

export default HeroSection;

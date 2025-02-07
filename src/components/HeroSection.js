import React, { useRef } from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import car_img from "../assets/jeep.png";
import { motion } from "framer-motion";
import HowItWorks from "./HowItWorks";
import Mostpopular from "./Mostpopular";

const HeroSection = () => {
  const howItWorksRef = useRef(null);

  const scrollToHowItWorks = () => {
    if (howItWorksRef.current) {
      howItWorksRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Main Parent Section with Dynamic Background */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-5 h-auto bg-[#19746B] md:bg-white overflow-hidden">

        {/* Rectangle Background for Large Screens */}
        <div className="hidden md:block absolute top-0 right-0 w-[30%] h-full bg-[#19746B]"></div>

        {/* Wrapper for all child elements */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-full">

          {/* Social Media Icons with Vertical Lines (Hidden on small screens) */}
          <div className="hidden md:flex flex-col items-center justify-center bg-transparent space-y-4 md:space-y-6">
            {/* Vertical Line Above Icons */}
            <div className="w-[2px] h-16 bg-gray-400"></div>

          {/* Icons */}
                  <a href="https://www.instagram.com/sanchicarrental?igsh=a2FyNGNjMmN0ajJn" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white md:text-gray-800 hover:text-gray-300 md:hover:text-button cursor-pointer" size={28} />
                  </a>
                  <a href="https://x.com/sanchicarrental" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-white md:text-gray-800 hover:text-gray-300 md:hover:text-button cursor-pointer" size={28} />
                  </a>
                  <a href="https://www.facebook.com/share/15o8FDvByP/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-white md:text-gray-800 hover:text-gray-300 md:hover:text-button cursor-pointer" size={28} />
</a>
                  {/* Vertical Line Below Icons */}
            <div className="w-[2px] h-16 bg-gray-400"></div>
          </div>

          {/* Left Content */}
          <div className="flex flex-col items-start justify-center space-y-6 max-w-lg z-10 text-left md:ml-10">
            <motion.h1
              className="text-3xl md:text-5xl font-bold text-white md:text-gray-800 leading-tight"
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Fast and easy way to rent a Car!
            </motion.h1>
            <p className="text-white text-sm md:text-lg md:text-gray-600">
              "Find your perfect ride with 'Sanchi Car Rentals'. Affordable rates,
              top-notch service, and a car for every journey. Your adventure starts here!"
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
            <div className="h-full w-screen md:w-full md:h-full relative">
              <img
                src={car_img}
                alt="Car"
                className="w-[500px] md:w-[700px] md:h-auto object-contain"
                style={{ background: "transparent" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <div ref={howItWorksRef}>
        <HowItWorks />
        <Mostpopular />
      </div>

      
    </>
    
  );
};

export default HeroSection;

import React, { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import fev_icon from "../assets/sanchi_fev.png";
import InitiateWhatsApp from "../services/initiatewhatsapp";  
import InitiateCall from "../services/initiatecall";  

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWhatsAppClick = () => {
    InitiateWhatsApp.sendMessageToSelf("Akshay from sanchi car rental");
  };

  const handleCallClick = () => {
    InitiateCall.dialNumber(); 
  };

  return (
    <nav className="relative flex justify-between items-center h-[80px] p-5 bg-white z-20">
      <div className="flex items-center z-20">
        <img src={fev_icon} alt="Sanchi Logo" className="h-24 w-auto" />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-6 z-20">
        <a href="#home" className="text-gray-600 text-lg text-justify font-semibold hover:text-button">
          Home
        </a>
        <a href="#info" className="text-gray-600 text-lg text-justify font-semibold hover:text-button">
          Services
        </a>
        <a href="#about" className="text-gray-600 text-lg text-justify font-semibold hover:text-button">
          About us
        </a>
        <a href="#contact" className="text-gray-600 text-lg text-justify font-semibold hover:text-button">
          Contact us
        </a>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center space-x-4 z-20">
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center space-x-2 text-sm px-6 py-2 text-justify border-2 border-gray-900 text-black rounded hover:bg-button hover:border-button hover:text-white"
        >
          <FaWhatsapp className="text-xl text-justify self-auto" />
          <span>WhatsApp</span>
        </button>
        <button
          onClick={handleCallClick}
          className="flex items-center space-x-2 px-6 py-2 text-sm text-justify border-2 border-button bg-button text-black rounded hover:bg-button hover:text-white"
        >
          <FiPhoneCall className="text-sm text-justify" />
          <span>Call us</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center z-20">
        <button onClick={toggleMenu} className="text-button text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation and Buttons */}
      {isMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-lg z-10 p-5">
          <div className="flex flex-col items-center space-y-4">
            <a href="#home" className="text-gray-600 text-sm text-justify  font-semibold hover:text-button">
              Home
            </a>
            <a href="#info" className="text-gray-600 text-sm text-justify font-semibold hover:text-button">
              Services
            </a>
            <a href="#about" className="text-gray-600 text-sm text-justify font-semibold hover:text-button">
              About us
            </a>
            <a href="#contact" className="text-gray-600 text-sm text-justify font-semibold hover:text-button">
              Contact us
            </a>

            <button
              onClick={handleCallClick}
              className="flex items-center space-x-2 px-6 py-2 text-sm text-justify bg-button text-black rounded hover:bg-button hover:border-button hover:text-white"
            >
              <FiPhoneCall className="text-sm text-justify" />
              <span>Call us</span>
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-2 px-6 py-2 text-sm text-justify border-2 border-black text-black rounded hover:bg-button hover:border-button hover:text-white"
            >
              <FaWhatsapp className="text-sm text-justify self-auto" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Right-Side Rectangle */}
      <div
        className="absolute right-0 -top-90 -bottom-0 h-full w-[450px] bg-[#19746B] z-0 hidden md:block"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      ></div>
    </nav>
  );
};

export default Navbar;

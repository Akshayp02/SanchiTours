import React, { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import fev_icon from "../assets/sanchi_fev.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative flex justify-between items-center h-[80px] p-5 bg-white">
      <div className="flex items-center z-20">
        <img src={fev_icon} alt="Sanchi Logo" className="h-24 w-auto" />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-6 z-20">
        <a href="#home" className="text-gray-600 border-l text-lg font-semibold  hover:text-button">
          Home
        </a>
        <a href="#info" className="text-gray-600 text-lg font-semibold hover:text-button">
          Services
        </a>
        <a href="#about" className="text-gray-600 text-lg font-semibold hover:text-button">
          About us
        </a>
        <a href="#contact" className="text-gray-600 text-lg font-semibold hover:text-button">
          Contact us
        </a>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center space-x-4 z-20">
        <button className="flex items-center space-x-2 px-6 py-2 text-lg border-2 border-black text-black rounded hover:bg-button hover:border-button hover:text-white">
          <FaWhatsapp className="text-xl self-auto" />
          <span>WhatsApp</span>
        </button>
        <button className="flex items-center space-x-2 px-6 py-2 text-lg border-2 border-black text-black rounded hover:bg-button hover:border-button hover:text-white">
        <FiPhoneCall className="text-xl" />
        <span>Call Us</span>
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

            <a href="#home" className="text-gray-600 border-l text-lg font-semibold  hover:text-button">
          Home
        </a>
        <a href="#info" className="text-gray-600 text-lg font-semibold hover:text-button">
          Services
        </a>
        <a href="#about" className="text-gray-600 text-lg font-semibold hover:text-button">
          About us
        </a>
        <a href="#contact" className="text-gray-600 text-lg font-semibold hover:text-button">
          Contact us
        </a>

        <button className="flex items-center w-full space-x-2 px-6 py-2 text-lg border-2 border-black text-black rounded hover:bg-button hover:border-button hover:text-white">
          <FaWhatsapp className="text-xl self-auto" />
          <span>WhatsApp</span>
        </button>
        <button className="flex items-center w-full space-x-2 px-6 py-2 text-lg border-2 border-black text-black rounded hover:bg-button hover:border-button hover:text-white">
        <FiPhoneCall className="text-xl" />
        <span>Call Us</span>
        </button>
          </div>
        </div>
      )}

      {/* Right-Side Rectangle */}
      <div
        className="absolute right-0 top-0 h-full w-[450px] bg-[#19746B] z-0 hidden md:block"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      ></div>
    </nav>
  );
};

export default Navbar;

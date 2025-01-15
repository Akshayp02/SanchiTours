import React, { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import fev_icon from "../assets/sanchi_fev.png";
import InitiateWhatsApp from "../services/initiatewhatsapp";
import InitiateCall from "../services/initiatecall";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWhatsAppClick = () => {

    InitiateWhatsApp.sendMessageToSelf(
      "Hey, I want to book a rented car. My details are as follows:\n- Name: [Customer Name]\n- Rental Dates: [Start Date] to [End Date]\n- Preferred Car: [Car Model or Type]\nPlease let me know the next steps."
    );
  };

  const handleCallClick = () => {
    InitiateCall.dialNumber();

    // You can pass customer name if required, e.g., "John Doe"
    InitiateWhatsApp.sendMessageToSelf("Online from sanchi car rental");
  };

  const handleCallClick = () => {
    InitiateCall.dialNumber(); // Trigger the call function

  };

  return (
    <nav className="relative flex justify-between items-center h-[80px] p-5 bg-white z-20">
      {/* Logo */}
      <div className="flex items-center z-20">
        <img
          src={fev_icon}
          alt="Sanchi Logo"
          className="h-16 w-auto cursor-pointer"
          onClick={handleNavigation}
          aria-label="Navigate to Home"
        />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-6 z-20">

        <button
          onClick={handleNavigation}
          className="text-gray-600 text-lg font-semibold hover:text-button"
          aria-label="Navigate to Home"
        >
          Home
        </button>
        <a
          href="#info"
          className="text-gray-600 text-lg font-semibold hover:text-button"
        >
          Services
        </a>
        <a
          href="#about"
          className="text-gray-600 text-lg font-semibold hover:text-button"
        >
          About us
        </a>
        <a
          href="#contact"
          className="text-gray-600 text-lg font-semibold hover:text-button"
        >

        <a href="#home" className="text-gray-600 text-lg font-semibold hover:text-button">
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
        <button
          onClick={handleWhatsAppClick}

          className="bg-green-500 text-white text-sm px-4 py-2 rounded-full flex items-center"
        >
          <FaWhatsapp className="text-lg mr-2" />
          WhatsApp Now
        </button>
        <button
          onClick={handleCallClick}
          className="bg-button text-white text-sm px-4 py-2 rounded-full flex items-center"
        >
          <FaPhoneAlt className="mr-2" />
          Call Now

          className="flex items-center space-x-2 px-6 py-2 text-lg border-2 border-gray-900 text-black rounded hover:bg-button hover:border-button hover:text-white"
        >
          <FaWhatsapp className="text-xl self-auto" />
          <span>WhatsApp</span>
        </button>
        <button
          onClick={handleCallClick}
          className="flex items-center space-x-2 px-6 py-2 text-lg border-2 border-button bg-button text-black rounded hover:bg-button hover:text-white"
        >
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

            <button
              onClick={handleNavigation}
              className="text-gray-600 text-sm font-semibold hover:text-button"
            >
              Home
            </button>
            <a
              href="#info"
              className="text-gray-600 text-sm font-semibold hover:text-button"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-600 text-sm font-semibold hover:text-button"
            >
              About us
            </a>
            <a
              href="#contact"
              className="text-gray-600 text-sm font-semibold hover:text-button"
            >

            <a href="#home" className="text-gray-600 text-lg font-semibold hover:text-button">
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
            <button
              onClick={handleCallClick}

              className="bg-button text-white text-sm px-4 py-2 rounded-full flex items-center"
            >
              <FaPhoneAlt className="mr-2" />
              Call Now

              className="flex items-center space-x-2 px-6 py-2 text-lg bg-button text-black rounded hover:bg-button hover:border-button hover:text-white"
            >
              <FiPhoneCall className="text-xl" />
              <span>Call Us</span>

            </button>
            <button
              onClick={handleWhatsAppClick}

              className="bg-green-500 text-white text-sm px-4 py-2 rounded-full flex items-center"
            >
              <FaWhatsapp className="text-lg mr-2" />
              WhatsApp Now

              className="flex items-center space-x-2 px-6 py-2 text-lg border-2 border-black text-black rounded hover:bg-button hover:border-button hover:text-white"
            >
              <FaWhatsapp className="text-xl self-auto" />
              <span>WhatsApp</span>

            </button>
          </div>
        </div>
      )}

      {/* Right-Side Rectangle */}
      <div
        className="absolute right-0 top-0 bottom-0 h-full w-[450px] bg-[#19746B] z-10 hidden md:block"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      ></div>
    </nav>
  );
};

export default Navbar;

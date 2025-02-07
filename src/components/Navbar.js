import React, { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import fev_icon from "../assets/sanchi_fev.jpg";
import InitiateWhatsApp from "../services/initiatewhatsapp";
import InitiateCall from "../services/initiatecall";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ onScroll }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Set background color for the Navbar dynamically based on the route
  const navbarBgColor =
    location.pathname === "/booking" ? "bg-white" : "bg-transparent";

  const handleNavigation = () => {
    navigate("/");
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
  };

  return (
    <nav
      className={`relative flex justify-between items-center h-[80px] p-5 ${navbarBgColor} md:${navbarBgColor} z-20`}
    >
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
        <button
          onClick={() => onScroll("cars")}
          className="text-gray-600 text-lg font-semibold hover:text-button"
        >
          Services
        </button>
        <button
          onClick={() => onScroll("about")}
          className="text-gray-600 text-lg font-semibold hover:text-button"
        >
          About us
        </button>
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
            <button
              onClick={() => onScroll("cars")}
              className="text-gray-600 text-sm font-semibold hover:text-button"
            >
              Services
            </button>
            <button
              onClick={() => onScroll("about")}
              className="text-gray-600 text-sm font-semibold hover:text-button"
            >
              About us
            </button>
            <button
              onClick={handleCallClick}
              className="bg-button text-white text-sm px-4 py-2 rounded-full flex items-center"
            >
              <FaPhoneAlt className="mr-2" />
              Call Now
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white text-sm px-4 py-2 rounded-full flex items-center"
            >
              <FaWhatsapp className="text-lg mr-2" />
              WhatsApp Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

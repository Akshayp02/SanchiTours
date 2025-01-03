import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col">
      {/* Main Content Section */}
      <main className="flex-grow">{/* Your content goes here */}</main>

      <footer className="bg-gray-100 w-full mt-auto">
        <div className="max-w-7xl mx-auto px-5 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* /* Call to Action Section */}
          <div className="flex flex-col items-center space-y-4 md:col-span-4 md:flex-row md:items-center md:space-x-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800">
                Ready to explore?
              </h3>
              <p className="text-gray-600">Let's Go on Vacation Together</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your Email"
                className="px-4 py-2 w-full md:w-80 rounded-t-md md:rounded-l-md md:rounded-t-none border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
              />
              <button className="px-5 py-2 bg-button text-white rounded-b-md md:rounded-r-md md:rounded-b-none hover:bg-yellow-400 w-full md:w-auto">
                Get started
              </button>
            </div>
          </div>
        </div>

        {/* Footer Sections in a Row (Services, About, Help, Social) */}
        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Services Section */}
            <div className="space-y-3 text-center md:text-left">
              <h4 className="text-lg font-bold text-gray-800">Services</h4>
              <ul className="text-gray-600 space-y-2">
                <li>Cabs</li>

                <li>Off road trip</li>
              </ul>
            </div>

            {/* About Section */}
            <div className="space-y-3 text-center md:text-left">
              <h4 className="text-lg font-bold text-gray-800">About</h4>
              <ul className="text-gray-600 space-y-2">
                <li>Our Story</li>

                <li>Team</li>
              </ul>
            </div>

            {/* Help Section */}
            <div className="space-y-3 text-center md:text-left">
              <h4 className="text-lg font-bold text-gray-800">Help</h4>
              <ul className="text-gray-600 space-y-2">
                <li>FAQs</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Social Section */}
            <div className="space-y-3 text-center md:text-left">
              <h4 className="text-lg font-bold text-gray-800">Social</h4>
              <div className="flex items-center justify-center md:justify-start space-x-4 text-gray-600">
                <FaInstagram
                  size={20}
                  className="hover:text-gray-800 cursor-pointer"
                />
                <FaTwitter
                  size={20}
                  className="hover:text-gray-800 cursor-pointer"
                />
                <FaFacebookF
                  size={20}
                  className="hover:text-gray-800 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="bg-gray-200 text-center py-4 text-gray-600 text-sm">
          © 2025 Sanchi Car Rentals. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

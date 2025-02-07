import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white px-5 md:px-20">
      {/* Footer Main Section */}
      <div className="max-w-7xl mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* About Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Sanchi Car Rental</h3>
          <p className="text-gray-400 text-base pb-2">
            At Sanchi CAR RENTAL, we offer more than just a ride. With a focus on reliability, safety, and affordability, we treat every passenger like family, ensuring your journey is smooth, comfortable, and hassle-free every time.
          </p>
          {/* Social Media Icons */}
                <div className="flex space-x-4 justify-self-start sm:justify-center">
                <a href="https://www.instagram.com/sanchicarrental?igsh=a2FyNGNjMmN0ajJn" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="hover:text-yellow-500 cursor-pointer" size={20} />
                </a>
                <a href="https://www.facebook.com/share/15o8FDvByP/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-yellow-500 cursor-pointer" size={20} />
                </a>
                <a href="https://x.com/sanchicarrental" target="_blank" rel="noopener noreferrer">
                 <FaTwitter className="hover:text-yellow-500 cursor-pointer" size={20} />
                 </a>
                </div>
              </div>

              {/* Contact Section */}
        <div className="space-y-4 sm:px-12">
          <h3 className="text-xl font-bold relative pb-2">
            Contact
            <div className="w-10 h-1 bg-yellow-500 absolute bottom-0 left-0"></div>
          </h3>
          <p className="text-gray-400 text-base border-b border-gray-700 pb-2">New Wakdevadi Bus stand, Shivajinagar Bus stand road Pune 411005</p>
          <p className="text-gray-400 border-b border-gray-700 pb-2">{process.env.REACT_APP_CALL_NUMBER}</p>
          <p className="text-gray-400 border-b border-gray-700 pb-2">sanchicarrental@gmail.com</p>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="py-4 text-center text-gray-500 text-sm w-full">
        © {currentYear} Sanchi Car Rental. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

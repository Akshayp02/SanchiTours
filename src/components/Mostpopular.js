import React from "react";
import Trimbakeshwar from "../assets/Trimbakeshwar-Jyotirling.jpg";
import InitiateCall from "../services/initiatecall";
import Ellora from "../assets/Ellora.jpg";
import bhimashankar from "../assets/bhimashankar.jpeg";
import mahalxmi from "../assets/Mahalaxmi_Temple,_Kolhapur.jpg";
import kolhapur from "../assets/kolhapur.jpg";
import Ajantha from "../assets/ajintha.jpg";
import Alibaug from "../assets/ALIBAG.jpg";
import Goa from "../assets/goa.jpg";
import { FaPhoneAlt } from "react-icons/fa";

const destinations = [
  { id: 1, title: "Trimbakeshwar", imageUrl: Trimbakeshwar },
  { id: 2, title: "Ellora", imageUrl: Ellora },
  { id: 3, title: "Bhimashankar", imageUrl: bhimashankar },
  { id: 4, title: "Mahalaxmi Temple Kolhapur", imageUrl: mahalxmi },
  { id: 5, title: "Kolhapur", imageUrl: kolhapur },
  { id: 6, title: "Alibaug", imageUrl: Alibaug },
  { id: 7, title: "Ajanta Caves", imageUrl: Ajantha },
  { id: 8, title: "Goa", imageUrl: Goa },
  // Add more destinations as needed
];

const MostPopular = () => {

    const handleCallClick = () => {
        InitiateCall.dialNumber();
      };
  return (
    
    <div className="py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Most Popular Destinations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="relative rounded-lg overflow-hidden"
          >
            <div
              className="w-full h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${destination.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-semibold">{destination.title}</h3>
              <button
                onClick={handleCallClick}
                className="bg-button text-white text-sm px-4 py-2 rounded-full flex items-center"
              >
                <FaPhoneAlt className="mr-2" />
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;

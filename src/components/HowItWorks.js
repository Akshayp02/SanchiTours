import React, { useState } from "react";

const HowItWorks = () => {
  const cities = [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Nashik",
    "Aurangabad",
    "Kolhapur",
    "Solapur",
    "Amravati",
    "Thane",
    "Akola",
    "Ahmednagar",
    "Chandrapur",
    "Jalgaon",
    "Parbhani",
    "Goa",
    "Latur",
    "Nanded",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Wardha",
    "Yavatmal",
    "Dhule",
    "Jalna",
    "Buldhana",
    "Osmanabad",
    "Sindhudurg",
    "Palghar",
    "Raigad",
    "Ratnagiri",
    "Bhandara",
    "Gondia",
    "Hingoli",
    "Washim",
    "Beed",
    "Gadchiroli",
    "Chandrapur",
    "Nandurbar",
   "Trimbakeshwar",
   "Ellora Caves",
   "Bhimashankar",
   "Mahalaxmi Temple Kohlapur",
   "Kohlapur",
    "Shirdi",
    "Pandharpur",
    "Matheran",
    "Lonavala",
    "Khandala",
    "Mahabaleshwar",
    "Panchgani",
    "Alibaug",
  

    
   
  ];

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [pickupSearch, setPickupSearch] = useState("");
  const [dropSearch, setDropSearch] = useState("");
  const [showPickupDropdown, setShowPickupDropdown] = useState(false);
  const [showDropDropdown, setShowDropDropdown] = useState(false);

  const handlePickupChange = (city) => {
    setPickup(city);
    setShowPickupDropdown(false);
    if (city === drop) {
      setDrop("");
    }
  };

  const handleDropChange = (city) => {
    setDrop(city);
    setShowDropDropdown(false);
  };

  return (
    <div className="bg-white py-10 px-5">
      <h1 className="text-center text-2xl font-bold mb-8">Book Your Perfect Ride Here!</h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        {/* Pickup Location */}
        <div className="flex flex-col items-center relative w-full max-w-sm">
          <span className="text-3xl text-black">📍</span>
          <p className="text-lg font-semibold mt-2">Choose Location</p>
          <div
            className="mt-4 px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-yellow-400 cursor-pointer w-full"
            onClick={() => setShowPickupDropdown((prev) => !prev)}
          >
            {pickup || "Select Pickup Location"}
          </div>
          {showPickupDropdown && (
            <div className="absolute top-20 z-10 bg-white border rounded-md shadow-lg w-full max-h-60 overflow-y-auto max-w-xs">
              <input
                type="text"
                placeholder="Search Location"
                value={pickupSearch}
                onChange={(e) => setPickupSearch(e.target.value)}
                className="w-full px-4 py-2 border-b text-gray-700 focus:outline-none"
              />
              <ul className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 max-h-48 overflow-y-auto">
                {cities
                  .filter((city) =>
                    city.toLowerCase().includes(pickupSearch.toLowerCase())
                  )
                  .map((city, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                      onClick={() => handlePickupChange(city)}
                    >
                      {city}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>

        {/* Pick-Up Date */}
        <div className="flex flex-col items-center w-full max-w-sm">
          <span className="text-3xl text-yellow-500">📅</span>
          <p className="text-lg font-semibold mt-2">Pick-Up Date</p>
          <input
            type="date"
            className="mt-4 px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
          />
        </div>

        {/* Drop Location */}
        <div className="flex flex-col items-center relative w-full max-w-sm">
          <span className="text-3xl text-black">🚗</span>
          <p className="text-lg font-semibold mt-2">Choose Your Destination</p>
          <div
            className="mt-4 px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-yellow-400 cursor-pointer w-full"
            onClick={() => setShowDropDropdown((prev) => !prev)}
          >
            {drop || "Select Drop Location"}
          </div>
          {showDropDropdown && (
            <div className="absolute top-20 z-10 bg-white border rounded-md shadow-lg w-full max-h-60 overflow-y-auto max-w-xs">
              <input
                type="text"
                placeholder="Search Destination"
                value={dropSearch}
                onChange={(e) => setDropSearch(e.target.value)}
                className="w-full px-4 py-2 border-b text-gray-700 focus:outline-none"
              />
              <ul className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 max-h-48 overflow-y-auto">
                {cities
                  .filter(
                    (city) =>
                      city !== pickup &&
                      city.toLowerCase().includes(dropSearch.toLowerCase())
                  )
                  .map((city, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                      onClick={() => handleDropChange(city)}
                    >
                      {city}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-button text-white rounded-md shadow-md hover:bg-yellow-500">
          Book Your Car
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;

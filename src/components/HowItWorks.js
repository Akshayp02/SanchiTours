import React, { useState } from "react";

const HowItWorks = () => {
  const cities = [
    "Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Kolhapur", 
    "Solapur", "Amravati", "Thane", "Akola", "Ahmednagar", "Chandrapur",
    "Jalgaon", "Parbhani", "Goa", "Latur", "Nanded", "Ratnagiri",
    "Sangli", "Satara", "Wardha", "Yavatmal", "Dhule", "Jalna",
    "Buldhana", "Osmanabad", "Sindhudurg", "Palghar", "Raigad",
    "Trimbakeshwar", "Shirdi", "Lonavala", "Mahabaleshwar", "Panchgani"
  ];

  const [journeyType, setJourneyType] = useState("Onward");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [pickupSearch, setPickupSearch] = useState("");
  const [dropSearch, setDropSearch] = useState("");
  const [showPickupDropdown, setShowPickupDropdown] = useState(false);
  const [showDropDropdown, setShowDropDropdown] = useState(false);

  const handleJourneyChange = (type) => setJourneyType(type);

  const handlePickupChange = (city) => {
    setPickup(city);
    setShowPickupDropdown(false);
  };

  const handleDropChange = (city) => {
    setDrop(city);
    setShowDropDropdown(false);
  };

  return (
    <div className="bg-white py-3 px-5">
      <h1 className="text-center text-2xl font-bold mb-8">Book Your Perfect Ride!</h1>
     
      {/* Journey Type Toggle */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="journeyType"
              value="Onward"
              checked={journeyType === "Onward"}
              onChange={() => handleJourneyChange("Onward")}
              className="hidden"
            />
            <span
              className={`px-4 py-2 rounded-md ${
                journeyType === "Onward" ? "bg-button text-white" : "bg-gray-200"
              }`}
            >
              Onward Journey
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="journeyType"
              value="Return"
              checked={journeyType === "Return"}
              onChange={() => handleJourneyChange("Return")}
              className="hidden"
            />
            <span
              className={`px-4 py-2 rounded-md ${
                journeyType === "Return" ? "bg-button text-white" : "bg-gray-200"
              }`}
            >
              Return Journey
            </span>
          </label>
        </div>
      </div>

      {/* Location and Date Inputs */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        {/* Pickup Location */}
        <div className="relative w-full max-w-sm">
          <label className="block text-lg font-semibold mb-2">From City</label>
          <div
            className="px-4 py-2 border rounded-md cursor-pointer"
            onClick={() => setShowPickupDropdown((prev) => !prev)}
          >
            {pickup || "Select Pickup Location"}
          </div>
          {showPickupDropdown && (
            <div className="absolute z-10 bg-white border rounded-md shadow-lg w-full mt-2 max-h-60 overflow-y-auto">
              <input
                type="text"
                placeholder="Search City"
                value={pickupSearch}
                onChange={(e) => setPickupSearch(e.target.value)}
                className="w-full px-4 py-2 border-b"
              />
              <ul>
                {cities
                  .filter((city) =>
                    city.toLowerCase().includes(pickupSearch.toLowerCase())
                  )
                  .map((city, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handlePickupChange(city)}
                    >
                      {city}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>

        {/* Drop Location */}
        <div className="relative w-full max-w-sm">
          <label className="block text-lg font-semibold mb-2">To City</label>
          <div
            className="px-4 py-2 border rounded-md cursor-pointer"
            onClick={() => setShowDropDropdown((prev) => !prev)}
          >
            {drop || "Select Drop Location"}
          </div>
          {showDropDropdown && (
            <div className="absolute z-10 bg-white border rounded-md shadow-lg w-full mt-2 max-h-60 overflow-y-auto">
              <input
                type="text"
                placeholder="Search City"
                value={dropSearch}
                onChange={(e) => setDropSearch(e.target.value)}
                className="w-full px-4 py-2 border-b"
              />
              <ul>
                {cities
                  .filter((city) =>
                    city.toLowerCase().includes(dropSearch.toLowerCase())
                  )
                  .map((city, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleDropChange(city)}
                    >
                      {city}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>

        {/* Journey Dates */}
        <div className="w-full max-w-sm">
          <label className="block text-lg font-semibold mb-2">Journey Date</label>
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        {journeyType === "Return" && (
          <div className="w-full max-w-sm">
            <label className="block text-lg font-semibold mb-2">Return Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
        )}
      </div>

      {/* Search Button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 font-sans text-base text-justify text-black rounded-md shadow-md : bg-gray-200 hover:bg-button hover:text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;

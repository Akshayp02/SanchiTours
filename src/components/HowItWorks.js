import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    "Trimbakeshwar",
    "Shirdi",
    "Lonavala",
    "Mahabaleshwar",
    "Panchgani",
  ];

  const navigate = useNavigate();
  const [journeyType, setJourneyType] = useState("Onward");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [pickupSearch, setPickupSearch] = useState("");
  const [dropSearch, setDropSearch] = useState("");
  const [showPickupDropdown, setShowPickupDropdown] = useState(false);
  const [showDropDropdown, setShowDropDropdown] = useState(false);
  const [journeyDate, setJourneyDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [journeyTime, setJourneyTime] = useState(""); // Added journey time state

  const handleSearch = () => {
    if (!pickup || !drop || !journeyDate || !journeyTime) {
      alert("Please fill all required fields.");
      return;
    }
    navigate("/booking", {
      state: {
        journeyType,
        pickup,
        drop,
        journeyDate,
        journeyTime,
        returnDate: journeyType === "Return" ? returnDate : null,
      },
    });
  };

  const handleJourneyChange = (type) => {
    setJourneyType(type);
    if (type === "Onward") {
      setDrop(""); // Reset drop location for onward journey
    }
  };

  const handlePickupChange = (city) => {
    setPickup(city);
    setShowPickupDropdown(false);
    if (journeyType === "Onward") {
      setDrop(""); // Reset drop location when pickup changes for onward journey
    }
  };

  const handleDropChange = (city) => {
    setDrop(city);
    setShowDropDropdown(false);
  };

  const filteredCitiesForDrop =
    journeyType === "Onward"
      ? cities.filter((city) => city !== pickup)
      : cities;

  return (
    <div className="bg-white py-3 px-5">
      <h1 className="text-center text-2xl font-bold mb-8">
        Book Your Perfect Ride!
      </h1>

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
                journeyType === "Onward"
                  ? "bg-button text-white"
                  : "bg-gray-200"
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
                journeyType === "Return"
                  ? "bg-button text-white"
                  : "bg-gray-200"
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
            className="px-4 py-2 border rounded-md cursor-pointer flex items-center justify-between"
            onClick={() => setShowPickupDropdown((prev) => !prev)}
          >
            {pickup || "Select Pickup Location"}
            <span className="ml-2" style={{ color: "#FE9A03FC" }}>
              ▼
            </span>{" "}
            {/* Color changed */}
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
            className="px-4 py-2 border rounded-md cursor-pointer flex items-center justify-between"
            onClick={() => setShowDropDropdown((prev) => !prev)}
          >
            {drop || "Select Drop Location"}
            <span className="ml-2" style={{ color: "#FE9A03FC" }}>
              ▼
            </span>{" "}
            {/* Color changed */}
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
                {filteredCitiesForDrop
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
          <label className="block text-lg font-semibold mb-2">
            Journey Date
          </label>
          <div className="relative">
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-md appearance-none"
              value={journeyDate}
              onChange={(e) => setJourneyDate(e.target.value)}
            />
            {!journeyDate && (
              <span className="absolute left-4 top-2 text-gray-500 pointer-events-none">
                {/* Select Date */}
              </span>
            )}
          </div>
        </div>

        {/* Journey Time */}
        <div className="w-full max-w-sm">
          <label className="block text-lg font-semibold mb-2">
            Journey Time
          </label>
          <div className="relative">
            <input
              type="time"

              className="w-full px-4 py-2 border rounded-md appearance-none"
              value={journeyTime}
              onChange={(e) => setJourneyTime(e.target.value)}
            />
            {!journeyTime && (
              <span className="absolute left-4 top-2 text-gray-500 pointer-events-none">
                {/* Select Time */}
              </span>
            )}
          </div>
        </div>

        {journeyType === "Return" && (
          <div className="w-full max-w-sm">
            <label className="block text-lg font-semibold mb-2">
              Return Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-md"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Search Button */}
      <div className="flex justify-center mt-8">
        <button
          className="px-6 py-2 font-sans text-base text-black rounded-md shadow-md bg-gray-200 hover:bg-button hover:text-white"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;

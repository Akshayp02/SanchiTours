import React, { useState } from "react";
import aura from "../assets/aura.png";
import disire from "../assets/swift.png";
import innova_crysta from "../assets/crysta-white.png";
import ertiga from "../assets/ertiga.jpg";
import etios from "../assets/etois.jpg";
import Innova from "../assets/toyota_innova.png";
import Cruiser from "../assets/Cruiser.png";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaSuitcase,
  FaUserFriends,
} from "react-icons/fa";
import InitiateCall from "../services/initiatecall";
import InitiateWhatsApp from "../services/initiatewhatsapp";



const cars = [
  {
    id: 1,
    name: "Innova Crysta",
    image: innova_crysta,
    seats: "6+1",
    type: "Manual",
    price: "₹22/km",
    ac: true,
    bag: "2 bags",
    exclusions: ["Driver Food : Y", "Toll Tax : Y", "Parking : Y"],
  },
  {
    id: 2,
    name: "Ertiga ",
    image: ertiga,
    seats: "6+1",
    type: "Automatic",
    price: "₹15/km",
    ac: true,
    bag: "2 bags",
    exclusions: [ "Toll Tax : Y", "Parking : Y"],
  },

  {
    id: 3,
    name: "Aura",
    image: aura,
    seats: "4+1",
    type: "Manual",
    price: "₹12/km",
    ac: true,
    bag: "2 bags",
    exclusions: [ "Toll Tax : Y", "Parking : Y"],
  },

  {
    id: 4,
    name: "Swift Dzire",
    image: disire,
    seats: "4+1",
    type: "Manual",
    price: "₹12/km",
    ac: true,
    bag: "2 bags",
    exclusions: [ "Toll Tax : Y", "Parking : Y"],
  },

  {
    id: 5,
    name: "Toyota Innova",
    image: Innova,
    seats: "6+1",
    type: "Automatic",
    price: "₹20/km",
    ac: true,
    bag: "2 bags",
    exclusions: [ "Toll Tax : Y", "Parking : Y"],
  },
  {
    id: 6,
    name: "Etios",
    image: etios,
    seats: "4+1",
    type: "Manual",
    price: "₹12/km",
    ac: true,
    bag: "2 bags",
    exclusions: [ "Toll Tax : Y", "Parking : Y"],
  },
  {
    id: 7,
    name: "Cruiser",
    image: Cruiser,
    seats: "13+1",
    type: "Manual",
    price: "₹19/km",
    ac: true,
    bag: "2 bags",
    exclusions: [ "Toll Tax : Y", "Parking : Y"],
  },
];


const TopRentedCars = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingOption, setBookingOption] = useState(null);
  const [showExclusions, setShowExclusions] = useState(false);

  const openDialog = (car) => setSelectedCar(car);
  const closeDialog = () => setSelectedCar(null);
  const closeBookingOptions = () => setBookingOption(null);

  // Handle booking actions
  const handleBooking = (option) => {
    setBookingOption(option);
    if (option === "call") {
      InitiateCall.dialNumber();
    } else if (option === "whatsapp") {
      InitiateWhatsApp.sendMessageToSelf(selectedCar.name);
    }
  };

  const handleBookNow = (car) => {
    setSelectedCar(car);
    setBookingOption("book");
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Our Top Rated Rented Cars
      </h2>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-custom">
        <div className="flex space-x-4 pb-5 animate-scroll hover:cursor-auto">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md p-4 w-80 flex-shrink-0"
            >
              <div className="text-sm text-gray-700 border px-2 py-1 rounded-lg inline-block mb-2">
                {car.ac ? "AC" : "Non-AC"}
              </div>
              <div>
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-40 w-auto font-semibold justify-items-stretch mx-auto mb-4 transition-transform duration-300 hover:scale-110"
                />
              </div>

              <h3 className="text-lg font-bold text-gray-700 text-center">
                {car.name}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
                <strong>Facilities:</strong>
                <span className="flex font-semibold items-center">
                  {" "}
                  <FaUserFriends className="mr-1 text-lg text-justify" />{" "}
                  {car.seats} Seater
                </span>
                <span className="flex font-semibold items-center">
                  {" "}
                  <FaSuitcase className="mr-1 text-lg text-justify" /> {car.bag}
                </span>
              </div>
              <p className="text-gray-700 font-semibold mt-2">
                Starting at {car.price}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => openDialog(car)}
                  className="bg-orange-500 text-white text-justify text-sm px-4 py-2 rounded-lg"
                >
                  Details
                </button>
                <button
                  onClick={() => handleBookNow(car)}
                  className="bg-green-500 text-white text-sm px-4 py-2 rounded-lg"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dialog Box for Details to all*/}
      {selectedCar && !bookingOption && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-96 max-h-[calc(100vh-2rem)] overflow-y-auto relative">
            <button
              onClick={closeDialog}
              className="absolute top-3 right-3 font-semibold text-sm bg-white text-gray-800 border px-2 py-1 rounded-lg inline-block mb-2"
            >
              X
            </button>
            <div className="text-sm text-gray-700 border px-2 py-1 rounded-lg inline-block mb-2">
              {selectedCar.ac ? "AC" : "Non-AC"}
            </div>
            <img
              src={selectedCar.image}
              alt={selectedCar.name}
              className="h-auto max-h-40 w-auto mx-auto mb-4"
            />
            <h3 className="text-lg text-center font-bold text-gray-700">
              {selectedCar.name}
            </h3>
            <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
              <strong>Facilities:</strong>
              <span className="flex  items-center">
                {" "}
                <FaUserFriends className="mr-1 text-lg font-semibold  text-justify" />{" "}
                {selectedCar.seats} Seater
              </span>
              <span className="flex items-center">
                {" "}
                <FaSuitcase className="mr-1 text-lg font-semibold text-justify" />{" "}
                {selectedCar.bag}
              </span>
            </div>
            <p className="text-gray-700 font-semibold mt-2">
              Starting at {selectedCar.price}
            </p>

            {/* Exclusions List (Initially visible on Details) */}
            <p className="text-gray-600 mt-4 text-sm text-justify">
              <strong>Exclusion:</strong>
              <ul>
                {selectedCar.exclusions.map((exclusion, index) => (
                  <li key={index} className="text-sm text-justify">
                    {exclusion}
                  </li>
                ))}
              </ul>
            </p>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setBookingOption("whatsapp")}
                className="bg-button text-white text-sm px-4 py-2 rounded-lg"
              >
                Proceed to Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Option Dialog */}
      {bookingOption && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-96 max-h-[calc(100vh-2rem)] overflow-y-auto relative">
            <button
              onClick={() => {
                closeBookingOptions();
                closeDialog();
              }}
              className="absolute top-3 right-3  text-sm bg-white text-gray-800 border px-2 font-semibold rounded-lg inline-block mb-2"
            >
              X
            </button>
            <h3 className="text-lg font-bold text-center text-gray-800 mb-4">
              You have selected to book {selectedCar?.name}
            </h3>
            <p className="text-center text-gray-600 mb-4">
              Please choose an option to proceed with the booking.
            </p>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => handleBooking("call")}
                className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full flex items-center justify-center"
              >
                <FaPhoneAlt className="inline-block mr-2" />
                Call Now
              </button>
              <button
                onClick={() => handleBooking("whatsapp")}
                className="bg-green-500 text-white text-sm px-4 py-2 rounded-full flex items-center justify-center"
              >
                <FaWhatsapp className="inline-block text-lg mr-2" />
                WhatsApp Now
              </button>
            </div>

            {/* See more details button */}
            <button
              onClick={() => setShowExclusions(true)}
              className="bg-gray-500 text-white text-sm px-4 py-2 rounded-lg mt-4 w-full"
            >
              See more details
            </button>

            {/* Conditional rendering of Exclusions */}
            {showExclusions && (
              <div className="mt-4">
                <p className="text-gray-600 mt-4 text-sm text-justify">
                  <strong>Exclusion:</strong>
                  <ul>
                    {selectedCar.exclusions.map((exclusion, index) => (
                      <li key={index} className="text-sm text-justify">
                        {exclusion}
                      </li>
                    ))}
                  </ul>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopRentedCars;

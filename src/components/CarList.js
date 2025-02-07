import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import aura from "../assets/aura.png";
import disire from "../assets/swift.png";
import innova_crysta from "../assets/crysta-white.png";
import ertiga from "../assets/ertiga.jpg";
import etios from "../assets/etois.jpg";
import Innova from "../assets/toyota_innova.png";
import Cruiser from "../assets/Cruiser.png";
import {
  FaSuitcase,
  FaUserFriends,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineAcUnit } from "react-icons/md";
import InitiateCall from "../services/initiatecall";
import InitiateWhatsApp from "../services/initiatewhatsapp";

// Car data
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
    exclusions: ["Toll Tax : Y", "Parking : Y"],
  },
  {
    id: 2,
    name: "Ertiga",
    image: ertiga,
    seats: "6+1",
    type: "Automatic",
    price: "₹15/km",
    ac: true,
    bag: "2 bags",
    exclusions: ["Toll Tax : Y", "Parking : Y"],
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
    exclusions: ["Toll Tax : Y", "Parking : Y"],
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
    exclusions: ["Toll Tax : Y", "Parking : Y"],
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
    exclusions: ["Toll Tax : Y", "Parking : Y"],
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
    exclusions: ["Toll Tax : Y", "Parking : Y"],
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
    exclusions: ["Toll Tax : Y", "Parking : Y"],
  },
];

const BookingDialog = ({ car, price, onClose }) => {
  const { pickup, drop, journeyType, journeyDate, journeyTime } =
    useLocation().state || {};
  const createInquiryMessage = (car) => {
    const message = `
      *Details:*
      - *Journey:* ${pickup} to ${drop}
      - *Journey Type:* ${journeyType}
      - *Car Name:* ${car.name}
      - *Date:* ${journeyDate}
      - *Time:* ${journeyTime}
      - *Price:* ${price}
    `;
    return message;
  };
  const handleBook = (option) => {
    const message = createInquiryMessage(car);
    if (option === "call") {
      InitiateCall.dialNumber();
    } else if (option === "whatsapp") {
      InitiateWhatsApp.sendMessageToSelf(message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25  flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 bg-gray-300 text-gray-800 font-bold rounded-full flex items-center justify-center hover:bg-gray-400"
        >
          X
        </button>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{car.name}</h2>
        </div>
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-40 object-contain mb-4"
        />
        <h2 className="justify-center items-center mb-2">
          <strong>location : </strong>
          {pickup} To {drop}
        </h2>
        <p className="mb-2">
          <strong>Price :</strong> {price}
        </p>
        <p className="mb-2">
          <strong>Seats :</strong> {car.seats}
        </p>
        <p className="mb-4">
          <strong>AC :</strong> {car.ac ? "Yes" : "No"}
        </p>
        <div className="flex justify-between mt-6">
          <button
            onClick={() => handleBook("call")}
            className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full flex items-center justify-center"
          >
            <FaPhoneAlt className="inline-block mr-2" />
            Call Now
          </button>
          <button
            onClick={() => handleBook("whatsapp")}
            className="bg-green-500 text-white text-sm px-4 py-2 rounded-full flex items-center justify-center"
          >
            <FaWhatsapp className="inline-block text-lg mr-2" />
            WhatsApp Now
          </button>
        </div>
      </div>
    </div>
  );
};

const CarList = () => {
  const location = useLocation();
  const { journeyType, pickup, drop } =
    location.state || {};

  // const closeBookingOptions = () => setBookingOption(null);
  const [selectedCar, setSelectedCar] = useState(null);
  // const [price, setPrice] = useState("");

  const handleBookNow = (car) => {
    const calculatedPrice = calculatePrice(car, pickup, drop, journeyType);
    const finalPrice =
      calculatedPrice === "₹0.00/km" ? car.price : calculatedPrice;
    setSelectedCar({ ...car, price: finalPrice });
  };

  // const handleBooking = (car) => {
  //   navigate("/booking", {
  //     state: {
  //       journeyType,
  //       pickup,
  //       drop,
  //       journeyDate,
  //       journeyTime,
  //       returnDate: journeyType === "Return" ? returnDate : null,
  //       car, // Passing the selected car details
  //     },
  //   });
  // };

  const calculatePrice = (car, pickup, drop, journeyType) => {
    // Define the pricing structure in an object
    const pricing = {
      "Aurangabad to Pune": {
        "4+1": 3200,
        "6+1": {
          "All including": 3900,
          Ertiga: 3900,
          Innova: 5000,
          "Innova Crysta": 6000,
        },
      },
      "Aurangabad to Mumbai": {
        "4+1": 6000,
        "6+1": {
          "All including": 8000,
          Ertiga: 8000,
          "Toyota Innova": 9500,
          "Innova Crysta": 11500,
        },
      },
      "Aurangabad to Nashik": {
        "4+1": 3200,
        "6+1": {
          "All including": 3900,
          Ertiga: 3900,
          "Toyota Innova": 5000,
          "Innova Crysta": 6000,
        },
      },
      "Pune to Mumbai": {
        "4+1": 3200,
        "6+1": {
          "All including": 3900,
          Ertiga: 4000,
          "Toyota Innova": 4200,
          "Innova Crysta": 4500,
        },
      },
      "Pune to Nashik": {
        "4+1": 3200,
        "6+1": {
          "All including": 3900,
          Ertiga: 3900,
          "Toyota Innova": 5000,
          "Innova Crysta": 6000,
        },
      },
      "Nashik to Mumbai": {
        "4+1": 3200,
        "6+1": {
          "All including": 3900,
          Ertiga: 3900,
          "Toyota Innova": 5000,
          "Innova Crysta": 6000,
        },
      },
    };

    // Construct both possible route variations
    const route1 = `${pickup} to ${drop}`;
    const route2 = `${drop} to ${pickup}`;
    const seatConfig = car.seats;
    const carName = car.name;

    let basePrice = 0;
    let priceMultiplier = 1;

    // Check if the route exists in the pricing structure
    if (pricing[route1] && pricing[route1][seatConfig]) {
      // If found, use the pricing for this route
      if (typeof pricing[route1][seatConfig] === "object") {
        basePrice =
          pricing[route1][seatConfig][carName] ||
          pricing[route1][seatConfig]["All including"];
      } else {
        basePrice = pricing[route1][seatConfig];
      }
    } else if (pricing[route2] && pricing[route2][seatConfig]) {
      // If route1 is not found, check for the reverse route
      if (typeof pricing[route2][seatConfig] === "object") {
        basePrice =
          pricing[route2][seatConfig][carName] ||
          pricing[route2][seatConfig]["All including"];
      } else {
        basePrice = pricing[route2][seatConfig];
      }
    } else {
      // Handle cases where no price is found for either direction
      basePrice = 0;
    }

    // If the journey type is "Return", set the base price
    if (journeyType === "Return") {
      basePrice = 0;
    }

    // Return the formatted price
    return basePrice > 0
      ? `₹${(basePrice * priceMultiplier).toFixed(2)}`
      : "₹0.00/km";
  };

  return (
    <div className="bg-white p-2 min-h-screen">
      <div className="bg-primary-light p-4 mb-8 rounded-lg ">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Find the Perfect Car for Your Journey From {pickup} to {drop} -{" "}
          {journeyType}
        </h1>
      </div>{" "}
      <div className="space-y-6">
        {cars.map((car, index) => {
          const price = calculatePrice(car, pickup, drop, journeyType); // Calculate price for each car
          return (
            <div
              key={car.id}
              className={`flex flex-col md:flex-row items-center bg-transparent ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Car Image */}
              <div className="w-full pb-0 md:w-1/2 h-[250px] md:h-[350px] object-cover rounded-lg flex items-center justify-center">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-contain rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Base Rectangle with Clipped Corners */}
              <div className="relative px-2 md:px-4 pb-0 pt-0 w-full lg:w-[80%] xl:w-[70%] mx-auto">
                {/* Desktop Layout */}
                <div className="hidden md:block relative w-full h-[200px] md:h-[250px] lg:h-[120px] bg-button">
                  {/* Clipped Corner Design for Desktop */}
                  <div
                    className="absolute top-0 right-0 w-[200px] h-[150px] bg-white"
                    style={{
                      clipPath: "polygon(80% 0%, 100% 30%, 100% 0, 0% 0%)",
                      backgroundColor: "white",
                      border: "2px solid transparent",
                    }}
                  />

                  <div
                    className="absolute bottom-0 right-0 w-full h-full bg-gray-100"
                    style={{
                      clipPath:
                        "polygon(0 5%, 50% 5%, 70% 100%, 70% 100%, 0% 100%)",
                    }}
                  />

                  {/* Car Details */}
                  <div className="absolute inset-0 flex flex-col md:flex-row justify-between p-4 space-y-4 md:space-y-0 lg:space-y-0 lg:h-[120px]">
                    {/* Car Name */}
                    <div>
                      <h2 className="text-3xl leading-tight font-semibold pb-3 pl-5 justify-center mb-2">
                        {car.name}
                      </h2>
                      <div className="flex flex-col pl-4 md:flex-row space-y-2 md:space-y-0 md:space-x-5">
                        <p className="text-xl px-3 text-gray-600 flex items-center">
                          <strong className="flex items-center">
                            <FaUserFriends className="mr-1 text-xl" /> Seats:
                          </strong>
                          <span className="ml-1">{car.seats}</span>
                        </p>

                        <p className="text-xl px-3 text-gray-600 flex items-center">
                          <FaSuitcase className="mr-2 text-xl" />
                          <span className="mr-1">
                            <strong>Bags:</strong>
                          </span>
                          {car.bag}
                        </p>

                        <p className="text-xl px-3 text-gray-600 flex items-center">
                          <MdOutlineAcUnit className="text-xl text-gray-600 mr-2" />
                          <span className="mr-1">
                            <strong>AC:</strong> {car.ac ? "Yes" : "No"}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="absolute bottom-0 right-20 flex flex-col items-center justify-center p-4 space-y-2 lg:h-[120px]">
                    <p className="text-4xl md:text-4xl lg:text-4xl font-bold text-gray-100">
                      {price === "₹0.00/km" ? car.price : price}
                    </p>
                    <button
                      onClick={() => handleBookNow(car)}
                      className="px-3 py-2 text-xs md:text-lg lg:text-lg bg-gray-100 text-gray-900 rounded-lg hover:bg-yellow-600"
                    >
                      Book Now
                    </button>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden relative w-full h-[150px] bg-button">
                  {/* Clipped Corner Design for Mobile */}
                  <div
                    className="absolute top-0 right-0 w-[120px] h-[80px] bg-white"
                    style={{
                      clipPath: "polygon(65% 0%, 100% 60%, 100% 0, 0% 0%)",
                    }}
                  />

                  <div
                    className="absolute bottom-0 right-0 w-full h-full bg-gray-100"
                    style={{
                      clipPath:
                        "polygon(0 2%, 30% 2%, 65% 100%, 65% 100%, 0% 100%)",
                    }}
                  />

                  {/* Car Details */}
                  <div className="absolute inset-0 flex flex-col justify-between p-4 space-y-4">
                    {/* Car Name */}
                    <div>
                      <h2 className="text-lg leading-tight font-semibold justify-center mb-2">
                        {car.name}
                      </h2>
                      <div className="flex flex-col space-y-2">
                        <p className="text-sm px-3 text-gray-600 flex items-center">
                          <strong className="flex items-center">
                            <FaUserFriends className="mr-1 text-lg" /> Seats:
                          </strong>
                          <span className="ml-1">{car.seats}</span>
                        </p>

                        <p className="text-sm px-3 text-gray-600 flex items-center">
                          <FaSuitcase className="mr-2 text-lg" />
                          <span className="mr-1">
                            <strong>Bags:</strong>
                          </span>
                          {car.bag}
                        </p>

                        <p className="text-sm px-3 text-gray-600 flex items-center">
                          <MdOutlineAcUnit className="text-lg text-gray-600 mr-2" />
                          <span className="mr-1">
                            <strong>AC:</strong> {car.ac ? "Yes" : "No"}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="absolute bottom-0 right-8 flex flex-col items-center justify-center p-4 space-y-2">
                    <p className="text-2xl md:text-lg lg:text-base pt-1 pb-3 font-bold text-gray-100">
                      {price === "₹0.00/km" ? car.price : price}
                    </p>
                    <button
                      onClick={() => handleBookNow(car)}
                      className="px-3 py-2 text-xs md:text-sm lg:text-sm bg-gray-100 text-gray-900 rounded-lg hover:bg-yellow-600"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Booking Option Dialog */}
              {selectedCar && (
                <BookingDialog
                  car={selectedCar}
                  price={selectedCar.price}
                  onClose={() => setSelectedCar(null)}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarList;

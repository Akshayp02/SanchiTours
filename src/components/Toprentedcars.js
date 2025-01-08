import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import aura from "../assets/aura.png";
import disire from "../assets/disire.png";
import innova_crysta from "../assets/innova_crysta.png";
import ertiga from "../assets/ertiga.png";
import etios from "../assets/etios.png";
import Innova from "../assets/toyota_innova.png";

const cars = [
  {
    id: 1,
    name: "Innova Crysta",
    image: innova_crysta,
    seats: "6+1",
    type: "Manual",
    price: "₹22/km",
    ac: true,
  },
  {
    id: 2,
    name: "Aura",
    image: aura,
    seats: "4+1",
    type: "Manual",
    price: "₹12/km",
    ac: true,
  },
  {
    id: 3,
    name: "Swift Dzire",
    image: disire,
    seats: "4+1",
    type: "Manual",
    price: "₹12/km",
    ac: true,
  },
  {
    id: 4,
    name: "Ertiga ",
    image: ertiga,
    seats: "6+1",
    type: "Automatic",
    price: "₹15/km",
    ac: true,
  },
  {
    id: 5,
    name: "Toyota innova",
    image: Innova,
    seats: "6+1",
    type: "Automatic",
    price: "₹20/km",
    ac: true,
  },
  {
    id: 6,
    name: "Etios",
    image: etios,
    seats:" 4+1",
    type: "Manual",
    price: "₹12/km",
    ac: true,
  },
];

const Toprentedcars = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const openDialog = (car) => setSelectedCar(car);
  const closeDialog = () => setSelectedCar(null);

return (
    <div className="p-6">
        <h2 className="text-2xl font-bold text-justify text-gray-800 mb-6 text-pretty">
            Our Top Rated Rented Cars
        </h2>
        <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true, el: ".swiper-pagination-hidden" }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
        >
            {cars.map((car) => (
                <SwiperSlide key={car.id} className="flex justify-center">
                    <div className="bg-white rounded-lg shadow-md p-4 w-80 transform transition-transform hover:scale-105">
                        <div className="text-sm text-gray-700 border text-justify px-2 py-1 rounded-lg inline-block mb-2">
                            {car.ac ? "AC" : "Non-AC"}
                        </div>
                        <img
                            src={car.image}
                            alt={car.name}
                            className="h-40 w-auto mx-auto text-sm text-justify mb-4"
                        />
                        <h3 className="text-lg font-bold text-gray-800 text-center">{car.name}</h3>
                        <div className="flex items-center text-justify justify-between text-sm text-gray-600 mt-2">
                            <span>🧍 {car.seats} Seater</span>
                            <span>⚙️ {car.type}</span>
                        </div>
                        <p className="text-gray-800 text-sm text-justify text-pretty font-semibold mt-2">
                            Starting at {car.price}
                        </p>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={() => openDialog(car)}
                                className="bg-orange-500 text-sm text-justify text-white px-4 py-2 rounded-lg"
                            >
                                Details
                            </button>
                            <button className="bg-green-500 text-sm text-justify text-white px-4 py-2 rounded-lg">
                                Book Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        {/* Hidden Pagination */}
        <div className="swiper-pagination-hidden hidden"></div>

        {/* Dialog Box */}
        {selectedCar && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-96 max-h-[calc(100vh-2rem)] overflow-y-auto relative">
                    <button
                        onClick={closeDialog}
                        className="absolute top-3 right-3 bg-gray-300 rounded-full p-2"
                    >
                        ❌
                    </button>
                    <div className="text-sm text-gray-700 border px-2 py-1  rounded-lg inline-block mb-2">
                        {selectedCar.ac ? "AC" : "Non-AC"}
                    </div>
                    <img
                        src={selectedCar.image}
                        alt={selectedCar.name}
                        className="h-auto max-h-40 w-auto mx-auto mb-4"
                    />
                    <h3 className="text-lg text-center font-bold text-gray-800">
                        {selectedCar.name}
                    </h3>
                    <div className="flex items-center text-justify justify-between text-sm text-gray-600 mt-2">
                        <span className="text-sm text-justify text-pretty ">🧍 {selectedCar.seats} Seater</span>
                        <span>⚙️ {selectedCar.type}</span>
                    </div>
                    <p className="text-gray-800 font-semibold mt-2 text-sm text-pretty text-justify">
                        Starting at {selectedCar.price}
                    </p>
                    <p className="text-gray-600 mt-4 text-sm text-justify">
                        <strong>Exclusion:</strong> 
                        {/* list of folowing fetures to incuding  */}
                            <ul>
                                    <li className="text-sm text-justify ">Driver Allowance : Y</li>
                                    <li className="text-sm text-justify ">Toll Tax : Y</li>
                                    <li className="text-sm text-justify ">Parking : Y</li>
                            </ul>
                    </p>
                    <div className="flex justify-between mt-6">
                        <button
                            onClick={closeDialog}
                            className="bg-gray-500 text-white text-sm text-justify px-4 py-2 rounded-lg"
                        >
                            Close
                        </button>
                        <button className="bg-green-500 text-white text-sm text-justify px-4 py-2 rounded-lg">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        )}
    </div>
);
};

export default Toprentedcars;

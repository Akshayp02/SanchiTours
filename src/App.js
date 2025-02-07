import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useRef } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Booking from "./components/CarList";

function App() {
  const carsRef = useRef(null);
  const aboutRef = useRef(null);

  const handleScroll = (section) => {
    if (section === "cars" && carsRef.current) {
      carsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-white overflow-hidden">
      <div className="hidden md:block absolute top-0 right-0 w-[30%] h-full bg-[#19746B]"></div>

      <BrowserRouter>
        <Navbar onScroll={handleScroll} />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<HomePage carsRef={carsRef} aboutRef={aboutRef} />} />
            <Route path="/home" element={<HomePage carsRef={carsRef} aboutRef={aboutRef} />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <footer className="bg-white shadow-inner mt-auto relative z-10">
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

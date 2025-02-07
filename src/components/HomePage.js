import React from "react";
import HeroSection from "./HeroSection";
import Toprentedcars from "./Toprentedcars";
import AboutUs from "./aboutus";

const HomePage = ({ carsRef, aboutRef }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <main className="flex-grow">
        <HeroSection />
        <div ref={carsRef}>
          <Toprentedcars />
        </div>
        <div ref={aboutRef}>
          <AboutUs />
        </div>
      </main>
    </div>
  );
};

export default HomePage;

import React from "react";
import HeroSection from "./HeroSection";
import Toprentedcars from "./Toprentedcars";
import AboutUs from "./aboutus";


const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <main className="flex-grow">
        <HeroSection />
        <Toprentedcars/>
        <AboutUs/>
      </main>      
    </div>
  );
};

export default HomePage;

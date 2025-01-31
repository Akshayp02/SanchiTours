import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Booking from "./components/CarList";

function App() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white overflow-hidden">
      {/* Rectangle Background for Large Screens */}
      <div className="hidden md:block absolute top-0 right-0 w-[30%] h-full bg-[#19746B]"></div>

      <BrowserRouter>
        <Navbar />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
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

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <footer className="bg-white shadow-inner">
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Faq } from "./pages/Faq";
import Navbar from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import BounceLoader from "react-spinners/BounceLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <BrowserRouter className="App">
      {loading ? (
        <div className="h-screen flex items-center  flex-col justify-center bg-tutor-bg">
          <img src="/images/logo.gif" className="w-24" alt="" />
        </div>
      ) : (
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;

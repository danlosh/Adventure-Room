import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Admission from "./components/pages/Admission";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NoAudio from "./components/NoAudio";

function App() {
  return (
    <>
      <Router>
      <NoAudio />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

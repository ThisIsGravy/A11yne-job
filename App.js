import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import PricingCalculator from "./pages/PricingCalculator";
import Resources from "./pages/Resources";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/pricing-calculator" element={<PricingCalculator />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
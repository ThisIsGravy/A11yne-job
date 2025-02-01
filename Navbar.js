import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <h1>A11yne Accessibility Consulting</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/case-studies">Case Studies</Link></li>
          <li><Link to="/pricing-calculator">Pricing Calculator</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";  // Styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>🛍 Retail Store</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

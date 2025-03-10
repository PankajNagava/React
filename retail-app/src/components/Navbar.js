import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";  

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");  // Remove current user from localStorage
    alert("You have been logged out!");
    navigate("/signup");  // Redirect back to signup
  };

  return (
    <nav className="navbar">
      <h1>🛍 Retail Store</h1>
      <ul>
        <li><Link to="/signup">Register</Link></li>
        <li><Link to="/users">User List</Link></li>
        <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;

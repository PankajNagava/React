import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";  

const Navbar = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setIsRegistered(!!currentUser);  // If user exists, set to true
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");  // Remove current user from localStorage
    alert("You have been logged out!");
    setIsRegistered(false);  // Hide Home and Logout after logging out
    navigate("/signup");
  };

  return (
    <nav className="navbar">
      <h1>🛍 Retail Store</h1>
      <ul>
        {!isRegistered ? (
          <li><Link to="/signup">Register</Link></li>
        ) : (
          <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/users">User List</Link></li>
            <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
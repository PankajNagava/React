import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      alert("Access Denied! Please Register First.");
      navigate("/signup");  // Redirect to Register Page if not logged in
    } else {
      setCurrentUser(user);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    alert("You have been logged out!");
    navigate("/signup");
  };

  return (
    <div className="home-container">
      <h1>Welcome, {currentUser?.username}!</h1>
      <p>Thank you for signing up. Enjoy shopping at our store!</p>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;

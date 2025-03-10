import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1>Welcome to Our Retail Store</h1>
      <p>Select an option to continue:</p>
      <div className="button-container">
        <button className="login-button" onClick={() => navigate("/login")}>Login</button>
        <button className="register-button" onClick={() => navigate("/signup")}>Register</button>
      </div>
    </div>
  );
};

export default LandingPage;

import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../App.css"; // ✅ Fix: Use App.css for styling

const HomePage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="home-box">
        <h2>Welcome to Home Page</h2>
        <button onClick={() => logout(navigate)}>Logout</button>
      </div>
    </div>
  );
};

export default HomePage;

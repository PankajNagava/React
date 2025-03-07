import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import helmet1 from "../assets/helmet1.jpg";
import helmet2 from "../assets/helmet2.jpg";
import helmet3 from "../assets/helmet3.jpg";

const products = [
  { id: 1, name: "Helmet Pro", price: 49, image: helmet1 },
  { id: 2, name: "Racing Helmet", price: 79, image: helmet2 },
  { id: 3, name: "Urban Helmet", price: 59, image: helmet3 }
];

function Home() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    } else {
      navigate("/"); // Redirects only if user is NOT logged in
    }
  }, [navigate]);

  return (
    <div className="home-container">
      <h1>Welcome to Our E-Commerce Store 🏍️</h1>
      <p>Find the best helmets for your riding needs.</p>

      <div className="buttons">
        <button className="btn btn-primary" onClick={() => navigate("/products")}>
          View All Products
        </button>
      </div>

      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} className="product-img" alt={product.name} />
            <h5>{product.name}</h5>
            <p>${product.price}</p>
            <Link className="btn btn-secondary" to={`/product/${product.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

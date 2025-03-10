import React from "react";
import ProductList from "./ProductList";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Online Store!</h1>
      <p>Explore our amazing products below.</p>
      <ProductList />
    </div>
  );
};

export default Home;

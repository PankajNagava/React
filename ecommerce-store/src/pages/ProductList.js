import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 

const products = [
  { id: 1, name: "Helmet Pro", price: 49 },
  { id: 2, name: "Racing Helmet", price: 79 },
  { id: 3, name: "Urban Helmet", price: 59 },
  { id: 4, name: "Street Helmet", price: 69 },
  { id: 5, name: "Classic Helmet", price: 39 }
];

function ProductList() {
  return (
    <div className="home-container">
      <h1>All Products 🏍️</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
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

export default ProductList;

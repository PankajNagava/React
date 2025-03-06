import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import helmet1 from "../assets/helmet1.jpg";
import helmet2 from "../assets/helmet2.jpg";
import helmet3 from "../assets/helmet3.jpg";
import "./ProductDetails.css";

const products = [
  { id: 1, name: "Helmet Pro", price: 49, image: helmet1, description: "Best helmet for bikers!" },
  { id: 2, name: "Racing Helmet", price: 79, image: helmet2, description: "Perfect for racers!" },
  { id: 3, name: "Urban Helmet", price: 59, image: helmet3, description: "Stylish & safe helmet!" }
];

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = products.find(p => p.id === parseInt(id));

  // ✅ Fix: Redirect if product is not found
  if (!product) {
    return (
      <div className="product-details">
        <h2>Product not found!</h2>
        <button className="btn btn-primary" onClick={() => navigate("/products")}>
          Back to Products
        </button>
      </div>
    );
  }

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="btn btn-success" onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;

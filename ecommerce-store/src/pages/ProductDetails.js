import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ProductDetails.css";

const products = [
  { id: 1, name: "Helmet Pro", price: 49, description: "Best helmet for bikers!" },
  { id: 2, name: "Racing Helmet", price: 79, description: "Perfect for racers!" },
  { id: 3, name: "Urban Helmet", price: 59, description: "Stylish & safe helmet!" }
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="btn btn-success" onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;

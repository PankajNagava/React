import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Helmet Pro", price: 49, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Racing Helmet", price: 79, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Urban Helmet", price: 59, image: "https://via.placeholder.com/150" }
];

function Home() {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4">
          <div className="card">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p>${product.price}</p>
              <Link className="btn btn-primary" to={`/product/${product.id}`}>View Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;

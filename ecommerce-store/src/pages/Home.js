import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const products = [
  { id: 1, name: "Helmet Pro", price: 49 },
  { id: 2, name: "Racing Helmet", price: 79 },
  { id: 3, name: "Urban Helmet", price: 59 }
];

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/"); // Redirect to Login if not logged in
    }
  }, [navigate]);

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4">
          <div className="card">
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

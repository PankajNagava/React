import React from "react";
import Navbar from "./components/Navbar"; // Corrected path

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => <h2>Welcome to My Store!</h2>;
const Products = () => <h2>Our Products</h2>;
const Contact = () => <h2>Contact Us</h2>;

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

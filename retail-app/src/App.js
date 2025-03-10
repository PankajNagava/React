import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Home from "./components/Home";
import UserList from "./components/UserList";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
  </Router>
);

export default App;
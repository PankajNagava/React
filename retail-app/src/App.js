import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import UserList from "./components/UserList";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
  </Router>
);

export default App;

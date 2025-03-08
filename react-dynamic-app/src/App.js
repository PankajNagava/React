import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post'; // Dynamic Post Page
import NotFound from './components/NotFound'; // 404 Page
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:id" element={<Post />} /> {/* Dynamic Post Page */}
          <Route path="*" element={<NotFound />} /> {/* 404 Page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

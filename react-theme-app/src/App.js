import React, { Suspense, useState, lazy } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import "./App.css";

// Lazy load About and Contact with a 1.2s delay
const About = lazy(() => new Promise(resolve => setTimeout(() => resolve(import("./components/About")), 1200)));
const Contact = lazy(() => new Promise(resolve => setTimeout(() => resolve(import("./components/Contact")), 1200)));

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="container">
      <h1>Welcome to the {theme} theme! 🌗</h1>
      <button className="toggle-btn" onClick={toggleTheme}>Toggle Theme</button>

      {/* Lazy load About & Contact buttons moved to bottom */}
      <div className="lazy-load-buttons">
        <button onClick={() => setShowAbout(!showAbout)}>
          {showAbout ? "Hide About" : "Show About"}
        </button>
        <button onClick={() => setShowContact(!showContact)}>
          {showContact ? "Hide Contact" : "Show Contact"}
        </button>
      </div>

      {/* Lazy Loading with Delay (1.2s) */}
      {showAbout && (
        <Suspense fallback={<div className="loading">Loading About...</div>}>
          <About />
        </Suspense>
      )}
      {showContact && (
        <Suspense fallback={<div className="loading">Loading Contact...</div>}>
          <Contact />
        </Suspense>
      )}
    </div>
  );
};

export default App;

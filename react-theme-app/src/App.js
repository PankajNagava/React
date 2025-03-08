import React, { Suspense } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import "./App.css";

// Lazy load the components
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Home />
      </Suspense>
    </ThemeProvider>
  );
};

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container">
      <h1>Welcome to the {theme} theme! 🌗</h1>
      <button className="toggle-btn" onClick={toggleTheme}>Toggle Theme</button>

      <Suspense fallback={<div className="loading">Loading About section...</div>}>
        <About />
      </Suspense>

      <Suspense fallback={<div className="loading">Loading Contact section...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default App;

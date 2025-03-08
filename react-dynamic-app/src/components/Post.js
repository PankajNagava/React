import React from 'react';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>⚠️ 404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="home-link">🏠 Go Back Home</a>
    </div>
  );
};

export default NotFound;

import React from "react";
import "./Contact.css"; // Import CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>📩 Contact Us</h2>
      <p>Have any questions? Feel free to reach out to us!</p>
      <div className="contact-details">
        <p>📧 Email: contact@example.com</p>
        <p>📞 Phone: +123 456 7890</p>
        <p>📍 Location: Xyz, India</p>
      </div>
    </div>
  );
};

export default Contact;

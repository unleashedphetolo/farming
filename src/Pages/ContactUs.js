import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleMessageChange = (e) => {
    const messageContent = e.target.value;
    // Split the message content by spaces and count the number of words
    const wordCount = messageContent.split(/\s+/).filter(Boolean).length;
    if (wordCount <= 500) {
      setMessage(messageContent);
    }
  };

  const handleSendMessage = () => {
    // Basic validation
    if (!name.trim()) {
      setIsNameValid(false);
      return;
    } else {
      setIsNameValid(true);
    }

    if (!validateEmail(email)) {
      setIsEmailValid(false);
      return;
    } else {
      setIsEmailValid(true);
    }

    const subject = "Message from Contact Form";
    const emailContent = `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `;

    window.location.href = `mailto:ulterspace@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailContent)}`;
  };

  const validateEmail = (email) => {
    // Basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-content">
        <p>
          We would love to hear from you! If you have any questions, feedback, or inquiries, please feel free to
          reach out to us using the contact form below or through the provided contact details.
        </p> 
        <form className="contact-form">
          <div className="input-container">
            <input
              type="text"
              className={`contact-input ${!isNameValid ? "invalid" : ""}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" " // Add an empty placeholder to activate the floating label effect
            />
            <label className={`placeholder ${name ? "focused" : ""}`}>Your Name</label>
            {!isNameValid && <p className="error-message">Please enter your name</p>}
          </div>
          <div className="input-container">
            <input
              type="email"
              className={`contact-input ${!isEmailValid ? "invalid" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" " // Add an empty placeholder to activate the floating label effect
            />
            <label className={`placeholder ${email ? "focused" : ""}`}>Your Email</label>
            {!isEmailValid && <p className="error-message">Please enter a valid email</p>}
          </div>
          <div className="input-container">
            <textarea
              className="contact-message"
              value={message}
              onChange={handleMessageChange}
              placeholder=" " // Add an empty placeholder to activate the floating label effect
              maxLength="500"
            ></textarea>
            <label>Your Message (500 words max)</label>
          </div>
          <button type="button" className="contact-button" onClick={handleSendMessage}>
            Send Message
          </button>
        </form>
        
        <div className="contact-details">
          <h2>Contact Details</h2>
          <p>
            Email: ulterspace@gmail.com
            <br />
            Address: Polokwane, Limpopo,<br/> South Africa
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

import React, { useState } from "react";
import "./ContactUs.css";
import location from '../images/location.png';

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleMessageChange = (e) => {
    const messageContent = e.target.value;
    const wordCount = messageContent.split(/\s+/).filter(Boolean).length;
    if (wordCount <= 500) {
      setMessage(messageContent);
    }
  };

  const handleSendMessage = () => {
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

    window.location.href = `mailto:ulterspace@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="main-container">
      <div className="contact-container">
        <h1 className="contact-title">Let's Connect.</h1>
        <div className="contact-content">
          <p>
            We would love to hear from you! If you have any questions, feedback, or inquiries, please feel free to reach out to us using the contact form below or through the provided contact details.
          </p> 
          <form className="contact-form">
            <div className="input-container">
              <input
                type="text"
                className={`contact-input ${!isNameValid ? "invalid" : ""}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=" " 
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
                placeholder=" " 
              />
              <label className={`placeholder ${email ? "focused" : ""}`}>Your Email</label>
              {!isEmailValid && <p className="error-message">Please enter a valid email</p>}
            </div>
            <div className="input-container">
              <textarea
                className="contact-message"
                value={message}
                onChange={handleMessageChange}
                placeholder=" " 
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
      <div className="map-container">
        <div style={{display:"flex", justifyContent:"center"}}>
      <img src={location} alt="location" style={{height:"auto", width:"60px"}}/>
        <h2>Our Location</h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.123124116904!2d29.453313314443336!3d-23.904377484512915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec69dbcf7ac57bb%3A0x13e2e2f2d2c62b2b!2sPolokwane%2C%20Limpopo%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1623858833943!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;

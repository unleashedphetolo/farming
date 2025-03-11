import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import whatsappLogo from "../images/Footer/whatsapp.png";
import facebookLogo from "../images/Footer/facebook.png";
import twitterLogo from "../images/Footer/x.png";
import instagramLogo from "../images/Footer/instagram.png";
import "./Footer.css"; 

function Footer() {
  return (
    <footer
      className='footer'
      style={{ backgroundColor: 'green', height: 200, marginTop: 30 }}
    >
      <Container>
        <Row style={{display: "flex", justifyContent: "center", padding:"45px"}}> 
          <Col md={4}>
            <div className="footer-content">
              <div className="footer-links">
              <a href="https://wa.me/27721876191" target="_blank" rel="noopener noreferrer">
                  <img src={whatsappLogo} alt="WhatsApp" className="social-media-icon" />
                </a>
                <a href="https://www.facebook.com/ulterspace" target="_blank" rel="noopener noreferrer">
                  <img src={facebookLogo} alt="Facebook" className="social-media-icon" />
                </a>
                <a href="https://www.twitter.com/ulterspace_net" target="_blank" rel="noopener noreferrer">
                  <img src={twitterLogo} alt="Twitter" className="social-media-icon" />
                </a>
                <a href="https://www.instagram.com/ulterspace" target="_blank" rel="noopener noreferrer">
                  <img src={instagramLogo} alt="Instagram" className="social-media-icon" />
                </a>
              </div>
            </div>
          </Col>
          <Col md={4}>
  <p style={{ 
    color: 'black', 
    textShadow: `
      0 0 5px #cfcfcf, 
      0 0 10px #cfcfcf, 
      0 0 15px #cfcfcf, 
      0 0 20px #cfcfcf, 
      0 0 25px #cfcfcf, 
      0 0 30px #cfcfcf` 
    }}>
    &copy; {new Date().getFullYear()} Machad Farming - All Rights Reserved.
  </p>
</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

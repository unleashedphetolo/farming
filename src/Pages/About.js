import React from 'react';
import './About.css'; // Import your CSS file for styling
import farmImage from '../images/verg.jpg'; // Import your farm image

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="header">
          <h1>About Us</h1>
          <img src={farmImage} alt="Farm" className="farm-image" />
        </div>
        <p className="mission-statement">
          At <span className="farm-name">New Development Farm</span>, we are on a mission to cultivate a sustainable future by providing high-quality, organically grown produce while fostering a deep connection between our community and the land.
        </p>
        <p className="story">
          Founded in <span className="year">2024</span>, <span className="farm-name">New Development Farm</span> started as a small family-run farm with a passion for organic agriculture and a commitment to environmental stewardship. Over the years, we have grown into a thriving community-supported farm, dedicated to producing fresh, healthy, and delicious food.
        </p>
        <p className="practices">
          <span className="heading">Our Practices</span><br />
          <strong>Sustainable Farming:</strong> We use environmentally friendly farming methods that protect the soil, conserve water, and promote biodiversity. Our practices are designed to sustain the health of our land and ensure the long-term productivity of our farm.<br />
          <strong>Organic Produce:</strong> All our crops are grown without synthetic fertilizers, pesticides, or genetically modified organisms (GMOs). We follow rigorous organic standards to provide you with the healthiest and safest food possible.<br />
          <strong>Community Engagement:</strong> We believe in the power of community. Through our Community Supported Agriculture (CSA) program, farm tours, workshops, and farmers' markets, we create opportunities for you to connect with the source of your food and learn about sustainable agriculture.
        </p>
        <p className="get-involved">
          <span className="heading">Get Involved</span><br />
          We invite you to be a part of the <span className="farm-name">New Development Farm</span> community. Whether you’re interested in joining our CSA program, visiting our farm, volunteering, or simply enjoying our produce, there are many ways to get involved. Together, we can make a positive impact on our environment and our health.
        </p>
      </div>
    </div>
  );
};

export default About;

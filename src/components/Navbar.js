import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/FarmLogo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(`Navbar sticky state: ${isSticky}`);
  }, [isSticky]);

  return (
    <nav className={`navbar navbar-default ${isSticky ? "navbar-fixed-top" : ""}`}>
      <div className="header">
        <div className="logo-container">
          <Link to="/" className="logo">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="title-container">
          <div>
            <Link to="/" className="title">
              New Development Farm
            </Link>
          </div>
          <div>
            <Link to="/" className="slogan">
              Where Freshness Flourishes
            </Link>
          </div>
        </div>
      </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/Shop">Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

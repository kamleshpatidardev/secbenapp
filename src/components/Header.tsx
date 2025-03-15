import React from "react";
import "./Header.css";
import logo from "../assets/logo.svg"; // Ensure you have a logo in assets folder

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Security Benefit Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

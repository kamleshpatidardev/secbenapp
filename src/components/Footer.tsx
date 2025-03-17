import "./Footer.css";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
      <NavLink to="/"><img src={logo} alt="Security Benefit Logo" className="logo" /></NavLink>
      </div>
      <nav className="nav-links">
      <NavLink to="/privacy">Privacy Policy</NavLink>
      <NavLink to="/terms">Terms of Service</NavLink>
      </nav>
    </footer>
  );
};

export default Footer;

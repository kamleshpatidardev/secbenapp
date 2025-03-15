import "./Footer.css";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Security Benefit Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Support</a>
      </nav>
    </footer>
  );
};

export default Footer;

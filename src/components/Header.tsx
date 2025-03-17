import "./Header.css";
import logo from "../assets/logo.svg"; // Ensure you have a logo in assets folder
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
      <NavLink to="/"><img src={logo} alt="Security Benefit Logo" className="logo" /></NavLink>
      </div>
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Conatct</NavLink>
      </nav>
    </header>
  );
};

export default Header;

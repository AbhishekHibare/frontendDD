import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // CSS for styling the navbar
import logo from '../assets/ddlogo.png'; // Path to the logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo on the left side */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Navigation links on the right side */}
      <div className="navbar-links">
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;


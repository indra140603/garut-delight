import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <aside className="header">
      <img src="/images/logo1.png" alt="Garut Delight Logo" className="logo" />
      <nav>
        <Link to="/" className="nav-item">
          <img src="/images/home-icon1.png" alt="Home Icon" className="nav-icon" />
          Home
        </Link>
        <Link to="/about" className="nav-item">
          <img src="/images/about.png" alt="About Icon" className="nav-icon" />
          About
        </Link>
      </nav>
    </aside>
  );
};

export default Header;

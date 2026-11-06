import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div>
    <header>
      <h1>சுருளி விலாஸ்</h1>
    </header>
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/rooms">Rooms</Link>
      <Link to="/restaurant">Restaurant</Link>
      <Link to="/contact">F & Q</Link>
    </nav>
  </div>
);

export default Navbar;

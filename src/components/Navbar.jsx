import React from 'react';
import { NavLink } from 'react-router-dom';
import "../components/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Simplified</h1> {/* Add your title here */}
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link">Home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/leaderboard" className="navbar-link">Leaderboard</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

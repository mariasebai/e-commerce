import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-title">Shopping</span>
      </div>
      <div className="navbar-links">
        <span className="navbar-item">Home</span>
        <div class="dropdown">
    <button class="dropbtn">Products
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Electronics</a>
      <a href="#">Jewlerry</a>
      <a href="#">Clothing</a>
    </div>
  </div>
        <span className="navbar-item">About Us</span>
        <span className="navbar-item">Contact Us</span>
        <span className="navbar-icon"><FaShoppingCart /></span>
        <span className="navbar-icon"><FaHeart /></span>
      </div>
    </nav>
  );
}

export default Navbar;

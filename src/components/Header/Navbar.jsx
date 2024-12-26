import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuOpen = () =>{
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav>
        <div>
            <button className="pickup-cta-btn">Pickup Request</button>
            <span className="hamburger-btn" onClick={handleMenuOpen}><GiHamburgerMenu/></span>
        </div>
        <div className={`nav-els ${isMenuOpen?'menu-open':''}`}>
            <ul>
                <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "") + " nav-links"} to="/" onClick={handleMenuOpen}>Home</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "") + " nav-links"} to="/about" onClick={handleMenuOpen}>About Us</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "") + " nav-links"} to="/services" onClick={handleMenuOpen}>Services</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "") + " nav-links"} to="/blog" onClick={handleMenuOpen}>Blog</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "") + " nav-links"} to="/contact" onClick={handleMenuOpen}>Contact Us</NavLink></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
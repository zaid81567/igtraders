import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
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
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact us</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
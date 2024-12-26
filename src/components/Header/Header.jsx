import React from 'react'
import Navbar from './Navbar';
import './Header.css'
import './Navbar.css'

import { MdEmail, MdPhone} from "react-icons/md";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Header() {
  return (
    <header>
        <div className="contact-info-top">
            <div className='mail-number'>
              <div><span className="icon"><MdEmail/></span><p>igtradersscrap@gmail.com</p></div>
              <div><span className="icon"><MdPhone/></span><p>+91 9830415155</p></div>
            </div>

            <div className="social-links">
              <ul>
                <li><span><FaFacebook/></span></li>
                <li><span><FaInstagram/></span></li>
                <li><span><FaWhatsapp/></span></li>
              </ul>
            </div>
        </div>

        {/* <div className="company-logo"></div> */}
        <Navbar/>
    </header>
  )
}

export default Header
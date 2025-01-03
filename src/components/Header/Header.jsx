import React from 'react'
import Navbar from './Navbar';
import './Header.css'
import './Navbar.css'

import { MdEmail, MdPhone} from "react-icons/md";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import companyLogo from '../../assets/big_logo.png'
function Header() {
  return (
    <header>
        <div className="contact-info-top">
            <div className="left">
              <div className='mail-number'>
                <div><span className="icon"><MdEmail/></span><a href="mailto:igtradersscrap@gmail.com" aria-label='click to mail'><p>igtradersscrap@gmail.com</p></a></div>
                <div><span className="icon"><MdPhone/></span><a href='tel:+919830415155' aria-label='click to call'><p>+91 9830415155</p></a></div>
              </div>
              <div className="nav-triangle"></div>
            </div>

            <div></div>

            <div className="social-links">
              <ul>
                <li><span><FaFacebook/></span></li>
                <li><span><FaInstagram/></span></li>
                <li><span><a aria-label='chat on whatsapp' href='https://wa.me/919830415155' target='_blank'><FaWhatsapp/></a></span></li>
              </ul>
            </div>
        </div>

        <div className="company-logo-container">
          <img src={companyLogo} alt=""/>
        </div>
        <Navbar/>
    </header>
  )
}

export default Header
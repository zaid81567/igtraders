import React from 'react'
import './FooterLinks.css'

import { IoLocation } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLinkedin, FaPhone } from "react-icons/fa6";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

function FooterLinks() {
    const services = [
        "E waste Management",
        "Second Hand Laptop Buyer",
        "Second Hand Computer Buyer",
        "Second Hand Ac Buyer",
        "Second Hand Ups Batteries Buyer",
        "Second Hand Office Furniture Buyer",
        "Second hand Battery Buyer",
        "Old DG Generator Buyer in Kolkata",
        "Plastic Recycling",
        "Secondhand Computer & Laptop Buyer"
    ];

    const quick_links = ["Home", "About us", "Scrap gallery", "Contact us"]

  return (
    <footer>
      <div className="brief-outro">
        <span><h2>Company Logo</h2></span>
        <p>Unique Scrap Buyers company takes great pride in serving its customers as the best scrap buyers in Kolkata.</p>
        <ul>
          <li><FaFacebook/></li>
          <li><FaInstagram/></li>
          <li><FaWhatsapp/></li>
          <li><FaLinkedin/></li>
        </ul>
      </div>

      <div className="service">
      <h2>Services</h2>
      <ul>
        {services.map((item, index)=>{
          return (
            <li>{item}</li>
          )
        })}
        </ul>
      </div>

      <div className="quick-links">
        <h2>Quick Links</h2>
        <ul>
        {quick_links.map((item, index)=>{
          return (
            <li>{item}</li>
          )
        })}
        </ul>
      </div>

      <div className="our-contact">
        <h2>Our Contact</h2>
        <div>
          <div>
          <span><IoLocation/></span>
          <p>10/1/1, Collin lane, Kolkata-700016</p>
        </div>
        <div>
          <span><MdMarkEmailUnread/></span>
          <p>igtradersscrap@gmail.com</p>
        </div>
        <div>
          <span><FaPhone/></span>
          <p>+91 9830415155</p>
        </div>
      </div>
        </div>    
    </footer>
  )
}

export default FooterLinks
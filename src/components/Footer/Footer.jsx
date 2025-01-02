import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom';

import { IoLocation } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLinkedin, FaPhone } from "react-icons/fa6";
import { FaInstagram, FaFacebook, FaWhatsapp, FaAngleUp } from "react-icons/fa";
import CopyrightBanner from './CopyrightBanner/CopyrightBanner';
import companyLogo from '../../assets/big_logo.png'

function Footer() {
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

    const quick_links = [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "About us",
        path: "/about",
      },
      {
        name: "Scrap gallery",
        path: "/gallery",
      },
      {
        name: "Contact us",
        path: "/contact",
      },
    ]

    const HandleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

  return (
    <>
    <footer>
    <div className="scroll-to-top" onClick={HandleScrollToTop}><FaAngleUp/></div>
      <div className="brief-outro">
        <img src={companyLogo} alt="" />
        <p>IG Traders Scrap Buyer company takes great pride in serving its customers as the best scrap buyers in Kolkata.</p>
        <ul>
          <li><a href="#"><FaFacebook/></a></li>
          <li><a href=""><FaInstagram/></a></li>
          <li><a aria-label='chat on whatsapp' href='https://wa.me/919830415155' target='_blank'><FaWhatsapp/></a></li>
          <li><a href=""><FaLinkedin/></a></li>
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
            <li className='quick-link'><NavLink className={({ isActive }) => (isActive ? "active-link" : "quick-link")} style={{textDecoration:"none"}} to={item.path} key={index}>{item.name}</NavLink></li>
          )
        })}
        </ul>
      </div>

      <div className="our-contact">
        <h2>Our Contact</h2>
        <div>
          <div>
            <span><IoLocation/></span>
            <a href="https://www.google.com/maps/place/I+G+TRADERS+scrap+buyer,+10%2F1%2F1,+Collin+Ln,+Esplanade,+Taltala,+Kolkata,+West+Bengal+700016/data=!4m2!3m1!1s0x3a02770022e3c28b:0x3f9df13b7e648b8?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjE0Ni4yMTEYACCenQoqfiw5NDI0MjUzNSw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw5NDIzOTEyNyw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICSU4%3D"><p>10/1/1, Collin lane, Kolkata-700016</p></a>
          </div>
          <div>
            <span><MdMarkEmailUnread/></span>
            <a href="mailto:igtradersscrap@gmail.com" aria-label='click to mail'><p>igtradersscrap@gmail.com</p></a>
          </div>
          <div>
            <span><FaPhone/></span>
            <a href='tel:+919830415155' aria-label='click to call'><p>+91 9830415155</p></a>
          </div>
        </div>
      </div>    
    </footer>
    <CopyrightBanner/>
    </>
  )
}

export default Footer
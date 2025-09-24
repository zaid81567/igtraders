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
        "E waste Recycling",
        "Plastic Recycling",
        "Office Desmantle",
        "Second Hand Laptop/Computer Buyer",
        "Second Hand Ac Buyer",
        "Second Hand Ups Batteries Buyer",
        "Second Hand Office Furniture Buyer",
        "Old DG Generator Buyer in Kolkata",
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
            <a href="https://www.google.com/maps/place/IG+traders/@22.5534015,88.3553001,16z/data=!4m10!1m2!2m1!1sigtraders!3m6!1s0x3a027707740123e9:0x66abe5bdcdcee573!8m2!3d22.5534015!4d88.3553001!15sCglpZ3RyYWRlcnOSARJzY3JhcF9tZXRhbF9kZWFsZXKqATIQATIfEAEiG5PKHwPXPwSVHoSBhdS6jw2JXvwq2Li0bZpVojINEAIiCWlndHJhZGVyc-ABAA!16s%2Fg%2F11yg09bjty?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"><p>2 No., Cockburn Lane, Esplanade, Taltala, Kolkata, West Bengal - 700014</p></a>
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

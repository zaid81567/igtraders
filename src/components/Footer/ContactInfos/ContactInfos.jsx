import React from 'react'
import { IoLocation } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import './ContactInfos.css'


function ContactInfos() {
  return (
    <div className='contact-infos-container'>
        <div className="contact-info">
            <span><IoLocation/></span>
            <h4>Address</h4>
            <p>2 No., Cockburn Lane, Esplanade, Taltala, Kolkata, West Bengal - 700014</p>
        </div>
        <div className="contact-info">
            <span><MdMarkEmailUnread/></span>
            <h4>Email</h4>
            <p>igtradersscrap@gmail.com</p>
        </div>
        <div className="contact-info">
            <span><FaPhone/></span>
            <h4>Phone</h4>
            <p>+91 9830415155</p>
        </div>
    </div>
  )
}

export default ContactInfos

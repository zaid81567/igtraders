import React from 'react'
import './AboutUsSection.css'
import { GrUserWorker } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";


function AboutUsSection() {
  return (
    <div className='about-us-section'>
        <h1>Buy And Sell Scrap With Us</h1>
        <div className="about-us">
            <h3>More About Us</h3>
            <p><span>I G Traders</span> Scrap Buyers company takes great pride in serving its customers as the best scrap buyers in Kolkata. We buy unused goods at the right price through highly advanced technology to create a peaceful and pollution-free environment and free the customers from worrying about unwanted materials. The scraps we collect are - old and second-hand office furniture, laptops and computers, DZ generators, etc. Our skilled and experienced workers are available 24*7 and we are committed to providing ultimate customer service. Our team members separate recyclable materials and bring them back to the environment using modern and eco-friendly methods. If any customer has to face the problem of unwanted material in their office or home, we take care of them by carefully collecting all the unwanted material from their premises.</p>
        </div>
        <div className="about-us-card-container">
            <div>
                <h2>We Have Many Years Of Experience to collect scrap items</h2>
                <h4>Why Choose Us</h4>
            </div>
            <div className="about-us-card">
                <div><span className="icon"><GrUserWorker/></span></div>
                <h4>Comfort & Convenience</h4>
                <p>Schedule a pickup at your convenience. Ensure timely scrap removal from your home or office.</p>
            </div>
            <div className="about-us-card">
                <div><span className="icon"><GiReceiveMoney/></span></div>
                <h4>Instant Payment</h4>
                <p>Unlike other scrap dealers, we don't keep your money. Get paid instantly as we clear the scrap.</p>
            </div>
            <div className="about-us-card">
                <div><span className="icon"><VscWorkspaceTrusted/></span></div>
                <h4>Right Price for Right Scrap</h4>
                <p>Don't settle for low prices because you just want your property clean. Get the right price for the right scrap.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUsSection
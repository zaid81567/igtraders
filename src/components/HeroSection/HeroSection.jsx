import React from 'react'
import './HeroSection.css'
import { MdPhoneIphone } from "react-icons/md";
import heroImage from '../../assets/hero-page-img.jpg';


function HeroSection() {
  return (
     <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div>
            <div>
                <h1 className="first">Make Money out of</h1>
                <h1 className="second">Anything & Everything</h1>
            </div>
            <div className="cta-card">
                <h2>Sell or Buy</h2>
                <p>Just drop your mobile number</p>
                <div>
                    <span className='icon phone-icon'><MdPhoneIphone/></span>
                    <input type="text" />
                </div>
                <button>SUBMIT</button>
            </div>
        </div>
        <div className="overlay"></div>
     </div>
  )
}

export default HeroSection
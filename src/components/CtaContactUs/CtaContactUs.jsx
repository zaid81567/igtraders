import React from 'react'
import './CtaContactUs.css'
import { FaHandPointRight } from "react-icons/fa";


function CtaContactUs() {
  return (
    <div className="cta-contact-us-container">
        <h3>Perfect Solutions For <span>Any Inquiry</span></h3>
        <h1><span>Sell</span> Or <span>Buy</span></h1>
        <p>अगर आप किसी भी प्रकार के पुराने औद्योगिक स्क्रैप, औद्योगिक अपशिष्ट, चिकित्सा मशीनरी और स्क्रैप धातु के लिए सर्वोत्तम मूल्य चाहते हैं, तो आज ही हमसे संपर्क करें। Get Perfect Scrap Solution for Any Inquiry.</p>
        <button><span><FaHandPointRight/></span>Contact Us</button>
    </div>
  )
}

export default CtaContactUs
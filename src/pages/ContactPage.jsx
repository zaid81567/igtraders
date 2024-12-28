import React from 'react'
import './css/ContactPage.css'
import ContactForm from '../components/ContactForm/ContactForm'

function ContactPage() {
  return (
    <div className="contact-us-page">
      <div className="contact-us-top">
        <div className="contact-us-container">
          <h1>Contact Us</h1>
            <ContactForm/>
        </div>

        <div className="reach-us-container">
          <h1>Reach Us</h1>
          <div>
            <p className='reach-us-intro'>For more details you can contact us or make a call to us anytime. We are available for 24*7 and all days in a week. We have a specialized customer support team that will guide you appropriately.</p>
            <p className="owner">Owner: <span className="owner-name">Zarrar Shaik</span></p>
            <div className="phone-number-container">
              <p>Contact: <span className="phone-number-span">+91 9830415155</span></p>
            </div>
            <p className="address-p">Address: <span className="address-span">10/1/1, Collin lane, Kolkata-700016</span></p>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1090.8322389558064!2d88.35586297762593!3d22.555359787324115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02770022e3c28b%3A0x3f9df13b7e648b8!2sI%20G%20TRADERS%20scrap%20buyer!5e0!3m2!1sen!2sin!4v1735373843466!5m2!1sen!2sin" 
          style={{border:0}} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  )
}

export default ContactPage
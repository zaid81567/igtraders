import React from 'react'
import { useRef } from 'react';
import './HeroSection.css'
import { MdPhoneIphone } from "react-icons/md";
import heroImage from '../../assets/hero-page-img.jpg';

import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function HeroSection() {
    const form = useRef();

    const sendPhone = (e) => {
        e.preventDefault();

        // Disable form submission while processing
        const submitButton = form.current.querySelector('button[type="submit"]');
        submitButton.disabled = true;

        // Create the email promise
        const emailPromise = emailjs.sendForm(
            "service_00gpdw7",
            "template_jj5d3rb",
            form.current,
            {
                publicKey: 'uqjqDbHw0EFUA3o5B',
            }
        );

            // Show toast with promise
        toast.promise(
            emailPromise,
            {
                pending: 'Sending phone number...',
                success: 'Number sent successfully! 👍',
                error: 'Failed to send. Please try again. 🤔'
            },
            {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            }
        );

        // Handle the promise
        emailPromise
        .then(() => {
            console.log('SUCCESS!');
            form.current.reset();
        })
        .catch((error) => {
            console.log('FAILED...', error.text);
        })
        .finally(() => {
            submitButton.disabled = false;
        });
    };


  return (
     <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div>
            <div>
                <h1 className="first">Make Money out of</h1>
                <h1 className="second">Anything & Everything</h1>
            </div>
            <form className="cta-card" ref={form} onSubmit={sendPhone}>
                <div className='cta-heading'>
                    <h2>Sell or Buy</h2>
                    <p>Just drop your mobile number</p>
                </div>
                <div className='phone-number-container'>
                    <span className='icon phone-icon'><MdPhoneIphone/></span>
                    <input type="text" name="from_number" placeholder='Enter Your Number'/>
                </div>
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
        <div className="overlay"></div>
     </div>
  )
}

export default HeroSection
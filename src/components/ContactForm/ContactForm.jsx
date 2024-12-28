import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_00gpdw7', 'template_vkx6oim', form.current, {
        publicKey: 'uqjqDbHw0EFUA3o5B',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <input className='placeholder-bold' type="text" name="from_name" placeholder='Your Name'/>
        <input className='placeholder-bold' type="text" name="from_email" placeholder='Your Email'/>
        <input type="text" name="from_phone" placeholder='Your Phone'/>
        {/* <input type="text" name="from_subject" placeholder='Subject'/> */}
        <textarea className='placeholder-bold' name="from_message" placeholder='Your Message' rows={5}/>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
    
  );
};

export default ContactForm;
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {
  const form = useRef();
  // const [hasMsgSent, setHasMsgSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Disable form submission while processing
    const submitButton = form.current.querySelector('input[type="submit"]');
    submitButton.disabled = true;

    // Create the email promise
    const emailPromise = emailjs.sendForm(
      'service_00gpdw7',
      'template_vkx6oim',
      form.current,
      {
        publicKey: 'uqjqDbHw0EFUA3o5B',
      }
    );

    // Show toast with promise
    toast.promise(
      emailPromise,
      {
        pending: 'Sending message...',
        success: 'Message sent successfully! 👍',
        error: 'Failed to send message. Please try again. 🤔'
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
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <input className='placeholder-bold' type="text" name="from_name" placeholder='Your Name' required/>
        <input type="text" name="from_email" placeholder='Your Email'/>
        <input className='placeholder-bold' type="text" name="from_phone" placeholder='Your Phone' required/>
        <textarea className='placeholder-bold' name="from_message" placeholder='Your Message' rows={5} required/>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default ContactForm;
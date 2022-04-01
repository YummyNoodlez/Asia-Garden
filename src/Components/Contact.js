import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();    //from Emailjs

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bh1jzyc', 'template_e8mc7ug', form.current, 'ff8hbBJZCXFJ2PxzZ')  //from emailjs {sender info, message template, this form for info, My user ID}
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };


  return (
    
    <div className="contact-left">
        <form name="EmailForm" onSubmit={sendEmail} ref={form}>     
                        
          <label>Email</label>
          <input type="email" id="email" name="Contact-Email" placeholder="Ex. JohnDoe@gmail.com"/> {/**emailer input */}

          <label>Message</label>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message"></textarea> {/**text input */}

          <input type="submit" className="send-message-cta" value="Send"/>    {/**submit button */}
        </form>
    </div>
              
  )
}

export default Contact
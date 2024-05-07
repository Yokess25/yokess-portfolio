import React from 'react'
import './contact.css'
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_option"> 
        <article className="contact_option">
        <MdEmail className="contact_option-icon"/>
          <h4>Email</h4>
          <h5>yokess025@gmail.com</h5>
          <a href="mailto:yokess025@gmail.com" target="_blank"> Send a message</a>
        </article>

        <article className="contact_option">
        <MdEmail className="contact_option-icon"/>
          <h4>Whatsapp</h4>
          <h5>+91 9003978203</h5>
          <a href="https://web.whatsapp.com/send?phone+919003978203" target="_blank">Send a message</a>
        </article>  
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Your name" required/>
          <input type="email" name="email" placeholder="Your email" required/>
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
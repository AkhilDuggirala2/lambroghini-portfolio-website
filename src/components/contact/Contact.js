/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./contact.css";
import { GrMail } from "react-icons/gr";
import { BsMessenger } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-container">
        <h1>
          <span>contact</span>us
        </h1>
      </div>
      <div className="contact-me">
        <div className="contact-options">
          <div className="contact-option">
            <GrMail className="contact-option-icon" />
            <h4>Gmail</h4>
            <h5>abcd@example.com</h5>
            <a href="mailto:akhilduggirala19@gmail.com">Send a Message</a>
          </div>
          <div className="contact-option">
            <BsMessenger className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>akhilTutorials</h5>
            <a href="https:/m.me/profile.php?id=100009563371517">
              Send a Message
            </a>
          </div>
          <div className="contact-option">
            <RiWhatsappFill className="contact-option-icon" />
            <h4>Whatsapp</h4>
            <h5>+5284961738</h5>
            <a href="https://api.whatsapp.com/send?phone+9652869884">
              Send a Message
            </a>
          </div>
        </div>
        {/* End of Contact Options */}
        <form>
          <input
            className="contact-input-name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className="contact-email"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <textarea
            className="contact-message"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <div className="contact-button">
            <a href="#" className="contact-text">
              Send Message
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

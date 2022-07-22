/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-me">
          <h1>Quick Links</h1>
          <ul className="footer-link">
            <li>
              <RiArrowRightSLine className="footer-icon" />
              <a href="#">Home</a>
            </li>
            <li>
              <RiArrowRightSLine className="footer-icon" />
              <a href="#about">About</a>
            </li>
            <li>
              <RiArrowRightSLine className="footer-icon" />
              <a href="#blog">Blog</a>
            </li>
            <li>
              <RiArrowRightSLine className="footer-icon" />
              <a href="#services">Services</a>
            </li>
            <li>
              <RiArrowRightSLine className="footer-icon" />
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <RiArrowRightSLine className="footer-icon" />
              <a href="#testimonial">Testimonial</a>
            </li>
            <li>
              <RiArrowRightSLine className="footer-icon" />
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="contact-services">
          <h1>Our Services</h1>
          <ul className="contact-link-1">
            <li>
              <RiArrowRightSLine className="footer-icon" />
              <a href="#">Company</a>
            </li>
            <li>
              <RiArrowRightSLine className="footer-icon" />
              <a href="#">Contact Us</a>
            </li>
            <li>
              <RiArrowRightSLine className="footer-icon" />
              <a href="#">Privacy & Legal</a>
            </li>
            <li>
              <RiArrowRightSLine className="footer-icon" />
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>

        <div className="contact-info">
          <h1>Contact Info</h1>
          <ul className="contact-link-2">
            <li>
              <RiArrowRightSLine className="footer-icon" />
              <a href="#">Careers</a>
            </li>
            <li>
              <RiArrowRightSLine className="footer-icon" />
              <a href="#">Media Center</a>
            </li>
            <li>
              <RiArrowRightSLine className="footer-icon" />
              <a href="#">Cookie Settings</a>
            </li>
            <li>
              <RiArrowRightSLine className="footer-icon" />
              <a href="#">NewsLetter</a>
            </li>
          </ul>
        </div>

        <div className="contact-social">
          <h1>Follow Us</h1>
          <ul className="contact-link-3">
            <li>
              <FaFacebookF className="footer-icon" />
              <a href="#">Facebook</a>
            </li>
            <li>
              <AiFillInstagram className="footer-icon" />
              <a href="#">Instagram</a>
            </li>
            <li>
              <AiFillLinkedin className="footer-icon" />
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <FaTwitter className="footer-icon" />
              <a href="#">Twitter</a>
            </li>
            <li>
              <AiFillGithub className="footer-icon" />
              <a href="#">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

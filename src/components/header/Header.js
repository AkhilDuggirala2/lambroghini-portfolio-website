/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import videobg from "../../assets/Aventador SVJ_ shaping the future.mp4";
const Header = () => {
  const [show, handleShow] = useState(false);
  const [activeNav, setActiveNav] = useState("#");

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`header-container ${show && "header-back"}`}>
      <video src={videobg} autoPlay loop muted playsInline />

      <nav>
        <img src={Logo} alt="" className="logo" />
        <ul>
          <li>
            <a
              href="#"
              onClick={() => setActiveNav("#")}
              className={activeNav === "#" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setActiveNav("#about")}
              className={activeNav === "#about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#blog"
              onClick={() => setActiveNav("#blog")}
              className={activeNav === "#blog" ? "active" : ""}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => setActiveNav("#services")}
              className={activeNav === "#services" ? "active" : ""}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => setActiveNav("#portfolio")}
              className={activeNav === "#portfolio" ? "active" : ""}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              onClick={() => setActiveNav("#testimonial")}
              className={activeNav === "#testimonial" ? "active" : ""}
            >
              Testimonial
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setActiveNav("#contact")}
              className={activeNav === "#contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

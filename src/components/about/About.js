/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./about.css";
import ME from "../../assets/me.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-container">
        <h1>
          <span>about</span>me
        </h1>
      </div>
      <div className="content">
        <div className="image">
          <img src={ME} alt="About Me" className="photo" />
        </div>
        <p>
          Lamborghini currently produces the V12-powered Aventador and the
          V10-powered Huracán, along with the Urus SUV powered by a twin-turbo
          V8 engine. In addition, the company produces V12 engines for offshore
          powerboat racing.
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

export default About;

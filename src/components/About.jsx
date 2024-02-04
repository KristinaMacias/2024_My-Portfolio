import React, { useEffect, useState } from "react";
import "../styles/about.css"; // Update the CSS file name accordingly
import aboutIcon from "../assets/icons/info.svg";


const About = () => {
  return (
    <section className="about-section">
      <div className="top-box">
        <header>
          <h6>
            <span>03 - </span>About
          </h6>
          <img className="icon" src={aboutIcon} alt="" />
        </header>
      </div>
      <div className="bottom-box">
        <h2 className="block-heading-secondary" id="about-heading">
          Hi there, I'm Kristina . . .
        </h2>
        <div className="text-container">
          <p>
            Hello there! I'm Kristina, a React.js developer and GIS Nerd based in Long Beach,
            CA. I'm passionate about crafting modern, responsive, and accessible
            web solutions. Currently, I'm actively seeking a full-time position
            as a front-end developer or GIS analyst. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

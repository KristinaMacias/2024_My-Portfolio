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
            I'm a React.js developer and GIS nerd based in Long Beach, CA.
            I have a passion for creating beautiful and user-friendly web
            applications and maps.
          </p>
          <p>
            I am a graduate of California State University, Long Beach with a
            B.A. in Geography and a minor in Environmental Science & Policy.
            After working as a GIS Researcher, I furthered my eduaction and obtained a certificate in
            Front-End Development from El Camino College.
          </p>
          <p>
            I am continually expanding my knowledge by learning PostgreSQL,
            Python, and various mapping frameworks.
          </p>
          <p>
            I am seeking my next role in front-end
            development or as a GIS analyst/developer. Feel free to contact me via <a href="https://www.linkedin.com/in/maciaskristina/">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

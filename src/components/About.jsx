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
            Hello there! I'm Kristina, a React.js developer based in Long Beach,
            CA. I'm passionate about crafting modern, responsive, and accessible
            web solutions. Currently, I'm actively seeking a full-time position
            as a front-end developer. In my free time, I'm dedicated to
            mastering the PERN (PostgreSQL, Express, React, Node.js) stack and
            enhancing my portfolio. Additionally, I enjoy producing lofi music
            and playing in video games/tapletop games (Ask me about my
            favorites!).
          </p>
          <p>
            Here's a bit about my background: I earned my Bachelor's Degree in
            Geography with a minor in Environmental Science & Policy from
            California State University, Long Beach. Aftward, I started my
            career as a GIS Civic Researcher for the City of Long Beach. It was
            during this role that I developed a deeper interest in data
            analysis and visualization. After careful consideration, I decided
            to broaden my skillset and successfully completed a Front End
            Development Bootcamp at El Camino College. This experience paved the
            way for me to mentor over 800 students in front-end software
            development and ignited a newfound passion for education!
            Following my mentorship role, I was hired and entrusted with the role of
            a technical content developer for the bootcamp.
          </p>
          <p>
            I am a determined person and a lifelong learner in every aspect of
            my life. If this sounds interesting to you, please feel free to get
            in touch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "../styles/tech.css"; // Update the CSS file name accordingly
import techIcon from "../assets/icons/code.svg";
const TechStack = () => {
  return (
    <section className="tech-section">
      <div className="top-box">
        <header>
          <h6>
            <span>02 - </span>Tech Stack
          </h6>
          <img src={techIcon} alt="" className="icon"/>
        </header>
      </div>
      <div className="bottom-box">
        <div className="headings-container">
          <h2>My Journey in Tech . . .</h2>
          <h3 className="block-heading">React.js</h3>
          <h3 className="block-heading">JavaScript</h3>
          <h3 className="block-heading">Java</h3>
          <h3 className="block-heading">HTML</h3>
          <h3 className="block-heading">CSS</h3>
          <h3 className="block-heading">Bootstrap</h3>
          <h3 className="block-heading">Git & GitHub</h3>
          <h3 className="block-heading">Figma</h3>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

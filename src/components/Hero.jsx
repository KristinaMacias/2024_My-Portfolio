import React from "react";
import '../styles/hero.css'
import wave from '../assets/icons/wave.svg'

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="top-box">
          <header>
            <h6>
              <span>01 - </span>Welcome
            </h6>
            <img src={wave} alt="" className="icon" />
          </header>
        </div>
        <div className="bottom-box">
          <div className="headings-container">
            <h1 className="block-heading" id="special-text">
              Front-End Dev
            </h1>
            <h1 className="hero-heading">Crafting</h1>
            <h1 className="hero-heading">Modern</h1>
            <h1 className="hero-heading">Web Solutions</h1>
          </div>
          <div className="button-container">
            <button className="btn">
              <a href="https://www.linkedin.com/in/maciaskristina/">LinkedIn</a>
            </button>
            <button className="btn" id="secondary-btn">
              <a href="https://github.com/KristinaMacias">GitHub</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

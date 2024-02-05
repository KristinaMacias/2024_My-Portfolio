import React from "react";
import "../styles/testimonials.css";
import testimonials from "../data/testimonials";
import testimonialIcon from "../assets/icons/testimonials.svg";
import reccomendationIcon from "../assets/icons/reccomendation.svg";


const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="top-box">
        <header>
          <h6>
            <span>04 - </span>Recommendations
          </h6>
          <img src={reccomendationIcon} alt="" className="icon" />
        </header>
      </div>
      <div className="bottom-box">
          <h2 className="block-heading-secondary" id="testimonials-heading">
            Say What . . . ?!
          </h2>
          <div className="text-container">
            {testimonials.content.map((testimonial) => (
              <div key={testimonial.id}>
                <p>"{testimonial.highlight}"</p>
                <h5>{testimonial.name}</h5>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Testimonials;

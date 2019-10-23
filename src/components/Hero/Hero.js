import React from "react";
import Rating from "../Rating/Rating";

import "./hero-style.scss";

const Hero = props => {
  return (
    <div className="hero__content">
      {props.children}
      <div>
        <h2>{props.name}</h2>
        <div className="hero__content--rating">
          <Rating></Rating>
          <h4>(32)</h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;

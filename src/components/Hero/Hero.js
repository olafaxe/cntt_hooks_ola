import React from "react";
import Rating from "../Rating/Rating";
const Hero = props => {
  return (
    <div className="content__hero">
      {props.children}
      <div>
        <h2>{props.name}</h2>
        <div className="content__hero-rating">
          <Rating></Rating>
          <h4>(32)</h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;

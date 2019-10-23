import React from "react";
import Rating from "../Rating/Rating";

import "./studio-style.scss";

const Studio = props => {
  return (
    <div className={props.content} id={props.key}>
      <div>
        <p>12:00</p>
      </div>
      <div className={props.selectedContent}>
        <h1>{props.name}</h1>
        <Rating></Rating>
        <p>{props.address}</p>
      </div>
      <div>
        <h3 className="studio__content--kronor">{props.price}kr</h3>
        <h3 className="studio__content--mintues">{props.time}</h3>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Studio;

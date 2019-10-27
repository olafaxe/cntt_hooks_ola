import React from "react";
import Rating from "../Rating/Rating";
import Button from "../Button/Button";

import "./studio-style.scss";

const Studio = ({
  content,
  id,
  selectedContent,
  name,
  address,
  price,
  time,
  clickHandleFu
}) => {
  return (
    <div className={content} id={id} key={name.toString()}>
      <div>
        <p>12:00</p>
      </div>
      <div className={selectedContent}>
        <h1>{name}</h1>
        <Rating></Rating>
        <p>{address}</p>
      </div>
      <div>
        <h3 className="studio__content--kronor">{price}kr</h3>
        <h3 className="studio__content--mintues">{time}</h3>
      </div>
      <Button id={id} clickHandleFu={clickHandleFu} link={"/studio"}>
        <i className="fas fa-chevron-right"></i>
      </Button>{" "}
    </div>
  );
};

export default Studio;

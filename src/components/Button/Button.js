import React from "react";
import { Link } from "react-router-dom";

const Button = props => {
  return (
    <>
      <Link onClick={props.function} to={props.link}>
        <div className={props.cls}>
          {props.children}
          <p>{props.text}</p>
        </div>
      </Link>
    </>
  );
};

export default Button;

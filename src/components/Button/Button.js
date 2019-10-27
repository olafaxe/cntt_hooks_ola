import React from "react";
import { Link } from "react-router-dom";

import "./button-style.scss";

const Button = ({ id, link, text, cls, clickHandleFu }) => {
  return (
    <>
      {link === "/studio" ? (
        <>
          <div id={id} className={cls}>
            <Link onClick={clickHandleFu} to={link}>
              <i id={id} className="fas fa-chevron-right"></i>
            </Link>

            {/* {props.children} */}
            <p>{text}</p>
          </div>
        </>
      ) : (
        <>
          <Link id={id} onClick={clickHandleFu} to={link}>
            <div className={cls}>{text}</div>
          </Link>
        </>
      )}
    </>
  );
};

export default Button;

import React from "react";

const Content = props => {
  return <div className={props.grid}>{props.children}</div>;
};

export default Content;

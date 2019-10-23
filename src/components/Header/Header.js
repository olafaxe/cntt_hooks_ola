import React from "react";
import Button from "../Button/Button";

import "./header-style.scss";

const Header = props => {
  return (
    <div className="container__header">
      <Button cls={"btn--back--list"} link={"/"}></Button>

      <h1>Hår</h1>
      <Button cls={"btn--filter--list"} link={"/"}></Button>
    </div>
  );
};

export default Header;

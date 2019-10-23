import React from "react";
import Button from "../Button/Button";

const Header = props => {
  return (
    <div className="content__header">
      <Button className={"btn__back-front"} link={"/"}></Button>

      <h1>Hår</h1>
      <Button className={"btn__filter-front"} link={"/"}></Button>
    </div>
  );
};

export default Header;

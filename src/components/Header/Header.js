import React from "react";
import Button from "../Button/Button";

const Header = props => {
  return (
    <div className="content__header">
      <Button cls={"btn__back-front"} link={"/"}></Button>

      <h1>Hår</h1>
      <Button cls={"btn__filter-front"} link={"/"}></Button>
    </div>
  );
};

export default Header;

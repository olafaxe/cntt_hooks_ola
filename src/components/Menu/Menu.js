import React from "react";

const Menu = props => {
  return (
    <div className="content__menu">
      <select onChange={props.filtCheck}>
        <option>{props.filter1}</option>
        <option>{props.filter2}</option>
        <option>Pris {props.filter3} - 500 kr</option>
        <option>Pris {props.filter4} - 500 kr</option>
        <option>Pris {props.filter5} - 500 kr</option>
      </select>
    </div>
  );
};

export default Menu;

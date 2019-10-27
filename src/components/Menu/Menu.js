import React from "react";

import "./menu-style.scss";

const Menu = ({ filterHandler, filterSt }) => {
  return (
    <div className="container__menu">
      <select onChange={filterHandler}>
        {filterSt.map((filter, index) => {
          if (typeof filter === "number") {
            return <option key={index}>Pris {filter} - 500 kr </option>;
          }
          return (
            <>
              <option key={index}>{filter}</option>
              <option key={index + 1}>Pris 249 kr eller mindre</option>
            </>
          );
        })}
      </select>
    </div>
  );
};

export default Menu;

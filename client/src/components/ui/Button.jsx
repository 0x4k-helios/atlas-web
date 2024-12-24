import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ title, style, onClick, to }) => {
  if (to) {
    return (
      <NavLink
        to={to}
        className={`blueGradient text-white py-3 px-7 rounded font-medium leading-none ${style}`}
      >
        {title}
      </NavLink>
    );
  }
  return (
    <button
      className={`blueGradient text-white py-3 px-7 rounded font-medium leading-none ${style}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

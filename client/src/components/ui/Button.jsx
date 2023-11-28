import React from "react";

const Button = ({ title, style }) => {
  return (
    <button
      className={`blueGradient text-white py-3 px-7 rounded font-medium leading-none ${style}`}
    >
      {title}
    </button>
  );
};

export default Button;

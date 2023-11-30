import React from "react";

const Button = ({ title, style, onClick }) => {
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

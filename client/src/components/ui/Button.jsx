import React from "react";

const Button = ({ title }) => {
  return (
    <button className="blueGradient text-white py-3 px-7 rounded font-medium leading-none">
      {title}
    </button>
  );
};

export default Button;

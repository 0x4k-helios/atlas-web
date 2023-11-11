import React from "react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-black">
      <img src={Logo} alt="Atlas Estate Logo" />
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import Button from "./ui/Button";
import Logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="relative flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Atlas Estate Logo" />
        </Link>

        <div
          className="cursor-pointer md:hidden block blueGradient p-2 rounded-lg"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <FaX size={20} className="text-white" />
          ) : (
            <FaBars size={20} className="text-white" />
          )}
        </div>

        <div className="md:flex hidden gap-6">
          <a href="">Add Property</a>
          <NavLink to="/properties">Properties</NavLink>
          <a href="">Contact</a>
        </div>

        <div className="md:block hidden">
          <a href="" className="mr-6">
            Register
          </a>
          <Button title="Login" />
        </div>

        <div
          className={`absolute right-0 top-10 w-40 bg-white p-4 rounded-lg blue-shadow z-50 ${
            isOpen ? "block" : "hidden"
          } `}
        >
          <div className="flex flex-col items-center gap-5">
            <a href="" className="text-black">
              Add Property
            </a>
            <a href="" className="text-black">
              Properties
            </a>
            <a href="" className="text-black">
              Contact
            </a>
          </div>
          <hr className="my-5" />
          <div className="flex flex-col items-center gap-5">
            <a href="" className="text-black">
              Register
            </a>
            <Button title="Login" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

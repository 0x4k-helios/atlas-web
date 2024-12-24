import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AddPropertyModal from "./AddPropertyModal";
import useAuthCheck from "../hooks/useAuthCheck";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { validateLogin } = useAuthCheck();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAddPropertyModal = () => {
    if (validateLogin()) {
      setModalOpen(true);
    }
  };
  return (
    <section className=" mt-40 2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 dark-background py-10 flex sm:flex-row flex-col justify-between items-center  gap-16">
      <div className="sm:max-w-[30%] max-w-full flex flex-col sm:items-start items-center">
        <img src={Logo} alt="Atlas Estate Logo" className="w-fit" />
        <p className="paragraph text-white mt-6 sm:text-left text-center">
          Find your perfect place to live. With the most complete source of
          homes for sale and properties near you.
        </p>
      </div>
      <div className="flex flex-col gap-6 sm:text-left text-center text-white">
        <a onClick={handleAddPropertyModal} className="cursor-pointer">
          Add Property
        </a>
        <NavLink to="/properties" href="">
          Properties
        </NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <AddPropertyModal open={modalOpen} setOpen={setModalOpen} />
    </section>
  );
};

export default Footer;

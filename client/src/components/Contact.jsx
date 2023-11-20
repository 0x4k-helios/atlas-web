import React from "react";
import Button from "./ui/Button";
import logo from "../assets/logo-icon.svg";

const Contact = () => {
  return (
    <div className="mt-40 2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 ">
      <div className="dark-background flex lg:flex-row flex-col-reverse items-center p-16 lg:gap-28 gap-16 justify-center rounded-lg overflow-hidden">
        <div className="lg:-my-64 -mb-28 ">
          <img src={logo} alt="Atlas Estate Logo" />
        </div>
        <div>
          <h2 className="mb-8 md:text-5xl text-[32px] text-white leading-none tracking-wide max-w-fit ">
            Find Your Perfect Property
          </h2>
          <div>
            <Button title="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

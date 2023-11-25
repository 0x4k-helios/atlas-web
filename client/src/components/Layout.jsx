import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <div className="2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 py-16">
        <Navbar />
      </div> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

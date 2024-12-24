import React from "react";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import Properties from "../components/Properties";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Companies />
      <Properties />
      <Features />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;

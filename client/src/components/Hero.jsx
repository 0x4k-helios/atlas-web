import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./ui/SearchBar";
import heroImage from "../assets/hero-image.jpg";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Hero = () => {
  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 3,
      },
    },
  };
  return (
    <section className="2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 dark-background py-16">
      <Navbar textColor="text-white" />
      <div className="hero-content flex md:flex-row flex-col items-center justify-between lg:gap-28 gap-12 mt-20 relative">
        <div className="text-white flex flex-col gap-10 xl:w-[480px] md:w-[440px] sm:w-full z-30">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={itemVariants}
              className="lg:text-[5em] text-5xl "
            >
              Find your perfect place to live.
            </motion.h1>
            <motion.p variants={itemVariants} className="paragraph mt-4 ">
              With the most complete source of homes for sale and properties
              near you.
            </motion.p>
          </motion.div>

          <SearchBar />

          <div className="flex justify-between gap-8 flex-wrap">
            <div>
              <p className="text-3xl leading-none">
                <span className="text-blue">+</span>
                <CountUp start={1000} end={1500} />
              </p>
              <p className="leading-normal">Properties</p>
            </div>
            <div>
              <p className="text-3xl leading-none">
                <span className="text-blue">+</span>
                <CountUp start={2000} end={2500} />
              </p>
              <p className="leading-normal">Happy Customer</p>
            </div>
            <div>
              <p className="text-3xl leading-none">
                <span className="text-blue">+</span>
                <CountUp start={0} end={20} />
              </p>
              <p className="leading-normal">Awards Winning</p>
            </div>
          </div>
        </div>

        <div className="md:absolute  top-0 right-0 ">
          <div className="relative">
            <div>
              <span className="lg:w-[640px] lg:h-[640px] w-[440px] h-[440px] bg-[#5C4645] rounded-full absolute overflow-hidden -top-8 lg:-left-12 -left-16  blur-[200px]"></span>
            </div>
            <span className="orange-gradient orange-circle absolute top-0 right-0 w-[132px] h-[132px] rounded-full"></span>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 3, type: "spring" }}
              className=" rounded-t-full overflow-hidden relative blue-shadow 2xl:h-[700px] 2xl:w-[527px] xl:h-[640px] xl:w-[481px] lg:h-[640px] lg:w-[481px] h-[438.16px] w-[328px]"
            >
              <div className="rounded-b-xl h-full overflow-hidden">
                <img
                  src={heroImage}
                  alt="Hero Section Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

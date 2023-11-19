import React from "react";
import sectionImage from "../assets/features-image.jpg";
import Accordion from "./ui/Accordion";

const Features = () => {
  return (
    <section className="relative min-h-[610px] mt-40 2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 dark-background py-16 z-50 flex lg:flex-row flex-col-reverse lg:gap-[116px] gap-16">
      <div className="right-side flex justify-center lg:-mb-96 -mb-32 h-fit">
        <div className="w-[450px] h-[600px] blue-shadow">
          <img
            src={sectionImage}
            alt="Clients Satisfied"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="left-side flex flex-col gap-12 lg:w-[50%] w-full ">
        <div>
          <p className="orange-gradient inline-block text-transparent bg-clip-text text-2xl">
            Features
          </p>
          <h2 className="lg:text-5xl text-[32px] text-white leading-none tracking-wide mt-4">
            Why Choose Us<span className="text-orange">.</span>
          </h2>
          <p className="paragraph text-white mt-4">
            Our proven track record and personalized support make us the right
            choice for a seamless journey. Your dream property awaits!
          </p>
        </div>

        <Accordion />
      </div>
    </section>
  );
};

export default Features;

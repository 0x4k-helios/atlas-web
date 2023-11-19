import React from "react";
import propertiesData from "../data/properties.json";
import { FaLocationDot } from "react-icons/fa6";
import SlideButtons from "./ui/SlideButtons";
import { propertiesSliderSettings } from "../data/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Properties = () => {
  return (
    <>
      <div className="mt-40 2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 flex flex-col gap-8 relative">
        <div>
          <span className="lg:w-[1100px] lg:h-[400px] w-[440px] h-[440px] bg-slate-300 rounded-full absolute top-48 left-96  blur-[200px]"></span>
        </div>
        <div className="section-heading flex justify-between items-end w-[75%]">
          <div>
            <p className="orange-gradient inline-block text-transparent bg-clip-text text-2xl">
              Explore
            </p>
            <h2 className="md:text-5xl text-[32px] text-black leading-none tracking-wide">
              Our Popular Properties
            </h2>
          </div>
        </div>

        <div className="section-cards">
          <Swiper {...propertiesSliderSettings}>
            <div className="absolute -top-[72px] right-0 z-50">
              <SlideButtons />
            </div>
            {propertiesData.map((property, i) => (
              <SwiperSlide
                key={i}
                className="group property-card bg-[#fff] rounded-lg transition ease-out delay-150 hover:bg-orange"
              >
                <div className="w-full h-[265px] ">
                  <img
                    src={property.image}
                    alt="Property"
                    className="rounded-t-lg w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 ">
                  <p className="text-[32px] text-black group-hover:text-white font-medium leading-none tracking-wide mb-4 transition ease-out delay-150">
                    <span className="text-orange group-hover:text-white transition ease-out delay-150">
                      ${" "}
                    </span>
                    {property.price}
                  </p>
                  <p className="text-2xl text-black group-hover:text-white font-medium leading-none tracking-wide mb-[10px] transition ease-out delay-150">
                    {property.name}
                  </p>
                  <p className="text-sm text-black group-hover:text-white leading-none tracking-wide transition ease-out delay-150">
                    <FaLocationDot
                      size={12}
                      className="inline-block text-orange group-hover:text-white transition ease-out delay-150"
                    />{" "}
                    {property.address}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Properties;

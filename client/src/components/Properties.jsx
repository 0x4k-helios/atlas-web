import React from "react";
import propertiesData from "../data/properties.json";
import { FaLocationDot, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import SlideButtons from "./ui/SlideButtons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Properties = () => {
  return (
    <>
      <div className="mt-40 mb-40 2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 flex flex-col gap-8 relative">
        <div className="section-heading flex justify-between items-end">
          <div>
            <p className="orange-gradient inline-block text-transparent bg-clip-text text-2xl">
              Explore
            </p>
            <h2 className="text-5xl text-black leading-none tracking-wide">
              Our Popular Properties
            </h2>
          </div>
        </div>
        <div className="section-cards ">
          <Swiper spaceBetween={56} slidesPerView={3}>
            <div className="absolute -top-[72px] right-0 z-50">
              <SlideButtons />
            </div>
            {propertiesData.map((property, i) => (
              <SwiperSlide
                key={i}
                className="group property-card grey-shadow bg-[#fff] rounded-lg hover:bg-orange "
              >
                <div className="w-full h-[265px] ">
                  <img
                    src={property.image}
                    alt="Property"
                    className="rounded-t-lg w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 ">
                  <p className="text-[32px] text-black group-hover:text-white font-medium leading-none tracking-wide mb-4">
                    <span className="text-orange group-hover:text-white">
                      ${" "}
                    </span>
                    {property.price}
                  </p>
                  <p className="text-2xl text-black group-hover:text-white font-medium leading-none tracking-wide mb-[10px]">
                    {property.name}
                  </p>
                  <p className="text-sm text-black group-hover:text-white leading-none tracking-wide">
                    <FaLocationDot
                      size={12}
                      className="inline-block text-orange group-hover:text-white"
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

import React from "react";
import propertiesData from "../data/properties.json";
import SlideButtons from "./ui/SlideButtons";
import { propertiesSliderSettings } from "../data/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PropertyCard from "./ui/PropertyCard";
import useProperties from "../hooks/useProperties";
import Loader from "./ui/Loader/Loader";

const Properties = () => {
  const { data, isError, isLoading } = useProperties();

  if (isError) {
    return (
      <div>
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <>
        <div className="flex justify-center items-center h-full mt-40">
          <Loader />
        </div>
      </>
    );
  }
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
            {data.slice(0, 6).map((property, i) => (
              <SwiperSlide
                key={i}
                className="group bg-[#fff] rounded-lg transition ease-out delay-150 hover:bg-orange"
              >
                <PropertyCard property={property} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Properties;

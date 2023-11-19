import React from "react";
import {
  testimonialsSliderSettings,
  testimonialsData,
} from "../data/constants";
import SlideButtons from "./ui/SlideButtons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonials = () => {
  return (
    <div className="mt-40 2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 flex flex-col gap-8 relative">
      <div className="section-heading flex justify-between items-end w-[75%]">
        <div>
          <p className="orange-gradient inline-block text-transparent bg-clip-text text-2xl">
            Testimonials
          </p>
          <h2 className="md:text-5xl text-[32px] text-black leading-none tracking-wide mt-4">
            What Our Customers Say<span className="text-orange">.</span>
          </h2>
        </div>
      </div>

      <div className="section-cards grey-shadow">
        <Swiper {...testimonialsSliderSettings}>
          <div className="absolute -bottom-[72px] flex justify-center w-full z-50">
            <SlideButtons />
          </div>

          {testimonialsData.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="bg-[#fff] flex justify-between rounded-lg h-auto"
            >
              <div className="p-4 flex flex-col justify-between">
                <p className="text-base font-light leading-6 tracking-wider">
                  "{testimonial.review}"
                </p>
                <p>{testimonial.name}</p>
              </div>
              <div className="w-40 h-full shrink-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-full w-full object-cover rounded-r-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

import React from "react";
import { useSwiper } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const SlideButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex gap-3">
      <button
        className="p-3 bg-lightBlue text-blue rounded"
        onClick={() => swiper.slidePrev()}
      >
        <FaChevronLeft />
      </button>
      <button
        className="p-3 bg-lightBlue text-blue rounded"
        onClick={() => swiper.slideNext()}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default SlideButtons;

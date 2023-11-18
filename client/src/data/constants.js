//Partners Logos
import airbnbLogo from "../assets/companies-logos/airbnb-logo.svg";
import netflixLogo from "../assets/companies-logos/netflix-logo.svg";
import opendoorLogo from "../assets/companies-logos/opendoor-logo.svg";
import pegipegiLogo from "../assets/companies-logos/pegipegi-logo.svg";
import travelokaLogo from "../assets/companies-logos/traveloka-logo.svg";

export const partnersLogos = [
  {
    id: "logo-1",
    name: "Netflix",
    image: netflixLogo,
  },
  {
    id: "logo-2",
    name: "Opendoor",
    image: opendoorLogo,
  },
  {
    id: "logo-3",
    name: "Airbnb",
    image: airbnbLogo,
  },
  {
    id: "logo-4",
    name: "Traveloka",
    image: travelokaLogo,
  },
  {
    id: "logo-5",
    name: "Pegipegi",
    image: pegipegiLogo,
  },
];

//Swiper Slider Settings
export const sliderSettings = {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 56,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
};

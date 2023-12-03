//Partners Logos
import airbnbLogo from "../assets/companies-logos/airbnb-logo.svg";
import netflixLogo from "../assets/companies-logos/netflix-logo.svg";
import opendoorLogo from "../assets/companies-logos/opendoor-logo.svg";
import pegipegiLogo from "../assets/companies-logos/pegipegi-logo.svg";
import travelokaLogo from "../assets/companies-logos/traveloka-logo.svg";

//Customers Pictures
import customer01 from "../assets/customers/customer-01.png";
import customer02 from "../assets/customers/customer-02.png";
import customer03 from "../assets/customers/customer-03.png";
import customer04 from "../assets/customers/customer-04.png";
import customer05 from "../assets/customers/customer-05.png";
import customer06 from "../assets/customers/customer-06.png";

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

//Swiper Properties Slider Settings
export const propertiesSliderSettings = {
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

//Swiper Testimonials Slider Settings
export const testimonialsSliderSettings = {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 42,
  breakpoints: {
    750: {
      slidesPerView: 1,
    },
    880: {
      slidesPerView: 2,
    },
  },
};

//To update Favorites List
export const updateFavorites = (id, favorites) => {
  if (favorites.includes(id)) {
    return favorites.filter((propertyID) => propertyID !== id);
  } else {
    return [...favorites, id];
  }
};

//To Check Favorite
export const checkFavorites = (id, favorites) => {
  return favorites?.includes(id) ? true : false;
};

//To Check the length of input
export const validateString = (value) => {
  return value?.length < 3 || value === null
    ? "Must have at least 3 characters"
    : null;
};

//Testimonials Data
export const testimonialsData = [
  {
    id: "customer-01",
    image: customer01,
    name: "David Martin",
    review:
      "Navigating the real estate market was easier with Atlas Estate. Their guidance and patience helped me find the perfect home.",
  },
  {
    id: "customer-02",
    image: customer02,
    name: "Susan Turner",
    review:
      "Found my perfect home with Atlas Estate. Their expertise and personalized service made the process a breeze.",
  },
  {
    id: "customer-03",
    image: customer03,
    name: "David Martin",
    review:
      "Highly recommend Atlas Estate for a quick and profitable sale. Their strategic marketing and negotiation skills exceeded my expectations.",
  },
  {
    id: "customer-04",
    image: customer04,
    name: "Nancy Miller ",
    review:
      "Sold my property seamlessly with Atlas Estate. Their strategic approach and quick results exceeded my expectations.",
  },
  {
    id: "customer-05",
    image: customer05,
    name: "Emily Johnson",
    review:
      "Investing made easy with Atlas Estate. Their market insights and efficient approach have been key to my success.",
  },
  {
    id: "customer-06",
    image: customer06,
    name: "Yuki Tanaka",
    review:
      "Relocating was seamless with Atlas Estate. Their local expertise and efficient relocation services made the transition smooth.",
  },
];

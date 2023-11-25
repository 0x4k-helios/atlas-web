import React from "react";

import { FaLocationDot } from "react-icons/fa6";

const PropertyCard = ({ property }) => {
  return (
    <>
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
    </>
  );
};

export default PropertyCard;

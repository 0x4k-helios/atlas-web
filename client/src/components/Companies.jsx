import React from "react";
import { partnersLogos } from "../data/constants";

const Companies = () => {
  return (
    <>
      <div className="mt-[312px] 2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 flex flex-col justify-center items-center gap-8">
        <p className="text-2xl text-center">Trusted by major companies</p>
        <div className="flex gap-20 flex-wrap justify-center">
          {partnersLogos.map((partnerLogo) => (
            <img
              src={partnerLogo.image}
              alt={partnerLogo.image}
              key={partnerLogo.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Companies;

import React, { useState } from "react";
import { accordionData } from "../../data/accordionData";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Accordion = () => {
  const [isActive, setIsActive] = useState(0);
  const toggleActive = (index) => {
    setIsActive(index);
  };

  return (
    <div>
      {accordionData.map((item, i) => (
        <div
          key={i}
          className={`  group ${isActive === i ? "is-open" : ""}`}
          onClick={() => toggleActive(i)}
        >
          <div
            className={`group-[.is-open]:bg-lightBlue p-4 rounded  ${
              isActive === i ? "lightBlue-shadow" : ""
            }`}
          >
            <div className="flex items-center cursor-pointer group-[.is-open]:cursor-default text-white">
              <div className="w-full flex items-center gap-4">
                <span className="blueGradient p-2 rounded-full text-lg">
                  {item.icon}
                </span>
                <p className="font-medium leading-none tracking-wide group-[.is-open]:text-black">
                  {item.title}
                </p>
              </div>
              <FaAngleDown className="group-[.is-open]:rotate-180 group-[.is-open]:text-black" />
            </div>
            <div className="mt-2 ml-[50px] overflow-hidden max-h-0 group-[.is-open]:max-h-[100px]">
              <p className="text-base font-light leading-4 tracking-wider group-[.is-open]:text-black">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

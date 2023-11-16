import React from "react";
import Button from "./Button";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
  const iconStyle = {
    backgroundClip: "text",
    color: "transparent",
    backgroundImage: "linear-gradient(135deg, #6b73ff 0%, #000dff 100%)",
  };

  return (
    <div className="flex items-center justify-between p-2 bg-[#fff] rounded-lg">
      <div className="flex">
        <FaMagnifyingGlass className="text-blue ml-2" size={24} />
        <input
          type="text"
          placeholder="Search for Properties..."
          className="ml-5 w-full"
        />
      </div>
      <Button title="Search" className="ml-28" />
    </div>
  );
};

export default SearchBar;

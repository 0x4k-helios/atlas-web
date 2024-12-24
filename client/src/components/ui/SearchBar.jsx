import React, { useState } from "react";
import Button from "./Button";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/properties?search=${searchItem}`);
  };

  return (
    <div className="flex items-center justify-between p-2 bg-[#fff] rounded-lg">
      <div className="flex">
        <FaMagnifyingGlass className="text-blue ml-2" size={24} />
        <input
          type="text"
          placeholder="Search for Properties..."
          className="searchbar-input ml-5 w-full"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>
      <Button title="Search" className="ml-28" onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;

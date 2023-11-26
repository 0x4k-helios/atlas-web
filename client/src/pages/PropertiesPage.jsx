import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/ui/SearchBar";
import useProperties from "../hooks/useProperties";

const PropertiesPage = () => {
  const { data, isError, isLoading } = useProperties();
  console.log("data:", data);
  return (
    <section className="2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 dark-background py-16">
      <Navbar />
      <div className="section-heading flex flex-col items-center mt-20">
        <div className="text-center">
          <p className="orange-gradient inline-block text-transparent bg-clip-text text-2xl">
            Properties
          </p>
          <h2 className="md:text-5xl text-[32px] text-white leading-none tracking-wide mt-4 mb-16">
            Explore Our Properties<span className="text-orange">.</span>
          </h2>
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default PropertiesPage;

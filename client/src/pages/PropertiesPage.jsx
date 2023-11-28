import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/ui/SearchBar";
import useProperties from "../hooks/useProperties";
import Loader from "../components/ui/Loader/Loader";
import Footer from "../components/Footer";
import PropertyCard from "../components/ui/PropertyCard";

const PropertiesPage = () => {
  const { data, isError, isLoading } = useProperties();

  if (isError) {
    return (
      <div className="flex justify-center items-center h-full mt-40">
        <span className="text-black">Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <>
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
        <div className="flex justify-center items-center h-full mt-40">
          <Loader />
        </div>
      </>
    );
  }

  return (
    <>
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
      <div className="mt-40 2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 grid grid-cols-3 grid-rows-1 gap-14 relative">
        {data.map((property, i) => (
          <div className="property-card transition ease-out delay-150">
            <PropertyCard property={property} key={i} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PropertiesPage;

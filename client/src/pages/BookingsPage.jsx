import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/ui/SearchBar";
import useProperties from "../hooks/useProperties";
import Loader from "../components/ui/Loader/Loader";
import PropertyCard from "../components/ui/PropertyCard";
import UserDetailsContext from "../context/UserDetailsContext";

const BookingsPage = () => {
  const { data, isError, isLoading } = useProperties();
  const {
    userDetails: { bookings },
  } = useContext(UserDetailsContext);

  if (isError) {
    return (
      <>
        <section className="2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 dark-background py-16">
          <Navbar textColor="text-white" />
          <div className="section-heading flex flex-col items-center mt-20">
            <div className="text-center">
              <p className="orange-gradient inline-block text-transparent bg-clip-text text-2xl">
                Your Bookings
              </p>
              <h2 className="md:text-5xl text-[32px] text-white leading-none tracking-wide mt-4 mb-16">
                Properties You've Booked
                <span className="text-orange">.</span>
              </h2>
            </div>
          </div>
        </section>
        <div className="flex justify-center items-center h-full mt-40">
          <span className="text-black">Error while fetching data</span>
        </div>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <section className="2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 dark-background py-16">
          <Navbar textColor="text-white" />
          <div className="section-heading flex flex-col items-center mt-20">
            <div className="text-center">
              <p className="orange-gradient inline-block text-transparent bg-clip-text text-2xl">
                Your Bookings
              </p>
              <h2 className="md:text-5xl text-[32px] text-white leading-none tracking-wide mt-4 mb-16">
                Properties You've Booked
                <span className="text-orange">.</span>
              </h2>
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
        <Navbar textColor="text-white" />
        <div className="section-heading flex flex-col items-center mt-20">
          <div className="text-center">
            <p className="orange-gradient inline-block text-transparent bg-clip-text text-2xl">
              Your Bookings
            </p>
            <h2 className="md:text-5xl text-[32px] text-white leading-none tracking-wide mt-4 mb-16">
              Properties You've Booked
              <span className="text-orange">.</span>
            </h2>
          </div>
        </div>
      </section>
      <div className="mt-40 2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-14 relative">
        {data
          .filter((property) =>
            bookings.map((booking) => booking.id).includes(property.id)
          )
          .map((property, i) => (
            <div className="property-card transition ease-out delay-150">
              <PropertyCard property={property} key={i} />
            </div>
          ))}
      </div>
    </>
  );
};

export default BookingsPage;

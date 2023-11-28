import React from "react";
import Navbar from "../components/Navbar";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProperty } from "../utils/api";
import Loader from "../components/ui/Loader/Loader";
import Button from "../components/ui/Button";
import {
  FaRegHeart,
  FaHeart,
  FaDoorClosed,
  FaBath,
  FaCar,
  FaLocationDot,
} from "react-icons/fa6";
import mapImage from "../assets/map.png";

const SinglePropertyPage = () => {
  let { propertyID } = useParams();

  const { data, isLoading, isError } = useQuery(["property", propertyID], () =>
    getProperty(propertyID)
  );

  if (isError) {
    return (
      <div className="flex justify-center items-center h-full mt-40">
        <span className="text-black">
          Error while fetching the property details
        </span>
      </div>
    );
  }

  if (isLoading) {
    <div className="2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 py-16">
      <Navbar textColor="text-black" />
    </div>;
    <div className="flex justify-center items-center h-full mt-40">
      <Loader />
    </div>;
  }

  return (
    <>
      <div className="2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 py-16">
        <Navbar textColor="text-black" />
        <div className="mt-40 flex flex-col gap-8">
          <div className="property-header flex justify-between items-end">
            <h2 className="md:text-5xl text-[32px] text-black leading-none tracking-wide">
              {data?.title}
              <span className="text-orange">.</span>
            </h2>
            <p className="flex md:text-[40px] text-3xl text-black leading-none tracking-wide">
              <span className="text-orange">$ </span>
              {data?.price}
            </p>
          </div>
          <div className="property-image w-full h-[630px] overflow-hidden rounded-lg">
            <img
              src={data?.image}
              alt={data?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="property-details flex lg:flex-row flex-col gap-8">
            <div className="left-side flex-1 flex flex-col gap-8">
              <div className="flex items-center gap-8 bg-[#fff] p-8 rounded-lg">
                <Button title="Book a visit" style="w-full" />
                <FaRegHeart size={25} className="text-gray-400" />
              </div>
              <div className="overview-box bg-[#fff] p-8 rounded-lg">
                <p className="text-2xl">Overview</p>
                <div className="flex justify-between mt-8">
                  <div className="flex items-center gap-3">
                    <span className="p-3 bg-lightBlue text-blue rounded">
                      <FaDoorClosed size={25} />
                    </span>
                    Rooms <br />
                    {data?.facilities.beds}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="p-3 bg-lightBlue text-blue rounded">
                      <FaBath size={25} />
                    </span>
                    Bathrooms <br />
                    {data?.facilities.bathrooms}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="p-3 bg-lightBlue text-blue rounded">
                      <FaCar size={25} />
                    </span>
                    Parking <br />
                    {data?.facilities.parking}
                  </div>
                </div>
              </div>

              <div className="description-box text-black bg-[#fff] p-8 rounded-lg">
                <p className="text-2xl">Description</p>
                <p className="paragraph mt-8">{data?.description}</p>
              </div>
            </div>
            <div className="right-side flex-1">
              <div className="address-box text-black bg-[#fff] p-8 rounded-lg flex flex-col gap-8">
                <p className="text-2xl">Address</p>
                <p className="leading-none tracking-wide">
                  <FaLocationDot
                    size={12}
                    className="inline-block text-orange "
                  />{" "}
                  {data?.address}, {data?.city} - {data?.country}
                </p>
                <img src={mapImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePropertyPage;

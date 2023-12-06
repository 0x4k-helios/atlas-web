import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProperty, removeBooking } from "../utils/api";
import Loader from "../components/ui/Loader/Loader";
import Btn from "../components/ui/Button";
import {
  FaRegHeart,
  FaHeart,
  FaDoorClosed,
  FaBath,
  FaCar,
  FaLocationDot,
} from "react-icons/fa6";
import mapImage from "../assets/map.png";
import Map from "../components/map/Map";
import useAuthCheck from "../hooks/useAuthCheck";
import { useAuth0 } from "@auth0/auth0-react";
import BookingModal from "../components/BookingModal";
import UserDetailsContext from "../context/UserDetailsContext";
import { Button } from "@mantine/core";
import { toast } from "react-toastify";
import Heart from "../components/ui/Heart";

const SinglePropertyPage = () => {
  let { propertyID } = useParams();

  const { data, isLoading, isError } = useQuery(["property", propertyID], () =>
    getProperty(propertyID)
  );

  const [modalOpened, setModalOpened] = useState(false);
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();

  const {
    userDetails: { token, bookings },
    setUserDetails,
  } = useContext(UserDetailsContext);

  const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
    mutationFn: () => removeBooking(propertyID, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        bookings: prev.bookings.filter((booking) => booking?.id !== propertyID),
      }));

      toast.success("Booking visit has been cancelled", {
        position: "bottom-right",
      });
    },
  });

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
          <div className="property-image w-full md:h-[630px] h-96 overflow-hidden rounded-lg">
            <img
              src={data?.image}
              alt={data?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="property-details flex lg:flex-row flex-col gap-8">
            <div className="left-side flex-1 flex flex-col gap-8">
              <div className="flex items-start gap-8 bg-[#fff] p-8 rounded-lg">
                {bookings?.map((booking) => booking.id).includes(propertyID) ? (
                  <div>
                    <Button
                      variant="light"
                      w={"100%"}
                      color="red"
                      mb={"8px"}
                      onClick={() => cancelBooking()}
                      disabled={cancelling}
                    >
                      Cancel Visit
                    </Button>
                    <span className="w-full font-light text-gray-600">
                      You have already booked a visit for date{" "}
                      {
                        bookings?.filter(
                          (booking) => booking?.id === propertyID
                        )[0].date
                      }
                    </span>
                  </div>
                ) : (
                  <Btn
                    title="Book a visit"
                    style="w-full"
                    onClick={() => {
                      validateLogin() && setModalOpened(true);
                    }}
                  />
                )}

                <Heart id={propertyID} />
              </div>
              <BookingModal
                opened={modalOpened}
                setOpened={setModalOpened}
                propertyID={propertyID}
                email={user?.email}
              />
              <div className="overview-box bg-[#fff] p-8 rounded-lg">
                <p className="text-2xl">Overview</p>
                <div className="flex justify-between gap-6 mt-8 flex-wrap">
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
                <div className="map">
                  <Map
                    address={data?.address}
                    city={data?.city}
                    country={data?.country}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePropertyPage;

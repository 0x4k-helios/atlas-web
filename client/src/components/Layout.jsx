import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailsContext from "../context/UserDetailsContext";
import { useMutation } from "react-query";
import { createUser } from "../utils/api";
import { AUTH_AUDIENCE } from "../../config/config";
import useFavorites from "../hooks/useFavorites";
import useBookings from "../hooks/useBookings";

const Layout = () => {
  useFavorites();
  useBookings();

  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(UserDetailsContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email, token),
  });

  useEffect(() => {
    const getTokenAndRegister = async () => {
      const res = await getAccessTokenWithPopup({
        authorizationParams: {
          audience: AUTH_AUDIENCE,
          scope: "openid profile email",
        },
      });
      localStorage.setItem("access_token", res);
      setUserDetails((prev) => ({ ...prev, token: res }));
      mutate(res);
    };

    isAuthenticated && getTokenAndRegister();
  }, [isAuthenticated]);

  return (
    <>
      {/* <div className="2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 py-16">
        <Navbar />
      </div> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

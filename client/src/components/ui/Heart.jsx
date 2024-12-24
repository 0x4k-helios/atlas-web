import React, { useContext, useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import useAuthCheck from "../../hooks/useAuthCheck";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailsContext from "../../context/UserDetailsContext";
import { useMutation } from "react-query";
import { toBookmark } from "../../utils/api";
import { checkFavorites, updateFavorites } from "../../data/constants";

const Heart = ({ id, color }) => {
  const [isFav, setIsFav] = useState(false);
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();

  const {
    userDetails: { favorites, token },
    setUserDetails,
  } = useContext(UserDetailsContext);

  useEffect(() => {
    setIsFav(() => checkFavorites(id, favorites));
  }, [favorites]);

  const { mutate } = useMutation({
    mutationFn: () => toBookmark(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        favorites: updateFavorites(id, prev.favorites),
      }));
    },
  });

  const handleFav = (e) => {
    e.stopPropagation();
    if (validateLogin()) {
      mutate();
      setIsFav((prevIsFav) => !prevIsFav);
    }
  };
  return (
    <div onClick={(e) => handleFav(e)} className="cursor-pointer">
      {isFav ? (
        <FaHeart size={25} className="text-gray-400 m-2" color={color} />
      ) : (
        <FaRegHeart size={25} className="text-gray-400 m-2" color={color} />
      )}
    </div>
  );
};

export default Heart;

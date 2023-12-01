import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config/config";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const getAllProperties = async () => {
  try {
    const response = await api.get("/property/allproperties", {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }

    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const getProperty = async (id) => {
  try {
    const response = await api.get(`/property/${id}`, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }

    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const createUser = async (email, token) => {
  try {
    await api.post(
      `/user/register`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, please try again.");
    throw error;
  }
};

export const bookVisit = async (date, propertyID, email, token) => {
  try {
    await api.post(
      `/user/bookvisit/${propertyID}`,
      {
        email,
        id: propertyID,
        date: dayjs(date).format("DD/MM/YYYY"),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, please try again.");
    throw error;
  }
};

export const removeBooking = async (id, email, token) => {
  try {
    await api.post(
      `/user/cancelBooking/${id}`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, please try again.");
    throw error;
  }
};

export const toBookmark = async (id, email, token) => {
  try {
    await api.post(
      `/user/bookmark/${id}`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, please try again.");
    throw error;
  }
};

export const getAllFavorites = async (email, token) => {
  if (!token) return;
  try {
    const res = await api.post(
      `/user/favorites`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data["favPropertiesID"];
  } catch (error) {
    toast.error("Something went wrong while fetching favorites.");
    throw error;
  }
};

export const getAllBookings = async (email, token) => {
  if (!token) return;
  try {
    const res = await api.post(
      `/user/bookings`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res);

    return res.data["bookedVisits"];
  } catch (error) {
    toast.error("Something went wrong while fetching bookings.");
    throw error;
  }
};

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

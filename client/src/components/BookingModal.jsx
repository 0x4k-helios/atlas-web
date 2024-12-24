import React, { useContext, useState } from "react";
import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import UserDetailsContext from "../context/UserDetailsContext";
import { useMutation } from "react-query";
import { bookVisit } from "../utils/api";
import { toast } from "react-toastify";
import dayjs from "dayjs";

const BookingModal = ({ opened, setOpened, propertyID, email }) => {
  const [value, setValue] = useState(null);
  const {
    userDetails: { token },
    setUserDetails,
  } = useContext(UserDetailsContext);

  const handleSuccessBooking = () => {
    toast.success("You have booked your visit", {
      position: "bottom-right",
    });
    setUserDetails((prev) => ({
      ...prev,
      bookings: [
        ...prev.bookings,
        {
          id: propertyID,
          date: dayjs(value).format("DD/MM/YYYY"),
        },
      ],
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(value, propertyID, email, token),
    onSuccess: () => handleSuccessBooking(),
    onError: () => toast.error(response.data.message),
    onSettled: () => setOpened(false),
  });
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Select a date for your visit"
      centered
    >
      <DatePicker value={value} onChange={setValue} minDate={new Date()} />
      <Button disabled={!value || isLoading} onClick={() => mutate()}>
        Book a Visit
      </Button>
    </Modal>
  );
};

export default BookingModal;

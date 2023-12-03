import React, { useState } from "react";
import { Modal, Button, Container, Stepper, Group } from "@mantine/core";
import { useAuth0 } from "@auth0/auth0-react";
import LocationForm from "./addPropertyModal/LocationForm";
import UploadImage from "./addPropertyModal/UploadImage";
import PropertyForm from "./addPropertyModal/PropertyForm";

const AddPropertyModal = ({ open, setOpen }) => {
  const [active, setActive] = useState(0);
  const { user } = useAuth0();
  const nextStep = () => {
    setActive((current) => (current < 4 ? current + 1 : current));
  };
  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    description: "",
    price: 0,
    address: "",
    city: "",
    country: "",
    image: null,
    facilities: {
      beds: 0,
      bathrooms: 0,
      parking: 0,
    },
    userEmail: user?.email,
  });
  return (
    <Modal opened={open} onClose={() => setOpen(false)} size={"90rem"}>
      <Container h={"40rem"} w={"100%"}>
        <Stepper active={active} onStepClick={setActive}>
          <Stepper.Step label="Location" description="Add property address">
            <LocationForm
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              nextStep={nextStep}
            />
          </Stepper.Step>
          <Stepper.Step label="Image" description="Upload Image">
            <UploadImage
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              prevStep={prevStep}
              nextStep={nextStep}
            />
          </Stepper.Step>
          <Stepper.Step label="Details" description="Property Details">
            <PropertyForm
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              prevStep={prevStep}
              nextStep={nextStep}
              setModalOpen={setOpen}
              setActive={setActive}
            />
          </Stepper.Step>
          <Stepper.Completed>Completed Successfully!</Stepper.Completed>
        </Stepper>
      </Container>
    </Modal>
  );
};

export default AddPropertyModal;

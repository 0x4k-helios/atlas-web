import { useForm } from "@mantine/form";
import React, { useContext } from "react";
import { validateString } from "../../data/constants";
import {
  Box,
  Button,
  Fieldset,
  Group,
  NumberInput,
  TextInput,
  Textarea,
} from "@mantine/core";
import UserDetailsContext from "../../context/UserDetailsContext";
import useProperties from "../../hooks/useProperties";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { createProperty } from "../../utils/api";
import { useAuth0 } from "@auth0/auth0-react";

const PropertyForm = ({
  propertyDetails,
  setPropertyDetails,
  prevStep,
  setModalOpen,
  setActive,
}) => {
  const form = useForm({
    initialValues: {
      title: propertyDetails.title,
      description: propertyDetails.description,
      price: propertyDetails.price,
      beds: propertyDetails.facilities.beds,
      bathrooms: propertyDetails.facilities.bathrooms,
      parking: propertyDetails.facilities.parking,
    },
    validate: {
      title: (value) => validateString(value),
      description: (value) => validateString(value),
      price: (value) => (value < 100 ? "Must be higher than $100" : null),
      beds: (value) => (value < 1 ? "Must have at least 1 bedroom" : null),
      bathrooms: (value) =>
        value < 1 ? "Must have at least 1 bathroom" : null,
    },
  });

  const { title, description, price, beds, bathrooms, parking } = form.values;

  const handleSubmit = () => {
    const { hasError } = form.validate();
    if (!hasError) {
      setPropertyDetails((prev) => ({
        ...prev,
        title,
        description,
        price,
        facilities: { beds, bathrooms, parking },
      }));
      mutate();
    }
  };

  //To add property
  const { user } = useAuth0();
  const {
    userDetails: { token },
  } = useContext(UserDetailsContext);
  const { refetch: refetchProperties } = useProperties();
  const { mutate, isLoading } = useMutation({
    mutationFn: () =>
      createProperty(
        {
          ...propertyDetails,
          title,
          description,
          price,
          facilities: { beds, bathrooms, parking },
        },
        token
      ),
    onError: ({ response }) =>
      toast.error(response.data.message, { position: "bottom-right" }),
    onSettled: () => {
      toast.success("The property has been added successfully!", {
        position: "bottom-right",
      });
      setPropertyDetails({
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
      setModalOpen(false);
      setActive(0);
      refetchProperties();
    },
  });

  return (
    <Box maw="50%" mx="auto" my="md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col gap-4"
      >
        <TextInput
          withAsterisk
          label="Title"
          placeholder="Property Title"
          {...form.getInputProps("title")}
        />
        <Textarea
          withAsterisk
          label="Description"
          placeholder="Property Description"
          autosize
          minRows={2}
          maxRows={4}
          {...form.getInputProps("description")}
        />
        <NumberInput
          withAsterisk
          label="Price"
          placeholder="100"
          min={0}
          {...form.getInputProps("price")}
        />
        <Fieldset legend="Facilities">
          <Group grow>
            <NumberInput
              withAsterisk
              label="Bedrooms"
              placeholder="0"
              min={0}
              {...form.getInputProps("beds")}
            />
            <NumberInput
              withAsterisk
              label="Bathrooms"
              placeholder="0"
              min={0}
              {...form.getInputProps("bathrooms")}
            />
            <NumberInput
              withAsterisk
              label="Parking"
              placeholder="0"
              min={0}
              {...form.getInputProps("parking")}
            />
          </Group>
        </Fieldset>

        <Group justify="center" mt={"xl"}>
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting" : "Add Property"}
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default PropertyForm;

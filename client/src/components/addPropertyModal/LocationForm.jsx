import React from "react";
import { useForm } from "@mantine/form";
import { validateString } from "../../data/constants";
import { Button, Group, Select, TextInput } from "@mantine/core";
import useCountries from "../../hooks/useCountries";
import Map from "../map/Map";

const LocationForm = ({ propertyDetails, setPropertyDetails, nextStep }) => {
  const { getAll } = useCountries();

  const form = useForm({
    initialValues: {
      address: propertyDetails?.address,
      city: propertyDetails?.city,
      country: propertyDetails?.country,
    },
    validate: {
      address: (value) => validateString(value),
      city: (value) => validateString(value),
      country: (value) => validateString(value),
    },
  });

  const { address, city, country } = form.values;

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({ ...prev, address, city, country }));
      nextStep();
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="flex flex-row gap-8 items-center">
        <div className="flex-1 flex flex-col gap-4">
          <Select
            withAsterisk
            label="Country"
            clearable
            searchable
            data={getAll()}
            {...form.getInputProps("country", { type: "input" })}
          />

          <TextInput
            withAsterisk
            label="City"
            {...form.getInputProps("city", { type: "input" })}
          />
          <TextInput
            withAsterisk
            label="Address"
            {...form.getInputProps("address", { type: "input" })}
          />
        </div>
        <div className="flex-1">
          <Map address={address} city={city} country={country} />
        </div>
      </div>

      <Group justify="center" mt={"xl"}>
        <Button type="submit">Next</Button>
      </Group>
    </form>
  );
};

export default LocationForm;

import { Button, Group } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { UPLOAD_CLOUD_NAME, UPLOAD_PRESET } from "../../../config/config";

const UploadImage = ({
  propertyDetails,
  setPropertyDetails,
  nextStep,
  prevStep,
}) => {
  const [imageURL, setImageURL] = useState(propertyDetails.image);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const handleNext = () => {
    setPropertyDetails((prev) => ({ ...prev, image: imageURL }));
    nextStep();
  };

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: UPLOAD_CLOUD_NAME,
        uploadPreset: UPLOAD_PRESET,
        maxFiles: 1,
      },
      (err, result) => {
        if (result.event === "success") {
          setImageURL(result.info.secure_url);
        }
      }
    );
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      {!imageURL ? (
        <div
          onClick={() => widgetRef.current?.open()}
          className="flex flex-col justify-center items-center w-[80%] h-96 border-dashed border-2 border-gray-600 cursor-pointer rounded bg-gray-100"
        >
          <AiOutlineCloudUpload size={64} color="grey" />
          <span>Upload Image</span>
        </div>
      ) : (
        <div
          onClick={() => widgetRef.current?.open()}
          className="w-[80%] h-96 border-gray-600 cursor-pointer rounded overflow-hidden"
        >
          <img
            src={imageURL}
            alt="Property Image"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <Group justify="center" mt={"xl"}>
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={!imageURL}>
          Next
        </Button>
      </Group>
    </div>
  );
};

export default UploadImage;

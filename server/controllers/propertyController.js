import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaConfig.js";

//To Create a Property
export const createProperty = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    city,
    country,
    image,
    facilities,
    userEmail,
  } = req.body.data;

  console.log(req.body.data);

  try {
    const property = await prisma.property.create({
      data: {
        title,
        description,
        price,
        address,
        city,
        country,
        image,
        facilities,
        owner: { connect: { email: userEmail } },
      },
    });

    res.send({ message: "Property has been created successfully!", property });
  } catch (err) {
    if (err.code === "P2002") {
      throw new Error("A Property with address already exists");
    }
    throw new Error(err.code);
  }
});

//To Get All Properties Ordered by Date
export const getAllProperties = asyncHandler(async (req, res) => {
  const properties = await prisma.property.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  res.send(properties);
});

//To Get a Specific Property
export const getProperty = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const property = await prisma.property.findUnique({
      where: { id: id },
    });

    res.send(property);
  } catch (err) {
    throw new Error(err.message);
  }
});

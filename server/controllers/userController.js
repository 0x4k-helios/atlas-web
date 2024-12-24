import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaConfig.js";

//To Create a User
export const createUser = asyncHandler(async (req, res) => {
  console.log("Create User...");

  let { email } = req.body;

  const userExists = await prisma.user.findUnique({ where: { email: email } });
  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      message: "User has been created successfully!",
      user: user,
    });
  } else {
    res.status(201).send({ message: "User already exists" });
  }

  console.log(email);
});

//To Book a Visit to Property
export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  try {
    const isBooked = await prisma.user.findUnique({
      where: { email: email },
      select: { bookedVisits: true },
    });

    if (isBooked.bookedVisits.some((visit) => visit.id === id)) {
      res.status(400).json("You have already booked this property.");
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: { push: { id, date } },
        },
      });
      res.send("The visit has been booked successfully!");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

//To Get All Bookings
export const allBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const bookings = await prisma.user.findUnique({
      where: { email: email },
      select: { bookedVisits: true },
    });
    res.status(200).send(bookings);
  } catch (err) {
    throw new Error(err.message);
  }
});

//To Cancel a Booking
export const cancelBooking = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: { bookedVisits: true },
    });

    const index = user.bookedVisits.findIndex((visit) => visit.id === id);

    if (index === -1) {
      res.status(404).json({ message: "Booking not found" });
    } else {
      user.bookedVisits.splice(index, 1);
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: user.bookedVisits,
        },
      });

      res.send("Booking has been cancelled successfully!");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

//To Add a Property to Favorite List of the User (to bookmark)
export const bookmark = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { propertyID } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (user.favPropertiesID.includes(propertyID)) {
      const updateUser = await prisma.user.update({
        where: { email: email },
        data: {
          favPropertiesID: {
            set: user.favPropertiesID.filter((id) => id !== propertyID),
          },
        },
      });

      res.send({
        message: "The property has been removed from favorite list!",
        user: updateUser,
      });
    } else {
      const updateUser = await prisma.user.update({
        where: { email: email },
        data: {
          favPropertiesID: {
            push: propertyID,
          },
        },
      });

      res.send({
        message: "The property has been added to favorites!",
        user: updateUser,
      });
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

//To Get All Favorites
export const allFavorites = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const favorites = await prisma.user.findUnique({
      where: { email: email },
      select: { favPropertiesID: true },
    });

    res.status(200).send(favorites);
  } catch (err) {
    throw new Error(err.message);
  }
});

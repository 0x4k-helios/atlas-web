import express from "express";
import {
  allBookings,
  allFavorites,
  bookVisit,
  bookmark,
  cancelBooking,
  createUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/bookvisit/:id", bookVisit);
router.post("/bookings", allBookings);
router.post("/cancelBooking/:id", cancelBooking);
router.post("/bookmark/:propertyID", bookmark);
router.post("/favorites", allFavorites);

export { router as userRoute };

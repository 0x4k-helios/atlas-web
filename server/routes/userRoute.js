import express from "express";
import {
  allBookings,
  allFavorites,
  bookVisit,
  bookmark,
  cancelBooking,
  createUser,
} from "../controllers/userController.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/register", jwtCheck, createUser);
router.post("/bookvisit/:id", jwtCheck, bookVisit);
router.post("/bookings", jwtCheck, allBookings);
router.post("/cancelBooking/:id", jwtCheck, cancelBooking);
router.post("/bookmark/:propertyID", jwtCheck, bookmark);
router.post("/favorites", jwtCheck, allFavorites);

export { router as userRoute };

import express from "express";
import {
  makeBook,
  getBookings,
  getSingleBooking,
  deleteBooking,
  editBooking,
  getBookingsCount,
  getBookingsByEmail,
} from "./bookings.controller.js";

const router = express.Router();

// Create a new booking
router.post("/", makeBook);

// Get all bookings
router.get("/", getBookings);

// Get bookings count
router.get("/count", getBookingsCount);
router.get("/user-orders", getBookingsByEmail); 

// Get single booking by id
router.get("/:id", getSingleBooking);

// Delete booking by id
router.delete("/:id", deleteBooking);

// Update booking by id
router.put("/:id", editBooking);

export default router;

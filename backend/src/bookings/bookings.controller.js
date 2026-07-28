import bookingsModel from "./bookings.model.js";

export const makeBook = async (req, res) => {
  try {
    const booking = await bookingsModel.create(req.body);
    res.status(200).send(booking);
  } catch (error) {
    res.status(500).send({ message: error.message }); // CHANGED: fixed error.message typo
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await bookingsModel.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookingsByEmail = async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res
        .status(400)
        .json({ message: "Email query parameter is required" });
    }
    const bookings = await bookingsModel.find({ email }); // filter by email field
    res.status(200).json({ orders: bookings }); // return as { orders: [...] }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getSingleBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await bookingsModel.findById(id);
    if (!booking) {
      res.status(404).json({ message: "Booking not found" });
    } else {
      res.status(200).json(booking);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await bookingsModel.findByIdAndDelete(id);
    if (!booking) {
      res.status(404).json({ message: "Booking not found" });
    } else {
      res.status(200).json({ message: "Booking deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editBooking = async (req, res) => {
  try {
    const { id } = req.params;
    // CHANGED: add { new: true } to get updated doc after update
    const booking = await bookingsModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookingsCount = async (req, res) => {
  try {
    const count = await bookingsModel.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

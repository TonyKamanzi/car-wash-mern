import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./src/contact/contact.routes.js";
import bookingRoutes from "./src/bookings/bookings.routes.js";
import registerRoutes from "./src/users/register/register.route.js";
import loginRoutes from "./src/users/login/login.route.js";
import cors from "cors";


const app = express();

dotenv.config();
connectDB();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://tony-car-wash-f839m5rbv-tony-f54c.vercel.app",
    ],
    credentials: true,
  }),
);
app.use(express.json());

// Routes
app.use("/booking", bookingRoutes);
app.use("/contact", contactRoutes);

app.use("/users", registerRoutes);
app.use("/users",loginRoutes)


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

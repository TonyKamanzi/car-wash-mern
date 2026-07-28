import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
import { toast } from "react-hot-toast";
import api from "../../api/axios";



export default function AdminDashboard() {
  const [totalBookings, setTotalBookings] = useState(0);
  const [totalContacts, setTotalContacts] = useState(0);

  // Keep previous values to detect changes
  const prevBookings = useRef(0);
  const prevContacts = useRef(0);

  const fetchCounts = async () => {
    try {
      const bookingsRes = await api.get("/booking/count");
      const contactsRes = await api.get("/contact/count");

      const newBookings = bookingsRes.data.count;
      const newContacts = contactsRes.data.count;

      // Show toast if new booking arrives
      if (newBookings > prevBookings.current) {
        toast.success(`🆕 New Booking Received (${newBookings - prevBookings.current})`);
      }

      // Show toast if new contact message arrives
      if (newContacts > prevContacts.current) {
        toast.success(`📩 New Contact Message (${newContacts - prevContacts.current})`);
      }

      // Update states and refs
      setTotalBookings(newBookings);
      setTotalContacts(newContacts);
      prevBookings.current = newBookings;
      prevContacts.current = newContacts;

    } catch (error) {
      console.error("Error fetching counts", error);
    }
  };

  useEffect(() => {
    fetchCounts(); // Initial fetch

    const intervalId = setInterval(fetchCounts, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId); // Cleanup
  }, []);
return (
  <div className="min-h-screen flex flex-col  items-center">
    <h1 className="text-center text-2xl font-bold mb-4 text-blue-600">
      Dashboard Overview
    </h1>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="p-6 bg-blue-500 text-white shadow-md rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out hover:shadow-2xl text-center md:w-[200px] md:h-[100px] mt-4">
        Total Bookings: {totalBookings}
      </div>
      <div className="p-6 shadow-md bg-green-500 text-white hover:bg-green-600 transition-colors duration-300 ease-in-out hover:shadow-2xl rounded text-center md:w-[200px] md:h-[100px] mt-4">
        Total Contacts: {totalContacts}
      </div>
    </div>
  </div>
);

}

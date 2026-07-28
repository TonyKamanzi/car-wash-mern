// import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../../api/axios";


export default function Book() {
 const [fullname, setFullname] = useState("");
 const [email, setEmail] = useState("");
 const [phone, setPhone] = useState("");
 const [car, setCar] = useState("");
 const [service, setService] = useState("");
 const [date, setDate] = useState("");
 const [time, setTime] = useState("");
 const [notes, setNotes] = useState("");

  const navigate = useNavigate();

  const handleBook = (e) => {
    e.preventDefault();
    const data = { fullname, email, phone, car, service, date, time, notes };
    api
      .post("/booking", data)
      .then((res) => {
        console.log(res.data);
        toast.success("Booking successful!");
        navigate("/vieworders");
      })
      .catch((err) => {
        console.error("error sending message:", err);
      });
  };
  return (
    <section className="relative px-6 py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 font-secondary">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-32 translate-x-32 opacity-30 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full translate-y-32 -translate-x-16 opacity-40 z-0"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Booking Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
          <h2 className="text-blue-600 text-xl font-semibold mb-2">
            Book a Service
          </h2>
          <h1 className="text-3xl font-bold mb-6">Quick & Easy Booking</h1>
          <form onSubmit={handleBook} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+250 78..."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">Vehicle Type</label>
              <select
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setCar(e.target.value)}
                value={car}
              >
                <option value={"sedan"}>Sedan</option>
                <option value={"SUV"}>SUV</option>
                <option value={"Truck"}>Truck</option>
                <option value={"Van"}>Van</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Service Type</label>
              <select
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setService(e.target.value)}
                value={service}
              >
                <option value={"Basic wash"}>Basic Wash</option>
                <option value={"Delux Wash"}>Deluxe Wash</option>
                <option value={"Premium Wash"}>Premium Wash</option>
                <option value={"Full Detailing"}>Full Detailing</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Preferred Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Time</label>
                <input
                  type="time"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setTime(e.target.value)}
                  value={time}
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">Additional Notes</label>
              <textarea
                rows="3"
                placeholder="Any special requests?"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setNotes(e.target.value)}
                value={notes}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
            >
              Book Now
            </button>
          </form>
        </div>

        {/* Right: Info or Image */}
        <div className="text-center md:text-left">
          <img
            src="/images/cover-img.png"
            alt="Car Wash Service"
            className="rounded-lg shadow-lg mb-6"
          />
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Our Hours
          </h3>
          <p className="mb-2">Mon - Sat: 8:00 AM – 6:00 PM</p>
          <p className="mb-6">Sunday: Closed</p>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Need Help?
          </h3>
          <p className="mb-1">
            Call us:{" "}
            <a href="tel:+250788000000" className="text-blue-700 underline">
              +250 788 000 000
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@premiumwash.rw"
              className="text-blue-700 underline"
            >
              info@premiumwash.rw
            </a>
          </p>
          <p className="mt-3">
            <Link
              to={"/vieworders"}
              className={"text-blue-700 hover:text-blue-600 underline"}
            >
              View All Your Orders
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

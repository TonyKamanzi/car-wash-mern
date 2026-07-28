import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { WiStars } from "react-icons/wi";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative px-6 py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden font-secondary"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-32 translate-x-32 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full translate-y-32 -translate-x-16 opacity-40"></div>
        {/* Image */}
        <div className="md:flex hidden justify-center relative w-80 h-80">
          {/* Car Wash Image */}
          <img
            src="/images/man-washing.png"
            className="w-80 h-80 object-cover rounded-full shadow-lg hover:shadow-2xl"
            alt="Car Wash"
          />

          {/* Icon Circle - Partially Overlapping from Top */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 border-4 border-blue-600 bg-white rounded-full flex items-center justify-center">
              <p className="text-xl font-bold text-center text-orange-400">
                100%
              </p>
              <WiStars className="text-blue-600 w-12 h-12" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h1 className="text-blue-600 md:text-5xl text-4xl font-bold  mb-2">
            About Us
          </h1>
          <h2 className="text-xl md:text-5xl font-bold mb-4 leading-tight">
            We're an <span className="text-blue-500">Award-Winning</span> Car
            Wash Service
          </h2>
          <p className="md:text-lg mb-6 text-gray-600 md:font-semibold">
            We started Premium Car Wash in 2020 with one goal: to provide car
            owners with a luxurious, efficient, and eco-friendly way to keep
            their vehicles spotless. What began as a small garage service has
            grown into a trusted name in vehicle care across Kigali.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3 md:font-semibold text-gray-600">
              <IoMdCheckmarkCircleOutline className="w-6 h-6 text-green-600" />
              Award-Winning Car Care Experts
            </li>
            <li className="flex items-center gap-3 md:font-semibold text-gray-600">
              <IoMdCheckmarkCircleOutline className="w-6 h-6 text-green-600" />
              Experienced Team Members
            </li>
            <li className="flex items-center gap-3 md:font-semibold text-gray-600">
              <IoMdCheckmarkCircleOutline className="w-6 h-6 text-green-600" />
              High Quality & Eco-Friendly Services
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

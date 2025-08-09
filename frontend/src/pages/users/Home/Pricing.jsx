import React from "react";

export default function Pricing() {
  const pricings = [
    {
      h1: "Basic Wash",
      amount: "Rwf20k",
      description: {
        1: "Exterior Wash",
        2: "Tire Shine",
        3: "Towel Dry",
      },
    },
    {
      h1: "Deluxe Wash",
      amount: "Rwf35k",
      description: {
        1: "Exterior Wash",
        2: "Tire Shine",
        3: "Towel Dry",
        4: "Interior Vacuum",
        5: "Window Cleaning",
      },
    },
    {
      h1: "Premium Wash",
      amount: "Rwf50k",
      description: {
        1: "Exterior Wash",
        2: "Tire Shine",
        3: "Towel Dry",
        4: "Interior Vacuum",
        5: "Window Cleaning",
        6: "Dashboard Wipe",
        7: "Fragrance",
      },
    },
    {
      h1: "Full Detailing",
      amount: "Rwf100k+",
      description: {
        1: "Everything in Premium",
        2: "Seat Cleaning",
        3: "Carpet Shampoo",
        4: "Exterior Wax",
      },
    },
  ];

  return (
    <section
      id="pricing"
      className="relative px-6 py-16 lg:py-24 bg-gradient-to-br
        from-gray-50 via-white to-blue-50 overflow-hidden font-secondary"
    >
      {/* Background Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-32 translate-x-32 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full translate-y-32 -translate-x-16 opacity-40"></div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="font-bold md:text-5xl text-4xl text-blue-600">
          Our Pricing
        </h1>
        <p className="mt-4 text-gray-600 md:text-2xl">
          Affordable and transparent plans tailored for every vehicle.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {pricings.map((pricing, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl flex flex-col items-center text-center p-6 hover:shadow-2xl md:min-h-[400px] space-y-2"
          >
            <h1 className="font-semibold text-blue-600 text-2xl">
              {pricing.h1}
            </h1>
            <h2 className="font-semibold text-blue-400 text-xl">
              {pricing.amount}
            </h2>

            <div className="pt-4 space-y-1">
              {Object.values(pricing.description).map((desc, i) => (
                <p key={i} className="text-gray-600 md:font-semibold text-md">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";

export default function Services() {
  const services = [
    {
      id: 1,
      name: "Basic Wash",
      descrption: "Exterior rinse, soap, and dry with a finishing touch.",
      img: "/images/icons/basic-wash.png",
    },
    {
      id: 2,
      name: "Deluxe Wash",
      descrption: "Includes interior vacuuming and window cleaning.",
      img: "/images/icons/car-wash2.png",
    },
    {
      id: 3,
      name: "Premium Wash",
      descrption: "Top-tier interior & exterior care, polish & fragrance..",
      img: "/images/icons/crown.png",
    },
    {
      id: 4,
      name: "Full Interior Detailing",
      descrption: "Deep cleaning of seats, carpets, dash, and doors.",
      img: "/images/icons/automotive.png",
    },
    {
      id: 5,
      name: "Headlight Restoration",
      descrption: "Clear, bright headlights for safer night driving.",
      img: "/images/icons/headlight.png",
    },
    {
      id: 6,
      name: "Exterior Waxing",
      descrption: "Protect your paint and boost shine with quality wax.",
      img: "/images/icons/car.png",
    },
    {
      id: 7,
      name: "Tire & Wheel Cleaning",
      descrption: "Scrubbed and shined wheels for a full finish.",
      img: "/images/icons/tire.png",
    },
  ];
  
  return (
    <section id="services" className="relative px-6 py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden font-secondary">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-32 translate-x-32 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full translate-y-32 -translate-x-16 opacity-40"></div>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="font-bold md:text-5xl text-4xl text-blue-600 ">Our Services</h1>
        <p className="mt-4 text-gray-600 md:text-2xl">Discover what we offer to make your car shine like new!</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4  ">
        {services.map((service, id) => (
          <div key={id} className="bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center text-center p-6 hover:shadow-2xl">
            <img
              src={service.img}
              className="md:w-20 md:h-20 w-10 h-10 "
              alt="services"
            />
            <h1 className="font-semibold text-blue-600 mt-2">{service.name}</h1>
            <p className="md:font-semibold text-gray-600 mt-2">{service.descrption}</p>
          </div>
        ))}
      </div>
      ;
    </section>
  );
}

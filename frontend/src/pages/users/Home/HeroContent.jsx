import { MoveRight } from "lucide-react";
import React from "react";

export default function HeroContent() {
  return (
    <section className="relative px-6 py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden font-secondary">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-32 translate-x-32 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full translate-y-32 -translate-x-16 opacity-40"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="block text-gray-800">Keep Your</span>
                <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text ">
                  Car Clean
                </span>
                <span className="block text-gray-800">Always</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg">
                Tony Car Wash is a brand that's going to change how people think
                about car cleaning.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <a
                href="/book"
                className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
              >
                Book Now
                <MoveRight
                  size={22}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold text-lg transition-colors duration-300 border-b-2 border-transparent hover:border-blue-600"
              >
                View Services
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-gray-200">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Contact Us
                </h3>
                <p className="text-lg font-bold text-gray-800">+250784694998</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Location
                </h3>
                <p className="text-lg font-bold text-gray-800">
                  Kigali Rwanda KK 22
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visual Elements */}
          <div className="relative lg:justify-self-end">
            {/* Decorative background shapes */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-3xl transform rotate-3 scale-110 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-gray-100 to-transparent rounded-3xl transform -rotate-2 scale-105 opacity-30"></div>

            {/* Car placeholder with styling */}
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                {/* Car SVG placeholder - you can replace this with your actual car image */}
                <img
                  src="images/blue-car.jpeg"
                  className="w-full h-full"
                  alt=""
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">✨</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs">CLEAN</span>
              </div>
            </div>

            {/* Stats or features */}
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div className="text-center bg-white rounded-xl p-4 shadow-md">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center bg-white rounded-xl p-4 shadow-md">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center bg-white rounded-xl p-4 shadow-md">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

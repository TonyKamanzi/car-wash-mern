import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white px-6 py-12 mt-16 font-secondary">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold mb-3">Premium Car Wash</h1>
          <p className="text-sm">
            Delivering quality car cleaning services with eco-friendly solutions
            and professional care across Kigali.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FiPhone /> +250 788 123 456
            </li>
            <li className="flex items-center gap-2">
              <FiMail /> support@premiumcarwash.rw
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-4 text-white">
            <a href="#" className="hover:text-blue-200">
              <FiFacebook size={20} />
            </a>
            <a href="#" className="hover:text-blue-200">
              <FiTwitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-200">
              <FiInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-400 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Premium Car Wash. All rights reserved.
      </div>
    </footer>
  );
}

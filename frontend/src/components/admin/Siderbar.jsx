import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button for small screens */}
      <button
        className="md:hidden  fixed top-4 left-4 z-50 p-2 bg-blue-800 text-white rounded-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-blue-800 text-white p-6 space-y-6
          transform md:translate-x-0 transition-transform duration-300 ease-in-out
          w-64
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0
          z-40
        `}
      >
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <nav className="space-y-4">
          <Link
            to="/admin"
            className="block hover:text-blue-200"
            onClick={() => setIsOpen(false)}
          >
            📊 Dashboard
          </Link>
          <Link
            to="/admin/bookingslist"
            className="block hover:text-blue-200"
            onClick={() => setIsOpen(false)}
          >
            📅 Bookings
          </Link>
          <Link
            to="/admin/contactmessages"
            className="block hover:text-blue-200"
            onClick={() => setIsOpen(false)}
          >
            📬 Contacts
          </Link>
        </nav>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

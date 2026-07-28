import React, { useState, useEffect, useRef } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // profile dropdown
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const dropdownRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    navigate("/login");
    window.location.reload();
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to={"/"} className="group">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
                Car
                <span className="text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                  Wash
                </span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to={"/"}
              className="text-gray-700 hover:text-blue-600 font-medium text-sm uppercase tracking-wider transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              to={"/book"}
              className="text-gray-700 hover:text-blue-600 font-medium text-sm uppercase tracking-wider transition-colors duration-200 relative group"
            >
              Book Now
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              to={"/about"}
              className="text-gray-700 hover:text-blue-600 font-medium text-sm uppercase tracking-wider transition-colors duration-200 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              to={"/services"}
              className="text-gray-700 hover:text-blue-600 font-medium text-sm uppercase tracking-wider transition-colors duration-200 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              to={"/contact"}
              className="text-gray-700 hover:text-blue-600 font-medium text-sm uppercase tracking-wider transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              to={"/pricing"}
              className="text-gray-700 hover:text-blue-600 font-medium text-sm uppercase tracking-wider transition-colors duration-200 relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop Auth Buttons or User Profile */}
          <div className="hidden md:flex items-center space-x-4 relative">
            {!user ? (
              <>
                <Link
                  to={"/login"}
                  className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Register
                </Link>
              </>
            ) : (
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 bg-blue-600 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <span>{user.name}</span>
                  <HiChevronDown />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-6 space-y-1 bg-white border-t border-gray-100 mt-2">
            <Link
              to={"/"}
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to={"/book"}
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
            <Link
              to={"/about"}
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to={"/services"}
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to={"/contact"}
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to={"/pricing"}
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>

            {/* Mobile Auth Buttons or Profile */}
            {!user ? (
              <div className="pt-4 mt-4 border-t border-gray-100 space-y-2">
                <Link
                  to={"/login"}
                  className="block w-full px-4 py-3 text-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="block w-full px-4 py-3 text-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="pt-4 mt-4 border-t border-gray-100">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
                >
                  Logout ({user.name})
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

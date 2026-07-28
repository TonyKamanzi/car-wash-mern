import React, { useState } from "react";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api/axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    api
      .post("/api/users/register", {
        name: username,
        email,
        password,
      })
      .then((response) => {
        toast.success("Sign up successful!");
        navigate("/login");
      })
      .catch((error) => {
        if (error.response && error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert("Something went wrong. Please try again.");
        }
      });
  }

  return (
    <div className="relative px-4 md:px-6 py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden font-secondary">
      {/* Background Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-32 translate-x-32 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full translate-y-32 -translate-x-16 opacity-40"></div>

      {/* Container */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl">
        {/* Left side */}
        <div className="bg-[#dbeaff] hidden md:flex items-center justify-center p-8">
          <img src="/images/logo.png" alt="Logo" className="w-60 h-auto" />
        </div>

        {/* Right side */}
        <div className="bg-[#f1f2f6] p-8 flex flex-col justify-center">
          <form onSubmit={handleSubmit}>
            <h1 className="md:text-3xl text-lg font-bold mb-6 text-center text-blue-600">
              Sign Up
            </h1>

            <div className="mb-4">
              <label
                htmlFor="username"
                className="md:font-medium text-gray-700 block mb-2"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="w-full md:px-4 px-2 py-1 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="md:font-medium text-gray-700 block mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full md:px-4 px-2 py-1 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="font-medium text-gray-700 block mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full md:px-4 md:py-2 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-sm">----------or------------</p>
          <p className="mt-4 text-sm">
            Have created an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

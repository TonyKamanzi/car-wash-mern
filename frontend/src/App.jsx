import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/users/Navbar";
import Footer from "./components/users/Footer";


export default function App() {
  return (
    <>
      
      <Navbar />
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

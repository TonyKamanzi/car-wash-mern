import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Siderbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayouts() {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </div>
      </div>

      {/* Toast notifications container */}
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}

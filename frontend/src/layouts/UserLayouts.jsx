import { Outlet } from "react-router-dom";
import Navbar from "../components/users/Navbar";
import Footer from "../components/users/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
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

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ViewOrders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  // Fetch orders only for the logged-in user
  const fetchOrders = async () => {
    try {
      const user = localStorage.getItem("user");
      if (!user) {
        navigate("/login"); // redirect to login if no user info
        return;
      }

      const userObj = JSON.parse(user);
      const email = userObj.email;

      // Call your backend API with the user's email
      const res = await axios.get(
        `http://localhost:5001/booking/user-orders?email=${encodeURIComponent(
          email
        )}`
      );

      setOrders(res.data.orders); // adjust based on your backend response shape
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Failed to fetch orders");
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this order?"
    );
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:5001/booking/${id}`);
      toast.success("Order deleted successfully");
      fetchOrders();
    } catch (error) {
      console.error("Error deleting order:", error);
      toast.error("Failed to delete order");
    }
  };

  useEffect(() => {
    fetchOrders();
    const intervalId = setInterval(fetchOrders, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative px-4 md:px-8 py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden font-secondary min-h-screen">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-32 translate-x-32 opacity-30 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full translate-y-32 -translate-x-16 opacity-40 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700">
          Your Orders
        </h1>

        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-blue-100 text-blue-800 uppercase text-xs font-semibold">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Notes</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center px-4 py-10 text-gray-500"
                  >
                    No orders found.
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b hover:bg-blue-50 transition duration-200"
                  >
                    <td className="px-4 py-3 whitespace-nowrap">
                      {order.fullname}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {order.email}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {order.service}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {new Date(order.date).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {order.time}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {order.notes}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 rounded text-white text-xs font-semibold ${
                          order.status === "Pending"
                            ? "bg-yellow-400"
                            : order.status === "Confirmed"
                            ? "bg-blue-500"
                            : order.status === "Completed"
                            ? "bg-green-600"
                            : order.status === "Cancelled"
                            ? "bg-red-600"
                            : "bg-gray-400"
                        }`}
                      >
                        {order.status || "Pending"}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <button
                        onClick={() => handleDelete(order._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div className="flex justify-center items-center">
            <button
              onClick={() => window.print()}
              className="mb-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow mt-6"
            >
              Print Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

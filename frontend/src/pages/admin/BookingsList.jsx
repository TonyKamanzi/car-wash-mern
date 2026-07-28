import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function BookingsList() {
  const [bookings, setBookings] = useState([]);
  const prevCountRef = useRef(0);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:5001/booking");
      const newBookings = res.data;

      if (prevCountRef.current && newBookings.length > prevCountRef.current) {
        toast.success("🎉 New booking received!", {
          position: "top-right",
          autoClose: 3000,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }

      prevCountRef.current = newBookings.length;
      setBookings(newBookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const updateBookingStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5001/booking/${id}`, { status });
      toast.info(`✅ Booking status updated to "${status}"`, {
        position: "bottom-right",
      });
      fetchBookings();
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("❌ Failed to update status");
    }
  };

  useEffect(() => {
    fetchBookings();
    const intervalId = setInterval(fetchBookings, 5000);
    return () => clearInterval(intervalId);
  }, []);

  // Helper: Return Tailwind classes based on status
  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Confirmed":
        return "bg-blue-100 text-blue-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600 text-center">
        All Bookings
      </h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-[700px] md:min-w-full text-sm md:text-base text-left text-gray-700">
          <thead className="bg-blue-100 text-blue-800 uppercase text-xs md:text-sm font-semibold">
            <tr>
              <th className="px-3 md:px-4 py-2">Name</th>
              <th className="px-3 md:px-4 py-2">Email</th>
              <th className="px-3 md:px-4 py-2">Service</th>
              <th className="px-3 md:px-4 py-2">Date</th>
              <th className="px-3 md:px-4 py-2">Time</th>
              <th className="px-3 md:px-4 py-2">Note</th>
              <th className="px-3 md:px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((book) => (
              <tr
                key={book._id}
                className="border-b hover:bg-blue-50 transition duration-200"
              >
                <td className="px-3 md:px-4 py-2 whitespace-nowrap">
                  {book.fullname}
                </td>
                <td className="px-3 md:px-4 py-2 whitespace-nowrap">
                  {book.email}
                </td>
                <td className="px-3 md:px-4 py-2 whitespace-nowrap">
                  {book.service}
                </td>
                <td className="px-3 md:px-4 py-2 whitespace-nowrap">
                  {new Date(book.date).toLocaleDateString()}
                </td>
                <td className="px-3 md:px-4 py-2 whitespace-nowrap">
                  {book.time}
                </td>
                <td className="px-3 md:px-4 py-2 whitespace-nowrap">
                  {book.notes}
                </td>
                <td className="px-3 md:px-4 py-2 whitespace-nowrap flex items-center gap-2">
                  {/* Colored status label */}
                  <span
                    className={`px-2 py-1 rounded text-xs md:text-sm font-semibold ${getStatusClass(
                      book.status
                    )}`}
                  >
                    {book.status || "Pending"}
                  </span>

                  {/* Dropdown to change status */}
                  <select
                    value={book.status || "Pending"}
                    onChange={(e) =>
                      updateBookingStatus(book._id, e.target.value)
                    }
                    className={`border rounded px-2 py-1 text-xs md:text-sm cursor-pointer ${getStatusClass(
                      book.status
                    )}`}
                  >
                    <option
                      value="Pending"
                      className="bg-yellow-100 text-yellow-800"
                    >
                      Pending
                    </option>
                    <option
                      value="Confirmed"
                      className="bg-blue-100 text-blue-800"
                    >
                      Confirmed
                    </option>
                    <option
                      value="Completed"
                      className="bg-green-100 text-green-800"
                    >
                      Completed
                    </option>
                    <option
                      value="Cancelled"
                      className="bg-red-100 text-red-800"
                    >
                      Cancelled
                    </option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center items-center">
          <button
            onClick={() => window.print()}
            className="mb-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow mt-6 px-6 py-2"
          >
            Print Bookings
          </button>
        </div>
      </div>
    </div>
  );
}

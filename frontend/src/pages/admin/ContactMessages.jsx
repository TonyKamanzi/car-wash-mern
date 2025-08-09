import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function ContactsMessages() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5001/contact")
      .then((res) => {
        setContacts(res.data);
      })
      .catch(() => {
        toast.error("Failed to load messages");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/contact/${id}`);
      setContacts((prev) => prev.filter((c) => c._id !== id));
      toast.success("Message deleted successfully");
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Failed to delete the message");
    }
  };

  if (loading)
    return (
      <p className="text-center text-gray-500 mt-10">Loading messages...</p>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl font-extrabold text-blue-700 mb-8 text-center">
        All Contact Messages
      </h2>

      {contacts.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No Messages Yet</p>
      ) : (
        <ul className="space-y-6">
          {contacts.map((c) => (
            <li
              key={c._id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="mb-2">
                <strong className="text-blue-600">Name:</strong> {c.fullname}
              </p>
              <p className="mb-2">
                <strong className="text-blue-600">Email:</strong> {c.email}
              </p>
              <p className="mb-4 whitespace-pre-wrap">
                <strong className="text-blue-600">Message:</strong> {c.message}
              </p>
              <button
                onClick={() => handleDelete(c._id)}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded shadow px-5 py-2 transition"
                aria-label={`Delete message from ${c.fullname}`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

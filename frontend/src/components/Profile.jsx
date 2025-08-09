import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // If no user logged in, redirect to login page
      navigate("/login");
    }
  }, [navigate]);

  if (!user) {
    return null; // or loading spinner
  }

  return (
    <div className="max-w-3xl mx-auto p-8 mt-10 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Your Profile</h1>
      <p className="mb-2">
        <strong>Name:</strong> {user.name}
      </p>
      <p className="mb-2">
        <strong>Email:</strong> {user.email}
      </p>
      {/* Add more user details here if you want */}
    </div>
  );
}

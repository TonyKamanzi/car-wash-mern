import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios";

export default function ContactUs() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleMessage = (e) => {
    e.preventDefault();
    const data = { fullname, email, message };

    api
      .post("/api/contact", data)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <section
      id="contact"
      className="relative px-6 py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden font-secondary"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-32 translate-x-32 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full translate-y-32 -translate-x-16 opacity-40"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 text-xl font-semibold">Contact Us</h2>
          <h1 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-blue-500">Touch</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We’d love to hear from you. Whether you're curious about our
            services, need support, or want to schedule an appointment — we're
            ready to answer all your questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <form
            onSubmit={handleMessage}
            className="space-y-5 bg-white p-8 rounded-xl shadow-lg"
          >
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FiPhone className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600">+250 788 123 456</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiMail className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">kamanzitony06@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiMapPin className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600">Kigali, Rwanda</p>
              </div>
            </div>

            {/* Optional Map */}
            <iframe
              className="w-full h-64 rounded-lg border-2 border-blue-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.0893288461884!2d30.100927174033487!3d-1.9440726980591927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca633cc6b9d8f%3A0x226cb23c126a3402!2sKigali!5e0!3m2!1sen!2srw!4v1692538658345!5m2!1sen!2srw"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Kigali"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

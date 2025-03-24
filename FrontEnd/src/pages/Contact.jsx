import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000); // Hide success message after 3 seconds
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-6">
      <h2 className="text-4xl font-bold text-green-700 mb-4">Contact Us</h2>
      <p className="text-gray-600 text-lg mb-8 text-center">
        Have any questions or feedback? We'd love to hear from you!
      </p>

      <div className="w-full max-w-4xl bg-white p-8 shadow-md rounded-lg flex flex-col md:flex-row">
        {/* Contact Form */}
        <div className="md:w-1/2 p-4">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Send Us a Message</h3>
          {submitted && <p className="text-green-600 mb-3">✅ Message Sent Successfully!</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/2 p-4 flex flex-col justify-center items-start">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h3>
          <p className="text-gray-600 mb-2">📍 123 Green Street, New Delhi, India</p>
          <p className="text-gray-600 mb-2">📞 +91 98765 43210</p>
          <p className="text-gray-600 mb-2">✉️ support@donorsphere.com</p>
          <p className="text-gray-600">🕒 Mon-Fri: 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

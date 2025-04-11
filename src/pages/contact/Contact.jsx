/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import axios from 'axios';
export const ContactSection = () => {
  return (
    <div className="py-16 bg-gray-900 rounded-xl text-white dark:text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h6 className="text-blue-400 uppercase font-semibold tracking-wider">
            Contact Us
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto mt-4">
            Have questions or need assistance? Our team is here to help you with
            all your inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <ContactInfoCard
              icon={<FaPhone className="text-blue-400 text-xl" />}
              title="Phone"
              items={["+250 (78) 794-4577", "+250 (72) 755-6145"]}
            />

            <ContactInfoCard
              icon={<FaEnvelope className="text-blue-400 text-xl" />}
              title="Email"
              items={["info@hotel.com", "support@hotel.com"]}
            />

            <ContactInfoCard
              icon={<FaMapMarkerAlt className="text-blue-400 text-xl" />}
              title="Address"
              items={[
                "123 Luxury Street",
                "Hospitality District",
                "Kigali, KG 191",
              ]}
            />

            <ContactInfoCard
              icon={<FaClock className="text-blue-400 text-xl" />}
              title="Working Hours"
              className="text-black font-bold"
              items={[
                "Monday - Friday: 9:00 - 18:00",
                "Saturday: 10:00 - 16:00",
                "Sunday: Closed",
              ]}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ContactInfoCard = ({ icon, title, items }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md p-6 flex items-start"
    >
      <h2 className="bg-blue-text-blue-400 bg-opacity-10 p-3 rounded-full mr-4">
        {icon}
      </h2>
      <div>
        <h3 className="font-semibold text-black text-lg mb-2">{title}</h3>
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li key={index} className="text-gray-600">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    setIsSubmitting(true);
  
    try {
      // Replace with your actual API endpoint
      const response = await axios.post('https://hotel-nodejs-oa32.onrender.com/83920/92303', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
   
      });
      if (response) {
        alert('Message sent successfully !!');
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      alert("Submission error:", error)
      // You might want to set an error state here
      // setSubmissionError(error.response?.data?.message || "Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-8"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for contacting us. We'll get back to you soon.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="bg-blue-text-blue-400 hover:bg-blue-text-blue-400-dark text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white text-black space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-text-blue-400 focus:border-transparent ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-text-blue-400 focus:border-transparent ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-text-blue-400 focus:border-transparent"
            placeholder="+1 (123) 456-7890"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-gray-700 mb-1">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-text-blue-400 focus:border-transparent ${
            errors.subject ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="What's this about?"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full text-black  px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-text-blue-400 focus:border-transparent ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Your message here..."
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-text-blue-400 hover:bg-blue-text-blue-400-dark text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-70 flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
    </form>
  );
};

// Map component (would need Google Maps API key in a real implementation)
const ContactMap = () => {
  return (
    <div className="mt-8 rounded-lg overflow-hidden shadow-md">
      <div className="h-64 bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Map would be displayed here</p>
        {/* In a real implementation, you would use Google Maps or similar */}
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=123+Luxury+Street,Hospitality+District,New+York,NY+10001`}
          className="w-full h-full"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

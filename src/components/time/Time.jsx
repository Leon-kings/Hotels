/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Time = () => {
  const [time, setTime] = useState("");

  // Function to get the current time in Kigali, Rwanda (GMT+2)
  const getCurrentTime = () => {
    const now = new Date();
    const options = {
      timeZone: "Africa/Kigali", // Set timezone to Kigali, Rwanda
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Use 24-hour format
    };
    return new Intl.DateTimeFormat("en-US", options).format(now);
  };

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <motion.div
      className="flex justify-center items-center bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p className="text-4xl font-bold mb-4">
          Current Time in Kigali, Rwanda
        </p>
        <motion.div
          className="text-6xl font-mono bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {time}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

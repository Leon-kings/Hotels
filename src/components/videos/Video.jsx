/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const LuxuryHotel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [activeTab, setActiveTab] = useState("rooms");

  // Extract YouTube ID from URL
  const extractYouTubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const handlePlayClick = (url) => {
    const id = extractYouTubeId(url);
    if (id) {
      setVideoId(id);
      setIsModalOpen(true);
    } else {
      console.error("Invalid YouTube URL");
    }
  };

  const handleRoomsClick = () => {
    setActiveTab("rooms");
    const roomsSection = document.getElementById("rooms");
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookClick = () => {
    setActiveTab("book");
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      <motion.div
        className="container mx-auto py-5 px-4 md:px-6 lg:px-8 xl:px-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 bg-gray-900 flex items-center p-8 lg:p-12">
            <div className="max-w-lg">
              <motion.h6
                className="text-white uppercase tracking-wider text-sm font-semibold mb-3"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Luxury Living
              </motion.h6>
              <motion.h1
                className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Discover A Brand Luxurious Hotel
              </motion.h1>
              <motion.p
                className="text-gray-300 mb-6"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                LD Hotel is happy to serve you one of the best suite and room to
                host your familly and also we are able to host board meeting on
                best suitable room. <br /> Provides a variety of indoor and
                outdoor event spaces, suitable for both business meetings and
                weddings, and is centrally located.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link to={"/R-8763-327/34"}>
                  <Button>
                    <motion.button
                      onClick={handleRoomsClick}
                      className={`py-3 px-5 md:px-8 rounded-md text-center transition duration-300 ${
                        activeTab === "rooms"
                          ? "bg-blue-700 text-white"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    >
                      Our Rooms
                    </motion.button>
                  </Button>
                </Link>
                <Link to={"/C-3872-2344/34"}>
                  <Button>
                    <motion.button
                      onClick={handleBookClick}
                      className={`py-3 px-5 md:px-8 rounded-md text-center transition duration-300 ${
                        activeTab === "book"
                          ? "bg-gray-200 text-gray-900"
                          : "bg-white hover:bg-gray-100 dark:text-white text-gray-900"
                      }`}
                    >
                      Book A Room
                    </motion.button>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Video Thumbnail */}
          <div className="w-full lg:w-1/2 relative min-h-[400px]">
            <motion.button
              type="button"
              className="absolute inset-0 flex items-center justify-center w-full h-full overflow-hidden"
              onClick={() => handlePlayClick("https://youtu.be/BKFcvnd0aaU")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Video Thumbnail - Now properly contained in the right column */}
              <div className="absolute inset-0 bg-cover bg-center" />
              {/* Overlay for better play button visibility */}
              <div
                style={{
                  backgroundImage: `url(https://img.youtube.com/vi/BKFcvnd0aaU/maxresdefault.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="absolute inset-0 bg-opacity-30"
              ></div>
              {/* Play Button */}
              <div className="relative z-10">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* YouTube Video Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="relative w-full max-w-6xl mx-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Styled better */}
            <button
              className="absolute -top-10 right-0 md:-right-10 text-white hover:text-gray-300 transition-colors z-10"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close video modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-amber-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Responsive YouTube Iframe Container */}
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Luxury Hotel Video"
              />
            </div>

            {/* Video Description (optional) */}
            <div className="p-4 bg-gray-900 text-white rounded-b-lg">
              <h3 className="text-xl font-semibold">Luxury Hotel Experience</h3>
              <p className="text-gray-300 mt-1">
                Discover our world-class amenities
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

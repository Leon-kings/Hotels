/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Hotel, PeopleAlt, Engineering } from "@mui/icons-material";
import { images } from "../../assets/data/data";

export const About = () => {
  const [showMore, setShowMore] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6 },
    }),
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { delay, duration: 0.6 },
    }),
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="w-full mt-0 mb-1 rounded-2xl">
      <div className="py-20 bg-gray-100">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Column - Text Content */}
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
              >
                <span className="text-blue-600 font-bold tracking-wider text-xs uppercase block mb-2">
                  About Us
                </span>
                <h1 className="text-4xl font-bold mb-6">
                  <span className="text-blue-600 uppercase">LD Hotel</span>
                </h1>
              </motion.div>

              <motion.div
                custom={0.2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="mt-8"
              >
                <p className="text-gray-600 mb-4">
                  Great savings on hotels in Kigali, Rwanda online. Good
                  availability and great rates. Read hotel reviews and choose
                  the best hotel deal for your stay.
                </p>

                {showMore && (
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Our hotel offers world-class amenities including a spa, fitness center, 
                      and multiple dining options. Located in the heart of Kigali, we provide 
                      easy access to the city's top attractions.
                    </p>
                    <p className="text-gray-600">
                      With over 10 years of experience in hospitality, our dedicated staff 
                      ensures every guest receives exceptional service throughout their stay.
                    </p>
                  </div>
                )}
              </motion.div>

              <motion.div
                custom={0.3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="mt-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Hotel fontSize="large" />,
                      count: 1234,
                      label: "Rooms",
                      delay: 0,
                    },
                    {
                      icon: <Engineering fontSize="large" />,
                      count: 1234,
                      label: "Staff",
                      delay: 0.1,
                    },
                    {
                      icon: <PeopleAlt fontSize="large" />,
                      count: 1234,
                      label: "Clients",
                      delay: 0.2,
                    },
                  ].map((stat, index) => (
                    <div key={index}>
                      <motion.div
                        custom={stat.delay}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                      >
                        <div className="border border-gray-300 rounded-lg p-1">
                          <div className="border border-gray-300 rounded-lg p-6 text-center">
                            <div className="text-blue-600 mb-4 flex justify-center">
                              {stat.icon}
                            </div>
                            <h4 className="text-2xl font-bold mb-2">
                              {stat.count.toLocaleString()}
                            </h4>
                            <p className="text-gray-600">{stat.label}</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                custom={0.6}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="mt-8"
              >
                <button
                  onClick={toggleShowMore}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  {showMore ? "Show Less" : "Explore More"}
                </button>
              </motion.div>
            </div>

            {/* Right Column - Image Grid */}
            <div>
              <div className="grid grid-cols-2 gap-4 h-full">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`flex ${img.justify === "flex-start" ? "justify-start" : "justify-end"}`}
                  >
                    <motion.div
                      custom={img.delay}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={zoomIn}
                      className={`w-full ${img.width === "80%" ? "w-4/5" : "w-full"} ${img.mt ? `mt-${img.mt}` : ""}`}
                    >
                      <img
                        src={img.src}
                        alt="Hotel"
                        className="rounded-xl w-full h-auto shadow-lg object-cover"
                        style={{ height: img.height || "auto" }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
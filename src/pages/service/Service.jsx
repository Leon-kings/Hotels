/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { services } from "../../assets/data/data";

export default function Service() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="w-full py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h6 className="section-title text-center text-primary uppercase font-semibold text-lg">
              Our Services
            </h6>
            <h1 className="text-4xl font-bold mb-5 mt-2">
              Explore Our{" "}
              <span className="text-primary uppercase">Services</span>
            </h1>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-item rounded-lg p-6 bg-white  shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                variants={itemVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: service.delay }}
                whileHover={{ y: -5 }}
              >
                <div className="service-icon bg-transparent  mx-auto mb-4">
                  <div className="w-full h-full  flex items-center justify-center">
                    <img src={service.icon} className="w-full object-cover rounded-xl h-[180px]" title={service.title} alt="" />
                  </div>
                </div>
                <h5 className="text-xl text-gray-900 font-semibold mb-3 text-center">
                  {service.title}
                </h5>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

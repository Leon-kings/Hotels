// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Hotel, PeopleAlt, Engineering } from "@mui/icons-material";
// import { images } from "../../assets/data/data";

// export const About = () => {
//   const [showMore, setShowMore] = useState(false);

//   // Animation variants
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (delay = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay, duration: 0.6 },
//     }),
//   };

//   const zoomIn = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: (delay = 0) => ({
//       opacity: 1,
//       scale: 1,
//       transition: { delay, duration: 0.6 },
//     }),
//   };

//   const toggleShowMore = () => {
//     setShowMore(!showMore);
//   };

//   return (
//     <div className="w-full mt-0 mb-1 rounded-2xl">
//       <div className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
//         <div className="container max-w-screen-xl mx-auto px-4">
//           <div className="grid gap-12 md:grid-cols-2 items-center">
//             {/* Left Column - Text Content */}
//             <div>
//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-50px" }}
//                 variants={fadeIn}
//               >
//                 <span className="text-blue-600 font-bold tracking-wider text-xs uppercase block mb-2">
//                   About Us
//                 </span>
//                 <h1 className="text-4xl font-bold mb-6">
//                   <span className="text-blue-600 uppercase">LD Hotel</span>
//                 </h1>
//               </motion.div>

//               <motion.div
//                 custom={0.2}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeIn}
//                 className="mt-8"
//               >
//                 <p className="text-gray-600 mb-4">
//                   Great savings on hotels in Kigali, Rwanda online. Good
//                   availability and great rates. Read hotel reviews and choose
//                   the best hotel deal for your stay.
//                 </p>

//                 {showMore && (
//                   <div className="space-y-4">
//                     <p className="text-gray-600">
//                       Our hotel offers world-class amenities including a spa,
//                       fitness center, and multiple dining options. Located in
//                       the heart of Kigali, we provide easy access to the city's
//                       top attractions.
//                     </p>
//                     <p className="text-gray-600">
//                       With over 10 years of experience in hospitality, our
//                       dedicated staff ensures every guest receives exceptional
//                       service throughout their stay.
//                     </p>
//                   </div>
//                 )}
//               </motion.div>

//               <motion.div
//                 custom={0.3}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeIn}
//                 className="mt-8"
//               >
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//                   {[
//                     {
//                       icon: <Hotel fontSize="large" />,
//                       count: 1234,
//                       label: "Rooms",
//                       delay: 0,
//                     },
//                     {
//                       icon: <Engineering fontSize="large" />,
//                       count: 1234,
//                       label: "Staff",
//                       delay: 0.1,
//                     },
//                     {
//                       icon: <PeopleAlt fontSize="large" />,
//                       count: 1234,
//                       label: "Clients",
//                       delay: 0.2,
//                     },
//                   ].map((stat, index) => (
//                     <div key={index}>
//                       <motion.div
//                         custom={stat.delay}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                         variants={fadeIn}
//                       >
//                         <div className="border border-gray-300 rounded-lg p-1">
//                           <div className="border border-gray-300 rounded-lg p-6 text-center">
//                             <div className="text-blue-600 mb-4 flex justify-center">
//                               {stat.icon}
//                             </div>
//                             <h4 className="text-2xl text-blue-400 font-bold mb-2">
//                               {stat.count.toLocaleString()}
//                             </h4>
//                             <p className="text-gray-600">{stat.label}</p>
//                           </div>
//                         </div>
//                       </motion.div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>

//               <motion.div
//                 custom={0.6}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeIn}
//                 className="mt-8 p-4"
//               >
//                 <button
//                   onClick={toggleShowMore}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
//                 >
//                   {showMore ? "Show Less" : "Explore More"}
//                 </button>
//               </motion.div>
//             </div>

//             {/* Right Column - Image Grid */}
//             <div>
//               <div className="grid grid-cols-2 gap-4 h-full">
//                 {images.map((img, index) => (
//                   <div
//                     key={index}
//                     className={`flex ${
//                       img.justify === "flex-start"
//                         ? "justify-start"
//                         : "justify-end"
//                     }`}
//                   >
//                     <motion.div
//                       custom={img.delay}
//                       initial="hidden"
//                       whileInView="visible"
//                       viewport={{ once: true }}
//                       variants={zoomIn}
//                       className={`w-full ${
//                         img.width === "80%" ? "w-4/5" : "w-full"
//                       } ${img.mt ? `mt-${img.mt}` : ""}`}
//                     >
//                       <img
//                         src={img.src}
//                         alt="Hotel"
//                         className="rounded-xl w-full h-auto shadow-lg object-cover"
//                         style={{ height: img.height || "auto" }}
//                       />
//                     </motion.div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


























/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import HotelIcon from "@mui/icons-material/Hotel";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
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
      <div className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
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
                <p className="text-gray-300 mb-4">
                  Great savings on hotels in Kigali, Rwanda online. Good
                  availability and great rates. Read hotel reviews and choose
                  the best hotel deal for your stay.
                </p>

                {showMore && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <p className="text-gray-300">
                      Our hotel offers world-class amenities including a spa,
                      fitness center, and multiple dining options. Located in
                      the heart of Kigali, we provide easy access to the city's
                      top attractions.
                    </p>
                    <p className="text-gray-300">
                      With over 10 years of experience in hospitality, our
                      dedicated staff ensures every guest receives exceptional
                      service throughout their stay.
                    </p>
                  </motion.div>
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
                      icon: <HotelIcon sx={{ fontSize: 40 }} />,
                      count: 1234,
                      label: "Rooms",
                      delay: 0,
                    },
                    {
                      icon: <EngineeringIcon sx={{ fontSize: 40 }} />,
                      count: 1234,
                      label: "Staff",
                      delay: 0.1,
                    },
                    {
                      icon: <PeopleAltIcon sx={{ fontSize: 40 }} />,
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
                        <div className="border border-gray-700 rounded-lg p-1 bg-gray-800/30 backdrop-blur-sm">
                          <div className="border border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                            <div className="text-blue-500 mb-4 flex justify-center">
                              {stat.icon}
                            </div>
                            <h4 className="text-2xl font-bold mb-2 text-white">
                              {stat.count.toLocaleString()}+
                            </h4>
                            <p className="text-gray-400">{stat.label}</p>
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
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  {showMore ? "Show Less" : "Explore More"}
                </button>
              </motion.div>
            </div>

            {/* Right Column - Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {images.map((img, index) => (
                  <motion.div
                    key={index}
                    custom={img.delay || index * 0.1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={zoomIn}
                    className={`relative ${
                      img.justify === "flex-start" ? "justify-self-start" : "justify-self-end"
                    } ${img.mt ? `mt-${img.mt}` : ""}`}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                      <img
                        src={img.src}
                        alt={`Hotel view ${index + 1}`}
                        className={`relative rounded-xl w-full h-auto object-cover shadow-xl group-hover:scale-105 transition-transform duration-300 ${
                          img.width === "80%" ? "w-4/5 mx-auto" : "w-full"
                        }`}
                        style={{ height: img.height || "auto" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import HotelIcon from "@mui/icons-material/Hotel";
// import EngineeringIcon from "@mui/icons-material/Engineering";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
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
//                   <span className="text-blue-600 uppercase">Luxury Hotel</span>
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
//                 <p className="text-gray-300 mb-4">
//                   Great savings on hotels in Kigali, Rwanda online. Good
//                   availability and great rates. Read hotel reviews and choose
//                   the best hotel deal for your stay.
//                 </p>

//                 {showMore && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="space-y-4"
//                   >
//                     <p className="text-gray-300">
//                       Our hotel offers world-class amenities including a spa,
//                       fitness center, and multiple dining options. Located in
//                       the heart of Kigali, we provide easy access to the city's
//                       top attractions.
//                     </p>
//                     <p className="text-gray-300">
//                       With over 10 years of experience in hospitality, our
//                       dedicated staff ensures every guest receives exceptional
//                       service throughout their stay.
//                     </p>
//                   </motion.div>
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
//                       icon: <HotelIcon sx={{ fontSize: 40 }} />,
//                       count: 1234,
//                       label: "Rooms",
//                       delay: 0,
//                     },
//                     {
//                       icon: <EngineeringIcon sx={{ fontSize: 40 }} />,
//                       count: 1234,
//                       label: "Staff",
//                       delay: 0.1,
//                     },
//                     {
//                       icon: <PeopleAltIcon sx={{ fontSize: 40 }} />,
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
//                         <div className="border border-gray-700 rounded-lg p-1 bg-gray-800/30 backdrop-blur-sm">
//                           <div className="border border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
//                             <div className="text-blue-500 mb-4 flex justify-center">
//                               {stat.icon}
//                             </div>
//                             <h4 className="text-2xl font-bold mb-2 text-white">
//                               {stat.count.toLocaleString()}+
//                             </h4>
//                             <p className="text-gray-400">{stat.label}</p>
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
//                 className="mt-8"
//               >
//                 <button
//                   onClick={toggleShowMore}
//                   className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
//                 >
//                   {showMore ? "Show Less" : "Explore More"}
//                 </button>
//               </motion.div>
//             </div>

//             {/* Right Column - Image Grid */}
//             <div className="relative">
//               <div className="grid grid-cols-2 gap-4">
//                 {images.map((img, index) => (
//                   <motion.div
//                     key={index}
//                     custom={img.delay || index * 0.1}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     variants={zoomIn}
//                     className={`relative ${
//                       img.justify === "flex-start" ? "justify-self-start" : "justify-self-end"
//                     } ${img.mt ? `mt-${img.mt}` : ""}`}
//                   >
//                     <div className="relative group">
//                       <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
//                       <img
//                         src={img.src}
//                         alt={`Hotel view ${index + 1}`}
//                         className={`relative rounded-xl w-full h-auto object-cover shadow-xl group-hover:scale-105 transition-transform duration-300 ${
//                           img.width === "80%" ? "w-4/5 mx-auto" : "w-full"
//                         }`}
//                         style={{ height: img.height || "auto" }}
//                       />
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
              
//               {/* Decorative Elements */}
//               <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl"></div>
//               <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };













/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HotelIcon from "@mui/icons-material/Hotel";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import StarIcon from "@mui/icons-material/Star";
import SpaIcon from "@mui/icons-material/Spa";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PoolIcon from "@mui/icons-material/Pool";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import WifiIcon from "@mui/icons-material/Wifi";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import { images } from "../../assets/data/data";

export const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [showLuxuryModal, setShowLuxuryModal] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const openLuxuryModal = () => {
    setShowLuxuryModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLuxuryModal = () => {
    setShowLuxuryModal(false);
    document.body.style.overflow = 'unset';
  };

  const openGalleryModal = (image) => {
    setSelectedImage(image);
    setShowGalleryModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGalleryModal = () => {
    setShowGalleryModal(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  // Prevent right-click/download on images
  const preventDownload = (e) => {
    e.preventDefault();
    return false;
  };

  const luxuryFeatures = [
    {
      icon: <SpaIcon sx={{ fontSize: 40 }} />,
      title: "World-Class Spa",
      description: "Indulge in rejuvenating treatments at our award-winning spa with expert therapists and premium products.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
      title: "Michelin-Star Dining",
      description: "Experience culinary excellence at our signature restaurants helmed by world-renowned chefs.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <PoolIcon sx={{ fontSize: 40 }} />,
      title: "Infinity Pools",
      description: "Swim in our stunning infinity pools with panoramic views of Kigali's skyline.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FitnessCenterIcon sx={{ fontSize: 40 }} />,
      title: "Premium Fitness",
      description: "Stay active in our state-of-the-art fitness center with personal trainers and wellness programs.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <RoomServiceIcon sx={{ fontSize: 40 }} />,
      title: "24/7 Butler Service",
      description: "Enjoy personalized attention with round-the-clock butler service for every need.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <LocalBarIcon sx={{ fontSize: 40 }} />,
      title: "Rooftop Lounge",
      description: "Sip craft cocktails at our exclusive rooftop bar with breathtaking city views.",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  const comparisonData = [
    {
      feature: "Room Size",
      standard: "250-300 sq ft",
      luxury: "500-1000+ sq ft",
      advantage: "luxury"
    },
    {
      feature: "Bedding",
      standard: "Standard linens",
      luxury: "Egyptian cotton, pillow menu",
      advantage: "luxury"
    },
    {
      feature: "View",
      standard: "City/Courtyard",
      luxury: "Panoramic/Skyline",
      advantage: "luxury"
    },
    {
      feature: "Check-in",
      standard: "Front desk",
      luxury: "Private butler, in-room",
      advantage: "luxury"
    },
    {
      feature: "Amenities",
      standard: "Basic toiletries",
      luxury: "Designer brands, spa products",
      advantage: "luxury"
    },
    {
      feature: "Dining",
      standard: "Standard restaurant",
      luxury: "Multiple fine-dining options",
      advantage: "luxury"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Executive",
      comment: "The attention to detail and personalized service at Luxury Hotel is unmatched. Every stay feels like a VIP experience.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      role: "Travel Blogger",
      comment: "From the moment you arrive, you're treated like royalty. The amenities and service set a new standard for luxury.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Emma Williams",
      role: "Wedding Planner",
      comment: "I've planned countless events here, and the team always exceeds expectations. Truly a world-class venue.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <div className="w-full mt-0 mb-1 rounded-2xl">
      <div className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -30, null],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Column - Text Content */}
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
              >
                <span className="text-blue-400 font-bold tracking-wider text-sm uppercase block mb-2">
                  Welcome to Excellence
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Luxury Hotel
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6"></div>
              </motion.div>

              <motion.div
                custom={0.2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="mt-8"
              >
                <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                  Experience unparalleled luxury in the heart of Kigali, Rwanda. 
                  Our hotel redefines excellence with world-class amenities, 
                  exceptional service, and breathtaking views.
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
                      Our award-winning spa, gourmet restaurants, and state-of-the-art 
                      fitness center ensure every moment of your stay is memorable. 
                      Located in Kigali's prestigious diplomatic district, we offer 
                      unparalleled access to the city's finest attractions.
                    </p>
                    <p className="text-gray-300">
                      With over 15 years of excellence in hospitality, our dedicated 
                      team of professionals ensures every guest receives white-glove 
                      service throughout their stay. We don't just meet expectations; 
                      we exceed them.
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
                      count: 150,
                      label: "Luxury Rooms",
                      delay: 0,
                    },
                    {
                      icon: <EngineeringIcon sx={{ fontSize: 40 }} />,
                      count: 200,
                      label: "Expert Staff",
                      delay: 0.1,
                    },
                    {
                      icon: <PeopleAltIcon sx={{ fontSize: 40 }} />,
                      count: 15000,
                      label: "Happy Clients",
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
                        <div className="group relative">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                          <div className="relative border border-gray-700 rounded-lg p-1 bg-gray-800/30 backdrop-blur-sm group-hover:bg-gray-800/50 transition-all duration-300">
                            <div className="border border-gray-600 rounded-lg p-6 text-center group-hover:border-transparent transition-all duration-300">
                              <div className="text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                              </div>
                              <h4 className="text-3xl font-bold mb-2 text-white">
                                {stat.count.toLocaleString()}+
                              </h4>
                              <p className="text-gray-400">{stat.label}</p>
                            </div>
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
                className="mt-8 flex gap-4"
              >
                <button
                  onClick={openLuxuryModal}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  Explore Luxury Experience
                </button>
                <button
                  onClick={toggleShowMore}
                  className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  {showMore ? "Show Less" : "Read More"}
                </button>
              </motion.div>
            </div>

            {/* Right Column - Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {images.slice(0, 4).map((img, index) => (
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
                    <div 
                      className="relative group cursor-pointer"
                      onClick={() => openGalleryModal(img)}
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={img.src}
                          alt={`Hotel view ${index + 1}`}
                          className={`relative rounded-xl w-full h-auto object-cover shadow-xl group-hover:scale-110 transition-transform duration-500 ${
                            img.width === "80%" ? "w-4/5 mx-auto" : "w-full"
                          }`}
                          style={{ height: img.height || "auto" }}
                          onContextMenu={preventDownload}
                          draggable="false"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                            Click to view
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl animate-pulse delay-700"></div>
            </div>
          </div>

          {/* Testimonials Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our <span className="text-blue-400">Guests Say</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  custom={index * 0.1}
                  variants={zoomIn}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      onContextMenu={preventDownload}
                      draggable="false"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.comment}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Luxury Experience Modal */}
      <AnimatePresence>
        {showLuxuryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto"
            onClick={closeLuxuryModal}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="min-h-screen flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl max-w-6xl w-full p-8 relative border border-gray-800">
                <button
                  onClick={closeLuxuryModal}
                  className="absolute top-4 right-4 bg-red-500/20 hover:bg-red-500/40 rounded-full p-2 transition-all group"
                >
                  <CloseIcon className="text-white group-hover:rotate-90 transition-transform duration-300" />
                </button>

                <h2 className="text-4xl font-bold text-center mb-8">
                  Why Choose <span className="text-blue-400">Luxury Hotel</span>
                </h2>

                {/* Comparison Table */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-6 text-center">Luxury vs Standard Hotels</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-blue-600 to-purple-600">
                          <th className="p-3 text-left rounded-tl-lg">Feature</th>
                          <th className="p-3 text-left">Standard Hotel</th>
                          <th className="p-3 text-left rounded-tr-lg">Luxury Hotel</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((item, index) => (
                          <tr key={index} className="border-b border-gray-700 hover:bg-white/5 transition-colors">
                            <td className="p-3 font-semibold">{item.feature}</td>
                            <td className="p-3 text-gray-400">{item.standard}</td>
                            <td className="p-3">
                              <span className="text-green-400 font-semibold">{item.luxury}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Luxury Features Grid */}
                <h3 className="text-2xl font-semibold mb-6 text-center">Exclusive Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {luxuryFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`}></div>
                      <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 group-hover:border-transparent transition-all duration-300">
                        <div className={`text-${feature.color.split(' ')[1]} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          {feature.icon}
                        </div>
                        <h4 className="text-xl font-semibold mb-2 text-white">{feature.title}</h4>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <button
                    onClick={closeLuxuryModal}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg text-lg"
                  >
                    Book Your Luxury Experience
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Modal */}
      <AnimatePresence>
        {showGalleryModal && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeGalleryModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeGalleryModal}
                className="absolute -top-12 right-0 bg-red-500/20 hover:bg-red-500/40 rounded-full p-2 transition-all group"
              >
                <CloseIcon className="text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>
              
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt="Gallery"
                  className="w-full h-auto rounded-xl shadow-2xl"
                  onContextMenu={preventDownload}
                  draggable="false"
                />
                
                {/* Watermark */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <VisibilityOffIcon className="text-white/70 text-sm" />
                  <span className="text-white/70 text-sm">Luxury Hotel • Private Collection</span>
                </div>
                
                {/* Anti-download overlay */}
                <div className="absolute inset-0 bg-transparent pointer-events-none select-none"></div>
              </div>
              
              <p className="text-center text-gray-400 mt-4 text-sm">
                This image is protected and cannot be downloaded
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
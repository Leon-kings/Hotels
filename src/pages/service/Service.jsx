// /* eslint-disable no-unused-vars */
// import React from "react";
// import { motion } from "framer-motion";
// import { services } from "../../assets/data/data";

// export default function Service() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <>
//       <div className="w-full py-12">
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="text-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h6 className="section-title text-center text-primary uppercase font-semibold text-lg">
//               Our Services
//             </h6>
//             <h1 className="text-4xl font-bold mb-5 mt-2">
//               Explore Our{" "}
//               <span className="text-primary uppercase">Services</span>
//             </h1>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="service-item rounded-lg p-6 bg-white  shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
//                 variants={itemVariants}
//                 custom={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ delay: service.delay }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="service-icon bg-transparent  mx-auto mb-4">
//                   <div className="w-full h-full  flex items-center justify-center">
//                     <img src={service.icon} className="w-full object-cover rounded-xl h-[180px]" title={service.title} alt="" />
//                   </div>
//                 </div>
//                 <h5 className="text-xl text-gray-900 font-semibold mb-3 text-center">
//                   {service.title}
//                 </h5>
//                 <p className="text-gray-600 text-center">
//                   {service.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// }

























// /* eslint-disable no-unused-vars */
// import React from "react";
// import { motion } from "framer-motion";
// import { services } from "../../assets/data/data";
// import RoomServiceIcon from '@mui/icons-material/RoomService';
// import SpaIcon from '@mui/icons-material/Spa';
// import RestaurantIcon from '@mui/icons-material/Restaurant';
// import PoolIcon from '@mui/icons-material/Pool';
// import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
// import LocalParkingIcon from '@mui/icons-material/LocalParking';
// import WifiIcon from '@mui/icons-material/Wifi';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';

// // Map of service titles to icons (optional - if you want to use MUI icons instead of image icons)
// const serviceIconMap = {
//   "Free WiFi": <WifiIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
//   "Swimming Pool": <PoolIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
//   "Spa & Wellness": <SpaIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
//   "Restaurant": <RestaurantIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
//   "Fitness Center": <FitnessCenterIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
//   "Free Parking": <LocalParkingIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
//   "Room Service": <RoomServiceIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
//   "Air Conditioning": <AcUnitIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
//   "Laundry Service": <LocalLaundryServiceIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
// };

// export default function Service() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <>
//       <div className="w-full py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="text-center mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <motion.span 
//               className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//             >
//               Our Services
//             </motion.span>
            
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 mt-2 text-gray-900">
//               Explore Our{" "}
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Premium Services
//               </span>
//             </h1>
            
//             <motion.p 
//               className="text-gray-600 max-w-2xl mx-auto"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//             >
//               Experience luxury and comfort with our wide range of amenities designed to make your stay unforgettable
//             </motion.p>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
//                 variants={itemVariants}
//                 custom={index}
//                 whileHover={{ y: -8 }}
//               >
//                 {/* Gradient Overlay on Hover */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                
//                 {/* Image Container */}
//                 <div className="relative overflow-hidden h-64">
//                   <motion.img
//                     src={service.icon}
//                     alt={service.title}
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                     whileHover={{ scale: 1.1 }}
//                   />
                  
//                   {/* Icon Overlay - Optional: Use MUI icon instead of image */}
//                   {serviceIconMap[service.title] && (
//                     <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-full shadow-lg z-20">
//                       {serviceIconMap[service.title]}
//                     </div>
//                   )}
                  
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
//                   {/* Title on Image */}
//                   <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white z-20">
//                     {service.title}
//                   </h3>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 relative z-20">
//                   <p className="text-gray-600 leading-relaxed">
//                     {service.description}
//                   </p>
                  
//                   {/* Learn More Link */}
//                   <motion.a
//                     href="#"
//                     className="inline-flex items-center mt-4 text-blue-600 dark:text-blue-400 font-medium group/link"
//                     whileHover={{ x: 5 }}
//                   >
//                     Learn More
//                     <svg 
//                       className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" 
//                       fill="none" 
//                       stroke="currentColor" 
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </motion.a>
//                 </div>

//                 {/* Decorative Corner */}
//                 <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Stats Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//             className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
//           >
//             {[
//               { label: "Happy Guests", value: "5000+", icon: "😊" },
//               { label: "Rooms", value: "150+", icon: "🏨" },
//               { label: "Staff Members", value: "200+", icon: "👥" },
//               { label: "Years Experience", value: "10+", icon: "⭐" },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700"
//               >
//                 <div className="text-3xl mb-2">{stat.icon}</div>
//                 <h4 className="text-2xl font-bold text-gray-900">{stat.value}</h4>
//                 <p className="text-gray-600">{stat.label}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// }






















// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { services } from "../../assets/data/data";
// import RoomServiceIcon from '@mui/icons-material/RoomService';
// import SpaIcon from '@mui/icons-material/Spa';
// import RestaurantIcon from '@mui/icons-material/Restaurant';
// import PoolIcon from '@mui/icons-material/Pool';
// import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
// import LocalParkingIcon from '@mui/icons-material/LocalParking';
// import WifiIcon from '@mui/icons-material/Wifi';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
// import CloseIcon from '@mui/icons-material/Close';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import InfoIcon from '@mui/icons-material/Info';

// // Map of service titles to icons
// const serviceIconMap = {
//   "Free WiFi": <WifiIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
//   "Swimming Pool": <PoolIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
//   "Spa & Wellness": <SpaIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
//   "Restaurant": <RestaurantIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
//   "Fitness Center": <FitnessCenterIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
//   "Free Parking": <LocalParkingIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
//   "Room Service": <RoomServiceIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
//   "Air Conditioning": <AcUnitIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
//   "Laundry Service": <LocalLaundryServiceIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
// };

// // Additional service details for modal content
// const serviceDetails = {
//   "Free WiFi": {
//     fullDescription: "Experience high-speed internet connectivity throughout the hotel. Our enterprise-grade WiFi network ensures seamless streaming, video conferencing, and browsing for all your needs.",
//     features: ["Up to 100 Mbps speed", "Secure connection", "Multiple device support", "24/7 technical support"],
//     availability: "24/7 in all rooms and public areas",
//     price: "Complimentary for all guests"
//   },
//   "Swimming Pool": {
//     fullDescription: "Take a refreshing dip in our temperature-controlled outdoor swimming pool. Surrounded by lush gardens and comfortable loungers, it's the perfect spot to relax and unwind.",
//     features: ["Heated pool", "Poolside bar", "Towels provided", "Lifeguard on duty"],
//     availability: "6:00 AM - 10:00 PM daily",
//     price: "Free for hotel guests"
//   },
//   "Spa & Wellness": {
//     fullDescription: "Rejuvenate your senses at our luxury spa. From traditional massages to modern beauty treatments, our expert therapists provide personalized wellness experiences.",
//     features: ["Massage therapy", "Facial treatments", "Sauna & steam room", "Beauty salon"],
//     availability: "9:00 AM - 9:00 PM (Appointment required)",
//     price: "Starting from $50"
//   },
//   "Restaurant": {
//     fullDescription: "Indulge in culinary excellence at our signature restaurant. Our master chefs prepare exquisite dishes using the finest local and international ingredients.",
//     features: ["Breakfast buffet", "À la carte dining", "Private dining room", "Wine cellar"],
//     availability: "Breakfast: 6:30-10:30, Lunch: 12:30-15:00, Dinner: 18:30-22:30",
//     price: "Pay-per-meal or meal plans available"
//   },
//   "Fitness Center": {
//     fullDescription: "Maintain your fitness routine in our state-of-the-art gym. Equipped with modern cardio and strength training equipment, it's designed for all fitness levels.",
//     features: ["Cardio machines", "Free weights", "Yoga mats", "Personal trainer available"],
//     availability: "Open 24/7 with key card access",
//     price: "Free for all guests"
//   },
//   "Free Parking": {
//     fullDescription: "Enjoy complimentary parking in our secure, covered parking facility. With 24/7 surveillance and valet service, your vehicle is in safe hands.",
//     features: ["Covered parking", "24/7 security", "EV charging stations", "Valet service"],
//     availability: "24/7 access",
//     price: "Free for hotel guests"
//   },
//   "Room Service": {
//     fullDescription: "Enjoy delicious meals in the comfort of your room. Our extensive room service menu offers a wide variety of dishes, available around the clock.",
//     features: ["24-hour service", "Full menu available", "Special dietary requests", "Complimentary delivery"],
//     availability: "24/7",
//     price: "Menu prices apply + service charge"
//   },
//   "Air Conditioning": {
//     fullDescription: "All our rooms feature individually controlled air conditioning systems, allowing you to set your preferred temperature for maximum comfort.",
//     features: ["Individual temperature control", "Quiet operation", "Energy efficient", "Regular maintenance"],
//     availability: "24/7 in all rooms",
//     price: "Included in room rate"
//   },
//   "Laundry Service": {
//     fullDescription: "Keep your wardrobe fresh with our professional laundry and dry cleaning services. Quick turnaround and careful handling of all garments.",
//     features: ["Same-day service", "Dry cleaning", "Ironing service", "Garment repair"],
//     availability: "8:00 AM - 8:00 PM",
//     price: "Additional charges apply"
//   }
// };

// export default function Service() {
//   const [selectedService, setSelectedService] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 20 },
//     visible: { 
//       opacity: 1, 
//       scale: 1, 
//       y: 0,
//       transition: {
//         type: "spring",
//         damping: 25,
//         stiffness: 300
//       }
//     },
//     exit: { opacity: 0, scale: 0.8, y: 20 }
//   };

//   const overlayVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//     exit: { opacity: 0 }
//   };

//   const handleOpenModal = (service) => {
//     setSelectedService(service);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setTimeout(() => setSelectedService(null), 300);
//   };

//   return (
//     <>
//       <div className="w-full py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             className="text-center mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
      
            
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 mt-2 text-white">
//               Explore Our{" "}
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Premium Services
//               </span>
//             </h1>
            
//             <motion.p 
//               className="text-white max-w-2xl mx-auto"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//             >
//               Experience luxury and comfort with our wide range of amenities designed to make your stay unforgettable
//             </motion.p>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
//                 variants={itemVariants}
//                 custom={index}
//                 whileHover={{ y: -8 }}
//               >
//                 {/* Gradient Overlay on Hover */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                
//                 {/* Image Container */}
//                 <div className="relative overflow-hidden h-64">
//                   <motion.img
//                     src={service.icon}
//                     alt={service.title}
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                     whileHover={{ scale: 1.1 }}
//                   />
                  
//                   {/* Icon Overlay */}
//                   {serviceIconMap[service.title] && (
//                     <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-full shadow-lg z-20">
//                       {serviceIconMap[service.title]}
//                     </div>
//                   )}
                  
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
//                   {/* Title on Image */}
//                   <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white z-20">
//                     {service.title}
//                   </h3>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 relative z-20">
//                   <p className="text-gray-600 leading-relaxed line-clamp-3">
//                     {service.description}
//                   </p>
                  
//                   {/* Learn More Button */}
//                   <motion.button
//                     onClick={() => handleOpenModal(service)}
//                     className="inline-flex items-center mt-4 bg-gradient-to-t from-blue-500 to-indigo-700 font-medium group/link bg-transparent border-none cursor-pointer"
//                     whileHover={{ x: 5 }}
//                   >
//                     Read More
//                     <svg 
//                       className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" 
//                       fill="none" 
//                       stroke="currentColor" 
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </motion.button>
//                 </div>

//                 {/* Decorative Corner */}
//                 <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Stats Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//             className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
//           >
//             {[
//               { label: "Happy Guests", value: "5000+", icon: "😊" },
//               { label: "Rooms", value: "150+", icon: "🏨" },
//               { label: "Staff Members", value: "200+", icon: "👥" },
//               { label: "Years Experience", value: "10+", icon: "⭐" },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700"
//               >
//                 <div className="text-3xl mb-2">{stat.icon}</div>
//                 <h4 className="text-2xl font-bold text-gray-900">{stat.value}</h4>
//                 <p className="text-gray-600">{stat.label}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Service Detail Modal */}
//       <AnimatePresence>
//         {modalOpen && selectedService && (
//           <motion.div
//             variants={overlayVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
//             onClick={handleCloseModal}
//           >
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={handleCloseModal}
//                 className="absolute top-4 right-4 z-10 bg-gradient-to-t from-red-500 to-red-700 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//               >
//                 <CloseIcon className="text-white" />
//               </button>

//               {/* Modal Header Image */}
//               <div className="relative h-72 overflow-hidden rounded-t-2xl">
//                 <img
//                   src={selectedService.icon}
//                   alt=''
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
//                 {/* Service Icon */}
//                 <div className="absolute bottom-6 left-6 flex items-center gap-4">
//                   <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-xl">
//                     {serviceIconMap[selectedService.title] || 
//                       <InfoIcon className="text-white"/>
//                     }
//                   </div>
//                   <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
//                 </div>
//               </div>

//               {/* Modal Content */}
//               <div className="p-8">
//                 {/* Full Description */}
//                 <div className="mb-8">
//                   <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
//                     <InfoIcon className="text-blue-600" />
//                     About This Service
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     {serviceDetails[selectedService.title]?.fullDescription || selectedService.description}
//                   </p>
//                 </div>

//                 {/* Key Features */}
//                 {serviceDetails[selectedService.title]?.features && (
//                   <div className="mb-8">
//                     <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
//                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                       {serviceDetails[selectedService.title].features.map((feature, index) => (
//                         <motion.li
//                           key={index}
//                           initial={{ opacity: 0, x: -20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: index * 0.1 }}
//                           className="flex items-center gap-2 text-gray-600"
//                         >
//                           <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                           </svg>
//                           {feature}
//                         </motion.li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {/* Availability & Pricing */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
//                   {serviceDetails[selectedService.title]?.availability && (
//                     <div className="flex items-start gap-3">
//                       <AccessTimeIcon className="text-blue-600 mt-1" />
//                       <div>
//                         <h4 className="font-semibold text-gray-900">Availability</h4>
//                         <p className="text-gray-600 text-sm">
//                           {serviceDetails[selectedService.title].availability}
//                         </p>
//                       </div>
//                     </div>
//                   )}
                  
//                   {serviceDetails[selectedService.title]?.price && (
//                     <div className="flex items-start gap-3">
//                       <AttachMoneyIcon className="text-green-600 mt-1" />
//                       <div>
//                         <h4 className="font-semibold text-gray-900">Price</h4>
//                         <p className="text-gray-600 text-sm">
//                           {serviceDetails[selectedService.title].price}
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-4 mt-8">
//                   <button
//                     onClick={handleCloseModal}
//                     className="flex-1 px-6 py-3 border-2 bg-gradient-to-t from-red-400 to-red-500 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-medium shadow-lg"
//                   >
//                     Book This Service
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }




















/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../../assets/data/data";
import axios from "axios";
import RoomServiceIcon from '@mui/icons-material/RoomService';
import SpaIcon from '@mui/icons-material/Spa';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import CloseIcon from '@mui/icons-material/Close';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoIcon from '@mui/icons-material/Info';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

// Map of service titles to icons
const serviceIconMap = {
  "Free WiFi": <WifiIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
  "Swimming Pool": <PoolIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
  "Spa & Wellness": <SpaIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
  "Restaurant": <RestaurantIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
  "Fitness Center": <FitnessCenterIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
  "Free Parking": <LocalParkingIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
  "Room Service": <RoomServiceIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
  "Air Conditioning": <AcUnitIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
  "Laundry Service": <LocalLaundryServiceIcon className="text-blue-500" sx={{ fontSize: 40 }} />,
};

// Additional service details for modal content
const serviceDetails = {
  "Free WiFi": {
    fullDescription: "Experience high-speed internet connectivity throughout the hotel. Our enterprise-grade WiFi network ensures seamless streaming, video conferencing, and browsing for all your needs.",
    features: ["Up to 100 Mbps speed", "Secure connection", "Multiple device support", "24/7 technical support"],
    availability: "24/7 in all rooms and public areas",
    price: "Complimentary for all guests"
  },
  "Swimming Pool": {
    fullDescription: "Take a refreshing dip in our temperature-controlled outdoor swimming pool. Surrounded by lush gardens and comfortable loungers, it's the perfect spot to relax and unwind.",
    features: ["Heated pool", "Poolside bar", "Towels provided", "Lifeguard on duty"],
    availability: "6:00 AM - 10:00 PM daily",
    price: "Free for hotel guests"
  },
  "Spa & Wellness": {
    fullDescription: "Rejuvenate your senses at our luxury spa. From traditional massages to modern beauty treatments, our expert therapists provide personalized wellness experiences.",
    features: ["Massage therapy", "Facial treatments", "Sauna & steam room", "Beauty salon"],
    availability: "9:00 AM - 9:00 PM (Appointment required)",
    price: "Starting from $50"
  },
  "Restaurant": {
    fullDescription: "Indulge in culinary excellence at our signature restaurant. Our master chefs prepare exquisite dishes using the finest local and international ingredients.",
    features: ["Breakfast buffet", "À la carte dining", "Private dining room", "Wine cellar"],
    availability: "Breakfast: 6:30-10:30, Lunch: 12:30-15:00, Dinner: 18:30-22:30",
    price: "Pay-per-meal or meal plans available"
  },
  "Fitness Center": {
    fullDescription: "Maintain your fitness routine in our state-of-the-art gym. Equipped with modern cardio and strength training equipment, it's designed for all fitness levels.",
    features: ["Cardio machines", "Free weights", "Yoga mats", "Personal trainer available"],
    availability: "Open 24/7 with key card access",
    price: "Free for all guests"
  },
  "Free Parking": {
    fullDescription: "Enjoy complimentary parking in our secure, covered parking facility. With 24/7 surveillance and valet service, your vehicle is in safe hands.",
    features: ["Covered parking", "24/7 security", "EV charging stations", "Valet service"],
    availability: "24/7 access",
    price: "Free for hotel guests"
  },
  "Room Service": {
    fullDescription: "Enjoy delicious meals in the comfort of your room. Our extensive room service menu offers a wide variety of dishes, available around the clock.",
    features: ["24-hour service", "Full menu available", "Special dietary requests", "Complimentary delivery"],
    availability: "24/7",
    price: "Menu prices apply + service charge"
  },
  "Air Conditioning": {
    fullDescription: "All our rooms feature individually controlled air conditioning systems, allowing you to set your preferred temperature for maximum comfort.",
    features: ["Individual temperature control", "Quiet operation", "Energy efficient", "Regular maintenance"],
    availability: "24/7 in all rooms",
    price: "Included in room rate"
  },
  "Laundry Service": {
    fullDescription: "Keep your wardrobe fresh with our professional laundry and dry cleaning services. Quick turnaround and careful handling of all garments.",
    features: ["Same-day service", "Dry cleaning", "Ironing service", "Garment repair"],
    availability: "8:00 AM - 8:00 PM",
    price: "Additional charges apply"
  }
};

// Room types for booking
const roomTypes = [
  { value: "standard", label: "Standard Room", price: "$99/night", icon: "🛏️" },
  { value: "deluxe", label: "Deluxe Room", price: "$159/night", icon: "✨" },
  { value: "suite", label: "Suite", price: "$249/night", icon: "🏛️" },
  { value: "executive", label: "Executive Suite", price: "$399/night", icon: "👔" },
  { value: "presidential", label: "Presidential Suite", price: "$599/night", icon: "👑" },
];

export default function Service() {
  const [selectedService, setSelectedService] = useState(null);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  
  // Booking modal states
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingFormData, setBookingFormData] = useState({
    checkInDate: "",
    checkOutDate: "",
    adults: "",
    name: "",
    email: "",
    children: "",
    roomType: "",
  });
  const [bookingErrors, setBookingErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionModalOpen, setSubmissionModalOpen] = useState(false);
  const [submissionType, setSubmissionType] = useState('success');
  const [submissionMessage, setSubmissionMessage] = useState('');

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { opacity: 0, scale: 0.8, y: 20 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  // Service modal handlers
  const handleOpenServiceModal = (service) => {
    setSelectedService(service);
    setServiceModalOpen(true);
  };

  const handleCloseServiceModal = () => {
    setServiceModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  // Booking modal handlers
  const handleOpenBookingModal = () => {
    setBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setBookingModalOpen(false);
    setBookingErrors({});
  };

  // Booking form handlers
  const validateBookingForm = () => {
    const newErrors = {};

    if (!bookingFormData.checkInDate) {
      newErrors.checkInDate = "Check-in date is required";
    }

    if (!bookingFormData.checkOutDate) {
      newErrors.checkOutDate = "Check-out date is required";
    } else if (
      bookingFormData.checkInDate &&
      new Date(bookingFormData.checkOutDate) < new Date(bookingFormData.checkInDate)
    ) {
      newErrors.checkOutDate = "Check-out must be after check-in";
    }

    if (!bookingFormData.name) {
      newErrors.name = "Name is required";
    }

    if (!bookingFormData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(bookingFormData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!bookingFormData.adults || bookingFormData.adults < 1) {
      newErrors.adults = "At least one adult is required";
    }

    setBookingErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when field is changed
    if (bookingErrors[name]) {
      setBookingErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!validateBookingForm()) return;
    
    setIsSubmitting(true);
    try {
      const results = await axios.post(
        "https://hotel-nodejs-oa32.onrender.com/84383/92823",
        bookingFormData
      );
      
      if (results.data && results.data.success) {
        setSubmissionType('success');
        setSubmissionMessage('Booking confirmed! A confirmation email has been sent to your inbox.');
        setSubmissionModalOpen(true);
        handleCloseBookingModal();
        
        // Reset form after successful submission
        setBookingFormData({
          checkInDate: "",
          checkOutDate: "",
          adults: "",
          name: "",
          email: "",
          children: "",
          roomType: "",
        });
      } else {
        setSubmissionType('error');
        setSubmissionMessage('Server error! Please try again later or contact support.');
        setSubmissionModalOpen(true);
      }
    } catch (error) {
      setSubmissionType('error');
      setSubmissionMessage('Submission error. Please check your connection and try again.');
      setSubmissionModalOpen(true);
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate number of nights
  const calculateNights = () => {
    if (bookingFormData.checkInDate && bookingFormData.checkOutDate) {
      const start = new Date(bookingFormData.checkInDate);
      const end = new Date(bookingFormData.checkOutDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  // Find selected room details
  const selectedRoom = roomTypes.find(room => room.value === bookingFormData.roomType);

  return (
    <>
      <div className="w-full py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          {/* Header with Booking CTA */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 mt-2 text-white">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Premium Services
              </span>
            </h1>
            
            <motion.p 
              className="text-white max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Experience luxury and comfort with our wide range of amenities designed to make your stay unforgettable
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -8 }}
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                
                {/* Image Container */}
                <div className="relative overflow-hidden h-64">
                  <motion.img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Icon Overlay */}
                  {serviceIconMap[service.title] && (
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-full shadow-lg z-20">
                      {serviceIconMap[service.title]}
                    </div>
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Title on Image */}
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white z-20">
                    {service.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 relative z-20">
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* Learn More Button */}
                  <motion.button
                    onClick={() => handleOpenServiceModal(service)}
                    className="inline-flex items-center mt-4 bg-gradient-to-t from-blue-400 to-indigo-400 font-medium group/link bg-transparent border-none cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <svg 
                      className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Happy Guests", value: "5000+", icon: "😊" },
              { label: "Rooms", value: "150+", icon: "🏨" },
              { label: "Staff Members", value: "200+", icon: "👥" },
              { label: "Years Experience", value: "10+", icon: "⭐" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900">{stat.value}</h4>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Booking CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready for an Unforgettable Experience?
              </h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Book your stay now and enjoy exclusive access to all our premium services
              </p>
              <motion.button
                onClick={handleOpenBookingModal}
                className="px-8 py-3 bg-gradient-to-t from-blue-400 to-indigo-400 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Stay
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {serviceModalOpen && selectedService && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={handleCloseServiceModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseServiceModal}
                className="absolute top-4 right-4 z-10 bg-gradient-to-t from-red-500 to-red-700 backdrop-blur-sm rounded-full p-2 shadow-lg transition-colors"
              >
                <CloseIcon className="text-white" />
              </button>

              {/* Modal Header Image */}
              <div className="relative h-72 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedService.icon}
                  alt=''
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Service Icon */}
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-xl">
                    {serviceIconMap[selectedService.title] || 
                      <InfoIcon className="text-white" />
                    }
                  </div>
                  <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Full Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <InfoIcon className="text-blue-600" />
                    About This Service
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {serviceDetails[selectedService.title]?.fullDescription || selectedService.description}
                  </p>
                </div>

                {/* Key Features */}
                {serviceDetails[selectedService.title]?.features && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serviceDetails[selectedService.title].features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Availability & Pricing */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
                  {serviceDetails[selectedService.title]?.availability && (
                    <div className="flex items-start gap-3">
                      <AccessTimeIcon className="text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Availability</h4>
                        <p className="text-gray-600 text-sm">
                          {serviceDetails[selectedService.title].availability}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {serviceDetails[selectedService.title]?.price && (
                    <div className="flex items-start gap-3">
                      <AttachMoneyIcon className="text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Price</h4>
                        <p className="text-gray-600 text-sm">
                          {serviceDetails[selectedService.title].price}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button
                    onClick={handleCloseServiceModal}
                    className="flex-1 px-6 py-3 border-2 bg-gradient-to-t from-red-400 to-red-500 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium text-gray-700 dark:text-gray-300"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      handleCloseServiceModal();
                      handleOpenBookingModal();
                    }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-medium shadow-lg"
                  >
                    Book Your Stay
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <AnimatePresence>
        {bookingModalOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={handleCloseBookingModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseBookingModal}
                className="absolute top-4 right-4 z-10 bg-gradient-to-t from-red-500 to-red-700 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <CloseIcon className="text-white" />
              </button>

              {/* Modal Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <MeetingRoomIcon />
                  Book Your Perfect Stay
                </h2>
                <p className="text-white/80 mt-2">
                  Fill in your details to reserve a room
                </p>
              </div>

              {/* Modal Body */}
              <form onSubmit={handleBookingSubmit} className="p-8 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Form Fields */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Date Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                          <CalendarTodayIcon className="text-blue-600 mr-2" fontSize="small" />
                          Check-in Date
                        </label>
                        <input
                          type="date"
                          name="checkInDate"
                          value={bookingFormData.checkInDate}
                          onChange={handleBookingChange}
                          min={new Date().toISOString().split("T")[0]}
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${
                            bookingErrors.checkInDate 
                              ? 'border-red-500' 
                              : 'border-gray-300 dark:border-gray-600'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all`}
                        />
                        {bookingErrors.checkInDate && (
                          <p className="mt-1 text-sm text-red-500">{bookingErrors.checkInDate}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                          <CalendarTodayIcon className="text-blue-600 mr-2" fontSize="small" />
                          Check-out Date
                        </label>
                        <input
                          type="date"
                          name="checkOutDate"
                          value={bookingFormData.checkOutDate}
                          onChange={handleBookingChange}
                          min={bookingFormData.checkInDate || new Date().toISOString().split("T")[0]}
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${
                            bookingErrors.checkOutDate 
                              ? 'border-red-500' 
                              : 'border-gray-300 dark:border-gray-600'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all`}
                        />
                        {bookingErrors.checkOutDate && (
                          <p className="mt-1 text-sm text-red-500">{bookingErrors.checkOutDate}</p>
                        )}
                      </div>
                    </div>

                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                          <PersonIcon className="text-blue-600 mr-2" fontSize="small" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={bookingFormData.name}
                          onChange={handleBookingChange}
                          placeholder="John Doe"
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${
                            bookingErrors.name 
                              ? 'border-red-500' 
                              : 'border-gray-300 dark:border-gray-600'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all`}
                        />
                        {bookingErrors.name && (
                          <p className="mt-1 text-sm text-red-500">{bookingErrors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                          <EmailIcon className="text-blue-600 mr-2" fontSize="small" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={bookingFormData.email}
                          onChange={handleBookingChange}
                          placeholder="john@example.com"
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${
                            bookingErrors.email 
                              ? 'border-red-500' 
                              : 'border-gray-300 dark:border-gray-600'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all`}
                        />
                        {bookingErrors.email && (
                          <p className="mt-1 text-sm text-red-500">{bookingErrors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Guests and Room Type */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                          <PeopleIcon className="text-blue-600 mr-2" fontSize="small" />
                          Adults
                        </label>
                        <select
                          name="adults"
                          value={bookingFormData.adults}
                          onChange={handleBookingChange}
                          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${
                            bookingErrors.adults 
                              ? 'border-red-500' 
                              : 'border-gray-300 dark:border-gray-600'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all`}
                        >
                          <option value="">Select</option>
                          {[1, 2, 3, 4, 5].map((num) => (
                            <option key={`adult-${num}`} value={num}>
                              {num} {num === 1 ? "Adult" : "Adults"}
                            </option>
                          ))}
                        </select>
                        {bookingErrors.adults && (
                          <p className="mt-1 text-sm text-red-500">{bookingErrors.adults}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                          <ChildCareIcon className="text-blue-600 mr-2" fontSize="small" />
                          Children
                        </label>
                        <select
                          name="children"
                          value={bookingFormData.children}
                          onChange={handleBookingChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all"
                        >
                          <option value="">Select</option>
                          {[0, 1, 2, 3, 4].map((num) => (
                            <option key={`child-${num}`} value={num}>
                              {num} {num === 1 ? "Child" : "Children"}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                          <MeetingRoomIcon className="text-blue-600 mr-2" fontSize="small" />
                          Room Type
                        </label>
                        <select
                          name="roomType"
                          value={bookingFormData.roomType}
                          onChange={handleBookingChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all"
                        >
                          <option value="">Select room type</option>
                          {roomTypes.map((room) => (
                            <option key={room.value} value={room.value}>
                              {room.icon} {room.label} - {room.price}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Booking Summary */}
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 sticky top-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Booking Summary
                      </h3>
                      
                      <div className="space-y-3 text-sm">
                        {bookingFormData.checkInDate && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Check-in:</span>
                            <span className="font-medium text-gray-900">
                              {new Date(bookingFormData.checkInDate).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                        
                        {bookingFormData.checkOutDate && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Check-out:</span>
                            <span className="font-medium text-gray-900">
                              {new Date(bookingFormData.checkOutDate).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                        
                        {calculateNights() > 0 && (
                          <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-2">
                            <span className="text-gray-600">Nights:</span>
                            <span className="font-medium text-gray-900">
                              {calculateNights()} {calculateNights() === 1 ? 'night' : 'nights'}
                            </span>
                          </div>
                        )}
                        
                        {selectedRoom && (
                          <>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Room type:</span>
                              <span className="font-medium text-gray-900">
                                {selectedRoom.icon} {selectedRoom.label}
                              </span>
                            </div>
                            
                            <div className="flex justify-between">
                              <span className="text-gray-600">Price per night:</span>
                              <span className="font-medium text-gray-900">
                                {selectedRoom.price}
                              </span>
                            </div>
                          </>
                        )}
                        
                        {bookingFormData.adults && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Guests:</span>
                            <span className="font-medium text-gray-900">
                              {bookingFormData.adults} Adult{bookingFormData.adults != 1 ? 's' : ''}
                              {bookingFormData.children > 0 && `, ${bookingFormData.children} Child${bookingFormData.children != 1 ? 'ren' : ''}`}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {selectedRoom && calculateNights() > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-semibold">Total:</span>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              ${parseInt(selectedRoom.price.replace(/[^0-9]/g, '')) * calculateNights()}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button
                    type="button"
                    onClick={handleCloseBookingModal}
                    className="flex-1 px-6 py-3 border-2 bg-gradient-to-t from-red-400 to-red-500 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed font-medium shadow-lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      "Confirm Booking"
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submission Result Modal */}
      <AnimatePresence>
        {submissionModalOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setSubmissionModalOpen(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`p-6 text-center ${
                submissionType === 'success' 
                  ? 'bg-gradient-to-r from-green-500 to-green-600' 
                  : 'bg-gradient-to-r from-red-500 to-red-600'
              }`}>
                {submissionType === 'success' ? (
                  <CheckCircleIcon className="text-white" sx={{ fontSize: 64 }} />
                ) : (
                  <ErrorIcon className="text-white" sx={{ fontSize: 64 }} />
                )}
              </div>
              
              {/* Modal Body */}
              <div className="p-8 text-center">
                <h3 className={`text-2xl font-bold mb-4 ${
                  submissionType === 'success' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {submissionType === 'success' ? 'Booking Confirmed!' : 'Booking Failed!'}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {submissionMessage}
                </p>

                {submissionType === 'success' && (
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-600">
                      A confirmation email has been sent to {bookingFormData.email}
                    </p>
                  </div>
                )}

                <button
                  onClick={() => setSubmissionModalOpen(false)}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
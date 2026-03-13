
// import React, { useState, useEffect } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // ==================== CAROUSEL DATA ====================
// const carouselItems = [
//   {
//     imgSrc:
//       "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     subtitle: "Luxury Redefined",
//     title: "Experience Ultimate Comfort & Elegance",
//     buttons: [
//       { text: "Our Rooms", href: "#", variant: "primary", action: "rooms" },
//       { text: "Book Now", href: "#", variant: "outline", action: "book" },
//     ],
//   },
//   {
//     imgSrc:
//       "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     subtitle: "5-Star Service",
//     title: "Where Every Moment Feels Special",
//     buttons: [
//       { text: "Our Rooms", href: "#", variant: "primary", action: "rooms" },
//       { text: "Book Now", href: "#", variant: "outline", action: "book" },
//     ],
//   },
//   {
//     imgSrc:
//       "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     subtitle: "Exclusive Offers",
//     title: "Book Now & Get 20% Off Your Stay",
//     buttons: [
//       { text: "Our Rooms", href: "#", variant: "primary", action: "rooms" },
//       { text: "Book Now", href: "#", variant: "outline", action: "book" },
//     ],
//   },
// ];

// // ==================== ROOM DATA ====================
// const rooms = [
//   {
//     id: 1,
//     name: "Deluxe King Room",
//     price: 199,
//     image:
//       "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 1,
//     baths: 1,
//     description:
//       "Spacious room with king-sized bed, luxury amenities, and city view.",
//     size: 350,
//     rating: 5,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning"],
//   },
//   {
//     id: 2,
//     name: "Executive Suite",
//     price: 299,
//     image:
//       "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 2,
//     baths: 2,
//     description:
//       "Luxurious suite with separate living area, perfect for business travelers.",
//     size: 550,
//     rating: 5,
//     amenities: [
//       "Free WiFi",
//       "Breakfast",
//       "Mini Bar",
//       "Air Conditioning",
//       "Work Desk",
//     ],
//   },
//   {
//     id: 3,
//     name: "Family Room",
//     price: 249,
//     image:
//       "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
//     beds: 3,
//     baths: 2,
//     description: "Perfect for families with multiple beds and ample space.",
//     size: 450,
//     rating: 5,
//     amenities: [
//       "Free WiFi",
//       "Breakfast",
//       "Mini Bar",
//       "Air Conditioning",
//       "Kids Area",
//     ],
//   },
//   {
//     id: 4,
//     name: "Presidential Suite",
//     price: 599,
//     image:
//       "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 3,
//     baths: 3,
//     description:
//       "The ultimate luxury experience with panoramic views and private butler service.",
//     size: 1200,
//     rating: 5,
//     amenities: [
//       "Free WiFi",
//       "Breakfast",
//       "Mini Bar",
//       "Air Conditioning",
//       "Butler Service",
//     ],
//   },
//   {
//     id: 5,
//     name: "Garden View Room",
//     price: 179,
//     image:
//       "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 1,
//     baths: 1,
//     description: "Peaceful room overlooking our beautiful gardens.",
//     size: 300,
//     rating: 4,
//     amenities: [
//       "Free WiFi",
//       "Breakfast",
//       "Mini Bar",
//       "Air Conditioning",
//       "Garden View",
//     ],
//   },
//   {
//     id: 6,
//     name: "Penthouse Suite",
//     price: 799,
//     image:
//       "https://images.unsplash.com/photo-1598928501498-c04a8833f51e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 4,
//     baths: 4,
//     description: "Top-floor luxury with private terrace and jacuzzi.",
//     size: 1500,
//     rating: 5,
//     amenities: [
//       "Free WiFi",
//       "Breakfast",
//       "Mini Bar",
//       "Air Conditioning",
//       "Jacuzzi",
//     ],
//   },
// ];

// // ==================== STATUS MODAL ====================
// const StatusModal = ({ open, onClose, type, message, details }) => {
//   const getIcon = () => {
//     switch (type) {
//       case "success":
//         return (
//           <svg
//             className="w-16 h-16 text-green-500"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//         );
//       case "error":
//         return (
//           <svg
//             className="w-16 h-16 text-red-500"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//         );
//       case "warning":
//         return (
//           <svg
//             className="w-16 h-16 text-yellow-500"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
//             />
//           </svg>
//         );
//       default:
//         return (
//           <svg
//             className="w-16 h-16 text-blue-500"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//         );
//     }
//   };

//   const getTitle = () => {
//     switch (type) {
//       case "success":
//         return "Success!";
//       case "error":
//         return "Error!";
//       case "warning":
//         return "Warning!";
//       default:
//         return "Information";
//     }
//   };

//   const getColor = () => {
//     switch (type) {
//       case "success":
//         return "text-green-600";
//       case "error":
//         return "text-red-600";
//       case "warning":
//         return "text-yellow-600";
//       default:
//         return "text-blue-600";
//     }
//   };

//   const getBgColor = () => {
//     switch (type) {
//       case "success":
//         return "bg-green-50";
//       case "error":
//         return "bg-red-50";
//       case "warning":
//         return "bg-yellow-50";
//       default:
//         return "bg-blue-50";
//     }
//   };

//   const getButtonColor = () => {
//     switch (type) {
//       case "success":
//         return "bg-green-600 hover:bg-green-700";
//       case "error":
//         return "bg-red-600 hover:bg-red-700";
//       case "warning":
//         return "bg-yellow-600 hover:bg-yellow-700";
//       default:
//         return "bg-blue-600 hover:bg-blue-700";
//     }
//   };

//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[70] p-4"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.8, opacity: 0 }}
//             transition={{ type: "spring", damping: 20 }}
//             className="bg-white rounded-2xl max-w-md w-full overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className={`p-8 text-center ${getBgColor()}`}>
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.2, type: "spring" }}
//                 className="flex justify-center"
//               >
//                 {getIcon()}
//               </motion.div>

//               <h2 className={`text-2xl font-bold mt-4 ${getColor()}`}>
//                 {getTitle()}
//               </h2>

//               <p className="text-gray-600 mt-2">{message}</p>

//               {details && (
//                 <div className="mt-4 p-4 bg-gray-100 rounded-lg">
//                   <p className="text-sm text-gray-600">{details}</p>
//                 </div>
//               )}

//               <button
//                 onClick={onClose}
//                 className={`mt-6 px-6 py-2 bg-gradient-to-t from-red-500 to-red-700 rounded-lg transition-all transform hover:scale-105 ${getButtonColor()}`}
//               >
//                 Close
//               </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// // ==================== CONFIRMATION MODAL ====================
// const ConfirmationModal = ({
//   open,
//   onClose,
//   onConfirm,
//   onCancel,
//   title,
//   message,
// }) => {
//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[70] p-4"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.8, opacity: 0 }}
//             transition={{ type: "spring", damping: 20 }}
//             className="bg-white rounded-2xl max-w-md w-full overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="p-8 text-center">
//               <svg
//                 className="w-16 h-16 text-yellow-500 mx-auto mb-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
//                 />
//               </svg>

//               <h3 className="text-xl font-bold text-gray-800 mb-2">
//                 {title || "Confirm Action"}
//               </h3>

//               <p className="text-gray-600 mb-6">
//                 {message || "Are you sure you want to proceed?"}
//               </p>

//               <div className="flex gap-4">
//                 <button
//                   onClick={onCancel || onClose}
//                   className="flex-1 px-4 py-2 border-2 bg-gradient-to-t from-red-300 to-red-500 rounded-lg hover:bg-gray-50 transition-colors font-medium"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={onConfirm}
//                   className="flex-1 px-4 py-2 bg-gradient-to-t from-blue-500 to-indigo-700 text-white rounded-lg transition-all transform hover:scale-105 font-medium"
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// // ==================== ROOM CARD COMPONENT ====================
// const RoomCard = ({ room, delay, onViewDetail, onAddToCart }) => {
//   const [quantity, setQuantity] = useState(1);
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//       whileHover={{ y: -8 }}
//       className="col-span-12 md:col-span-6 lg:col-span-4"
//     >
//       <div
//         className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:shadow-2xl"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="relative overflow-hidden h-64">
//           <img
//             className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
//             src={room.image}
//             alt={room.name}
//           />

//           {/* Overlay Text */}
//           <AnimatePresence>
//             {isHovered && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4"
//               >
//                 <h3 className="text-white text-lg font-semibold">
//                   Luxury Living
//                 </h3>
//                 <p className="text-white/90 text-sm">
//                   Discover A Brand Luxurious Hotel
//                 </p>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Price Badge */}
//           <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full font-bold text-sm">
//             ${room.price}
//             <span className="text-xs font-normal">/night</span>
//           </div>

//           {/* Rating */}
//           <div className="absolute top-4 left-4 flex text-yellow-400">
//             {[...Array(5)].map((_, i) => (
//               <svg
//                 key={i}
//                 className="w-4 h-4"
//                 fill={i < room.rating ? "currentColor" : "none"}
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
//                 />
//               </svg>
//             ))}
//           </div>

//           {/* Hover Actions */}
//           <AnimatePresence>
//             {isHovered && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => onViewDetail(room)}
//                   className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-lg"
//                   title="View Details"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                     />
//                   </svg>
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => onAddToCart({ ...room, quantity })}
//                   className="bg-white text-green-600 p-3 rounded-full hover:bg-green-600 hover:text-white transition-colors shadow-lg"
//                   title="Add to Cart"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                     />
//                   </svg>
//                 </motion.button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         <div className="p-6 flex-grow">
//           <div className="flex justify-between items-center mb-3">
//             <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
//           </div>

//           <div className="flex flex-wrap gap-2 mb-4">
//             <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
//               <svg
//                 className="w-4 h-4 mr-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//                 />
//               </svg>
//               {room.beds} Bed{room.beds > 1 ? "s" : ""}
//             </span>
//             <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
//               <svg
//                 className="w-4 h-4 mr-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//                 />
//               </svg>
//               {room.baths} Bath{room.baths > 1 ? "s" : ""}
//             </span>
//             <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
//               <svg
//                 className="w-4 h-4 mr-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
//                 />
//               </svg>
//               {room.size} sq.ft
//             </span>
//           </div>

//           <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>

//           <div className="flex flex-wrap gap-1 mb-4">
//             {room.amenities.slice(0, 3).map((amenity, index) => (
//               <span
//                 key={index}
//                 className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
//               >
//                 {amenity}
//               </span>
//             ))}
//             {room.amenities.length > 3 && (
//               <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
//                 +{room.amenities.length - 3}
//               </span>
//             )}
//           </div>

//           <div className="flex items-center justify-between mt-auto">
//             <div className="flex items-center bg-gray-100 rounded-lg">
//               <button
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 className="px-3 py-2 bg-gradient-to-t from-red-400 to-red-500 rounded-l-lg transition-colors"
//               >
//                 -
//               </button>
//               <input
//                 type="number"
//                 min="1"
//                 value={quantity}
//                 onChange={(e) =>
//                   setQuantity(Math.max(1, parseInt(e.target.value) || 1))
//                 }
//                 className="w-12 text-center text-black bg-transparent border-none py-2 focus:outline-none"
//               />
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="px-3 py-2 bg-gradient-to-t from-blue-500 to-indigo-700 rounded-r-lg transition-colors"
//               >
//                 +
//               </button>
//             </div>
//             <div className="text-right">
//               <p className="text-xs text-gray-500">Total</p>
//               <p className="font-bold text-blue-600">
//                 ${(room.price * quantity).toFixed(2)}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // ==================== ROOM DETAIL MODAL ====================
// const RoomDetailModal = ({ room, onClose, onAddToCart }) => {
//   const [nights, setNights] = useState(1);
//   const [quantity, setQuantity] = useState(1);

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4"
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 50, opacity: 0 }}
//           className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="relative">
//             <img
//               src={room.image}
//               alt={room.name}
//               className="w-full h-80 object-cover rounded-t-2xl"
//             />
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-4 bg-gradient-to-t from-red-500 to-red-700 backdrop-blur-sm rounded-full p-2 shadow-lg transition-colors"
//             >
//               <svg
//                 className="w-6 h-6 text-gray-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//             <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
//               ${room.price}
//               <span className="text-sm font-normal">/night</span>
//             </div>
//           </div>

//           <div className="p-8">
//             <h2 className="text-3xl font-bold text-gray-800 mb-2">
//               {room.name}
//             </h2>

//             <div className="flex items-center mb-4">
//               {[...Array(5)].map((_, i) => (
//                 <svg
//                   key={i}
//                   className={`w-5 h-5 ${i < room.rating ? "text-yellow-400" : "text-gray-300"}`}
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//               ))}
//             </div>

//             <div className="flex flex-wrap gap-3 mb-6">
//               <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg flex items-center">
//                 <svg
//                   className="w-5 h-5 mr-2"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//                   />
//                 </svg>
//                 {room.beds} Bed{room.beds > 1 ? "s" : ""}
//               </span>
//               <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg flex items-center">
//                 <svg
//                   className="w-5 h-5 mr-2"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//                   />
//                 </svg>
//                 {room.baths} Bath{room.baths > 1 ? "s" : ""}
//               </span>
//               <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg flex items-center">
//                 <svg
//                   className="w-5 h-5 mr-2"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
//                   />
//                 </svg>
//                 {room.size} sq.ft
//               </span>
//             </div>

//             <p className="text-gray-600 leading-relaxed mb-6">
//               {room.description}
//             </p>

//             <h3 className="text-xl font-semibold mb-3">Amenities</h3>
//             <div className="flex flex-wrap gap-2 mb-8">
//               {room.amenities.map((amenity, index) => (
//                 <span
//                   key={index}
//                   className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
//                 >
//                   {amenity}
//                 </span>
//               ))}
//             </div>

//             <hr className="my-6" />

//             <h3 className="text-xl font-semibold mb-4">Booking Details</h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//               <div>
//                 <label className="block text-gray-700 mb-2 font-medium">
//                   Number of Nights
//                 </label>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => setNights(Math.max(1, nights - 1))}
//                     className="bg-gray-100 hover:bg-gray-200 text-gray-600 w-10 h-10 rounded-l-lg flex items-center justify-center transition-colors"
//                   >
//                     -
//                   </button>
//                   <input
//                     type="number"
//                     min="1"
//                     value={nights}
//                     onChange={(e) =>
//                       setNights(Math.max(1, parseInt(e.target.value) || 1))
//                     }
//                     className="w-16 text-center border-t border-b border-gray-200 h-10 focus:outline-none"
//                   />
//                   <button
//                     onClick={() => setNights(nights + 1)}
//                     className="bg-gray-100 hover:bg-gray-200 text-gray-600 w-10 h-10 rounded-r-lg flex items-center justify-center transition-colors"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-2 font-medium">
//                   Number of Rooms
//                 </label>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                     className="bg-gray-100 hover:bg-gray-200 text-gray-600 w-10 h-10 rounded-l-lg flex items-center justify-center transition-colors"
//                   >
//                     -
//                   </button>
//                   <input
//                     type="number"
//                     min="1"
//                     value={quantity}
//                     onChange={(e) =>
//                       setQuantity(Math.max(1, parseInt(e.target.value) || 1))
//                     }
//                     className="w-16 text-center border-t border-b border-gray-200 h-10 focus:outline-none"
//                   />
//                   <button
//                     onClick={() => setQuantity(quantity + 1)}
//                     className="bg-gray-100 hover:bg-gray-200 text-gray-600 w-10 h-10 rounded-r-lg flex items-center justify-center transition-colors"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <p className="text-gray-600 mb-1">Total Price</p>
//                   <p className="text-3xl font-bold text-blue-600">
//                     ${(room.price * nights * quantity).toFixed(2)}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => onAddToCart({ ...room, nights, quantity })}
//                   className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg  transition-all transform hover:scale-105 font-medium shadow-lg flex items-center"
//                 >
//                   <svg
//                     className="w-5 h-5 mr-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                     />
//                   </svg>
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// // ==================== CART MODAL ====================
// const CartModal = ({
//   cartItems,
//   onClose,
//   onRemoveItem,
//   onProceedToPayment,
// }) => {
//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.nights * item.quantity,
//     0,
//   );
//   const tax = subtotal * 0.1;
//   const total = subtotal + tax;

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4"
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 50, opacity: 0 }}
//           className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
//               <button
//                 onClick={onClose}
//                 className="bg-gradient-to-t from-red-500 to-red-700 rounded-full p-2 transition-colors"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {cartItems.length === 0 ? (
//               <div className="text-center py-12">
//                 <svg
//                   className="w-20 h-20 text-gray-400 mx-auto mb-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                   />
//                 </svg>
//                 <p className="text-gray-500 text-lg">Your cart is empty</p>
//               </div>
//             ) : (
//               <>
//                 <div className="divide-y max-h-96 overflow-y-auto">
//                   {cartItems.map((item, index) => (
//                     <div key={index} className="py-4 flex items-center">
//                       <img
//                         src={item.image}
//                         alt=""
//                         className="w-20 h-20 object-cover rounded-lg"
//                       />
//                       <div className="ml-4 flex-grow">
//                         <h3 className="font-semibold text-gray-800">
//                           {item.name}
//                         </h3>
//                         <p className="text-sm text-gray-500">
//                           {item.quantity} room(s) × {item.nights} night(s)
//                         </p>
//                         <p className="text-sm font-medium text-blue-600">
//                           ${item.price}/night
//                         </p>
//                       </div>
//                       <div className="text-right">
//                         <p className="font-bold text-gray-800">
//                           $
//                           {(item.price * item.nights * item.quantity).toFixed(
//                             2,
//                           )}
//                         </p>
//                         <button
//                           onClick={() => onRemoveItem(index)}
//                           className="text-red-500 text-sm hover:text-red-700 mt-1"
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="border-t mt-6 pt-6">
//                   <div className="space-y-2 mb-4">
//                     <div className="flex justify-between text-gray-600">
//                       <span>Subtotal</span>
//                       <span>${subtotal.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between text-gray-600">
//                       <span>Tax (10%)</span>
//                       <span>${tax.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between font-bold text-lg pt-2 border-t">
//                       <span>Total</span>
//                       <span className="text-blue-600">${total.toFixed(2)}</span>
//                     </div>
//                   </div>

//                   <button
//                     onClick={onProceedToPayment}
//                     className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white font-medium py-4 px-6 rounded-lg hover:from-green-700 hover:to-green-600 transition-all transform hover:scale-105 shadow-lg"
//                   >
//                     Proceed to Payment
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// // ==================== ROOMS SERVICES COMPONENT ====================
// const RoomsServices = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const [showDetailModal, setShowDetailModal] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [showCartModal, setShowCartModal] = useState(false);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [showStatusModal, setShowStatusModal] = useState(false);
//   const [statusType, setStatusType] = useState("info");
//   const [statusMessage, setStatusMessage] = useState("");
//   const [statusDetails, setStatusDetails] = useState("");

//   const handleViewDetail = (room) => {
//     setSelectedRoom(room);
//     setShowDetailModal(true);
//   };

//   const handleAddToCart = (room) => {
//     const existingIndex = cartItems.findIndex(
//       (item) => item.id === room.id && item.nights === room.nights,
//     );

//     if (existingIndex >= 0) {
//       const updatedCart = [...cartItems];
//       updatedCart[existingIndex].quantity += room.quantity || 1;
//       setCartItems(updatedCart);
//     } else {
//       setCartItems((prev) => [
//         ...prev,
//         {
//           ...room,
//           quantity: room.quantity || 1,
//           nights: room.nights || 1,
//         },
//       ]);
//     }

//     setShowDetailModal(false);
//     setStatusType("success");
//     setStatusMessage("Added to Cart!");
//     setStatusDetails(`${room.name} has been added to your cart.`);
//     setShowStatusModal(true);
//   };

//   const handleRemoveFromCart = (index) => {
//     setCartItems((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleProceedToPayment = () => {
//     setShowCartModal(false);
//     setShowPaymentModal(true);
//   };

//   const handlePaymentSuccess = () => {
//     setShowPaymentModal(false);
//     setCartItems([]);
//     setStatusType("success");
//     setStatusMessage("Payment Successful!");
//     setStatusDetails("Your booking has been confirmed.");
//     setShowStatusModal(true);
//   };

//   const cartTotal =
//     cartItems.reduce(
//       (sum, item) => sum + item.price * item.nights * item.quantity,
//       0,
//     ) * 1.1;

//   return (
//     <div className="py-8 px-4">
//       <ToastContainer />

//       <div className="container mx-auto">
//         <div className="text-center mb-8">
//           <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//             Our Rooms
//           </span>
//           <h2 className="text-3xl font-bold text-gray-800">
//             Explore Our <span className="text-blue-600">Luxury Rooms</span>
//           </h2>
//         </div>

//         <div className="grid grid-cols-12 gap-6">
//           {(showAll ? rooms : rooms.slice(0, 3)).map((room, index) => (
//             <RoomCard
//               key={room.id}
//               room={room}
//               delay={index * 0.1}
//               onViewDetail={handleViewDetail}
//               onAddToCart={handleAddToCart}
//             />
//           ))}
//         </div>

//         <div className="text-center mt-8">
//           <button
//             onClick={() => setShowAll(!showAll)}
//             className="bg-gradient-to-r from-blue-600 to-purple-600  text-white font-medium py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
//           >
//             {showAll ? "Show Less" : "View More Rooms"}
//           </button>
//         </div>

//         {/* Cart Button */}
//         {cartItems.length > 0 && (
//           <motion.button
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setShowCartModal(true)}
//             className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl z-50 flex items-center gap-2"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//               />
//             </svg>
//             <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
//               {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
//             </span>
//           </motion.button>
//         )}

//         {/* Modals */}
//         <AnimatePresence>
//           {showDetailModal && selectedRoom && (
//             <RoomDetailModal
//               room={selectedRoom}
//               onClose={() => setShowDetailModal(false)}
//               onAddToCart={handleAddToCart}
//             />
//           )}

//           {showCartModal && (
//             <CartModal
//               cartItems={cartItems}
//               onClose={() => setShowCartModal(false)}
//               onRemoveItem={handleRemoveFromCart}
//               onProceedToPayment={handleProceedToPayment}
//             />
//           )}

//           {showPaymentModal && (
//             <PaymentModal
//               cartTotal={cartTotal}
//               cartItems={cartItems}
//               onClose={() => setShowPaymentModal(false)}
//               onPaymentSuccess={handlePaymentSuccess}
//             />
//           )}
//         </AnimatePresence>

//         <StatusModal
//           open={showStatusModal}
//           onClose={() => setShowStatusModal(false)}
//           type={statusType}
//           message={statusMessage}
//           details={statusDetails}
//         />
//       </div>
//     </div>
//   );
// };

// // ==================== BOOKING COMPONENT ====================
// const Booking = () => {
//   const [formData, setFormData] = useState({
//     checkInDate: "",
//     checkOutDate: "",
//     adults: "",
//     name: "",
//     email: "",
//     phone: "",
//     children: "",
//     roomType: "",
//     specialRequests: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [activeStep, setActiveStep] = useState(0);
//   const [showStatusModal, setShowStatusModal] = useState(false);
//   const [statusType, setStatusType] = useState("info");
//   const [statusMessage, setStatusMessage] = useState("");
//   const [statusDetails, setStatusDetails] = useState("");
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const steps = ["Personal Details", "Stay Details", "Confirmation"];

//   const roomTypes = [
//     { value: "standard", label: "Standard Room" },
//     { value: "deluxe", label: "Deluxe Room" },
//     { value: "suite", label: "Suite" },
//     { value: "executive", label: "Executive Suite" },
//     { value: "presidential", label: "Presidential Suite" },
//   ];

//   const validateForm = () => {
//     const newErrors = {};

//     if (activeStep === 0) {
//       if (!formData.name) newErrors.name = "Name is required";
//       if (!formData.email) {
//         newErrors.email = "Email is required";
//       } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//         newErrors.email = "Email is invalid";
//       }
//       if (!formData.phone) newErrors.phone = "Phone is required";
//     }

//     if (activeStep === 1) {
//       if (!formData.checkInDate) {
//         newErrors.checkInDate = "Check-in date is required";
//       }
//       if (!formData.checkOutDate) {
//         newErrors.checkOutDate = "Check-out date is required";
//       } else if (
//         formData.checkInDate &&
//         new Date(formData.checkOutDate) <= new Date(formData.checkInDate)
//       ) {
//         newErrors.checkOutDate = "Check-out must be after check-in";
//       }
//       if (!formData.adults || formData.adults < 1) {
//         newErrors.adults = "At least one adult is required";
//       }
//       if (!formData.roomType) {
//         newErrors.roomType = "Room type is required";
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: undefined,
//       }));
//     }
//   };

//   const handleNext = () => {
//     if (validateForm()) {
//       setActiveStep((prev) => prev + 1);
//     }
//   };

//   const handleBack = () => {
//     setActiveStep((prev) => prev - 1);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setShowConfirmation(true);
//   };

//   const confirmSubmit = async () => {
//     setShowConfirmation(false);
//     setIsSubmitting(true);

//     try {
//       const results = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/84383/92823",
//         formData,
//       );

//       if (results.data.success) {
//         setStatusType("success");
//         setStatusMessage("Booking Confirmed!");
//         setStatusDetails("A confirmation email has been sent to your inbox.");

//         setTimeout(() => {
//           setFormData({
//             checkInDate: "",
//             checkOutDate: "",
//             adults: "",
//             name: "",
//             email: "",
//             phone: "",
//             children: "",
//             roomType: "",
//             specialRequests: "",
//           });
//           setActiveStep(0);
//         }, 3000);
//       } else {
//         setStatusType("error");
//         setStatusMessage("Booking Failed");
//         setStatusDetails("Please try again or contact support.");
//       }
//     } catch (error) {
//       setStatusType("error");
//       setStatusMessage("Submission Error");
//       setStatusDetails(
//         error.response?.data?.message || "Network error. Please try again.",
//       );
//     } finally {
//       setIsSubmitting(false);
//       setShowStatusModal(true);
//     }
//   };

//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-gray-700 mb-2 font-medium">
//                 Full Name *
//               </label>
//               <div className="relative">
//                 <span className="absolute left-3 top-3 text-gray-400">
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                     />
//                   </svg>
//                 </span>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full pl-10 pr-4 py-3 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
//                   placeholder="John Doe"
//                 />
//               </div>
//               {errors.name && (
//                 <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//               )}
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-700 mb-2 font-medium">
//                   Email *
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-3 text-gray-400">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                   </span>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`w-full pl-10 pr-4 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
//                     placeholder="john@example.com"
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-2 font-medium">
//                   Phone Number *
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-3 text-gray-400">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                       />
//                     </svg>
//                   </span>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className={`w-full pl-10 pr-4 py-3 border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
//                     placeholder="+1 (123) 456-7890"
//                   />
//                 </div>
//                 {errors.phone && (
//                   <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         );

//       case 1:
//         return (
//           <div className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-700 mb-2 font-medium">
//                   Check-in Date *
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-3 text-gray-400">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                       />
//                     </svg>
//                   </span>
//                   <input
//                     type="date"
//                     name="checkInDate"
//                     value={formData.checkInDate}
//                     onChange={handleChange}
//                     min={new Date().toISOString().split("T")[0]}
//                     className={`w-full pl-10 pr-4 py-3 border ${errors.checkInDate ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
//                   />
//                 </div>
//                 {errors.checkInDate && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.checkInDate}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-2 font-medium">
//                   Check-out Date *
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-3 text-gray-400">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                       />
//                     </svg>
//                   </span>
//                   <input
//                     type="date"
//                     name="checkOutDate"
//                     value={formData.checkOutDate}
//                     onChange={handleChange}
//                     min={
//                       formData.checkInDate ||
//                       new Date().toISOString().split("T")[0]
//                     }
//                     className={`w-full pl-10 pr-4 py-3 border ${errors.checkOutDate ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
//                   />
//                 </div>
//                 {errors.checkOutDate && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.checkOutDate}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-700 mb-2 font-medium">
//                   Adults *
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-3 text-gray-400">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
//                       />
//                     </svg>
//                   </span>
//                   <select
//                     name="adults"
//                     value={formData.adults}
//                     onChange={handleChange}
//                     className={`w-full pl-10 pr-4 py-3 border ${errors.adults ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white`}
//                   >
//                     <option value="">Select adults</option>
//                     {[1, 2, 3, 4, 5].map((num) => (
//                       <option key={num} value={num}>
//                         {num} {num === 1 ? "Adult" : "Adults"}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 {errors.adults && (
//                   <p className="text-red-500 text-sm mt-1">{errors.adults}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-2 font-medium">
//                   Children
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-3 text-gray-400">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
//                       />
//                     </svg>
//                   </span>
//                   <select
//                     name="children"
//                     value={formData.children}
//                     onChange={handleChange}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
//                   >
//                     <option value="">Select children</option>
//                     {[0, 1, 2, 3, 4].map((num) => (
//                       <option key={num} value={num}>
//                         {num} {num === 1 ? "Child" : "Children"}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-2 font-medium">
//                 Room Type *
//               </label>
//               <div className="relative">
//                 <span className="absolute left-3 top-3 text-gray-400">
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//                     />
//                   </svg>
//                 </span>
//                 <select
//                   name="roomType"
//                   value={formData.roomType}
//                   onChange={handleChange}
//                   className={`w-full pl-10 pr-4 py-3 border ${errors.roomType ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white`}
//                 >
//                   <option value="">Select room type</option>
//                   {roomTypes.map((room) => (
//                     <option key={room.value} value={room.value}>
//                       {room.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               {errors.roomType && (
//                 <p className="text-red-500 text-sm mt-1">{errors.roomType}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-2 font-medium">
//                 Special Requests (Optional)
//               </label>
//               <textarea
//                 name="specialRequests"
//                 value={formData.specialRequests}
//                 onChange={handleChange}
//                 rows="3"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="Any special requirements?"
//               />
//             </div>
//           </div>
//         );

//       case 2:
//         return (
//           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">
//               Booking Summary
//             </h3>
//             <div className="space-y-3">
//               <div className="flex justify-between py-2 border-b border-blue-100">
//                 <span className="text-gray-600">Name:</span>
//                 <span className="font-medium text-gray-800">
//                   {formData.name}
//                 </span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-blue-100">
//                 <span className="text-gray-600">Email:</span>
//                 <span className="font-medium text-gray-800">
//                   {formData.email}
//                 </span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-blue-100">
//                 <span className="text-gray-600">Phone:</span>
//                 <span className="font-medium text-gray-800">
//                   {formData.phone}
//                 </span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-blue-100">
//                 <span className="text-gray-600">Check-in:</span>
//                 <span className="font-medium text-gray-800">
//                   {formData.checkInDate}
//                 </span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-blue-100">
//                 <span className="text-gray-600">Check-out:</span>
//                 <span className="font-medium text-gray-800">
//                   {formData.checkOutDate}
//                 </span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-blue-100">
//                 <span className="text-gray-600">Guests:</span>
//                 <span className="font-medium text-gray-800">
//                   {formData.adults} Adults, {formData.children || 0} Children
//                 </span>
//               </div>
//               <div className="flex justify-between py-2">
//                 <span className="text-gray-600">Room Type:</span>
//                 <span className="font-medium text-gray-800">
//                   {roomTypes.find((r) => r.value === formData.roomType)?.label}
//                 </span>
//               </div>
//               {formData.specialRequests && (
//                 <div className="flex justify-between py-2">
//                   <span className="text-gray-600">Special Requests:</span>
//                   <span className="font-medium text-gray-800">
//                     {formData.specialRequests}
//                   </span>
//                 </div>
//               )}
//             </div>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 min-h-screen">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1 className="text-4xl font-bold text-center text-white mb-2">
//               Book Your Stay
//             </h1>
//             <p className="text-xl text-center text-white/90 mb-8">
//               Experience luxury and comfort at its finest
//             </p>

//             <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto">
//               {/* Stepper */}
//               <div className="flex items-center mb-8">
//                 {steps.map((label, index) => (
//                   <React.Fragment key={label}>
//                     <div className="flex items-center">
//                       <div
//                         className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
//                           activeStep >= index
//                             ? "border-blue-600 bg-blue-600 text-white"
//                             : "border-gray-300 text-gray-400"
//                         }`}
//                       >
//                         {activeStep > index ? (
//                           <svg
//                             className="w-5 h-5"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M5 13l4 4L19 7"
//                             />
//                           </svg>
//                         ) : (
//                           index + 1
//                         )}
//                       </div>
//                       <span
//                         className={`ml-2 text-sm font-medium ${
//                           activeStep >= index
//                             ? "text-gray-900"
//                             : "text-gray-400"
//                         }`}
//                       >
//                         {label}
//                       </span>
//                     </div>
//                     {index < steps.length - 1 && (
//                       <div
//                         className={`flex-1 h-1 mx-4 transition-all ${
//                           activeStep > index ? "bg-blue-600" : "bg-gray-300"
//                         }`}
//                       />
//                     )}
//                   </React.Fragment>
//                 ))}
//               </div>

//               <form onSubmit={handleSubmit} className="text-white">
//                 {getStepContent(activeStep)}

//                 <div className="flex justify-between mt-8">
//                   <button
//                     type="button"
//                     onClick={handleBack}
//                     disabled={activeStep === 0}
//                     className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center ${
//                       activeStep === 0
//                         ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//                         : "border-2 border-gray-300 text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     <svg
//                       className="w-5 h-5 mr-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M10 19l-7-7m0 0l7-7m-7 7h18"
//                       />
//                     </svg>
//                     Back
//                   </button>

//                   {activeStep === steps.length - 1 ? (
//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg hover:from-green-700 hover:to-green-600 transition-all transform hover:scale-105 font-medium flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <svg
//                             className="animate-spin h-5 w-5 mr-3 text-white"
//                             viewBox="0 0 24 24"
//                           >
//                             <circle
//                               className="opacity-25"
//                               cx="12"
//                               cy="12"
//                               r="10"
//                               stroke="currentColor"
//                               strokeWidth="4"
//                               fill="none"
//                             />
//                             <path
//                               className="opacity-75"
//                               fill="currentColor"
//                               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                             />
//                           </svg>
//                           Processing...
//                         </>
//                       ) : (
//                         <>
//                           Confirm Booking
//                           <svg
//                             className="w-5 h-5 ml-2"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M5 13l4 4L19 7"
//                             />
//                           </svg>
//                         </>
//                       )}
//                     </button>
//                   ) : (
//                     <button
//                       type="button"
//                       onClick={handleNext}
//                       className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg  transition-all transform hover:scale-105 font-medium flex items-center"
//                     >
//                       Next
//                       <svg
//                         className="w-5 h-5 ml-2"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M14 5l7 7m0 0l-7 7m7-7H3"
//                         />
//                       </svg>
//                     </button>
//                   )}
//                 </div>
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <StatusModal
//         open={showStatusModal}
//         onClose={() => setShowStatusModal(false)}
//         type={statusType}
//         message={statusMessage}
//         details={statusDetails}
//       />

//       <ConfirmationModal
//         open={showConfirmation}
//         onClose={() => setShowConfirmation(false)}
//         onConfirm={confirmSubmit}
//         onCancel={() => setShowConfirmation(false)}
//         title="Confirm Booking"
//         message="Please confirm your booking details. A confirmation email will be sent to you."
//       />
//     </>
//   );
// };

// // ==================== CONTACT SECTION ====================
// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showStatusModal, setShowStatusModal] = useState(false);
//   const [statusType, setStatusType] = useState("info");
//   const [statusMessage, setStatusMessage] = useState("");
//   const [statusDetails, setStatusDetails] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const results = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/84383/92823/contact",
//         formData,
//       );

//       if (results.data.success) {
//         setStatusType("success");
//         setStatusMessage("Message Sent Successfully!");
//         setStatusDetails("We will get back to you within 24 hours.");
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         setStatusType("error");
//         setStatusMessage("Failed to send message");
//         setStatusDetails("Please try again later.");
//       }
//     } catch (error) {
//       setStatusType("error");
//       setStatusMessage("Submission Error");
//       setStatusDetails(
//         error.response?.data?.message || "Network error. Please try again.",
//       );
//     } finally {
//       setIsSubmitting(false);
//       setShowStatusModal(true);
//     }
//   };

//   return (
//     <>
//       <div className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
//                 Contact Us
//               </span>
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                 Get In <span className="text-blue-400">Touch</span>
//               </h2>
//               <p className="text-gray-300 mb-8">
//                 Have questions or need assistance? Our team is here to help you
//                 with all your inquiries.
//               </p>

//               <div className="space-y-6">
//                 <ContactInfoCard
//                   icon={
//                     <svg
//                       className="w-6 h-6"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                       />
//                     </svg>
//                   }
//                   title="Phone"
//                   items={["+250 (78) 794-4577", "+250 (72) 755-6145"]}
//                 />
//                 <ContactInfoCard
//                   icon={
//                     <svg
//                       className="w-6 h-6"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                   }
//                   title="Email"
//                   items={["info@hotel.com", "support@hotel.com"]}
//                 />
//                 <ContactInfoCard
//                   icon={
//                     <svg
//                       className="w-6 h-6"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                     </svg>
//                   }
//                   title="Address"
//                   items={[
//                     "123 Luxury Street",
//                     "Hospitality District",
//                     "Kigali, KG 191",
//                   ]}
//                 />
//                 <ContactInfoCard
//                   icon={
//                     <svg
//                       className="w-6 h-6"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                   }
//                   title="Working Hours"
//                   items={[
//                     "Monday - Friday: 9:00 - 18:00",
//                     "Saturday: 10:00 - 16:00",
//                     "Sunday: Closed",
//                   ]}
//                 />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <div className="bg-white rounded-2xl p-8">
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <label className="block text-gray-700 mb-2 font-medium">
//                       Full Name *
//                     </label>
//                     <div className="relative">
//                       <span className="absolute left-3 top-3 text-gray-400">
//                         <svg
//                           className="w-5 h-5"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                           />
//                         </svg>
//                       </span>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
//                         placeholder="John Doe"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-gray-700 mb-2 font-medium">
//                         Email *
//                       </label>
//                       <div className="relative">
//                         <span className="absolute left-3 top-3 text-gray-400">
//                           <svg
//                             className="w-5 h-5"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                             />
//                           </svg>
//                         </span>
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                           className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
//                           placeholder="john@example.com"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-gray-700 mb-2 font-medium">
//                         Phone Number
//                       </label>
//                       <div className="relative">
//                         <span className="absolute left-3 top-3 text-gray-400">
//                           <svg
//                             className="w-5 h-5"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                             />
//                           </svg>
//                         </span>
//                         <input
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
//                           placeholder="+1 (123) 456-7890"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 mb-2 font-medium">
//                       Subject *
//                     </label>
//                     <input
//                       type="text"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
//                       placeholder="What's this about?"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 mb-2 font-medium">
//                       Message *
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows="5"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
//                       placeholder="Your message here..."
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-gradient-to-r from-blue-600 to-purple-600  text-white font-medium py-4 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
//                   >
//                     {isSubmitting ? (
//                       <div className="flex items-center justify-center">
//                         <svg
//                           className="animate-spin h-5 w-5 mr-3 text-white"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                             fill="none"
//                           />
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           />
//                         </svg>
//                         Sending...
//                       </div>
//                     ) : (
//                       "Send Message"
//                     )}
//                   </button>
//                 </form>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       <StatusModal
//         open={showStatusModal}
//         onClose={() => setShowStatusModal(false)}
//         type={statusType}
//         message={statusMessage}
//         details={statusDetails}
//       />
//     </>
//   );
// };

// const ContactInfoCard = ({ icon, title, items }) => {
//   return (
//     <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
//       <div className="bg-blue-600/20 p-3 rounded-full">
//         <div className="text-blue-400">{icon}</div>
//       </div>
//       <div>
//         <h3 className="font-semibold text-white text-lg mb-2">{title}</h3>
//         <ul className="space-y-1">
//           {items.map((item, index) => (
//             <li key={index} className="text-gray-300">
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </motion.div>
//   );
// };

// // ==================== PAYMENT MODAL ====================
// const PaymentModal = ({ cartTotal, cartItems, onClose, onPaymentSuccess }) => {
//   const [paymentMethod, setPaymentMethod] = useState("credit");
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setShowConfirmation(true);
//   };

//   const confirmPayment = async () => {
//     setShowConfirmation(false);
//     setIsProcessing(true);

//     try {
//       const paymentData = {
//         amount: cartTotal,
//         items: cartItems,
//         paymentMethod,
//         timestamp: new Date().toISOString(),
//       };

//       const results = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/84383/92823/payment",
//         paymentData,
//       );

//       if (results.data.success) {
//         setTimeout(() => {
//           setIsProcessing(false);
//           onPaymentSuccess();
//         }, 1500);
//       } else {
//         setIsProcessing(false);
//         // Handle payment failure
//       }
//     } catch (error) {
//       setIsProcessing(false);
//       console.error("Payment error:", error);
//     }
//   };

//   return (
//     <>
//       <AnimatePresence>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 50, opacity: 0 }}
//             className="bg-white rounded-2xl max-w-md w-full"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-bold text-gray-800">
//                   Payment Details
//                 </h2>
//                 <button
//                   onClick={onClose}
//                   className="bg-gradient-to-t from-red-500 to-red-700 rounded-full p-2 transition-colors"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               <div className="bg-blue-50 p-4 rounded-xl mb-4">
//                 <p className="text-sm text-gray-600 mb-1">Total Amount</p>
//                 <p className="text-2xl font-bold text-blue-600">
//                   ${cartTotal.toFixed(2)}
//                 </p>
//               </div>

//               <div className="mb-4">
//                 <p className="text-sm font-medium text-gray-700 mb-2">
//                   Payment Method
//                 </p>
//                 <div className="grid grid-cols-2 gap-2">
//                   <button
//                     onClick={() => setPaymentMethod("credit")}
//                     className={`py-3 px-4 rounded-lg border-2 transition-all flex items-center justify-center ${
//                       paymentMethod === "credit"
//                         ? "bg-gradient-to-t from-red-500 to-red-700"
//                         : "bg-gradient-to-t from-blue-300 to-indigo-300"
//                     }`}
//                   >
//                     <svg
//                       className="w-5 h-5 mr-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
//                       />
//                     </svg>
//                     Credit Card
//                   </button>
//                   <button
//                     onClick={() => setPaymentMethod("paypal")}
//                     className={`py-3 px-4 rounded-lg border-2 transition-all flex items-center justify-center ${
//                       paymentMethod === "paypal"
//                         ? "bg-gradient-to-t from-green-500 to-blue-400"
//                         : "bg-gradient-to-t from-green-300 to-blue-300"
//                     }`}
//                   >
//                     <svg
//                       className="w-5 h-5 mr-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
//                       />
//                     </svg>
//                     PayPal
//                   </button>
//                 </div>
//               </div>

//               {paymentMethod === "credit" && (
//                 <form onSubmit={handleSubmit} className="text-black">
//                   <div className="space-y-3">
//                     <div>
//                       <label className="block text-gray-700 mb-1 text-sm">
//                         Card Number
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="1234 5678 9012 3456"
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 mb-1 text-sm">
//                         Cardholder Name
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="John Doe"
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         required
//                       />
//                     </div>
//                     <div className="grid grid-cols-2 gap-2">
//                       <div>
//                         <label className="block text-gray-700 mb-1 text-sm">
//                           Expiry Date
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="MM/YY"
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 mb-1 text-sm">
//                           CVV
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="123"
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                           required
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isProcessing}
//                     className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600  text-white font-medium py-4 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
//                   >
//                     {isProcessing ? (
//                       <div className="flex items-center justify-center">
//                         <svg
//                           className="animate-spin h-5 w-5 mr-3 text-white"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                             fill="none"
//                           />
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           />
//                         </svg>
//                         Processing...
//                       </div>
//                     ) : (
//                       `Pay $${cartTotal.toFixed(2)}`
//                     )}
//                   </button>
//                 </form>
//               )}

//               {paymentMethod === "paypal" && (
//                 <button
//                   onClick={() => setShowConfirmation(true)}
//                   disabled={isProcessing}
//                   className="w-full bg-gradient-to-t from-blue-500 to-indigo-700 font-medium py-4 px-6 rounded-lg transition-all transform hover:scale-105"
//                 >
//                   Pay with PayPal
//                 </button>
//               )}
//             </div>
//           </motion.div>
//         </motion.div>
//       </AnimatePresence>

//       <ConfirmationModal
//         open={showConfirmation}
//         onClose={() => setShowConfirmation(false)}
//         onConfirm={confirmPayment}
//         onCancel={() => setShowConfirmation(false)}
//         title="Confirm Payment"
//         message={`Are you sure you want to pay $${cartTotal.toFixed(2)}?`}
//       />
//     </>
//   );
// };

// // ==================== MAIN HERO COMPONENT ====================
// export const Hero = () => {
//   const [showRoomsModal, setShowRoomsModal] = useState(false);
//   const [showBookingModal, setShowBookingModal] = useState(false);
//   const [showContactModal, setShowContactModal] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleButtonClick = (action) => {
//     if (action === "rooms") {
//       setShowRoomsModal(true);
//     } else if (action === "book") {
//       setShowBookingModal(true);
//     } else if (action === "contact") {
//       setShowContactModal(true);
//     }
//   };

//   return (
//     <>
//       <div className="w-full mt-0 mb-1 rounded-2xl overflow-hidden relative ">
//         <Carousel
//           infiniteLoop
//           autoPlay
//           showThumbs={false}
//           showStatus={false}
//           interval={5000}
//           transitionTime={1000}
//           onChange={(index) => setCurrentSlide(index)}
//           className="h-full"
//         >
//           {carouselItems.map((item, index) => (
//             <div key={index} className="relative">
//               <img
//                 src={item.imgSrc}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full min-h-screen object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
//                 <div className="container mx-auto px-4 md:px-6 lg:px-8">
//                   <AnimatePresence mode="wait">
//                     {currentSlide === index && (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: 20 }}
//                         transition={{ duration: 0.8 }}
//                         className="max-w-2xl text-white"
//                       >
//                         <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
//                           {item.subtitle}
//                         </span>
//                         <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//                           {item.title}
//                         </h1>
//                         <div className="flex flex-wrap gap-4">
//                           <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => handleButtonClick("rooms")}
//                             className="bg-gradient-to-r from-blue-600 to-purple-600  text-white font-medium py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl"
//                           >
//                             Our Rooms
//                           </motion.button>
//                           <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => handleButtonClick("book")}
//                             className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-lg border-2 transition-all backdrop-blur-sm"
//                           >
//                             Book Now
//                           </motion.button>
//                           <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => handleButtonClick("contact")}
//                             className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-lg border-2 transition-all backdrop-blur-sm"
//                           >
//                             Contact Us
//                           </motion.button>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//       </div>

//       {/* Modals */}
//       <AnimatePresence>
//         {showRoomsModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-80 z-50 overflow-y-auto"
//             onClick={() => setShowRoomsModal(false)}
//           >
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//               className="min-h-screen flex items-center justify-center p-4"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="bg-white rounded-2xl w-full max-w-7xl max-h-[90vh] overflow-y-auto relative">
//                 <button
//                   onClick={() => setShowRoomsModal(false)}
//                   className="absolute top-4 right-4 z-10 bg-gradient-to-t from-red-500 to-red-700 backdrop-blur-sm rounded-full p-2 shadow-lg transition-colors"
//                 >
//                   <svg
//                     className="w-6 h-6 text-gray-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//                 <RoomsServices />
//               </div>
//             </motion.div>
//           </motion.div>
//         )}

//         {showBookingModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-80 z-50 overflow-y-auto"
//             onClick={() => setShowBookingModal(false)}
//           >
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//               className="min-h-screen flex items-center justify-center p-4"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
//                 <button
//                   onClick={() => setShowBookingModal(false)}
//                   className="absolute top-4 right-4 z-10 bg-gradient-to-t from-red-500 to-red-700 backdrop-blur-sm rounded-full p-2 shadow-lg transition-colors"
//                 >
//                   <svg
//                     className="w-6 h-6 text-gray-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//                 <Booking />
//               </div>
//             </motion.div>
//           </motion.div>
//         )}

//         {showContactModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-80 z-50 overflow-y-auto"
//             onClick={() => setShowContactModal(false)}
//           >
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//               className="min-h-screen flex items-center justify-center p-4"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
//                 <button
//                   onClick={() => setShowContactModal(false)}
//                   className="absolute top-4 right-4 z-10 bg-gradient-to-t from-blue-400 to-blue-600 backdrop-blur-sm rounded-full p-2 shadow-lg transition-colors"
//                 >
//                   <svg
//                     className="w-6 h-6 text-gray-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//                 <ContactSection />
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };





















/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// ==================== CAROUSEL DATA ====================
const carouselItems = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    subtitle: "Luxury Redefined",
    title: "Experience Ultimate Comfort & Elegance",
    buttons: [
      { text: "Our Rooms", href: "#", variant: "primary", action: "rooms" },
      { text: "Book Now", href: "#", variant: "outline", action: "book" },
    ],
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    subtitle: "5-Star Service",
    title: "Where Every Moment Feels Special",
    buttons: [
      { text: "Our Rooms", href: "#", variant: "primary", action: "rooms" },
      { text: "Book Now", href: "#", variant: "outline", action: "book" },
    ],
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    subtitle: "Exclusive Offers",
    title: "Book Now & Get 20% Off Your Stay",
    buttons: [
      { text: "Our Rooms", href: "#", variant: "primary", action: "rooms" },
      { text: "Book Now", href: "#", variant: "outline", action: "book" },
    ],
  },
];

// ==================== ROOM DATA ====================
const rooms = [
  {
    id: 1,
    name: "Deluxe King Room",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    beds: 1,
    baths: 1,
    description:
      "Spacious room with king-sized bed, luxury amenities, and city view.",
    size: 350,
    rating: 5,
    amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning"],
  },
  {
    id: 2,
    name: "Executive Suite",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    beds: 2,
    baths: 2,
    description:
      "Luxurious suite with separate living area, perfect for business travelers.",
    size: 550,
    rating: 5,
    amenities: [
      "Free WiFi",
      "Breakfast",
      "Mini Bar",
      "Air Conditioning",
      "Work Desk",
    ],
  },
  {
    id: 3,
    name: "Family Room",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    beds: 3,
    baths: 2,
    description: "Perfect for families with multiple beds and ample space.",
    size: 450,
    rating: 5,
    amenities: [
      "Free WiFi",
      "Breakfast",
      "Mini Bar",
      "Air Conditioning",
      "Kids Area",
    ],
  },
  {
    id: 4,
    name: "Presidential Suite",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    beds: 3,
    baths: 3,
    description:
      "The ultimate luxury experience with panoramic views and private butler service.",
    size: 1200,
    rating: 5,
    amenities: [
      "Free WiFi",
      "Breakfast",
      "Mini Bar",
      "Air Conditioning",
      "Butler Service",
    ],
  },
  {
    id: 5,
    name: "Garden View Room",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    beds: 1,
    baths: 1,
    description: "Peaceful room overlooking our beautiful gardens.",
    size: 300,
    rating: 4,
    amenities: [
      "Free WiFi",
      "Breakfast",
      "Mini Bar",
      "Air Conditioning",
      "Garden View",
    ],
  },
  {
    id: 6,
    name: "Penthouse Suite",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1598928501498-c04a8833f51e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    beds: 4,
    baths: 4,
    description: "Top-floor luxury with private terrace and jacuzzi.",
    size: 1500,
    rating: 5,
    amenities: [
      "Free WiFi",
      "Breakfast",
      "Mini Bar",
      "Air Conditioning",
      "Jacuzzi",
    ],
  },
  {
    id: 7,
    name: "Ocean View Suite",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    beds: 2,
    baths: 2,
    description: "Breathtaking ocean views from your private balcony.",
    size: 600,
    rating: 5,
    amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning", "Ocean View"],
  },
  {
    id: 8,
    name: "Mountain View Room",
    price: 219,
    image:
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    beds: 1,
    baths: 1,
    description: "Scenic mountain views with modern amenities.",
    size: 350,
    rating: 4,
    amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning", "Mountain View"],
  },
  {
    id: 9,
    name: "Royal Suite",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80",
    beds: 4,
    baths: 4,
    description: "The epitome of luxury with private pool and butler service.",
    size: 2000,
    rating: 5,
    amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning", "Private Pool", "Butler Service"],
  },
];

// ==================== STATUS MODAL ====================
const StatusModal = ({ open, onClose, type, message, details }) => {
  const getIcon = () => {
    switch (type) {
      case "success":
        return (
          <svg
            className="w-16 h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "error":
        return (
          <svg
            className="w-16 h-16 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "warning":
        return (
          <svg
            className="w-16 h-16 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-16 h-16 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
    }
  };

  const getTitle = () => {
    switch (type) {
      case "success":
        return "Success!";
      case "error":
        return "Error!";
      case "warning":
        return "Warning!";
      default:
        return "Information";
    }
  };

  const getColor = () => {
    switch (type) {
      case "success":
        return "text-green-600";
      case "error":
        return "text-red-600";
      case "warning":
        return "text-yellow-600";
      default:
        return "text-blue-600";
    }
  };

  const getBgColor = () => {
    switch (type) {
      case "success":
        return "bg-green-50";
      case "error":
        return "bg-red-50";
      case "warning":
        return "bg-yellow-50";
      default:
        return "bg-blue-50";
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[70] p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-white rounded-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`p-8 text-center ${getBgColor()}`}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="flex justify-center"
              >
                {getIcon()}
              </motion.div>

              <h2 className={`text-2xl font-bold mt-4 ${getColor()}`}>
                {getTitle()}
              </h2>

              <p className="text-gray-600 mt-2">{message}</p>

              {details && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p className="text-sm text-gray-600">{details}</p>
                </div>
              )}

              <button
                onClick={onClose}
                className="mt-6 px-6 py-2 bg-gradient-to-t from-red-500 to-red-700 text-white rounded-lg transition-all transform hover:scale-105"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ==================== CONFIRMATION MODAL ====================
const ConfirmationModal = ({
  open,
  onClose,
  onConfirm,
  onCancel,
  title,
  message,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[70] p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-white rounded-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 text-center">
              <svg
                className="w-16 h-16 text-yellow-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {title || "Confirm Action"}
              </h3>

              <p className="text-gray-600 mb-6">
                {message || "Are you sure you want to proceed?"}
              </p>

              <div className="flex gap-4">
                <button
                  onClick={onCancel || onClose}
                  className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={onConfirm}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg transition-all transform hover:scale-105 font-medium"
                >
                  Confirm
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ==================== ROOM CARD COMPONENT ====================
const RoomCard = ({ room, delay, onViewDetail, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="col-span-12 md:col-span-6 lg:col-span-4"
    >
      <div
        className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden h-64">
          <img
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
            src={room.image}
            alt={room.name}
          />

          {/* Overlay Text */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4"
              >
                <h3 className="text-white text-lg font-semibold">
                  Luxury Living
                </h3>
                <p className="text-white/90 text-sm">
                  Discover A Brand Luxurious Hotel
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Price Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full font-bold text-sm">
            ${room.price}
            <span className="text-xs font-normal">/night</span>
          </div>

          {/* Rating */}
          <div className="absolute top-4 left-4 flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4"
                fill={i < room.rating ? "currentColor" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            ))}
          </div>

          {/* Hover Actions */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onViewDetail(room)}
                  className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-lg"
                  title="View Details"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onAddToCart({ ...room, quantity })}
                  className="bg-white text-green-600 p-3 rounded-full hover:bg-green-600 hover:text-white transition-colors shadow-lg"
                  title="Add to Cart"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-6 flex-grow">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              {room.beds} Bed{room.beds > 1 ? "s" : ""}
            </span>
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              {room.baths} Bath{room.baths > 1 ? "s" : ""}
            </span>
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
              {room.size} sq.ft
            </span>
          </div>

          <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>

          <div className="flex flex-wrap gap-1 mb-4">
            {room.amenities.slice(0, 3).map((amenity, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              >
                {amenity}
              </span>
            ))}
            {room.amenities.length > 3 && (
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                +{room.amenities.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center bg-gray-100 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 bg-gradient-to-t from-red-400 to-red-500 text-white rounded-l-lg hover:from-red-500 hover:to-red-600 transition-colors"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-12 text-center text-black bg-transparent border-none py-2 focus:outline-none"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 bg-gradient-to-t from-blue-500 to-indigo-700 text-white rounded-r-lg hover:from-blue-600 hover:to-indigo-800 transition-colors"
              >
                +
              </button>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Total</p>
              <p className="font-bold text-blue-600">
                ${(room.price * quantity).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ==================== ROOM DETAIL MODAL ====================
const RoomDetailModal = ({ room, onClose, onAddToCart }) => {
  const [nights, setNights] = useState(1);
  const [quantity, setQuantity] = useState(1);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-80 object-cover rounded-t-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-gradient-to-t from-red-500 to-red-700 text-white rounded-full p-2 shadow-lg hover:from-red-600 hover:to-red-800 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
              ${room.price}
              <span className="text-sm font-normal">/night</span>
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {room.name}
            </h2>

            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < room.rating ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                {room.beds} Bed{room.beds > 1 ? "s" : ""}
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                {room.baths} Bath{room.baths > 1 ? "s" : ""}
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
                {room.size} sq.ft
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              {room.description}
            </p>

            <h3 className="text-xl font-semibold mb-3">Amenities</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {room.amenities.map((amenity, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {amenity}
                </span>
              ))}
            </div>

            <hr className="my-6" />

            <h3 className="text-xl font-semibold mb-4">Booking Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Number of Nights
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => setNights(Math.max(1, nights - 1))}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-600 w-10 h-10 rounded-l-lg flex items-center justify-center transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={nights}
                    onChange={(e) =>
                      setNights(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-16 text-center border-t border-b border-gray-200 h-10 focus:outline-none"
                  />
                  <button
                    onClick={() => setNights(nights + 1)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-600 w-10 h-10 rounded-r-lg flex items-center justify-center transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Number of Rooms
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-600 w-10 h-10 rounded-l-lg flex items-center justify-center transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-16 text-center border-t border-b border-gray-200 h-10 focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-600 w-10 h-10 rounded-r-lg flex items-center justify-center transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 mb-1">Total Price</p>
                  <p className="text-3xl font-bold text-blue-600">
                    ${(room.price * nights * quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => onAddToCart({ ...room, nights, quantity })}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-medium shadow-lg flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ==================== CART MODAL ====================
const CartModal = ({
  cartItems,
  onClose,
  onRemoveItem,
  onProceedToPayment,
}) => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.nights * item.quantity,
    0,
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
              <button
                onClick={onClose}
                className="bg-gradient-to-t from-red-500 to-red-700 text-white rounded-full p-2 hover:from-red-600 hover:to-red-800 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <svg
                  className="w-20 h-20 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <p className="text-gray-500 text-lg">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="divide-y max-h-96 overflow-y-auto">
                  {cartItems.map((item, index) => (
                    <div key={index} className="py-4 flex items-center hover:bg-gray-50 transition-colors">
                      <img
                        src={item.image}
                        alt=""
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="ml-4 flex-grow">
                        <h3 className="font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {item.quantity} room(s) × {item.nights} night(s)
                        </p>
                        <p className="text-sm font-medium text-blue-600">
                          ${item.price}/night
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-800">
                          $
                          {(item.price * item.nights * item.quantity).toFixed(
                            2,
                          )}
                        </p>
                        <button
                          onClick={() => onRemoveItem(index)}
                          className="text-red-500 text-sm hover:text-red-700 mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t mt-6 pt-6">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax (10%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t">
                      <span>Total</span>
                      <span className="text-blue-600">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={onProceedToPayment}
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white font-medium py-4 px-6 rounded-lg hover:from-green-700 hover:to-green-600 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ==================== PAYMENT MODAL ====================
const PaymentModal = ({ cartTotal, cartItems, onClose, onPaymentSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const confirmPayment = async () => {
    setShowConfirmation(false);
    setIsProcessing(true);

    try {
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        onPaymentSuccess({
          customerName: cardDetails.name || "Guest",
          amount: cartTotal,
          paymentMethod,
        });
      }, 1500);
    } catch (error) {
      setIsProcessing(false);
      console.error("Payment error:", error);
    }
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white rounded-2xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Payment Details
                </h2>
                <button
                  onClick={onClose}
                  className="bg-gradient-to-t from-red-500 to-red-700 text-white rounded-full p-2 hover:from-red-600 hover:to-red-800 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl mb-4">
                <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                <p className="text-2xl font-bold text-blue-600">
                  ${cartTotal.toFixed(2)}
                </p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setPaymentMethod("credit")}
                    className={`py-3 px-4 rounded-lg border-2 transition-all flex items-center justify-center ${
                      paymentMethod === "credit"
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    Credit Card
                  </button>
                  <button
                    onClick={() => setPaymentMethod("paypal")}
                    className={`py-3 px-4 rounded-lg border-2 transition-all flex items-center justify-center ${
                      paymentMethod === "paypal"
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    PayPal
                  </button>
                </div>
              </div>

              {paymentMethod === "credit" && (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-gray-700 mb-1 text-sm">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardDetails.number}
                        onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1 text-sm">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={cardDetails.name}
                        onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-gray-700 mb-1 text-sm">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={cardDetails.expiry}
                          onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1 text-sm">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-3 text-white"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      `Pay $${cartTotal.toFixed(2)}`
                    )}
                  </button>
                </form>
              )}

              {paymentMethod === "paypal" && (
                <button
                  onClick={() => setShowConfirmation(true)}
                  disabled={isProcessing}
                  className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-70"
                >
                  Pay with PayPal
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <ConfirmationModal
        open={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={confirmPayment}
        onCancel={() => setShowConfirmation(false)}
        title="Confirm Payment"
        message={`Are you sure you want to pay $${cartTotal.toFixed(2)}?`}
      />
    </>
  );
};

// ==================== SUCCESS MODAL WITH PDF RECEIPT ====================
const SuccessModal = ({ open, onClose, cartItems, paymentData }) => {
  const receiptRef = useRef(null);
  const totalRooms = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );
  const totalNights = cartItems.reduce(
    (sum, item) => sum + (item.nights || 1),
    0
  );

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.nights * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const generatePDF = async () => {
    if (!receiptRef.current) return;

    try {
      const canvas = await html2canvas(receiptRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false,
        allowTaint: true,
        useCORS: true
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [400, 600]
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
      pdf.save(`receipt-${Date.now()}.pdf`);
      
      toast.success("Receipt downloaded successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Failed to generate PDF receipt");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hidden Receipt for PDF */}
            <div className="hidden">
              <div ref={receiptRef} className="bg-white p-6 font-sans relative overflow-hidden">
                {/* Background Watermark */}
                <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
                  <div className="text-8xl font-bold text-blue-600 transform -rotate-12 scale-150">
                    HOTEL
                  </div>
                </div>

                {/* Receipt Header */}
                <div className="border-b-2 border-gray-300 pb-4 mb-4 relative z-10">
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="text-2xl font-bold text-blue-600">LUXURY HOTEL</h1>
                      <p className="text-xs text-gray-600">123 Luxury Avenue, Beverly Hills, CA 90210</p>
                      <p className="text-xs text-gray-600">Tel: +1 (555) 123-4567</p>
                    </div>
                    <div className="text-right">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">LH</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Receipt Title */}
                <div className="text-center mb-4 relative z-10">
                  <h2 className="text-xl font-bold text-gray-800">PAYMENT RECEIPT</h2>
                  <p className="text-sm text-gray-600">Date: {new Date().toLocaleDateString()}</p>
                  <p className="text-sm text-gray-600">Time: {new Date().toLocaleTimeString()}</p>
                </div>

                {/* Customer Information */}
                <div className="bg-gray-50 p-3 rounded-lg mb-4 relative z-10 border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-700 mb-2 text-left">CUSTOMER DETAILS</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-left">
                      <p className="text-gray-600">Name:</p>
                      <p className="font-medium text-gray-800">{paymentData?.customerName || 'Guest'}</p>
                    </div>
                  </div>
                </div>

                {/* Booking Details */}
                <div className="mb-4 relative z-10">
                  <h3 className="font-semibold text-gray-700 mb-2 text-left border-b border-gray-200 pb-1">BOOKING DETAILS</h3>
                  <div className="space-y-2">
                    {cartItems.map((item, index) => (
                      <div key={index} className="bg-gray-50 p-2 rounded hover:shadow-md transition-shadow border border-gray-200">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-800">{item.name}</p>
                            <p className="text-xs text-gray-600">
                              {item.quantity} room(s) × {item.nights} night(s)
                            </p>
                            <p className="text-xs text-gray-600">${item.price} per night</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-800">${(item.price * item.nights * item.quantity).toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Summary */}
                <div className="border-t-2 border-gray-300 pt-3 mb-4 relative z-10">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="text-gray-800">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Tax (10%):</span>
                    <span className="text-gray-800">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t border-gray-300">
                    <span className="text-gray-800">TOTAL:</span>
                    <span className="text-blue-600">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-center text-xs text-gray-500 border-t border-gray-200 pt-3 relative z-10">
                  <p>Thank you for choosing Luxury Hotel!</p>
                  <p>This is an electronically generated receipt</p>
                </div>
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="w-20 h-20 bg-gradient-to-t from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <svg
                  className="w-12 h-12 text-white"
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
              </motion.div>
              <h2 className="text-3xl font-bold mb-3 text-gray-800">Payment Successful!</h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  You've booked <span className="font-bold text-blue-600">{totalRooms}</span> room{totalRooms > 1 ? "s" : ""} for{" "}
                  <span className="font-bold text-green-600">{totalNights}</span> night{totalNights > 1 ? "s" : ""}.
                </p>
              </div>
              <p className="text-gray-600 mb-4">
                Thank you for your booking. A confirmation has been sent.
              </p>
              
              <button
                onClick={generatePDF}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg mb-3 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Receipt (PDF)
              </button>

              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-gray-500 to-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105"
              >
                Continue Shopping
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ==================== ROOMS SERVICES COMPONENT ====================
const RoomsServices = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusType, setStatusType] = useState("info");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusDetails, setStatusDetails] = useState("");
  const [paymentData, setPaymentData] = useState(null);

  const handleViewDetail = (room) => {
    setSelectedRoom(room);
    setShowDetailModal(true);
  };

  const handleAddToCart = (room) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.id === room.id && item.nights === room.nights,
    );

    if (existingIndex >= 0) {
      const updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += room.quantity || 1;
      setCartItems(updatedCart);
    } else {
      setCartItems((prev) => [
        ...prev,
        {
          ...room,
          quantity: room.quantity || 1,
          nights: room.nights || 1,
        },
      ]);
    }

    setShowDetailModal(false);
    setStatusType("success");
    setStatusMessage("Added to Cart!");
    setStatusDetails(`${room.name} has been added to your cart.`);
    setShowStatusModal(true);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleProceedToPayment = () => {
    setShowCartModal(false);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = (data) => {
    setPaymentData(data);
    setShowPaymentModal(false);
    setShowSuccessModal(true);
    // Clear cart after successful payment
    setCartItems([]);
  };

  const cartTotal =
    cartItems.reduce(
      (sum, item) => sum + item.price * item.nights * item.quantity,
      0,
    ) * 1.1;

  return (
    <div className="py-8 px-4 bg-white min-h-screen">
      <ToastContainer />

      <div className="container mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Rooms
          </span>
          <h2 className="text-3xl font-bold text-gray-800">
            Explore Our <span className="text-blue-600">Luxury Rooms</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium rooms designed for your ultimate comfort and relaxation.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {rooms.map((room, index) => (
            <RoomCard
              key={room.id}
              room={room}
              delay={index * 0.1}
              onViewDetail={handleViewDetail}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Cart Button */}
        {cartItems.length > 0 && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowCartModal(true)}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl z-50 flex items-center gap-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
            <span className="font-medium">View Cart</span>
          </motion.button>
        )}

        {/* Modals */}
        <AnimatePresence>
          {showDetailModal && selectedRoom && (
            <RoomDetailModal
              room={selectedRoom}
              onClose={() => setShowDetailModal(false)}
              onAddToCart={handleAddToCart}
            />
          )}

          {showCartModal && (
            <CartModal
              cartItems={cartItems}
              onClose={() => setShowCartModal(false)}
              onRemoveItem={handleRemoveFromCart}
              onProceedToPayment={handleProceedToPayment}
            />
          )}

          {showPaymentModal && (
            <PaymentModal
              cartTotal={cartTotal}
              cartItems={cartItems}
              onClose={() => setShowPaymentModal(false)}
              onPaymentSuccess={handlePaymentSuccess}
            />
          )}

          {showSuccessModal && (
            <SuccessModal
              open={showSuccessModal}
              onClose={() => setShowSuccessModal(false)}
              cartItems={cartItems}
              paymentData={paymentData}
            />
          )}
        </AnimatePresence>

        <StatusModal
          open={showStatusModal}
          onClose={() => setShowStatusModal(false)}
          type={statusType}
          message={statusMessage}
          details={statusDetails}
        />
      </div>
    </div>
  );
};

// ==================== BOOKING COMPONENT ====================
const Booking = () => {
  const [formData, setFormData] = useState({
    checkInDate: "",
    checkOutDate: "",
    adults: "",
    name: "",
    email: "",
    phone: "",
    children: "",
    roomType: "",
    specialRequests: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusType, setStatusType] = useState("info");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusDetails, setStatusDetails] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const steps = ["Who", "Order", "Confirm"];

  const roomTypes = [
    { value: "standard", label: "Standard Room" },
    { value: "deluxe", label: "Deluxe Room" },
    { value: "suite", label: "Suite" },
    { value: "executive", label: "Executive Suite" },
    { value: "presidential", label: "Presidential Suite" },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (activeStep === 0) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.phone) newErrors.phone = "Phone is required";
    }

    if (activeStep === 1) {
      if (!formData.checkInDate) {
        newErrors.checkInDate = "Check-in date is required";
      }
      if (!formData.checkOutDate) {
        newErrors.checkOutDate = "Check-out date is required";
      } else if (
        formData.checkInDate &&
        new Date(formData.checkOutDate) <= new Date(formData.checkInDate)
      ) {
        newErrors.checkOutDate = "Check-out must be after check-in";
      }
      if (!formData.adults || formData.adults < 1) {
        newErrors.adults = "At least one adult is required";
      }
      if (!formData.roomType) {
        newErrors.roomType = "Room type is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleNext = () => {
    if (validateForm()) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setShowConfirmation(true);
  };

  const confirmSubmit = async () => {
    setShowConfirmation(false);
    setIsSubmitting(true);

    try {
      // Simulate API call
      setTimeout(() => {
        setStatusType("success");
        setStatusMessage("Booking Confirmed!");
        setStatusDetails("A confirmation email has been sent to your inbox.");
        setIsSubmitting(false);
        setShowStatusModal(true);

        setTimeout(() => {
          setFormData({
            checkInDate: "",
            checkOutDate: "",
            adults: "",
            name: "",
            email: "",
            phone: "",
            children: "",
            roomType: "",
            specialRequests: "",
          });
          setActiveStep(0);
        }, 3000);
      }, 1500);
    } catch (error) {
      setStatusType("error");
      setStatusMessage("Submission Error");
      setStatusDetails("Network error. Please try again.");
      setIsSubmitting(false);
      setShowStatusModal(true);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4 text-gray-800">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Full Name *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="John Doe"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Email *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Phone Number *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-4 text-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Check-in Date *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <input
                    type="date"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.checkInDate ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                </div>
                {errors.checkInDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.checkInDate}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Check-out Date *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <input
                    type="date"
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    min={
                      formData.checkInDate ||
                      new Date().toISOString().split("T")[0]
                    }
                    className={`w-full pl-10 pr-4 py-3 border ${errors.checkOutDate ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                </div>
                {errors.checkOutDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.checkOutDate}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Adults *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </span>
                  <select
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.adults ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white`}
                  >
                    <option value="">Select adults</option>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Adult" : "Adults"}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.adults && (
                  <p className="text-red-500 text-sm mt-1">{errors.adults}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Children
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </span>
                  <select
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Select children</option>
                    {[0, 1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Child" : "Children"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Room Type *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </span>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border ${errors.roomType ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white`}
                >
                  <option value="">Select room type</option>
                  {roomTypes.map((room) => (
                    <option key={room.value} value={room.value}>
                      {room.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.roomType && (
                <p className="text-red-500 text-sm mt-1">{errors.roomType}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Special Requests (Optional)
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any special requirements?"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Booking Summary
            </h3>
            <div className="space-y-3 text-gray-800">
              <div className="flex justify-between py-2 border-b border-blue-100">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium text-gray-800">
                  {formData.name}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-blue-100">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium text-gray-800">
                  {formData.email}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-blue-100">
                <span className="text-gray-600">Phone:</span>
                <span className="font-medium text-gray-800">
                  {formData.phone}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-blue-100">
                <span className="text-gray-600">Check-in:</span>
                <span className="font-medium text-gray-800">
                  {formData.checkInDate}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-blue-100">
                <span className="text-gray-600">Check-out:</span>
                <span className="font-medium text-gray-800">
                  {formData.checkOutDate}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-blue-100">
                <span className="text-gray-600">Guests:</span>
                <span className="font-medium text-gray-800">
                  {formData.adults} Adults, {formData.children || 0} Children
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Room Type:</span>
                <span className="font-medium text-gray-800">
                  {roomTypes.find((r) => r.value === formData.roomType)?.label}
                </span>
              </div>
              {formData.specialRequests && (
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Special Requests:</span>
                  <span className="font-medium text-gray-800">
                    {formData.specialRequests}
                  </span>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-center text-white mb-2">
              Book Your Stay
            </h1>
            <p className="text-xl text-center text-white/90 mb-8">
              Experience luxury and comfort at its finest
            </p>

            <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto">
              {/* Stepper */}
              <div className="flex items-center mb-8">
                {steps.map((label, index) => (
                  <React.Fragment key={label}>
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                          activeStep >= index
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-gray-300 text-gray-400"
                        }`}
                      >
                        {activeStep > index ? (
                          <svg
                            className="w-5 h-5"
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
                        ) : (
                          index + 1
                        )}
                      </div>
                      <span
                        className={`ml-2 text-sm font-medium ${
                          activeStep >= index
                            ? "text-gray-900"
                            : "text-gray-400"
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`flex-1 h-1 mx-4 transition-all ${
                          activeStep > index ? "bg-blue-600" : "bg-gray-300"
                        }`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {getStepContent(activeStep)}

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center ${
                      activeStep === 0
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "border-2 border-gray-300 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    Back
                  </button>

                  {activeStep === steps.length - 1 ? (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg hover:from-green-700 hover:to-green-600 transition-all transform hover:scale-105 font-medium flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 mr-3 text-white"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Confirm Booking
                          <svg
                            className="w-5 h-5 ml-2"
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
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-medium flex items-center"
                    >
                      Next
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <StatusModal
        open={showStatusModal}
        onClose={() => setShowStatusModal(false)}
        type={statusType}
        message={statusMessage}
        details={statusDetails}
      />

      <ConfirmationModal
        open={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={confirmSubmit}
        onCancel={() => setShowConfirmation(false)}
        title="Confirm Booking"
        message="Please confirm your booking details. A confirmation email will be sent to you."
      />
    </>
  );
};

// ==================== CONTACT SECTION ====================
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusType, setStatusType] = useState("info");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusDetails, setStatusDetails] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      setTimeout(() => {
        setStatusType("success");
        setStatusMessage("Message Sent Successfully!");
        setStatusDetails("We will get back to you within 24 hours.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setIsSubmitting(false);
        setShowStatusModal(true);
      }, 1500);
    } catch (error) {
      setStatusType("error");
      setStatusMessage("Submission Error");
      setStatusDetails("Network error. Please try again.");
      setIsSubmitting(false);
      setShowStatusModal(true);
    }
  };

  return (
    <>
      <div className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Contact Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get In <span className="text-blue-400">Touch</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Have questions or need assistance? Our team is here to help you
                with all your inquiries.
              </p>

              <div className="space-y-6">
                <ContactInfoCard
                  icon={
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  }
                  title="Phone"
                  items={["+250 (78) 794-4577", "+250 (72) 755-6145"]}
                />
                <ContactInfoCard
                  icon={
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  }
                  title="Email"
                  items={["info@hotel.com", "support@hotel.com"]}
                />
                <ContactInfoCard
                  icon={
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  }
                  title="Address"
                  items={[
                    "123 Luxury Street",
                    "Hospitality District",
                    "Kigali, KG 191",
                  ]}
                />
                <ContactInfoCard
                  icon={
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  }
                  title="Working Hours"
                  items={[
                    "Monday - Friday: 9:00 - 18:00",
                    "Saturday: 10:00 - 16:00",
                    "Sunday: Closed",
                  ]}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Full Name *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Email *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </span>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Phone Number
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                          placeholder="+1 (123) 456-7890"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                      placeholder="Your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-3 text-white"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <StatusModal
        open={showStatusModal}
        onClose={() => setShowStatusModal(false)}
        type={statusType}
        message={statusMessage}
        details={statusDetails}
      />
    </>
  );
};

const ContactInfoCard = ({ icon, title, items }) => {
  return (
    <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
      <div className="bg-blue-600/20 p-3 rounded-full">
        <div className="text-blue-400">{icon}</div>
      </div>
      <div>
        <h3 className="font-semibold text-white text-lg mb-2">{title}</h3>
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li key={index} className="text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// ==================== MAIN HERO COMPONENT ====================
export const Hero = () => {
  const [showRoomsModal, setShowRoomsModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleButtonClick = (action) => {
    if (action === "rooms") {
      setShowRoomsModal(true);
    } else if (action === "book") {
      setShowBookingModal(true);
    } else if (action === "contact") {
      setShowContactModal(true);
    }
  };

  return (
    <>
      <div className="w-full mt-0 mb-1 rounded-2xl overflow-hidden relative">
        <Carousel
          infiniteLoop
          autoPlay
          showThumbs={false}
          showStatus={false}
          interval={5000}
          transitionTime={1000}
          onChange={(index) => setCurrentSlide(index)}
          className="h-full"
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="relative">
              <img
                src={item.imgSrc}
                alt={`Slide ${index + 1}`}
                className="w-full min-h-screen object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                  <AnimatePresence mode="wait">
                    {currentSlide === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl text-white"
                      >
                        <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                          {item.subtitle}
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                          {item.title}
                        </h1>
                        <div className="flex flex-wrap gap-4">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleButtonClick("rooms")}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                          >
                            Our Rooms
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleButtonClick("book")}
                            className="bg-gradient-to-r from-green-600 to-green-500 text-white font-medium py-3 px-8 rounded-lg hover:from-green-700 hover:to-green-600 transition-all shadow-lg hover:shadow-xl"
                          >
                            Book Now
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleButtonClick("contact")}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-8 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
                          >
                            Contact Us
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showRoomsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 overflow-y-auto"
            onClick={() => setShowRoomsModal(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="min-h-screen flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl w-full max-w-7xl max-h-[90vh] overflow-y-auto relative">
                <button
                  onClick={() => setShowRoomsModal(false)}
                  className="absolute top-4 right-4 z-10 bg-gradient-to-t from-red-500 to-red-700 text-white rounded-full p-2 shadow-lg hover:from-red-600 hover:to-red-800 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <RoomsServices />
              </div>
            </motion.div>
          </motion.div>
        )}

        {showBookingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 overflow-y-auto"
            onClick={() => setShowBookingModal(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="min-h-screen flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="absolute top-4 right-4 z-10 bg-gradient-to-t from-red-500 to-red-700 text-white rounded-full p-2 shadow-lg hover:from-red-600 hover:to-red-800 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <Booking />
              </div>
            </motion.div>
          </motion.div>
        )}

        {showContactModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 overflow-y-auto"
            onClick={() => setShowContactModal(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="min-h-screen flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
                <button
                  onClick={() => setShowContactModal(false)}
                  className="absolute top-4 right-4 z-10 bg-gradient-to-t from-red-500 to-red-700 text-white rounded-full p-2 shadow-lg hover:from-red-600 hover:to-red-800 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <ContactSection />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
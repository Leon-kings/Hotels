/* eslint-disable no-unused-vars */

// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Button, Typography, Box } from "@mui/material";
// import { carouselItems } from "../../assets/data/data";
// import { Link } from "react-router-dom";

// export const Hero = () => {
//   return (
//     <>
//       <div className="w-full mt-0 mb-1 rounded-2xl">
//         <Box sx={{ width: "100%", position: "relative" }}>
//           <Carousel infiniteLoop autoPlay>
//             {carouselItems.map((item, index) => (
//               <Box key={index} sx={{ position: "relative", height: "70vh" }}>
//                 <Box
//                   component="img"
//                   src={item.imgSrc}
//                   alt=''
//                   sx={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     bottom: 0,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     textAlign: "center",
//                     color: "white",
//                     bgcolor: "rgba(0,0,0,0.4)",
//                     p: 3,
//                   }}
//                 >
//                   <Box sx={{ maxWidth: 700 }}>
//                     <Typography
//                       variant="subtitle1"
//                       sx={{
//                         textTransform: "uppercase",
//                         mb: 3,
//                         fontWeight: "bold",
//                         letterSpacing: 2,
//                       }}
//                     >
//                       {item.subtitle}
//                     </Typography>
//                     <Typography
//                       variant="h2"
//                       component="h1"
//                       sx={{
//                         mb: 4,
//                         fontSize: { xs: "2rem", md: "3rem" },
//                         fontWeight: "bold",
//                       }}
//                     >
//                       {item.title}
//                     </Typography>
//                     <Box
//                       sx={{ display: "flex", gap: 2, justifyContent: "center" }}
//                     >
//                       {item.buttons.map((button, btnIndex) => (
//                         <Link key={btnIndex} to={button.href}>
//                           <Button
//                             variant={button.variant}
//                             color={button.color}
//                             sx={{
//                               py: { xs: 1, md: 2 },
//                               px: { xs: 2, md: 4 },
//                               fontSize: { xs: "0.875rem", md: "1rem" },
//                             }}
//                           >
//                             {button.text}
//                           </Button>
//                         </Link>
//                       ))}
//                     </Box>
//                   </Box>
//                 </Box>
//               </Box>
//             ))}
//           </Carousel>
//         </Box>
//       </div>
//     </>
//   );
// };

// import React, { useState, useEffect } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { motion, AnimatePresence } from "framer-motion";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { carouselItems } from "../../assets/data/data";

// // ==================== CAROUSEL DATA ====================

// // ==================== ROOM DATA ====================
// const initialRooms = [
//   {
//     id: 1,
//     name: "Deluxe King Room",
//     price: 199,
//     image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 1,
//     baths: 1,
//     description: "Spacious room with king-sized bed, luxury amenities, and city view.",
//     size: 350,
//     rating: 5
//   },
//   {
//     id: 2,
//     name: "Executive Suite",
//     price: 299,
//     image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 2,
//     baths: 2,
//     description: "Luxurious suite with separate living area, perfect for business travelers.",
//     size: 550,
//     rating: 5
//   },
//   {
//     id: 3,
//     name: "Family Room",
//     price: 249,
//     image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
//     beds: 3,
//     baths: 2,
//     description: "Perfect for families with multiple beds and ample space.",
//     size: 450,
//     rating: 5
//   }
// ];

// const additionalRooms = [
//   {
//     id: 4,
//     name: "Presidential Suite",
//     price: 599,
//     image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 3,
//     baths: 3,
//     description: "The ultimate luxury experience with panoramic views and private butler service.",
//     size: 1200,
//     rating: 5
//   },
//   {
//     id: 5,
//     name: "Garden View Room",
//     price: 179,
//     image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 1,
//     baths: 1,
//     description: "Peaceful room overlooking our beautiful gardens.",
//     size: 300,
//     rating: 4
//   },
//   {
//     id: 6,
//     name: "Penthouse Suite",
//     price: 799,
//     image: "https://images.unsplash.com/photo-1598928501498-c04a8833f51e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 4,
//     baths: 4,
//     description: "Top-floor luxury with private terrace and jacuzzi.",
//     size: 1500,
//     rating: 5
//   }
// ];

// // ==================== ROOM CARD COMPONENT ====================
// const RoomCard = ({ room, delay, onViewDetail, onAddToCart }) => {
//   const [quantity, setQuantity] = useState(1);
//   const [isHovered, setIsHovered] = useState(false);

//   const handleQuantityChange = (e) => {
//     const value = parseInt(e.target.value);
//     if (!isNaN(value) && value > 0) {
//       setQuantity(value);
//     }
//   };

//   const incrementQuantity = () => {
//     setQuantity((prev) => prev + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity((prev) => prev - 1);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="col-span-12 md:col-span-6 lg:col-span-4"
//     >
//       <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
//         <div className="relative overflow-hidden h-64">
//           <img
//             className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//             src={room.image}
//             alt={room.name}
//           />
//           <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full font-bold shadow-lg">
//             ${room.price}<span className="text-sm font-normal">/night</span>
//           </div>

//           {/* Hover Overlay with Actions */}
//           <AnimatePresence>
//             {isHovered && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center gap-4"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => onViewDetail(room)}
//                   className="bg-white text-blue-600 p-4 rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-lg"
//                   title="View Details"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                   </svg>
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => onAddToCart({...room, quantity})}
//                   className="bg-white text-green-600 p-4 rounded-full hover:bg-green-600 hover:text-white transition-colors shadow-lg"
//                   title="Add to Cart"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                   </svg>
//                 </motion.button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         <div className="p-6 flex-grow">
//           <div className="flex justify-between items-center mb-3">
//             <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
//             <div className="flex text-yellow-400">
//               {[...Array(5)].map((_, i) => (
//                 <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-2 mb-4">
//             <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
//               <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//               </svg>
//               {room.beds} Bed{room.beds > 1 ? 's' : ''}
//             </span>
//             <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
//               <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//               </svg>
//               {room.baths} Bath{room.baths > 1 ? 's' : ''}
//             </span>
//             <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
//               <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
//               </svg>
//               {room.size} sq.ft
//             </span>
//           </div>

//           <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>

//           <div className="flex items-center justify-between mt-auto">
//             <div className="flex items-center bg-gray-100 rounded-lg">
//               <button
//                 onClick={decrementQuantity}
//                 className="px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-200 rounded-l-lg transition-colors"
//               >
//                 -
//               </button>
//               <input
//                 type="number"
//                 min="1"
//                 value={quantity}
//                 onChange={handleQuantityChange}
//                 className="w-12 text-center bg-transparent border-none py-2 focus:outline-none"
//               />
//               <button
//                 onClick={incrementQuantity}
//                 className="px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-200 rounded-r-lg transition-colors"
//               >
//                 +
//               </button>
//             </div>
//             <div className="text-right">
//               <p className="text-sm text-gray-500">Total</p>
//               <p className="font-bold text-blue-600">${(room.price * quantity).toFixed(2)}</p>
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

//   const handleNightsChange = (e) => {
//     const value = parseInt(e.target.value);
//     if (!isNaN(value) && value > 0) {
//       setNights(value);
//     }
//   };

//   const totalPrice = room.price * nights * quantity;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: 50, opacity: 0 }}
//         className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="relative">
//           <img
//             src={room.image}
//             alt={room.name}
//             className="w-full h-80 object-cover rounded-t-2xl"
//           />
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
//           >
//             <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//           <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
//             ${room.price}<span className="text-sm font-normal">/night</span>
//           </div>
//         </div>

//         <div className="p-8">
//           <div className="flex justify-between items-start mb-6">
//             <h2 className="text-3xl font-bold text-gray-800">{room.name}</h2>
//           </div>

//           <div className="flex flex-wrap gap-4 mb-8">
//             <div className="bg-blue-50 px-4 py-2 rounded-lg flex items-center">
//               <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//               </svg>
//               <span className="font-semibold">{room.beds} Bed{room.beds > 1 ? 's' : ''}</span>
//             </div>
//             <div className="bg-blue-50 px-4 py-2 rounded-lg flex items-center">
//               <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//               </svg>
//               <span className="font-semibold">{room.baths} Bath{room.baths > 1 ? 's' : ''}</span>
//             </div>
//             <div className="bg-blue-50 px-4 py-2 rounded-lg flex items-center">
//               <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
//               </svg>
//               <span className="font-semibold">{room.size} sq.ft</span>
//             </div>
//           </div>

//           <div className="mb-8">
//             <h3 className="text-xl font-semibold mb-3">Description</h3>
//             <p className="text-gray-600 leading-relaxed">{room.description}</p>
//           </div>

//           <div className="border-t pt-8">
//             <h3 className="text-xl font-semibold mb-6">Booking Details</h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//               <div>
//                 <label className="block text-gray-700 mb-2 font-medium">Number of Nights</label>
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
//                     onChange={handleNightsChange}
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
//                 <label className="block text-gray-700 mb-2 font-medium">Number of Rooms</label>
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
//                     onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
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

//             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-8">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <p className="text-gray-600 mb-1">Price Breakdown</p>
//                   <p className="text-sm text-gray-500">
//                     ${room.price} × {nights} night{nights > 1 ? 's' : ''} × {quantity} room{quantity > 1 ? 's' : ''}
//                   </p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-2xl font-bold text-blue-600">${totalPrice.toFixed(2)}</p>
//                   <p className="text-sm text-gray-500">Total</p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-end gap-4">
//               <button
//                 onClick={onClose}
//                 className="px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => onAddToCart({ ...room, nights, quantity, totalPrice })}
//                 className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-105 font-medium shadow-lg flex items-center"
//               >
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// // ==================== CART MODAL ====================
// const CartModal = ({ cartItems, onClose, onRemoveItem, onProceedToPayment }) => {
//   const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
//   const tax = subtotal * 0.1;
//   const total = subtotal + tax;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: 50, opacity: 0 }}
//         className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-colors"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           {cartItems.length === 0 ? (
//             <div className="text-center py-12">
//               <svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//               <p className="text-gray-500 text-lg">Your cart is empty</p>
//             </div>
//           ) : (
//             <>
//               <div className="divide-y max-h-96 overflow-y-auto">
//                 {cartItems.map((item, index) => (
//                   <div key={index} className="py-4 flex items-center">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-20 h-20 object-cover rounded-lg"
//                     />
//                     <div className="ml-4 flex-grow">
//                       <h3 className="font-semibold text-gray-800">{item.name}</h3>
//                       <p className="text-sm text-gray-500">
//                         {item.quantity} room{item.quantity > 1 ? 's' : ''} × {item.nights} night{item.nights > 1 ? 's' : ''}
//                       </p>
//                       <p className="text-sm font-medium text-blue-600">${item.price}/night</p>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-bold text-gray-800">${item.totalPrice.toFixed(2)}</p>
//                       <button
//                         onClick={() => onRemoveItem(index)}
//                         className="text-red-500 text-sm hover:text-red-700 mt-1"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t mt-6 pt-6">
//                 <div className="space-y-2 mb-4">
//                   <div className="flex justify-between text-gray-600">
//                     <span>Subtotal</span>
//                     <span>${subtotal.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between text-gray-600">
//                     <span>Tax (10%)</span>
//                     <span>${tax.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between font-bold text-lg pt-2 border-t">
//                     <span>Total</span>
//                     <span className="text-blue-600">${total.toFixed(2)}</span>
//                   </div>
//                 </div>

//                 <button
//                   onClick={onProceedToPayment}
//                   className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white font-medium py-4 px-6 rounded-lg hover:from-green-700 hover:to-green-600 transition-all transform hover:scale-105 shadow-lg"
//                 >
//                   Proceed to Payment
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// // ==================== PAYMENT MODAL ====================
// const PaymentModal = ({ cartTotal, cartItems, onClose, onPaymentSuccess }) => {
//   const [paymentMethod, setPaymentMethod] = useState("credit");
//   const [cardDetails, setCardDetails] = useState({
//     number: "",
//     name: "",
//     expiry: "",
//     cvv: "",
//     email: "",
//   });
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsProcessing(true);

//     // Simulate payment processing
//     setTimeout(() => {
//       setIsProcessing(false);
//       onPaymentSuccess();
//     }, 2000);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: 50, opacity: 0 }}
//         className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-bold text-gray-800">Complete Payment</h2>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-colors"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           {error && (
//             <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg">
//               {error}
//             </div>
//           )}

//           <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
//             <h3 className="font-medium mb-3 text-gray-700">Order Summary</h3>
//             <div className="space-y-2">
//               {cartItems.map((item, index) => (
//                 <div key={index} className="flex justify-between text-sm">
//                   <span className="text-gray-600">{item.quantity}x {item.name}</span>
//                   <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
//                 </div>
//               ))}
//               <div className="border-t pt-2 mt-2">
//                 <div className="flex justify-between font-bold">
//                   <span>Total</span>
//                   <span className="text-blue-600">${cartTotal.toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label className="block text-gray-700 mb-2 font-medium">Payment Method</label>
//               <div className="flex gap-4">
//                 <button
//                   type="button"
//                   className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
//                     paymentMethod === "credit"
//                       ? "border-blue-600 bg-blue-50 text-blue-600"
//                       : "border-gray-200 text-gray-600 hover:border-gray-300"
//                   }`}
//                   onClick={() => setPaymentMethod("credit")}
//                 >
//                   Credit Card
//                 </button>
//                 <button
//                   type="button"
//                   className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
//                     paymentMethod === "paypal"
//                       ? "border-blue-600 bg-blue-50 text-blue-600"
//                       : "border-gray-200 text-gray-600 hover:border-gray-300"
//                   }`}
//                   onClick={() => setPaymentMethod("paypal")}
//                 >
//                   PayPal
//                 </button>
//               </div>
//             </div>

//             {paymentMethod === "credit" && (
//               <>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 mb-1">Card Number</label>
//                   <input
//                     type="text"
//                     placeholder="1234 5678 9012 3456"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     maxLength="19"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-gray-700 mb-1">Cardholder Name</label>
//                   <input
//                     type="text"
//                     placeholder="John Doe"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     required
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                   <div>
//                     <label className="block text-gray-700 mb-1">Expiry Date</label>
//                     <input
//                       type="text"
//                       placeholder="MM/YY"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       maxLength="5"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-1">CVV</label>
//                     <input
//                       type="text"
//                       placeholder="123"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       maxLength="4"
//                       required
//                     />
//                   </div>
//                 </div>
//               </>
//             )}

//             <button
//               type="submit"
//               disabled={isProcessing}
//               className={`w-full py-4 px-6 rounded-lg font-medium text-white transition-all transform hover:scale-105 ${
//                 isProcessing
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
//               }`}
//             >
//               {isProcessing ? (
//                 <div className="flex items-center justify-center">
//                   <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                   </svg>
//                   Processing...
//                 </div>
//               ) : (
//                 `Pay $${cartTotal.toFixed(2)}`
//               )}
//             </button>
//           </form>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// // ==================== SUCCESS MODAL ====================
// const SuccessModal = ({ onClose }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.8, opacity: 0 }}
//         className="bg-white rounded-2xl max-w-md w-full p-8 text-center"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//           <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//           </svg>
//         </div>
//         <h3 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h3>
//         <p className="text-gray-600 mb-6">
//           Thank you for your booking. A confirmation has been sent to your email.
//         </p>
//         <button
//           onClick={onClose}
//           className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all transform hover:scale-105"
//         >
//           Close
//         </button>
//       </motion.div>
//     </motion.div>
//   );
// };

// // ==================== ROOMS SERVICES COMPONENT ====================
// const RoomsServices = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [rooms, setRooms] = useState(initialRooms);
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const [showDetailModal, setShowDetailModal] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [showCartModal, setShowCartModal] = useState(false);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   const handleViewMore = () => {
//     if (showAll) {
//       setRooms(initialRooms);
//     } else {
//       setRooms([...initialRooms, ...additionalRooms]);
//     }
//     setShowAll(!showAll);
//   };

//   const handleViewDetail = (room) => {
//     setSelectedRoom(room);
//     setShowDetailModal(true);
//   };

//   const handleAddToCart = (room) => {
//     const existingIndex = cartItems.findIndex(
//       (item) => item.id === room.id && item.nights === room.nights
//     );

//     if (existingIndex >= 0) {
//       const updatedCart = [...cartItems];
//       updatedCart[existingIndex].quantity += room.quantity || 1;
//       updatedCart[existingIndex].totalPrice =
//         updatedCart[existingIndex].price *
//         updatedCart[existingIndex].nights *
//         updatedCart[existingIndex].quantity;
//       setCartItems(updatedCart);
//     } else {
//       setCartItems((prev) => [
//         ...prev,
//         {
//           ...room,
//           quantity: room.quantity || 1,
//           nights: room.nights || 1,
//           totalPrice: room.price * (room.nights || 1) * (room.quantity || 1),
//         },
//       ]);
//     }

//     setShowDetailModal(false);
//     toast.success("Added to cart!", {
//       position: "top-right",
//       autoClose: 2000,
//     });
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
//     setShowSuccessModal(true);
//     setCartItems([]);
//   };

//   const cartTotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0) * 1.1;

//   return (
//     <div className="py-8 px-4">
//       <ToastContainer />

//       <div className="text-center mb-8">
//         <h6 className="text-blue-600 uppercase font-semibold tracking-wider mb-2">
//           Our Rooms
//         </h6>
//         <h2 className="text-3xl font-bold text-gray-800">
//           Explore Our <span className="text-blue-600">Luxury Rooms</span>
//         </h2>
//       </div>

//       <div className="grid grid-cols-12 gap-6">
//         {rooms.map((room, index) => (
//           <RoomCard
//             key={room.id}
//             room={room}
//             delay={index * 0.1}
//             onViewDetail={handleViewDetail}
//             onAddToCart={handleAddToCart}
//           />
//         ))}
//       </div>

//       <div className="text-center mt-8">
//         <button
//           onClick={handleViewMore}
//           className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
//         >
//           {showAll ? "Show Less" : "View More Rooms"}
//         </button>
//       </div>

//       {/* Cart Button */}
//       {cartItems.length > 0 && (
//         <motion.button
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setShowCartModal(true)}
//           className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 rounded-full shadow-2xl z-50 flex items-center gap-2"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//           </svg>
//           <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
//             {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
//           </span>
//         </motion.button>
//       )}

//       {/* Modals */}
//       <AnimatePresence>
//         {showDetailModal && selectedRoom && (
//           <RoomDetailModal
//             room={selectedRoom}
//             onClose={() => setShowDetailModal(false)}
//             onAddToCart={handleAddToCart}
//           />
//         )}

//         {showCartModal && (
//           <CartModal
//             cartItems={cartItems}
//             onClose={() => setShowCartModal(false)}
//             onRemoveItem={handleRemoveFromCart}
//             onProceedToPayment={handleProceedToPayment}
//           />
//         )}

//         {showPaymentModal && (
//           <PaymentModal
//             cartTotal={cartTotal}
//             cartItems={cartItems}
//             onClose={() => setShowPaymentModal(false)}
//             onPaymentSuccess={handlePaymentSuccess}
//           />
//         )}

//         {showSuccessModal && (
//           <SuccessModal onClose={() => setShowSuccessModal(false)} />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // ==================== BOOKING MODAL ====================
// const BookingModal = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     checkIn: "",
//     checkOut: "",
//     guests: 2,
//     rooms: 1,
//     specialRequests: ""
//   });

//   const [step, setStep] = useState(1);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (step === 1) {
//       setStep(2);
//     } else {
//       setSubmitted(true);
//       setTimeout(() => {
//         onClose();
//         setSubmitted(false);
//         setStep(1);
//       }, 3000);
//     }
//   };

//   if (submitted) {
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.8, opacity: 0 }}
//           className="bg-white rounded-2xl max-w-md w-full p-8 text-center"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//             <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//             </svg>
//           </div>
//           <h3 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h3>
//           <p className="text-gray-600 mb-6">
//             Thank you for choosing our hotel. A confirmation email has been sent to {formData.email}
//           </p>
//           <button
//             onClick={onClose}
//             className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all transform hover:scale-105"
//           >
//             Close
//           </button>
//         </motion.div>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: 50, opacity: 0 }}
//         className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">Book Your Stay</h2>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-colors"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           {/* Progress Steps */}
//           <div className="flex items-center mb-8">
//             <div className={`flex items-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
//               <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
//                 step >= 1 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300'
//               }`}>
//                 1
//               </div>
//               <span className="ml-2 text-sm font-medium">Details</span>
//             </div>
//             <div className={`flex-1 h-1 mx-4 transition-all ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
//             <div className={`flex items-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
//               <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
//                 step >= 2 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300'
//               }`}>
//                 2
//               </div>
//               <span className="ml-2 text-sm font-medium">Confirm</span>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit}>
//             {step === 1 ? (
//               <motion.div
//                 initial={{ x: -20, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: 20, opacity: 0 }}
//                 className="space-y-4"
//               >
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-gray-700 mb-1 font-medium">Full Name *</label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="John Doe"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-1 font-medium">Email *</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="john@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-1 font-medium">Phone Number *</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="+1 (123) 456-7890"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-gray-700 mb-1 font-medium">Check-in Date *</label>
//                     <input
//                       type="date"
//                       name="checkIn"
//                       value={formData.checkIn}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-1 font-medium">Check-out Date *</label>
//                     <input
//                       type="date"
//                       name="checkOut"
//                       value={formData.checkOut}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-gray-700 mb-1 font-medium">Number of Guests</label>
//                     <select
//                       name="guests"
//                       value={formData.guests}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       {[1,2,3,4,5,6].map(num => (
//                         <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
//                       ))}
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-1 font-medium">Number of Rooms</label>
//                     <select
//                       name="rooms"
//                       value={formData.rooms}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       {[1,2,3,4,5].map(num => (
//                         <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-1 font-medium">Special Requests (Optional)</label>
//                   <textarea
//                     name="specialRequests"
//                     value={formData.specialRequests}
//                     onChange={handleChange}
//                     rows="3"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Any special requirements?"
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-4 px-6 rounded-lg transition-all transform hover:scale-105 text-lg mt-4"
//                 >
//                   Continue to Confirmation
//                 </button>
//               </motion.div>
//             ) : (
//               <motion.div
//                 initial={{ x: 20, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: -20, opacity: 0 }}
//                 className="space-y-6"
//               >
//                 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
//                   <h3 className="text-lg font-semibold mb-4 text-gray-800">Booking Summary</h3>
//                   <div className="space-y-3">
//                     <div className="flex justify-between py-2 border-b border-blue-100">
//                       <span className="text-gray-600">Name:</span>
//                       <span className="font-medium text-gray-800">{formData.name}</span>
//                     </div>
//                     <div className="flex justify-between py-2 border-b border-blue-100">
//                       <span className="text-gray-600">Email:</span>
//                       <span className="font-medium text-gray-800">{formData.email}</span>
//                     </div>
//                     <div className="flex justify-between py-2 border-b border-blue-100">
//                       <span className="text-gray-600">Phone:</span>
//                       <span className="font-medium text-gray-800">{formData.phone}</span>
//                     </div>
//                     <div className="flex justify-between py-2 border-b border-blue-100">
//                       <span className="text-gray-600">Check-in:</span>
//                       <span className="font-medium text-gray-800">{formData.checkIn}</span>
//                     </div>
//                     <div className="flex justify-between py-2 border-b border-blue-100">
//                       <span className="text-gray-600">Check-out:</span>
//                       <span className="font-medium text-gray-800">{formData.checkOut}</span>
//                     </div>
//                     <div className="flex justify-between py-2 border-b border-blue-100">
//                       <span className="text-gray-600">Guests:</span>
//                       <span className="font-medium text-gray-800">{formData.guests}</span>
//                     </div>
//                     <div className="flex justify-between py-2">
//                       <span className="text-gray-600">Rooms:</span>
//                       <span className="font-medium text-gray-800">{formData.rooms}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <button
//                     type="button"
//                     onClick={() => setStep(1)}
//                     className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-4 px-6 rounded-lg transition-all"
//                   >
//                     Back
//                   </button>
//                   <button
//                     type="submit"
//                     className="flex-1 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-medium py-4 px-6 rounded-lg transition-all transform hover:scale-105"
//                   >
//                     Confirm Booking
//                   </button>
//                 </div>
//               </motion.div>
//             )}
//           </form>
//         </div>
//       </motion.div>
//     </motion.div>
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
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitSuccess(true);
//       setTimeout(() => setSubmitSuccess(false), 3000);
//       setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
//     }, 1500);
//   };

//   return (
//     <div className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl text-white">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h6 className="text-blue-400 uppercase font-semibold tracking-wider mb-2">
//             Contact Us
//           </h6>
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Get In <span className="text-blue-400">Touch</span>
//           </h2>
//           <p className="text-gray-300 max-w-2xl mx-auto mt-4">
//             Have questions or need assistance? Our team is here to help you with all your inquiries.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="bg-white rounded-2xl shadow-2xl p-8"
//           >
//             {submitSuccess ? (
//               <div className="text-center py-8">
//                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   Message Sent Successfully!
//                 </h3>
//                 <p className="text-gray-600">
//                   Thank you for contacting us. We'll get back to you soon.
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-gray-700 mb-1 font-medium">Full Name *</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-gray-700 mb-1 font-medium">Email *</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
//                       placeholder="john@example.com"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-1 font-medium">Phone Number</label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
//                       placeholder="+1 (123) 456-7890"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-1 font-medium">Subject *</label>
//                   <input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
//                     placeholder="What's this about?"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-1 font-medium">Message *</label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={5}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
//                     placeholder="Your message here..."
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-4 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
//                 >
//                   {isSubmitting ? (
//                     <div className="flex items-center justify-center">
//                       <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                       </svg>
//                       Sending...
//                     </div>
//                   ) : (
//                     "Send Message"
//                   )}
//                 </button>
//               </form>
//             )}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="space-y-6"
//           >
//             <ContactInfoCard
//               icon={<svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
//               title="Phone"
//               items={["+250 (78) 794-4577", "+250 (72) 755-6145"]}
//             />

//             <ContactInfoCard
//               icon={<svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
//               title="Email"
//               items={["info@hotel.com", "support@hotel.com"]}
//             />

//             <ContactInfoCard
//               icon={<svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
//               title="Address"
//               items={["123 Luxury Street", "Hospitality District", "Kigali, KG 191"]}
//             />

//             <ContactInfoCard
//               icon={<svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
//               title="Working Hours"
//               items={["Monday - Friday: 9:00 - 18:00", "Saturday: 10:00 - 16:00", "Sunday: Closed"]}
//             />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ContactInfoCard = ({ icon, title, items }) => {
//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start border/20"
//     >
//       <div className="bg-blue-500/20 p-3 rounded-full mr-4">
//         {icon}
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

// // ==================== MAIN HERO COMPONENT ====================
// export const Hero = () => {
//   const [showRoomsModal, setShowRoomsModal] = useState(false);
//   const [showBookingModal, setShowBookingModal] = useState(false);
//   const [showContactModal, setShowContactModal] = useState(false);

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
//       <div className="w-full mt-0 mb-1 rounded-2xl overflow-hidden">
//         <div className="relative">
//           <Carousel
//             infiniteLoop
//             autoPlay
//             showThumbs={false}
//             showStatus={false}
//             interval={5000}
//             transitionTime={1000}
//             className="hero-carousel"
//           >
//             {carouselItems.map((item, index) => (
//               <div key={index} className="relative h-[70vh] lg:h-[80vh]">
//                 <img
//                   src={item.imgSrc}
//                   alt={`Slide ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center">
//                   <div className="container mx-auto px-4 md:px-6 lg:px-8">
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.8, delay: 0.3 }}
//                       className="max-w-2xl text-white"
//                     >
//                       <p className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 text-blue-300 font-semibold">
//                         {item.subtitle}
//                       </p>
//                       <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//                         {item.title}
//                       </h1>
//                       <div className="flex flex-wrap gap-4">
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() => handleButtonClick("rooms")}
//                           className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl"
//                         >
//                           Our Rooms
//                         </motion.button>
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() => handleButtonClick("book")}
//                           className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-lg border-2 transition-all backdrop-blur-sm"
//                         >
//                           Book Now
//                         </motion.button>
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() => handleButtonClick("contact")}
//                           className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-lg border-2 transition-all backdrop-blur-sm"
//                         >
//                           Contact Us
//                         </motion.button>
//                       </div>
//                     </motion.div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Carousel>
//         </div>
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
//                   className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
//                 >
//                   <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//                 <RoomsServices />
//               </div>
//             </motion.div>
//           </motion.div>
//         )}

//         {showBookingModal && (
//           <BookingModal onClose={() => setShowBookingModal(false)} />
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
//                   className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
//                 >
//                   <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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

// import React, { useState, useEffect } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   Paper,
//   Typography,
//   Alert,
//   CircularProgress,
//   IconButton,
//   InputAdornment,
//   Grid,
//   Divider,
//   Chip,
//   Avatar,
//   Rating,
//   Stepper,
//   Step,
//   StepLabel,
//   Card,
//   CardContent,
//   CardMedia,
//   CardActions,
//   Badge,
//   Tooltip,
//   Fade,
//   Zoom,
//   Grow,
//   Slide,
//   Collapse,
// } from "@mui/material";
// import {
//   CalendarToday,
//   People,
//   ChildCare,
//   Hotel,
//   Person,
//   Email,
//   Phone,
//   LocationOn,
//   AccessTime,
//   CreditCard,
//   Payment,
//   CheckCircle,
//   Cancel,
//   Error,
//   Close,
//   ArrowForward,
//   ArrowBack,
//   Bed,
//   Bathtub,
//   SquareFoot,
//   Star,
//   ShoppingCart,
//   Remove,
//   Add,
//   Visibility,
//   Done,
//   Warning,
//   Info,
// } from "@mui/icons-material";

// // ==================== CAROUSEL DATA ====================
// const carouselItems = [
//   {
//     imgSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     subtitle: "Luxury Redefined",
//     title: "Experience Ultimate Comfort & Elegance",
//     buttons: [
//       { text: "Our Rooms", href: "#", variant: "primary", action: "rooms" },
//       { text: "Book Now", href: "#", variant: "outline", action: "book" }
//     ]
//   },
//   {
//     imgSrc: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     subtitle: "5-Star Service",
//     title: "Where Every Moment Feels Special",
//     buttons: [
//       { text: "Our Rooms", href: "#", variant: "primary", action: "rooms" },
//       { text: "Book Now", href: "#", variant: "outline", action: "book" }
//     ]
//   },
//   {
//     imgSrc: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     subtitle: "Exclusive Offers",
//     title: "Book Now & Get 20% Off Your Stay",
//     buttons: [
//       { text: "Our Rooms", href: "#", variant: "primary", action: "rooms" },
//       { text: "Book Now", href: "#", variant: "outline", action: "book" }
//     ]
//   }
// ];

// // ==================== ROOM DATA ====================
// const rooms = [
//   {
//     id: 1,
//     name: "Deluxe King Room",
//     price: 199,
//     image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 1,
//     baths: 1,
//     description: "Spacious room with king-sized bed, luxury amenities, and city view.",
//     size: 350,
//     rating: 5,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning"]
//   },
//   {
//     id: 2,
//     name: "Executive Suite",
//     price: 299,
//     image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 2,
//     baths: 2,
//     description: "Luxurious suite with separate living area, perfect for business travelers.",
//     size: 550,
//     rating: 5,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning", "Work Desk"]
//   },
//   {
//     id: 3,
//     name: "Family Room",
//     price: 249,
//     image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
//     beds: 3,
//     baths: 2,
//     description: "Perfect for families with multiple beds and ample space.",
//     size: 450,
//     rating: 5,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning", "Kids Area"]
//   },
//   {
//     id: 4,
//     name: "Presidential Suite",
//     price: 599,
//     image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 3,
//     baths: 3,
//     description: "The ultimate luxury experience with panoramic views and private butler service.",
//     size: 1200,
//     rating: 5,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning", "Butler Service"]
//   },
//   {
//     id: 5,
//     name: "Garden View Room",
//     price: 179,
//     image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 1,
//     baths: 1,
//     description: "Peaceful room overlooking our beautiful gardens.",
//     size: 300,
//     rating: 4,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning", "Garden View"]
//   },
//   {
//     id: 6,
//     name: "Penthouse Suite",
//     price: 799,
//     image: "https://images.unsplash.com/photo-1598928501498-c04a8833f51e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 4,
//     baths: 4,
//     description: "Top-floor luxury with private terrace and jacuzzi.",
//     size: 1500,
//     rating: 5,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning", "Jacuzzi"]
//   }
// ];

// // ==================== STATUS MODAL ====================
// const StatusModal = ({ open, onClose, type, message, details }) => {
//   const getIcon = () => {
//     switch(type) {
//       case 'success':
//         return <CheckCircle sx={{ fontSize: 60, color: '#4caf50' }} />;
//       case 'error':
//         return <Cancel sx={{ fontSize: 60, color: '#f44336' }} />;
//       case 'warning':
//         return <Warning sx={{ fontSize: 60, color: '#ff9800' }} />;
//       default:
//         return <Info sx={{ fontSize: 60, color: '#2196f3' }} />;
//     }
//   };

//   const getTitle = () => {
//     switch(type) {
//       case 'success': return 'Success!';
//       case 'error': return 'Error!';
//       case 'warning': return 'Warning!';
//       default: return 'Information';
//     }
//   };

//   const getColor = () => {
//     switch(type) {
//       case 'success': return '#4caf50';
//       case 'error': return '#f44336';
//       case 'warning': return '#ff9800';
//       default: return '#2196f3';
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
//             <Box sx={{
//               background: `linear-gradient(135deg, ${getColor()}15, ${getColor()}05)`,
//               p: 4,
//               textAlign: 'center'
//             }}>
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.2, type: "spring" }}
//               >
//                 {getIcon()}
//               </motion.div>

//               <Typography variant="h4" sx={{ mt: 2, fontWeight: 600, color: getColor() }}>
//                 {getTitle()}
//               </Typography>

//               <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary' }}>
//                 {message}
//               </Typography>

//               {details && (
//                 <Paper sx={{ mt: 3, p: 2, bgcolor: 'background.default' }}>
//                   <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                     {details}
//                   </Typography>
//                 </Paper>
//               )}

//               <Button
//                 variant="contained"
//                 onClick={onClose}
//                 sx={{
//                   mt: 3,
//                   background: `linear-gradient(135deg, ${getColor()}, ${getColor()}dd)`,
//                   '&:hover': {
//                     background: `linear-gradient(135deg, ${getColor()}dd, ${getColor()})`,
//                   }
//                 }}
//               >
//                 Close
//               </Button>
//             </Box>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// // ==================== CONFIRMATION MODAL ====================
// const ConfirmationModal = ({ open, onClose, onConfirm, onCancel, title, message }) => {
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
//             <Box sx={{ p: 4, textAlign: 'center' }}>
//               <Warning sx={{ fontSize: 60, color: '#ff9800', mb: 2 }} />

//               <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
//                 {title || 'Confirm Action'}
//               </Typography>

//               <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
//                 {message || 'Are you sure you want to proceed?'}
//               </Typography>

//               <Box sx={{ display: 'flex', gap: 2 }}>
//                 <Button
//                   fullWidth
//                   variant="outlined"
//                   onClick={onCancel || onClose}
//                   size="large"
//                 >
//                   Cancel
//                 </Button>
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   color="warning"
//                   onClick={onConfirm}
//                   size="large"
//                 >
//                   Confirm
//                 </Button>
//               </Box>
//             </Box>
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
//   const [imageLoaded, setImageLoaded] = useState(false);

//   return (
//     <Grow in={true} timeout={500 + delay * 1000}>
//       <Grid item xs={12} sm={6} md={4}>
//         <motion.div
//           whileHover={{ y: -8 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           <Card
//             sx={{
//               height: '100%',
//               display: 'flex',
//               flexDirection: 'column',
//               position: 'relative',
//               overflow: 'visible',
//               '&:hover': {
//                 boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
//               }
//             }}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <Box sx={{ position: 'relative' }}>
//               <CardMedia
//                 component="img"
//                 height="240"
//                 image={room.image}
//                 alt={room.name}
//                 onLoad={() => setImageLoaded(true)}
//                 sx={{
//                   transition: 'transform 0.5s',
//                   transform: isHovered ? 'scale(1.1)' : 'scale(1)',
//                 }}
//               />

//               {/* Overlay Text */}
//               <Fade in={isHovered}>
//                 <Box
//                   sx={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     bottom: 0,
//                     background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'flex-end',
//                     p: 2,
//                   }}
//                 >
//                   <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
//                     Luxury Living
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
//                     Discover A Brand Luxurious Hotel
//                   </Typography>
//                 </Box>
//               </Fade>

//               {/* Price Badge */}
//               <Zoom in={true}>
//                 <Chip
//                   label={`$${room.price}/night`}
//                   sx={{
//                     position: 'absolute',
//                     top: 16,
//                     right: 16,
//                     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                     color: 'white',
//                     fontWeight: 600,
//                     fontSize: '1rem',
//                     '& .MuiChip-label': { px: 2 }
//                   }}
//                 />
//               </Zoom>

//               {/* Rating */}
//               <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
//                 <Rating value={room.rating} readOnly size="small" />
//               </Box>

//               {/* Hover Actions */}
//               <Fade in={isHovered}>
//                 <Box
//                   sx={{
//                     position: 'absolute',
//                     top: '50%',
//                     left: '50%',
//                     transform: 'translate(-50%, -50%)',
//                     display: 'flex',
//                     gap: 1,
//                   }}
//                 >
//                   <Tooltip title="View Details" arrow>
//                     <IconButton
//                       sx={{ bgcolor: 'white', '&:hover': { bgcolor: 'primary.main', color: 'white' } }}
//                       onClick={() => onViewDetail(room)}
//                     >
//                       <Visibility />
//                     </IconButton>
//                   </Tooltip>
//                   <Tooltip title="Add to Cart" arrow>
//                     <IconButton
//                       sx={{ bgcolor: 'white', '&:hover': { bgcolor: 'success.main', color: 'white' } }}
//                       onClick={() => onAddToCart({...room, quantity})}
//                     >
//                       <ShoppingCart />
//                     </IconButton>
//                   </Tooltip>
//                 </Box>
//               </Fade>
//             </Box>

//             <CardContent sx={{ flexGrow: 1 }}>
//               <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 600 }}>
//                 {room.name}
//               </Typography>

//               <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
//                 <Chip icon={<Bed />} label={`${room.beds} Bed`} size="small" variant="outlined" />
//                 <Chip icon={<Bathtub />} label={`${room.baths} Bath`} size="small" variant="outlined" />
//                 <Chip icon={<SquareFoot />} label={`${room.size} sqft`} size="small" variant="outlined" />
//               </Box>

//               <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                 {room.description}
//               </Typography>

//               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
//                 {room.amenities.slice(0, 3).map((amenity, index) => (
//                   <Chip
//                     key={index}
//                     label={amenity}
//                     size="small"
//                     sx={{ bgcolor: 'primary.light', color: 'primary.dark' }}
//                   />
//                 ))}
//                 {room.amenities.length > 3 && (
//                   <Chip label={`+${room.amenities.length - 3}`} size="small" />
//                 )}
//               </Box>
//             </CardContent>

//             <CardActions sx={{ p: 2, pt: 0 }}>
//               <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', border: 1, borderColor: 'divider', borderRadius: 1 }}>
//                   <IconButton size="small" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
//                     <Remove fontSize="small" />
//                   </IconButton>
//                   <Typography sx={{ width: 40, textAlign: 'center' }}>{quantity}</Typography>
//                   <IconButton size="small" onClick={() => setQuantity(quantity + 1)}>
//                     <Add fontSize="small" />
//                   </IconButton>
//                 </Box>
//                 <Box sx={{ ml: 'auto', textAlign: 'right' }}>
//                   <Typography variant="caption" color="text.secondary">Total</Typography>
//                   <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 600 }}>
//                     ${(room.price * quantity).toFixed(2)}
//                   </Typography>
//                 </Box>
//               </Box>
//             </CardActions>
//           </Card>
//         </motion.div>
//       </Grid>
//     </Grow>
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
//           <Box sx={{ position: 'relative' }}>
//             <CardMedia
//               component="img"
//               height="300"
//               image={room.image}
//               alt={room.name}
//             />
//             <IconButton
//               onClick={onClose}
//               sx={{ position: 'absolute', top: 16, right: 16, bgcolor: 'white', '&:hover': { bgcolor: 'grey.100' } }}
//             >
//               <Close />
//             </IconButton>

//             <Chip
//               label={`$${room.price}/night`}
//               sx={{
//                 position: 'absolute',
//                 bottom: 16,
//                 left: 16,
//                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                 color: 'white',
//                 fontWeight: 600,
//                 fontSize: '1.1rem',
//                 '& .MuiChip-label': { px: 3, py: 1 }
//               }}
//             />
//           </Box>

//           <Box sx={{ p: 4 }}>
//             <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
//               {room.name}
//             </Typography>

//             <Rating value={room.rating} readOnly precision={0.5} sx={{ mb: 2 }} />

//             <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
//               <Chip icon={<Bed />} label={`${room.beds} Bed${room.beds > 1 ? 's' : ''}`} />
//               <Chip icon={<Bathtub />} label={`${room.baths} Bath${room.baths > 1 ? 's' : ''}`} />
//               <Chip icon={<SquareFoot />} label={`${room.size} sq.ft`} />
//             </Box>

//             <Typography variant="body1" color="text.secondary" paragraph>
//               {room.description}
//             </Typography>

//             <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
//               Amenities
//             </Typography>
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
//               {room.amenities.map((amenity, index) => (
//                 <Chip key={index} label={amenity} variant="outlined" />
//               ))}
//             </Box>

//             <Divider sx={{ my: 3 }} />

//             <Typography variant="h6" gutterBottom>
//               Booking Details
//             </Typography>

//             <Grid container spacing={3} sx={{ mb: 3 }}>
//               <Grid item xs={6}>
//                 <TextField
//                   label="Nights"
//                   type="number"
//                   value={nights}
//                   onChange={(e) => setNights(Math.max(1, parseInt(e.target.value) || 1))}
//                   InputProps={{ inputProps: { min: 1 } }}
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   label="Rooms"
//                   type="number"
//                   value={quantity}
//                   onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
//                   InputProps={{ inputProps: { min: 1 } }}
//                   fullWidth
//                 />
//               </Grid>
//             </Grid>

//             <Paper sx={{ p: 3, bgcolor: 'primary.light', mb: 3 }}>
//               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                 <Box>
//                   <Typography variant="body2" color="text.secondary">Total Price</Typography>
//                   <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 600 }}>
//                     ${(room.price * nights * quantity).toFixed(2)}
//                   </Typography>
//                 </Box>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   onClick={() => onAddToCart({ ...room, nights, quantity })}
//                   startIcon={<ShoppingCart />}
//                   sx={{ px: 4 }}
//                 >
//                   Add to Cart
//                 </Button>
//               </Box>
//             </Paper>
//           </Box>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// // ==================== CART MODAL ====================
// const CartModal = ({ cartItems, onClose, onRemoveItem, onProceedToPayment }) => {
//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.nights * item.quantity, 0);
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
//           <Box sx={{ p: 3 }}>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
//               <Typography variant="h5" sx={{ fontWeight: 600 }}>
//                 Your Cart
//               </Typography>
//               <IconButton onClick={onClose}>
//                 <Close />
//               </IconButton>
//             </Box>

//             {cartItems.length === 0 ? (
//               <Box sx={{ textAlign: 'center', py: 4 }}>
//                 <ShoppingCart sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
//                 <Typography color="text.secondary">Your cart is empty</Typography>
//               </Box>
//             ) : (
//               <>
//                 <Box sx={{ maxHeight: 400, overflowY: 'auto' }}>
//                   {cartItems.map((item, index) => (
//                     <Paper key={index} sx={{ p: 2, mb: 2 }}>
//                       <Grid container spacing={2} alignItems="center">
//                         <Grid item xs={3}>
//                           <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: 8 }} />
//                         </Grid>
//                         <Grid item xs={9}>
//                           <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                             <Box>
//                               <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
//                                 {item.name}
//                               </Typography>
//                               <Typography variant="body2" color="text.secondary">
//                                 {item.quantity} room(s) × {item.nights} night(s)
//                               </Typography>
//                               <Typography variant="body2" color="primary.main">
//                                 ${item.price}/night
//                               </Typography>
//                             </Box>
//                             <Box sx={{ textAlign: 'right' }}>
//                               <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
//                                 ${(item.price * item.nights * item.quantity).toFixed(2)}
//                               </Typography>
//                               <Button
//                                 size="small"
//                                 color="error"
//                                 onClick={() => onRemoveItem(index)}
//                               >
//                                 Remove
//                               </Button>
//                             </Box>
//                           </Box>
//                         </Grid>
//                       </Grid>
//                     </Paper>
//                   ))}
//                 </Box>

//                 <Paper sx={{ p: 3, mt: 2, bgcolor: 'primary.light' }}>
//                   <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
//                     <Typography>Subtotal</Typography>
//                     <Typography>${subtotal.toFixed(2)}</Typography>
//                   </Box>
//                   <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
//                     <Typography>Tax (10%)</Typography>
//                     <Typography>${tax.toFixed(2)}</Typography>
//                   </Box>
//                   <Divider sx={{ my: 2 }} />
//                   <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//                     <Typography variant="h6">Total</Typography>
//                     <Typography variant="h6" sx={{ color: 'primary.main' }}>
//                       ${total.toFixed(2)}
//                     </Typography>
//                   </Box>
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     size="large"
//                     onClick={onProceedToPayment}
//                     startIcon={<Payment />}
//                   >
//                     Proceed to Payment
//                   </Button>
//                 </Paper>
//               </>
//             )}
//           </Box>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// // ==================== BOOKING COMPONENT ====================
// export const Booking = () => {
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
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [activeStep, setActiveStep] = useState(0);
//   const [showStatusModal, setShowStatusModal] = useState(false);
//   const [statusType, setStatusType] = useState('info');
//   const [statusMessage, setStatusMessage] = useState('');
//   const [statusDetails, setStatusDetails] = useState('');
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const steps = ['Personal Details', 'Stay Details', 'Confirmation'];

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
//       if (formData.adults < 1) {
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
//         formData
//       );

//       if (results.data.success) {
//         setStatusType('success');
//         setStatusMessage('Booking Confirmed!');
//         setStatusDetails('A confirmation email has been sent to your inbox.');
//         setSubmitSuccess(true);

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
//           setSubmitSuccess(false);
//         }, 3000);
//       } else {
//         setStatusType('error');
//         setStatusMessage('Booking Failed');
//         setStatusDetails('Please try again or contact support.');
//       }
//     } catch (error) {
//       setStatusType('error');
//       setStatusMessage('Submission Error');
//       setStatusDetails(error.response?.data?.message || 'Network error. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//       setShowStatusModal(true);
//     }
//   };

//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Full Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 error={!!errors.name}
//                 helperText={errors.name}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Person />
//                     </InputAdornment>
//                   ),
//                 }}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 error={!!errors.email}
//                 helperText={errors.email}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Email />
//                     </InputAdornment>
//                   ),
//                 }}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Phone Number"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 error={!!errors.phone}
//                 helperText={errors.phone}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Phone />
//                     </InputAdornment>
//                   ),
//                 }}
//                 required
//               />
//             </Grid>
//           </Grid>
//         );

//       case 1:
//         return (
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Check-in Date"
//                 type="date"
//                 name="checkInDate"
//                 value={formData.checkInDate}
//                 onChange={handleChange}
//                 error={!!errors.checkInDate}
//                 helperText={errors.checkInDate}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <CalendarToday />
//                     </InputAdornment>
//                   ),
//                 }}
//                 InputLabelProps={{ shrink: true }}
//                 inputProps={{ min: new Date().toISOString().split('T')[0] }}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Check-out Date"
//                 type="date"
//                 name="checkOutDate"
//                 value={formData.checkOutDate}
//                 onChange={handleChange}
//                 error={!!errors.checkOutDate}
//                 helperText={errors.checkOutDate}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <CalendarToday />
//                     </InputAdornment>
//                   ),
//                 }}
//                 InputLabelProps={{ shrink: true }}
//                 inputProps={{
//                   min: formData.checkInDate || new Date().toISOString().split('T')[0]
//                 }}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth error={!!errors.adults}>
//                 <InputLabel>Adults</InputLabel>
//                 <Select
//                   name="adults"
//                   value={formData.adults}
//                   label="Adults"
//                   onChange={handleChange}
//                   startAdornment={
//                     <InputAdornment position="start">
//                       <People />
//                     </InputAdornment>
//                   }
//                   required
//                 >
//                   {[1, 2, 3, 4, 5].map((num) => (
//                     <MenuItem key={`adult-${num}`} value={num}>
//                       {num} {num === 1 ? "Adult" : "Adults"}
//                     </MenuItem>
//                   ))}
//                 </Select>
//                 {errors.adults && <Typography variant="caption" color="error">{errors.adults}</Typography>}
//               </FormControl>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth>
//                 <InputLabel>Children</InputLabel>
//                 <Select
//                   name="children"
//                   value={formData.children}
//                   label="Children"
//                   onChange={handleChange}
//                   startAdornment={
//                     <InputAdornment position="start">
//                       <ChildCare />
//                     </InputAdornment>
//                   }
//                 >
//                   {[0, 1, 2, 3, 4].map((num) => (
//                     <MenuItem key={`child-${num}`} value={num}>
//                       {num} {num === 1 ? "Child" : "Children"}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12}>
//               <FormControl fullWidth error={!!errors.roomType}>
//                 <InputLabel>Room Type</InputLabel>
//                 <Select
//                   name="roomType"
//                   value={formData.roomType}
//                   label="Room Type"
//                   onChange={handleChange}
//                   startAdornment={
//                     <InputAdornment position="start">
//                       <Hotel />
//                     </InputAdornment>
//                   }
//                   required
//                 >
//                   {roomTypes.map((room) => (
//                     <MenuItem key={room.value} value={room.value}>
//                       {room.label}
//                     </MenuItem>
//                   ))}
//                 </Select>
//                 {errors.roomType && <Typography variant="caption" color="error">{errors.roomType}</Typography>}
//               </FormControl>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Special Requests"
//                 name="specialRequests"
//                 value={formData.specialRequests}
//                 onChange={handleChange}
//                 multiline
//                 rows={3}
//                 placeholder="Any special requirements? (optional)"
//               />
//             </Grid>
//           </Grid>
//         );

//       case 2:
//         return (
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <Paper sx={{ p: 3, bgcolor: 'primary.light' }}>
//                 <Typography variant="h6" gutterBottom>
//                   Booking Summary
//                 </Typography>
//                 <Grid container spacing={2}>
//                   <Grid item xs={6}>
//                     <Typography variant="body2" color="text.secondary">Name</Typography>
//                     <Typography variant="body1">{formData.name}</Typography>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Typography variant="body2" color="text.secondary">Email</Typography>
//                     <Typography variant="body1">{formData.email}</Typography>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Typography variant="body2" color="text.secondary">Phone</Typography>
//                     <Typography variant="body1">{formData.phone}</Typography>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Typography variant="body2" color="text.secondary">Check-in</Typography>
//                     <Typography variant="body1">{formData.checkInDate}</Typography>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Typography variant="body2" color="text.secondary">Check-out</Typography>
//                     <Typography variant="body1">{formData.checkOutDate}</Typography>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Typography variant="body2" color="text.secondary">Guests</Typography>
//                     <Typography variant="body1">
//                       {formData.adults} Adults, {formData.children || 0} Children
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography variant="body2" color="text.secondary">Room Type</Typography>
//                     <Typography variant="body1">
//                       {roomTypes.find(r => r.value === formData.roomType)?.label}
//                     </Typography>
//                   </Grid>
//                   {formData.specialRequests && (
//                     <Grid item xs={12}>
//                       <Typography variant="body2" color="text.secondary">Special Requests</Typography>
//                       <Typography variant="body1">{formData.specialRequests}</Typography>
//                     </Grid>
//                   )}
//                 </Grid>
//               </Paper>
//             </Grid>
//           </Grid>
//         );

//       default:
//         return 'Unknown step';
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <Box
//         sx={{
//           py: 8,
//           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//           minHeight: '100vh',
//         }}
//       >
//         <Container maxWidth="lg">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Typography
//               variant="h3"
//               component="h2"
//               textAlign="center"
//               sx={{ color: 'white', mb: 2, fontWeight: 600 }}
//             >
//               Book Your Stay
//             </Typography>
//             <Typography
//               variant="h6"
//               textAlign="center"
//               sx={{ color: 'rgba(255,255,255,0.9)', mb: 6 }}
//             >
//               Experience luxury and comfort at its finest
//             </Typography>

//             <Paper sx={{ p: 4, borderRadius: 4 }}>
//               <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
//                 {steps.map((label) => (
//                   <Step key={label}>
//                     <StepLabel>{label}</StepLabel>
//                   </Step>
//                 ))}
//               </Stepper>

//               <form onSubmit={handleSubmit}>
//                 {getStepContent(activeStep)}

//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
//                   <Button
//                     variant="outlined"
//                     onClick={handleBack}
//                     disabled={activeStep === 0}
//                     startIcon={<ArrowBack />}
//                   >
//                     Back
//                   </Button>
//                   {activeStep === steps.length - 1 ? (
//                     <Button
//                       variant="contained"
//                       type="submit"
//                       disabled={isSubmitting}
//                       endIcon={isSubmitting ? <CircularProgress size={20} /> : <Done />}
//                       sx={{
//                         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                         '&:hover': {
//                           background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
//                         }
//                       }}
//                     >
//                       {isSubmitting ? 'Processing...' : 'Confirm Booking'}
//                     </Button>
//                   ) : (
//                     <Button
//                       variant="contained"
//                       onClick={handleNext}
//                       endIcon={<ArrowForward />}
//                     >
//                       Next
//                     </Button>
//                   )}
//                 </Box>
//               </form>
//             </Paper>
//           </motion.div>
//         </Container>
//       </Box>

//       {/* Status Modal */}
//       <StatusModal
//         open={showStatusModal}
//         onClose={() => setShowStatusModal(false)}
//         type={statusType}
//         message={statusMessage}
//         details={statusDetails}
//       />

//       {/* Confirmation Modal */}
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

// // ==================== ROOMS SERVICES COMPONENT ====================
// const RoomsServices = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const [showDetailModal, setShowDetailModal] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [showCartModal, setShowCartModal] = useState(false);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [showStatusModal, setShowStatusModal] = useState(false);
//   const [statusType, setStatusType] = useState('info');
//   const [statusMessage, setStatusMessage] = useState('');
//   const [statusDetails, setStatusDetails] = useState('');

//   const handleViewDetail = (room) => {
//     setSelectedRoom(room);
//     setShowDetailModal(true);
//   };

//   const handleAddToCart = (room) => {
//     const existingIndex = cartItems.findIndex(
//       (item) => item.id === room.id && item.nights === room.nights
//     );

//     if (existingIndex >= 0) {
//       const updatedCart = [...cartItems];
//       updatedCart[existingIndex].quantity += room.quantity || 1;
//       setCartItems(updatedCart);
//     } else {
//       setCartItems((prev) => [...prev, {
//         ...room,
//         quantity: room.quantity || 1,
//         nights: room.nights || 1,
//       }]);
//     }

//     setShowDetailModal(false);
//     setStatusType('success');
//     setStatusMessage('Added to Cart!');
//     setStatusDetails(`${room.name} has been added to your cart.`);
//     setShowStatusModal(true);
//   };

//   const handleRemoveFromCart = (index) => {
//     setCartItems((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleProceedToPayment = () => {
//     setShowCartModal(false);
//     setStatusType('info');
//     setStatusMessage('Payment Processing');
//     setStatusDetails('Redirecting to payment gateway...');
//     setShowStatusModal(true);

//     setTimeout(() => {
//       setStatusType('success');
//       setStatusMessage('Payment Successful!');
//       setStatusDetails('Your booking has been confirmed.');
//       setCartItems([]);
//     }, 2000);
//   };

//   const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.nights * item.quantity, 0) * 1.1;

//   return (
//     <Box sx={{ py: 4 }}>
//       <ToastContainer />

//       <Container maxWidth="lg">
//         <Box sx={{ textAlign: 'center', mb: 6 }}>
//           <Chip
//             label="Our Rooms"
//             sx={{ mb: 2, bgcolor: 'primary.light', color: 'primary.main' }}
//           />
//           <Typography variant="h3" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
//             Explore Our <Box component="span" sx={{ color: 'primary.main' }}>Luxury Rooms</Box>
//           </Typography>
//         </Box>

//         <Grid container spacing={3}>
//           {(showAll ? rooms : rooms.slice(0, 3)).map((room, index) => (
//             <RoomCard
//               key={room.id}
//               room={room}
//               delay={index * 0.1}
//               onViewDetail={handleViewDetail}
//               onAddToCart={handleAddToCart}
//             />
//           ))}
//         </Grid>

//         <Box sx={{ textAlign: 'center', mt: 4 }}>
//           <Button
//             variant="contained"
//             size="large"
//             onClick={() => setShowAll(!showAll)}
//             sx={{
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               px: 6,
//               py: 1.5,
//             }}
//           >
//             {showAll ? 'Show Less' : 'View More Rooms'}
//           </Button>
//         </Box>

//         {/* Cart Button */}
//         <Slide direction="up" in={cartItems.length > 0}>
//           <Box sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 50 }}>
//             <Badge badgeContent={cartItems.reduce((sum, item) => sum + item.quantity, 0)} color="error">
//               <IconButton
//                 onClick={() => setShowCartModal(true)}
//                 sx={{
//                   bgcolor: 'primary.main',
//                   color: 'white',
//                   width: 56,
//                   height: 56,
//                   '&:hover': { bgcolor: 'primary.dark' },
//                 }}
//               >
//                 <ShoppingCart />
//               </IconButton>
//             </Badge>
//           </Box>
//         </Slide>

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
//         </AnimatePresence>

//         {/* Status Modal */}
//         <StatusModal
//           open={showStatusModal}
//           onClose={() => setShowStatusModal(false)}
//           type={statusType}
//           message={statusMessage}
//           details={statusDetails}
//         />
//       </Container>
//     </Box>
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
//       <Box sx={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
//         <Carousel
//           infiniteLoop
//           autoPlay
//           showThumbs={false}
//           showStatus={false}
//           interval={5000}
//           transitionTime={1000}
//           onChange={(index) => setCurrentSlide(index)}
//           className="hero-carousel"
//         >
//           {carouselItems.map((item, index) => (
//             <Box key={index} sx={{ position: 'relative', height: '80vh' }}>
//               <img
//                 src={item.imgSrc}
//                 alt={`Slide ${index + 1}`}
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//               />
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
//                   display: 'flex',
//                   alignItems: 'center',
//                 }}
//               >
//                 <Container maxWidth="lg">
//                   <Fade in={currentSlide === index} timeout={1000}>
//                     <Box sx={{ maxWidth: 600 }}>
//                       <Chip
//                         label={item.subtitle}
//                         sx={{
//                           mb: 2,
//                           bgcolor: 'primary.main',
//                           color: 'white',
//                           fontWeight: 600,
//                         }}
//                       />
//                       <Typography
//                         variant="h2"
//                         component="h1"
//                         sx={{
//                           color: 'white',
//                           fontWeight: 700,
//                           mb: 3,
//                           fontSize: { xs: '2.5rem', md: '3.5rem' }
//                         }}
//                       >
//                         {item.title}
//                       </Typography>
//                       <Box sx={{ display: 'flex', gap: 2 }}>
//                         <Button
//                           variant="contained"
//                           size="large"
//                           onClick={() => handleButtonClick("rooms")}
//                           sx={{
//                             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                             px: 4,
//                             py: 1.5,
//                           }}
//                         >
//                           Our Rooms
//                         </Button>
//                         <Button
//                           variant="outlined"
//                           size="large"
//                           onClick={() => handleButtonClick("book")}
//                           sx={{
//                             color: 'white',
//                             borderColor: 'white',
//                             '&:hover': {
//                               borderColor: 'primary.main',
//                               bgcolor: 'rgba(255,255,255,0.1)',
//                             }
//                           }}
//                         >
//                           Book Now
//                         </Button>
//                         <Button
//                           variant="outlined"
//                           size="large"
//                           onClick={() => handleButtonClick("contact")}
//                           sx={{
//                             color: 'white',
//                             borderColor: 'white',
//                             '&:hover': {
//                               borderColor: 'primary.main',
//                               bgcolor: 'rgba(255,255,255,0.1)',
//                             }
//                           }}
//                         >
//                           Contact Us
//                         </Button>
//                       </Box>
//                     </Box>
//                   </Fade>
//                 </Container>
//               </Box>
//             </Box>
//           ))}
//         </Carousel>
//       </Box>

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
//               <Box sx={{ bgcolor: 'white', borderRadius: 4, maxWidth: 1200, width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
//                 <IconButton
//                   onClick={() => setShowRoomsModal(false)}
//                   sx={{ position: 'absolute', top: 16, right: 16, zIndex: 10, bgcolor: 'white', '&:hover': { bgcolor: 'grey.100' } }}
//                 >
//                   <Close />
//                 </IconButton>
//                 <RoomsServices />
//               </Box>
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
//               <Box sx={{ bgcolor: 'white', borderRadius: 4, maxWidth: 800, width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
//                 <IconButton
//                   onClick={() => setShowBookingModal(false)}
//                   sx={{ position: 'absolute', top: 16, right: 16, zIndex: 10, bgcolor: 'white', '&:hover': { bgcolor: 'grey.100' } }}
//                 >
//                   <Close />
//                 </IconButton>
//                 <Booking />
//               </Box>
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
//               <Box sx={{ bgcolor: 'white', borderRadius: 4, maxWidth: 1000, width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
//                 <IconButton
//                   onClick={() => setShowContactModal(false)}
//                   sx={{ position: 'absolute', top: 16, right: 16, zIndex: 10, bgcolor: 'white', '&:hover': { bgcolor: 'grey.100' } }}
//                 >
//                   <Close />
//                 </IconButton>
//                 <ContactSection />
//               </Box>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
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
//   const [statusType, setStatusType] = useState('info');
//   const [statusMessage, setStatusMessage] = useState('');
//   const [statusDetails, setStatusDetails] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setStatusType('success');
//       setStatusMessage('Message Sent Successfully!');
//       setStatusDetails('We will get back to you within 24 hours.');
//       setShowStatusModal(true);
//       setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
//     }, 1500);
//   };

//   return (
//     <>
//       <Box sx={{
//         py: 8,
//         background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
//         color: 'white'
//       }}>
//         <Container maxWidth="lg">
//           <Grid container spacing={6}>
//             <Grid item xs={12} md={5}>
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <Chip
//                   label="Contact Us"
//                   sx={{ mb: 2, bgcolor: 'primary.main', color: 'white' }}
//                 />
//                 <Typography variant="h3" sx={{ fontWeight: 600, mb: 3 }}>
//                   Get In <span style={{ color: '#667eea' }}>Touch</span>
//                 </Typography>
//                 <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 4 }}>
//                   Have questions or need assistance? Our team is here to help you with all your inquiries.
//                 </Typography>

//                 <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
//                   <ContactInfoCard
//                     icon={<Phone />}
//                     title="Phone"
//                     items={["+250 (78) 794-4577", "+250 (72) 755-6145"]}
//                   />
//                   <ContactInfoCard
//                     icon={<Email />}
//                     title="Email"
//                     items={["info@hotel.com", "support@hotel.com"]}
//                   />
//                   <ContactInfoCard
//                     icon={<LocationOn />}
//                     title="Address"
//                     items={["123 Luxury Street", "Hospitality District", "Kigali, KG 191"]}
//                   />
//                   <ContactInfoCard
//                     icon={<AccessTime />}
//                     title="Working Hours"
//                     items={["Monday - Friday: 9:00 - 18:00", "Saturday: 10:00 - 16:00", "Sunday: Closed"]}
//                   />
//                 </Box>
//               </motion.div>
//             </Grid>

//             <Grid item xs={12} md={7}>
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//               >
//                 <Paper sx={{ p: 4, borderRadius: 4 }}>
//                   <form onSubmit={handleSubmit}>
//                     <Grid container spacing={3}>
//                       <Grid item xs={12}>
//                         <TextField
//                           fullWidth
//                           label="Full Name"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                           InputProps={{
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 <Person />
//                               </InputAdornment>
//                             ),
//                           }}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <TextField
//                           fullWidth
//                           label="Email"
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                           InputProps={{
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 <Email />
//                               </InputAdornment>
//                             ),
//                           }}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <TextField
//                           fullWidth
//                           label="Phone Number"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           InputProps={{
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 <Phone />
//                               </InputAdornment>
//                             ),
//                           }}
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <TextField
//                           fullWidth
//                           label="Subject"
//                           name="subject"
//                           value={formData.subject}
//                           onChange={handleChange}
//                           required
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <TextField
//                           fullWidth
//                           label="Message"
//                           name="message"
//                           value={formData.message}
//                           onChange={handleChange}
//                           required
//                           multiline
//                           rows={5}
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <Button
//                           type="submit"
//                           variant="contained"
//                           size="large"
//                           fullWidth
//                           disabled={isSubmitting}
//                           sx={{
//                             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                             py: 2,
//                             '&:hover': {
//                               background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
//                             }
//                           }}
//                         >
//                           {isSubmitting ? (
//                             <CircularProgress size={24} color="inherit" />
//                           ) : (
//                             'Send Message'
//                           )}
//                         </Button>
//                       </Grid>
//                     </Grid>
//                   </form>
//                 </Paper>
//               </motion.div>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

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
//     <motion.div whileHover={{ x: 5 }}>
//       <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
//         <Avatar sx={{ bgcolor: 'primary.main' }}>
//           {icon}
//         </Avatar>
//         <Box>
//           <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
//             {title}
//           </Typography>
//           {items.map((item, index) => (
//             <Typography key={index} variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
//               {item}
//             </Typography>
//           ))}
//         </Box>
//       </Box>
//     </motion.div>
//   );
// };

// // ==================== PAYMENT MODAL ====================
// const PaymentModal = ({ cartTotal, cartItems, onClose, onPaymentSuccess }) => {
//   const [paymentMethod, setPaymentMethod] = useState('credit');
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowConfirmation(true);
//   };

//   const confirmPayment = () => {
//     setShowConfirmation(false);
//     setIsProcessing(true);

//     setTimeout(() => {
//       setIsProcessing(false);
//       onPaymentSuccess();
//     }, 2000);
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
//             <Box sx={{ p: 3 }}>
//               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
//                 <Typography variant="h5" sx={{ fontWeight: 600 }}>
//                   Payment Details
//                 </Typography>
//                 <IconButton onClick={onClose}>
//                   <Close />
//                 </IconButton>
//               </Box>

//               <Paper sx={{ p: 2, bgcolor: 'primary.light', mb: 3 }}>
//                 <Typography variant="subtitle2" color="text.secondary" gutterBottom>
//                   Total Amount
//                 </Typography>
//                 <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 600 }}>
//                   ${cartTotal.toFixed(2)}
//                 </Typography>
//               </Paper>

//               <Box sx={{ mb: 3 }}>
//                 <Typography variant="subtitle2" gutterBottom>
//                   Payment Method
//                 </Typography>
//                 <Grid container spacing={2}>
//                   <Grid item xs={6}>
//                     <Button
//                       fullWidth
//                       variant={paymentMethod === 'credit' ? 'contained' : 'outlined'}
//                       onClick={() => setPaymentMethod('credit')}
//                       startIcon={<CreditCard />}
//                       sx={{ py: 1.5 }}
//                     >
//                       Credit Card
//                     </Button>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Button
//                       fullWidth
//                       variant={paymentMethod === 'paypal' ? 'contained' : 'outlined'}
//                       onClick={() => setPaymentMethod('paypal')}
//                       startIcon={<Payment />}
//                       sx={{ py: 1.5 }}
//                     >
//                       PayPal
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </Box>

//               {paymentMethod === 'credit' && (
//                 <form onSubmit={handleSubmit}>
//                   <Grid container spacing={2}>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Card Number"
//                         placeholder="1234 5678 9012 3456"
//                         required
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Cardholder Name"
//                         placeholder="John Doe"
//                         required
//                       />
//                     </Grid>
//                     <Grid item xs={6}>
//                       <TextField
//                         fullWidth
//                         label="Expiry Date"
//                         placeholder="MM/YY"
//                         required
//                       />
//                     </Grid>
//                     <Grid item xs={6}>
//                       <TextField
//                         fullWidth
//                         label="CVV"
//                         placeholder="123"
//                         required
//                       />
//                     </Grid>
//                   </Grid>

//                   <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     size="large"
//                     disabled={isProcessing}
//                     sx={{ mt: 3, py: 1.5 }}
//                   >
//                     {isProcessing ? (
//                       <CircularProgress size={24} />
//                     ) : (
//                       `Pay $${cartTotal.toFixed(2)}`
//                     )}
//                   </Button>
//                 </form>
//               )}

//               {paymentMethod === 'paypal' && (
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   size="large"
//                   onClick={() => setShowConfirmation(true)}
//                   sx={{
//                     mt: 2,
//                     py: 1.5,
//                     bgcolor: '#0070ba',
//                     '&:hover': { bgcolor: '#005ea6' }
//                   }}
//                 >
//                   Pay with PayPal
//                 </Button>
//               )}
//             </Box>
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
//     imgSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     subtitle: "Luxury Redefined",
//     title: "Experience Ultimate Comfort & Elegance",
//     buttons: [
//       { text: "Our Rooms", href: "#", variant: "primary", action: "rooms" },
//       { text: "Book Now", href: "#", variant: "outline", action: "book" }
//     ]
//   },
//   {
//     imgSrc: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     subtitle: "5-Star Service",
//     title: "Where Every Moment Feels Special",
//     buttons: [
//       { text: "Our Rooms", href: "#", variant: "primary", action: "rooms" },
//       { text: "Book Now", href: "#", variant: "outline", action: "book" }
//     ]
//   },
//   {
//     imgSrc: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     subtitle: "Exclusive Offers",
//     title: "Book Now & Get 20% Off Your Stay",
//     buttons: [
//       { text: "Our Rooms", href: "#", variant: "primary", action: "rooms" },
//       { text: "Book Now", href: "#", variant: "outline", action: "book" }
//     ]
//   }
// ];

// // ==================== ROOM DATA ====================
// const rooms = [
//   {
//     id: 1,
//     name: "Deluxe King Room",
//     price: 199,
//     image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 1,
//     baths: 1,
//     description: "Spacious room with king-sized bed, luxury amenities, and city view.",
//     size: 350,
//     rating: 5,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning"]
//   },
//   {
//     id: 2,
//     name: "Executive Suite",
//     price: 299,
//     image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 2,
//     baths: 2,
//     description: "Luxurious suite with separate living area, perfect for business travelers.",
//     size: 550,
//     rating: 5,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning", "Work Desk"]
//   },
//   {
//     id: 3,
//     name: "Family Room",
//     price: 249,
//     image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
//     beds: 3,
//     baths: 2,
//     description: "Perfect for families with multiple beds and ample space.",
//     size: 450,
//     rating: 5,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning", "Kids Area"]
//   },
//   {
//     id: 4,
//     name: "Presidential Suite",
//     price: 599,
//     image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 3,
//     baths: 3,
//     description: "The ultimate luxury experience with panoramic views and private butler service.",
//     size: 1200,
//     rating: 5,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning", "Butler Service"]
//   },
//   {
//     id: 5,
//     name: "Garden View Room",
//     price: 179,
//     image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 1,
//     baths: 1,
//     description: "Peaceful room overlooking our beautiful gardens.",
//     size: 300,
//     rating: 4,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning", "Garden View"]
//   },
//   {
//     id: 6,
//     name: "Penthouse Suite",
//     price: 799,
//     image: "https://images.unsplash.com/photo-1598928501498-c04a8833f51e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 4,
//     baths: 4,
//     description: "Top-floor luxury with private terrace and jacuzzi.",
//     size: 1500,
//     rating: 5,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning", "Jacuzzi"]
//   }
// ];

// // ==================== STATUS MODAL ====================
// const StatusModal = ({ open, onClose, type, message, details }) => {
//   const getIcon = () => {
//     switch(type) {
//       case 'success':
//         return (
//           <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//         );
//       case 'error':
//         return (
//           <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//         );
//       case 'warning':
//         return (
//           <svg className="w-16 h-16 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//           </svg>
//         );
//       default:
//         return (
//           <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//         );
//     }
//   };

//   const getTitle = () => {
//     switch(type) {
//       case 'success': return 'Success!';
//       case 'error': return 'Error!';
//       case 'warning': return 'Warning!';
//       default: return 'Information';
//     }
//   };

//   const getColor = () => {
//     switch(type) {
//       case 'success': return 'text-green-600';
//       case 'error': return 'text-red-600';
//       case 'warning': return 'text-yellow-600';
//       default: return 'text-blue-600';
//     }
//   };

//   const getBgColor = () => {
//     switch(type) {
//       case 'success': return 'bg-green-50';
//       case 'error': return 'bg-red-50';
//       case 'warning': return 'bg-yellow-50';
//       default: return 'bg-blue-50';
//     }
//   };

//   const getButtonColor = () => {
//     switch(type) {
//       case 'success': return 'bg-green-600 hover:bg-green-700';
//       case 'error': return 'bg-red-600 hover:bg-red-700';
//       case 'warning': return 'bg-yellow-600 hover:bg-yellow-700';
//       default: return 'bg-blue-600 hover:bg-blue-700';
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

//               <p className="text-gray-600 mt-2">
//                 {message}
//               </p>

//               {details && (
//                 <div className="mt-4 p-4 bg-gray-100 rounded-lg">
//                   <p className="text-sm text-gray-600">{details}</p>
//                 </div>
//               )}

//               <button
//                 onClick={onClose}
//                 className={`mt-6 px-6 py-2 text-white rounded-lg transition-all transform hover:scale-105 ${getButtonColor()}`}
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
// const ConfirmationModal = ({ open, onClose, onConfirm, onCancel, title, message }) => {
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
//               <svg className="w-16 h-16 text-yellow-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//               </svg>

//               <h3 className="text-xl font-bold text-gray-800 mb-2">
//                 {title || 'Confirm Action'}
//               </h3>

//               <p className="text-gray-600 mb-6">
//                 {message || 'Are you sure you want to proceed?'}
//               </p>

//               <div className="flex gap-4">
//                 <button
//                   onClick={onCancel || onClose}
//                   className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors font-medium"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={onConfirm}
//                   className="flex-1 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-all transform hover:scale-105 font-medium"
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
//             className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
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
//                 <h3 className="text-white text-lg font-semibold">Luxury Living</h3>
//                 <p className="text-white/90 text-sm">Discover A Brand Luxurious Hotel</p>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Price Badge */}
//           <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full font-bold text-sm">
//             ${room.price}<span className="text-xs font-normal">/night</span>
//           </div>

//           {/* Rating */}
//           <div className="absolute top-4 left-4 flex text-yellow-400">
//             {[...Array(5)].map((_, i) => (
//               <svg key={i} className="w-4 h-4" fill={i < room.rating ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
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
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                   </svg>
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => onAddToCart({...room, quantity})}
//                   className="bg-white text-green-600 p-3 rounded-full hover:bg-green-600 hover:text-white transition-colors shadow-lg"
//                   title="Add to Cart"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
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
//               <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//               </svg>
//               {room.beds} Bed{room.beds > 1 ? 's' : ''}
//             </span>
//             <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
//               <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//               </svg>
//               {room.baths} Bath{room.baths > 1 ? 's' : ''}
//             </span>
//             <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
//               <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
//               </svg>
//               {room.size} sq.ft
//             </span>
//           </div>

//           <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>

//           <div className="flex flex-wrap gap-1 mb-4">
//             {room.amenities.slice(0, 3).map((amenity, index) => (
//               <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
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
//                 className="px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-200 rounded-l-lg transition-colors"
//               >
//                 -
//               </button>
//               <input
//                 type="number"
//                 min="1"
//                 value={quantity}
//                 onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
//                 className="w-12 text-center bg-transparent border-none py-2 focus:outline-none"
//               />
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-200 rounded-r-lg transition-colors"
//               >
//                 +
//               </button>
//             </div>
//             <div className="text-right">
//               <p className="text-xs text-gray-500">Total</p>
//               <p className="font-bold text-blue-600">${(room.price * quantity).toFixed(2)}</p>
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
//               className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
//             >
//               <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//             <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
//               ${room.price}<span className="text-sm font-normal">/night</span>
//             </div>
//           </div>

//           <div className="p-8">
//             <h2 className="text-3xl font-bold text-gray-800 mb-2">{room.name}</h2>

//             <div className="flex items-center mb-4">
//               {[...Array(5)].map((_, i) => (
//                 <svg key={i} className={`w-5 h-5 ${i < room.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//               ))}
//             </div>

//             <div className="flex flex-wrap gap-3 mb-6">
//               <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg flex items-center">
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//                 </svg>
//                 {room.beds} Bed{room.beds > 1 ? 's' : ''}
//               </span>
//               <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg flex items-center">
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//                 </svg>
//                 {room.baths} Bath{room.baths > 1 ? 's' : ''}
//               </span>
//               <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg flex items-center">
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
//                 </svg>
//                 {room.size} sq.ft
//               </span>
//             </div>

//             <p className="text-gray-600 leading-relaxed mb-6">{room.description}</p>

//             <h3 className="text-xl font-semibold mb-3">Amenities</h3>
//             <div className="flex flex-wrap gap-2 mb-8">
//               {room.amenities.map((amenity, index) => (
//                 <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
//                   {amenity}
//                 </span>
//               ))}
//             </div>

//             <hr className="my-6" />

//             <h3 className="text-xl font-semibold mb-4">Booking Details</h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//               <div>
//                 <label className="block text-gray-700 mb-2 font-medium">Number of Nights</label>
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
//                     onChange={(e) => setNights(Math.max(1, parseInt(e.target.value) || 1))}
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
//                 <label className="block text-gray-700 mb-2 font-medium">Number of Rooms</label>
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
//                     onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
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
//                   <p className="text-3xl font-bold text-blue-600">${(room.price * nights * quantity).toFixed(2)}</p>
//                 </div>
//                 <button
//                   onClick={() => onAddToCart({ ...room, nights, quantity })}
//                   className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg  transition-all transform hover:scale-105 font-medium shadow-lg flex items-center"
//                 >
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
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
// const CartModal = ({ cartItems, onClose, onRemoveItem, onProceedToPayment }) => {
//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.nights * item.quantity, 0);
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
//                 className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-colors"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             {cartItems.length === 0 ? (
//               <div className="text-center py-12">
//                 <svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
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
//                         alt={item.name}
//                         className="w-20 h-20 object-cover rounded-lg"
//                       />
//                       <div className="ml-4 flex-grow">
//                         <h3 className="font-semibold text-gray-800">{item.name}</h3>
//                         <p className="text-sm text-gray-500">
//                           {item.quantity} room(s) × {item.nights} night(s)
//                         </p>
//                         <p className="text-sm font-medium text-blue-600">${item.price}/night</p>
//                       </div>
//                       <div className="text-right">
//                         <p className="font-bold text-gray-800">${(item.price * item.nights * item.quantity).toFixed(2)}</p>
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

// // ==================== BOOKING COMPONENT ====================
// export const Booking = () => {
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
//   const [statusType, setStatusType] = useState('info');
//   const [statusMessage, setStatusMessage] = useState('');
//   const [statusDetails, setStatusDetails] = useState('');
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const steps = ['Personal Details', 'Stay Details', 'Confirmation'];

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
//         formData
//       );

//       if (results.data.success) {
//         setStatusType('success');
//         setStatusMessage('Booking Confirmed!');
//         setStatusDetails('A confirmation email has been sent to your inbox.');

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
//         setStatusType('error');
//         setStatusMessage('Booking Failed');
//         setStatusDetails('Please try again or contact support.');
//       }
//     } catch (error) {
//       setStatusType('error');
//       setStatusMessage('Submission Error');
//       setStatusDetails(error.response?.data?.message || 'Network error. Please try again.');
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
//               <label className="block text-gray-700 mb-2 font-medium">Full Name *</label>
//               <div className="relative">
//                 <span className="absolute left-3 top-3 text-gray-400">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                   </svg>
//                 </span>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full pl-10 pr-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
//                   placeholder="John Doe"
//                 />
//               </div>
//               {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-700 mb-2 font-medium">Email *</label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-3 text-gray-400">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </span>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`w-full pl-10 pr-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
//                     placeholder="john@example.com"
//                   />
//                 </div>
//                 {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-2 font-medium">Phone Number *</label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-3 text-gray-400">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                   </span>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className={`w-full pl-10 pr-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
//                     placeholder="+1 (123) 456-7890"
//                   />
//                 </div>
//                 {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//               </div>
//             </div>
//           </div>
//         );

//       case 1:
//         return (
//           <div className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-700 mb-2 font-medium">Check-in Date *</label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-3 text-gray-400">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                   </span>
//                   <input
//                     type="date"
//                     name="checkInDate"
//                     value={formData.checkInDate}
//                     onChange={handleChange}
//                     min={new Date().toISOString().split('T')[0]}
//                     className={`w-full pl-10 pr-4 py-3 border ${errors.checkInDate ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
//                   />
//                 </div>
//                 {errors.checkInDate && <p className="text-red-500 text-sm mt-1">{errors.checkInDate}</p>}
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-2 font-medium">Check-out Date *</label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-3 text-gray-400">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                   </span>
//                   <input
//                     type="date"
//                     name="checkOutDate"
//                     value={formData.checkOutDate}
//                     onChange={handleChange}
//                     min={formData.checkInDate || new Date().toISOString().split('T')[0]}
//                     className={`w-full pl-10 pr-4 py-3 border ${errors.checkOutDate ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
//                   />
//                 </div>
//                 {errors.checkOutDate && <p className="text-red-500 text-sm mt-1">{errors.checkOutDate}</p>}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-700 mb-2 font-medium">Adults *</label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-3 text-gray-400">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                     </svg>
//                   </span>
//                   <select
//                     name="adults"
//                     value={formData.adults}
//                     onChange={handleChange}
//                     className={`w-full pl-10 pr-4 py-3 border ${errors.adults ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white`}
//                   >
//                     <option value="">Select adults</option>
//                     {[1, 2, 3, 4, 5].map((num) => (
//                       <option key={num} value={num}>{num} {num === 1 ? 'Adult' : 'Adults'}</option>
//                     ))}
//                   </select>
//                 </div>
//                 {errors.adults && <p className="text-red-500 text-sm mt-1">{errors.adults}</p>}
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-2 font-medium">Children</label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-3 text-gray-400">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
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
//                       <option key={num} value={num}>{num} {num === 1 ? 'Child' : 'Children'}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-2 font-medium">Room Type *</label>
//               <div className="relative">
//                 <span className="absolute left-3 top-3 text-gray-400">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                   </svg>
//                 </span>
//                 <select
//                   name="roomType"
//                   value={formData.roomType}
//                   onChange={handleChange}
//                   className={`w-full pl-10 pr-4 py-3 border ${errors.roomType ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white`}
//                 >
//                   <option value="">Select room type</option>
//                   {roomTypes.map((room) => (
//                     <option key={room.value} value={room.value}>{room.label}</option>
//                   ))}
//                 </select>
//               </div>
//               {errors.roomType && <p className="text-red-500 text-sm mt-1">{errors.roomType}</p>}
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-2 font-medium">Special Requests (Optional)</label>
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
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Booking Summary</h3>
//             <div className="space-y-3">
//               <div className="flex justify-between py-2 border-b border-blue-100">
//                 <span className="text-gray-600">Name:</span>
//                 <span className="font-medium text-gray-800">{formData.name}</span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-blue-100">
//                 <span className="text-gray-600">Email:</span>
//                 <span className="font-medium text-gray-800">{formData.email}</span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-blue-100">
//                 <span className="text-gray-600">Phone:</span>
//                 <span className="font-medium text-gray-800">{formData.phone}</span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-blue-100">
//                 <span className="text-gray-600">Check-in:</span>
//                 <span className="font-medium text-gray-800">{formData.checkInDate}</span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-blue-100">
//                 <span className="text-gray-600">Check-out:</span>
//                 <span className="font-medium text-gray-800">{formData.checkOutDate}</span>
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
//                   {roomTypes.find(r => r.value === formData.roomType)?.label}
//                 </span>
//               </div>
//               {formData.specialRequests && (
//                 <div className="flex justify-between py-2">
//                   <span className="text-gray-600">Special Requests:</span>
//                   <span className="font-medium text-gray-800">{formData.specialRequests}</span>
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
//                       <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
//                         activeStep >= index
//                           ? 'border-blue-600 bg-blue-600 text-white'
//                           : 'border-gray-300 text-gray-400'
//                       }`}>
//                         {activeStep > index ? (
//                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                           </svg>
//                         ) : (
//                           index + 1
//                         )}
//                       </div>
//                       <span className={`ml-2 text-sm font-medium ${
//                         activeStep >= index ? 'text-gray-900' : 'text-gray-400'
//                       }`}>
//                         {label}
//                       </span>
//                     </div>
//                     {index < steps.length - 1 && (
//                       <div className={`flex-1 h-1 mx-4 transition-all ${
//                         activeStep > index ? 'bg-blue-600' : 'bg-gray-300'
//                       }`} />
//                     )}
//                   </React.Fragment>
//                 ))}
//               </div>

//               <form onSubmit={handleSubmit}>
//                 {getStepContent(activeStep)}

//                 <div className="flex justify-between mt-8">
//                   <button
//                     type="button"
//                     onClick={handleBack}
//                     disabled={activeStep === 0}
//                     className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center ${
//                       activeStep === 0
//                         ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                         : 'border-2 border-gray-300 text-gray-600 hover:bg-gray-50'
//                     }`}
//                   >
//                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
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
//                           <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                           </svg>
//                           Processing...
//                         </>
//                       ) : (
//                         <>
//                           Confirm Booking
//                           <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
//                       <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

// // ==================== ROOMS SERVICES COMPONENT ====================
// const RoomsServices = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const [showDetailModal, setShowDetailModal] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [showCartModal, setShowCartModal] = useState(false);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [showStatusModal, setShowStatusModal] = useState(false);
//   const [statusType, setStatusType] = useState('info');
//   const [statusMessage, setStatusMessage] = useState('');
//   const [statusDetails, setStatusDetails] = useState('');

//   const handleViewDetail = (room) => {
//     setSelectedRoom(room);
//     setShowDetailModal(true);
//   };

//   const handleAddToCart = (room) => {
//     const existingIndex = cartItems.findIndex(
//       (item) => item.id === room.id && item.nights === room.nights
//     );

//     if (existingIndex >= 0) {
//       const updatedCart = [...cartItems];
//       updatedCart[existingIndex].quantity += room.quantity || 1;
//       setCartItems(updatedCart);
//     } else {
//       setCartItems((prev) => [...prev, {
//         ...room,
//         quantity: room.quantity || 1,
//         nights: room.nights || 1,
//       }]);
//     }

//     setShowDetailModal(false);
//     setStatusType('success');
//     setStatusMessage('Added to Cart!');
//     setStatusDetails(`${room.name} has been added to your cart.`);
//     setShowStatusModal(true);
//   };

//   const handleRemoveFromCart = (index) => {
//     setCartItems((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleProceedToPayment = () => {
//     setShowCartModal(false);
//     setStatusType('info');
//     setStatusMessage('Payment Processing');
//     setStatusDetails('Redirecting to payment gateway...');
//     setShowStatusModal(true);

//     setTimeout(() => {
//       setStatusType('success');
//       setStatusMessage('Payment Successful!');
//       setStatusDetails('Your booking has been confirmed.');
//       setCartItems([]);
//     }, 2000);
//   };

//   const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.nights * item.quantity, 0) * 1.1;

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
//             {showAll ? 'Show Less' : 'View More Rooms'}
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
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
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
//       <div className="w-full mt-0 mb-1 rounded-2xl overflow-hidden relative h-[80vh]">
//         <Carousel
//           infiniteLoop
//           autoPlay
//           showThumbs={false}
//           showStatus={false}
//           interval={5000}
//           transitionTime={1000}
//           onChange={(index) => setCurrentSlide(index)}
//           className="hero-carousel h-full"
//         >
//           {carouselItems.map((item, index) => (
//             <div key={index} className="relative h-[80vh]">
//               <img
//                 src={item.imgSrc}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-full object-cover"
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
//                   className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
//                 >
//                   <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
//                   className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
//                 >
//                   <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
//                   className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
//                 >
//                   <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
//   const [statusType, setStatusType] = useState('info');
//   const [statusMessage, setStatusMessage] = useState('');
//   const [statusDetails, setStatusDetails] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const results = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/84383/92823/contact",
//         formData
//       );

//       if (results.data.success) {
//         setStatusType('success');
//         setStatusMessage('Message Sent Successfully!');
//         setStatusDetails('We will get back to you within 24 hours.');
//         setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
//       } else {
//         setStatusType('error');
//         setStatusMessage('Failed to send message');
//         setStatusDetails('Please try again later.');
//       }
//     } catch (error) {
//       setStatusType('error');
//       setStatusMessage('Submission Error');
//       setStatusDetails(error.response?.data?.message || 'Network error. Please try again.');
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
//                 Have questions or need assistance? Our team is here to help you with all your inquiries.
//               </p>

//               <div className="space-y-6">
//                 <ContactInfoCard
//                   icon={
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                   }
//                   title="Phone"
//                   items={["+250 (78) 794-4577", "+250 (72) 755-6145"]}
//                 />
//                 <ContactInfoCard
//                   icon={
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   }
//                   title="Email"
//                   items={["info@hotel.com", "support@hotel.com"]}
//                 />
//                 <ContactInfoCard
//                   icon={
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   }
//                   title="Address"
//                   items={["123 Luxury Street", "Hospitality District", "Kigali, KG 191"]}
//                 />
//                 <ContactInfoCard
//                   icon={
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   }
//                   title="Working Hours"
//                   items={["Monday - Friday: 9:00 - 18:00", "Saturday: 10:00 - 16:00", "Sunday: Closed"]}
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
//                     <label className="block text-gray-700 mb-2 font-medium">Full Name *</label>
//                     <div className="relative">
//                       <span className="absolute left-3 top-3 text-gray-400">
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
//                       <label className="block text-gray-700 mb-2 font-medium">Email *</label>
//                       <div className="relative">
//                         <span className="absolute left-3 top-3 text-gray-400">
//                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
//                       <label className="block text-gray-700 mb-2 font-medium">Phone Number</label>
//                       <div className="relative">
//                         <span className="absolute left-3 top-3 text-gray-400">
//                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
//                     <label className="block text-gray-700 mb-2 font-medium">Subject *</label>
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
//                     <label className="block text-gray-700 mb-2 font-medium">Message *</label>
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
//                         <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
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
//         <div className="text-blue-400">
//           {icon}
//         </div>
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
//   const [paymentMethod, setPaymentMethod] = useState('credit');
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
//         timestamp: new Date().toISOString()
//       };

//       const results = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/84383/92823/payment",
//         paymentData
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
//                 <h2 className="text-xl font-bold text-gray-800">Payment Details</h2>
//                 <button
//                   onClick={onClose}
//                   className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-colors"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>

//               <div className="bg-blue-50 p-4 rounded-xl mb-4">
//                 <p className="text-sm text-gray-600 mb-1">Total Amount</p>
//                 <p className="text-2xl font-bold text-blue-600">${cartTotal.toFixed(2)}</p>
//               </div>

//               <div className="mb-4">
//                 <p className="text-sm font-medium text-gray-700 mb-2">Payment Method</p>
//                 <div className="grid grid-cols-2 gap-2">
//                   <button
//                     onClick={() => setPaymentMethod('credit')}
//                     className={`py-3 px-4 rounded-lg border-2 transition-all flex items-center justify-center ${
//                       paymentMethod === 'credit'
//                         ? 'border-blue-600 bg-blue-50 text-blue-600'
//                         : 'border-gray-200 text-gray-600 hover:border-gray-300'
//                     }`}
//                   >
//                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//                     </svg>
//                     Credit Card
//                   </button>
//                   <button
//                     onClick={() => setPaymentMethod('paypal')}
//                     className={`py-3 px-4 rounded-lg border-2 transition-all flex items-center justify-center ${
//                       paymentMethod === 'paypal'
//                         ? 'border-blue-600 bg-blue-50 text-blue-600'
//                         : 'border-gray-200 text-gray-600 hover:border-gray-300'
//                     }`}
//                   >
//                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//                     </svg>
//                     PayPal
//                   </button>
//                 </div>
//               </div>

//               {paymentMethod === 'credit' && (
//                 <form onSubmit={handleSubmit}>
//                   <div className="space-y-3">
//                     <div>
//                       <label className="block text-gray-700 mb-1 text-sm">Card Number</label>
//                       <input
//                         type="text"
//                         placeholder="1234 5678 9012 3456"
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 mb-1 text-sm">Cardholder Name</label>
//                       <input
//                         type="text"
//                         placeholder="John Doe"
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         required
//                       />
//                     </div>
//                     <div className="grid grid-cols-2 gap-2">
//                       <div>
//                         <label className="block text-gray-700 mb-1 text-sm">Expiry Date</label>
//                         <input
//                           type="text"
//                           placeholder="MM/YY"
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 mb-1 text-sm">CVV</label>
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
//                         <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                         </svg>
//                         Processing...
//                       </div>
//                     ) : (
//                       `Pay $${cartTotal.toFixed(2)}`
//                     )}
//                   </button>
//                 </form>
//               )}

//               {paymentMethod === 'paypal' && (
//                 <button
//                   onClick={() => setShowConfirmation(true)}
//                   disabled={isProcessing}
//                   className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white font-medium py-4 px-6 rounded-lg transition-all transform hover:scale-105"
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

// import React, { useState, useEffect } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Icons as components
// const FaTimes = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>;
// const FaUserPlus = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4zm-9-4V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 2c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/></svg>;
// const FaUserAlt = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>;
// const FaEnvelopeIcon = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>;
// const FaPhone = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>;
// const FaLock = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>;
// const FaKey = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>;
// const FaEye = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>;
// const FaEyeSlash = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-4 .7l2.17 2.17c.57-.23 1.18-.36 1.83-.36zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>;
// const FaBed = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7 11c1.66 0 2.99-1.34 2.99-3S8.66 5 7 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm8-6h-8v2h8V5zm2-2h-8v2h8V3zm-2 6h-4v2h4V9zm-6-2H5v2h4V7zM19 3v2h2v10h-2v5h-2v-5H5v5H3v-5H1V3h18zm0 12V5h-2v10h2z"/></svg>;
// const FaBath = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12H2v-2H0v2h2v7c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-7h2v-2h-2v-2h-2v2zm-6-6v2H8V6h8zm2-2H4v8h16V4z"/></svg>;
// const FaRuler = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3 5v14h18V5H3zm16 12H5V7h14v10z"/><path d="M7 9h2v6H7zm4 0h2v6h-2zm4 0h2v6h-2z"/></svg>;
// const FaShoppingCart = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>;
// const FaStar = ({ filled }) => <svg className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>;
// const FaArrowLeft = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>;
// const FaArrowRight = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>;
// const FaCheck = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>;
// const FaSpinner = () => <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>;
// const FaCalendar = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM7 12h5v5H7v-5z"/></svg>;
// const FaUsers = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-1 .05 1.16.84 2 1.87 2 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>;
// const FaChild = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14c-2.67 0-5-1.34-6.67-3.45.17-2.21 4-3.45 6.67-3.45s6.5 1.24 6.67 3.45C17 17.66 14.67 19 12 19z"/></svg>;
// const FaHotel = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>;
// const FaCreditCard = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>;
// const FaPaypal = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.5 6.5C19.5 4.29 17.71 2.5 15.5 2.5H8.5C6.29 2.5 4.5 4.29 4.5 6.5v11c0 2.21 1.79 4 4 4h7c2.21 0 4-1.79 4-4v-11zM7 6.5C7 5.67 7.67 5 8.5 5h7c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-7C7.67 9 7 8.33 7 7.5v-1z"/></svg>;
// const FaCheckCircle = () => <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>;
// const FaTimesCircle = () => <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>;
// const FaExclamationTriangle = () => <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm1 15h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>;

// // Animation variants
// const overlayVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
//   exit: { opacity: 0 }
// };

// const modalVariants = {
//   hidden: { opacity: 0, y: 50, scale: 0.9 },
//   visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", damping: 25, stiffness: 300 } },
//   exit: { opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } }
// };

// const itemVariants = {
//   hidden: { opacity: 0, x: -20 },
//   visible: { opacity: 1, x: 0 }
// };

// // ==================== CAROUSEL DATA ====================
// const carouselItems = [
//   {
//     imgSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     subtitle: "Luxury Redefined",
//     title: "Experience Ultimate Comfort & Elegance",
//     buttons: [
//       { text: "Our Rooms", href: "#", variant: "primary", action: "rooms" },
//       { text: "Book Now", href: "#", variant: "outline", action: "book" }
//     ]
//   },
//   {
//     imgSrc: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     subtitle: "5-Star Service",
//     title: "Where Every Moment Feels Special",
//     buttons: [
//       { text: "Our Rooms", href: "#", variant: "primary", action: "rooms" },
//       { text: "Book Now", href: "#", variant: "outline", action: "book" }
//     ]
//   },
//   {
//     imgSrc: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     subtitle: "Exclusive Offers",
//     title: "Book Now & Get 20% Off Your Stay",
//     buttons: [
//       { text: "Our Rooms", href: "#", variant: "primary", action: "rooms" },
//       { text: "Book Now", href: "#", variant: "outline", action: "book" }
//     ]
//   }
// ];

// // ==================== ROOM DATA ====================
// const rooms = [
//   {
//     id: 1,
//     name: "Deluxe King Room",
//     price: 199,
//     image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 1,
//     baths: 1,
//     description: "Spacious room with king-sized bed, luxury amenities, and city view.",
//     size: 350,
//     rating: 5,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning"]
//   },
//   {
//     id: 2,
//     name: "Executive Suite",
//     price: 299,
//     image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 2,
//     baths: 2,
//     description: "Luxurious suite with separate living area, perfect for business travelers.",
//     size: 550,
//     rating: 5,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning", "Work Desk"]
//   },
//   {
//     id: 3,
//     name: "Family Room",
//     price: 249,
//     image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
//     beds: 3,
//     baths: 2,
//     description: "Perfect for families with multiple beds and ample space.",
//     size: 450,
//     rating: 5,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning", "Kids Area"]
//   },
//   {
//     id: 4,
//     name: "Presidential Suite",
//     price: 599,
//     image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 3,
//     baths: 3,
//     description: "The ultimate luxury experience with panoramic views and private butler service.",
//     size: 1200,
//     rating: 5,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning", "Butler Service"]
//   },
//   {
//     id: 5,
//     name: "Garden View Room",
//     price: 179,
//     image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 1,
//     baths: 1,
//     description: "Peaceful room overlooking our beautiful gardens.",
//     size: 300,
//     rating: 4,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning", "Garden View"]
//   },
//   {
//     id: 6,
//     name: "Penthouse Suite",
//     price: 799,
//     image: "https://images.unsplash.com/photo-1598928501498-c04a8833f51e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     beds: 4,
//     baths: 4,
//     description: "Top-floor luxury with private terrace and jacuzzi.",
//     size: 1500,
//     rating: 5,
//     amenities: ["Free WiFi", "Breakfast", "Mini Bar", "Air Conditioning", "Jacuzzi"]
//   }
// ];

// // ==================== STATUS MODAL ====================
// const StatusModal = ({ open, onClose, type, title, message }) => {
//   const getIcon = () => {
//     switch(type) {
//       case 'success':
//         return <FaCheckCircle className="text-green-500" />;
//       case 'error':
//         return <FaTimesCircle className="text-red-500" />;
//       case 'warning':
//         return <FaExclamationTriangle className="text-yellow-500" />;
//       default:
//         return <FaCheckCircle className="text-blue-500" />;
//     }
//   };

//   const getColors = () => {
//     switch(type) {
//       case 'success':
//         return { bg: 'from-green-600 to-green-500', hover: 'from-green-700 to-green-600' };
//       case 'error':
//         return { bg: 'from-red-600 to-red-500', hover: 'from-red-700 to-red-600' };
//       case 'warning':
//         return { bg: 'from-yellow-600 to-yellow-500', hover: 'from-yellow-700 to-yellow-600' };
//       default:
//         return { bg: 'from-blue-600 to-purple-600', hover: 'from-blue-700 to-purple-700' };
//     }
//   };

//   const colors = getColors();

//   return (
//     <AnimatePresence>
//       {open && (
//         <>
//           <motion.div
//             variants={overlayVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]"
//             onClick={onClose}
//           />
//           <motion.div
//             variants={modalVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700"
//           >
//             <div className="p-8 text-center">
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.2, type: "spring" }}
//                 className="flex justify-center mb-4"
//               >
//                 {getIcon()}
//               </motion.div>

//               <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
//               <p className="text-gray-300 mb-6">{message}</p>

//               <button
//                 onClick={onClose}
//                 className={`w-full bg-gradient-to-r ${colors.bg} hover:${colors.hover} text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105`}
//               >
//                 Close
//               </button>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// // ==================== CONFIRMATION MODAL ====================
// const ConfirmationModal = ({ open, onClose, onConfirm, title, message }) => {
//   return (
//     <AnimatePresence>
//       {open && (
//         <>
//           <motion.div
//             variants={overlayVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]"
//             onClick={onClose}
//           />
//           <motion.div
//             variants={modalVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700"
//           >
//             <div className="p-6">
//               <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
//                 <FaTimes />
//               </button>

//               <div className="text-center mb-6">
//                 <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center">
//                   <FaExclamationTriangle className="text-4xl text-white" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-white">{title || 'Confirm Action'}</h2>
//                 <p className="text-gray-300 mt-2">{message || 'Are you sure you want to proceed?'}</p>
//               </div>

//               <div className="flex gap-4">
//                 <button
//                   onClick={onClose}
//                   className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg border border-gray-700 transition-all"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={onConfirm}
//                   className="flex-1 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105"
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </>
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
//       variants={itemVariants}
//       initial="hidden"
//       animate="visible"
//       transition={{ delay }}
//       whileHover={{ y: -8 }}
//       className="col-span-12 md:col-span-6 lg:col-span-4"
//     >
//       <div
//         className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:shadow-2xl border border-gray-700"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="relative overflow-hidden h-64">
//           <img
//             className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
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
//                 className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-4"
//               >
//                 <h3 className="text-white text-lg font-semibold">Luxury Living</h3>
//                 <p className="text-white/80 text-sm">Discover A Brand Luxurious Hotel</p>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Price Badge */}
//           <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full font-bold text-sm">
//             ${room.price}<span className="text-xs font-normal">/night</span>
//           </div>

//           {/* Rating */}
//           <div className="absolute top-4 left-4 flex">
//             {[...Array(5)].map((_, i) => (
//               <FaStar key={i} filled={i < room.rating} />
//             ))}
//           </div>

//           {/* Hover Actions */}
//           <AnimatePresence>
//             {isHovered && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="absolute inset-0 bg-black/60 flex items-center justify-center gap-3"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => onViewDetail(room)}
//                   className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-purple-600 transition-colors border/20"
//                   title="View Details"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                   </svg>
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => onAddToCart({...room, quantity})}
//                   className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-green-600 transition-colors border/20"
//                   title="Add to Cart"
//                 >
//                   <FaShoppingCart />
//                 </motion.button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         <div className="p-6 flex-grow">
//           <h3 className="text-xl font-bold text-white mb-3">{room.name}</h3>

//           <div className="flex flex-wrap gap-2 mb-4">
//             <span className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm font-medium flex items-center border border-purple-500/30">
//               <FaBed />
//               <span className="ml-1">{room.beds} Bed{room.beds > 1 ? 's' : ''}</span>
//             </span>
//             <span className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm font-medium flex items-center border border-purple-500/30">
//               <FaBath />
//               <span className="ml-1">{room.baths} Bath{room.baths > 1 ? 's' : ''}</span>
//             </span>
//             <span className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm font-medium flex items-center border border-purple-500/30">
//               <FaRuler />
//               <span className="ml-1">{room.size} sq.ft</span>
//             </span>
//           </div>

//           <p className="text-gray-300 mb-4 line-clamp-2">{room.description}</p>

//           <div className="flex flex-wrap gap-1 mb-4">
//             {room.amenities.slice(0, 3).map((amenity, index) => (
//               <span key={index} className="bg-purple-900/30 text-purple-300 text-xs px-2 py-1 rounded border border-purple-500/30">
//                 {amenity}
//               </span>
//             ))}
//             {room.amenities.length > 3 && (
//               <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">
//                 +{room.amenities.length - 3}
//               </span>
//             )}
//           </div>

//           <div className="flex items-center justify-between mt-auto">
//             <div className="flex items-center bg-gray-800 rounded-lg border border-gray-700">
//               <button
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 className="px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-l-lg transition-colors"
//               >
//                 -
//               </button>
//               <input
//                 type="number"
//                 min="1"
//                 value={quantity}
//                 onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
//                 className="w-12 text-center bg-transparent border-none py-2 text-white focus:outline-none"
//               />
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-r-lg transition-colors"
//               >
//                 +
//               </button>
//             </div>
//             <div className="text-right">
//               <p className="text-xs text-gray-400">Total</p>
//               <p className="font-bold text-purple-400">${(room.price * quantity).toFixed(2)}</p>
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
//       <>
//         <motion.div
//           variants={overlayVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]"
//           onClick={onClose}
//         />
//         <motion.div
//           variants={modalVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-4xl bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700 max-h-[90vh] overflow-y-auto"
//         >
//           <div className="relative">
//             <img
//               src={room.image}
//               alt={room.name}
//               className="w-full h-80 object-cover rounded-t-2xl"
//             />
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-gray-800 transition-colors border border-gray-700"
//             >
//               <FaTimes />
//             </button>
//             <div className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
//               ${room.price}<span className="text-sm font-normal">/night</span>
//             </div>
//           </div>

//           <div className="p-8">
//             <h2 className="text-3xl font-bold text-white mb-2">{room.name}</h2>

//             <div className="flex items-center mb-4">
//               {[...Array(5)].map((_, i) => (
//                 <FaStar key={i} filled={i < room.rating} />
//               ))}
//             </div>

//             <div className="flex flex-wrap gap-3 mb-6">
//               <span className="bg-gray-800 text-purple-400 px-4 py-2 rounded-lg flex items-center border border-purple-500/30">
//                 <FaBed className="mr-2" />
//                 {room.beds} Bed{room.beds > 1 ? 's' : ''}
//               </span>
//               <span className="bg-gray-800 text-purple-400 px-4 py-2 rounded-lg flex items-center border border-purple-500/30">
//                 <FaBath className="mr-2" />
//                 {room.baths} Bath{room.baths > 1 ? 's' : ''}
//               </span>
//               <span className="bg-gray-800 text-purple-400 px-4 py-2 rounded-lg flex items-center border border-purple-500/30">
//                 <FaRuler className="mr-2" />
//                 {room.size} sq.ft
//               </span>
//             </div>

//             <p className="text-gray-300 leading-relaxed mb-6">{room.description}</p>

//             <h3 className="text-xl font-semibold text-white mb-3">Amenities</h3>
//             <div className="flex flex-wrap gap-2 mb-8">
//               {room.amenities.map((amenity, index) => (
//                 <span key={index} className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
//                   {amenity}
//                 </span>
//               ))}
//             </div>

//             <hr className="border-gray-700 my-6" />

//             <h3 className="text-xl font-semibold text-white mb-4">Booking Details</h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//               <div>
//                 <label className="block text-gray-300 mb-2 font-medium">Number of Nights</label>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => setNights(Math.max(1, nights - 1))}
//                     className="bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-l-lg flex items-center justify-center transition-colors border border-gray-700"
//                   >
//                     -
//                   </button>
//                   <input
//                     type="number"
//                     min="1"
//                     value={nights}
//                     onChange={(e) => setNights(Math.max(1, parseInt(e.target.value) || 1))}
//                     className="w-16 text-center bg-gray-800 border-t border-b border-gray-700 h-10 text-white focus:outline-none"
//                   />
//                   <button
//                     onClick={() => setNights(nights + 1)}
//                     className="bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-r-lg flex items-center justify-center transition-colors border border-gray-700"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-gray-300 mb-2 font-medium">Number of Rooms</label>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                     className="bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-l-lg flex items-center justify-center transition-colors border border-gray-700"
//                   >
//                     -
//                   </button>
//                   <input
//                     type="number"
//                     min="1"
//                     value={quantity}
//                     onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
//                     className="w-16 text-center bg-gray-800 border-t border-b border-gray-700 h-10 text-white focus:outline-none"
//                   />
//                   <button
//                     onClick={() => setQuantity(quantity + 1)}
//                     className="bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-r-lg flex items-center justify-center transition-colors border border-gray-700"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl mb-6 border border-purple-500/30">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <p className="text-gray-400 mb-1">Total Price</p>
//                   <p className="text-3xl font-bold text-purple-400">${(room.price * nights * quantity).toFixed(2)}</p>
//                 </div>
//                 <button
//                   onClick={() => onAddToCart({ ...room, nights, quantity })}
//                   className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 font-medium shadow-lg flex items-center"
//                 >
//                   <FaShoppingCart className="mr-2" />
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </>
//     </AnimatePresence>
//   );
// };

// // ==================== CART MODAL ====================
// const CartModal = ({ cartItems, onClose, onRemoveItem, onProceedToPayment }) => {
//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.nights * item.quantity, 0);
//   const tax = subtotal * 0.1;
//   const total = subtotal + tax;

//   return (
//     <AnimatePresence>
//       <>
//         <motion.div
//           variants={overlayVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]"
//           onClick={onClose}
//         />
//         <motion.div
//           variants={modalVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700 max-h-[90vh] overflow-y-auto"
//         >
//           <div className="p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-white">Your Cart</h2>
//               <button onClick={onClose} className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full p-2 transition-colors">
//                 <FaTimes />
//               </button>
//             </div>

//             {cartItems.length === 0 ? (
//               <div className="text-center py-12">
//                 <div className="w-24 h-24 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
//                   <FaShoppingCart className="text-4xl text-gray-600" />
//                 </div>
//                 <p className="text-gray-400 text-lg">Your cart is empty</p>
//               </div>
//             ) : (
//               <>
//                 <div className="divide-y divide-gray-700 max-h-96 overflow-y-auto">
//                   {cartItems.map((item, index) => (
//                     <div key={index} className="py-4 flex items-center">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-20 h-20 object-cover rounded-lg"
//                       />
//                       <div className="ml-4 flex-grow">
//                         <h3 className="font-semibold text-white">{item.name}</h3>
//                         <p className="text-sm text-gray-400">
//                           {item.quantity} room(s) × {item.nights} night(s)
//                         </p>
//                         <p className="text-sm font-medium text-purple-400">${item.price}/night</p>
//                       </div>
//                       <div className="text-right">
//                         <p className="font-bold text-white">${(item.price * item.nights * item.quantity).toFixed(2)}</p>
//                         <button
//                           onClick={() => onRemoveItem(index)}
//                           className="text-red-400 text-sm hover:text-red-300 mt-1"
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="border-t border-gray-700 mt-6 pt-6">
//                   <div className="space-y-2 mb-4">
//                     <div className="flex justify-between text-gray-300">
//                       <span>Subtotal</span>
//                       <span>${subtotal.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between text-gray-300">
//                       <span>Tax (10%)</span>
//                       <span>${tax.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-700">
//                       <span className="text-white">Total</span>
//                       <span className="text-purple-400">${total.toFixed(2)}</span>
//                     </div>
//                   </div>

//                   <button
//                     onClick={onProceedToPayment}
//                     className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105"
//                   >
//                     Proceed to Payment
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </motion.div>
//       </>
//     </AnimatePresence>
//   );
// };

// // ==================== BOOKING MODAL ====================
// const BookingModal = ({ onClose }) => {
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
//   const [statusType, setStatusType] = useState('info');
//   const [statusTitle, setStatusTitle] = useState('');
//   const [statusMessage, setStatusMessage] = useState('');
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const steps = ['Personal Details', 'Stay Details', 'Confirmation'];

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
//         formData
//       );

//       if (results.data.success) {
//         setStatusType('success');
//         setStatusTitle('Booking Confirmed!');
//         setStatusMessage('A confirmation email has been sent to your inbox.');

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
//         setStatusType('error');
//         setStatusTitle('Booking Failed');
//         setStatusMessage('Please try again or contact support.');
//       }
//     } catch (error) {
//       setStatusType('error');
//       setStatusTitle('Submission Error');
//       setStatusMessage(error.response?.data?.message || 'Network error. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//       setShowStatusModal(true);
//     }
//   };

//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <motion.div variants={itemVariants} initial="hidden" animate="visible" className="space-y-4">
//             <div>
//               <label className="block text-gray-300 text-sm mb-1">Full Name</label>
//               <div className="relative">
//                 <FaUserAlt className="absolute left-3 top-3.5 text-gray-400" />
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500`}
//                   placeholder="John Doe"
//                 />
//               </div>
//               {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//             </div>

//             <div>
//               <label className="block text-gray-300 text-sm mb-1">Email</label>
//               <div className="relative">
//                 <FaEnvelopeIcon className="absolute left-3 top-3.5 text-gray-400" />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500`}
//                   placeholder="john@example.com"
//                 />
//               </div>
//               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//             </div>

//             <div>
//               <label className="block text-gray-300 text-sm mb-1">Phone Number</label>
//               <div className="relative">
//                 <FaPhone className="absolute left-3 top-3.5 text-gray-400" />
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className={`w-full bg-gray-800 border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500`}
//                   placeholder="+1 (123) 456-7890"
//                 />
//               </div>
//               {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//             </div>
//           </motion.div>
//         );

//       case 1:
//         return (
//           <motion.div variants={itemVariants} initial="hidden" animate="visible" className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-300 text-sm mb-1">Check-in Date</label>
//                 <div className="relative">
//                   <FaCalendar className="absolute left-3 top-3.5 text-gray-400" />
//                   <input
//                     type="date"
//                     name="checkInDate"
//                     value={formData.checkInDate}
//                     onChange={handleChange}
//                     min={new Date().toISOString().split('T')[0]}
//                     className={`w-full bg-gray-800 border ${errors.checkInDate ? 'border-red-500' : 'border-gray-700'} rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500`}
//                   />
//                 </div>
//                 {errors.checkInDate && <p className="text-red-500 text-sm mt-1">{errors.checkInDate}</p>}
//               </div>

//               <div>
//                 <label className="block text-gray-300 text-sm mb-1">Check-out Date</label>
//                 <div className="relative">
//                   <FaCalendar className="absolute left-3 top-3.5 text-gray-400" />
//                   <input
//                     type="date"
//                     name="checkOutDate"
//                     value={formData.checkOutDate}
//                     onChange={handleChange}
//                     min={formData.checkInDate || new Date().toISOString().split('T')[0]}
//                     className={`w-full bg-gray-800 border ${errors.checkOutDate ? 'border-red-500' : 'border-gray-700'} rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500`}
//                   />
//                 </div>
//                 {errors.checkOutDate && <p className="text-red-500 text-sm mt-1">{errors.checkOutDate}</p>}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-300 text-sm mb-1">Adults</label>
//                 <div className="relative">
//                   <FaUsers className="absolute left-3 top-3.5 text-gray-400" />
//                   <select
//                     name="adults"
//                     value={formData.adults}
//                     onChange={handleChange}
//                     className={`w-full bg-gray-800 border ${errors.adults ? 'border-red-500' : 'border-gray-700'} rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500 appearance-none`}
//                   >
//                     <option value="">Select adults</option>
//                     {[1, 2, 3, 4, 5].map((num) => (
//                       <option key={num} value={num}>{num} {num === 1 ? 'Adult' : 'Adults'}</option>
//                     ))}
//                   </select>
//                 </div>
//                 {errors.adults && <p className="text-red-500 text-sm mt-1">{errors.adults}</p>}
//               </div>

//               <div>
//                 <label className="block text-gray-300 text-sm mb-1">Children</label>
//                 <div className="relative">
//                   <FaChild className="absolute left-3 top-3.5 text-gray-400" />
//                   <select
//                     name="children"
//                     value={formData.children}
//                     onChange={handleChange}
//                     className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500 appearance-none"
//                   >
//                     <option value="">Select children</option>
//                     {[0, 1, 2, 3, 4].map((num) => (
//                       <option key={num} value={num}>{num} {num === 1 ? 'Child' : 'Children'}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-gray-300 text-sm mb-1">Room Type</label>
//               <div className="relative">
//                 <FaHotel className="absolute left-3 top-3.5 text-gray-400" />
//                 <select
//                   name="roomType"
//                   value={formData.roomType}
//                   onChange={handleChange}
//                   className={`w-full bg-gray-800 border ${errors.roomType ? 'border-red-500' : 'border-gray-700'} rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500 appearance-none`}
//                 >
//                   <option value="">Select room type</option>
//                   {roomTypes.map((room) => (
//                     <option key={room.value} value={room.value}>{room.label}</option>
//                   ))}
//                 </select>
//               </div>
//               {errors.roomType && <p className="text-red-500 text-sm mt-1">{errors.roomType}</p>}
//             </div>

//             <div>
//               <label className="block text-gray-300 text-sm mb-1">Special Requests (Optional)</label>
//               <textarea
//                 name="specialRequests"
//                 value={formData.specialRequests}
//                 onChange={handleChange}
//                 rows="3"
//                 className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:border-purple-500"
//                 placeholder="Any special requirements?"
//               />
//             </div>
//           </motion.div>
//         );

//       case 2:
//         return (
//           <motion.div variants={itemVariants} initial="hidden" animate="visible">
//             <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/30">
//               <h3 className="text-lg font-semibold text-white mb-4">Booking Summary</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between py-2 border-b border-gray-700">
//                   <span className="text-gray-400">Name:</span>
//                   <span className="font-medium text-white">{formData.name}</span>
//                 </div>
//                 <div className="flex justify-between py-2 border-b border-gray-700">
//                   <span className="text-gray-400">Email:</span>
//                   <span className="font-medium text-white">{formData.email}</span>
//                 </div>
//                 <div className="flex justify-between py-2 border-b border-gray-700">
//                   <span className="text-gray-400">Phone:</span>
//                   <span className="font-medium text-white">{formData.phone}</span>
//                 </div>
//                 <div className="flex justify-between py-2 border-b border-gray-700">
//                   <span className="text-gray-400">Check-in:</span>
//                   <span className="font-medium text-white">{formData.checkInDate}</span>
//                 </div>
//                 <div className="flex justify-between py-2 border-b border-gray-700">
//                   <span className="text-gray-400">Check-out:</span>
//                   <span className="font-medium text-white">{formData.checkOutDate}</span>
//                 </div>
//                 <div className="flex justify-between py-2 border-b border-gray-700">
//                   <span className="text-gray-400">Guests:</span>
//                   <span className="font-medium text-white">
//                     {formData.adults} Adults, {formData.children || 0} Children
//                   </span>
//                 </div>
//                 <div className="flex justify-between py-2">
//                   <span className="text-gray-400">Room Type:</span>
//                   <span className="font-medium text-white">
//                     {roomTypes.find(r => r.value === formData.roomType)?.label}
//                   </span>
//                 </div>
//                 {formData.specialRequests && (
//                   <div className="flex justify-between py-2">
//                     <span className="text-gray-400">Special Requests:</span>
//                     <span className="font-medium text-white">{formData.specialRequests}</span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <motion.div variants={overlayVariants} initial="hidden" animate="visible" exit="exit" className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]" onClick={onClose} />
//       <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700 max-h-[90vh] overflow-y-auto">
//         <div className="p-6">
//           <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
//             <FaTimes />
//           </button>

//           <div className="text-center mb-6">
//             <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
//               <FaHotel className="text-4xl text-white" />
//             </div>
//             <h2 className="text-2xl font-bold text-white">Book Your Stay</h2>
//           </div>

//           {/* Stepper */}
//           <div className="flex items-center mb-8">
//             {steps.map((label, index) => (
//               <React.Fragment key={label}>
//                 <div className="flex items-center">
//                   <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
//                     activeStep >= index
//                       ? 'border-purple-500 bg-purple-600 text-white'
//                       : 'border-gray-600 text-gray-400'
//                   }`}>
//                     {activeStep > index ? <FaCheck className="w-4 h-4" /> : index + 1}
//                   </div>
//                   <span className={`ml-2 text-sm font-medium ${
//                     activeStep >= index ? 'text-white' : 'text-gray-400'
//                   }`}>
//                     {label}
//                   </span>
//                 </div>
//                 {index < steps.length - 1 && (
//                   <div className={`flex-1 h-0.5 mx-4 transition-all ${
//                     activeStep > index ? 'bg-purple-600' : 'bg-gray-700'
//                   }`} />
//                 )}
//               </React.Fragment>
//             ))}
//           </div>

//           <form onSubmit={handleSubmit}>
//             {getStepContent(activeStep)}

//             <div className="flex justify-between mt-8">
//               <button
//                 type="button"
//                 onClick={handleBack}
//                 disabled={activeStep === 0}
//                 className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center ${
//                   activeStep === 0
//                     ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
//                     : 'bg-gray-800 text-white hover:bg-gray-700'
//                 }`}
//               >
//                 <FaArrowLeft className="mr-2" />
//                 Back
//               </button>

//               {activeStep === steps.length - 1 ? (
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all transform hover:scale-105 font-medium flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <FaSpinner className="mr-2" />
//                       Processing...
//                     </>
//                   ) : (
//                     <>
//                       <FaCheck className="mr-2" />
//                       Confirm Booking
//                     </>
//                   )}
//                 </button>
//               ) : (
//                 <button
//                   type="button"
//                   onClick={handleNext}
//                   className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all transform hover:scale-105 font-medium flex items-center"
//                 >
//                   Next
//                   <FaArrowRight className="ml-2" />
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//       </motion.div>

//       <StatusModal
//         open={showStatusModal}
//         onClose={() => setShowStatusModal(false)}
//         type={statusType}
//         title={statusTitle}
//         message={statusMessage}
//       />

//       <ConfirmationModal
//         open={showConfirmation}
//         onClose={() => setShowConfirmation(false)}
//         onConfirm={confirmSubmit}
//         title="Confirm Booking"
//         message="Please confirm your booking details. A confirmation email will be sent to you."
//       />
//     </>
//   );
// };

// // ==================== ROOMS SERVICES MODAL ====================
// const RoomsServicesModal = ({ onClose }) => {
//   const [showAll, setShowAll] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const [showDetailModal, setShowDetailModal] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [showCartModal, setShowCartModal] = useState(false);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [showStatusModal, setShowStatusModal] = useState(false);
//   const [statusType, setStatusType] = useState('info');
//   const [statusTitle, setStatusTitle] = useState('');
//   const [statusMessage, setStatusMessage] = useState('');

//   const handleViewDetail = (room) => {
//     setSelectedRoom(room);
//     setShowDetailModal(true);
//   };

//   const handleAddToCart = (room) => {
//     const existingIndex = cartItems.findIndex(
//       (item) => item.id === room.id && item.nights === room.nights
//     );

//     if (existingIndex >= 0) {
//       const updatedCart = [...cartItems];
//       updatedCart[existingIndex].quantity += room.quantity || 1;
//       setCartItems(updatedCart);
//     } else {
//       setCartItems((prev) => [...prev, {
//         ...room,
//         quantity: room.quantity || 1,
//         nights: room.nights || 1,
//       }]);
//     }

//     setShowDetailModal(false);
//     setStatusType('success');
//     setStatusTitle('Added to Cart!');
//     setStatusMessage(`${room.name} has been added to your cart.`);
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
//     setStatusType('success');
//     setStatusTitle('Payment Successful!');
//     setStatusMessage('Your booking has been confirmed.');
//     setShowStatusModal(true);
//     setCartItems([]);
//   };

//   const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.nights * item.quantity, 0) * 1.1;

//   return (
//     <>
//       <motion.div variants={overlayVariants} initial="hidden" animate="visible" exit="exit" className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]" onClick={onClose} />
//       <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-7xl bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700 max-h-[90vh] overflow-y-auto">
//         <div className="p-6">
//           <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
//             <FaTimes />
//           </button>

//           <div className="text-center mb-6">
//             <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
//               <FaHotel className="text-4xl text-white" />
//             </div>
//             <h2 className="text-2xl font-bold text-white">Explore Our Luxury Rooms</h2>
//           </div>

//           <div className="grid grid-cols-12 gap-6">
//             {(showAll ? rooms : rooms.slice(0, 3)).map((room, index) => (
//               <RoomCard
//                 key={room.id}
//                 room={room}
//                 delay={index * 0.1}
//                 onViewDetail={handleViewDetail}
//                 onAddToCart={handleAddToCart}
//               />
//             ))}
//           </div>

//           <div className="text-center mt-8">
//             <button
//               onClick={() => setShowAll(!showAll)}
//               className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
//             >
//               {showAll ? 'Show Less' : 'View More Rooms'}
//             </button>
//           </div>

//           {/* Cart Button */}
//           {cartItems.length > 0 && (
//             <motion.button
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setShowCartModal(true)}
//               className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl z-[102] flex items-center gap-2"
//             >
//               <FaShoppingCart />
//               <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
//                 {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
//               </span>
//             </motion.button>
//           )}

//           {/* Modals */}
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

//           <StatusModal
//             open={showStatusModal}
//             onClose={() => setShowStatusModal(false)}
//             type={statusType}
//             title={statusTitle}
//             message={statusMessage}
//           />
//         </div>
//       </motion.div>
//     </>
//   );
// };

// // ==================== PAYMENT MODAL ====================
// const PaymentModal = ({ cartTotal, cartItems, onClose, onPaymentSuccess }) => {
//   const [paymentMethod, setPaymentMethod] = useState('credit');
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
//         timestamp: new Date().toISOString()
//       };

//       const results = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/84383/92823/payment",
//         paymentData
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
//       <motion.div variants={overlayVariants} initial="hidden" animate="visible" exit="exit" className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]" onClick={onClose} />
//       <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700">
//         <div className="p-6">
//           <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
//             <FaTimes />
//           </button>

//           <div className="text-center mb-6">
//             <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
//               <FaCreditCard className="text-4xl text-white" />
//             </div>
//             <h2 className="text-2xl font-bold text-white">Payment Details</h2>
//           </div>

//           <div className="bg-purple-900/30 p-4 rounded-xl mb-6 border border-purple-500/30">
//             <p className="text-sm text-gray-400 mb-1">Total Amount</p>
//             <p className="text-2xl font-bold text-purple-400">${cartTotal.toFixed(2)}</p>
//           </div>

//           <div className="mb-6">
//             <p className="text-sm font-medium text-gray-300 mb-3">Payment Method</p>
//             <div className="grid grid-cols-2 gap-3">
//               <button
//                 onClick={() => setPaymentMethod('credit')}
//                 className={`py-3 px-4 rounded-lg border-2 transition-all flex items-center justify-center ${
//                   paymentMethod === 'credit'
//                     ? 'border-purple-500 bg-purple-900/30 text-purple-400'
//                     : 'border-gray-700 text-gray-400 hover:border-gray-600'
//                 }`}
//               >
//                 <FaCreditCard className="mr-2" />
//                 Credit Card
//               </button>
//               <button
//                 onClick={() => setPaymentMethod('paypal')}
//                 className={`py-3 px-4 rounded-lg border-2 transition-all flex items-center justify-center ${
//                   paymentMethod === 'paypal'
//                     ? 'border-purple-500 bg-purple-900/30 text-purple-400'
//                     : 'border-gray-700 text-gray-400 hover:border-gray-600'
//                 }`}
//               >
//                 <FaPaypal className="mr-2" />
//                 PayPal
//               </button>
//             </div>
//           </div>

//           {paymentMethod === 'credit' && (
//             <form onSubmit={handleSubmit}>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-gray-300 text-sm mb-1">Card Number</label>
//                   <div className="relative">
//                     <FaCreditCard className="absolute left-3 top-3.5 text-gray-400" />
//                     <input
//                       type="text"
//                       placeholder="1234 5678 9012 3456"
//                       className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-gray-300 text-sm mb-1">Cardholder Name</label>
//                   <input
//                     type="text"
//                     placeholder="John Doe"
//                     className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:border-purple-500"
//                     required
//                   />
//                 </div>
//                 <div className="grid grid-cols-2 gap-3">
//                   <div>
//                     <label className="block text-gray-300 text-sm mb-1">Expiry Date</label>
//                     <input
//                       type="text"
//                       placeholder="MM/YY"
//                       className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:border-purple-500"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-300 text-sm mb-1">CVV</label>
//                     <input
//                       type="text"
//                       placeholder="123"
//                       className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:border-purple-500"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isProcessing}
//                 className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isProcessing ? (
//                   <div className="flex items-center justify-center">
//                     <FaSpinner className="mr-2" />
//                     Processing...
//                   </div>
//                 ) : (
//                   `Pay $${cartTotal.toFixed(2)}`
//                 )}
//               </button>
//             </form>
//           )}

//           {paymentMethod === 'paypal' && (
//             <button
//               onClick={() => setShowConfirmation(true)}
//               disabled={isProcessing}
//               className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105"
//             >
//               Pay with PayPal
//             </button>
//           )}
//         </div>
//       </motion.div>

//       <ConfirmationModal
//         open={showConfirmation}
//         onClose={() => setShowConfirmation(false)}
//         onConfirm={confirmPayment}
//         title="Confirm Payment"
//         message={`Are you sure you want to pay $${cartTotal.toFixed(2)}?`}
//       />
//     </>
//   );
// };

// // ==================== CONTACT MODAL ====================
// const ContactModal = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showStatusModal, setShowStatusModal] = useState(false);
//   const [statusType, setStatusType] = useState('info');
//   const [statusTitle, setStatusTitle] = useState('');
//   const [statusMessage, setStatusMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const results = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/84383/92823/contact",
//         formData
//       );

//       if (results.data.success) {
//         setStatusType('success');
//         setStatusTitle('Message Sent Successfully!');
//         setStatusMessage('We will get back to you within 24 hours.');
//         setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
//       } else {
//         setStatusType('error');
//         setStatusTitle('Failed to send message');
//         setStatusMessage('Please try again later.');
//       }
//     } catch (error) {
//       setStatusType('error');
//       setStatusTitle('Submission Error');
//       setStatusMessage(error.response?.data?.message || 'Network error. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//       setShowStatusModal(true);
//     }
//   };

//   return (
//     <>
//       <motion.div variants={overlayVariants} initial="hidden" animate="visible" exit="exit" className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]" onClick={onClose} />
//       <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700 max-h-[90vh] overflow-y-auto">
//         <div className="p-6">
//           <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
//             <FaTimes />
//           </button>

//           <div className="text-center mb-6">
//             <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
//               <FaEnvelopeIcon className="text-4xl text-white" />
//             </div>
//             <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
//             <p className="text-gray-400 mt-2">Have questions? We'd love to hear from you.</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-300 text-sm mb-1">Full Name</label>
//               <div className="relative">
//                 <FaUserAlt className="absolute left-3 top-3.5 text-gray-400" />
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500"
//                   placeholder="John Doe"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-300 text-sm mb-1">Email</label>
//                 <div className="relative">
//                   <FaEnvelopeIcon className="absolute left-3 top-3.5 text-gray-400" />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500"
//                     placeholder="john@example.com"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-gray-300 text-sm mb-1">Phone Number</label>
//                 <div className="relative">
//                   <FaPhone className="absolute left-3 top-3.5 text-gray-400" />
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500"
//                     placeholder="+1 (123) 456-7890"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-gray-300 text-sm mb-1">Subject</label>
//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:border-purple-500"
//                 placeholder="What's this about?"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-gray-300 text-sm mb-1">Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="5"
//                 className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:border-purple-500"
//                 placeholder="Your message here..."
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//             >
//               {isSubmitting ? (
//                 <>
//                   <FaSpinner className="mr-2" />
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   <FaEnvelopeIcon className="mr-2" />
//                   Send Message
//                 </>
//               )}
//             </button>
//           </form>

//           <div className="mt-6 pt-6 border-t border-gray-700">
//             <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
//             <div className="space-y-3">
//               <div className="flex items-center text-gray-300">
//                 <FaPhone className="mr-3 text-purple-400" />
//                 <span>+250 (78) 794-4577</span>
//               </div>
//               <div className="flex items-center text-gray-300">
//                 <FaEnvelopeIcon className="mr-3 text-purple-400" />
//                 <span>info@hotel.com</span>
//               </div>
//               <div className="flex items-center text-gray-300">
//                 <FaHotel className="mr-3 text-purple-400" />
//                 <span>123 Luxury Street, Kigali</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       <StatusModal
//         open={showStatusModal}
//         onClose={() => setShowStatusModal(false)}
//         type={statusType}
//         title={statusTitle}
//         message={statusMessage}
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
//       <div className="w-full mt-0 mb-1 rounded-2xl overflow-hidden relative h-[80vh]">
//         <Carousel
//           infiniteLoop
//           autoPlay
//           showThumbs={false}
//           showStatus={false}
//           interval={5000}
//           transitionTime={1000}
//           onChange={(index) => setCurrentSlide(index)}
//           className="hero-carousel h-full"
//         >
//           {carouselItems.map((item, index) => (
//             <div key={index} className="relative h-[80vh]">
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
//                         <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
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
//                             className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl"
//                           >
//                             Our Rooms
//                           </motion.button>
//                           <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => handleButtonClick("book")}
//                             className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg border-2 transition-all backdrop-blur-sm"
//                           >
//                             Book Now
//                           </motion.button>
//                           <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => handleButtonClick("contact")}
//                             className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg border-2 transition-all backdrop-blur-sm"
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
//           <RoomsServicesModal onClose={() => setShowRoomsModal(false)} />
//         )}

//         {showBookingModal && (
//           <BookingModal onClose={() => setShowBookingModal(false)} />
//         )}

//         {showContactModal && (
//           <ContactModal onClose={() => setShowContactModal(false)} />
//         )}
//       </AnimatePresence>

//       <ToastContainer position="top-right" theme="dark" />
//     </>
//   );
// };

// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // ==================== MATERIAL ICONS AS SVG COMPONENTS ====================
// const MaterialIcons = {
//   Close: ({ className = "w-6 h-6" }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
//     </svg>
//   ),

//   Menu: ({ className = "w-6 h-6" }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
//     </svg>
//   ),

//   Person: ({ className = "w-5 h-5" }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//     </svg>
//   ),

//   Email: ({ className = "w-5 h-5" }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
//     </svg>
//   ),

//   Phone: ({ className = "w-5 h-5" }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
//     </svg>
//   ),

//   // Add missing icons
//   Hotel: ({ className = "w-5 h-5" }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
//     </svg>
//   ),

//   Star: ({ className = "w-5 h-5" }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
//     </svg>
//   ),

//   Wifi: ({ className = "w-5 h-5" }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
//     </svg>
//   ),

//   Breakfast: ({ className = "w-5 h-5" }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/>
//     </svg>
//   ),

//   Pool: ({ className = "w-5 h-5" }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M2 15c1.67-.75 3.33-1.5 5-1.5s3.33.75 5 1.5c1.67.75 3.33 1.5 5 1.5s3.33-.75 5-1.5v-2c-1.67.75-3.33 1.5-5 1.5s-3.33-.75-5-1.5c-1.67-.75-3.33-1.5-5-1.5s-3.33.75-5 1.5v2z M2 19c1.67-.75 3.33-1.5 5-1.5s3.33.75 5 1.5c1.67.75 3.33 1.5 5 1.5s3.33-.75 5-1.5v-2c-1.67.75-3.33 1.5-5 1.5s-3.33-.75-5-1.5c-1.67-.75-3.33-1.5-5-1.5s-3.33.75-5 1.5v2z"/>
//     </svg>
//   ),

//   Gym: ({ className = "w-5 h-5" }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
//     </svg>
//   ),

//   Spa: ({ className = "w-5 h-5" }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 16c-2.69 0-5.04-1.58-6.12-4.04-.57 2.04-.93 4.23-.98 6.51.24.31.48.66.71 1.03.17.26.33.53.47.8 2.97-.26 5.63-1.74 7.92-4.3-.96-1.1-1.79-2.31-2.42-3.61-.28.45-.55.89-.83 1.32-.38.52-.76 1.02-1.15 1.49-.7.77-1.47 1.43-2.31 1.95-.06.66-.04 1.38.1 2.21 1.07-.39 2.07-.97 2.97-1.73.87-.74 1.6-1.59 2.16-2.49.55.9 1.28 1.75 2.15 2.49.9.76 1.9 1.34 2.97 1.73.14-.83.16-1.55.1-2.21-.84-.52-1.61-1.18-2.31-1.95-.39-.47-.77-.97-1.15-1.49-.28-.43-.55-.87-.83-1.32-.63 1.3-1.46 2.51-2.42 3.61 2.29 2.56 4.95 4.04 7.92 4.3.14-.27.3-.54.47-.8.23-.37.47-.72.71-1.03-.05-2.28-.41-4.47-.98-6.51C17.04 14.42 14.69 16 12 16z"/>
//     </svg>
//   ),

//   Parking: ({ className = "w-5 h-5" }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
//     </svg>
//   ),

//   CreditCard: ({ className = "w-5 h-5" }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
//     </svg>
//   ),

//   PayPal: ({ className = "w-5 h-5" }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M9.93 12.99c.1 0 2.42.1 3.8-.24 1.03-.26 1.92-.73 2.53-1.42.4-.45.66-1.02.76-1.64.12-.7.06-1.43-.18-2.12-.24-.69-.65-1.27-1.18-1.69-.55-.43-1.22-.7-1.9-.8-.37-.06-.75-.08-1.12-.08h-4.2l-.59 7.44h1.08zm.76-5.79h2.1c.31 0 .62.03.92.09.36.07.69.23.96.48.26.23.43.55.48.9.06.4.02.81-.12 1.18-.12.33-.35.61-.65.8-.33.21-.74.32-1.15.32h-2.31l-.23-2.77v-1z"/>
//     </svg>
//   ),

//   Lock: ({ className = "w-5 h-5" }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
//     </svg>
//   ),

//   Facebook: ({ className }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
//     </svg>
//   ),

//   Twitter: ({ className }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
//     </svg>
//   ),

//   Instagram: ({ className }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
//     </svg>
//   ),

//   LinkedIn: ({ className }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//     </svg>
//   ),

//   Location: ({ className }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//     </svg>
//   ),

//   Info: ({ className }) => (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
//     </svg>
//   ),
// };

// // ==================== ANIMATION VARIANTS ====================
// const animations = {
//   overlay: {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//     exit: { opacity: 0 }
//   },
//   modal: {
//     hidden: { opacity: 0, scale: 0.8, y: 20 },
//     visible: { opacity: 1, scale: 1, y: 0 },
//     exit: { opacity: 0, scale: 0.8, y: 20 }
//   }
// };

// // ==================== CAROUSEL ITEMS ====================
// const carouselItems = [
//   {
//     imgSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//     subtitle: "Luxury Redefined",
//     title: "Experience Unmatched Comfort & Elegance",
//     gradient: "from-purple-600 to-pink-600"
//   },
//   {
//     imgSrc: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//     subtitle: "Exclusive Offers",
//     title: "Book Now & Get 30% Off on Your First Stay",
//     gradient: "from-blue-600 to-cyan-600"
//   },
//   {
//     imgSrc: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//     subtitle: "Premium Amenities",
//     title: "Spa, Pool, Fine Dining & More",
//     gradient: "from-green-600 to-teal-600"
//   },
//   {
//     imgSrc: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//     subtitle: "Perfect Location",
//     title: "In the Heart of the City with Stunning Views",
//     gradient: "from-orange-600 to-red-600"
//   }
// ];

// // ==================== STATUS MODAL ====================
// const StatusModal = ({ open, onClose, type, title, message }) => {
//   if (!open) return null;

//   const icons = {
//     success: (
//       <svg className="w-16 h-16 text-green-500" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
//       </svg>
//     ),
//     error: (
//       <svg className="w-16 h-16 text-red-500" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
//       </svg>
//     ),
//     info: (
//       <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
//       </svg>
//     )
//   };

//   const colors = {
//     success: 'from-green-500 to-emerald-500',
//     error: 'from-red-500 to-pink-500',
//     info: 'from-blue-500 to-cyan-500'
//   };

//   return (
//     <>
//       <motion.div
//         variants={animations.overlay}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200]"
//         onClick={onClose}
//       />

//       <motion.div
//         variants={animations.modal}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-[201] overflow-hidden"
//       >
//         <div className={`bg-gradient-to-r ${colors[type]} p-8 text-center`}>
//           <div className="flex justify-center mb-4">
//             {icons[type]}
//           </div>
//           <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
//           <p className="text-white/90">{message}</p>
//         </div>

//         <div className="p-6">
//           <button
//             onClick={onClose}
//             className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105"
//           >
//             Close
//           </button>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// // ==================== CONFIRMATION MODAL ====================
// const ConfirmationModal = ({ open, onClose, onConfirm, title, message, icon: Icon }) => {
//   if (!open) return null;

//   return (
//     <>
//       <motion.div
//         variants={animations.overlay}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[150]"
//         onClick={onClose}
//       />

//       <motion.div
//         variants={animations.modal}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-[151]"
//       >
//         <div className="p-6">
//           <div className="text-center mb-6">
//             <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl rotate-45 flex items-center justify-center">
//               <div className="-rotate-45">
//                 <Icon className="text-4xl text-white" />
//               </div>
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
//             <p className="text-gray-600 dark:text-gray-400">{message}</p>
//           </div>

//           <div className="flex gap-3">
//             <button
//               onClick={onClose}
//               className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-all"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={() => {
//                 onConfirm();
//                 onClose();
//               }}
//               className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105"
//             >
//               Confirm
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// // ==================== CART MODAL ====================
// const CartModal = ({ isOpen, onClose, cartItems, updateQuantity, removeFromCart, cartTotal, onCheckout }) => {
//   if (!isOpen) return null;

//   return (
//     <>
//       <motion.div
//         variants={animations.overlay}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
//         onClick={onClose}
//       />

//       <motion.div
//         variants={animations.modal}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-[101] max-h-[90vh] overflow-y-auto"
//       >
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Cart</h2>
//             <button
//               onClick={onClose}
//               className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//             >
//               <MaterialIcons.Close />
//             </button>
//           </div>

//           {cartItems.length === 0 ? (
//             <div className="text-center py-12">
//               <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
//                 <MaterialIcons.Info className="text-4xl text-gray-400" />
//               </div>
//               <p className="text-gray-600 dark:text-gray-400 text-lg">Your cart is empty</p>
//               <button
//                 onClick={onClose}
//                 className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all"
//               >
//                 Continue Shopping
//               </button>
//             </div>
//           ) : (
//             <>
//               <div className="space-y-4 mb-6">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-20 h-20 rounded-lg object-cover"
//                     />

//                     <div className="flex-1">
//                       <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">
//                         ${item.price} per night · {item.nights} nights
//                       </p>
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <button
//                         onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
//                         className="w-8 h-8 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
//                       >
//                         -
//                       </button>
//                       <span className="w-8 text-center font-medium">{item.quantity}</span>
//                       <button
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                         className="w-8 h-8 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
//                       >
//                         +
//                       </button>
//                     </div>

//                     <div className="text-right min-w-[100px]">
//                       <p className="font-semibold text-gray-900 dark:text-white">
//                         ${(item.price * item.quantity * item.nights).toFixed(2)}
//                       </p>
//                       <button
//                         onClick={() => removeFromCart(item.id)}
//                         className="text-sm text-red-500 hover:text-red-600 mt-1"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
//                 <div className="flex justify-between items-center text-lg font-semibold mb-4">
//                   <span className="text-gray-900 dark:text-white">Total</span>
//                   <span className="text-purple-600 dark:text-purple-400">${cartTotal.toFixed(2)}</span>
//                 </div>

//                 <button
//                   onClick={onCheckout}
//                   className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105"
//                 >
//                   Proceed to Checkout
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </motion.div>
//     </>
//   );
// };

// // ==================== PAYMENT MODAL ====================
// const PaymentModal = ({ cartTotal, cartItems, onClose, onPaymentSuccess }) => {
//   const [method, setMethod] = useState('credit');
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [formData, setFormData] = useState({
//     cardNumber: '',
//     cardName: '',
//     expiry: '',
//     cvv: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowConfirm(true);
//   };

//   const confirmPayment = async () => {
//     setShowConfirm(false);
//     setIsProcessing(true);

//     try {
//       // Simulate payment processing
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       onPaymentSuccess();
//     } catch (error) {
//       console.error('Payment failed:', error);
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   return (
//     <>
//       <motion.div
//         variants={animations.overlay}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
//         onClick={onClose}
//       />

//       <motion.div
//         variants={animations.modal}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-[101]"
//       >
//         <div className="p-6">
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//           >
//             <MaterialIcons.Close />
//           </button>

//           <div className="text-center mb-6">
//             <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl rotate-45 flex items-center justify-center">
//               <div className="-rotate-45">
//                 <MaterialIcons.CreditCard className="text-4xl text-white" />
//               </div>
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Payment Details</h2>
//           </div>

//           <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl mb-6 border border-purple-200 dark:border-purple-800">
//             <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Amount</p>
//             <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">${cartTotal.toFixed(2)}</p>
//             <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
//               {cartItems.reduce((sum, item) => sum + item.quantity, 0)} room(s) · {cartItems.reduce((sum, item) => sum + item.nights, 0)} night(s)
//             </p>
//           </div>

//           <div className="mb-6">
//             <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Payment Method</p>
//             <div className="grid grid-cols-2 gap-3">
//               <button
//                 onClick={() => setMethod('credit')}
//                 className={`py-3 px-4 rounded-xl border-2 transition-all flex items-center justify-center gap-2 ${
//                   method === 'credit'
//                     ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
//                     : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600'
//                 }`}
//               >
//                 <MaterialIcons.CreditCard />
//                 Credit Card
//               </button>
//               <button
//                 onClick={() => setMethod('paypal')}
//                 className={`py-3 px-4 rounded-xl border-2 transition-all flex items-center justify-center gap-2 ${
//                   method === 'paypal'
//                     ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
//                     : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600'
//                 }`}
//               >
//                 <MaterialIcons.PayPal />
//                 PayPal
//               </button>
//             </div>
//           </div>

//           {method === 'credit' && (
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//                   Card Number
//                 </label>
//                 <div className="relative">
//                   <MaterialIcons.CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//                   <input
//                     type="text"
//                     name="cardNumber"
//                     value={formData.cardNumber}
//                     onChange={handleChange}
//                     placeholder="1234 5678 9012 3456"
//                     className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//                   Cardholder Name
//                 </label>
//                 <input
//                   type="text"
//                   name="cardName"
//                   value={formData.cardName}
//                   onChange={handleChange}
//                   placeholder="John Doe"
//                   className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all"
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//                     Expiry Date
//                   </label>
//                   <input
//                     type="text"
//                     name="expiry"
//                     value={formData.expiry}
//                     onChange={handleChange}
//                     placeholder="MM/YY"
//                     className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//                     CVV
//                   </label>
//                   <input
//                     type="text"
//                     name="cvv"
//                     value={formData.cvv}
//                     onChange={handleChange}
//                     placeholder="123"
//                     className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all"
//                     required
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isProcessing}
//                 className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//               >
//                 {isProcessing ? (
//                   <>
//                     <div className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin" />
//                     Processing...
//                   </>
//                 ) : (
//                   <>
//                     <MaterialIcons.Lock />
//                     Pay ${cartTotal.toFixed(2)}
//                   </>
//                 )}
//               </button>
//             </form>
//           )}

//           {method === 'paypal' && (
//             <button
//               onClick={() => setShowConfirm(true)}
//               disabled={isProcessing}
//               className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white font-semibold py-4 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
//             >
//               <MaterialIcons.PayPal />
//               Pay with PayPal
//             </button>
//           )}
//         </div>
//       </motion.div>

//       <ConfirmationModal
//         open={showConfirm}
//         onClose={() => setShowConfirm(false)}
//         onConfirm={confirmPayment}
//         title="Confirm Payment"
//         message={`Are you sure you want to pay $${cartTotal.toFixed(2)}?`}
//         icon={MaterialIcons.CreditCard}
//       />
//     </>
//   );
// };

// // ==================== BOOKING MODAL ====================
// const BookingModal = ({ onClose }) => {
//   const [rooms, setRooms] = useState([]);
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const [checkIn, setCheckIn] = useState('');
//   const [checkOut, setCheckOut] = useState('');
//   const [guests, setGuests] = useState(1);
//   const [showCart, setShowCart] = useState(false);
//   const [showPayment, setShowPayment] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showSuccess, setShowSuccess] = useState(false);

//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         const response = await axios.get('https://hotel-booking-backend-2.onrender.com/api/rooms');
//         setRooms(response.data);
//       } catch (error) {
//         console.error('Error fetching rooms:', error);
//         toast.error('Failed to load rooms');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRooms();
//   }, []);

//   const cartTotal = cartItems.reduce((sum, item) =>
//     sum + (item.price * item.quantity * item.nights), 0
//   );

//   const addToCart = (room) => {
//     if (!checkIn || !checkOut) {
//       toast.warning('Please select check-in and check-out dates');
//       return;
//     }

//     const nights = Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
//     if (nights <= 0) {
//       toast.error('Check-out date must be after check-in date');
//       return;
//     }

//     const existingItem = cartItems.find(item => item.id === room._id);

//     if (existingItem) {
//       setCartItems(cartItems.map(item =>
//         item.id === room._id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       ));
//       toast.success('Room quantity updated in cart');
//     } else {
//       setCartItems([...cartItems, {
//         id: room._id,
//         name: room.name,
//         price: room.price,
//         image: room.images[0],
//         quantity: 1,
//         nights: nights,
//         checkIn,
//         checkOut
//       }]);
//       toast.success('Room added to cart');
//     }
//   };

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity === 0) {
//       removeFromCart(id);
//     } else {
//       setCartItems(cartItems.map(item =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       ));
//     }
//   };

//   const removeFromCart = (id) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//     toast.info('Room removed from cart');
//   };

//   const handlePaymentSuccess = () => {
//     setShowPayment(false);
//     setShowCart(false);
//     setCartItems([]);
//     setShowSuccess(true);

//     setTimeout(() => {
//       setShowSuccess(false);
//       onClose();
//     }, 3000);
//   };

//   return (
//     <>
//       <motion.div
//         variants={animations.overlay}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
//         onClick={onClose}
//       />

//       <motion.div
//         variants={animations.modal}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-[101] max-h-[90vh] overflow-y-auto"
//       >
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Book Your Stay</h2>
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => setShowCart(true)}
//                 className="relative p-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
//               >
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
//                 </svg>
//                 {cartItems.length > 0 && (
//                   <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-full flex items-center justify-center">
//                     {cartItems.length}
//                   </span>
//                 )}
//               </button>
//               <button
//                 onClick={onClose}
//                 className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//               >
//                 <MaterialIcons.Close />
//               </button>
//             </div>
//           </div>

//           <div className="mb-6">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//                   Check-in Date
//                 </label>
//                 <input
//                   type="date"
//                   value={checkIn}
//                   onChange={(e) => setCheckIn(e.target.value)}
//                   min={new Date().toISOString().split('T')[0]}
//                   className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//                   Check-out Date
//                 </label>
//                 <input
//                   type="date"
//                   value={checkOut}
//                   onChange={(e) => setCheckOut(e.target.value)}
//                   min={checkIn || new Date().toISOString().split('T')[0]}
//                   className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//                   Guests
//                 </label>
//                 <select
//                   value={guests}
//                   onChange={(e) => setGuests(parseInt(e.target.value))}
//                   className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all"
//                 >
//                   {[1, 2, 3, 4, 5, 6].map(num => (
//                     <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>

//           {loading ? (
//             <div className="flex justify-center items-center py-20">
//               <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {rooms.map((room) => (
//                 <motion.div
//                   key={room._id}
//                   whileHover={{ y: -4 }}
//                   className={`bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden cursor-pointer transition-all ${
//                     selectedRoom?._id === room._id ? 'ring-4 ring-purple-600' : ''
//                   }`}
//                   onClick={() => setSelectedRoom(room)}
//                 >
//                   <img
//                     src={room.images[0]}
//                     alt={room.name}
//                     className="w-full h-48 object-cover"
//                   />

//                   <div className="p-4">
//                     <div className="flex justify-between items-start mb-2">
//                       <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                         {room.name}
//                       </h3>
//                       <span className="text-sm px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
//                         {room.type}
//                       </span>
//                     </div>

//                     <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
//                       {room.description}
//                     </p>

//                     <div className="flex items-center gap-4 mb-3">
//                       <span className="text-sm text-gray-500 dark:text-gray-500">
//                         Sleeps {room.capacity}
//                       </span>
//                       <span className="text-sm text-gray-500 dark:text-gray-500">
//                         {room.bedType}
//                       </span>
//                     </div>

//                     <div className="flex items-center gap-2 mb-3">
//                       {[...Array(5)].map((_, i) => (
//                         <MaterialIcons.Star
//                           key={i}
//                           className={`text-sm ${
//                             i < Math.floor(room.rating)
//                               ? 'text-yellow-400'
//                               : 'text-gray-300 dark:text-gray-600'
//                           }`}
//                         />
//                       ))}
//                       <span className="text-sm text-gray-500 dark:text-gray-500 ml-1">
//                         ({room.reviews} reviews)
//                       </span>
//                     </div>

//                     <div className="flex justify-between items-center">
//                       <div>
//                         <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
//                           ${room.price}
//                         </span>
//                         <span className="text-sm text-gray-500 dark:text-gray-500">/night</span>
//                       </div>

//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           addToCart(room);
//                         }}
//                         className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-medium rounded-lg transition-all"
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>
//       </motion.div>

//       <AnimatePresence>
//         {showCart && (
//           <CartModal
//             isOpen={showCart}
//             onClose={() => setShowCart(false)}
//             cartItems={cartItems}
//             updateQuantity={updateQuantity}
//             removeFromCart={removeFromCart}
//             cartTotal={cartTotal}
//             onCheckout={() => {
//               setShowCart(false);
//               setShowPayment(true);
//             }}
//           />
//         )}

//         {showPayment && (
//           <PaymentModal
//             cartTotal={cartTotal}
//             cartItems={cartItems}
//             onClose={() => setShowPayment(false)}
//             onPaymentSuccess={handlePaymentSuccess}
//           />
//         )}

//         {showSuccess && (
//           <StatusModal
//             open={showSuccess}
//             onClose={() => {
//               setShowSuccess(false);
//               onClose();
//             }}
//             type="success"
//             title="Payment Successful!"
//             message="Your booking has been confirmed. Check your email for details."
//           />
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// // ==================== ROOMS SERVICES MODAL ====================
// const RoomsServicesModal = ({ onClose }) => {
//   const [services] = useState([
//     { icon: MaterialIcons.Wifi, name: 'High-Speed WiFi', description: 'Stay connected with our fiber optic internet', included: true },
//     { icon: MaterialIcons.Breakfast, name: 'Breakfast Buffet', description: 'Start your day with our delicious breakfast', included: true },
//     { icon: MaterialIcons.Pool, name: 'Swimming Pool', description: 'Relax in our heated outdoor pool', included: true },
//     { icon: MaterialIcons.Gym, name: 'Fitness Center', description: 'State-of-the-art gym equipment', included: true },
//     { icon: MaterialIcons.Spa, name: 'Spa Access', description: 'Enjoy our luxury spa treatments', included: false },
//     { icon: MaterialIcons.Parking, name: 'Valet Parking', description: 'Secure parking with valet service', included: false },
//     { icon: MaterialIcons.Info, name: 'Room Service', description: '24/7 in-room dining', included: true },
//     { icon: MaterialIcons.Info, name: 'Mini Bar', description: 'Stocked mini bar with premium drinks', included: false },
//   ]);

//   return (
//     <>
//       <motion.div
//         variants={animations.overlay}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
//         onClick={onClose}
//       />

//       <motion.div
//         variants={animations.modal}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-[101] max-h-[90vh] overflow-y-auto"
//       >
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Rooms & Services</h2>
//             <button
//               onClick={onClose}
//               className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//             >
//               <MaterialIcons.Close />
//             </button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -4 }}
//                 className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl"
//               >
//                 <div className="flex items-start gap-3">
//                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
//                     service.included
//                       ? 'bg-gradient-to-r from-purple-600 to-pink-600'
//                       : 'bg-gray-200 dark:bg-gray-700'
//                   }`}>
//                     <service.icon className={`text-2xl ${
//                       service.included ? 'text-white' : 'text-gray-500 dark:text-gray-400'
//                     }`} />
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <h3 className="font-semibold text-gray-900 dark:text-white">
//                         {service.name}
//                       </h3>
//                       {service.included && (
//                         <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
//                           Included
//                         </span>
//                       )}
//                     </div>
//                     <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
//                       {service.description}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <div className="mt-8 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
//             <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Premium Services</h3>
//             <p className="text-gray-600 dark:text-gray-400 mb-4">
//               Upgrade your stay with our premium services available at an additional cost.
//             </p>
//             <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105">
//               View Premium Packages
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// // ==================== CONTACT MODAL ====================
// const ContactModal = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showStatus, setShowStatus] = useState(false);
//   const [statusType, setStatusType] = useState('info');
//   const [statusTitle, setStatusTitle] = useState('');
//   const [statusMessage, setStatusMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1500));

//       setStatusType('success');
//       setStatusTitle('Message Sent!');
//       setStatusMessage('We\'ll get back to you within 24 hours.');
//       setShowStatus(true);

//       setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

//       setTimeout(() => {
//         onClose();
//       }, 2000);
//     } catch (error) {
//       setStatusType('error');
//       setStatusTitle('Failed to Send');
//       setStatusMessage('Please try again later.');
//       setShowStatus(true);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <motion.div
//         variants={animations.overlay}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
//         onClick={onClose}
//       />

//       <motion.div
//         variants={animations.modal}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-[101] max-h-[90vh] overflow-y-auto"
//       >
//         <div className="p-6">
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//           >
//             <MaterialIcons.Close />
//           </button>

//           <div className="text-center mb-6">
//             <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl rotate-45 flex items-center justify-center">
//               <div className="-rotate-45">
//                 <MaterialIcons.Email className="text-4xl text-white" />
//               </div>
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
//             <p className="text-gray-600 dark:text-gray-400 mt-2">We'd love to hear from you</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//                 Full Name
//               </label>
//               <div className="relative">
//                 <MaterialIcons.Person className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all"
//                   placeholder="John Doe"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <MaterialIcons.Email className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all"
//                     placeholder="john@example.com"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//                   Phone Number
//                 </label>
//                 <div className="relative">
//                   <MaterialIcons.Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all"
//                     placeholder="+1 (123) 456-7890"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all"
//                 placeholder="What's this about?"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="5"
//                 className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all resize-none"
//                 placeholder="Your message here..."
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
//             >
//               {isSubmitting ? (
//                 <>
//                   <div className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin" />
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   <MaterialIcons.Email />
//                   Send Message
//                 </>
//               )}
//             </button>
//           </form>

//           <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
//             <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
//               <MaterialIcons.Phone />
//               Contact Information
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
//                 <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
//                   <MaterialIcons.Phone className="text-purple-600 dark:text-purple-400" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
//                   <p className="text-sm font-medium text-gray-900 dark:text-white">+250 788 123 456</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
//                 <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
//                   <MaterialIcons.Email className="text-purple-600 dark:text-purple-400" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
//                   <p className="text-sm font-medium text-gray-900 dark:text-white">info@hotel.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
//                 <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
//                   <MaterialIcons.Location className="text-purple-600 dark:text-purple-400" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">Address</p>
//                   <p className="text-sm font-medium text-gray-900 dark:text-white">Kigali, Rwanda</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       <StatusModal
//         open={showStatus}
//         onClose={() => setShowStatus(false)}
//         type={statusType}
//         title={statusTitle}
//         message={statusMessage}
//       />
//     </>
//   );
// };

// // ==================== FEATURES SECTION ====================
// const Features = () => {
//   const features = [
//     { icon: MaterialIcons.Wifi, title: "Free WiFi", description: "High-speed internet throughout the hotel" },
//     { icon: MaterialIcons.Breakfast, title: "Breakfast Included", description: "Complimentary breakfast buffet" },
//     { icon: MaterialIcons.Pool, title: "Swimming Pool", description: "Outdoor heated pool" },
//     { icon: MaterialIcons.Gym, title: "Fitness Center", description: "24/7 modern gym equipment" },
//     { icon: MaterialIcons.Spa, title: "Luxury Spa", description: "Relaxing treatments and massages" },
//     { icon: MaterialIcons.Parking, title: "Free Parking", description: "Secure parking for guests" },
//   ];

//   return (
//     <section className="py-16 bg-gray-50 dark:bg-gray-800">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Experience the best hospitality with our premium amenities and services
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
//             >
//               <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl rotate-45 flex items-center justify-center mb-6">
//                 <div className="-rotate-45">
//                   <feature.icon className="text-2xl text-white" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
//               <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== TESTIMONIALS SECTION ====================
// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "Business Traveler",
//       content: "Amazing experience! The staff was incredibly helpful and the room was spotless. Will definitely come back.",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1494790108777-3f894d9a8a1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       name: "Michael Chen",
//       role: "Family Vacation",
//       content: "Perfect for families! The kids loved the pool and the family room was spacious and comfortable.",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       name: "Emily Davis",
//       role: "Honeymoon Couple",
//       content: "The presidential suite was absolutely breathtaking. The view, the service, everything was perfect.",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <section className="py-16 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What Our Guests Say</h2>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Real experiences from our valued guests
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -50 }}
//               transition={{ duration: 0.5 }}
//               className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl"
//             >
//               <div className="flex items-center gap-4 mb-6">
//                 <img
//                   src={testimonials[currentIndex].image}
//                   alt={testimonials[currentIndex].name}
//                   className="w-16 h-16 rounded-full object-cover border-4 dark:border-gray-800 shadow-lg"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                     {testimonials[currentIndex].name}
//                   </h3>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">
//                     {testimonials[currentIndex].role}
//                   </p>
//                   <div className="flex gap-1 mt-1">
//                     {[...Array(5)].map((_, i) => (
//                       <MaterialIcons.Star
//                         key={i}
//                         className={`text-sm ${
//                           i < testimonials[currentIndex].rating
//                             ? 'text-yellow-400'
//                             : 'text-gray-300 dark:text-gray-600'
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
//                 "{testimonials[currentIndex].content}"
//               </p>
//             </motion.div>
//           </AnimatePresence>

//           <div className="flex justify-center gap-2 mt-6">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-all ${
//                   index === currentIndex
//                     ? 'w-8 bg-gradient-to-r from-purple-600 to-pink-600'
//                     : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== MAIN HERO COMPONENT ====================
// export const Hero = () => {
//   const [showRoomsModal, setShowRoomsModal] = useState(false);
//   const [showBookingModal, setShowBookingModal] = useState(false);
//   const [showContactModal, setShowContactModal] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleOpenModal = (type) => {
//     if (type === 'rooms') setShowRoomsModal(true);
//     if (type === 'booking') setShowBookingModal(true);
//     if (type === 'contact') setShowContactModal(true);
//   };

//   return (
//     <>

//       {/* Hero Carousel */}
//       <div className="relative h-screen">
//         <Carousel
//           infiniteLoop
//           autoPlay
//           showThumbs={false}
//           showStatus={false}
//           interval={6000}
//           transitionTime={1000}
//           onChange={(index) => setCurrentSlide(index)}
//           className="h-full"
//         >
//           {carouselItems.map((item, index) => (
//             <div key={index} className="relative h-screen">
//               <img
//                 src={item.imgSrc}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 to-transparent">
//                 <div className="container mx-auto px-4 h-full flex items-center">
//                   <AnimatePresence mode="wait">
//                     {currentSlide === index && (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, x: -50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: 50 }}
//                         transition={{ duration: 0.8 }}
//                         className="max-w-2xl text-white"
//                       >
//                         {/* Subtitle with gradient */}
//                         <motion.div
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.2 }}
//                           className="inline-block mb-4"
//                         >
//                           <span className={`bg-gradient-to-r ${item.gradient} px-4 py-2 rounded-full text-sm font-semibold`}>
//                             {item.subtitle}
//                           </span>
//                         </motion.div>

//                         {/* Title */}
//                         <motion.h1
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.3 }}
//                           className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
//                         >
//                           {item.title}
//                         </motion.h1>

//                         {/* Buttons */}
//                         <motion.div
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.4 }}
//                           className="flex flex-wrap gap-4"
//                         >
//                           <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => handleOpenModal('rooms')}
//                             className={`px-8 py-4 bg-gradient-to-r ${item.gradient} hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl`}
//                           >
//                             Our Rooms
//                           </motion.button>
//                           <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => handleOpenModal('booking')}
//                             className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-xl border-2/50 transition-all"
//                           >
//                             Book Now
//                           </motion.button>
//                           <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => handleOpenModal('contact')}
//                             className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-xl border-2/50 transition-all"
//                           >
//                             Contact Us
//                           </motion.button>
//                         </motion.div>

//                         {/* Stats */}
//                         <motion.div
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.5 }}
//                           className="flex gap-8 mt-12"
//                         >
//                           <div>
//                             <p className="text-3xl font-bold">500+</p>
//                             <p className="text-sm text-gray-300">Rooms</p>
//                           </div>
//                           <div>
//                             <p className="text-3xl font-bold">1000+</p>
//                             <p className="text-sm text-gray-300">Happy Guests</p>
//                           </div>
//                           <div>
//                             <p className="text-3xl font-bold">24/7</p>
//                             <p className="text-sm text-gray-300">Support</p>
//                           </div>
//                         </motion.div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </div>

//               {/* Slide Indicator */}
//               <div className="absolute bottom-8 right-8 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm">
//                 {String(index + 1).padStart(2, '0')} / {String(carouselItems.length).padStart(2, '0')}
//               </div>
//             </div>
//           ))}
//         </Carousel>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white"
//         >
//           <span className="text-sm">Scroll to explore</span>
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//             className="w-6 h-10 border-2 rounded-full flex justify-center"
//           >
//             <motion.div
//               animate={{ y: [0, 20, 0] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//               className="w-1 h-3 bg-white rounded-full mt-2"
//             />
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Features Section */}
//       <Features />

//       {/* Testimonials Section */}
//       <Testimonials />

//       {/* Modals */}
//       <AnimatePresence>
//         {showRoomsModal && (
//           <RoomsServicesModal onClose={() => setShowRoomsModal(false)} />
//         )}

//         {showBookingModal && (
//           <BookingModal onClose={() => setShowBookingModal(false)} />
//         )}

//         {showContactModal && (
//           <ContactModal onClose={() => setShowContactModal(false)} />
//         )}
//       </AnimatePresence>

//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//     </>
//   );
// };

import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const getButtonColor = () => {
    switch (type) {
      case "success":
        return "bg-green-600 hover:bg-green-700";
      case "error":
        return "bg-red-600 hover:bg-red-700";
      case "warning":
        return "bg-yellow-600 hover:bg-yellow-700";
      default:
        return "bg-blue-600 hover:bg-blue-700";
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
                className={`mt-6 px-6 py-2 bg-gradient-to-t from-red-500 to-red-700 rounded-lg transition-all transform hover:scale-105 ${getButtonColor()}`}
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
                  className="flex-1 px-4 py-2 border-2 bg-gradient-to-t from-red-300 to-red-500 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={onConfirm}
                  className="flex-1 px-4 py-2 bg-gradient-to-t from-blue-500 to-indigo-700 text-white rounded-lg transition-all transform hover:scale-105 font-medium"
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
                className="px-3 py-2 bg-gradient-to-t from-red-400 to-red-500 rounded-l-lg transition-colors"
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
                className="px-3 py-2 bg-gradient-to-t from-blue-500 to-indigo-700 rounded-r-lg transition-colors"
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
              className="absolute top-4 right-4 bg-gradient-to-t from-red-500 to-red-700 backdrop-blur-sm rounded-full p-2 shadow-lg transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-600"
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
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg  transition-all transform hover:scale-105 font-medium shadow-lg flex items-center"
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
                className="bg-gradient-to-t from-red-500 to-red-700 rounded-full p-2 transition-colors"
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
                    <div key={index} className="py-4 flex items-center">
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

// ==================== ROOMS SERVICES COMPONENT ====================
const RoomsServices = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusType, setStatusType] = useState("info");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusDetails, setStatusDetails] = useState("");

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

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    setCartItems([]);
    setStatusType("success");
    setStatusMessage("Payment Successful!");
    setStatusDetails("Your booking has been confirmed.");
    setShowStatusModal(true);
  };

  const cartTotal =
    cartItems.reduce(
      (sum, item) => sum + item.price * item.nights * item.quantity,
      0,
    ) * 1.1;

  return (
    <div className="py-8 px-4">
      <ToastContainer />

      <div className="container mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Rooms
          </span>
          <h2 className="text-3xl font-bold text-gray-800">
            Explore Our <span className="text-blue-600">Luxury Rooms</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {(showAll ? rooms : rooms.slice(0, 3)).map((room, index) => (
            <RoomCard
              key={room.id}
              room={room}
              delay={index * 0.1}
              onViewDetail={handleViewDetail}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-to-r from-blue-600 to-purple-600  text-white font-medium py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            {showAll ? "Show Less" : "View More Rooms"}
          </button>
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

  const steps = ["Personal Details", "Stay Details", "Confirmation"];

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
      const results = await axios.post(
        "https://hotel-nodejs-oa32.onrender.com/84383/92823",
        formData,
      );

      if (results.data.success) {
        setStatusType("success");
        setStatusMessage("Booking Confirmed!");
        setStatusDetails("A confirmation email has been sent to your inbox.");

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
      } else {
        setStatusType("error");
        setStatusMessage("Booking Failed");
        setStatusDetails("Please try again or contact support.");
      }
    } catch (error) {
      setStatusType("error");
      setStatusMessage("Submission Error");
      setStatusDetails(
        error.response?.data?.message || "Network error. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
      setShowStatusModal(true);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
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
          <div className="space-y-4">
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
            <div className="space-y-3">
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

              <form onSubmit={handleSubmit} className="text-white">
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
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg  transition-all transform hover:scale-105 font-medium flex items-center"
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
      const results = await axios.post(
        "https://hotel-nodejs-oa32.onrender.com/84383/92823/contact",
        formData,
      );

      if (results.data.success) {
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
      } else {
        setStatusType("error");
        setStatusMessage("Failed to send message");
        setStatusDetails("Please try again later.");
      }
    } catch (error) {
      setStatusType("error");
      setStatusMessage("Submission Error");
      setStatusDetails(
        error.response?.data?.message || "Network error. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
      setShowStatusModal(true);
    }
  };

  return (
    <>
      <div className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
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
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600  text-white font-medium py-4 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
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

// ==================== PAYMENT MODAL ====================
const PaymentModal = ({ cartTotal, cartItems, onClose, onPaymentSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const confirmPayment = async () => {
    setShowConfirmation(false);
    setIsProcessing(true);

    try {
      const paymentData = {
        amount: cartTotal,
        items: cartItems,
        paymentMethod,
        timestamp: new Date().toISOString(),
      };

      const results = await axios.post(
        "https://hotel-nodejs-oa32.onrender.com/84383/92823/payment",
        paymentData,
      );

      if (results.data.success) {
        setTimeout(() => {
          setIsProcessing(false);
          onPaymentSuccess();
        }, 1500);
      } else {
        setIsProcessing(false);
        // Handle payment failure
      }
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
                  className="bg-gradient-to-t from-red-500 to-red-700 rounded-full p-2 transition-colors"
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
                        ? "bg-gradient-to-t from-red-500 to-red-700"
                        : "bg-gradient-to-t from-blue-300 to-indigo-300"
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
                        ? "bg-gradient-to-t from-green-500 to-blue-400"
                        : "bg-gradient-to-t from-green-300 to-blue-300"
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
                <form onSubmit={handleSubmit} className="text-black">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-gray-700 mb-1 text-sm">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600  text-white font-medium py-4 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
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
                  className="w-full bg-gradient-to-t from-blue-500 to-indigo-700 font-medium py-4 px-6 rounded-lg transition-all transform hover:scale-105"
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
      <div className="w-full mt-0 mb-1 rounded-2xl overflow-hidden relative h-[80vh]">
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
            <div key={index} className="relative h-[80vh]">
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
                            className="bg-gradient-to-r from-blue-600 to-purple-600  text-white font-medium py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl"
                          >
                            Our Rooms
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleButtonClick("book")}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-lg border-2 transition-all backdrop-blur-sm"
                          >
                            Book Now
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleButtonClick("contact")}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-lg border-2 transition-all backdrop-blur-sm"
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
                  className="absolute top-4 right-4 z-10 bg-gradient-to-t from-red-500 to-red-700 backdrop-blur-sm rounded-full p-2 shadow-lg transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
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
                  className="absolute top-4 right-4 z-10 bg-gradient-to-t from-red-500 to-red-700 backdrop-blur-sm rounded-full p-2 shadow-lg transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
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
                  className="absolute top-4 right-4 z-10 bg-gradient-to-t from-blue-400 to-blue-600 backdrop-blur-sm rounded-full p-2 shadow-lg transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
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

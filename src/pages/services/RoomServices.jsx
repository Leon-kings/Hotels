// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-unused-vars */
// import { motion, AnimatePresence } from "framer-motion";
// import React, { useState, useEffect } from "react";
// import { jwtDecode } from "jwt-decode";
// import { additionalRooms, initialRooms } from "../../assets/data/data";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   AreaChart,
//   Bathroom,
//   Bed,
//   Close,
//   Details,
//   ShoppingCart,
//   ViewArray,
//   ViewCarousel,
// } from "@mui/icons-material";
// import axios from "axios";
// // import { Button } from "@mui/material";

// const RoomCard = ({ room, delay, onViewDetail, onAddToCart }) => {
//   const [quantity, setQuantity] = useState(1);

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
//     <>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay }}
//         className="col-span-12 md:col-span-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white p-2 rounded-2xl lg:col-span-4"
//       >
//         <div className="shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
//           <div className="relative">
//             <img className="w-full h-64 object-cover" src={room.image} alt="" />
//             <motion.div className="absolute left-0 top-full -translate-y-1/2 rounded py-1 px-3 ml-4 text-sm">
//               ${room.price}/Night
//             </motion.div>
//           </div>
//           <div className="p-4 mt-2 flex-grow">
//             <div className="flex justify-between mb-3">
//               <h5 className="text-lg text-blue-400 font-semibold">
//                 {room.name}
//               </h5>
//               <div className="flex text-amber-200">
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     className="w-6 h-6"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>
//             </div>
//             <div className="flex mb-3 space-x-3 text-sm">
//               <span className="border-r text-blue-400 bg-amber-50 rounded-2xl  p-2 pr-3">
//                 <Bed className="text-green-400 size-6" />
//                 {room.beds} Bed
//               </span>
//               <span className="border-r text-blue-400 bg-amber-50 rounded-2xl  p-2 p pr-3">
//                 <Bathroom className="text-blue-400 size-6" />
//                 {room.baths} Bath
//               </span>
//               <span className="bg-amber-50 text-blue-400 rounded-2xl  p-2">
//                 <svg
//                   className="w-6 h-6 text-green-400 inline mr-1"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
//                   />
//                 </svg>
//                 Wifi
//               </span>
//             </div>
//             <p className="text-white mb-3 line-clamp-2">
//               {room.description}
//             </p>
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <label className="mr-2 text-sm text-gray-300 font-medium">Quantity:</label>
//                 <div className="flex items-center border rounded">
//                   <button
//                     onClick={decrementQuantity}
//                     className="px-2 dark:text-white py-1 bg-gray-100 hover:bg-gray-200"
//                   >
//                     -
//                   </button>
//                   <input
//                     type="number"
//                     min="1"
//                     value={quantity}
//                     onChange={handleQuantityChange}
//                     className="w-12 text-center border-x py-1"
//                   />
//                   <button
//                     onClick={incrementQuantity}
//                     className="px-2 py-1 dark:text-white bg-gray-100 hover:bg-gray-200"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <div className="text-sm text-blue-400 font-medium">
//                 Total: ${(room.price * quantity).toFixed(2)}
//               </div>
//             </div>

//             <div className="flex justify-between mt-auto">
//               <button
//                 onClick={() => onViewDetail(room)}
//                 className="bg-gradient-to-t from-blue-400 to-indigo-400 hover:bg-white-dark text-white text-sm py-2 px-4 rounded transition-colors"
//               >
//                 <ViewCarousel className="text-orange-700 size-6" />
//               </button>
//               <button
//                 onClick={() =>
//                   onAddToCart({
//                     ...room,
//                     quantity,
//                     totalPrice: room.price * quantity,
//                   })
//                 }
//                 className="bg-gradient-to-b from-green-400 to-indigo-400 text-white text-sm py-2 px-4 rounded transition-colors"
//               >
//                 <ShoppingCart className="text-blue-600 size-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// const RoomDetailModal = ({ room, onClose, onAddToCart }) => {
//   const [nights, setNights] = useState(1);
//   const [quantity, setQuantity] = useState(1);

//   const handleNightsChange = (e) => {
//     const value = parseInt(e.target.value);
//     if (!isNaN(value) && value > 0) {
//       setNights(value);
//     }
//   };

//   const incrementNights = () => {
//     setNights((prev) => prev + 1);
//   };

//   const decrementNights = () => {
//     if (nights > 1) {
//       setNights((prev) => prev - 1);
//     }
//   };

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

//   const totalPrice = room.price * nights * quantity;

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 50, opacity: 0 }}
//           className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="relative">
//             <img
//               src={room.image}
//               alt={room.name}
//               className="w-full p-4 h-74 md:h-80 object-cover rounded-t-lg"
//             />
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
//             >
//               <Close className="text-red-500 size-4" />
//             </button>
//           </div>

//           <div className="p-6">
//             <div className="flex justify-between items-start mb-4">
//               <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
//                 <div className="main">
//                   <h2 className="text-2xl font-bold">{room.name}</h2>
//                 </div>
//                 <div className="main0">
//                   <div className="font-semibold text-xl">
//                     ${" "}
//                     <span className="text-blue-400 font-bold">
//                       {room.price}
//                     </span>
//                     /Night
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-4 mb-6">
//               <div className="bg-amber-50 p-2 flex items-center">
//                 <Bed className="text-green-500 size-6" />
//                 <span className="font-semibold">{room.beds} Beds</span>
//               </div>
//               <div className="bg-amber-50 p-2 flex items-center">
//                 <Bathroom className="text-blue-400 size-6" />
//                 <span className="font-semibold">{room.baths} Baths</span>
//               </div>
//               <div className="bg-amber-50 p-2 flex items-center">
//                 <svg
//                   className="w-6 h-6 text-green-400 mr-2"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
//                   />
//                 </svg>
//                 <span className="font-semibold">Free WiFi</span>
//               </div>
//               <div className="bg-amber-50 p-2 flex items-center">
//                 <AreaChart className="text-blue-400 size-6" />
//                 <span className="font-semibold">{room.size} sq.ft</span>
//               </div>
//             </div>

//             <div className="mb-6">
//               <h3 className="text-xl font-semibold mb-3">Description</h3>
//               <p className="text-gray-700">{room.description}</p>
//             </div>

//             <div className="border-t pt-6">
//               <h3 className="text-xl font-semibold mb-4">Booking Details</h3>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label className="block text-gray-700 mb-2">
//                     Number of Nights
//                   </label>
//                   <div className="flex items-center">
//                     <button
//                       onClick={decrementNights}
//                       className="bg-white dark:text-white hover:bg-gray-300 px-3 py-1 rounded-l"
//                     >
//                       -
//                     </button>
//                     <input
//                       type="number"
//                       min="1"
//                       value={nights}
//                       onChange={handleNightsChange}
//                       className="w-16 text-center border-t border-b border-gray-300 py-1"
//                     />
//                     <button
//                       onClick={incrementNights}
//                       className="bg-white dark:text-white hover:bg-gray-300 px-3 py-1 rounded-r"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-2">
//                     Number of Rooms
//                   </label>
//                   <div className="flex items-center">
//                     <button
//                       onClick={decrementQuantity}
//                       className="bg-white dark:text-white hover:bg-gray-300 px-3 py-1 rounded-l"
//                     >
//                       -
//                     </button>
//                     <input
//                       type="number"
//                       min="1"
//                       value={quantity}
//                       onChange={handleQuantityChange}
//                       className="w-16 text-center border-t border-b border-gray-300 py-1"
//                     />
//                     <button
//                       onClick={incrementQuantity}
//                       className="bg-white dark:text-white hover:bg-gray-300 px-3 py-1 rounded-r"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg">
//                 <div>
//                   <p className="text-gray-600">
//                     Price per night:{" "}
//                     <span className="text-gray-950 font-bold">$ </span>
//                     <span className="text-blue-500 font-bold">
//                       {room.price}
//                     </span>
//                   </p>
//                   <p className="text-sm ">
//                     <span className="text-red-600 font-bold"> {quantity}</span>{" "}
//                     room {quantity > 1 ? "s" : ""} ×{" "}
//                     <span className="text-green-500 font-bold">{nights} </span>
//                     night
//                     {nights > 1 ? "s" : ""}
//                   </p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-xl font-semibold">
//                     Total:{" "}
//                     <span className="text-blue-500 font-bold">
//                       {" "}
//                       ${totalPrice.toFixed(2)}
//                     </span>
//                   </p>
//                 </div>
//               </div>

//               <div className="flex justify-end space-x-4">
//                 <button
//                   onClick={onClose}
//                   className="bg-white dark:text-white hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition-colors"
//                 >
//                   <Close className="text-red-500 size-6" />
//                 </button>
//                 <button
//                   onClick={() =>
//                     onAddToCart({
//                       ...room,
//                       nights,
//                       quantity,
//                       totalPrice,
//                     })
//                   }
//                   className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
//                 >
//                   <ShoppingCart className="text-blue-400 size-6" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </>
//   );
// };

// const CartModal = ({
//   cartItems,
//   onClose,
//   onRemoveItem,
//   onProceedToPayment,
// }) => {
//   const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
//   const tax = subtotal * 0.1; // 10% tax
//   const total = subtotal + tax;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: 50, opacity: 0 }}
//         className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold">Your Cart</h2>
//             <button
//               onClick={onClose}
//               className="text-red-500 hover:text-gray-700"
//             >
//               <Close className="text-red-400 size-6" />
//             </button>
//           </div>

//           {cartItems.length === 0 ? (
//             <div className="text-center py-8">
//               <p className="text-gray-600">Your cart is empty</p>
//             </div>
//           ) : (
//             <>
//               <div className="divide-y">
//                 {cartItems.map((item, index) => (
//                   <div key={index} className="py-4 flex justify-between">
//                     <div className="flex">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-20 h-20 object-cover rounded"
//                       />
//                       <div className="ml-4">
//                         <h3 className="font-medium">{item.name}</h3>
//                         <p className="text-gray-600 text-sm">
//                           {item.quantity || 1} room
//                           {item.quantity > 1 ? "s" : ""} × {item.nights || 1}{" "}
//                           night{item.nights > 1 ? "s" : ""} × ${item.price}
//                         </p>
//                         <button
//                           onClick={() => onRemoveItem(index)}
//                           className="text-red-500 text-sm mt-1 hover:text-red-700"
//                         >
//                           <Close className="text-red-500" />
//                         </button>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-medium">
//                         ${item.totalPrice.toFixed(2)}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t pt-4 mt-4">
//                 <div className="flex justify-between mb-2">
//                   <span className="text-gray-600">Subtotal</span>
//                   <p>${subtotal.toFixed(2)}</p>
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <span className="text-gray-600">Tax (10%)</span>
//                   <span>${tax.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between font-bold text-lg mt-4">
//                   <span>Total</span>
//                   <span>${total.toFixed(2)}</span>
//                 </div>

//                 <button
//                   onClick={onProceedToPayment}
//                   className="w-full bg-white hover:bg-white-dark text-white font-medium py-3 px-6 rounded-lg mt-6 transition-colors"
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
// // ***********************************************************************************************************************************************************
// // payment

// export const PaymentModal = ({
//   cartTotal,
//   cartItems,
//   onClose,
//   onPaymentSuccess,
// }) => {
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
//   const [isLoadingEmail, setIsLoadingEmail] = useState(true);

//   useEffect(() => {
//     console.log("[PaymentModal] Initializing with cart items:", cartItems);
//     const fetchUserEmailFromToken = () => {
//       try {
//         const token = localStorage.getItem("authToken");
//         console.log("[PaymentModal] Token found:", token ? "Yes" : "No");

//         if (token) {
//           const decoded = jwtDecode(token);
//           console.log("[PaymentModal] Decoded token:", decoded);

//           const userEmail =
//             decoded.email ||
//             decoded.user?.email ||
//             decoded.userEmail ||
//             decoded.sub;
//           console.log(
//             "[PaymentModal] Extracted email:",
//             userEmail || "Not found"
//           );

//           if (userEmail) {
//             setCardDetails((prev) => ({
//               ...prev,
//               email: userEmail,
//             }));
//           }
//         }
//       } catch (error) {
//         console.error("[PaymentModal] Error decoding token:", error);
//         setError("Failed to load user information");
//         toast.error("Failed to load user information", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       } finally {
//         setIsLoadingEmail(false);
//       }
//     };

//     fetchUserEmailFromToken();
//   }, []);

//   const formatCardNumber = (value) => {
//     const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
//     const matches = v.match(/\d{4,16}/g);
//     const match = matches?.[0] || "";
//     const parts = [];

//     for (let i = 0, len = match.length; i < len; i += 4) {
//       parts.push(match.substring(i, i + 4));
//     }

//     return parts.length ? parts.join(" ") : value;
//   };

//   const formatExpiry = (value) => {
//     const v = value.replace(/[^0-9]/g, "");
//     if (v.length >= 3) {
//       return `${v.slice(0, 2)}/${v.slice(2, 4)}`;
//     }
//     return value;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCardDetails((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleCardNumberChange = (e) => {
//     const formatted = formatCardNumber(e.target.value);
//     setCardDetails((prev) => ({
//       ...prev,
//       number: formatted,
//     }));
//   };

//   const handleExpiryChange = (e) => {
//     const formatted = formatExpiry(e.target.value);
//     setCardDetails((prev) => ({
//       ...prev,
//       expiry: formatted,
//     }));
//   };

//   const validateForm = () => {
//     if (!cardDetails.email) {
//       setError("Email is required");
//       toast.error("Email is required", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//       return false;
//     }

//     if (paymentMethod === "credit") {
//       if (
//         !cardDetails.number ||
//         cardDetails.number.replace(/\s/g, "").length < 15
//       ) {
//         setError("Please enter a valid card number");
//         toast.error("Please enter a valid card number", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//         return false;
//       }
//       if (!cardDetails.name) {
//         setError("Cardholder name is required");
//         toast.error("Cardholder name is required", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//         return false;
//       }
//       if (!cardDetails.expiry || cardDetails.expiry.length < 5) {
//         setError("Please enter a valid expiry date (MM/YY)");
//         toast.error("Please enter a valid expiry date (MM/YY)", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//         return false;
//       }
//       if (!cardDetails.cvv || cardDetails.cvv.length < 3) {
//         setError("Please enter a valid CVV");
//         toast.error("Please enter a valid CVV", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//         return false;
//       }
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     console.log("[PaymentModal] Starting payment submission...");

//     if (!validateForm()) {
//       return;
//     }

//     setIsProcessing(true);

//     try {
//       // Prepare complete order items data for database
//       const orderItems = cartItems.map((item) => ({
//         productId: item.id,
//         name: item.name,
//         quantity: item.quantity || 1,
//         price: item.price,
//         roomNumber: item.roomNumber || 1,
//         subtotal: (item.price * (item.quantity || 1)).toFixed(2),
//         ...(item.description && { description: item.description }),
//         ...(item.category && { category: item.category }),
//       }));

//       console.log("[PaymentModal] Prepared order items:", orderItems);

//       // First save order to database
//       const orderResponse = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/89492/9238",
//         {
//           customerEmail: cardDetails.email,
//           totalAmount: cartTotal,
//           paymentMethod,
//           items: orderItems,
//           status: "pending",
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//           },
//         }
//       );

//       console.log(
//         "[PaymentModal] Order saved to database:",
//         orderResponse.data
//       );

//       toast.success("Order saved to database!", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });

//       if (!orderResponse.data.success) {
//         throw new Error("Failed to save order to database");
//       }

//       const orderId = orderResponse.data.orderId;

//       // Then process payment
//       const paymentData = {
//         orderId,
//         amount: cartTotal,
//         currency: "USD",
//         paymentMethod,
//         customerEmail: cardDetails.email,
//         ...(paymentMethod === "credit" && {
//           card: {
//             number: cardDetails.number.replace(/\s/g, ""),
//             name: cardDetails.name,
//             expiry: cardDetails.expiry,
//             cvv: cardDetails.cvv,
//           },
//         }),
//       };

//       console.log("[PaymentModal] Processing payment with data:", paymentData);

//       const paymentResponse = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/78799/2457",
//         paymentData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//           },
//         }
//       );

//       toast.success("Payment processed successfully!", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });

//       if (paymentResponse.data.success) {
//         // Update order status to completed
//         await axios.put(
//           `https://hotel-nodejs-oa32.onrender.com/89492/9238/${orderId}`,
//           { status: "completed" },
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//             },
//           }
//         );

//         toast.success("Order status updated to completed", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });

//         onPaymentSuccess({
//           ...paymentResponse.data,
//           orderId,
//           items: orderItems,
//         });
//       } else {
//         throw new Error(
//           paymentResponse.data.message || "Payment processing failed"
//         );
//       }
//     } catch (error) {
//       console.error("[PaymentModal] Error during payment process:", error);
//       setError(
//         error.response?.data?.message ||
//           error.message ||
//           "An error occurred during payment processing. Please try again."
//       );
//       toast.error(
//         error.response?.data?.message ||
//           error.message ||
//           "An error occurred during payment processing. Please try again.",
//         {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         }
//       );
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 50, opacity: 0 }}
//           className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-bold">Complete Payment</h2>
//               <button
//                 onClick={onClose}
//                 className="text-gray-500 hover:text-gray-700"
//                 disabled={isProcessing}
//               >
//                 <Close className="text-red-400" />
//               </button>
//             </div>

//             {error && (
//               <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
//                 {error}
//               </div>
//             )}

//             <div className="mb-6 p-4 bg-gray-50 rounded-lg">
//               <h3 className="font-medium mb-3">Order Details</h3>
//               <div className="space-y-3">
//                 {cartItems.map((item, index) => (
//                   <div key={index} className="pb-3 border-b last:border-b-0">
//                     <div className="flex justify-between">
//                       <span className="font-medium">
//                         {item.quantity || 1}x {item.name}
//                       </span>
//                       <span>
//                         ${(item.price * (item.quantity || 1)).toFixed(2)}
//                       </span>
//                     </div>
//                     {item.roomNumber && (
//                       <div className="text-sm text-gray-500 mt-1">
//                         Room: {item.roomNumber}
//                       </div>
//                     )}
//                     {item.description && (
//                       <div className="text-sm text-gray-500 mt-1">
//                         {item.description}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               <div className="flex justify-between font-bold text-lg mt-4 pt-3 border-t">
//                 <span>Total Amount</span>
//                 <span>${cartTotal.toFixed(2)}</span>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} autoComplete="on">
//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2">
//                   Payment Method
//                 </label>
//                 <div className="flex space-x-4">
//                   <button
//                     type="button"
//                     className={`px-4 py-2 rounded border ${
//                       paymentMethod === "credit"
//                         ? "border-blue-500 bg-blue-500 text-white"
//                         : "border-gray-300 text-gray-700 hover:bg-gray-50"
//                     } transition-colors`}
//                     onClick={() => setPaymentMethod("credit")}
//                     disabled={isProcessing}
//                   >
//                     Credit Card
//                   </button>
//                   <button
//                     type="button"
//                     className={`px-4 py-2 rounded border ${
//                       paymentMethod === "paypal"
//                         ? "border-blue-500 bg-blue-500 text-white"
//                         : "border-gray-300 text-gray-700 hover:bg-gray-50"
//                     } transition-colors`}
//                     onClick={() => setPaymentMethod("paypal")}
//                     disabled={isProcessing}
//                   >
//                     PayPal
//                   </button>
//                 </div>
//               </div>

//               {paymentMethod === "credit" && (
//                 <>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-1">
//                       Card Number
//                     </label>
//                     <input
//                       type="text"
//                       name="number"
//                       value={cardDetails.number}
//                       onChange={handleCardNumberChange}
//                       placeholder="1234 5678 9012 3456"
//                       className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       maxLength={19}
//                       required
//                       disabled={isProcessing}
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-1">
//                       Cardholder Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={cardDetails.name}
//                       onChange={handleInputChange}
//                       placeholder="John Doe"
//                       className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       required
//                       disabled={isProcessing}
//                     />
//                   </div>

//                   <div className="grid grid-cols-2 gap-4 mb-6">
//                     <div>
//                       <label className="block text-gray-700 mb-1">
//                         Expiry Date
//                       </label>
//                       <input
//                         type="text"
//                         name="expiry"
//                         value={cardDetails.expiry}
//                         onChange={handleExpiryChange}
//                         placeholder="MM/YY"
//                         className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         maxLength={5}
//                         required
//                         disabled={isProcessing}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 mb-1">CVV</label>
//                       <input
//                         type="text"
//                         name="cvv"
//                         value={cardDetails.cvv}
//                         onChange={handleInputChange}
//                         placeholder="123"
//                         className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         maxLength={4}
//                         required
//                         disabled={isProcessing}
//                       />
//                     </div>
//                   </div>
//                 </>
//               )}

//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-1">Email</label>
//                 {isLoadingEmail ? (
//                   <div className="animate-pulse h-10 bg-gray-200 rounded"></div>
//                 ) : (
//                   <input
//                     type="email"
//                     name="email"
//                     value={cardDetails.email}
//                     onChange={handleInputChange}
//                     placeholder="your@email.com"
//                     className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     required
//                     readOnly={!!cardDetails.email}
//                   />
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 disabled={isProcessing}
//                 className={`w-full py-3 px-6 rounded-lg font-medium text-white ${
//                   isProcessing ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
//                 } transition-colors flex items-center justify-center`}
//               >
//                 {isProcessing ? (
//                   <>
//                     <svg
//                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     Processing...
//                   </>
//                 ) : (
//                   `Pay $${cartTotal.toFixed(2)}`
//                 )}
//               </button>
//             </form>
//           </div>
//         </motion.div>
//       </motion.div>
//     </>
//   );
// };

// //
// const SuccessModal = ({ onClose, cartItems }) => {
//   const totalRooms = cartItems.reduce(
//     (sum, item) => sum + (item.quantity || 1),
//     0
//   );
//   const totalNights = cartItems.reduce(
//     (sum, item) => sum + (item.nights || 1),
//     0
//   );

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: 50, opacity: 0 }}
//         className="bg-white rounded-lg max-w-md w-full p-6 text-center"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <svg
//             className="w-10 h-10 text-green-500"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 13l4 4L19 7"
//             />
//           </svg>
//         </div>
//         <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
//         <p className="text-gray-600 mb-4">
//           You've booked {totalRooms} room{totalRooms > 1 ? "s" : ""} for{" "}
//           {totalNights} night{totalNights > 1 ? "s" : ""}.
//         </p>
//         <p className="text-gray-600 mb-6">
//           Thank you for your booking. A confirmation has been sent to your
//           email.
//         </p>
//         <button
//           onClick={onClose}
//           className="bg-white hover:bg-white-dark text-white font-medium py-2 px-6 rounded-lg transition-colors"
//         >
//           Close
//         </button>
//       </motion.div>
//     </motion.div>
//   );
// };

// export const RoomsServices = () => {
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
//     // Check if room already exists in cart
//     const existingIndex = cartItems.findIndex(
//       (item) => item.id === room.id && item.nights === room.nights
//     );

//     if (existingIndex >= 0) {
//       // Update quantity if room already exists
//       const updatedCart = [...cartItems];
//       updatedCart[existingIndex].quantity += room.quantity || 1;
//       updatedCart[existingIndex].totalPrice =
//         updatedCart[existingIndex].price *
//         updatedCart[existingIndex].nights *
//         updatedCart[existingIndex].quantity;
//       setCartItems(updatedCart);
//     } else {
//       // Add new room to cart
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
//   };

//   const handleCloseSuccessModal = () => {
//     setShowSuccessModal(false);
//     setCartItems([]);
//   };

//   const cartTotal =
//     cartItems.reduce((sum, item) => sum + item.totalPrice, 0) * 1.1; // Including 10% tax

//   return (
//     <>
//       <div className="py-12 w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="text-center"
//         >
//           <h6 className="text-white uppercase font-semibold tracking-wider">
//             Our Rooms
//           </h6>
//           <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
//             Explore Our <span className="text-white uppercase">Rooms</span>
//           </h1>
//         </motion.div>

//         <div className="grid grid-cols-12 gap-6">
//           {rooms.map((room, index) => (
//             <RoomCard
//               key={room.id}
//               room={room}
//               delay={index * 0.1}
//               onViewDetail={handleViewDetail}
//               onAddToCart={handleAddToCart}
//             />
//           ))}
//         </div>

//         <div className="fixed bottom-6 right-6 z-40">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setShowCartModal(true)}
//             className="bg-white hover:bg-white-dark text-white font-medium py-3 px-5 rounded-full shadow-lg flex items-center"
//           >
//             <svg
//               className="w-5 h-5 mr-2 font-bold text-blue-600"
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
//             <span className="mr-1 text-red-500">
//               {cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)}
//             </span>
//             {cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0) ===
//             1
//               ? "Item"
//               : "Items"}
//           </motion.button>
//         </div>

//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="text-center mt-8"
//         >
//           <button
//             onClick={handleViewMore}
//             className="bg-white hover:bg-white-dark text-white font-medium py-2 px-6 rounded-lg transition-colors"
//           >
//             {showAll ? "Show Less" : "View More"}
//           </button>
//         </motion.div>

//         <AnimatePresence>
//           {showDetailModal && selectedRoom && (
//             <RoomDetailModal
//               room={selectedRoom}
//               onClose={() => setShowDetailModal(false)}
//               onAddToCart={handleAddToCart}
//             />
//           )}
//         </AnimatePresence>

//         <AnimatePresence>
//           {showCartModal && (
//             <CartModal
//               cartItems={cartItems}
//               onClose={() => setShowCartModal(false)}
//               onRemoveItem={handleRemoveFromCart}
//               onProceedToPayment={handleProceedToPayment}
//             />
//           )}
//         </AnimatePresence>

//         <AnimatePresence>
//           {showPaymentModal && (
//             <PaymentModal
//               cartTotal={cartTotal}
//               cartItems={cartItems}
//               onClose={() => setShowPaymentModal(false)}
//               onPaymentSuccess={handlePaymentSuccess}
//             />
//           )}
//         </AnimatePresence>

//         <AnimatePresence>
//           {showSuccessModal && (
//             <SuccessModal
//               cartItems={cartItems}
//               onClose={handleCloseSuccessModal}
//             />
//           )}
//         </AnimatePresence>
//       </div>
//     </>
//   );
// };



























// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-unused-vars */
// import { motion, AnimatePresence } from "framer-motion";
// import React, { useState, useEffect } from "react";
// import { jwtDecode } from "jwt-decode";
// import { additionalRooms, initialRooms } from "../../assets/data/data";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   AreaChart,
//   Bathroom,
//   Bed,
//   Close,
//   Details,
//   ShoppingCart,
//   ViewArray,
//   ViewCarousel,
// } from "@mui/icons-material";
// import axios from "axios";
// // import { Button } from "@mui/material";

// const RoomCard = ({ room, delay, onViewDetail, onAddToCart }) => {
//   const [quantity, setQuantity] = useState(1);

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
//     <>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay }}
//         className="col-span-12 md:col-span-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white p-2 rounded-2xl lg:col-span-4"
//       >
//         <div className="shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
//           <div className="relative">
//             <img className="w-full h-64 object-cover" src={room.image} alt="" />
//             <motion.div className="absolute left-0 top-full -translate-y-1/2 rounded py-1 px-3 ml-4 text-sm">
//               ${room.price}/Night
//             </motion.div>
//           </div>
//           <div className="p-4 mt-2 flex-grow">
//             <div className="flex justify-between mb-3">
//               <h5 className="text-lg text-blue-400 font-semibold">
//                 {room.name}
//               </h5>
//               <div className="flex text-amber-200">
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     className="w-6 h-6"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>
//             </div>
//             <div className="flex mb-3 space-x-3 text-sm">
//               <span className="border-r text-blue-400 bg-amber-50 rounded-2xl  p-2 pr-3">
//                 <Bed className="text-green-400 size-6" />
//                 {room.beds} Bed
//               </span>
//               <span className="border-r text-blue-400 bg-amber-50 rounded-2xl  p-2 p pr-3">
//                 <Bathroom className="text-blue-400 size-6" />
//                 {room.baths} Bath
//               </span>
//               <span className="bg-amber-50 text-blue-400 rounded-2xl  p-2">
//                 <svg
//                   className="w-6 h-6 text-green-400 inline mr-1"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
//                   />
//                 </svg>
//                 Wifi
//               </span>
//             </div>
//             <p className="text-white mb-3 line-clamp-2">
//               {room.description}
//             </p>
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <label className="mr-2 text-sm text-gray-300 font-medium">Quantity:</label>
//                 <div className="flex items-center border rounded">
//                   <button
//                     onClick={decrementQuantity}
//                     className="px-2 dark:text-white py-1 bg-gray-100 hover:bg-gray-200"
//                   >
//                     -
//                   </button>
//                   <input
//                     type="number"
//                     min="1"
//                     value={quantity}
//                     onChange={handleQuantityChange}
//                     className="w-12 text-center border-x py-1"
//                   />
//                   <button
//                     onClick={incrementQuantity}
//                     className="px-2 py-1 dark:text-white bg-gray-100 hover:bg-gray-200"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <div className="text-sm text-blue-400 font-medium">
//                 Total: ${(room.price * quantity).toFixed(2)}
//               </div>
//             </div>

//             <div className="flex justify-between mt-auto">
//               <button
//                 onClick={() => onViewDetail(room)}
//                 className="bg-gradient-to-t from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white text-sm py-2 px-4 rounded transition-colors"
//               >
//                 <ViewCarousel className="text-white size-6" />
//               </button>
//               <button
//                 onClick={() =>
//                   onAddToCart({
//                     ...room,
//                     quantity,
//                     totalPrice: room.price * quantity,
//                   })
//                 }
//                 className="bg-gradient-to-t from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white text-sm py-2 px-4 rounded transition-colors"
//               >
//                 <ShoppingCart className="text-white size-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// const RoomDetailModal = ({ room, onClose, onAddToCart }) => {
//   const [nights, setNights] = useState(1);
//   const [quantity, setQuantity] = useState(1);

//   const handleNightsChange = (e) => {
//     const value = parseInt(e.target.value);
//     if (!isNaN(value) && value > 0) {
//       setNights(value);
//     }
//   };

//   const incrementNights = () => {
//     setNights((prev) => prev + 1);
//   };

//   const decrementNights = () => {
//     if (nights > 1) {
//       setNights((prev) => prev - 1);
//     }
//   };

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

//   const totalPrice = room.price * nights * quantity;

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 50, opacity: 0 }}
//           className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="relative">
//             <img
//               src={room.image}
//               alt={room.name}
//               className="w-full p-4 h-74 md:h-80 object-cover rounded-t-lg"
//             />
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-4 bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full p-2 shadow-md"
//             >
//               <Close className="text-white size-4" />
//             </button>
//           </div>

//           <div className="p-6">
//             <div className="flex justify-between items-start mb-4">
//               <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
//                 <div className="main">
//                   <h2 className="text-2xl font-bold">{room.name}</h2>
//                 </div>
//                 <div className="main0">
//                   <div className="font-semibold text-xl">
//                     ${" "}
//                     <span className="text-blue-400 font-bold">
//                       {room.price}
//                     </span>
//                     /Night
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-4 mb-6">
//               <div className="bg-amber-50 p-2 flex items-center">
//                 <Bed className="text-green-500 size-6" />
//                 <span className="font-semibold">{room.beds} Beds</span>
//               </div>
//               <div className="bg-amber-50 p-2 flex items-center">
//                 <Bathroom className="text-blue-400 size-6" />
//                 <span className="font-semibold">{room.baths} Baths</span>
//               </div>
//               <div className="bg-amber-50 p-2 flex items-center">
//                 <svg
//                   className="w-6 h-6 text-green-400 mr-2"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
//                   />
//                 </svg>
//                 <span className="font-semibold">Free WiFi</span>
//               </div>
//               <div className="bg-amber-50 p-2 flex items-center">
//                 <AreaChart className="text-blue-400 size-6" />
//                 <span className="font-semibold">{room.size} sq.ft</span>
//               </div>
//             </div>

//             <div className="mb-6">
//               <h3 className="text-xl font-semibold mb-3">Description</h3>
//               <p className="text-gray-700">{room.description}</p>
//             </div>

//             <div className="border-t pt-6">
//               <h3 className="text-xl font-semibold mb-4">Booking Details</h3>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label className="block text-gray-700 mb-2">
//                     Number of Nights
//                   </label>
//                   <div className="flex items-center">
//                     <button
//                       onClick={decrementNights}
//                       className="bg-white dark:text-white hover:bg-gray-300 px-3 py-1 rounded-l"
//                     >
//                       -
//                     </button>
//                     <input
//                       type="number"
//                       min="1"
//                       value={nights}
//                       onChange={handleNightsChange}
//                       className="w-16 text-center border-t border-b border-gray-300 py-1"
//                     />
//                     <button
//                       onClick={incrementNights}
//                       className="bg-white dark:text-white hover:bg-gray-300 px-3 py-1 rounded-r"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-2">
//                     Number of Rooms
//                   </label>
//                   <div className="flex items-center">
//                     <button
//                       onClick={decrementQuantity}
//                       className="bg-white dark:text-white hover:bg-gray-300 px-3 py-1 rounded-l"
//                     >
//                       -
//                     </button>
//                     <input
//                       type="number"
//                       min="1"
//                       value={quantity}
//                       onChange={handleQuantityChange}
//                       className="w-16 text-center border-t border-b border-gray-300 py-1"
//                     />
//                     <button
//                       onClick={incrementQuantity}
//                       className="bg-white dark:text-white hover:bg-gray-300 px-3 py-1 rounded-r"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg">
//                 <div>
//                   <p className="text-gray-600">
//                     Price per night:{" "}
//                     <span className="text-gray-950 font-bold">$ </span>
//                     <span className="text-blue-500 font-bold">
//                       {room.price}
//                     </span>
//                   </p>
//                   <p className="text-sm ">
//                     <span className="text-red-600 font-bold"> {quantity}</span>{" "}
//                     room {quantity > 1 ? "s" : ""} ×{" "}
//                     <span className="text-green-500 font-bold">{nights} </span>
//                     night
//                     {nights > 1 ? "s" : ""}
//                   </p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-xl font-semibold">
//                     Total:{" "}
//                     <span className="text-blue-500 font-bold">
//                       {" "}
//                       ${totalPrice.toFixed(2)}
//                     </span>
//                   </p>
//                 </div>
//               </div>

//               <div className="flex justify-end space-x-4">
//                 <button
//                   onClick={onClose}
//                   className="bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-medium py-2 px-6 rounded-lg transition-colors"
//                 >
//                   <Close className="text-white size-6" />
//                 </button>
//                 <button
//                   onClick={() =>
//                     onAddToCart({
//                       ...room,
//                       nights,
//                       quantity,
//                       totalPrice,
//                     })
//                   }
//                   className="bg-gradient-to-t from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
//                 >
//                   <ShoppingCart className="text-white size-6" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </>
//   );
// };

// const CartModal = ({
//   cartItems,
//   onClose,
//   onRemoveItem,
//   onProceedToPayment,
// }) => {
//   const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
//   const tax = subtotal * 0.1; // 10% tax
//   const total = subtotal + tax;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: 50, opacity: 0 }}
//         className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold">Your Cart</h2>
//             <button
//               onClick={onClose}
//               className="bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full p-2"
//             >
//               <Close className="text-white size-6" />
//             </button>
//           </div>

//           {cartItems.length === 0 ? (
//             <div className="text-center py-8">
//               <p className="text-gray-600">Your cart is empty</p>
//             </div>
//           ) : (
//             <>
//               <div className="divide-y">
//                 {cartItems.map((item, index) => (
//                   <div key={index} className="py-4 flex justify-between">
//                     <div className="flex">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-20 h-20 object-cover rounded"
//                       />
//                       <div className="ml-4">
//                         <h3 className="font-medium">{item.name}</h3>
//                         <p className="text-gray-600 text-sm">
//                           {item.quantity || 1} room
//                           {item.quantity > 1 ? "s" : ""} × {item.nights || 1}{" "}
//                           night{item.nights > 1 ? "s" : ""} × ${item.price}
//                         </p>
//                         <button
//                           onClick={() => onRemoveItem(index)}
//                           className="bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white text-sm mt-1 px-2 py-1 rounded"
//                         >
//                           <Close className="text-white size-4" />
//                         </button>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-medium">
//                         ${item.totalPrice.toFixed(2)}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t pt-4 mt-4">
//                 <div className="flex justify-between mb-2">
//                   <span className="text-gray-600">Subtotal</span>
//                   <p>${subtotal.toFixed(2)}</p>
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <span className="text-gray-600">Tax (10%)</span>
//                   <span>${tax.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between font-bold text-lg mt-4">
//                   <span>Total</span>
//                   <span>${total.toFixed(2)}</span>
//                 </div>

//                 <button
//                   onClick={onProceedToPayment}
//                   className="w-full bg-gradient-to-t from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg mt-6 transition-colors"
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
// // ***********************************************************************************************************************************************************
// // payment

// export const PaymentModal = ({
//   cartTotal,
//   cartItems,
//   onClose,
//   onPaymentSuccess,
// }) => {
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
//   const [isLoadingEmail, setIsLoadingEmail] = useState(true);

//   useEffect(() => {
//     console.log("[PaymentModal] Initializing with cart items:", cartItems);
//     const fetchUserEmailFromToken = () => {
//       try {
//         const token = localStorage.getItem("authToken");
//         console.log("[PaymentModal] Token found:", token ? "Yes" : "No");

//         if (token) {
//           const decoded = jwtDecode(token);
//           console.log("[PaymentModal] Decoded token:", decoded);

//           const userEmail =
//             decoded.email ||
//             decoded.user?.email ||
//             decoded.userEmail ||
//             decoded.sub;
//           console.log(
//             "[PaymentModal] Extracted email:",
//             userEmail || "Not found"
//           );

//           if (userEmail) {
//             setCardDetails((prev) => ({
//               ...prev,
//               email: userEmail,
//             }));
//           }
//         }
//       } catch (error) {
//         console.error("[PaymentModal] Error decoding token:", error);
//         setError("Failed to load user information");
//         toast.error("Failed to load user information", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       } finally {
//         setIsLoadingEmail(false);
//       }
//     };

//     fetchUserEmailFromToken();
//   }, []);

//   const formatCardNumber = (value) => {
//     const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
//     const matches = v.match(/\d{4,16}/g);
//     const match = matches?.[0] || "";
//     const parts = [];

//     for (let i = 0, len = match.length; i < len; i += 4) {
//       parts.push(match.substring(i, i + 4));
//     }

//     return parts.length ? parts.join(" ") : value;
//   };

//   const formatExpiry = (value) => {
//     const v = value.replace(/[^0-9]/g, "");
//     if (v.length >= 3) {
//       return `${v.slice(0, 2)}/${v.slice(2, 4)}`;
//     }
//     return value;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCardDetails((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleCardNumberChange = (e) => {
//     const formatted = formatCardNumber(e.target.value);
//     setCardDetails((prev) => ({
//       ...prev,
//       number: formatted,
//     }));
//   };

//   const handleExpiryChange = (e) => {
//     const formatted = formatExpiry(e.target.value);
//     setCardDetails((prev) => ({
//       ...prev,
//       expiry: formatted,
//     }));
//   };

//   const validateForm = () => {
//     if (!cardDetails.email) {
//       setError("Email is required");
//       toast.error("Email is required", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//       return false;
//     }

//     if (paymentMethod === "credit") {
//       if (
//         !cardDetails.number ||
//         cardDetails.number.replace(/\s/g, "").length < 15
//       ) {
//         setError("Please enter a valid card number");
//         toast.error("Please enter a valid card number", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//         return false;
//       }
//       if (!cardDetails.name) {
//         setError("Cardholder name is required");
//         toast.error("Cardholder name is required", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//         return false;
//       }
//       if (!cardDetails.expiry || cardDetails.expiry.length < 5) {
//         setError("Please enter a valid expiry date (MM/YY)");
//         toast.error("Please enter a valid expiry date (MM/YY)", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//         return false;
//       }
//       if (!cardDetails.cvv || cardDetails.cvv.length < 3) {
//         setError("Please enter a valid CVV");
//         toast.error("Please enter a valid CVV", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//         return false;
//       }
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     console.log("[PaymentModal] Starting payment submission...");

//     if (!validateForm()) {
//       return;
//     }

//     setIsProcessing(true);

//     try {
//       // Prepare complete order items data for database
//       const orderItems = cartItems.map((item) => ({
//         productId: item.id,
//         name: item.name,
//         quantity: item.quantity || 1,
//         price: item.price,
//         roomNumber: item.roomNumber || 1,
//         subtotal: (item.price * (item.quantity || 1)).toFixed(2),
//         ...(item.description && { description: item.description }),
//         ...(item.category && { category: item.category }),
//       }));

//       console.log("[PaymentModal] Prepared order items:", orderItems);

//       // First save order to database
//       const orderResponse = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/89492/9238",
//         {
//           customerEmail: cardDetails.email,
//           totalAmount: cartTotal,
//           paymentMethod,
//           items: orderItems,
//           status: "pending",
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//           },
//         }
//       );

//       console.log(
//         "[PaymentModal] Order saved to database:",
//         orderResponse.data
//       );

//       toast.success("Order saved to database!", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });

//       if (!orderResponse.data.success) {
//         throw new Error("Failed to save order to database");
//       }

//       const orderId = orderResponse.data.orderId;

//       // Then process payment
//       const paymentData = {
//         orderId,
//         amount: cartTotal,
//         currency: "USD",
//         paymentMethod,
//         customerEmail: cardDetails.email,
//         ...(paymentMethod === "credit" && {
//           card: {
//             number: cardDetails.number.replace(/\s/g, ""),
//             name: cardDetails.name,
//             expiry: cardDetails.expiry,
//             cvv: cardDetails.cvv,
//           },
//         }),
//       };

//       console.log("[PaymentModal] Processing payment with data:", paymentData);

//       const paymentResponse = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/78799/2457",
//         paymentData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//           },
//         }
//       );

//       toast.success("Payment processed successfully!", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });

//       if (paymentResponse.data.success) {
//         // Update order status to completed
//         await axios.put(
//           `https://hotel-nodejs-oa32.onrender.com/89492/9238/${orderId}`,
//           { status: "completed" },
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//             },
//           }
//         );

//         toast.success("Order status updated to completed", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });

//         onPaymentSuccess({
//           ...paymentResponse.data,
//           orderId,
//           items: orderItems,
//         });
//       } else {
//         throw new Error(
//           paymentResponse.data.message || "Payment processing failed"
//         );
//       }
//     } catch (error) {
//       console.error("[PaymentModal] Error during payment process:", error);
//       setError(
//         error.response?.data?.message ||
//           error.message ||
//           "An error occurred during payment processing. Please try again."
//       );
//       toast.error(
//         error.response?.data?.message ||
//           error.message ||
//           "An error occurred during payment processing. Please try again.",
//         {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         }
//       );
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 50, opacity: 0 }}
//           className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-bold">Complete Payment</h2>
//               <button
//                 onClick={onClose}
//                 className="bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full p-2"
//                 disabled={isProcessing}
//               >
//                 <Close className="text-white size-4" />
//               </button>
//             </div>

//             {error && (
//               <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
//                 {error}
//               </div>
//             )}

//             <div className="mb-6 p-4 bg-gray-50 rounded-lg">
//               <h3 className="font-medium mb-3">Order Details</h3>
//               <div className="space-y-3">
//                 {cartItems.map((item, index) => (
//                   <div key={index} className="pb-3 border-b last:border-b-0">
//                     <div className="flex justify-between">
//                       <span className="font-medium">
//                         {item.quantity || 1}x {item.name}
//                       </span>
//                       <span>
//                         ${(item.price * (item.quantity || 1)).toFixed(2)}
//                       </span>
//                     </div>
//                     {item.roomNumber && (
//                       <div className="text-sm text-gray-500 mt-1">
//                         Room: {item.roomNumber}
//                       </div>
//                     )}
//                     {item.description && (
//                       <div className="text-sm text-gray-500 mt-1">
//                         {item.description}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               <div className="flex justify-between font-bold text-lg mt-4 pt-3 border-t">
//                 <span>Total Amount</span>
//                 <span>${cartTotal.toFixed(2)}</span>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} autoComplete="on">
//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2">
//                   Payment Method
//                 </label>
//                 <div className="flex space-x-4">
//                   <button
//                     type="button"
//                     className={`px-4 py-2 rounded border ${
//                       paymentMethod === "credit"
//                         ? "bg-gradient-to-t from-blue-400 to-blue-600 text-white border-blue-500"
//                         : "border-gray-300 text-gray-700 hover:bg-gray-50"
//                     } transition-colors`}
//                     onClick={() => setPaymentMethod("credit")}
//                     disabled={isProcessing}
//                   >
//                     Credit Card
//                   </button>
//                   <button
//                     type="button"
//                     className={`px-4 py-2 rounded border ${
//                       paymentMethod === "paypal"
//                         ? "bg-gradient-to-t from-blue-400 to-blue-600 text-white border-blue-500"
//                         : "border-gray-300 text-gray-700 hover:bg-gray-50"
//                     } transition-colors`}
//                     onClick={() => setPaymentMethod("paypal")}
//                     disabled={isProcessing}
//                   >
//                     PayPal
//                   </button>
//                 </div>
//               </div>

//               {paymentMethod === "credit" && (
//                 <>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-1">
//                       Card Number
//                     </label>
//                     <input
//                       type="text"
//                       name="number"
//                       value={cardDetails.number}
//                       onChange={handleCardNumberChange}
//                       placeholder="1234 5678 9012 3456"
//                       className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       maxLength={19}
//                       required
//                       disabled={isProcessing}
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-1">
//                       Cardholder Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={cardDetails.name}
//                       onChange={handleInputChange}
//                       placeholder="John Doe"
//                       className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       required
//                       disabled={isProcessing}
//                     />
//                   </div>

//                   <div className="grid grid-cols-2 gap-4 mb-6">
//                     <div>
//                       <label className="block text-gray-700 mb-1">
//                         Expiry Date
//                       </label>
//                       <input
//                         type="text"
//                         name="expiry"
//                         value={cardDetails.expiry}
//                         onChange={handleExpiryChange}
//                         placeholder="MM/YY"
//                         className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         maxLength={5}
//                         required
//                         disabled={isProcessing}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 mb-1">CVV</label>
//                       <input
//                         type="text"
//                         name="cvv"
//                         value={cardDetails.cvv}
//                         onChange={handleInputChange}
//                         placeholder="123"
//                         className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         maxLength={4}
//                         required
//                         disabled={isProcessing}
//                       />
//                     </div>
//                   </div>
//                 </>
//               )}

//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-1">Email</label>
//                 {isLoadingEmail ? (
//                   <div className="animate-pulse h-10 bg-gray-200 rounded"></div>
//                 ) : (
//                   <input
//                     type="email"
//                     name="email"
//                     value={cardDetails.email}
//                     onChange={handleInputChange}
//                     placeholder="your@email.com"
//                     className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     required
//                     readOnly={!!cardDetails.email}
//                   />
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 disabled={isProcessing}
//                 className={`w-full py-3 px-6 rounded-lg font-medium text-white bg-gradient-to-t ${
//                   isProcessing ? "from-blue-400 to-blue-500" : "from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700"
//                 } transition-colors flex items-center justify-center`}
//               >
//                 {isProcessing ? (
//                   <>
//                     <svg
//                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     Processing...
//                   </>
//                 ) : (
//                   `Pay $${cartTotal.toFixed(2)}`
//                 )}
//               </button>
//             </form>
//           </div>
//         </motion.div>
//       </motion.div>
//     </>
//   );
// };

// //
// const SuccessModal = ({ onClose, cartItems }) => {
//   const totalRooms = cartItems.reduce(
//     (sum, item) => sum + (item.quantity || 1),
//     0
//   );
//   const totalNights = cartItems.reduce(
//     (sum, item) => sum + (item.nights || 1),
//     0
//   );

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: 50, opacity: 0 }}
//         className="bg-white rounded-lg max-w-md w-full p-6 text-center"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <svg
//             className="w-10 h-10 text-green-500"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 13l4 4L19 7"
//             />
//           </svg>
//         </div>
//         <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
//         <p className="text-gray-600 mb-4">
//           You've booked {totalRooms} room{totalRooms > 1 ? "s" : ""} for{" "}
//           {totalNights} night{totalNights > 1 ? "s" : ""}.
//         </p>
//         <p className="text-gray-600 mb-6">
//           Thank you for your booking. A confirmation has been sent to your
//           email.
//         </p>
//         <button
//           onClick={onClose}
//           className="bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-medium py-2 px-6 rounded-lg transition-colors"
//         >
//           Close
//         </button>
//       </motion.div>
//     </motion.div>
//   );
// };

// export const RoomsServices = () => {
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
//     // Check if room already exists in cart
//     const existingIndex = cartItems.findIndex(
//       (item) => item.id === room.id && item.nights === room.nights
//     );

//     if (existingIndex >= 0) {
//       // Update quantity if room already exists
//       const updatedCart = [...cartItems];
//       updatedCart[existingIndex].quantity += room.quantity || 1;
//       updatedCart[existingIndex].totalPrice =
//         updatedCart[existingIndex].price *
//         updatedCart[existingIndex].nights *
//         updatedCart[existingIndex].quantity;
//       setCartItems(updatedCart);
//     } else {
//       // Add new room to cart
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
//   };

//   const handleCloseSuccessModal = () => {
//     setShowSuccessModal(false);
//     setCartItems([]);
//   };

//   const cartTotal =
//     cartItems.reduce((sum, item) => sum + item.totalPrice, 0) * 1.1; // Including 10% tax

//   return (
//     <>
//       <div className="py-12 w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="text-center"
//         >
//           <h6 className="text-white uppercase font-semibold tracking-wider">
//             Our Rooms
//           </h6>
//           <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
//             Explore Our <span className="text-white uppercase">Rooms</span>
//           </h1>
//         </motion.div>

//         <div className="grid grid-cols-12 gap-6">
//           {rooms.map((room, index) => (
//             <RoomCard
//               key={room.id}
//               room={room}
//               delay={index * 0.1}
//               onViewDetail={handleViewDetail}
//               onAddToCart={handleAddToCart}
//             />
//           ))}
//         </div>

//         <div className="fixed bottom-6 right-6 z-40">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setShowCartModal(true)}
//             className="bg-gradient-to-t from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-medium py-3 px-5 rounded-full shadow-lg flex items-center"
//           >
//             <svg
//               className="w-5 h-5 mr-2 font-bold text-white"
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
//             <span className="mr-1 text-white">
//               {cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)}
//             </span>
//             {cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0) ===
//             1
//               ? "Item"
//               : "Items"}
//           </motion.button>
//         </div>

//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="text-center mt-8"
//         >
//           <button
//             onClick={handleViewMore}
//             className="bg-gradient-to-t from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
//           >
//             {showAll ? "Show Less" : "View More"}
//           </button>
//         </motion.div>

//         <AnimatePresence>
//           {showDetailModal && selectedRoom && (
//             <RoomDetailModal
//               room={selectedRoom}
//               onClose={() => setShowDetailModal(false)}
//               onAddToCart={handleAddToCart}
//             />
//           )}
//         </AnimatePresence>

//         <AnimatePresence>
//           {showCartModal && (
//             <CartModal
//               cartItems={cartItems}
//               onClose={() => setShowCartModal(false)}
//               onRemoveItem={handleRemoveFromCart}
//               onProceedToPayment={handleProceedToPayment}
//             />
//           )}
//         </AnimatePresence>

//         <AnimatePresence>
//           {showPaymentModal && (
//             <PaymentModal
//               cartTotal={cartTotal}
//               cartItems={cartItems}
//               onClose={() => setShowPaymentModal(false)}
//               onPaymentSuccess={handlePaymentSuccess}
//             />
//           )}
//         </AnimatePresence>

//         <AnimatePresence>
//           {showSuccessModal && (
//             <SuccessModal
//               cartItems={cartItems}
//               onClose={handleCloseSuccessModal}
//             />
//           )}
//         </AnimatePresence>
//       </div>
//     </>
//   );
// };













































/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { additionalRooms, initialRooms } from "../../assets/data/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AreaChart,
  Bathroom,
  Bed,
  Close,
  Details,
  ShoppingCart,
  ViewArray,
  ViewCarousel,
} from "@mui/icons-material";
import axios from "axios";

const RoomCard = ({ room, delay, onViewDetail, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="col-span-12 md:col-span-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white p-2 rounded-2xl lg:col-span-4"
      >
        <div className="shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
          <div className="relative">
            <img className="w-full h-64 object-cover" src={room.image} alt="" />
            <motion.div className="absolute left-0 top-full -translate-y-1/2 rounded py-1 px-3 ml-4 text-sm bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold">
              ${room.price}/Night
            </motion.div>
          </div>
          <div className="p-4 mt-2 flex-grow">
            <div className="flex justify-between mb-3">
              <h5 className="text-lg text-blue-300 font-semibold">
                {room.name}
              </h5>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="flex mb-3 space-x-3 text-sm">
              <span className="border-r bg-gray-800 text-blue-300 rounded-2xl p-2 pr-3 border-blue-500">
                <Bed className="text-green-400 size-6" />
                {room.beds} Bed
              </span>
              <span className="border-r bg-gray-800 text-blue-300 rounded-2xl p-2 pr-3 border-blue-500">
                <Bathroom className="text-blue-400 size-6" />
                {room.baths} Bath
              </span>
              <span className="bg-gray-800 text-blue-300 rounded-2xl p-2">
                <svg
                  className="w-6 h-6 text-green-400 inline mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  />
                </svg>
                Wifi
              </span>
            </div>
            <p className="text-gray-200 mb-3 line-clamp-2">
              {room.description}
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <label className="mr-2 text-sm text-gray-300 font-medium">Quantity:</label>
                <div className="flex items-center border border-gray-600 rounded bg-gray-800">
                  <button
                    onClick={decrementQuantity}
                    className="px-2 text-white py-1 bg-gray-700 hover:bg-gray-600 rounded-l"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-12 text-center border-x border-gray-600 py-1 bg-gray-800 text-white"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="px-2 py-1 text-white bg-gray-700 hover:bg-gray-600 rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-sm text-blue-300 font-medium bg-gray-800 px-3 py-1 rounded-full">
                Total: ${(room.price * quantity).toFixed(2)}
              </div>
            </div>

            <div className="flex justify-between mt-auto">
              <button
                onClick={() => onViewDetail(room)}
                className="bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-sm py-2 px-4 rounded-lg transition-colors shadow-lg flex items-center gap-2"
              >
                <ViewCarousel className="text-white size-5" />
                <span>View Details</span>
              </button>
              <button
                onClick={() =>
                  onAddToCart({
                    ...room,
                    quantity,
                    totalPrice: room.price * quantity,
                  })
                }
                className="bg-gradient-to-t from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white text-sm py-2 px-4 rounded-lg transition-colors shadow-lg flex items-center gap-2"
              >
                <ShoppingCart className="text-white size-4" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const RoomDetailModal = ({ room, onClose, onAddToCart }) => {
  const [nights, setNights] = useState(1);
  const [quantity, setQuantity] = useState(1);

  const handleNightsChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setNights(value);
    }
  };

  const incrementNights = () => {
    setNights((prev) => prev + 1);
  };

  const decrementNights = () => {
    if (nights > 1) {
      setNights((prev) => prev - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const totalPrice = room.price * nights * quantity;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-80 object-cover rounded-t-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-t-xl"></div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
            >
              <Close className="text-white size-5" />
            </button>
            <div className="absolute bottom-4 left-4">
              <h2 className="text-3xl font-bold text-white mb-2">{room.name}</h2>
              <div className="flex items-center gap-2">
                <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full font-bold text-lg">
                  ${room.price}
                </span>
                <span className="text-white text-lg">/ Night</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-blue-50 p-3 rounded-lg flex items-center gap-2 border border-blue-200">
                <Bed className="text-blue-600 size-6" />
                <span className="font-semibold text-gray-800">{room.beds} Beds</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg flex items-center gap-2 border border-blue-200">
                <Bathroom className="text-blue-600 size-6" />
                <span className="font-semibold text-gray-800">{room.baths} Baths</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg flex items-center gap-2 border border-blue-200">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  />
                </svg>
                <span className="font-semibold text-gray-800">Free WiFi</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg flex items-center gap-2 border border-blue-200">
                <AreaChart className="text-blue-600 size-6" />
                <span className="font-semibold text-gray-800">{room.size} sq.ft</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 border-b pb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{room.description}</p>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Booking Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Number of Nights
                  </label>
                  <div className="flex items-center">
                    <button
                      onClick={decrementNights}
                      className="bg-gradient-to-t from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-800 px-4 py-2 rounded-l-lg font-bold"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={nights}
                      onChange={handleNightsChange}
                      className="w-16 text-center border-y border-gray-300 py-2 text-gray-800 font-bold"
                    />
                    <button
                      onClick={incrementNights}
                      className="bg-gradient-to-t from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-800 px-4 py-2 rounded-r-lg font-bold"
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
                      onClick={decrementQuantity}
                      className="bg-gradient-to-t from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-800 px-4 py-2 rounded-l-lg font-bold"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-16 text-center border-y border-gray-300 py-2 text-gray-800 font-bold"
                    />
                    <button
                      onClick={incrementQuantity}
                      className="bg-gradient-to-t from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-800 px-4 py-2 rounded-r-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <div>
                  <p className="text-gray-700">
                    Price per night: <span className="text-blue-600 font-bold">${room.price}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="text-blue-600 font-bold">{quantity}</span> room{quantity > 1 ? "s" : ""} × 
                    <span className="text-green-600 font-bold"> {nights} </span>
                    night{nights > 1 ? "s" : ""}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-semibold text-gray-800">
                    Total: <span className="text-blue-600 font-bold">${totalPrice.toFixed(2)}</span>
                  </p>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  onClick={onClose}
                  className="bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-lg flex items-center gap-2"
                >
                  <Close className="text-white size-5" />
                  <span>Close</span>
                </button>
                <button
                  onClick={() =>
                    onAddToCart({
                      ...room,
                      nights,
                      quantity,
                      totalPrice,
                    })
                  }
                  className="bg-gradient-to-t from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-lg flex items-center gap-2"
                >
                  <ShoppingCart className="text-white size-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

const CartModal = ({
  cartItems,
  onClose,
  onRemoveItem,
  onProceedToPayment,
}) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
            <button
              onClick={onClose}
              className="bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
            >
              <Close className="text-white size-5" />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🛒</div>
              <p className="text-gray-600 text-lg">Your cart is empty</p>
              <button
                onClick={onClose}
                className="mt-4 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 rounded-lg"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <div key={index} className="py-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <div className="flex">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg shadow-md"
                      />
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600 text-sm">
                          {item.quantity || 1} room{item.quantity > 1 ? "s" : ""} × {item.nights || 1} night{item.nights > 1 ? "s" : ""} × ${item.price}
                        </p>
                        <button
                          onClick={() => onRemoveItem(index)}
                          className="bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white text-sm mt-2 px-3 py-1 rounded-lg flex items-center gap-1"
                        >
                          <Close className="text-white size-4" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800 text-lg">
                        ${item.totalPrice.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mt-4 bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800 font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span className="text-gray-800 font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-4 pt-2 border-t border-gray-300">
                  <span className="text-gray-800">Total</span>
                  <span className="text-blue-600">${total.toFixed(2)}</span>
                </div>

                <button
                  onClick={onProceedToPayment}
                  className="w-full bg-gradient-to-t from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-medium py-3 px-6 rounded-lg mt-6 transition-colors shadow-lg"
                >
                  Proceed to Payment
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const PaymentModal = ({
  cartTotal,
  cartItems,
  onClose,
  onPaymentSuccess,
}) => {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
    email: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [isLoadingEmail, setIsLoadingEmail] = useState(true);

  useEffect(() => {
    console.log("[PaymentModal] Initializing with cart items:", cartItems);
    const fetchUserEmailFromToken = () => {
      try {
        const token = localStorage.getItem("authToken");
        console.log("[PaymentModal] Token found:", token ? "Yes" : "No");

        if (token) {
          const decoded = jwtDecode(token);
          console.log("[PaymentModal] Decoded token:", decoded);

          const userEmail =
            decoded.email ||
            decoded.user?.email ||
            decoded.userEmail ||
            decoded.sub;
          console.log(
            "[PaymentModal] Extracted email:",
            userEmail || "Not found"
          );

          if (userEmail) {
            setCardDetails((prev) => ({
              ...prev,
              email: userEmail,
            }));
          }
        }
      } catch (error) {
        console.error("[PaymentModal] Error decoding token:", error);
        setError("Failed to load user information");
        toast.error("Failed to load user information", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setIsLoadingEmail(false);
      }
    };

    fetchUserEmailFromToken();
  }, []);

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = matches?.[0] || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    return parts.length ? parts.join(" ") : value;
  };

  const formatExpiry = (value) => {
    const v = value.replace(/[^0-9]/g, "");
    if (v.length >= 3) {
      return `${v.slice(0, 2)}/${v.slice(2, 4)}`;
    }
    return value;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardDetails((prev) => ({
      ...prev,
      number: formatted,
    }));
  };

  const handleExpiryChange = (e) => {
    const formatted = formatExpiry(e.target.value);
    setCardDetails((prev) => ({
      ...prev,
      expiry: formatted,
    }));
  };

  const validateForm = () => {
    if (!cardDetails.email) {
      setError("Email is required");
      toast.error("Email is required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    }

    if (paymentMethod === "credit") {
      if (
        !cardDetails.number ||
        cardDetails.number.replace(/\s/g, "").length < 15
      ) {
        setError("Please enter a valid card number");
        toast.error("Please enter a valid card number", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return false;
      }
      if (!cardDetails.name) {
        setError("Cardholder name is required");
        toast.error("Cardholder name is required", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return false;
      }
      if (!cardDetails.expiry || cardDetails.expiry.length < 5) {
        setError("Please enter a valid expiry date (MM/YY)");
        toast.error("Please enter a valid expiry date (MM/YY)", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return false;
      }
      if (!cardDetails.cvv || cardDetails.cvv.length < 3) {
        setError("Please enter a valid CVV");
        toast.error("Please enter a valid CVV", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    console.log("[PaymentModal] Starting payment submission...");

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    try {
      const orderItems = cartItems.map((item) => ({
        productId: item.id,
        name: item.name,
        quantity: item.quantity || 1,
        price: item.price,
        roomNumber: item.roomNumber || 1,
        subtotal: (item.price * (item.quantity || 1)).toFixed(2),
        ...(item.description && { description: item.description }),
        ...(item.category && { category: item.category }),
      }));

      console.log("[PaymentModal] Prepared order items:", orderItems);

      const orderResponse = await axios.post(
        "https://hotel-nodejs-oa32.onrender.com/89492/9238",
        {
          customerEmail: cardDetails.email,
          totalAmount: cartTotal,
          paymentMethod,
          items: orderItems,
          status: "pending",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      console.log(
        "[PaymentModal] Order saved to database:",
        orderResponse.data
      );

      toast.success("Order saved to database!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      if (!orderResponse.data.success) {
        throw new Error("Failed to save order to database");
      }

      const orderId = orderResponse.data.orderId;

      const paymentData = {
        orderId,
        amount: cartTotal,
        currency: "USD",
        paymentMethod,
        customerEmail: cardDetails.email,
        ...(paymentMethod === "credit" && {
          card: {
            number: cardDetails.number.replace(/\s/g, ""),
            name: cardDetails.name,
            expiry: cardDetails.expiry,
            cvv: cardDetails.cvv,
          },
        }),
      };

      console.log("[PaymentModal] Processing payment with data:", paymentData);

      const paymentResponse = await axios.post(
        "https://hotel-nodejs-oa32.onrender.com/78799/2457",
        paymentData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      toast.success("Payment processed successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      if (paymentResponse.data.success) {
        await axios.put(
          `https://hotel-nodejs-oa32.onrender.com/89492/9238/${orderId}`,
          { status: "completed" },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );

        toast.success("Order status updated to completed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        onPaymentSuccess({
          ...paymentResponse.data,
          orderId,
          items: orderItems,
        });
      } else {
        throw new Error(
          paymentResponse.data.message || "Payment processing failed"
        );
      }
    } catch (error) {
      console.error("[PaymentModal] Error during payment process:", error);
      setError(
        error.response?.data?.message ||
          error.message ||
          "An error occurred during payment processing. Please try again."
      );
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "An error occurred during payment processing. Please try again.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Complete Payment</h2>
              <button
                onClick={onClose}
                className="bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
                disabled={isProcessing}
              >
                <Close className="text-white size-5" />
              </button>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg border border-red-300">
                {error}
              </div>
            )}

            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <h3 className="font-medium mb-3 text-gray-800">Order Details</h3>
              <div className="space-y-3">
                {cartItems.map((item, index) => (
                  <div key={index} className="pb-3 border-b border-blue-200 last:border-b-0">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-800">
                        {item.quantity || 1}x {item.name}
                      </span>
                      <span className="text-gray-800 font-bold">
                        ${(item.price * (item.quantity || 1)).toFixed(2)}
                      </span>
                    </div>
                    {item.roomNumber && (
                      <div className="text-sm text-gray-600 mt-1">
                        Room: {item.roomNumber}
                      </div>
                    )}
                    {item.description && (
                      <div className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between font-bold text-lg mt-4 pt-3 border-t border-blue-300">
                <span className="text-gray-800">Total Amount</span>
                <span className="text-blue-600">${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} autoComplete="on">
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">
                  Payment Method
                </label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      paymentMethod === "credit"
                        ? "bg-gradient-to-t from-blue-500 to-blue-700 text-white shadow-lg"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("credit")}
                    disabled={isProcessing}
                  >
                    Credit Card
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      paymentMethod === "paypal"
                        ? "bg-gradient-to-t from-blue-500 to-blue-700 text-white shadow-lg"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("paypal")}
                    disabled={isProcessing}
                  >
                    PayPal
                  </button>
                </div>
              </div>

              {paymentMethod === "credit" && (
                <>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-1 font-medium">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="number"
                      value={cardDetails.number}
                      onChange={handleCardNumberChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                      maxLength={19}
                      required
                      disabled={isProcessing}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 mb-1 font-medium">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={cardDetails.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                      required
                      disabled={isProcessing}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-gray-700 mb-1 font-medium">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiry"
                        value={cardDetails.expiry}
                        onChange={handleExpiryChange}
                        placeholder="MM/YY"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                        maxLength={5}
                        required
                        disabled={isProcessing}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1 font-medium">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                        maxLength={4}
                        required
                        disabled={isProcessing}
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="mb-6">
                <label className="block text-gray-700 mb-1 font-medium">Email</label>
                {isLoadingEmail ? (
                  <div className="animate-pulse h-10 bg-gray-200 rounded-lg"></div>
                ) : (
                  <input
                    type="email"
                    name="email"
                    value={cardDetails.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                    required
                    readOnly={!!cardDetails.email}
                  />
                )}
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-3 px-6 rounded-lg font-medium text-white bg-gradient-to-t ${
                  isProcessing ? "from-blue-400 to-blue-500" : "from-green-500 to-green-700 hover:from-green-600 hover:to-green-800"
                } transition-all flex items-center justify-center shadow-lg ${
                  isProcessing ? "" : "hover:scale-105"
                }`}
              >
                {isProcessing ? (
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
                    Processing...
                  </>
                ) : (
                  `Pay $${cartTotal.toFixed(2)}`
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

const SuccessModal = ({ onClose, cartItems }) => {
  const totalRooms = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );
  const totalNights = cartItems.reduce(
    (sum, item) => sum + (item.nights || 1),
    0
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white rounded-xl max-w-md w-full p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-20 h-20 bg-gradient-to-t from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
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
        </div>
        <h2 className="text-3xl font-bold mb-3 text-gray-800">Payment Successful!</h2>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg mb-4">
          <p className="text-gray-700 mb-2">
            You've booked <span className="font-bold text-blue-600">{totalRooms}</span> room{totalRooms > 1 ? "s" : ""} for{" "}
            <span className="font-bold text-green-600">{totalNights}</span> night{totalNights > 1 ? "s" : ""}.
          </p>
        </div>
        <p className="text-gray-600 mb-6">
          Thank you for your booking. A confirmation has been sent to your email.
        </p>
        <button
          onClick={onClose}
          className="bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-lg hover:scale-105"
        >
          Continue Shopping
        </button>
      </motion.div>
    </motion.div>
  );
};

export const RoomsServices = () => {
  const [showAll, setShowAll] = useState(false);
  const [rooms, setRooms] = useState(initialRooms);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleViewMore = () => {
    if (showAll) {
      setRooms(initialRooms);
    } else {
      setRooms([...initialRooms, ...additionalRooms]);
    }
    setShowAll(!showAll);
  };

  const handleViewDetail = (room) => {
    setSelectedRoom(room);
    setShowDetailModal(true);
  };

  const handleAddToCart = (room) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.id === room.id && item.nights === room.nights
    );

    if (existingIndex >= 0) {
      const updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += room.quantity || 1;
      updatedCart[existingIndex].totalPrice =
        updatedCart[existingIndex].price *
        updatedCart[existingIndex].nights *
        updatedCart[existingIndex].quantity;
      setCartItems(updatedCart);
      
      toast.success("Cart updated successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      setCartItems((prev) => [
        ...prev,
        {
          ...room,
          quantity: room.quantity || 1,
          nights: room.nights || 1,
          totalPrice: room.price * (room.nights || 1) * (room.quantity || 1),
        },
      ]);
      
      toast.success("Room added to cart!", {
        position: "top-right",
        autoClose: 3000,
      });
    }

    setShowDetailModal(false);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    toast.info("Item removed from cart", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleProceedToPayment = () => {
    setShowCartModal(false);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    setShowSuccessModal(true);
    toast.success("Payment completed successfully!", {
      position: "top-right",
      autoClose: 5000,
    });
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setCartItems([]);
  };

  const cartTotal =
    cartItems.reduce((sum, item) => sum + item.totalPrice, 0) * 1.1;

  const cartItemCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="py-12 w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white mx-auto min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h6 className="text-blue-300 uppercase font-semibold tracking-wider text-sm">
            Luxury Accommodations
          </h6>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Explore Our <span className="text-blue-400">Premium Rooms</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our carefully curated selection of rooms designed for your ultimate comfort and relaxation
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-6 px-4">
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

        {cartItemCount > 0 && (
          <div className="fixed bottom-6 right-6 z-40">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCartModal(true)}
              className="bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-full shadow-2xl flex items-center gap-2 transition-all"
            >
              <svg
                className="w-5 h-5 text-white"
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
              <span className="font-bold">{cartItemCount}</span>
              <span>{cartItemCount === 1 ? "Item" : "Items"}</span>
              <span className="bg-white text-blue-600 px-2 py-1 rounded-full text-sm font-bold ml-2">
                ${cartTotal.toFixed(0)}
              </span>
            </motion.button>
          </div>
        )}

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-center mt-8"
        >
          <button
            onClick={handleViewMore}
            className="bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-lg"
          >
            {showAll ? "Show Less" : "View More Rooms"}
          </button>
        </motion.div>

        <AnimatePresence>
          {showDetailModal && selectedRoom && (
            <RoomDetailModal
              room={selectedRoom}
              onClose={() => setShowDetailModal(false)}
              onAddToCart={handleAddToCart}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showCartModal && (
            <CartModal
              cartItems={cartItems}
              onClose={() => setShowCartModal(false)}
              onRemoveItem={handleRemoveFromCart}
              onProceedToPayment={handleProceedToPayment}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showPaymentModal && (
            <PaymentModal
              cartTotal={cartTotal}
              cartItems={cartItems}
              onClose={() => setShowPaymentModal(false)}
              onPaymentSuccess={handlePaymentSuccess}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showSuccessModal && (
            <SuccessModal
              cartItems={cartItems}
              onClose={handleCloseSuccessModal}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
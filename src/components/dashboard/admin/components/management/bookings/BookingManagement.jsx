/* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { motion, AnimatePresence } from 'framer-motion';

// // ==================== ICONS ====================
// const SuccessIcon = () => (
//   <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <motion.circle
//       initial={{ pathLength: 0 }}
//       animate={{ pathLength: 1 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       cx="12"
//       cy="12"
//       r="10"
//       stroke="#10B981"
//       strokeWidth="2"
//       strokeLinecap="round"
//     />
//     <motion.path
//       initial={{ pathLength: 0, opacity: 0 }}
//       animate={{ pathLength: 1, opacity: 1 }}
//       transition={{ duration: 0.3, delay: 0.3 }}
//       d="M8 12L11 15L16 9"
//       stroke="#10B981"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const ConfirmIcon = () => (
//   <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <motion.circle
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       transition={{ duration: 0.3, type: "spring" }}
//       cx="12"
//       cy="12"
//       r="10"
//       stroke="#F59E0B"
//       strokeWidth="2"
//     />
//     <motion.path
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.2 }}
//       d="M12 8V12M12 16H12.01"
//       stroke="#F59E0B"
//       strokeWidth="2"
//       strokeLinecap="round"
//     />
//   </svg>
// );

// const FailIcon = () => (
//   <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <motion.circle
//       initial={{ rotate: 0 }}
//       animate={{ rotate: 360 }}
//       transition={{ duration: 0.5 }}
//       cx="12"
//       cy="12"
//       r="10"
//       stroke="#EF4444"
//       strokeWidth="2"
//     />
//     <motion.path
//       initial={{ pathLength: 0 }}
//       animate={{ pathLength: 1 }}
//       transition={{ duration: 0.3 }}
//       d="M15 9L9 15M9 9L15 15"
//       stroke="#EF4444"
//       strokeWidth="2"
//       strokeLinecap="round"
//     />
//   </svg>
// );

// const EditIcon = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//   </svg>
// );

// const DeleteIcon = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//   </svg>
// );

// const ViewIcon = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//   </svg>
// );

// const CloseIcon = () => (
//   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//   </svg>
// );

// // ==================== MODAL COMPONENTS ====================

// // Success Modal
// export const SuccessModal = ({ isOpen, onClose, title, message }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.8, y: 50 }}
//             animate={{ scale: 1, y: 0 }}
//             exit={{ scale: 0.8, y: 50 }}
//             transition={{ type: "spring", damping: 25 }}
//             className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="p-8 text-center">
//               <div className="flex justify-center mb-4">
//                 <SuccessIcon />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">{title || "Success!"}</h3>
//               <p className="text-gray-600 mb-6">{message || "Operation completed successfully"}</p>
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={onClose}
//                 className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
//               >
//                 Done
//               </motion.button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// // Confirm Modal
// export const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message, confirmText, cancelText }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.8, y: 50 }}
//             animate={{ scale: 1, y: 0 }}
//             exit={{ scale: 0.8, y: 50 }}
//             transition={{ type: "spring", damping: 25 }}
//             className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="p-8 text-center">
//               <div className="flex justify-center mb-4">
//                 <ConfirmIcon />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">{title || "Confirm Action"}</h3>
//               <p className="text-gray-600 mb-6">{message || "Are you sure you want to proceed?"}</p>
//               <div className="flex gap-3">
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={onClose}
//                   className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors font-medium"
//                 >
//                   {cancelText || "Cancel"}
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => {
//                     onConfirm();
//                     onClose();
//                   }}
//                   className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
//                 >
//                   {confirmText || "Confirm"}
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// // Fail Modal
// export const FailModal = ({ isOpen, onClose, title, message, error }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.8, y: 50 }}
//             animate={{ scale: 1, y: 0 }}
//             exit={{ scale: 0.8, y: 50 }}
//             transition={{ type: "spring", damping: 25 }}
//             className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="p-8 text-center">
//               <div className="flex justify-center mb-4">
//                 <FailIcon />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">{title || "Oops! Something went wrong"}</h3>
//               <p className="text-gray-600 mb-4">{message || "Failed to complete the operation"}</p>
//               {error && (
//                 <div className="bg-red-50 rounded-lg p-3 mb-6">
//                   <p className="text-sm text-red-600 break-words">{error}</p>
//                 </div>
//               )}
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={onClose}
//                 className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
//               >
//                 Try Again
//               </motion.button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// // View Booking Modal
// export const ViewBookingModal = ({ isOpen, onClose, booking }) => {
//   if (!booking) return null;

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.8, y: 50 }}
//             animate={{ scale: 1, y: 0 }}
//             exit={{ scale: 0.8, y: 50 }}
//             transition={{ type: "spring", damping: 25 }}
//             className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-xl font-bold text-white">Booking Details</h2>
//                 <motion.button
//                   whileHover={{ scale: 1.1, rotate: 90 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={onClose}
//                   className="p-1 hover:bg-white/20 rounded-full transition-colors"
//                 >
//                   <CloseIcon />
//                 </motion.button>
//               </div>
//             </div>
//             <div className="p-6 space-y-4">
//               <div className="flex items-center space-x-4 pb-4 border-b">
//                 <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
//                   <span className="text-2xl text-blue-600 font-bold">
//                     {booking.name?.charAt(0).toUpperCase() || 'G'}
//                   </span>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900">{booking.name || 'Guest'}</h3>
//                   <p className="text-gray-600">{booking.email || 'No email provided'}</p>
//                   <p className="text-sm text-gray-500">{booking.phone || 'No phone'}</p>
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <p className="text-sm text-gray-500">Check-In Date</p>
//                   <p className="font-medium text-gray-900">{new Date(booking.checkInDate).toLocaleDateString()}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Check-Out Date</p>
//                   <p className="font-medium text-gray-900">{new Date(booking.checkOutDate).toLocaleDateString()}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Room Type</p>
//                   <p className="font-medium text-gray-900 capitalize">{booking.roomType || 'Unknown'}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Status</p>
//                   <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full capitalize ${
//                     booking.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
//                     booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
//                     booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
//                     'bg-gray-100 text-gray-800'
//                   }`}>
//                     {booking.status || 'Unknown'}
//                   </span>
//                 </div>
//                 <div className="col-span-2">
//                   <p className="text-sm text-gray-500">Special Requests</p>
//                   <p className="text-gray-900">{booking.specialRequests || 'No special requests'}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="p-6 bg-gray-50 border-t">
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={onClose}
//                 className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold"
//               >
//                 Close
//               </motion.button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// // ==================== MAIN LATEST BOOKINGS COMPONENT ====================
// export const BookingManagements = () => {
//   const [latestBookings, setLatestBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // Modal states
//   const [successModal, setSuccessModal] = useState({ isOpen: false, title: '', message: '' });
//   const [confirmModal, setConfirmModal] = useState({ isOpen: false, title: '', message: '', onConfirm: null });
//   const [failModal, setFailModal] = useState({ isOpen: false, title: '', message: '', error: '' });
//   const [viewModal, setViewModal] = useState({ isOpen: false, booking: null });
  
//   const API_URL = 'https://hotel-nodejs-oa32.onrender.com/84383/92823';

//   const fetchAllBookings = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(API_URL);
      
//       // Handle different response structures
//       const allBookings = response.data?.bookings || 
//                          response.data?.data?.bookings || 
//                          response.data || 
//                          [];
      
//       // Sort bookings by date (newest first)
//       const sortedBookings = [...allBookings].sort((a, b) => {
//         const dateA = a.createdAt ? new Date(a.createdAt) : new Date(a.checkInDate);
//         const dateB = b.createdAt ? new Date(b.createdAt) : new Date(b.checkInDate);
//         return dateB - dateA;
//       });
      
//       // Get first 8 bookings
//       setLatestBookings(sortedBookings.slice(0, 8));
//       setError(null);
//     } catch (err) {
//       console.error('Error fetching bookings:', err);
//       setError(err.response?.data?.message || 'Failed to load latest bookings');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllBookings();
//   }, []);

//   // CRUD Operations
//   const handleView = (booking) => {
//     setViewModal({ isOpen: true, booking });
//   };

//   const handleEdit = (booking) => {
//     // This would open your edit modal
//     setSuccessModal({
//       isOpen: true,
//       title: "Coming Soon",
//       message: "Edit functionality will be implemented here"
//     });
//   };

//   const handleDelete = (booking) => {
//     setConfirmModal({
//       isOpen: true,
//       title: "Delete Booking",
//       message: `Are you sure you want to delete booking for ${booking.name || 'this guest'}? This action cannot be undone.`,
//       onConfirm: async () => {
//         try {
//           // Simulate delete API call
//           await new Promise(resolve => setTimeout(resolve, 1000));
          
//           // Remove from local state
//           setLatestBookings(prev => prev.filter(b => b._id !== booking._id));
          
//           setSuccessModal({
//             isOpen: true,
//             title: "Booking Deleted",
//             message: `Booking for ${booking.name || 'guest'} has been successfully deleted.`
//           });
//         } catch (error) {
//           setFailModal({
//             isOpen: true,
//             title: "Delete Failed",
//             message: "Unable to delete the booking. Please try again.",
//             error: error.message
//           });
//         }
//       }
//     });
//   };

//   const handleUpdateStatus = (booking, newStatus) => {
//     setConfirmModal({
//       isOpen: true,
//       title: "Update Status",
//       message: `Are you sure you want to change status to "${newStatus}" for ${booking.name || 'this guest'}?`,
//       onConfirm: async () => {
//         try {
//           // Simulate status update
//           await new Promise(resolve => setTimeout(resolve, 1000));
          
//           // Update local state
//           setLatestBookings(prev => 
//             prev.map(b => 
//               b._id === booking._id ? { ...b, status: newStatus } : b
//             )
//           );
          
//           setSuccessModal({
//             isOpen: true,
//             title: "Status Updated",
//             message: `Booking status has been updated to ${newStatus}.`
//           });
//         } catch (error) {
//           setFailModal({
//             isOpen: true,
//             title: "Update Failed",
//             message: "Unable to update status. Please try again.",
//             error: error.message
//           });
//         }
//       }
//     });
//   };

//   // Format date to readable string
//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'short', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   // Capitalize first letter of status
//   const capitalize = (str) => {
//     return str ? str.charAt(0).toUpperCase() + str.slice(1) : 'Unknown';
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <div className="bg-white rounded-lg shadow p-8">
//         <div className="flex flex-col items-center justify-center h-64">
//           <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
//           <p className="text-gray-600">Loading latest bookings...</p>
//         </div>
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className="bg-white rounded-lg shadow p-8">
//         <div className="bg-red-50 rounded-xl p-6 text-center">
//           <div className="flex justify-center mb-4">
//             <FailIcon />
//           </div>
//           <h3 className="text-xl font-bold text-gray-900 mb-2">Failed to Load Bookings</h3>
//           <p className="text-red-600 mb-4">{error}</p>
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={fetchAllBookings}
//             className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
//           >
//             Try Again
//           </motion.button>
//         </div>
//       </div>
//     );
//   }

//   // Empty state
//   if (latestBookings.length === 0) {
//     return (
//       <div className="bg-white rounded-lg shadow p-8">
//         <div className="text-center">
//           <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//           </svg>
//           <h3 className="mt-2 text-sm font-medium text-gray-900">No bookings</h3>
//           <p className="mt-1 text-sm text-gray-500">No recent bookings found.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
//         <div className="px-6 py-5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <h3 className="text-lg font-bold text-gray-900">Latest Bookings</h3>
//               <p className="mt-1 text-sm text-gray-600">Most recent 8 bookings in the system</p>
//             </div>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={fetchAllBookings}
//               className="px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center space-x-2"
//             >
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//               </svg>
//               <span>Refresh</span>
//             </motion.button>
//           </div>
//         </div>
        
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Guest</th>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Check-In</th>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Check-Out</th>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Room Type</th>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
//                 <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {latestBookings.map((booking, index) => (
//                 <motion.tr
//                   key={booking._id || index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                   className="hover:bg-gray-50 transition-colors group"
//                 >
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-md">
//                         <span className="text-white font-bold text-sm">
//                           {booking.name?.charAt(0).toUpperCase() || 'G'}
//                         </span>
//                       </div>
//                       <div className="ml-4">
//                         <div className="text-sm font-semibold text-gray-900">
//                           {booking.name || 'Anonymous Guest'}
//                         </div>
//                         <div className="text-xs text-gray-500">
//                           {booking.email || 'No email'}
//                         </div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900 font-medium">
//                       {formatDate(booking.checkInDate)}
//                     </div>
//                     <div className="text-xs text-gray-500">
//                       Check-in
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900 font-medium">
//                       {formatDate(booking.checkOutDate)}
//                     </div>
//                     <div className="text-xs text-gray-500">
//                       Check-out
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 capitalize">
//                       {booking.roomType || 'standard'}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <select
//                       value={booking.status || 'pending'}
//                       onChange={(e) => handleUpdateStatus(booking, e.target.value)}
//                       className={`text-xs font-semibold rounded-full px-3 py-1 border-0 cursor-pointer focus:ring-2 focus:ring-offset-2 ${
//                         booking.status === 'confirmed' ? 'bg-blue-100 text-blue-800 focus:ring-blue-500' :
//                         booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800 focus:ring-yellow-500' :
//                         booking.status === 'cancelled' ? 'bg-red-100 text-red-800 focus:ring-red-500' :
//                         'bg-gray-100 text-gray-800 focus:ring-gray-500'
//                       }`}
//                     >
//                       <option value="pending">Pending</option>
//                       <option value="confirmed">Confirmed</option>
//                       <option value="cancelled">Cancelled</option>
//                       <option value="completed">Completed</option>
//                     </select>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                     <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         onClick={() => handleView(booking)}
//                         className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
//                         title="View Details"
//                       >
//                         <ViewIcon />
//                       </motion.button>
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         onClick={() => handleEdit(booking)}
//                         className="p-2 bg-amber-100 text-amber-600 rounded-lg hover:bg-amber-200 transition-colors"
//                         title="Edit Booking"
//                       >
//                         <EditIcon />
//                       </motion.button>
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         onClick={() => handleDelete(booking)}
//                         className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
//                         title="Delete Booking"
//                       >
//                         <DeleteIcon />
//                       </motion.button>
//                     </div>
//                   </td>
//                 </motion.tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
        
//         <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
//           <div className="flex items-center justify-between text-sm text-gray-600">
//             <span>Showing {latestBookings.length} of {latestBookings.length} bookings</span>
//             <span className="font-medium">Last updated: {new Date().toLocaleTimeString()}</span>
//           </div>
//         </div>
//       </div>

//       {/* Modals */}
//       <SuccessModal
//         isOpen={successModal.isOpen}
//         onClose={() => setSuccessModal({ isOpen: false, title: '', message: '' })}
//         title={successModal.title}
//         message={successModal.message}
//       />

//       <ConfirmModal
//         isOpen={confirmModal.isOpen}
//         onClose={() => setConfirmModal({ isOpen: false, title: '', message: '', onConfirm: null })}
//         onConfirm={confirmModal.onConfirm}
//         title={confirmModal.title}
//         message={confirmModal.message}
//       />

//       <FailModal
//         isOpen={failModal.isOpen}
//         onClose={() => setFailModal({ isOpen: false, title: '', message: '', error: '' })}
//         title={failModal.title}
//         message={failModal.message}
//         error={failModal.error}
//       />

//       <ViewBookingModal
//         isOpen={viewModal.isOpen}
//         onClose={() => setViewModal({ isOpen: false, booking: null })}
//         booking={viewModal.booking}
//       />
//     </>
//   );
// };



















import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

// ==================== ICONS ====================
const SuccessIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.circle
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      cx="12"
      cy="12"
      r="10"
      stroke="#10B981"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <motion.path
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      d="M8 12L11 15L16 9"
      stroke="#10B981"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ConfirmIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.circle
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, type: "spring" }}
      cx="12"
      cy="12"
      r="10"
      stroke="#F59E0B"
      strokeWidth="2"
    />
    <motion.path
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      d="M12 8V12M12 16H12.01"
      stroke="#F59E0B"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const FailIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.circle
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
      cx="12"
      cy="12"
      r="10"
      stroke="#EF4444"
      strokeWidth="2"
    />
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.3 }}
      d="M15 9L9 15M9 9L15 15"
      stroke="#EF4444"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const EditIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const DeleteIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const ViewIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const AddIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

// ==================== MODAL COMPONENTS ====================

// Success Modal
export const SuccessModal = ({ isOpen, onClose, title, message }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <SuccessIcon />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{title || "Success!"}</h3>
              <p className="text-gray-600 mb-6">{message || "Operation completed successfully"}</p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Done
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Confirm Modal
export const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message, confirmText, cancelText }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <ConfirmIcon />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{title || "Confirm Action"}</h3>
              <p className="text-gray-600 mb-6">{message || "Are you sure you want to proceed?"}</p>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors font-medium"
                >
                  {cancelText || "Cancel"}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onConfirm();
                    onClose();
                  }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  {confirmText || "Confirm"}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Fail Modal
export const FailModal = ({ isOpen, onClose, title, message, error }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <FailIcon />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{title || "Oops! Something went wrong"}</h3>
              <p className="text-gray-600 mb-4">{message || "Failed to complete the operation"}</p>
              {error && (
                <div className="bg-red-50 rounded-lg p-3 mb-6">
                  <p className="text-sm text-red-600 break-words">{error}</p>
                </div>
              )}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Try Again
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// View Booking Modal
export const ViewBookingModal = ({ isOpen, onClose, booking }) => {
  if (!booking) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Booking Details</h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <CloseIcon />
                </motion.button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-4 pb-4 border-b">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-2xl text-blue-600 font-bold">
                    {booking.name?.charAt(0).toUpperCase() || 'G'}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{booking.name || 'Guest'}</h3>
                  <p className="text-gray-600">{booking.email || 'No email provided'}</p>
                  <p className="text-sm text-gray-500">{booking.phone || 'No phone'}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Check-In Date</p>
                  <p className="font-medium text-gray-900">{new Date(booking.checkInDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Check-Out Date</p>
                  <p className="font-medium text-gray-900">{new Date(booking.checkOutDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Room Type</p>
                  <p className="font-medium text-gray-900 capitalize">{booking.roomType || 'Unknown'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Guests</p>
                  <p className="font-medium text-gray-900">
                    {booking.adults || 0} Adults, {booking.children || 0} Children
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full capitalize ${
                    booking.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                    booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                    booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {booking.status || 'pending'}
                  </span>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Booking ID</p>
                  <p className="text-gray-900 text-sm font-mono">{booking._id || 'N/A'}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Special Requests</p>
                  <p className="text-gray-900">{booking.specialRequests || 'No special requests'}</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50 border-t">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Add/Edit Booking Modal
export const BookingFormModal = ({ isOpen, onClose, onSubmit, initialData, mode = 'add' }) => {
  const [formData, setFormData] = useState({
    checkInDate: "",
    checkOutDate: "",
    adults: "",
    name: "",
    email: "",
    children: "",
    roomType: "",
    specialRequests: "",
    status: "pending"
  });
  const [errors, setErrors] = useState({});

  const roomTypes = [
    { value: "standard", label: "Standard Room" },
    { value: "deluxe", label: "Deluxe Room" },
    { value: "suite", label: "Suite" },
    { value: "executive", label: "Executive Suite" },
    { value: "presidential", label: "Presidential Suite" },
  ];

  const statusOptions = [
    { value: "pending", label: "Pending" },
    { value: "confirmed", label: "Confirmed" },
    { value: "cancelled", label: "Cancelled" },
    { value: "completed", label: "Completed" },
  ];

  useEffect(() => {
    if (initialData && mode === 'edit') {
      setFormData({
        checkInDate: initialData.checkInDate?.split('T')[0] || "",
        checkOutDate: initialData.checkOutDate?.split('T')[0] || "",
        adults: initialData.adults || "",
        name: initialData.name || "",
        email: initialData.email || "",
        children: initialData.children || "",
        roomType: initialData.roomType || "",
        specialRequests: initialData.specialRequests || "",
        status: initialData.status || "pending"
      });
    } else {
      setFormData({
        checkInDate: "",
        checkOutDate: "",
        adults: "",
        name: "",
        email: "",
        children: "",
        roomType: "",
        specialRequests: "",
        status: "pending"
      });
    }
    setErrors({});
  }, [initialData, mode, isOpen]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.checkInDate) {
      newErrors.checkInDate = "Check-in date is required";
    }

    if (!formData.checkOutDate) {
      newErrors.checkOutDate = "Check-out date is required";
    } else if (
      formData.checkInDate &&
      new Date(formData.checkOutDate) < new Date(formData.checkInDate)
    ) {
      newErrors.checkOutDate = "Check-out must be after check-in";
    }

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.adults || formData.adults < 1) {
      newErrors.adults = "At least one adult is required";
    }

    if (!formData.roomType) {
      newErrors.roomType = "Room type is required";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 sticky top-0">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">
                  {mode === 'add' ? 'Add New Booking' : 'Edit Booking'}
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-1 bg-gradient-to-t from-red-500 to-red-700 text-white rounded-full transition-colors"
                >
                  <CloseIcon />
                </motion.button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 text-black">
              <div className="space-y-4">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Check-in Date *
                    </label>
                    <input
                      type="date"
                      name="checkInDate"
                      value={formData.checkInDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.checkInDate ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.checkInDate && <p className="mt-1 text-sm text-red-500">{errors.checkInDate}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Check-out Date *
                    </label>
                    <input
                      type="date"
                      name="checkOutDate"
                      value={formData.checkOutDate}
                      onChange={handleChange}
                      min={formData.checkInDate || new Date().toISOString().split("T")[0]}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.checkOutDate ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.checkOutDate && <p className="mt-1 text-sm text-red-500">{errors.checkOutDate}</p>}
                  </div>
                </div>

                {/* Adults and Children */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Adults *
                    </label>
                    <select
                      name="adults"
                      value={formData.adults}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.adults ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select adults</option>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={`adult-${num}`} value={num}>
                          {num} {num === 1 ? "Adult" : "Adults"}
                        </option>
                      ))}
                    </select>
                    {errors.adults && <p className="mt-1 text-sm text-red-500">{errors.adults}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Children
                    </label>
                    <select
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select children</option>
                      {[0, 1, 2, 3, 4].map((num) => (
                        <option key={`child-${num}`} value={num}>
                          {num} {num === 1 ? "Child" : "Children"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Room Type and Status */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Room Type *
                    </label>
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.roomType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select room type</option>
                      {roomTypes.map((room) => (
                        <option key={room.value} value={room.value}>
                          {room.label}
                        </option>
                      ))}
                    </select>
                    {errors.roomType && <p className="mt-1 text-sm text-red-500">{errors.roomType}</p>}
                  </div>

                  {mode === 'edit' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Status
                      </label>
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {statusOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any special requests or requirements..."
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border-2 bg-gradient-to-t from-red-400 to-red-600 text-white rounded-xl transition-colors font-medium"
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  {mode === 'add' ? 'Add Booking' : 'Update Booking'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ==================== MAIN BOOKING MANAGEMENT COMPONENT ====================
export const BookingManagements = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modal states
  const [successModal, setSuccessModal] = useState({ isOpen: false, title: '', message: '' });
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, title: '', message: '', onConfirm: null });
  const [failModal, setFailModal] = useState({ isOpen: false, title: '', message: '', error: '' });
  const [viewModal, setViewModal] = useState({ isOpen: false, booking: null });
  const [formModal, setFormModal] = useState({ isOpen: false, mode: 'add', booking: null });
  
  const API_URL = 'https://hotel-nodejs-oa32.onrender.com/84383/92823';

  const fetchAllBookings = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      
      // Handle different response structures
      const allBookings = response.data?.bookings || 
                         response.data?.data?.bookings || 
                         (Array.isArray(response.data) ? response.data : []) ||
                         [];
      
      // Sort bookings by date (newest first)
      const sortedBookings = [...allBookings].sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt) : new Date(a.checkInDate);
        const dateB = b.createdAt ? new Date(b.createdAt) : new Date(b.checkInDate);
        return dateB - dateA;
      });
      
      setBookings(sortedBookings);
      setError(null);
    } catch (err) {
      console.error('Error fetching bookings:', err);
      setError(err.response?.data?.message || 'Failed to load bookings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllBookings();
  }, []);

  // Filter bookings based on status and search term
  const filteredBookings = bookings.filter(booking => {
    const matchesFilter = filter === 'all' || booking.status === filter;
    const matchesSearch = 
      booking.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking._id?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // CRUD Operations
  const handleView = (booking) => {
    setViewModal({ isOpen: true, booking });
  };

  const handleAdd = () => {
    setFormModal({ isOpen: true, mode: 'add', booking: null });
  };

  const handleEdit = (booking) => {
    setFormModal({ isOpen: true, mode: 'edit', booking });
  };

  const handleDelete = (booking) => {
    setConfirmModal({
      isOpen: true,
      title: "Delete Booking",
      message: `Are you sure you want to delete booking for ${booking.name || 'this guest'}? This action cannot be undone.`,
      onConfirm: async () => {
        try {
          // Simulate delete API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Remove from local state
          setBookings(prev => prev.filter(b => b._id !== booking._id));
          
          setSuccessModal({
            isOpen: true,
            title: "Booking Deleted",
            message: `Booking for ${booking.name || 'guest'} has been successfully deleted.`
          });
        } catch (error) {
          setFailModal({
            isOpen: true,
            title: "Delete Failed",
            message: "Unable to delete the booking. Please try again.",
            error: error.message
          });
        }
      }
    });
  };

  const handleSubmitBooking = async (formData) => {
    try {
      setLoading(true);
      
      if (formModal.mode === 'add') {
        // Create new booking
        const response = await axios.post(API_URL, formData);
        
        if (response.data && response.data.success) {
          // Add to local state
          const newBooking = {
            ...formData,
            _id: response.data.bookingId || Date.now().toString(),
            createdAt: new Date().toISOString()
          };
          setBookings(prev => [newBooking, ...prev]);
          
          setSuccessModal({
            isOpen: true,
            title: "Booking Created",
            message: `Booking for ${formData.name} has been successfully created.`
          });
          setFormModal({ isOpen: false, mode: 'add', booking: null });
        } else {
          throw new Error('Failed to create booking');
        }
      } else {
        // Update existing booking
        // Simulate update API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Update local state
        setBookings(prev => 
          prev.map(b => 
            b._id === formModal.booking._id ? { ...b, ...formData } : b
          )
        );
        
        setSuccessModal({
          isOpen: true,
          title: "Booking Updated",
          message: `Booking for ${formData.name} has been successfully updated.`
        });
        setFormModal({ isOpen: false, mode: 'edit', booking: null });
      }
    } catch (error) {
      setFailModal({
        isOpen: true,
        title: formModal.mode === 'add' ? "Creation Failed" : "Update Failed",
        message: `Unable to ${formModal.mode === 'add' ? 'create' : 'update'} the booking. Please try again.`,
        error: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = (booking, newStatus) => {
    setConfirmModal({
      isOpen: true,
      title: "Update Status",
      message: `Are you sure you want to change status to "${newStatus}" for ${booking.name || 'this guest'}?`,
      onConfirm: async () => {
        try {
          // Simulate status update
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Update local state
          setBookings(prev => 
            prev.map(b => 
              b._id === booking._id ? { ...b, status: newStatus } : b
            )
          );
          
          setSuccessModal({
            isOpen: true,
            title: "Status Updated",
            message: `Booking status has been updated to ${newStatus}.`
          });
        } catch (error) {
          setFailModal({
            isOpen: true,
            title: "Update Failed",
            message: "Unable to update status. Please try again.",
            error: error.message
          });
        }
      }
    });
  };

  // Format date to readable string
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get status color
  const getStatusColor = (status) => {
    switch(status) {
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Loading state
  if (loading && bookings.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-8">
        <div className="flex flex-col items-center justify-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
          <p className="text-gray-600">Loading bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-50 text-black py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Booking Management</h1>
                <p className="text-gray-300">Manage all your hotel bookings in one place</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAdd}
                className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
              >
                <AddIcon />
                <span>Add New Booking</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Filters and Search */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex space-x-2">
                {['all', 'pending', 'confirmed', 'cancelled', 'completed'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilter(status)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                      filter === status
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, email, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Bookings Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Guest</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Dates</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Room Type</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Guests</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredBookings.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                        No bookings found
                      </td>
                    </tr>
                  ) : (
                    filteredBookings.map((booking, index) => (
                      <motion.tr
                        key={booking._id || index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-gray-50 transition-colors group"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-sm">
                                {booking.name?.charAt(0).toUpperCase() || 'G'}
                              </span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-semibold text-gray-900">
                                {booking.name || 'Anonymous Guest'}
                              </div>
                              <div className="text-xs text-gray-500">
                                {booking.email || 'No email'}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 font-medium">
                            {formatDate(booking.checkInDate)} - {formatDate(booking.checkOutDate)}
                          </div>
                          <div className="text-xs text-gray-500">
                            {Math.ceil((new Date(booking.checkOutDate) - new Date(booking.checkInDate)) / (1000 * 60 * 60 * 24))} nights
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 capitalize">
                            {booking.roomType || 'standard'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {booking.adults || 0} Adults, {booking.children || 0} Children
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={booking.status || 'pending'}
                            onChange={(e) => handleUpdateStatus(booking, e.target.value)}
                            className={`text-xs font-semibold rounded-full px-3 py-1 border-0 cursor-pointer focus:ring-2 focus:ring-offset-2 ${getStatusColor(booking.status)}`}
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="cancelled">Cancelled</option>
                            <option value="completed">Completed</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleView(booking)}
                              className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                              title="View Details"
                            >
                              <ViewIcon />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleEdit(booking)}
                              className="p-2 bg-amber-100 text-amber-600 rounded-lg hover:bg-amber-200 transition-colors"
                              title="Edit Booking"
                            >
                              <EditIcon />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleDelete(booking)}
                              className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                              title="Delete Booking"
                            >
                              <DeleteIcon />
                            </motion.button>
                          </div>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Showing {filteredBookings.length} of {bookings.length} bookings</span>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={fetchAllBookings}
                  className="px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Refresh</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <SuccessModal
        isOpen={successModal.isOpen}
        onClose={() => setSuccessModal({ isOpen: false, title: '', message: '' })}
        title={successModal.title}
        message={successModal.message}
      />

      <ConfirmModal
        isOpen={confirmModal.isOpen}
        onClose={() => setConfirmModal({ isOpen: false, title: '', message: '', onConfirm: null })}
        onConfirm={confirmModal.onConfirm}
        title={confirmModal.title}
        message={confirmModal.message}
      />

      <FailModal
        isOpen={failModal.isOpen}
        onClose={() => setFailModal({ isOpen: false, title: '', message: '', error: '' })}
        title={failModal.title}
        message={failModal.message}
        error={failModal.error}
      />

      <ViewBookingModal
        isOpen={viewModal.isOpen}
        onClose={() => setViewModal({ isOpen: false, booking: null })}
        booking={viewModal.booking}
      />

      <BookingFormModal
        isOpen={formModal.isOpen}
        onClose={() => setFormModal({ isOpen: false, mode: 'add', booking: null })}
        onSubmit={handleSubmitBooking}
        initialData={formModal.booking}
        mode={formModal.mode}
      />
    </>
  );
};

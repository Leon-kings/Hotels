// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Search,
//   Close,
//   Edit,
//   Delete,
//   Save,
//   Cancel,
//   Person,
//   Email,
//   Phone,
//   Lock,
//   AdminPanelSettings,
//   CheckCircle,
//   Error,
//   Warning,
//   Refresh,
//   FilterList,
//   Sort,
//   Visibility,
//   VisibilityOff,
//   ViewList,
//   ViewModule,
//   GridView,
//   Dashboard,
//   MoreVert,
//   ArrowUpward,
//   ArrowDownward,
//   CloudDownload,
//   Print,
//   Share,
//   Star,
//   StarBorder,
//   Verified,
//   AccessTime,
//   LocationOn,
//   Business,
//   School,
//   Work,
//   CalendarToday,
// } from "@mui/icons-material";
// import { motion, AnimatePresence } from "framer-motion";

// // Loading Spinner Component
// const LoadingSpinner = () => (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//   >
//     <motion.div
//       animate={{ rotate: 360 }}
//       transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//       className="w-20 h-20 border-4 border-t-4 border-t-blue-600 border-blue-200 rounded-full"
//     />
//   </motion.div>
// );

// // Success Modal Component
// const SuccessModal = ({ isOpen, message, onClose }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.5, y: -50 }}
//             animate={{ scale: 1, y: 0 }}
//             exit={{ scale: 0.5, y: 50 }}
//             transition={{ type: "spring", damping: 25, stiffness: 300 }}
//             className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="p-6 text-center">
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.2, type: "spring", damping: 10 }}
//                 className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4"
//               >
//                 <CheckCircle className="w-12 h-12 text-green-600" />
//               </motion.div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">Success!</h3>
//               <p className="text-gray-600 mb-6">{message}</p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={onClose}
//                 className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
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

// // Confirm Modal Component
// const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//           onClick={onCancel}
//         >
//           <motion.div
//             initial={{ scale: 0.5, rotateX: -90 }}
//             animate={{ scale: 1, rotateX: 0 }}
//             exit={{ scale: 0.5, rotateX: 90 }}
//             transition={{ type: "spring", damping: 20 }}
//             className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="p-6">
//               <motion.div
//                 initial={{ x: -50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.1 }}
//                 className="flex items-center mb-4"
//               >
//                 <Warning className="w-8 h-8 text-yellow-500 mr-3" />
//                 <h3 className="text-xl font-bold text-gray-800">{title || "Confirm Action"}</h3>
//               </motion.div>
//               <motion.p
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-gray-600 mb-6"
//               >
//                 {message}
//               </motion.p>
//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="flex gap-3"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={onConfirm}
//                   className="flex-1 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
//                 >
//                   Confirm
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={onCancel}
//                   className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all"
//                 >
//                   Cancel
//                 </motion.button>
//               </motion.div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// // Fail Modal Component
// const FailModal = ({ isOpen, message, onClose }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.5, y: 100 }}
//             animate={{ scale: 1, y: 0 }}
//             exit={{ scale: 0.5, y: -100 }}
//             transition={{ type: "spring", damping: 15 }}
//             className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="p-6 text-center">
//               <motion.div
//                 initial={{ rotate: 0 }}
//                 animate={{ rotate: [0, 10, -10, 10, 0] }}
//                 transition={{ delay: 0.2, duration: 0.5 }}
//                 className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4"
//               >
//                 <Error className="w-12 h-12 text-red-600" />
//               </motion.div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">Error!</h3>
//               <p className="text-gray-600 mb-6">{message}</p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={onClose}
//                 className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
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

// // Search Modal Component
// const SearchModal = ({ 
//   results, 
//   onClose, 
//   onDelete, 
//   onEdit, 
//   editingId,
//   formData,
//   errors,
//   handleInputChange,
//   handleUpdate,
//   cancelEditing,
//   viewMode,
//   setViewMode
// }) => {
//   const [selectedUser, setSelectedUser] = useState(null);
  
//   const handleDeleteClick = (user) => {
//     setSelectedUser(user);
//     // This will be handled by the parent component's confirm modal
//     onDelete(user._id);
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ scale: 0.8, y: 50 }}
//           animate={{ scale: 1, y: 0 }}
//           exit={{ scale: 0.8, y: 50 }}
//           transition={{ type: "spring", damping: 25 }}
//           className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="p-4 sm:p-6">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
//               <motion.h2 
//                 initial={{ x: -20, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//               >
//                 Search Results ({results.length})
//               </motion.h2>
//               <div className="flex items-center gap-2">
//                 {/* View Toggle for Search Results */}
//                 <div className="flex bg-gray-100 rounded-lg p-1">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setViewMode('grid')}
//                     className={`p-2 rounded-lg transition-all ${
//                       viewMode === 'grid' 
//                         ? 'bg-white text-blue-600 shadow-sm' 
//                         : 'text-gray-600 hover:text-gray-900'
//                     }`}
//                   >
//                     <GridView className="w-5 h-5" />
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setViewMode('list')}
//                     className={`p-2 rounded-lg transition-all ${
//                       viewMode === 'list' 
//                         ? 'bg-white text-blue-600 shadow-sm' 
//                         : 'text-gray-600 hover:text-gray-900'
//                     }`}
//                   >
//                     <ViewList className="w-5 h-5" />
//                   </motion.button>
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.1, rotate: 90 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={onClose}
//                   className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                 >
//                   <Close className="w-5 h-5 text-gray-600" />
//                 </motion.button>
//               </div>
//             </div>
            
//             {results.length > 0 ? (
//               viewMode === 'grid' ? (
//                 // Grid View for Search Results
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-[70vh] p-2">
//                   {results.map((user, index) => (
//                     <motion.div
//                       key={user._id}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: index * 0.05 }}
//                       whileHover={{ y: -5 }}
//                       className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all"
//                     >
//                       {editingId === user._id ? (
//                         // Edit Mode in Grid
//                         <div className="p-4 space-y-3">
//                           <div className="flex items-center space-x-3">
//                             <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
//                               <Person className="w-6 h-6 text-blue-600" />
//                             </div>
//                             <input
//                               type="text"
//                               name="fullname"
//                               value={formData.fullname}
//                               onChange={handleInputChange}
//                               className={`flex-1 border rounded-lg px-3 py-2 text-sm ${
//                                 errors.fullname ? "border-red-500" : "border-gray-300"
//                               }`}
//                               placeholder="Full Name"
//                             />
//                           </div>
//                           {errors.fullname && (
//                             <p className="text-xs text-red-600">{errors.fullname}</p>
//                           )}
                          
//                           <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             className={`w-full border rounded-lg px-3 py-2 text-sm ${
//                               errors.email ? "border-red-500" : "border-gray-300"
//                             }`}
//                             placeholder="Email"
//                           />
//                           {errors.email && (
//                             <p className="text-xs text-red-600">{errors.email}</p>
//                           )}
                          
//                           <input
//                             type="tel"
//                             name="phone"
//                             value={formData.phone}
//                             onChange={handleInputChange}
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
//                             placeholder="Phone"
//                           />
                          
//                           <select
//                             name="status"
//                             value={formData.status}
//                             onChange={handleInputChange}
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
//                           >
//                             <option value="user">User</option>
//                             <option value="admin">Admin</option>
//                           </select>
                          
//                           <div className="flex gap-2 pt-2">
//                             <motion.button
//                               whileHover={{ scale: 1.02 }}
//                               whileTap={{ scale: 0.98 }}
//                               onClick={() => handleUpdate(user._id)}
//                               className="flex-1 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg text-sm font-medium"
//                             >
//                               Save
//                             </motion.button>
//                             <motion.button
//                               whileHover={{ scale: 1.02 }}
//                               whileTap={{ scale: 0.98 }}
//                               onClick={cancelEditing}
//                               className="flex-1 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg text-sm font-medium"
//                             >
//                               Cancel
//                             </motion.button>
//                           </div>
//                         </div>
//                       ) : (
//                         // View Mode in Grid
//                         <>
//                           <div className="relative h-24 bg-gradient-to-r from-blue-500 to-purple-600 p-4">
//                             <div className="absolute -bottom-8 left-4">
//                               <div className="w-16 h-16 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center">
//                                 {user.status === "admin" ? (
//                                   <AdminPanelSettings className="w-8 h-8 text-purple-600" />
//                                 ) : (
//                                   <Person className="w-8 h-8 text-blue-600" />
//                                 )}
//                               </div>
//                             </div>
//                             <div className="absolute top-2 right-2">
//                               <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
//                                 user.status === "admin"
//                                   ? "bg-purple-200 text-purple-800"
//                                   : "bg-blue-200 text-blue-800"
//                               }`}>
//                                 {user.status === "admin" ? "Admin" : "User"}
//                               </span>
//                             </div>
//                           </div>
                          
//                           <div className="p-4 pt-10">
//                             <h3 className="font-semibold text-gray-900">{user.fullname}</h3>
//                             <p className="text-xs text-gray-500 mb-3">ID: {user._id.substring(0, 10)}...</p>
                            
//                             <div className="space-y-2 mb-4">
//                               <div className="flex items-center text-sm text-gray-600">
//                                 <Email className="w-4 h-4 mr-2 text-gray-400" />
//                                 <span className="truncate">{user.email}</span>
//                               </div>
//                               <div className="flex items-center text-sm text-gray-600">
//                                 <Phone className="w-4 h-4 mr-2 text-gray-400" />
//                                 <span>{user.phone}</span>
//                               </div>
//                             </div>
                            
//                             <div className="flex gap-2">
//                               <motion.button
//                                 whileHover={{ scale: 1.02 }}
//                                 whileTap={{ scale: 0.98 }}
//                                 onClick={() => onEdit(user)}
//                                 className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium"
//                               >
//                                 Edit
//                               </motion.button>
//                               <motion.button
//                                 whileHover={{ scale: 1.02 }}
//                                 whileTap={{ scale: 0.98 }}
//                                 onClick={() => handleDeleteClick(user)}
//                                 className="flex-1 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg text-sm font-medium"
//                               >
//                                 Delete
//                               </motion.button>
//                             </div>
//                           </div>
//                         </>
//                       )}
//                     </motion.div>
//                   ))}
//                 </div>
//               ) : (
//                 // List View for Search Results
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">User</th>
//                         <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Email</th>
//                         <th className="hidden md:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Phone</th>
//                         <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
//                         <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {results.map((user, index) => (
//                         <motion.tr
//                           key={user._id}
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           transition={{ delay: index * 0.05 }}
//                           whileHover={{ backgroundColor: "#f9fafb" }}
//                         >
//                           {editingId === user._id ? (
//                             <>
//                               <td className="px-4 sm:px-6 py-4">
//                                 <input
//                                   type="text"
//                                   name="fullname"
//                                   value={formData.fullname}
//                                   onChange={handleInputChange}
//                                   className={`border rounded px-3 py-2 w-full ${
//                                     errors.fullname ? "border-red-500" : "border-gray-300"
//                                   }`}
//                                 />
//                               </td>
//                               <td className="px-4 sm:px-6 py-4">
//                                 <input
//                                   type="email"
//                                   name="email"
//                                   value={formData.email}
//                                   onChange={handleInputChange}
//                                   className={`border rounded px-3 py-2 w-full ${
//                                     errors.email ? "border-red-500" : "border-gray-300"
//                                   }`}
//                                 />
//                               </td>
//                               <td className="hidden md:table-cell px-4 sm:px-6 py-4">
//                                 <input
//                                   type="tel"
//                                   name="phone"
//                                   value={formData.phone}
//                                   onChange={handleInputChange}
//                                   className="border rounded px-3 py-2 w-full"
//                                 />
//                               </td>
//                               <td className="px-4 sm:px-6 py-4">
//                                 <select
//                                   name="status"
//                                   value={formData.status}
//                                   onChange={handleInputChange}
//                                   className="border rounded px-3 py-2 w-full"
//                                 >
//                                   <option value="user">User</option>
//                                   <option value="admin">Admin</option>
//                                 </select>
//                               </td>
//                               <td className="px-4 sm:px-6 py-4">
//                                 <div className="flex gap-2">
//                                   <button
//                                     onClick={() => handleUpdate(user._id)}
//                                     className="p-2 bg-green-500 text-white rounded-lg"
//                                   >
//                                     <Save className="w-4 h-4" />
//                                   </button>
//                                   <button
//                                     onClick={cancelEditing}
//                                     className="p-2 bg-gray-500 text-white rounded-lg"
//                                   >
//                                     <Cancel className="w-4 h-4" />
//                                   </button>
//                                 </div>
//                               </td>
//                             </>
//                           ) : (
//                             <>
//                               <td className="px-4 sm:px-6 py-4">
//                                 <div className="flex items-center">
//                                   <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
//                                     {user.status === "admin" ? (
//                                       <AdminPanelSettings className="w-4 h-4 text-purple-600" />
//                                     ) : (
//                                       <Person className="w-4 h-4 text-blue-600" />
//                                     )}
//                                   </div>
//                                   <div className="ml-3">
//                                     <div className="text-sm font-medium text-gray-900">
//                                       {user.fullname}
//                                     </div>
//                                     <div className="text-xs text-gray-500">
//                                       ID: {user._id.substring(0, 8)}...
//                                     </div>
//                                   </div>
//                                 </div>
//                               </td>
//                               <td className="px-4 sm:px-6 py-4 text-sm text-gray-500">
//                                 {user.email}
//                               </td>
//                               <td className="hidden md:table-cell px-4 sm:px-6 py-4 text-sm text-gray-500">
//                                 {user.phone}
//                               </td>
//                               <td className="px-4 sm:px-6 py-4">
//                                 <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
//                                   user.status === "admin"
//                                     ? "bg-purple-100 text-purple-800"
//                                     : "bg-green-100 text-green-800"
//                                 }`}>
//                                   {user.status === "admin" ? "Admin" : "User"}
//                                 </span>
//                               </td>
//                               <td className="px-4 sm:px-6 py-4">
//                                 <div className="flex gap-2">
//                                   <button
//                                     onClick={() => onEdit(user)}
//                                     className="p-2 bg-blue-500 text-white rounded-lg"
//                                   >
//                                     <Edit className="w-4 h-4" />
//                                   </button>
//                                   <button
//                                     onClick={() => handleDeleteClick(user)}
//                                     className="p-2 bg-red-500 text-white rounded-lg"
//                                   >
//                                     <Delete className="w-4 h-4" />
//                                   </button>
//                                 </div>
//                               </td>
//                             </>
//                           )}
//                         </motion.tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )
//             ) : (
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="text-center py-12"
//               >
//                 <div className="text-6xl mb-4">🔍</div>
//                 <h3 className="text-xl font-semibold text-gray-700 mb-2">No Results Found</h3>
//                 <p className="text-gray-500">Try adjusting your search criteria</p>
//               </motion.div>
//             )}
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// // Enhanced User Search Component
// const UserSearch = ({ onSearch, searchTerm, setSearchTerm }) => {
//   const [showFilters, setShowFilters] = useState(false);

//   const handleSearch = () => {
//     if (searchTerm.trim()) {
//       onSearch(searchTerm);
//     }
//   };

//   return (
//     <motion.div 
//       initial={{ y: -20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       className="mb-6"
//     >
//       <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
//         <div className="relative flex-1">
//           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//             <Search className="text-gray-400 w-5 h-5" />
//           </div>
//           <input
//             type="text"
//             placeholder="Search by name, email or ID..."
//             className="block w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-black shadow-sm focus:outline-none focus:ring-2 text-black focus:border-transparent transition-all"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//           />
//         </div>
        
//         <div className="flex flex-wrap gap-2">
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={handleSearch}
//             className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
//           >
//             <Search className="w-5 h-5" />
//             <span className="hidden sm:inline">Search</span>
//           </motion.button>
          
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => {
//               setSearchTerm("");
//               onSearch("");
//             }}
//             className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
//           >
//             <Refresh className="w-5 h-5" />
//             <span className="hidden sm:inline">Clear</span>
//           </motion.button>
          
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => setShowFilters(!showFilters)}
//             className="px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
//           >
//             <FilterList className="w-5 h-5" />
//           </motion.button>
//         </div>
//       </div>

//       <AnimatePresence>
//         {showFilters && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="mt-4 p-4 bg-gray-50 rounded-xl overflow-hidden"
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
//                 <option>All Status</option>
//                 <option>Admin</option>
//                 <option>User</option>
//               </select>
//               <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
//                 <option>Sort by Name</option>
//                 <option>Sort by Email</option>
//                 <option>Sort by Date</option>
//               </select>
//               <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
//                 <option>10 per page</option>
//                 <option>20 per page</option>
//                 <option>50 per page</option>
//               </select>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// // Stats Card Component
// const StatsCard = ({ icon: Icon, title, value, color, trend }) => (
//   <motion.div
//     whileHover={{ y: -5, scale: 1.02 }}
//     className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
//   >
//     <div className="flex items-center justify-between mb-4">
//       <div className={`p-3 rounded-lg bg-gradient-to-br ${color}`}>
//         <Icon className="w-6 h-6 text-white" />
//       </div>
//       {trend && (
//         <span className={`text-sm font-medium ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
//           {trend > 0 ? '+' : ''}{trend}%
//         </span>
//       )}
//     </div>
//     <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
//     <p className="text-sm text-gray-600">{title}</p>
//   </motion.div>
// );

// // Main UserManagement Component
// export const UserManagement = () => {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [editingId, setEditingId] = useState(null);
//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     phone: "",
//     status: "",
//     password: ""
//   });
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [searchLoading, setSearchLoading] = useState(false);
//   const [searchResults, setSearchResults] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  
//   // Modal states
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showConfirmModal, setShowConfirmModal] = useState(false);
//   const [showFailModal, setShowFailModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");
//   const [confirmAction, setConfirmAction] = useState({
//     type: '',
//     title: '',
//     message: '',
//     onConfirm: null
//   });

//   const usersPerPage = 10;

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           "https://hotel-nodejs-oa32.onrender.com/37829/7892"
//         );
//         const usersData = response.data?.users || response.data?.data?.users || [];
//         setUsers(usersData);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//         setModalMessage("Failed to fetch users. Please try again.");
//         setShowFailModal(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleSearch = async (term) => {
//     if (!term) {
//       setSearchResults(null);
//       return;
//     }

//     try {
//       setSearchLoading(true);
      
//       // Try API search first
//       try {
//         const response = await axios.get(
//           `https://hotel-nodejs-oa32.onrender.com/37829/7892/term=${term}`
//         );
//         if (response.data.users && response.data.users.length > 0) {
//           setSearchResults(response.data.users);
//           setSearchLoading(false);
//           return;
//         }
//       } catch (apiError) {
//         console.log("API search failed, falling back to client-side search");
//       }
      
//       // Fallback to client-side search
//       const lowerCaseTerm = term.toLowerCase();
//       const results = users.filter(user => 
//         (user.fullname && user.fullname.toLowerCase().includes(lowerCaseTerm)) ||
//         (user.email && user.email.toLowerCase().includes(lowerCaseTerm)) ||
//         (user._id && user._id.toLowerCase().includes(lowerCaseTerm))
//       );
      
//       setSearchResults(results);
      
//       if (results.length === 0) {
//         setModalMessage("No users found matching your search criteria.");
//         setShowFailModal(true);
//       }
//     } catch (error) {
//       console.error("Search error:", error);
//       setModalMessage("An error occurred while searching. Please try again.");
//       setShowFailModal(true);
//       setSearchResults([]);
//     } finally {
//       setSearchLoading(false);
//     }
//   };

//   const closeSearchModal = () => {
//     setSearchResults(null);
//     setEditingId(null);
//   };

//   const handleDelete = async (id) => {
//     try {
//       setLoading(true);
//       await axios.delete(
//         `https://hotel-nodejs-oa32.onrender.com/37829/7892/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           }
//         }
//       );
      
//       setUsers(prev => prev.filter(user => user._id !== id));
//       if (searchResults) {
//         setSearchResults(prev => prev.filter(user => user._id !== id));
//       }
      
//       setModalMessage("User deleted successfully");
//       setShowSuccessModal(true);
//     } catch (error) {
//       console.error("Error deleting user:", error);
//       setModalMessage(error.response?.data?.message || "Failed to delete user");
//       setShowFailModal(true);
//     } finally {
//       setLoading(false);
//       setShowConfirmModal(false);
//     }
//   };

//   const startEditing = (user) => {
//     setEditingId(user._id);
//     setFormData({
//       fullname: user.fullname,
//       email: user.email,
//       phone: user.phone || "",
//       status: user.status || "user",
//       password: ""
//     });
//     setErrors({});
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.fullname?.trim()) newErrors.fullname = "Fullname is required";
//     if (!formData.email?.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }
//     if (formData.password && formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleUpdate = async (userId) => {
//     if (!validateForm()) return;

//     try {
//       setLoading(true);
      
//       const updateData = {};
//       const originalUser = users.find(u => u._id === userId);
      
//       if (formData.fullname !== originalUser.fullname) updateData.fullname = formData.fullname;
//       if (formData.email !== originalUser.email) updateData.email = formData.email;
//       if (formData.phone !== originalUser.phone) updateData.phone = formData.phone;
//       if (formData.status !== originalUser.status) updateData.status = formData.status;
//       if (formData.password) updateData.password = formData.password;

//       const response = await axios.put(
//         `https://hotel-nodejs-oa32.onrender.com/37829/7892/${userId}`,
//         updateData
//       );

//       const updatedUser = response.data?.updatedUser || response.data?.data || response.data;
      
//       setUsers(prev => prev.map(user => 
//         user._id === userId ? { ...user, ...updatedUser } : user
//       ));
//       if (searchResults) {
//         setSearchResults(prev => prev.map(user => 
//           user._id === userId ? { ...user, ...updatedUser } : user
//         ));
//       }
      
//       setEditingId(null);
//       setModalMessage("User updated successfully");
//       setShowSuccessModal(true);
//     } catch (error) {
//       console.error("User update error:", error);
//       if (error.response?.data?.errors) {
//         setErrors(error.response.data.errors);
//       } else {
//         setModalMessage(error.response?.data?.message || "Failed to update user");
//         setShowFailModal(true);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: undefined }));
//     }
//   };

//   const cancelEditing = () => {
//     setEditingId(null);
//     setErrors({});
//   };

//   const confirmDelete = (user) => {
//     setConfirmAction({
//       type: 'delete',
//       title: 'Delete User',
//       message: `Are you sure you want to delete ${user.fullname}? This action cannot be undone.`,
//       onConfirm: () => handleDelete(user._id)
//     });
//     setShowConfirmModal(true);
//   };

//   // Pagination logic
//   const currentUsers = users.slice(
//     (currentPage - 1) * usersPerPage,
//     currentPage * usersPerPage
//   );
//   const totalPages = Math.ceil(users.length / usersPerPage);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Calculate stats
//   const totalUsers = users.length;
//   const adminCount = users.filter(u => u.status === 'admin').length;
//   const userCount = users.filter(u => u.status === 'user').length;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="mb-6 sm:mb-8"
//         >
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//             <div>
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 User Management Dashboard
//               </h1>
//               <p className="text-sm sm:text-base text-gray-600 mt-2">
//                 Manage your users efficiently with our powerful tools
//               </p>
//             </div>
            
//             {/* View Toggle */}
//             <div className="flex items-center gap-2 bg-white p-1 rounded-lg shadow-sm">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setViewMode('grid')}
//                 className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
//                   viewMode === 'grid' 
//                     ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md' 
//                     : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 <GridView className="w-5 h-5" />
//                 <span className="hidden sm:inline">Grid View</span>
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setViewMode('list')}
//                 className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
//                   viewMode === 'list' 
//                     ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md' 
//                     : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 <ViewList className="w-5 h-5" />
//                 <span className="hidden sm:inline">List View</span>
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <StatsCard 
//             icon={Person}
//             title="Total Users"
//             value={totalUsers}
//             color="from-blue-500 to-blue-600"
//             trend={12}
//           />
//           <StatsCard 
//             icon={AdminPanelSettings}
//             title="Admins"
//             value={adminCount}
//             color="from-purple-500 to-purple-600"
//             trend={5}
//           />
//           <StatsCard 
//             icon={Person}
//             title="Regular Users"
//             value={userCount}
//             color="from-green-500 to-green-600"
//             trend={8}
//           />
//           <StatsCard 
//             icon={Verified}
//             title="Verified Users"
//             value={Math.floor(totalUsers * 0.85)}
//             color="from-orange-500 to-orange-600"
//             trend={-2}
//           />
//         </div>
        
//         {/* Search Component */}
//         <UserSearch 
//           onSearch={handleSearch} 
//           searchTerm={searchTerm}
//           setSearchTerm={setSearchTerm}
//         />
        
//         {/* Loading States */}
//         <AnimatePresence>
//           {searchLoading && <LoadingSpinner />}
//         </AnimatePresence>

//         {/* Search Results Modal */}
//         <AnimatePresence>
//           {searchResults !== null && (
//             <SearchModal 
//               results={searchResults} 
//               onClose={closeSearchModal}
//               onDelete={confirmDelete}
//               onEdit={startEditing}
//               editingId={editingId}
//               formData={formData}
//               errors={errors}
//               handleInputChange={handleInputChange}
//               handleUpdate={handleUpdate}
//               cancelEditing={cancelEditing}
//               viewMode={viewMode}
//               setViewMode={setViewMode}
//             />
//           )}
//         </AnimatePresence>

//         {/* Modals */}
//         <SuccessModal 
//           isOpen={showSuccessModal}
//           message={modalMessage}
//           onClose={() => setShowSuccessModal(false)}
//         />

//         <ConfirmModal 
//           isOpen={showConfirmModal}
//           title={confirmAction.title}
//           message={confirmAction.message}
//           onConfirm={() => {
//             if (confirmAction.onConfirm) {
//               confirmAction.onConfirm();
//             }
//             setShowConfirmModal(false);
//           }}
//           onCancel={() => {
//             setShowConfirmModal(false);
//             setConfirmAction({});
//           }}
//         />

//         <FailModal 
//           isOpen={showFailModal}
//           message={modalMessage}
//           onClose={() => setShowFailModal(false)}
//         />

//         {/* Main Content */}
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
//         >
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                 className="w-16 h-16 border-4 border-t-4 border-t-blue-600 border-blue-200 rounded-full"
//               />
//             </div>
//           ) : (
//             <>
//               {viewMode === 'grid' ? (
//                 // Grid View
//                 <div className="p-6">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                     {currentUsers.length > 0 ? (
//                       currentUsers.map((user, index) => (
//                         <motion.div
//                           key={user._id}
//                           initial={{ opacity: 0, scale: 0.9 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ delay: index * 0.05 }}
//                           whileHover={{ y: -8 }}
//                           className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
//                         >
//                           {editingId === user._id ? (
//                             // Edit Mode in Grid
//                             <div className="p-4 space-y-3">
//                               <div className="flex items-center space-x-3">
//                                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
//                                   <Person className="w-6 h-6 text-blue-600" />
//                                 </div>
//                                 <input
//                                   type="text"
//                                   name="fullname"
//                                   value={formData.fullname}
//                                   onChange={handleInputChange}
//                                   className={`flex-1 border rounded-lg px-3 py-2 text-sm ${
//                                     errors.fullname ? "border-red-500" : "border-gray-300"
//                                   }`}
//                                   placeholder="Full Name"
//                                 />
//                               </div>
//                               {errors.fullname && (
//                                 <p className="text-xs text-red-600">{errors.fullname}</p>
//                               )}
                              
//                               <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                                 className={`w-full border rounded-lg px-3 py-2 text-sm ${
//                                   errors.email ? "border-red-500" : "border-gray-300"
//                                 }`}
//                                 placeholder="Email"
//                               />
//                               {errors.email && (
//                                 <p className="text-xs text-red-600">{errors.email}</p>
//                               )}
                              
//                               <input
//                                 type="tel"
//                                 name="phone"
//                                 value={formData.phone}
//                                 onChange={handleInputChange}
//                                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
//                                 placeholder="Phone"
//                               />
                              
//                               <div className="relative">
//                                 <input
//                                   type={showPassword ? "text" : "password"}
//                                   name="password"
//                                   value={formData.password}
//                                   onChange={handleInputChange}
//                                   className={`w-full border rounded-lg px-3 py-2 text-sm pr-10 ${
//                                     errors.password ? "border-red-500" : "border-gray-300"
//                                   }`}
//                                   placeholder="New Password"
//                                 />
//                                 <button
//                                   type="button"
//                                   onClick={() => setShowPassword(!showPassword)}
//                                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                                 >
//                                   {showPassword ? (
//                                     <VisibilityOff className="w-4 h-4 text-gray-400" />
//                                   ) : (
//                                     <Visibility className="w-4 h-4 text-gray-400" />
//                                   )}
//                                 </button>
//                               </div>
//                               {errors.password && (
//                                 <p className="text-xs text-red-600">{errors.password}</p>
//                               )}
                              
//                               <select
//                                 name="status"
//                                 value={formData.status}
//                                 onChange={handleInputChange}
//                                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
//                               >
//                                 <option value="user">User</option>
//                                 <option value="admin">Admin</option>
//                               </select>
                              
//                               <div className="flex gap-2 pt-2">
//                                 <motion.button
//                                   whileHover={{ scale: 1.02 }}
//                                   whileTap={{ scale: 0.98 }}
//                                   onClick={() => handleUpdate(user._id)}
//                                   className="flex-1 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg text-sm font-medium"
//                                 >
//                                   Save
//                                 </motion.button>
//                                 <motion.button
//                                   whileHover={{ scale: 1.02 }}
//                                   whileTap={{ scale: 0.98 }}
//                                   onClick={cancelEditing}
//                                   className="flex-1 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg text-sm font-medium"
//                                 >
//                                   Cancel
//                                 </motion.button>
//                               </div>
//                             </div>
//                           ) : (
//                             // View Mode in Grid
//                             <>
//                               <div className="relative h-28 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
//                                 <div className="absolute -bottom-10 left-4">
//                                   <div className="w-20 h-20 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center">
//                                     {user.status === "admin" ? (
//                                       <AdminPanelSettings className="w-10 h-10 text-purple-600" />
//                                     ) : (
//                                       <Person className="w-10 h-10 text-blue-600" />
//                                     )}
//                                   </div>
//                                 </div>
//                                 <div className="absolute top-2 right-2">
//                                   <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
//                                     user.status === "admin"
//                                       ? "bg-purple-200 text-purple-800"
//                                       : "bg-blue-200 text-blue-800"
//                                   }`}>
//                                     {user.status === "admin" ? "Admin" : "User"}
//                                   </span>
//                                 </div>
//                               </div>
                              
//                               <div className="p-4 pt-12">
//                                 <h3 className="font-semibold text-gray-900 text-lg">{user.fullname}</h3>
//                                 <p className="text-xs text-gray-500 mb-4">ID: {user._id.substring(0, 10)}...</p>
                                
//                                 <div className="space-y-3 mb-4">
//                                   <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
//                                     <Email className="w-4 h-4 mr-2 text-blue-500" />
//                                     <span className="truncate">{user.email}</span>
//                                   </div>
//                                   <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
//                                     <Phone className="w-4 h-4 mr-2 text-green-500" />
//                                     <span>{user.phone}</span>
//                                   </div>
//                                 </div>
                                
//                                 <div className="flex gap-2">
//                                   <motion.button
//                                     whileHover={{ scale: 1.02 }}
//                                     whileTap={{ scale: 0.98 }}
//                                     onClick={() => startEditing(user)}
//                                     className="flex-1 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all"
//                                   >
//                                     Edit
//                                   </motion.button>
//                                   <motion.button
//                                     whileHover={{ scale: 1.02 }}
//                                     whileTap={{ scale: 0.98 }}
//                                     onClick={() => confirmDelete(user)}
//                                     className="flex-1 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all"
//                                   >
//                                     Delete
//                                   </motion.button>
//                                 </div>
//                               </div>
//                             </>
//                           )}
//                         </motion.div>
//                       ))
//                     ) : (
//                       <div className="col-span-full text-center py-12">
//                         <div className="text-6xl mb-4">👥</div>
//                         <h3 className="text-xl font-semibold text-gray-700 mb-2">No Users Found</h3>
//                         <p className="text-gray-500">Start by adding some users to your system</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ) : (
//                 // List View
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
//                       <tr>
//                         <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">User</th>
//                         <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Contact</th>
//                         <th className="hidden lg:table-cell px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">User ID</th>
//                         <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
//                         <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {currentUsers.length > 0 ? (
//                         currentUsers.map((user, index) => (
//                           <motion.tr
//                             key={user._id}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: index * 0.05 }}
//                             whileHover={{ backgroundColor: "#f9fafb" }}
//                             className="transition-colors"
//                           >
//                             {editingId === user._id ? (
//                               // Edit Mode in List
//                               <>
//                                 <td className="px-6 py-4">
//                                   <div className="flex items-center space-x-3">
//                                     <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
//                                       <Person className="w-5 h-5 text-blue-600" />
//                                     </div>
//                                     <input
//                                       type="text"
//                                       name="fullname"
//                                       value={formData.fullname}
//                                       onChange={handleInputChange}
//                                       className={`border rounded-lg px-3 py-2 w-full focus:ring-2 text-black focus:border-transparent ${
//                                         errors.fullname ? "border-red-500" : "border-gray-300"
//                                       }`}
//                                       placeholder="Full Name"
//                                     />
//                                   </div>
//                                   {errors.fullname && (
//                                     <p className="mt-1 text-xs text-red-600 ml-12">{errors.fullname}</p>
//                                   )}
//                                 </td>
//                                 <td className="px-6 py-4">
//                                   <div className="space-y-2">
//                                     <input
//                                       type="email"
//                                       name="email"
//                                       value={formData.email}
//                                       onChange={handleInputChange}
//                                       className={`w-full border rounded-lg px-3 py-2 focus:ring-2 text-black focus:border-transparent ${
//                                         errors.email ? "border-red-500" : "border-gray-300"
//                                       }`}
//                                       placeholder="Email"
//                                     />
//                                     {errors.email && (
//                                       <p className="text-xs text-red-600">{errors.email}</p>
//                                     )}
//                                     <input
//                                       type="tel"
//                                       name="phone"
//                                       value={formData.phone}
//                                       onChange={handleInputChange}
//                                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 text-black focus:border-transparent"
//                                       placeholder="Phone"
//                                     />
//                                     <div className="relative">
//                                       <input
//                                         type={showPassword ? "text" : "password"}
//                                         name="password"
//                                         value={formData.password}
//                                         onChange={handleInputChange}
//                                         className={`w-full border rounded-lg px-3 py-2 pr-10 focus:ring-2 text-black focus:border-transparent ${
//                                           errors.password ? "border-red-500" : "border-gray-300"
//                                         }`}
//                                         placeholder="New Password"
//                                       />
//                                       <button
//                                         type="button"
//                                         onClick={() => setShowPassword(!showPassword)}
//                                         className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                                       >
//                                         {showPassword ? (
//                                           <VisibilityOff className="w-4 h-4 text-gray-400" />
//                                         ) : (
//                                           <Visibility className="w-4 h-4 text-gray-400" />
//                                         )}
//                                       </button>
//                                     </div>
//                                     {errors.password && (
//                                       <p className="text-xs text-red-600">{errors.password}</p>
//                                     )}
//                                   </div>
//                                 </td>
//                                 <td className="hidden lg:table-cell px-6 py-4 text-sm text-gray-500">
//                                   {user._id}
//                                 </td>
//                                 <td className="px-6 py-4">
//                                   <select
//                                     name="status"
//                                     value={formData.status}
//                                     onChange={handleInputChange}
//                                     className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 text-black focus:border-transparent"
//                                   >
//                                     <option value="user">User</option>
//                                     <option value="admin">Admin</option>
//                                   </select>
//                                 </td>
//                                 <td className="px-6 py-4">
//                                   <div className="flex space-x-2">
//                                     <motion.button
//                                       whileHover={{ scale: 1.05 }}
//                                       whileTap={{ scale: 0.95 }}
//                                       onClick={() => handleUpdate(user._id)}
//                                       className="p-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all"
//                                     >
//                                       <Save className="w-4 h-4" />
//                                     </motion.button>
//                                     <motion.button
//                                       whileHover={{ scale: 1.05 }}
//                                       whileTap={{ scale: 0.95 }}
//                                       onClick={cancelEditing}
//                                       className="p-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:shadow-lg transition-all"
//                                     >
//                                       <Cancel className="w-4 h-4" />
//                                     </motion.button>
//                                   </div>
//                                 </td>
//                               </>
//                             ) : (
//                               // View Mode in List
//                               <>
//                                 <td className="px-6 py-4">
//                                   <div className="flex items-center space-x-3">
//                                     <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
//                                       {user.status === "admin" ? (
//                                         <AdminPanelSettings className="w-5 h-5 text-purple-600" />
//                                       ) : (
//                                         <Person className="w-5 h-5 text-blue-600" />
//                                       )}
//                                     </div>
//                                     <div>
//                                       <div className="text-sm font-semibold text-gray-900">
//                                         {user.fullname}
//                                       </div>
//                                       <div className="text-xs text-gray-500 sm:hidden">
//                                         ID: {user._id.substring(0, 10)}...
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </td>
//                                 <td className="px-6 py-4">
//                                   <div className="space-y-1">
//                                     <div className="text-sm text-gray-600 flex items-center space-x-2">
//                                       <Email className="w-4 h-4 text-gray-400" />
//                                       <span className="truncate max-w-[150px] sm:max-w-[200px] lg:max-w-none">
//                                         {user.email}
//                                       </span>
//                                     </div>
//                                     <div className="text-sm text-gray-600 flex items-center space-x-2">
//                                       <Phone className="w-4 h-4 text-gray-400" />
//                                       <span>{user.phone}</span>
//                                     </div>
//                                   </div>
//                                 </td>
//                                 <td className="hidden lg:table-cell px-6 py-4 text-sm text-gray-500">
//                                   {user._id}
//                                 </td>
//                                 <td className="px-6 py-4">
//                                   <motion.span
//                                     whileHover={{ scale: 1.05 }}
//                                     className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                                       user.status === "admin"
//                                         ? "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800"
//                                         : "bg-gradient-to-r from-green-100 to-green-200 text-green-800"
//                                     }`}
//                                   >
//                                     {user.status === "admin" ? "Admin" : "User"}
//                                   </motion.span>
//                                 </td>
//                                 <td className="px-6 py-4">
//                                   <div className="flex space-x-2">
//                                     <motion.button
//                                       whileHover={{ scale: 1.05 }}
//                                       whileTap={{ scale: 0.95 }}
//                                       onClick={() => startEditing(user)}
//                                       className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all"
//                                     >
//                                       <Edit className="w-4 h-4" />
//                                     </motion.button>
//                                     <motion.button
//                                       whileHover={{ scale: 1.05 }}
//                                       whileTap={{ scale: 0.95 }}
//                                       onClick={() => confirmDelete(user)}
//                                       className="p-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-all"
//                                     >
//                                       <Delete className="w-4 h-4" />
//                                     </motion.button>
//                                   </div>
//                                 </td>
//                               </>
//                             )}
//                           </motion.tr>
//                         ))
//                       ) : (
//                         <tr>
//                           <td colSpan="5" className="px-6 py-12 text-center">
//                             <div className="text-6xl mb-4">👥</div>
//                             <h3 className="text-xl font-semibold text-gray-700 mb-2">No Users Found</h3>
//                             <p className="text-gray-500">Start by adding some users to your system</p>
//                           </td>
//                         </tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               )}

//               {/* Pagination */}
//               {totalPages > 1 && (
//                 <div className="px-4 sm:px-6 py-4 bg-gray-50 border-t border-gray-200">
//                   <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//                     <div className="text-sm text-gray-700">
//                       Showing <span className="font-medium">{(currentPage - 1) * usersPerPage + 1}</span> to{" "}
//                       <span className="font-medium">
//                         {Math.min(currentPage * usersPerPage, users.length)}
//                       </span>{" "}
//                       of <span className="font-medium">{users.length}</span> users
//                     </div>
                    
//                     <div className="flex items-center space-x-1">
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => handlePageChange(1)}
//                         disabled={currentPage === 1}
//                         className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         «
//                       </motion.button>
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => handlePageChange(currentPage - 1)}
//                         disabled={currentPage === 1}
//                         className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         ‹
//                       </motion.button>
                      
//                       {/* Page Numbers - Responsive */}
//                       <div className="hidden sm:flex space-x-1">
//                         {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//                           let pageNum;
//                           if (totalPages <= 5) {
//                             pageNum = i + 1;
//                           } else if (currentPage <= 3) {
//                             pageNum = i + 1;
//                           } else if (currentPage >= totalPages - 2) {
//                             pageNum = totalPages - 4 + i;
//                           } else {
//                             pageNum = currentPage - 2 + i;
//                           }
                          
//                           return (
//                             <motion.button
//                               key={pageNum}
//                               whileHover={{ scale: 1.05 }}
//                               whileTap={{ scale: 0.95 }}
//                               onClick={() => handlePageChange(pageNum)}
//                               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//                                 currentPage === pageNum
//                                   ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
//                                   : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
//                               }`}
//                             >
//                               {pageNum}
//                             </motion.button>
//                           );
//                         })}
//                       </div>
                      
//                       {/* Mobile Page Indicator */}
//                       <span className="sm:hidden px-4 py-2 text-sm font-medium text-gray-700">
//                         Page {currentPage} of {totalPages}
//                       </span>
                      
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => handlePageChange(currentPage + 1)}
//                         disabled={currentPage === totalPages}
//                         className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         ›
//                       </motion.button>
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => handlePageChange(totalPages)}
//                         disabled={currentPage === totalPages}
//                         className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         »
//                       </motion.button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </>
//           )}
//         </motion.div>

//         {/* Quick Actions Floating Button */}
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.5, type: "spring" }}
//           className="fixed bottom-6 right-6"
//         >
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-xl flex items-center justify-center text-white hover:shadow-2xl transition-all"
//           >
//             <MoreVert className="w-6 h-6" />
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };
























/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Search,
  Close,
  Edit,
  Delete,
  Save,
  Cancel,
  Person,
  Email,
  Phone,
  Lock,
  AdminPanelSettings,
  CheckCircle,
  Error,
  Warning,
  Refresh,
  FilterList,
  Sort,
  Visibility,
  VisibilityOff,
  ViewList,
  ViewModule,
  GridView,
  Dashboard,
  MoreVert,
  ArrowUpward,
  ArrowDownward,
  CloudDownload,
  Print,
  Share,
  Star,
  StarBorder,
  Verified,
  AccessTime,
  LocationOn,
  Business,
  School,
  Work,
  CalendarToday,
  Add,
  PersonAdd,
  Badge,
  Security,
  Settings,
  Notifications,
  Help,
  ExitToApp,
  Menu,
  DarkMode,
  LightMode,
  Language,
  AttachFile,
  Image,
  Camera,
  Fingerprint,
  RadioButtonChecked,
  RadioButtonUnchecked,
  EditAttributes,
  DeleteForever,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

// Loading Spinner Component
const LoadingSpinner = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-20 h-20 border-4 border-t-4 border-t-blue-600 border-blue-200 rounded-full"
    />
  </motion.div>
);

// Success Modal Component
const SuccessModal = ({ isOpen, message, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, y: -50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.5, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 10 }}
                className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4"
              >
                <CheckCircle className="w-12 h-12 text-green-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Success!</h3>
              <p className="text-gray-600 mb-6">{message}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
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

// Confirm Modal Component
const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={onCancel}
        >
          <motion.div
            initial={{ scale: 0.5, rotateX: -90 }}
            animate={{ scale: 1, rotateX: 0 }}
            exit={{ scale: 0.5, rotateX: 90 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center mb-4"
              >
                <Warning className="w-8 h-8 text-yellow-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">{title || "Confirm Action"}</h3>
              </motion.div>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 mb-6"
              >
                {message}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onConfirm}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Confirm
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onCancel}
                  className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                >
                  Cancel
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Fail Modal Component
const FailModal = ({ isOpen, message, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, y: 100 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.5, y: -100 }}
            transition={{ type: "spring", damping: 15 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 text-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4"
              >
                <Error className="w-12 h-12 text-red-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Error!</h3>
              <p className="text-gray-600 mb-6">{message}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
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

// SVG Icons as components
const PersonAddIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const VisibilityIcon = () => (
  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const VisibilityOffIcon = () => (
  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const CreateUserModal = ({ isOpen, onClose, onCreate, loading }) => {
  const [registerData, setRegisterData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [touched, setTouched] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Fullname validation
    if (!registerData.fullname?.trim()) {
      newErrors.fullname = "Full name is required";
    } else if (registerData.fullname.length < 2) {
      newErrors.fullname = "Name must be at least 2 characters";
    }
    
    // Email validation
    if (!registerData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    // Password validation
    if (!registerData.password) {
      newErrors.password = "Password is required";
    } else if (registerData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/.test(registerData.password)) {
      newErrors.password = "Password must contain uppercase, lowercase and number";
    }
    
    // Confirm password validation
    if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    // Phone validation
    if (!registerData.phone?.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{10,}$/.test(registerData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      await onCreate(registerData);
    }
  };

  const resetForm = () => {
    setRegisterData({
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    });
    setErrors({});
    setTouched({});
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const getPasswordStrength = () => {
    const password = registerData.password;
    if (!password) return 0;
    
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    
    return strength;
  };

  const passwordStrength = getPasswordStrength();
  
  const getStrengthColor = () => {
    if (passwordStrength <= 25) return 'bg-red-500';
    if (passwordStrength <= 50) return 'bg-orange-500';
    if (passwordStrength <= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStrengthText = () => {
    if (passwordStrength <= 25) return 'Weak';
    if (passwordStrength <= 50) return 'Fair';
    if (passwordStrength <= 75) return 'Good';
    return 'Strong';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => {
            resetForm();
            onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Gradient */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-x-12 translate-y-12" />
              
              <div className="flex items-center justify-between relative">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <PersonAddIcon />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Create New User</h2>
                    <p className="text-sm text-white/80 mt-1">Fill in the details below</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    resetForm();
                    onClose();
                  }}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <CloseIcon />
                </motion.button>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
              <div className="space-y-5">
                {/* Full Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon />
                    </div>
                    <input
                      type="text"
                      name="fullname"
                      value={registerData.fullname}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black ${
                        errors.fullname && touched.fullname 
                          ? "border-red-500 bg-red-50" 
                          : touched.fullname && !errors.fullname
                          ? "border-green-500 bg-green-50"
                          : "border-gray-300"
                      }`}
                      placeholder="John Doe"
                    />
                    {touched.fullname && !errors.fullname && registerData.fullname && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <CheckCircleIcon />
                      </div>
                    )}
                  </div>
                  {errors.fullname && touched.fullname && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1.5 text-xs text-red-600 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.fullname}
                    </motion.p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MailIcon />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={registerData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black ${
                        errors.email && touched.email 
                          ? "border-red-500 bg-red-50" 
                          : touched.email && !errors.email
                          ? "border-green-500 bg-green-50"
                          : "border-gray-300"
                      }`}
                      placeholder="john@example.com"
                    />
                    {touched.email && !errors.email && registerData.email && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <CheckCircleIcon />
                      </div>
                    )}
                  </div>
                  {errors.email && touched.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1.5 text-xs text-red-600 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <PhoneIcon />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={registerData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black ${
                        errors.phone && touched.phone 
                          ? "border-red-500 bg-red-50" 
                          : touched.phone && !errors.phone
                          ? "border-green-500 bg-green-50"
                          : "border-gray-300"
                      }`}
                      placeholder="+1 234 567 8900"
                    />
                    {touched.phone && !errors.phone && registerData.phone && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <CheckCircleIcon />
                      </div>
                    )}
                  </div>
                  {errors.phone && touched.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1.5 text-xs text-red-600 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.phone}
                    </motion.p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockIcon />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={registerData.password}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black ${
                        errors.password && touched.password 
                          ? "border-red-500 bg-red-50" 
                          : touched.password && !errors.password && registerData.password
                          ? "border-green-500 bg-green-50"
                          : "border-gray-300"
                      }`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </button>
                  </div>
                  
                  {/* Password Strength Meter */}
                  {registerData.password && (
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex space-x-1 flex-1">
                          <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 25 ? getStrengthColor() : 'bg-gray-200'}`} />
                          <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 50 ? getStrengthColor() : 'bg-gray-200'}`} />
                          <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 75 ? getStrengthColor() : 'bg-gray-200'}`} />
                          <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 100 ? getStrengthColor() : 'bg-gray-200'}`} />
                        </div>
                        <span className="text-xs font-medium ml-2 text-gray-600">
                          {getStrengthText()}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {errors.password && touched.password && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1.5 text-xs text-red-600 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.password}
                    </motion.p>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockIcon />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={registerData.confirmPassword}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black ${
                        errors.confirmPassword && touched.confirmPassword 
                          ? "border-red-500 bg-red-50" 
                          : touched.confirmPassword && !errors.confirmPassword && registerData.confirmPassword
                          ? "border-green-500 bg-green-50"
                          : "border-gray-300"
                      }`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </button>
                  </div>
                  {errors.confirmPassword && touched.confirmPassword && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1.5 text-xs text-red-600 flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.confirmPassword}
                    </motion.p>
                  )}
                </div>

                {/* Password Requirements */}
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs font-medium text-gray-700 mb-2">Password requirements:</p>
                  <ul className="space-y-1">
                    <li className="flex items-center text-xs text-gray-600">
                      <svg className={`w-4 h-4 mr-2 ${registerData.password?.length >= 8 ? 'text-green-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      At least 8 characters
                    </li>
                    <li className="flex items-center text-xs text-gray-600">
                      <svg className={`w-4 h-4 mr-2 ${/[A-Z]/.test(registerData.password) ? 'text-green-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      At least one uppercase letter
                    </li>
                    <li className="flex items-center text-xs text-gray-600">
                      <svg className={`w-4 h-4 mr-2 ${/[a-z]/.test(registerData.password) ? 'text-green-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      At least one lowercase letter
                    </li>
                    <li className="flex items-center text-xs text-gray-600">
                      <svg className={`w-4 h-4 mr-2 ${/[0-9]/.test(registerData.password) ? 'text-green-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      At least one number
                    </li>
                  </ul>
                </div>
              </div>
            </form>

            {/* Footer with Actions */}
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => {
                    resetForm();
                    onClose();
                  }}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors font-medium"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      Create User
                      <ArrowRightIcon />
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Edit User Modal Component

// SVG Icons as components
const EditIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const SaveIcon = () => (
  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
  </svg>
);

const InfoIcon = () => (
  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const EditUserModal = ({ isOpen, onClose, onUpdate, user, loading }) => {
  const [registerData, setRegisterData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [touched, setTouched] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    if (user) {
      setRegisterData({
        fullname: user.fullname || "",
        email: user.email || "",
        password: "",
        confirmPassword: "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  // Calculate password strength
  useEffect(() => {
    const password = registerData.password;
    if (!password) {
      setPasswordStrength(0);
      return;
    }
    
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25; // Special character
    
    setPasswordStrength(Math.min(strength, 100));
  }, [registerData.password]);

  const validateForm = () => {
    const newErrors = {};
    
    // Fullname validation
    if (!registerData.fullname?.trim()) {
      newErrors.fullname = "Full name is required";
    } else if (registerData.fullname.length < 2) {
      newErrors.fullname = "Name must be at least 2 characters";
    }
    
    // Email validation
    if (!registerData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    // Password validation (only if they're trying to change it)
    if (registerData.password) {
      if (registerData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
      if (registerData.password !== registerData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }
    
    // Phone validation
    if (registerData.phone && !/^[0-9+\-\s()]{10,}$/.test(registerData.phone)) {
      newErrors.phone = "Invalid phone number format";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      // If password is empty, remove it from the update data
      const updateData = { ...registerData };
      if (!updateData.password) {
        delete updateData.password;
        delete updateData.confirmPassword;
      }
      await onUpdate(user?._id, updateData);
    }
  };

  const getStrengthColor = () => {
    if (passwordStrength <= 25) return 'bg-red-500';
    if (passwordStrength <= 50) return 'bg-orange-500';
    if (passwordStrength <= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStrengthText = () => {
    if (passwordStrength <= 25) return 'Weak';
    if (passwordStrength <= 50) return 'Fair';
    if (passwordStrength <= 75) return 'Good';
    return 'Strong';
  };

  const resetForm = () => {
    setRegisterData({
      fullname: user?.fullname || "",
      email: user?.email || "",
      password: "",
      confirmPassword: "",
      phone: user?.phone || "",
    });
    setErrors({});
    setTouched({});
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => {
            resetForm();
            onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Gradient */}
            <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-6 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-x-12 translate-y-12" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white opacity-5 rounded-full" />
              
              <div className="flex items-center justify-between relative">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <EditIcon />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Edit User</h2>
                    <p className="text-sm text-white/80 mt-1">Update user information</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    resetForm();
                    onClose();
                  }}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <CloseIcon />
                </motion.button>
              </div>

              {/* User email badge */}
              {user?.email && (
                <div className="mt-4 bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                  <p className="text-sm text-white/90 flex items-center">
                    <MailIcon />
                    <span className="ml-2 font-medium">Editing: {user.email}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Form Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <div className="space-y-5">
                  {/* Full Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <UserIcon />
                      </div>
                      <input
                        type="text"
                        name="fullname"
                        value={registerData.fullname}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-black ${
                          errors.fullname && touched.fullname 
                            ? "border-red-500 bg-red-50" 
                            : touched.fullname && !errors.fullname && registerData.fullname
                            ? "border-green-500 bg-green-50"
                            : "border-gray-300"
                        }`}
                        placeholder="John Doe"
                      />
                      {touched.fullname && !errors.fullname && registerData.fullname && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          <CheckCircleIcon />
                        </div>
                      )}
                    </div>
                    {errors.fullname && touched.fullname && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-xs text-red-600 flex items-center"
                      >
                        <InfoIcon />
                        {errors.fullname}
                      </motion.p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MailIcon />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={registerData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-black ${
                          errors.email && touched.email 
                            ? "border-red-500 bg-red-50" 
                            : touched.email && !errors.email && registerData.email
                            ? "border-green-500 bg-green-50"
                            : "border-gray-300"
                        }`}
                        placeholder="john@example.com"
                      />
                      {touched.email && !errors.email && registerData.email && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          <CheckCircleIcon />
                        </div>
                      )}
                    </div>
                    {errors.email && touched.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-xs text-red-600 flex items-center"
                      >
                        <InfoIcon />
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <PhoneIcon />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={registerData.phone}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-black ${
                          errors.phone && touched.phone 
                            ? "border-red-500 bg-red-50" 
                            : "border-gray-300"
                        }`}
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    {errors.phone && touched.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-xs text-red-600 flex items-center"
                      >
                        <InfoIcon />
                        {errors.phone}
                      </motion.p>
                    )}
                  </div>

                  {/* Divider for Password Section */}
                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="px-3 bg-white text-sm text-gray-500 font-medium">
                        Change Password (Optional)
                      </span>
                    </div>
                  </div>

                  {/* New Password Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      New Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LockIcon />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={registerData.password}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-black ${
                          errors.password && touched.password 
                            ? "border-red-500 bg-red-50" 
                            : registerData.password && !errors.password
                            ? "border-green-500 bg-green-50"
                            : "border-gray-300"
                        }`}
                        placeholder="Leave blank to keep current"
                      />
                      <div
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </div>
                    </div>
                    
                    {/* Password Strength Meter */}
                    {registerData.password && (
                      <div className="mt-2">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex space-x-1 flex-1">
                            <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 25 ? getStrengthColor() : 'bg-gray-200'}`} />
                            <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 50 ? getStrengthColor() : 'bg-gray-200'}`} />
                            <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 75 ? getStrengthColor() : 'bg-gray-200'}`} />
                            <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 100 ? getStrengthColor() : 'bg-gray-200'}`} />
                          </div>
                          <span className="text-xs font-medium ml-2 text-gray-600">
                            {getStrengthText()}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    {errors.password && touched.password && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-xs text-red-600 flex items-center"
                      >
                        <InfoIcon />
                        {errors.password}
                      </motion.p>
                    )}
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LockIcon />
                      </div>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={registerData.confirmPassword}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-black ${
                          errors.confirmPassword && touched.confirmPassword 
                            ? "border-red-500 bg-red-50" 
                            : registerData.confirmPassword && !errors.confirmPassword
                            ? "border-green-500 bg-green-50"
                            : "border-gray-300"
                        }`}
                        placeholder="Confirm new password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </button>
                    </div>
                    {errors.confirmPassword && touched.confirmPassword && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-xs text-red-600 flex items-center"
                      >
                        <InfoIcon />
                        {errors.confirmPassword}
                      </motion.p>
                    )}
                  </div>

                  {/* Password Requirements Info */}
                  {registerData.password && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                      <p className="text-xs font-medium text-amber-800 mb-2 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Password requirements:
                      </p>
                      <ul className="space-y-1">
                        <li className="flex items-center text-xs text-amber-700">
                          <svg className={`w-4 h-4 mr-2 ${registerData.password?.length >= 8 ? 'text-green-500' : 'text-amber-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          At least 8 characters
                        </li>
                        <li className="flex items-center text-xs text-amber-700">
                          <svg className={`w-4 h-4 mr-2 ${/[A-Z]/.test(registerData.password) ? 'text-green-500' : 'text-amber-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          At least one uppercase letter
                        </li>
                        <li className="flex items-center text-xs text-amber-700">
                          <svg className={`w-4 h-4 mr-2 ${/[a-z]/.test(registerData.password) ? 'text-green-500' : 'text-amber-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          At least one lowercase letter
                        </li>
                        <li className="flex items-center text-xs text-amber-700">
                          <svg className={`w-4 h-4 mr-2 ${/[0-9]/.test(registerData.password) ? 'text-green-500' : 'text-amber-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          At least one number
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Footer with Actions */}
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => {
                    resetForm();
                    onClose();
                  }}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors font-medium"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-600 to-red-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      Save Changes
                      <SaveIcon />
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


// Search Modal Component
const SearchModal = ({ 
  results, 
  onClose, 
  onDelete, 
  onEdit, 
  viewMode,
  setViewMode
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          transition={{ type: "spring", damping: 25 }}
          className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
              <motion.h2 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Search Results ({results.length})
              </motion.h2>
              <div className="flex items-center gap-2">
                {/* View Toggle for Search Results */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'grid' 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <GridView className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'list' 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <ViewList className="w-5 h-5" />
                  </motion.button>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Close className="w-5 h-5 text-gray-600" />
                </motion.button>
              </div>
            </div>
            
            {results.length > 0 ? (
              viewMode === 'grid' ? (
                // Grid View for Search Results
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-[70vh] p-2">
                  {results.map((user, index) => (
                    <motion.div
                      key={user._id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all"
                    >
                      <div className="relative h-24 bg-gradient-to-r from-blue-500 to-purple-600 p-4">
                        <div className="absolute -bottom-8 left-4">
                          <div className="w-16 h-16 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center">
                            {user.status === "admin" ? (
                              <AdminPanelSettings className="w-8 h-8 text-purple-600" />
                            ) : (
                              <Person className="w-8 h-8 text-blue-600" />
                            )}
                          </div>
                        </div>
                        <div className="absolute top-2 right-2">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            user.status === "admin"
                              ? "bg-purple-200 text-purple-800"
                              : "bg-blue-200 text-blue-800"
                          }`}>
                            {user.status === "admin" ? "Admin" : "User"}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-4 pt-10">
                        <h3 className="font-semibold text-gray-900">{user.fullname}</h3>
                        <p className="text-xs text-gray-500 mb-3">ID: {user._id.substring(0, 10)}...</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Email className="w-4 h-4 mr-2 text-gray-400" />
                            <span className="truncate">{user.email}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Phone className="w-4 h-4 mr-2 text-gray-400" />
                            <span>{user.phone}</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => onEdit(user)}
                            className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium"
                          >
                            Edit
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => onDelete(user._id)}
                            className="flex-1 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg text-sm font-medium"
                          >
                            Delete
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                // List View for Search Results
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">User</th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Email</th>
                        <th className="hidden md:table-cell px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Phone</th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {results.map((user, index) => (
                        <motion.tr
                          key={user._id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ backgroundColor: "#f9fafb" }}
                        >
                          <td className="px-4 sm:px-6 py-4">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                {user.status === "admin" ? (
                                  <AdminPanelSettings className="w-4 h-4 text-purple-600" />
                                ) : (
                                  <Person className="w-4 h-4 text-blue-600" />
                                )}
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-gray-900">
                                  {user.fullname}
                                </div>
                                <div className="text-xs text-gray-500">
                                  ID: {user._id.substring(0, 8)}...
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-sm text-gray-500">
                            {user.email}
                          </td>
                          <td className="hidden md:table-cell px-4 sm:px-6 py-4 text-sm text-gray-500">
                            {user.phone}
                          </td>
                          <td className="px-4 sm:px-6 py-4">
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              user.status === "admin"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-green-100 text-green-800"
                            }`}>
                              {user.status === "admin" ? "Admin" : "User"}
                            </span>
                          </td>
                          <td className="px-4 sm:px-6 py-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => onEdit(user)}
                                className="p-2 bg-blue-500 text-white rounded-lg"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => onDelete(user._id)}
                                className="p-2 bg-red-500 text-white rounded-lg"
                              >
                                <Delete className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Results Found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Enhanced User Search Component
const UserSearch = ({ onSearch, searchTerm, setSearchTerm }) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mb-6"
    >
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-gray-400 w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search by name, email or ID..."
            className="block w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-black shadow-sm focus:outline-none focus:ring-2 text-black focus:border-transparent transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSearch}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Search className="w-5 h-5" />
            <span className="hidden sm:inline">Search</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setSearchTerm("");
              onSearch("");
            }}
            className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Refresh className="w-5 h-5" />
            <span className="hidden sm:inline">Clear</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
          >
            <FilterList className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-4 p-4 bg-gray-50 rounded-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>All Status</option>
                <option>Admin</option>
                <option>User</option>
                <option>Moderator</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Sort by Name</option>
                <option>Sort by Email</option>
                <option>Sort by Date</option>
                <option>Sort by Role</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>10 per page</option>
                <option>20 per page</option>
                <option>50 per page</option>
                <option>100 per page</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Sales</option>
                <option>HR</option>
              </select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Stats Card Component
const StatsCard = ({ icon: Icon, title, value, color, trend, onClick }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 cursor-pointer"
  >
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-lg bg-gradient-to-br ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      {trend && (
        <span className={`text-sm font-medium ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {trend > 0 ? '+' : ''}{trend}%
        </span>
      )}
    </div>
    <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
    <p className="text-sm text-gray-600">{title}</p>
  </motion.div>
);

// Main UserManagement Component
export const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    status: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [showSidebar, setShowSidebar] = useState(false);
  
  // Modal states
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [confirmAction, setConfirmAction] = useState({
    type: '',
    title: '',
    message: '',
    onConfirm: null
  });

  const usersPerPage = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://hotel-nodejs-oa32.onrender.com/37829/7892"
        );
        const usersData = response.data?.users || response.data?.data?.users || [];
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
        setModalMessage("Failed to fetch users. Please try again.");
        setShowFailModal(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = async (term) => {
    if (!term) {
      setSearchResults(null);
      return;
    }

    try {
      setSearchLoading(true);
      
      // Try API search first
      try {
        const response = await axios.get(
          `https://hotel-nodejs-oa32.onrender.com/37829/7892/term=${term}`
        );
        if (response.data.users && response.data.users.length > 0) {
          setSearchResults(response.data.users);
          setSearchLoading(false);
          return;
        }
      } catch (apiError) {
        console.log("API search failed, falling back to client-side search");
      }
      
      // Fallback to client-side search
      const lowerCaseTerm = term.toLowerCase();
      const results = users.filter(user => 
        (user.fullname && user.fullname.toLowerCase().includes(lowerCaseTerm)) ||
        (user.email && user.email.toLowerCase().includes(lowerCaseTerm)) ||
        (user._id && user._id.toLowerCase().includes(lowerCaseTerm))
      );
      
      setSearchResults(results);
      
      if (results.length === 0) {
        setModalMessage("No users found matching your search criteria.");
        setShowFailModal(true);
      }
    } catch (error) {
      console.error("Search error:", error);
      setModalMessage("An error occurred while searching. Please try again.");
      setShowFailModal(true);
      setSearchResults([]);
    } finally {
      setSearchLoading(false);
    }
  };

  const closeSearchModal = () => {
    setSearchResults(null);
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await axios.delete(
        `https://hotel-nodejs-oa32.onrender.com/37829/7892/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        }
      );
      
      setUsers(prev => prev.filter(user => user._id !== id));
      if (searchResults) {
        setSearchResults(prev => prev.filter(user => user._id !== id));
      }
      
      setModalMessage("User deleted successfully");
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error deleting user:", error);
      setModalMessage(error.response?.data?.message || "Failed to delete user");
      setShowFailModal(true);
    } finally {
      setLoading(false);
      setShowConfirmModal(false);
    }
  };

  const handleCreateUser = async (userData) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://hotel-nodejs-oa32.onrender.com/37829/7892",
        userData
      );
      
      const newUser = response.data?.user || response.data?.data || response.data;
      setUsers(prev => [newUser, ...prev]);
      
      setModalMessage("User created successfully");
      setShowSuccessModal(true);
      setShowCreateModal(false);
    } catch (error) {
      console.error("Error creating user:", error);
      setModalMessage(error.response?.data?.message || "Failed to create user");
      setShowFailModal(true);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUser = async (userId, userData) => {
    try {
      setLoading(true);
      
      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/37829/7892/${userId}`,
        userData
      );

      const updatedUser = response.data?.updatedUser || response.data?.data || response.data;
      
      setUsers(prev => prev.map(user => 
        user._id === userId ? { ...user, ...updatedUser } : user
      ));
      if (searchResults) {
        setSearchResults(prev => prev.map(user => 
          user._id === userId ? { ...user, ...updatedUser } : user
        ));
      }
      
      setModalMessage("User updated successfully");
      setShowSuccessModal(true);
      setShowEditModal(false);
      setSelectedUser(null);
    } catch (error) {
      console.error("User update error:", error);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        setModalMessage(error.response?.data?.message || "Failed to update user");
        setShowFailModal(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = (userId) => {
    const user = users.find(u => u._id === userId);
    setConfirmAction({
      type: 'delete',
      title: 'Delete User',
      message: `Are you sure you want to delete ${user?.fullname}? This action cannot be undone.`,
      onConfirm: () => handleDelete(userId)
    });
    setShowConfirmModal(true);
  };

  const openEditModal = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  // Pagination logic
  const currentUsers = users.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate stats
  const totalUsers = users.length;
  const adminCount = users.filter(u => u.status === 'admin' || u.role === 'admin').length;
  const userCount = users.filter(u => u.status === 'user' || u.role === 'user').length;
  const moderatorCount = users.filter(u => u.role === 'moderator').length;
  const activeCount = users.filter(u => u.status === 'active').length;

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'} transition-colors duration-300`}>

      {/* Main Content */}
      <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-6 sm:mb-8"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSidebar(true)}
                  className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all lg:hidden"
                >
                  <Menu className="w-5 h-5 text-gray-700" />
                </motion.button>
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    User Management Dashboard
                  </h1>
                  <p className="text-sm sm:text-base text-gray-600 mt-2">
                    Manage your users efficiently with our powerful tools
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">

                {/* Create User Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowCreateModal(true)}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <PersonAdd className="w-5 h-5" />
                  
                </motion.button>

                {/* View Toggle */}
                <div className="hidden sm:flex items-center gap-2 bg-white p-1 rounded-lg shadow-sm">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                      viewMode === 'grid' 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <GridView className="w-5 h-5" />
                  
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                      viewMode === 'list' 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <ViewList className="w-5 h-5" />
                    
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatsCard 
              icon={Person}
              title="Total Users"
              value={totalUsers}
              color="from-blue-500 to-blue-600"
              trend={12}
              onClick={() => {}}
            />
            <StatsCard 
              icon={AdminPanelSettings}
              title="Admins"
              value={adminCount}
              color="from-purple-500 to-purple-600"
              trend={5}
              onClick={() => {}}
            />
            <StatsCard 
              icon={Person}
              title="Regular Users"
              value={userCount}
              color="from-green-500 to-green-600"
              trend={8}
              onClick={() => {}}
            />
            <StatsCard 
              icon={Verified}
              title="Active Users"
              value={activeCount}
              color="from-orange-500 to-orange-600"
              trend={-2}
              onClick={() => {}}
            />
          </div>
          
          {/* Search Component */}
          <UserSearch 
            onSearch={handleSearch} 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          
          {/* Loading States */}
          <AnimatePresence>
            {searchLoading && <LoadingSpinner />}
          </AnimatePresence>

          {/* Search Results Modal */}
          <AnimatePresence>
            {searchResults !== null && (
              <SearchModal 
                results={searchResults} 
                onClose={closeSearchModal}
                onDelete={confirmDelete}
                onEdit={openEditModal}
                viewMode={viewMode}
                setViewMode={setViewMode}
              />
            )}
          </AnimatePresence>

          {/* Create User Modal */}
          <CreateUserModal 
            isOpen={showCreateModal}
            onClose={() => setShowCreateModal(false)}
            onCreate={handleCreateUser}
            loading={loading}
          />

          {/* Edit User Modal */}
          <EditUserModal 
            isOpen={showEditModal}
            onClose={() => {
              setShowEditModal(false);
              setSelectedUser(null);
            }}
            onUpdate={handleUpdateUser}
            user={selectedUser}
            loading={loading}
          />

          {/* Success Modal */}
          <SuccessModal 
            isOpen={showSuccessModal}
            message={modalMessage}
            onClose={() => setShowSuccessModal(false)}
          />

          {/* Confirm Modal */}
          <ConfirmModal 
            isOpen={showConfirmModal}
            title={confirmAction.title}
            message={confirmAction.message}
            onConfirm={() => {
              if (confirmAction.onConfirm) {
                confirmAction.onConfirm();
              }
              setShowConfirmModal(false);
            }}
            onCancel={() => {
              setShowConfirmModal(false);
              setConfirmAction({});
            }}
          />

          {/* Fail Modal */}
          <FailModal 
            isOpen={showFailModal}
            message={modalMessage}
            onClose={() => setShowFailModal(false)}
          />

          {/* Main Content */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`rounded-2xl shadow-xl overflow-hidden border ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
            }`}
          >
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 border-4 border-t-4 border-t-blue-600 border-blue-200 rounded-full"
                />
              </div>
            ) : (
              <>
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {currentUsers.length > 0 ? (
                        currentUsers.map((user, index) => (
                          <motion.div
                            key={user._id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -8 }}
                            className={`rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 ${
                              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                            } border`}
                          >
                            <div className="relative h-28 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
                              <div className="absolute -bottom-10 left-4">
                                <div className="w-20 h-20 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center">
                                  {user.status === "admin" || user.role === "admin" ? (
                                    <AdminPanelSettings className="w-10 h-10 text-purple-600" />
                                  ) : (
                                    <Person className="w-10 h-10 text-blue-600" />
                                  )}
                                </div>
                              </div>
                              <div className="absolute top-2 right-2">
                                <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
                                  user.status === "admin" || user.role === "admin"
                                    ? "bg-purple-200 text-purple-800"
                                    : user.status === "active"
                                    ? "bg-green-200 text-green-800"
                                    : user.status === "inactive"
                                    ? "bg-gray-200 text-gray-800"
                                    : "bg-blue-200 text-blue-800"
                                }`}>
                                  {user.role || user.status || "User"}
                                </span>
                              </div>
                            </div>
                            
                            <div className="p-4 pt-12">
                              <h3 className={`font-semibold text-lg ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                              }`}>
                                {user.fullname}
                              </h3>
                              <p className={`text-xs mb-4 ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                              }`}>
                                ID: {user._id.substring(0, 10)}...
                              </p>
                              
                              <div className="space-y-3 mb-4">
                                <div className={`flex items-center text-sm p-2 rounded-lg ${
                                  theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-600'
                                }`}>
                                  <Email className={`w-4 h-4 mr-2 ${
                                    theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
                                  }`} />
                                  <span className="truncate">{user.email}</span>
                                </div>
                                <div className={`flex items-center text-sm p-2 rounded-lg ${
                                  theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-600'
                                }`}>
                                  <Phone className={`w-4 h-4 mr-2 ${
                                    theme === 'dark' ? 'text-green-400' : 'text-green-500'
                                  }`} />
                                  <span>{user.phone}</span>
                                </div>
                                {user.department && (
                                  <div className={`flex items-center text-sm p-2 rounded-lg ${
                                    theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-600'
                                  }`}>
                                    <Business className={`w-4 h-4 mr-2 ${
                                      theme === 'dark' ? 'text-purple-400' : 'text-purple-500'
                                    }`} />
                                    <span>{user.department}</span>
                                  </div>
                                )}
                              </div>
                              
                              <div className="flex gap-2">
                                <motion.button
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => openEditModal(user)}
                                  className="flex-1 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all"
                                >
                                 <EditAttributes className="w-4 h-4" />
                                </motion.button>
                                <motion.button
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => confirmDelete(user._id)}
                                  className="flex-1 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all"
                                >
                                 <DeleteForever className='w-4 h-4'/>
                                </motion.button>
                              </div>
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <div className="col-span-full text-center py-12">
                          <div className="text-6xl mb-4">👥</div>
                          <h3 className={`text-xl font-semibold mb-2 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-700'
                          }`}>
                            No Users Found
                          </h3>
                          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                            Start by adding some users to your system
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className={`${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gradient-to-r from-gray-50 to-gray-100'
                      }`}>
                        <tr>
                          <th className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            User
                          </th>
                          <th className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            Contact
                          </th>
                   
                          <th className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            Status
                          </th>
                          <th className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y divide-gray-200 ${
                        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                      }`}>
                        {currentUsers.length > 0 ? (
                          currentUsers.map((user, index) => (
                            <motion.tr
                              key={user._id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ backgroundColor: theme === 'dark' ? '#374151' : '#f9fafb' }}
                              className="transition-colors"
                            >
                              <td className="px-6 py-4">
                                <div className="flex items-center space-x-3">
                                  <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                                    user.status === "admin" || user.role === "admin"
                                      ? "bg-purple-100"
                                      : "bg-blue-100"
                                  }`}>
                                    {user.status === "admin" || user.role === "admin" ? (
                                      <AdminPanelSettings className="w-5 h-5 text-purple-600" />
                                    ) : (
                                      <Person className="w-5 h-5 text-blue-600" />
                                    )}
                                  </div>
                                  <div>
                                    <div className={`text-sm font-semibold ${
                                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>
                                      {user.fullname}
                                    </div>
                                    <div className={`text-xs ${
                                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                    } sm:hidden`}>
                                      ID: {user._id.substring(0, 10)}...
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="space-y-1">
                                  <div className={`text-sm flex items-center space-x-2 ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                  }`}>
                                    <Email className={`w-4 h-4 ${
                                      theme === 'dark' ? 'text-gray-400' : 'text-gray-400'
                                    }`} />
                                    <span className="truncate max-w-[150px] sm:max-w-[200px] lg:max-w-none">
                                      {user.email}
                                    </span>
                                  </div>
                                  <div className={`text-sm flex items-center space-x-2 ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                  }`}>
                                    <Phone className={`w-4 h-4 ${
                                      theme === 'dark' ? 'text-gray-400' : 'text-gray-400'
                                    }`} />
                                    <span>{user.phone}</span>
                                  </div>
                                </div>
                              </td>
                          
                              <td className="px-6 py-4">
                                <motion.span
                                  whileHover={{ scale: 1.05 }}
                                  className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    user.status === "admin" || user.role === "admin"
                                      ? "bg-purple-100 text-purple-800"
                                      : user.status === "active"
                                      ? "bg-green-100 text-green-800"
                                      : user.status === "inactive"
                                      ? "bg-gray-100 text-gray-800"
                                      : "bg-blue-100 text-blue-800"
                                  }`}
                                >
                                  {user.role || user.status || "User"}
                                </motion.span>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex space-x-2">
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => openEditModal(user)}
                                    className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all"
                                  >
                                    <Edit className="w-4 h-4" />
                                  </motion.button>
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => confirmDelete(user._id)}
                                    className="p-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-all"
                                  >
                                    <Delete className="w-4 h-4" />
                                  </motion.button>
                                </div>
                              </td>
                            </motion.tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="5" className="px-6 py-12 text-center">
                              <div className="text-6xl mb-4">👥</div>
                              <h3 className={`text-xl font-semibold mb-2 ${
                                theme === 'dark' ? 'text-white' : 'text-gray-700'
                              }`}>
                                No Users Found
                              </h3>
                              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                                Start by adding some users to your system
                              </p>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className={`px-4 sm:px-6 py-4 border-t ${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                      }`}>
                        Showing <span className="font-medium">{(currentPage - 1) * usersPerPage + 1}</span> to{" "}
                        <span className="font-medium">
                          {Math.min(currentPage * usersPerPage, users.length)}
                        </span>{" "}
                        of <span className="font-medium">{users.length}</span> users
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handlePageChange(1)}
                          disabled={currentPage === 1}
                          className={`px-3 py-2 rounded-lg border text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed ${
                            theme === 'dark'
                              ? 'border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600'
                              : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
                          }`}
                        >
                          «
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className={`px-3 py-2 rounded-lg border text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed ${
                            theme === 'dark'
                              ? 'border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600'
                              : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
                          }`}
                        >
                          ‹
                        </motion.button>
                        
                        {/* Page Numbers - Responsive */}
                        <div className="hidden sm:flex space-x-1">
                          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            let pageNum;
                            if (totalPages <= 5) {
                              pageNum = i + 1;
                            } else if (currentPage <= 3) {
                              pageNum = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                              pageNum = totalPages - 4 + i;
                            } else {
                              pageNum = currentPage - 2 + i;
                            }
                            
                            return (
                              <motion.div
                                key={pageNum}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handlePageChange(pageNum)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                  currentPage === pageNum
                                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                                    : theme === 'dark'
                                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                }`}
                              >
                                {pageNum}
                              </motion.div>
                            );
                          })}
                        </div>
                        
                        {/* Mobile Page Indicator */}
                        <span className={`sm:hidden px-4 py-2 text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Page {currentPage} of {totalPages}
                        </span>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className={`px-3 py-2 rounded-lg border text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed ${
                            theme === 'dark'
                              ? 'border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600'
                              : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
                          }`}
                        >
                          ›
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handlePageChange(totalPages)}
                          disabled={currentPage === totalPages}
                          className={`px-3 py-2 rounded-lg border text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed ${
                            theme === 'dark'
                              ? 'border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600'
                              : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
                          }`}
                        >
                          »
                        </motion.button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </motion.div>

          {/* Floating Action Button for Mobile */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="fixed bottom-6 right-6 lg:hidden"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowCreateModal(true)}
              className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-xl flex items-center justify-center text-white hover:shadow-2xl transition-all"
            >
              <Add className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};


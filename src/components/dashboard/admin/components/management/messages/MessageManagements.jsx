/* eslint-disable no-useless-escape */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   Search,
//   Notifications,
//   ViewModule,
//   ViewList,
//   FilterList,
//   Sort,
//   Refresh,
//   MoreVert,
//   Star,
//   StarBorder,
//   AttachFile,
//   Image,
//   Send,
//   Delete,
//   Archive,
//   Markunread,
//   Schedule,
//   Close,
//   Check,
//   Warning,
//   Info,
// } from "@mui/icons-material";
// import { motion, AnimatePresence } from "framer-motion";
// import { Avatar, Badge, IconButton, Chip, Tooltip } from "@mui/material";

// // API base URL - replace with your actual API endpoint
// const API_BASE_URL = "https://hotel-nodejs-oa32.onrender.com";

// // Create axios instance with default config
// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Response interceptor for error handling
// api.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.code === 'ECONNABORTED') {
//       toast.error('Request timeout. Please try again.');
//     } else if (!error.response) {
//       toast.error('Network error. Please check your connection.');
//     }
//     return Promise.reject(error);
//   }
// );

// export const MessageManagements = () => {
//   const [viewMode, setViewMode] = useState("grid");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [hoveredMessage, setHoveredMessage] = useState(null);
//   const [selectedMessages, setSelectedMessages] = useState([]);
//   const [isRefreshing, setIsRefreshing] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [sortBy, setSortBy] = useState("newest");
//   const [filterOpen, setFilterOpen] = useState(false);
//   const [pagination, setPagination] = useState({
//     page: 1,
//     limit: 20,
//     total: 0,
//     totalPages: 0
//   });

//   // Fetch messages from API using axios
//   const fetchMessages = async (page = 1, category = selectedCategory, search = searchTerm, sort = sortBy) => {
//     setIsLoading(true);
//     setError(null);
    
//     try {
//       const response = await api.get('/63729/892308');
      
//       const data = response.data;
//       setMessages(data.messages || []);
//       setPagination({
//         page: data.page || 1,
//         limit: data.limit || 20,
//         total: data.total || 0,
//         totalPages: data.totalPages || 0
//       });
      
//       toast.success('Messages loaded successfully!');
//     } catch (error) {
//       console.error("Error fetching messages:", error);
//       setError(error.response?.data?.message || error.message);
//       setMessages([]);
//       toast.error(error.response?.data?.message || 'Failed to load messages');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Fetch message by ID
//   const fetchMessageById = async (id) => {
//     try {
//       const response = await api.get(`/63729/892308/${id}`);
//       toast.info('Message details loaded');
//       return response.data;
//     } catch (error) {
//       console.error(`Error fetching message ${id}:`, error);
//       toast.error(error.response?.data?.message || 'Failed to load message details');
//       throw error;
//     }
//   };

//   // Update message (star, read status, etc.)
//   const updateMessage = async (id, updates) => {
//     const toastId = toast.loading('Updating message...');
    
//     try {
//       const response = await api.patch(`/63729/892308/${id}`, updates);
      
//       setMessages(prevMessages =>
//         prevMessages.map(msg =>
//           msg.id === id ? { ...msg, ...response.data } : msg
//         )
//       );
      
//       toast.update(toastId, {
//         render: 'Message updated successfully!',
//         type: 'success',
//         isLoading: false,
//         autoClose: 3000,
//       });
      
//       return response.data;
//     } catch (error) {
//       console.error(`Error updating message ${id}:`, error);
      
//       toast.update(toastId, {
//         render: error.response?.data?.message || 'Failed to update message',
//         type: 'error',
//         isLoading: false,
//         autoClose: 3000,
//       });
      
//       throw error;
//     }
//   };

//   // Bulk update messages
//   const bulkUpdateMessages = async (ids, updates, action = 'updated') => {
//     if (ids.length === 0) {
//       toast.warning('No messages selected');
//       return;
//     }
    
//     const toastId = toast.loading(`Processing ${ids.length} messages...`);
    
//     try {
//       const response = await api.patch('/63729/892308/bulk', { ids, updates });
      
//       setMessages(prevMessages =>
//         prevMessages.map(msg =>
//           ids.includes(msg.id) ? { ...msg, ...updates } : msg
//         )
//       );
      
//       toast.update(toastId, {
//         render: `${ids.length} messages ${action} successfully!`,
//         type: 'success',
//         isLoading: false,
//         autoClose: 3000,
//       });
      
//       return response.data;
//     } catch (error) {
//       console.error('Error bulk updating messages:', error);
      
//       toast.update(toastId, {
//         render: error.response?.data?.message || 'Failed to process messages',
//         type: 'error',
//         isLoading: false,
//         autoClose: 3000,
//       });
      
//       throw error;
//     }
//   };

//   // Delete message
//   const deleteMessage = async (id) => {
//     const toastId = toast.loading('Deleting message...');
    
//     try {
//       await api.delete(`/63729/892308/${id}`);
      
//       setMessages(prevMessages => prevMessages.filter(msg => msg.id !== id));
//       setSelectedMessages(prev => prev.filter(msgId => msgId !== id));
      
//       toast.update(toastId, {
//         render: 'Message deleted successfully!',
//         type: 'success',
//         isLoading: false,
//         autoClose: 3000,
//       });
      
//       return true;
//     } catch (error) {
//       console.error(`Error deleting message ${id}:`, error);
      
//       toast.update(toastId, {
//         render: error.response?.data?.message || 'Failed to delete message',
//         type: 'error',
//         isLoading: false,
//         autoClose: 3000,
//       });
      
//       throw error;
//     }
//   };

//   // Bulk delete messages
//   const bulkDeleteMessages = async (ids) => {
//     if (ids.length === 0) {
//       toast.warning('No messages selected');
//       return;
//     }
    
//     const toastId = toast.loading(`Deleting ${ids.length} messages...`);
    
//     try {
//       await api.delete('/63729/892308/bulk', { data: { ids } });
      
//       setMessages(prevMessages => prevMessages.filter(msg => !ids.includes(msg.id)));
//       setSelectedMessages([]);
      
//       toast.update(toastId, {
//         render: `${ids.length} messages deleted successfully!`,
//         type: 'success',
//         isLoading: false,
//         autoClose: 3000,
//       });
      
//       return true;
//     } catch (error) {
//       console.error('Error bulk deleting messages:', error);
      
//       toast.update(toastId, {
//         render: error.response?.data?.message || 'Failed to delete messages',
//         type: 'error',
//         isLoading: false,
//         autoClose: 3000,
//       });
      
//       throw error;
//     }
//   };

//   // Archive messages
//   const archiveMessages = async (ids) => {
//     return bulkUpdateMessages(ids, { isArchived: true }, 'archived');
//   };

//   // Mark as read/unread
//   const markAsRead = async (ids, read = true) => {
//     return bulkUpdateMessages(ids, { isRead: read }, read ? 'marked as read' : 'marked as unread');
//   };

//   // Load messages on component mount and when dependencies change
//   useEffect(() => {
//     fetchMessages(1, selectedCategory, searchTerm, sortBy);
//   }, [selectedCategory, searchTerm, sortBy]);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.05,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//       },
//     },
//     exit: {
//       y: -20,
//       opacity: 0,
//       transition: { duration: 0.2 },
//     },
//   };

//   const gridItemVariants = {
//     hover: {
//       scale: 1.02,
//       y: -4,
//       boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//       transition: { duration: 0.2 },
//     },
//     tap: { scale: 0.98 },
//   };

//   const listItemVariants = {
//     hover: {
//       x: 8,
//       backgroundColor: "rgba(79, 70, 229, 0.04)",
//       transition: { duration: 0.2 },
//     },
//   };

//   // Calculate categories with counts from API data
//   const categories = [
//     { id: "all", label: "All Messages", count: pagination.total || 0, color: "from-blue-500 to-cyan-500", icon: "📬" },
//     { id: "unread", label: "Unread", count: messages?.filter(m => !m?.isRead)?.length || 0, color: "from-purple-500 to-pink-500", icon: "📫" },
//     { id: "starred", label: "Starred", count: messages?.filter(m => m?.isStarred)?.length || 0, color: "from-yellow-500 to-amber-500", icon: "⭐" },
//     { id: "attachments", label: "With Attachments", count: messages?.filter(m => m?.hasAttachment)?.length || 0, color: "from-green-500 to-emerald-500", icon: "📎" },
//   ];

//   const sortOptions = [
//     { value: "newest", label: "Newest First", icon: "🆕" },
//     { value: "oldest", label: "Oldest First", icon: "📅" },
//     { value: "priority", label: "Priority", icon: "⚡" },
//     { value: "sender", label: "Sender", icon: "👤" },
//   ];

//   const toggleStar = async (id, e) => {
//     e?.stopPropagation();
//     const message = messages.find(m => m.id === id);
//     if (!message) return;
    
//     try {
//       await updateMessage(id, { isStarred: !message.isStarred });
//     } catch (error) {
//       // Error is handled in updateMessage
//     }
//   };

//   const toggleRead = async (id) => {
//     const message = messages.find(m => m.id === id);
//     if (!message) return;
    
//     try {
//       await updateMessage(id, { isRead: !message.isRead });
//     } catch (error) {
//       // Error is handled in updateMessage
//     }
//   };

//   const handleRefresh = () => {
//     setIsRefreshing(true);
//     fetchMessages(pagination.page, selectedCategory, searchTerm, sortBy)
//       .finally(() => setIsRefreshing(false));
//   };

//   const toggleMessageSelection = (id) => {
//     setSelectedMessages(prev => 
//       prev.includes(id) ? prev.filter(msgId => msgId !== id) : [...prev, id]
//     );
//   };

//   const selectAllMessages = () => {
//     if (selectedMessages.length === messages.length) {
//       setSelectedMessages([]);
//     } else {
//       setSelectedMessages(messages.map(msg => msg.id));
//     }
//   };

//   const handleBulkArchive = async () => {
//     await archiveMessages(selectedMessages);
//   };

//   const handleBulkDelete = async () => {
//     if (selectedMessages.length === 0) return;
    
//     const confirmed = await new Promise((resolve) => {
//       toast(
//         <div className="text-center">
//           <Warning className="text-yellow-500 text-4xl mb-2" />
//           <p className="mb-4">Delete {selectedMessages.length} messages?</p>
//           <div className="flex gap-2 justify-center">
//             <button
//               onClick={() => resolve(true)}
//               className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//             >
//               Delete
//             </button>
//             <button
//               onClick={() => resolve(false)}
//               className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>,
//         {
//           position: "top-center",
//           autoClose: false,
//           closeOnClick: false,
//           draggable: false,
//           closeButton: false,
//         }
//       );
//     });
    
//     toast.dismiss();
//     if (confirmed) {
//       await bulkDeleteMessages(selectedMessages);
//     }
//   };

//   const handleBulkMarkRead = async () => {
//     await markAsRead(selectedMessages, true);
//   };

//   const handleBulkMarkUnread = async () => {
//     await markAsRead(selectedMessages, false);
//   };

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= pagination.totalPages) {
//       fetchMessages(newPage, selectedCategory, searchTerm, sortBy);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   const getPriorityColor = (priority) => {
//     switch(priority?.toLowerCase()) {
//       case 'high': return 'bg-red-100 text-red-600 border-red-200';
//       case 'medium': return 'bg-yellow-100 text-yellow-600 border-yellow-200';
//       case 'low': return 'bg-green-100 text-green-600 border-green-200';
//       default: return 'bg-gray-100 text-gray-600 border-gray-200';
//     }
//   };

//   const getPriorityIcon = (priority) => {
//     switch(priority?.toLowerCase()) {
//       case 'high': return '🔴';
//       case 'medium': return '🟡';
//       case 'low': return '🟢';
//       default: return '⚪';
//     }
//   };

//   // Show loading state
//   if (isLoading && messages.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
//         <div className="text-center">
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//             className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto mb-4"
//           />
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-gray-600"
//           >
//             Loading your messages...
//           </motion.p>
//         </div>
//       </div>
//     );
//   }

//   // Show error state
//   if (error && messages.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
//         >
//           <div className="text-6xl mb-4">❌</div>
//           <h3 className="text-xl font-bold text-gray-900 mb-2">Error Loading Messages</h3>
//           <p className="text-gray-500 mb-6">{error}</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleRefresh}
//             className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow"
//           >
//             Try Again
//           </motion.button>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
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
//         theme="light"
//       />
      
//       {/* Header Section */}
//       <motion.header 
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           {/* Top Bar */}
//           <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
//             <div className="flex items-center gap-3">
//               <motion.div
//                 whileHover={{ rotate: 5 }}
//                 className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
//               >
//                 <Send className="size-5 text-white" />
//               </motion.div>
//               <div>
//                 <motion.h1 
//                   initial={{ x: -20 }}
//                   animate={{ x: 0 }}
//                   className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
//                 >
//                   Message Center
//                 </motion.h1>
//                 <p className="text-xs text-gray-500">Manage your conversations</p>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
//               {/* Search Bar */}
//               <motion.div 
//                 whileHover={{ scale: 1.02 }}
//                 className="relative flex-1"
//               >
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-4" />
//                 <input
//                   type="text"
//                   placeholder="Search messages..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10 pr-4 py-2.5 w-full sm:w-80 rounded-xl border border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all bg-white/50 backdrop-blur-sm"
//                 />
//                 {searchTerm && (
//                   <motion.button
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     onClick={() => setSearchTerm("")}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2"
//                   >
//                     <Close className="size-4 text-gray-400 hover:text-gray-600" />
//                   </motion.button>
//                 )}
//               </motion.div>

//               <div className="flex items-center gap-2">
//                 {/* Sort Dropdown */}
//                 <div className="relative">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setFilterOpen(!filterOpen)}
//                     className="p-2.5 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 transition-colors"
//                   >
//                     <Sort className="size-5 text-gray-600" />
//                   </motion.button>
                  
//                   <AnimatePresence>
//                     {filterOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 10 }}
//                         className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-20"
//                       >
//                         {sortOptions.map((option) => (
//                           <motion.button
//                             key={option.value}
//                             whileHover={{ x: 4 }}
//                             onClick={() => {
//                               setSortBy(option.value);
//                               setFilterOpen(false);
//                             }}
//                             className={`w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-indigo-50 transition-colors ${
//                               sortBy === option.value ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700'
//                             }`}
//                           >
//                             <span>{option.icon}</span>
//                             <span>{option.label}</span>
//                           </motion.button>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* View Toggle */}
//                 <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-gray-200">
//                   <Tooltip title="Grid View">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => setViewMode("grid")}
//                       className={`p-2 rounded-lg transition-all ${
//                         viewMode === "grid" 
//                           ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md" 
//                           : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
//                       }`}
//                     >
//                       <ViewModule className="size-5" />
//                     </motion.button>
//                   </Tooltip>
//                   <Tooltip title="List View">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => setViewMode("list")}
//                       className={`p-2 rounded-lg transition-all ${
//                         viewMode === "list" 
//                           ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md" 
//                           : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
//                       }`}
//                     >
//                       <ViewList className="size-5" />
//                     </motion.button>
//                   </Tooltip>
//                 </div>

//                 {/* Refresh Button */}
//                 <Tooltip title="Refresh">
//                   <motion.div
//                     animate={{ rotate: isRefreshing ? 360 : 0 }}
//                     transition={{ duration: 1, repeat: isRefreshing ? Infinity : 0, ease: "linear" }}
//                   >
//                     <IconButton 
//                       onClick={handleRefresh} 
//                       className="bg-white border border-gray-200 hover:border-indigo-300"
//                     >
//                       <Refresh className="size-5 text-gray-600" />
//                     </IconButton>
//                   </motion.div>
//                 </Tooltip>

//                 {/* Notifications */}
//                 <Tooltip title="Notifications">
//                   <IconButton className="relative bg-white border border-gray-200 hover:border-indigo-300">
//                     <Badge 
//                       badgeContent={messages?.filter(m => !m?.isRead)?.length || 0} 
//                       color="error"
//                       max={99}
//                     >
//                       <Notifications className="size-5 text-gray-600" />
//                     </Badge>
//                   </IconButton>
//                 </Tooltip>
//               </div>
//             </div>
//           </div>

//           {/* Categories */}
//           <motion.div 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="flex flex-wrap gap-2 mt-4"
//           >
//             {categories.map((category) => (
//               <motion.button
//                 key={category.id}
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setSelectedCategory(category.id)}
//                 className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all
//                   ${selectedCategory === category.id 
//                     ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
//                     : 'bg-white/70 backdrop-blur-sm text-gray-600 hover:bg-white border border-gray-200'
//                   }`}
//               >
//                 <span className="mr-2">{category.icon}</span>
//                 {category.label}
//                 <span className={`ml-2 px-2 py-0.5 rounded-lg text-xs
//                   ${selectedCategory === category.id 
//                     ? 'bg-white/20 text-white' 
//                     : 'bg-gray-100 text-gray-600'
//                   }`}
//                 >
//                   {category.count}
//                 </span>
//               </motion.button>
//             ))}
//           </motion.div>

//           {/* Selected Actions Bar */}
//           <AnimatePresence>
//             {selectedMessages.length > 0 && (
//               <motion.div
//                 initial={{ height: 0, opacity: 0, y: -20 }}
//                 animate={{ height: "auto", opacity: 1, y: 0 }}
//                 exit={{ height: 0, opacity: 0, y: -20 }}
//                 className="mt-4 p-3 bg-indigo-50 rounded-xl flex flex-wrap items-center gap-3"
//               >
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={selectedMessages.length === messages.length}
//                     onChange={selectAllMessages}
//                     className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
//                   />
//                   <span className="text-sm text-indigo-600 font-medium">
//                     {selectedMessages.length} selected
//                   </span>
//                 </div>
//                 <div className="flex-1" />
//                 <div className="flex items-center gap-2">
//                   <Tooltip title="Archive">
//                     <IconButton 
//                       size="small" 
//                       className="bg-white hover:bg-indigo-100"
//                       onClick={handleBulkArchive}
//                     >
//                       <Archive className="size-4 text-gray-600" />
//                     </IconButton>
//                   </Tooltip>
//                   <Tooltip title="Delete">
//                     <IconButton 
//                       size="small" 
//                       className="bg-white hover:bg-red-100"
//                       onClick={handleBulkDelete}
//                     >
//                       <Delete className="size-4 text-red-500" />
//                     </IconButton>
//                   </Tooltip>
//                   <Tooltip title="Mark as Read">
//                     <IconButton 
//                       size="small" 
//                       className="bg-white hover:bg-indigo-100"
//                       onClick={handleBulkMarkRead}
//                     >
//                       <Markunread className="size-4 text-gray-600" />
//                     </IconButton>
//                   </Tooltip>
//                   <Tooltip title="Mark as Unread">
//                     <IconButton 
//                       size="small" 
//                       className="bg-white hover:bg-indigo-100"
//                       onClick={handleBulkMarkUnread}
//                     >
//                       <Markunread className="size-4 text-gray-400" />
//                     </IconButton>
//                   </Tooltip>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </motion.header>

//       {/* Messages Grid/List View */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <AnimatePresence mode="wait">
//           {!messages || messages.length === 0 ? (
//             <motion.div
//               key="empty"
//               variants={itemVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="text-center py-16"
//             >
//               <motion.div
//                 animate={{ 
//                   y: [0, -10, 0],
//                 }}
//                 transition={{ 
//                   duration: 2,
//                   repeat: Infinity,
//                   repeatType: "reverse"
//                 }}
//                 className="text-7xl mb-6"
//               >
//                 📭
//               </motion.div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">No messages found</h3>
//               <p className="text-gray-500 mb-6">Try adjusting your search or filter</p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => {
//                   setSearchTerm("");
//                   setSelectedCategory("all");
//                 }}
//                 className="px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
//               >
//                 Clear Filters
//               </motion.button>
//             </motion.div>
//           ) : viewMode === "grid" ? (
//             // Grid View
//             <motion.div
//               key="grid"
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//             >
//               {messages.map((message) => (
//                 <motion.div
//                   key={message?.id || Math.random()}
//                   variants={itemVariants}
//                   whileHover="hover"
//                   whileTap="tap"
//                   custom={gridItemVariants}
//                   onHoverStart={() => setHoveredMessage(message?.id)}
//                   onHoverEnd={() => setHoveredMessage(null)}
//                   className={`relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer group
//                     ${hoveredMessage === message?.id ? 'shadow-xl' : ''}
//                     ${!message?.isRead ? 'ring-2 ring-indigo-300 ring-opacity-50' : ''}
//                   `}
//                   onClick={() => toggleMessageSelection(message?.id)}
//                   layout
//                 >
//                   {/* Priority Badge */}
//                   <div className={`absolute top-3 left-3 z-10 w-2 h-2 rounded-full ${
//                     message?.priority === 'high' ? 'bg-red-500' :
//                     message?.priority === 'medium' ? 'bg-yellow-500' :
//                     message?.priority === 'low' ? 'bg-green-500' : 'bg-gray-500'
//                   }`} />
                  
//                   {/* Header Image Placeholder */}
//                   <div className="h-24 bg-gradient-to-br from-indigo-100 to-purple-100 relative">
//                     {message?.hasImage && (
//                       <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
//                         <Image className="size-8 text-white/50" />
//                       </div>
//                     )}
//                   </div>
                  
//                   <div className="p-4">
//                     {/* Header */}
//                     <div className="flex items-start justify-between mb-3">
//                       <div className="flex items-center gap-2">
//                         <Avatar 
//                           src={message?.avatar} 
//                           className="ring-2 ring-white shadow-md"
//                           sx={{ width: 40, height: 40 }}
//                         >
//                           {!message?.avatar && message?.sender?.charAt(0)}
//                         </Avatar>
//                         <div>
//                           <h3 className="font-semibold text-gray-900 line-clamp-1">
//                             {message?.sender || 'Unknown'}
//                           </h3>
//                           <div className="flex items-center gap-1 text-xs text-gray-500">
//                             <Schedule className="size-3" />
//                             <span>{message?.time || ''}</span>
//                           </div>
//                         </div>
//                       </div>
//                       <motion.button
//                         whileHover={{ scale: 1.2, rotate: message?.isStarred ? 0 : 180 }}
//                         onClick={(e) => toggleStar(message?.id, e)}
//                         className="p-1"
//                       >
//                         {message?.isStarred ? (
//                           <Star className="size-5 text-yellow-500 fill-current" />
//                         ) : (
//                           <StarBorder className="size-5 text-gray-400 group-hover:text-gray-600" />
//                         )}
//                       </motion.button>
//                     </div>

//                     {/* Message Preview */}
//                     <p className="text-sm text-gray-600 line-clamp-2 mb-3 min-h-[40px]">
//                       {message?.message || 'No content'}
//                     </p>

//                     {/* Footer */}
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         {message?.hasAttachment && (
//                           <Tooltip title="Has attachment">
//                             <AttachFile className="size-4 text-gray-400" />
//                           </Tooltip>
//                         )}
//                         {message?.hasImage && (
//                           <Tooltip title="Has image">
//                             <Image className="size-4 text-gray-400" />
//                           </Tooltip>
//                         )}
//                         <Chip 
//                           label={message?.category || 'general'}
//                           size="small"
//                           className="bg-gray-100 text-gray-600 text-xs"
//                         />
//                       </div>
                      
//                       {/* Priority Chip */}
//                       <Chip 
//                         label={message?.priority || 'normal'}
//                         size="small"
//                         className={`${getPriorityColor(message?.priority)} text-xs`}
//                         icon={<span>{getPriorityIcon(message?.priority)}</span>}
//                       />
//                     </div>

//                     {/* Selection Indicator */}
//                     {selectedMessages.includes(message?.id) && (
//                       <motion.div
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         className="absolute top-3 right-3 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg"
//                       >
//                         <Check className="size-4 text-white" />
//                       </motion.div>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           ) : (
//             // List View
//             <motion.div
//               key="list"
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="space-y-3"
//             >
//               {/* List Header */}
//               <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 <div className="col-span-1">
//                   <input
//                     type="checkbox"
//                     checked={selectedMessages.length === messages.length}
//                     onChange={selectAllMessages}
//                     className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
//                   />
//                 </div>
//                 <div className="col-span-1">Priority</div>
//                 <div className="col-span-2">Sender</div>
//                 <div className="col-span-5">Message</div>
//                 <div className="col-span-2">Time</div>
//                 <div className="col-span-1">Actions</div>
//               </div>

//               {messages.map((message) => (
//                 <motion.div
//                   key={message?.id || Math.random()}
//                   variants={itemVariants}
//                   whileHover="hover"
//                   custom={listItemVariants}
//                   onHoverStart={() => setHoveredMessage(message?.id)}
//                   onHoverEnd={() => setHoveredMessage(null)}
//                   className={`relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group
//                     ${!message?.isRead ? 'border-l-4 border-indigo-500' : ''}
//                   `}
//                   onClick={() => toggleMessageSelection(message?.id)}
//                   layout
//                 >
//                   <div className="p-4">
//                     <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
//                       {/* Checkbox */}
//                       <div className="col-span-1 flex items-center">
//                         <input
//                           type="checkbox"
//                           checked={selectedMessages.includes(message?.id)}
//                           onChange={() => {}}
//                           className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
//                           onClick={(e) => e.stopPropagation()}
//                         />
//                       </div>

//                       {/* Priority */}
//                       <div className="col-span-1 flex items-center">
//                         <span className="text-lg">{getPriorityIcon(message?.priority)}</span>
//                       </div>

//                       {/* Avatar & Sender */}
//                       <div className="col-span-2 flex items-center gap-3">
//                         <Avatar src={message?.avatar} sx={{ width: 32, height: 32 }}>
//                           {!message?.avatar && message?.sender?.charAt(0)}
//                         </Avatar>
//                         <span className="font-medium text-gray-900 truncate">
//                           {message?.sender || 'Unknown'}
//                         </span>
//                       </div>

//                       {/* Message */}
//                       <div className="col-span-5">
//                         <p className="text-sm text-gray-600 truncate">
//                           {message?.message || ''}
//                         </p>
//                         <div className="flex items-center gap-2 mt-1 md:hidden">
//                           <Chip 
//                             label={message?.category || 'general'}
//                             size="small"
//                             className="bg-gray-100 text-gray-600 text-xs"
//                           />
//                           {message?.hasAttachment && (
//                             <AttachFile className="size-3 text-gray-400" />
//                           )}
//                         </div>
//                       </div>

//                       {/* Time & Attachments */}
//                       <div className="col-span-2 flex items-center justify-between">
//                         <div className="flex items-center gap-2 text-sm text-gray-500">
//                           <Schedule className="size-4" />
//                           <span className="hidden md:inline">{message?.time || ''}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           {message?.hasAttachment && (
//                             <AttachFile className="size-4 text-gray-400 hidden md:block" />
//                           )}
//                           {!message?.isRead && (
//                             <div className="w-2 h-2 bg-indigo-500 rounded-full" />
//                           )}
//                         </div>
//                       </div>

//                       {/* Actions */}
//                       <div className="col-span-1 flex items-center gap-1 justify-end">
//                         <Tooltip title={message?.isStarred ? "Unstar" : "Star"}>
//                           <IconButton 
//                             size="small"
//                             onClick={(e) => toggleStar(message?.id, e)}
//                             className="opacity-0 group-hover:opacity-100 transition-opacity"
//                           >
//                             {message?.isStarred ? (
//                               <Star className="size-4 text-yellow-500" />
//                             ) : (
//                               <StarBorder className="size-4 text-gray-400" />
//                             )}
//                           </IconButton>
//                         </Tooltip>
                        
//                         <Tooltip title="More options">
//                           <IconButton 
//                             size="small"
//                             className="opacity-0 group-hover:opacity-100 transition-opacity"
//                           >
//                             <MoreVert className="size-4 text-gray-400" />
//                           </IconButton>
//                         </Tooltip>
//                       </div>
//                     </div>

//                     {/* Mobile-only details */}
//                     <div className="mt-2 md:hidden flex items-center justify-between text-sm">
//                       <div className="flex items-center gap-2">
//                         <span className="text-gray-500">{message?.time || ''}</span>
//                         <Chip 
//                           label={message?.priority || 'normal'}
//                           size="small"
//                           className={`${getPriorityColor(message?.priority)} text-xs`}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Pagination */}
//         {pagination.totalPages > 1 && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex flex-wrap items-center justify-center gap-4 mt-8"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => handlePageChange(pagination.page - 1)}
//               disabled={pagination.page === 1}
//               className="px-4 py-2 rounded-xl border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
//             >
//               Previous
//             </motion.button>
            
//             <div className="flex items-center gap-2">
//               {[...Array(Math.min(5, pagination.totalPages))].map((_, i) => {
//                 let pageNum;
//                 if (pagination.totalPages <= 5) {
//                   pageNum = i + 1;
//                 } else if (pagination.page <= 3) {
//                   pageNum = i + 1;
//                 } else if (pagination.page >= pagination.totalPages - 2) {
//                   pageNum = pagination.totalPages - 4 + i;
//                 } else {
//                   pageNum = pagination.page - 2 + i;
//                 }
                
//                 return (
//                   <motion.button
//                     key={pageNum}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={() => handlePageChange(pageNum)}
//                     className={`w-10 h-10 rounded-xl font-medium transition-all ${
//                       pagination.page === pageNum
//                         ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
//                         : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
//                     }`}
//                   >
//                     {pageNum}
//                   </motion.button>
//                 );
//               })}
//             </div>
            
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => handlePageChange(pagination.page + 1)}
//               disabled={pagination.page === pagination.totalPages}
//               className="px-4 py-2 rounded-xl border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
//             >
//               Next
//             </motion.button>
//           </motion.div>
//         )}
        
//         {/* Stats */}
//         {messages.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center mt-4 text-sm text-gray-500"
//           >
//             Showing {messages.length} of {pagination.total} messages
//           </motion.div>
//         )}
//       </main>

//       {/* Floating Action Button */}
//       <motion.button
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         whileHover={{ scale: 1.1, rotate: 5 }}
//         whileTap={{ scale: 0.9 }}
//         className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow z-10"
//         onClick={() => {
//           toast.info('Opening new message composer...');
//           window.location.href = '/63729/892308/new';
//         }}
//       >
//         <Send className="size-6" />
//       </motion.button>
//     </div>
//   );
// };






















// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   Search,
//   Notifications,
//   ViewModule,
//   ViewList,
//   FilterList,
//   Sort,
//   Refresh,
//   MoreVert,
//   Star,
//   StarBorder,
//   AttachFile,
//   Image,
//   Send,
//   Delete,
//   Archive,
//   Markunread,
//   Schedule,
//   Close,
//   Check,
//   Warning,
//   Info,
//   Add,
//   Edit,
//   Save,
//   Cancel,
//   Person,
//   Email,
//   Subject,
//   Category,
//   Flag,
//   Phone,
//   AccessTime,
//   CheckCircle,
//   Error,
//   Help,
//   Timeline,
//   DoneAll,
//   Block,
//   HourglassEmpty,
// } from "@mui/icons-material";
// import { motion, AnimatePresence } from "framer-motion";
// import { Avatar, Badge, IconButton, Chip, Tooltip } from "@mui/material";

// // API base URL - replace with your actual API endpoint
// const API_BASE_URL = "https://hotel-nodejs-oa32.onrender.com";

// // Create axios instance with default config
// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Response interceptor for error handling
// api.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.code === 'ECONNABORTED') {
//       toast.error('Request timeout. Please try again.');
//     } else if (!error.response) {
//       toast.error('Network error. Please check your connection.');
//     }
//     return Promise.reject(error);
//   }
// );

// // Animated Modal Components
// const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message, type = 'warning' }) => {
//   const icons = {
//     warning: <Warning className="text-yellow-500 text-6xl" />,
//     danger: <Error className="text-red-500 text-6xl" />,
//     info: <Info className="text-blue-500 text-6xl" />,
//     success: <CheckCircle className="text-green-500 text-6xl" />,
//   };

//   const colors = {
//     warning: 'from-yellow-500 to-amber-500',
//     danger: 'from-red-500 to-rose-500',
//     info: 'from-blue-500 to-cyan-500',
//     success: 'from-green-500 to-emerald-500',
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.9, y: 20, opacity: 0 }}
//             animate={{ scale: 1, y: 0, opacity: 1 }}
//             exit={{ scale: 0.9, y: 20, opacity: 0 }}
//             transition={{ type: "spring", damping: 25, stiffness: 300 }}
//             className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className={`h-2 bg-gradient-to-r ${colors[type]}`} />
            
//             <div className="p-8 text-center">
//               <motion.div
//                 initial={{ scale: 0, rotate: -180 }}
//                 animate={{ scale: 1, rotate: 0 }}
//                 transition={{ type: "spring", damping: 15, delay: 0.1 }}
//                 className="mb-6"
//               >
//                 {icons[type]}
//               </motion.div>

//               <motion.h3
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-2xl font-bold text-gray-900 mb-3"
//               >
//                 {title}
//               </motion.h3>

//               <motion.p
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-gray-600 mb-8"
//               >
//                 {message}
//               </motion.p>

//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="flex gap-3 justify-center"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={onConfirm}
//                   className={`px-6 py-3 bg-gradient-to-r ${colors[type]} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow`}
//                 >
//                   Confirm
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={onClose}
//                   className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
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

// const SuccessModal = ({ isOpen, onClose, title, message, details }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.9, y: 20, opacity: 0 }}
//             animate={{ scale: 1, y: 0, opacity: 1 }}
//             exit={{ scale: 0.9, y: 20, opacity: 0 }}
//             transition={{ type: "spring", damping: 25, stiffness: 300 }}
//             className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500" />
            
//             <div className="p-8 text-center">
//               <motion.div
//                 initial={{ scale: 0, rotate: -180 }}
//                 animate={{ scale: 1, rotate: 0 }}
//                 transition={{ type: "spring", damping: 15, delay: 0.1 }}
//                 className="mb-6"
//               >
//                 <motion.div
//                   animate={{ 
//                     scale: [1, 1.2, 1],
//                     rotate: [0, 10, -10, 0]
//                   }}
//                   transition={{ duration: 0.5, delay: 0.3 }}
//                 >
//                   <CheckCircle className="text-green-500 text-6xl" />
//                 </motion.div>
//               </motion.div>

//               <motion.h3
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-2xl font-bold text-gray-900 mb-3"
//               >
//                 {title}
//               </motion.h3>

//               <motion.p
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-gray-600 mb-6"
//               >
//                 {message}
//               </motion.p>

//               {details && (
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                   className="bg-green-50 rounded-xl p-4 mb-6 text-left"
//                 >
//                   {Object.entries(details).map(([key, value]) => (
//                     <div key={key} className="flex items-center gap-2 text-sm mb-2 last:mb-0">
//                       <span className="font-medium text-gray-700 capitalize">{key}:</span>
//                       <span className="text-gray-600">{value}</span>
//                     </div>
//                   ))}
//                 </motion.div>
//               )}

//               <motion.button
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={onClose}
//                 className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
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

// const ErrorModal = ({ isOpen, onClose, title, message, error }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.9, y: 20, opacity: 0 }}
//             animate={{ scale: 1, y: 0, opacity: 1 }}
//             exit={{ scale: 0.9, y: 20, opacity: 0 }}
//             transition={{ type: "spring", damping: 25, stiffness: 300 }}
//             className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="h-2 bg-gradient-to-r from-red-500 to-rose-500" />
            
//             <div className="p-8 text-center">
//               <motion.div
//                 initial={{ scale: 0, rotate: -180 }}
//                 animate={{ scale: 1, rotate: 0 }}
//                 transition={{ type: "spring", damping: 15, delay: 0.1 }}
//                 className="mb-6"
//               >
//                 <motion.div
//                   animate={{ 
//                     x: [-5, 5, -5, 5, 0],
//                     y: [0, -5, 5, -5, 0]
//                   }}
//                   transition={{ duration: 0.5, delay: 0.3 }}
//                 >
//                   <Error className="text-red-500 text-6xl" />
//                 </motion.div>
//               </motion.div>

//               <motion.h3
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-2xl font-bold text-gray-900 mb-3"
//               >
//                 {title}
//               </motion.h3>

//               <motion.p
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-gray-600 mb-6"
//               >
//                 {message}
//               </motion.p>

//               {error && (
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                   className="bg-red-50 rounded-xl p-4 mb-6 text-left"
//                 >
//                   <p className="text-sm text-red-700 font-mono">{error}</p>
//                 </motion.div>
//               )}

//               <motion.button
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={onClose}
//                 className="px-8 py-3 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
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

// const CreateEditModal = ({ isOpen, onClose, onSubmit, formData, setFormData, formErrors, setFormErrors, mode = 'create' }) => {
//   const statusOptions = [
//     { value: 'pending', label: 'Pending', icon: '⏳', color: 'yellow' },
//     { value: 'In_Progress', label: 'In Progress', icon: '⚙️', color: 'blue' },
//     { value: 'Resolved', label: 'Resolved', icon: '✅', color: 'green' },
//     { value: 'Rejected', label: 'Rejected', icon: '❌', color: 'red' },
//   ];

//   const validateField = (name, value) => {
//     switch(name) {
//       case 'email':
//         return !value || /\S+@\S+\.\S+/.test(value) ? '' : 'Please enter a valid email';
//       case 'phone':
//         return !value || /^[\d\s\+\-\(\)]{10,}$/.test(value) ? '' : 'Please enter a valid phone number';
//       default:
//         return !value ? `${name} is required` : '';
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
    
//     // Validate field
//     const error = validateField(name, value);
//     setFormErrors(prev => ({ ...prev, [name]: error }));
//   };

//   const handleSubmit = () => {
//     // Validate all fields
//     const errors = {};
//     Object.keys(formData).forEach(key => {
//       const error = validateField(key, formData[key]);
//       if (error) errors[key] = error;
//     });
    
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       toast.error('Please fix the errors in the form');
//       return;
//     }
    
//     onSubmit();
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.9, y: 20, opacity: 0 }}
//             animate={{ scale: 1, y: 0, opacity: 1 }}
//             exit={{ scale: 0.9, y: 20, opacity: 0 }}
//             transition={{ type: "spring", damping: 25, stiffness: 300 }}
//             className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className={`h-2 bg-gradient-to-r ${mode === 'create' ? 'from-indigo-500 to-purple-500' : 'from-blue-500 to-cyan-500'}`} />
            
//             <div className="p-8">
//               <motion.div
//                 initial={{ y: -20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 className="flex items-center gap-3 mb-8"
//               >
//                 <motion.div
//                   whileHover={{ rotate: 5 }}
//                   className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${mode === 'create' ? 'from-indigo-500 to-purple-500' : 'from-blue-500 to-cyan-500'} flex items-center justify-center shadow-lg`}
//                 >
//                   {mode === 'create' ? <Add className="text-white text-2xl" /> : <Edit className="text-white text-2xl" />}
//                 </motion.div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900">
//                     {mode === 'create' ? 'Create New Message' : 'Edit Message'}
//                   </h2>
//                   <p className="text-gray-500 text-sm">
//                     {mode === 'create' ? 'Fill in the details to send a new message' : 'Update the message details below'}
//                   </p>
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.1 }}
//                 className="space-y-6"
//               >
//                 {/* Name Field */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <Person className="inline mr-2 text-gray-400" /> Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name || ''}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 rounded-xl text-black border ${
//                       formErrors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-indigo-300'
//                     } focus:ring focus:ring-opacity-50 ${
//                       formErrors.name ? 'focus:ring-red-200' : 'focus:ring-indigo-200'
//                     } transition-all bg-white/50 backdrop-blur-sm`}
//                     placeholder="Enter your full name"
//                   />
//                   {formErrors.name && (
//                     <motion.p
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="text-red-500 text-xs mt-1"
//                     >
//                       {formErrors.name}
//                     </motion.p>
//                   )}
//                 </div>

//                 {/* Email Field */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <Email className="inline mr-2 text-gray-400" /> Email *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email || ''}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 text-black rounded-xl border ${
//                       formErrors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-indigo-300'
//                     } focus:ring focus:ring-opacity-50 ${
//                       formErrors.email ? 'focus:ring-red-200' : 'focus:ring-indigo-200'
//                     } transition-all bg-white/50 backdrop-blur-sm`}
//                     placeholder="Enter your email address"
//                   />
//                   {formErrors.email && (
//                     <motion.p
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="text-red-500 text-xs mt-1"
//                     >
//                       {formErrors.email}
//                     </motion.p>
//                   )}
//                 </div>

//                 {/* Phone Field */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <Phone className="inline mr-2 text-gray-400" /> Phone *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone || ''}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 text-black rounded-xl border ${
//                       formErrors.phone ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-indigo-300'
//                     } focus:ring focus:ring-opacity-50 ${
//                       formErrors.phone ? 'focus:ring-red-200' : 'focus:ring-indigo-200'
//                     } transition-all bg-white/50 backdrop-blur-sm`}
//                     placeholder="Enter your phone number"
//                   />
//                   {formErrors.phone && (
//                     <motion.p
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="text-red-500 text-xs mt-1"
//                     >
//                       {formErrors.phone}
//                     </motion.p>
//                   )}
//                 </div>

//                 {/* Subject Field */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <Subject className="inline mr-2 text-gray-400" /> Subject
//                   </label>
//                   <input
//                     type="text"
//                     name="subject"
//                     value={formData.subject || 'Hotel Reservation'}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl text-black border border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all bg-white/50 backdrop-blur-sm"
//                     placeholder="Enter subject"
//                   />
//                 </div>

//                 {/* Message Field */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <Send className="inline mr-2 text-gray-400" /> Message *
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message || ''}
//                     onChange={handleChange}
//                     rows="5"
//                     className={`w-full px-4 py-3 rounded-xl text-black border ${
//                       formErrors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-indigo-300'
//                     } focus:ring focus:ring-opacity-50 ${
//                       formErrors.message ? 'focus:ring-red-200' : 'focus:ring-indigo-200'
//                     } transition-all bg-white/50 backdrop-blur-sm resize-none`}
//                     placeholder="Type your message here..."
//                   />
//                   {formErrors.message && (
//                     <motion.p
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="text-red-500 text-xs mt-1"
//                     >
//                       {formErrors.message}
//                     </motion.p>
//                   )}
//                 </div>

//                 {/* Status Field (only for edit mode) */}
//                 {mode === 'edit' && (
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       <Timeline className="inline mr-2 text-gray-400" /> Status
//                     </label>
//                     <select
//                       name="status"
//                       value={formData.status || 'pending'}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-xl border text-black border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all bg-white/50 backdrop-blur-sm"
//                     >
//                       {statusOptions.map(option => (
//                         <option key={option.value} value={option.value}>
//                           {option.icon} {option.label}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 )}
//               </motion.div>

//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="flex gap-3 justify-end mt-8"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={onClose}
//                   className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
//                 >
//                   Cancel
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={handleSubmit}
//                   className={`px-6 py-3 bg-gradient-to-r ${
//                     mode === 'create' ? 'from-indigo-500 to-purple-500' : 'from-blue-500 to-cyan-500'
//                   } text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow`}
//                 >
//                   {mode === 'create' ? 'Create Message' : 'Update Message'}
//                 </motion.button>
//               </motion.div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// const ViewModal = ({ isOpen, onClose, message, onEdit, onDelete }) => {
//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'pending': return 'bg-yellow-100 text-yellow-600 border-yellow-200';
//       case 'In_Progress': return 'bg-blue-100 text-blue-600 border-blue-200';
//       case 'Resolved': return 'bg-green-100 text-green-600 border-green-200';
//       case 'Rejected': return 'bg-red-100 text-red-600 border-red-200';
//       default: return 'bg-gray-100 text-gray-600 border-gray-200';
//     }
//   };

//   const getStatusIcon = (status) => {
//     switch(status) {
//       case 'pending': return <HourglassEmpty className="text-yellow-500" />;
//       case 'In_Progress': return <Timeline className="text-blue-500" />;
//       case 'Resolved': return <CheckCircle className="text-green-500" />;
//       case 'Rejected': return <Block className="text-red-500" />;
//       default: return <Help className="text-gray-500" />;
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && message && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.9, y: 20, opacity: 0 }}
//             animate={{ scale: 1, y: 0, opacity: 1 }}
//             exit={{ scale: 0.9, y: 20, opacity: 0 }}
//             transition={{ type: "spring", damping: 25, stiffness: 300 }}
//             className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500" />
            
//             <div className="p-8">
//               <motion.div
//                 initial={{ y: -20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 className="flex items-center justify-between mb-8"
//               >
//                 <div className="flex items-center gap-3">
//                   <motion.div
//                     whileHover={{ rotate: 5 }}
//                     className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
//                   >
//                     <Email className="text-white text-2xl" />
//                   </motion.div>
//                   <div>
//                     <h2 className="text-2xl font-bold text-gray-900">Message Details</h2>
//                     <p className="text-gray-500 text-sm">Viewing message information</p>
//                   </div>
//                 </div>
                
//                 <Chip
//                   icon={getStatusIcon(message.status)}
//                   label={message.status?.replace('_', ' ') || 'pending'}
//                   className={`${getStatusColor(message.status)} font-medium px-3 py-1`}
//                 />
//               </motion.div>

//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.1 }}
//                 className="space-y-6"
//               >
//                 {/* Sender Info */}
//                 <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
//                   <h3 className="text-sm font-medium text-gray-500 mb-4">Sender Information</h3>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <p className="text-xs text-gray-400 mb-1">Name</p>
//                       <p className="text-gray-900 font-medium flex items-center gap-2">
//                         <Person className="text-gray-400" /> {message.name}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-400 mb-1">Email</p>
//                       <p className="text-gray-900 font-medium flex items-center gap-2">
//                         <Email className="text-gray-400" /> {message.email}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-400 mb-1">Phone</p>
//                       <p className="text-gray-900 font-medium flex items-center gap-2">
//                         <Phone className="text-gray-400" /> {message.phone}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-400 mb-1">Subject</p>
//                       <p className="text-gray-900 font-medium flex items-center gap-2">
//                         <Subject className="text-gray-400" /> {message.subject || 'Hotel Reservation'}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Message Content */}
//                 <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
//                   <h3 className="text-sm font-medium text-gray-500 mb-4">Message Content</h3>
//                   <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
//                     {message.message}
//                   </p>
//                 </div>

//                 {/* Timestamps */}
//                 <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
//                   <h3 className="text-sm font-medium text-gray-500 mb-4">Timeline</h3>
//                   <div className="space-y-3">
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
//                         <AccessTime className="text-indigo-500 text-sm" />
//                       </div>
//                       <div>
//                         <p className="text-xs text-gray-400">Created At</p>
//                         <p className="text-sm text-gray-900">
//                           {new Date(message.createdAt).toLocaleString()}
//                         </p>
//                       </div>
//                     </div>
//                     {message.sentAt && (
//                       <div className="flex items-center gap-3">
//                         <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                           <Send className="text-green-500 text-sm" />
//                         </div>
//                         <div>
//                           <p className="text-xs text-gray-400">Sent At</p>
//                           <p className="text-sm text-gray-900">
//                             {new Date(message.sentAt).toLocaleString()}
//                           </p>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Error (if any) */}
//                 {message.error && (
//                   <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
//                     <h3 className="text-sm font-medium text-red-500 mb-2">Error Details</h3>
//                     <p className="text-sm text-red-600">{message.error}</p>
//                   </div>
//                 )}
//               </motion.div>

//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="flex gap-3 justify-end mt-8"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => {
//                     onClose();
//                     onEdit(message);
//                   }}
//                   className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
//                 >
//                   <Edit className="text-sm" /> Edit
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => {
//                     onClose();
//                     onDelete(message);
//                   }}
//                   className="px-6 py-3 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
//                 >
//                   <Delete className="text-sm" /> Delete
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={onClose}
//                   className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
//                 >
//                   Close
//                 </motion.button>
//               </motion.div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export const MessageManagements = () => {
//   const [viewMode, setViewMode] = useState("grid");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [hoveredMessage, setHoveredMessage] = useState(null);
//   const [selectedMessages, setSelectedMessages] = useState([]);
//   const [isRefreshing, setIsRefreshing] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [sortBy, setSortBy] = useState("newest");
//   const [filterOpen, setFilterOpen] = useState(false);
  
//   // Modal states
//   const [createModalOpen, setCreateModalOpen] = useState(false);
//   const [editModalOpen, setEditModalOpen] = useState(false);
//   const [viewModalOpen, setViewModalOpen] = useState(false);
//   const [confirmModalOpen, setConfirmModalOpen] = useState(false);
//   const [successModalOpen, setSuccessModalOpen] = useState(false);
//   const [errorModalOpen, setErrorModalOpen] = useState(false);
//   const [currentMessage, setCurrentMessage] = useState(null);
//   const [modalConfig, setModalConfig] = useState({
//     title: '',
//     message: '',
//     type: 'warning',
//     details: null,
//     error: null
//   });
  
//   // Form state for create/edit
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: 'Hotel Reservation',
//     message: '',
//     status: 'pending',
//   });
  
//   // Form validation errors
//   const [formErrors, setFormErrors] = useState({});
  
//   const [pagination, setPagination] = useState({
//     page: 1,
//     limit: 20,
//     total: 0,
//     totalPages: 0
//   });

//   // Fetch messages from API
//   const fetchMessages = async (page = 1, category = selectedCategory, search = searchTerm, sort = sortBy) => {
//     setIsLoading(true);
//     setError(null);
    
//     try {
//       // Build query params
//       const params = new URLSearchParams({
//         page,
//         limit: pagination.limit,
//         sort: sortBy,
//       });
      
//       if (category !== 'all') {
//         if (category === 'unread') {
//           params.append('isRead', 'false');
//         } else if (category === 'starred') {
//           params.append('isStarred', 'true');
//         } else {
//           params.append('status', category);
//         }
//       }
      
//       if (search) {
//         params.append('search', search);
//       }
      
//       const response = await api.get(`/63729/892308?${params.toString()}`);
      
//       // Handle different response structures
//       const data = response.data;
//       let messagesData = [];
//       let total = 0;
//       let totalPages = 0;
      
//       if (Array.isArray(data)) {
//         messagesData = data;
//         total = data.length;
//         totalPages = Math.ceil(total / pagination.limit);
//       } else if (data.data && Array.isArray(data.data)) {
//         messagesData = data.data;
//         total = data.total || data.data.length;
//         totalPages = data.totalPages || Math.ceil(total / pagination.limit);
//       } else if (data.messages && Array.isArray(data.messages)) {
//         messagesData = data.messages;
//         total = data.total || data.messages.length;
//         totalPages = data.totalPages || Math.ceil(total / pagination.limit);
//       }
      
//       setMessages(messagesData);
//       setPagination({
//         page: data.page || page,
//         limit: data.limit || pagination.limit,
//         total: total,
//         totalPages: totalPages
//       });
      
//       showSuccessModal('Messages Loaded', 'Successfully loaded messages from the server', {
//         'Total Messages': total,
//         'Page': page,
//         'Status': 'Success'
//       });
//     } catch (error) {
//       console.error("Error fetching messages:", error);
//       setError(error.response?.data?.message || error.message);
//       setMessages([]);
      
//       showErrorModal(
//         'Failed to Load Messages',
//         'There was an error loading your messages. Please try again.',
//         error.response?.data?.message || error.message
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Create new message
//   const createMessage = async (messageData) => {
//     try {
//       const response = await api.post('/63729/892308', messageData);
      
//       // Add the new message to the list
//       const newMessage = response.data;
//       setMessages(prevMessages => [newMessage, ...prevMessages]);
      
//       // Update pagination total
//       setPagination(prev => ({
//         ...prev,
//         total: prev.total + 1,
//         totalPages: Math.ceil((prev.total + 1) / prev.limit)
//       }));
      
//       showSuccessModal('Message Created!', 'Your message has been sent successfully.', {
//         'Name': newMessage.name,
//         'Email': newMessage.email,
//         'Subject': newMessage.subject,
//         'Status': newMessage.status
//       });
      
//       return newMessage;
//     } catch (error) {
//       console.error("Error creating message:", error);
      
//       showErrorModal(
//         'Failed to Create Message',
//         'There was an error creating your message. Please try again.',
//         error.response?.data?.message || error.message
//       );
      
//       throw error;
//     }
//   };

//   // Fetch message by ID
//   const fetchMessageById = async (id) => {
//     try {
//       const response = await api.get(`/63729/892308/${id}`);
//       return response.data;
//     } catch (error) {
//       console.error(`Error fetching message ${id}:`, error);
      
//       showErrorModal(
//         'Failed to Load Message',
//         'There was an error loading the message details.',
//         error.response?.data?.message || error.message
//       );
      
//       throw error;
//     }
//   };

//   // Update message
//   const updateMessage = async (id, updates) => {
//     try {
//       const response = await api.put(`/63729/892308/${id}`, updates);
      
//       setMessages(prevMessages =>
//         prevMessages.map(msg =>
//           msg.id === id ? { ...msg, ...response.data } : msg
//         )
//       );
      
//       showSuccessModal('Message Updated!', 'The message has been updated successfully.', {
//         'Name': response.data.name,
//         'Status': response.data.status,
//         'Updated': 'Success'
//       });
      
//       return response.data;
//     } catch (error) {
//       console.error(`Error updating message ${id}:`, error);
      
//       showErrorModal(
//         'Failed to Update Message',
//         'There was an error updating the message.',
//         error.response?.data?.message || error.message
//       );
      
//       throw error;
//     }
//   };

//   // Patch message
//   const patchMessage = async (id, updates) => {
//     try {
//       const response = await api.patch(`/63729/892308/${id}`, updates);
      
//       setMessages(prevMessages =>
//         prevMessages.map(msg =>
//           msg.id === id ? { ...msg, ...response.data } : msg
//         )
//       );
      
//       return response.data;
//     } catch (error) {
//       console.error(`Error updating message ${id}:`, error);
//       throw error;
//     }
//   };

//   // Bulk update messages
//   const bulkUpdateMessages = async (ids, updates, action = 'updated') => {
//     if (ids.length === 0) {
//       showErrorModal('No Messages Selected', 'Please select at least one message to perform this action.');
//       return;
//     }
    
//     try {
//       const response = await api.patch('/63729/892308/bulk', { ids, updates });
      
//       setMessages(prevMessages =>
//         prevMessages.map(msg =>
//           ids.includes(msg.id) ? { ...msg, ...updates } : msg
//         )
//       );
      
//       showSuccessModal(`${ids.length} Messages ${action}!`, `Successfully ${action} ${ids.length} messages.`);
      
//       return response.data;
//     } catch (error) {
//       console.error('Error bulk updating messages:', error);
      
//       showErrorModal(
//         `Failed to ${action} Messages`,
//         `There was an error ${action.toLowerCase()} the messages.`,
//         error.response?.data?.message || error.message
//       );
      
//       throw error;
//     }
//   };

//   // Delete message
//   const deleteMessage = async (id) => {
//     try {
//       await api.delete(`/63729/892308/${id}`);
      
//       setMessages(prevMessages => prevMessages.filter(msg => msg.id !== id));
//       setSelectedMessages(prev => prev.filter(msgId => msgId !== id));
      
//       // Update pagination total
//       setPagination(prev => ({
//         ...prev,
//         total: prev.total - 1,
//         totalPages: Math.ceil((prev.total - 1) / prev.limit)
//       }));
      
//       showSuccessModal('Message Deleted!', 'The message has been deleted successfully.');
      
//       return true;
//     } catch (error) {
//       console.error(`Error deleting message ${id}:`, error);
      
//       showErrorModal(
//         'Failed to Delete Message',
//         'There was an error deleting the message.',
//         error.response?.data?.message || error.message
//       );
      
//       throw error;
//     }
//   };

//   // Bulk delete messages
//   const bulkDeleteMessages = async (ids) => {
//     if (ids.length === 0) {
//       showErrorModal('No Messages Selected', 'Please select at least one message to delete.');
//       return;
//     }
    
//     try {
//       await api.delete('/63729/892308/bulk', { data: { ids } });
      
//       setMessages(prevMessages => prevMessages.filter(msg => !ids.includes(msg.id)));
//       setSelectedMessages([]);
      
//       // Update pagination total
//       setPagination(prev => ({
//         ...prev,
//         total: prev.total - ids.length,
//         totalPages: Math.ceil((prev.total - ids.length) / prev.limit)
//       }));
      
//       showSuccessModal(`${ids.length} Messages Deleted!`, `Successfully deleted ${ids.length} messages.`);
      
//       return true;
//     } catch (error) {
//       console.error('Error bulk deleting messages:', error);
      
//       showErrorModal(
//         'Failed to Delete Messages',
//         'There was an error deleting the messages.',
//         error.response?.data?.message || error.message
//       );
      
//       throw error;
//     }
//   };

//   // Modal helper functions
//   const showConfirmModal = (title, message, type = 'warning', onConfirm) => {
//     setModalConfig({ title, message, type, onConfirm });
//     setConfirmModalOpen(true);
//   };

//   const showSuccessModal = (title, message, details = null) => {
//     setModalConfig({ title, message, details });
//     setSuccessModalOpen(true);
//   };

//   const showErrorModal = (title, message, error = null) => {
//     setModalConfig({ title, message, error });
//     setErrorModalOpen(true);
//   };

//   // Load messages on mount
//   useEffect(() => {
//     fetchMessages(1, selectedCategory, searchTerm, sortBy);
//   }, []);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.05,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//       },
//     },
//     exit: {
//       y: -20,
//       opacity: 0,
//       transition: { duration: 0.2 },
//     },
//   };

//   const gridItemVariants = {
//     hover: {
//       scale: 1.02,
//       y: -4,
//       boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//       transition: { duration: 0.2 },
//     },
//     tap: { scale: 0.98 },
//   };

//   // Calculate categories based on schema
//   const categories = [
//     { id: "all", label: "All Messages", count: pagination.total || 0, color: "from-blue-500 to-cyan-500", icon: "📬" },
//     { id: "pending", label: "Pending", count: messages?.filter(m => m?.status === 'pending')?.length || 0, color: "from-yellow-500 to-amber-500", icon: "⏳" },
//     { id: "In_Progress", label: "In Progress", count: messages?.filter(m => m?.status === 'In_Progress')?.length || 0, color: "from-blue-500 to-indigo-500", icon: "⚙️" },
//     { id: "Resolved", label: "Resolved", count: messages?.filter(m => m?.status === 'Resolved')?.length || 0, color: "from-green-500 to-emerald-500", icon: "✅" },
//     { id: "Rejected", label: "Rejected", count: messages?.filter(m => m?.status === 'Rejected')?.length || 0, color: "from-red-500 to-rose-500", icon: "❌" },
//   ];

//   const sortOptions = [
//     { value: "newest", label: "Newest First", icon: "🆕" },
//     { value: "oldest", label: "Oldest First", icon: "📅" },
//     { value: "status", label: "Status", icon: "🏷️" },
//     { value: "name", label: "Name", icon: "👤" },
//   ];

//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'pending': return 'bg-yellow-100 text-yellow-600 border-yellow-200';
//       case 'In_Progress': return 'bg-blue-100 text-blue-600 border-blue-200';
//       case 'Resolved': return 'bg-green-100 text-green-600 border-green-200';
//       case 'Rejected': return 'bg-red-100 text-red-600 border-red-200';
//       default: return 'bg-gray-100 text-gray-600 border-gray-200';
//     }
//   };

//   const getStatusIcon = (status) => {
//     switch(status) {
//       case 'pending': return '⏳';
//       case 'In_Progress': return '⚙️';
//       case 'Resolved': return '✅';
//       case 'Rejected': return '❌';
//       default: return '📝';
//     }
//   };

//   const toggleStar = async (id, e) => {
//     e?.stopPropagation();
//     const message = messages.find(m => m.id === id);
//     if (!message) return;
    
//     try {
//       await patchMessage(id, { isStarred: !message.isStarred });
//     } catch (error) {
//       // Error handled in patchMessage
//     }
//   };

//   const handleRefresh = () => {
//     setIsRefreshing(true);
//     fetchMessages(pagination.page, selectedCategory, searchTerm, sortBy)
//       .finally(() => setIsRefreshing(false));
//   };

//   const toggleMessageSelection = (id, e) => {
//     e?.stopPropagation();
//     setSelectedMessages(prev => 
//       prev.includes(id) ? prev.filter(msgId => msgId !== id) : [...prev, id]
//     );
//   };

//   const selectAllMessages = () => {
//     if (selectedMessages.length === messages.length) {
//       setSelectedMessages([]);
//     } else {
//       setSelectedMessages(messages.map(msg => msg.id));
//     }
//   };

//   const handleBulkDelete = () => {
//     if (selectedMessages.length === 0) {
//       showErrorModal('No Messages Selected', 'Please select at least one message to delete.');
//       return;
//     }
    
//     showConfirmModal(
//       'Delete Messages',
//       `Are you sure you want to delete ${selectedMessages.length} message${selectedMessages.length > 1 ? 's' : ''}? This action cannot be undone.`,
//       'danger',
//       async () => {
//         await bulkDeleteMessages(selectedMessages);
//         setConfirmModalOpen(false);
//       }
//     );
//   };

//   const handleBulkStatusUpdate = async (status) => {
//     if (selectedMessages.length === 0) {
//       showErrorModal('No Messages Selected', 'Please select at least one message to update.');
//       return;
//     }
    
//     showConfirmModal(
//       'Update Status',
//       `Are you sure you want to mark ${selectedMessages.length} message${selectedMessages.length > 1 ? 's' : ''} as ${status}?`,
//       'info',
//       async () => {
//         await bulkUpdateMessages(selectedMessages, { status }, `marked as ${status}`);
//         setConfirmModalOpen(false);
//       }
//     );
//   };

//   const handleDeleteMessage = (message) => {
//     showConfirmModal(
//       'Delete Message',
//       `Are you sure you want to delete the message from "${message.name}"? This action cannot be undone.`,
//       'danger',
//       async () => {
//         await deleteMessage(message.id);
//         setConfirmModalOpen(false);
//       }
//     );
//   };

//   const handleCreateSubmit = async () => {
//     try {
//       const newMessage = await createMessage(formData);
//       setCreateModalOpen(false);
//       resetForm();
//     } catch (error) {
//       // Error handled in createMessage
//     }
//   };

//   const handleEditSubmit = async () => {
//     try {
//       await updateMessage(currentMessage.id, formData);
//       setEditModalOpen(false);
//       setCurrentMessage(null);
//       resetForm();
//     } catch (error) {
//       // Error handled in updateMessage
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       subject: 'Hotel Reservation',
//       message: '',
//       status: 'pending',
//     });
//     setFormErrors({});
//   };

//   const handleOpenCreate = () => {
//     resetForm();
//     setCreateModalOpen(true);
//   };

//   const handleOpenEdit = async (message) => {
//     try {
//       const fullMessage = await fetchMessageById(message.id);
//       setCurrentMessage(fullMessage);
//       setFormData({
//         name: fullMessage.name || '',
//         email: fullMessage.email || '',
//         phone: fullMessage.phone || '',
//         subject: fullMessage.subject || 'Hotel Reservation',
//         message: fullMessage.message || '',
//         status: fullMessage.status || 'pending',
//       });
//       setEditModalOpen(true);
//     } catch (error) {
//       // Error handled in fetchMessageById
//     }
//   };

//   const handleOpenView = async (message) => {
//     try {
//       const fullMessage = await fetchMessageById(message.id);
//       setCurrentMessage(fullMessage);
//       setViewModalOpen(true);
//     } catch (error) {
//       // Error handled in fetchMessageById
//     }
//   };

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= pagination.totalPages) {
//       fetchMessages(newPage, selectedCategory, searchTerm, sortBy);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   // Show loading state
//   if (isLoading && messages.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
//         <div className="text-center">
//           <motion.div
//             animate={{ 
//               rotate: 360,
//               scale: [1, 1.1, 1],
//             }}
//             transition={{ 
//               rotate: { duration: 2, repeat: Infinity, ease: "linear" },
//               scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
//             }}
//             className="w-20 h-20 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto mb-6"
//           />
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="text-2xl font-bold text-gray-800 mb-2"
//           >
//             Loading Messages
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-gray-500"
//           >
//             Please wait while we fetch your messages...
//           </motion.p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
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
//         theme="light"
//       />
      
//       {/* Modals */}
//       <ConfirmModal
//         isOpen={confirmModalOpen}
//         onClose={() => setConfirmModalOpen(false)}
//         onConfirm={modalConfig.onConfirm}
//         title={modalConfig.title}
//         message={modalConfig.message}
//         type={modalConfig.type}
//       />

//       <SuccessModal
//         isOpen={successModalOpen}
//         onClose={() => setSuccessModalOpen(false)}
//         title={modalConfig.title}
//         message={modalConfig.message}
//         details={modalConfig.details}
//       />

//       <ErrorModal
//         isOpen={errorModalOpen}
//         onClose={() => setErrorModalOpen(false)}
//         title={modalConfig.title}
//         message={modalConfig.message}
//         error={modalConfig.error}
//       />

//       <CreateEditModal
//         isOpen={createModalOpen}
//         onClose={() => setCreateModalOpen(false)}
//         onSubmit={handleCreateSubmit}
//         formData={formData}
//         setFormData={setFormData}
//         formErrors={formErrors}
//         setFormErrors={setFormErrors}
//         mode="create"
//       />

//       <CreateEditModal
//         isOpen={editModalOpen}
//         onClose={() => setEditModalOpen(false)}
//         onSubmit={handleEditSubmit}
//         formData={formData}
//         setFormData={setFormData}
//         formErrors={formErrors}
//         setFormErrors={setFormErrors}
//         mode="edit"
//       />

//       <ViewModal
//         isOpen={viewModalOpen}
//         onClose={() => setViewModalOpen(false)}
//         message={currentMessage}
//         onEdit={handleOpenEdit}
//         onDelete={handleDeleteMessage}
//       />

//       {/* Header Section */}
//       <motion.header 
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           {/* Top Bar */}
//           <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
//             <motion.div 
//               initial={{ x: -20 }}
//               animate={{ x: 0 }}
//               className="flex items-center gap-3"
//             >
//               <motion.div
//                 whileHover={{ rotate: 5, scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg cursor-pointer"
//                 onClick={() => window.location.reload()}
//               >
//                 <Send className="size-6 text-white" />
//               </motion.div>
//               <div>
//                 <motion.h1 
//                   initial={{ x: -20 }}
//                   animate={{ x: 0 }}
//                   className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
//                 >
//                   Message Center
//                 </motion.h1>
//                 <motion.p 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                   className="text-xs text-gray-500"
//                 >
//                   Manage your conversations
//                 </motion.p>
//               </div>
//             </motion.div>

//             <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
//               {/* Search Bar */}
//               <motion.div 
//                 whileHover={{ scale: 1.02 }}
//                 className="relative flex-1"
//               >
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-4" />
//                 <input
//                   type="text"
//                   placeholder="Search messages..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10 pr-4 py-2.5 w-full sm:w-80 rounded-xl border border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all bg-white/50 backdrop-blur-sm"
//                 />
//                 {searchTerm && (
//                   <motion.button
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     exit={{ scale: 0 }}
//                     onClick={() => setSearchTerm("")}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2"
//                   >
//                     <Close className="size-4 text-gray-400 hover:text-gray-600" />
//                   </motion.button>
//                 )}
//               </motion.div>

//               <div className="flex items-center gap-2">
//                 {/* Create Button */}
//                 <Tooltip title="Create New Message">
//                   <motion.button
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={handleOpenCreate}
//                     className="p-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white shadow-lg hover:shadow-xl transition-shadow"
//                   >
//                     <Add className="size-5" />
//                   </motion.button>
//                 </Tooltip>

//                 {/* Sort Dropdown */}
//                 <div className="relative">
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={() => setFilterOpen(!filterOpen)}
//                     className="p-2.5 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 transition-colors"
//                   >
//                     <Sort className="size-5 text-gray-600" />
//                   </motion.button>
                  
//                   <AnimatePresence>
//                     {filterOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                         transition={{ type: "spring", damping: 20 }}
//                         className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-20"
//                       >
//                         {sortOptions.map((option) => (
//                           <motion.button
//                             key={option.value}
//                             whileHover={{ x: 4, backgroundColor: '#f5f3ff' }}
//                             onClick={() => {
//                               setSortBy(option.value);
//                               setFilterOpen(false);
//                             }}
//                             className={`w-full px-4 py-2 text-left flex items-center gap-2 transition-colors ${
//                               sortBy === option.value ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700'
//                             }`}
//                           >
//                             <span>{option.icon}</span>
//                             <span>{option.label}</span>
//                           </motion.button>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* View Toggle */}
//                 <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-gray-200">
//                   <Tooltip title="Grid View">
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       onClick={() => setViewMode("grid")}
//                       className={`p-2 rounded-lg transition-all ${
//                         viewMode === "grid" 
//                           ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md" 
//                           : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
//                       }`}
//                     >
//                       <ViewModule className="size-5" />
//                     </motion.button>
//                   </Tooltip>
//                   <Tooltip title="List View">
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       onClick={() => setViewMode("list")}
//                       className={`p-2 rounded-lg transition-all ${
//                         viewMode === "list" 
//                           ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md" 
//                           : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
//                       }`}
//                     >
//                       <ViewList className="size-5" />
//                     </motion.button>
//                   </Tooltip>
//                 </div>

//                 {/* Refresh Button */}
//                 <Tooltip title="Refresh">
//                   <motion.div
//                     animate={{ rotate: isRefreshing ? 360 : 0 }}
//                     transition={{ duration: 1, repeat: isRefreshing ? Infinity : 0, ease: "linear" }}
//                   >
//                     <IconButton 
//                       onClick={handleRefresh} 
//                       className="bg-white border border-gray-200 hover:border-indigo-300"
//                     >
//                       <Refresh className="size-5 text-gray-600" />
//                     </IconButton>
//                   </motion.div>
//                 </Tooltip>
//               </div>
//             </div>
//           </div>

//           {/* Categories */}
//           <motion.div 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="flex flex-wrap gap-2 mt-4"
//           >
//             {categories.map((category, index) => (
//               <motion.button
//                 key={category.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setSelectedCategory(category.id)}
//                 className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all
//                   ${selectedCategory === category.id 
//                     ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
//                     : 'bg-white/70 backdrop-blur-sm text-gray-600 hover:bg-white border border-gray-200'
//                   }`}
//               >
//                 <span className="mr-2">{category.icon}</span>
//                 {category.label}
//                 <motion.span 
//                   key={category.count}
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   className={`ml-2 px-2 py-0.5 rounded-lg text-xs
//                     ${selectedCategory === category.id 
//                       ? 'bg-white/20 text-white' 
//                       : 'bg-gray-100 text-gray-600'
//                     }`}
//                 >
//                   {category.count}
//                 </motion.span>
//               </motion.button>
//             ))}
//           </motion.div>

//           {/* Selected Actions Bar */}
//           <AnimatePresence>
//             {selectedMessages.length > 0 && (
//               <motion.div
//                 initial={{ height: 0, opacity: 0, y: -20 }}
//                 animate={{ height: "auto", opacity: 1, y: 0 }}
//                 exit={{ height: 0, opacity: 0, y: -20 }}
//                 transition={{ type: "spring", damping: 20 }}
//                 className="mt-4 p-3 bg-indigo-50 rounded-xl flex flex-wrap items-center gap-3"
//               >
//                 <motion.div 
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   className="flex items-center gap-2"
//                 >
//                   <input
//                     type="checkbox"
//                     checked={selectedMessages.length === messages.length}
//                     onChange={selectAllMessages}
//                     className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
//                   />
//                   <span className="text-sm text-indigo-600 font-medium">
//                     {selectedMessages.length} selected
//                   </span>
//                 </motion.div>
//                 <div className="flex-1" />
//                 <div className="flex items-center gap-2">
//                   <Tooltip title="Mark as Pending">
//                     <IconButton 
//                       size="small" 
//                       className="bg-white hover:bg-yellow-100"
//                       onClick={() => handleBulkStatusUpdate('pending')}
//                     >
//                       <HourglassEmpty className="size-4 text-yellow-600" />
//                     </IconButton>
//                   </Tooltip>
//                   <Tooltip title="Mark as In Progress">
//                     <IconButton 
//                       size="small" 
//                       className="bg-white hover:bg-blue-100"
//                       onClick={() => handleBulkStatusUpdate('In_Progress')}
//                     >
//                       <Timeline className="size-4 text-blue-600" />
//                     </IconButton>
//                   </Tooltip>
//                   <Tooltip title="Mark as Resolved">
//                     <IconButton 
//                       size="small" 
//                       className="bg-white hover:bg-green-100"
//                       onClick={() => handleBulkStatusUpdate('Resolved')}
//                     >
//                       <CheckCircle className="size-4 text-green-600" />
//                     </IconButton>
//                   </Tooltip>
//                   <Tooltip title="Mark as Rejected">
//                     <IconButton 
//                       size="small" 
//                       className="bg-white hover:bg-red-100"
//                       onClick={() => handleBulkStatusUpdate('Rejected')}
//                     >
//                       <Block className="size-4 text-red-600" />
//                     </IconButton>
//                   </Tooltip>
//                   <Tooltip title="Delete Selected">
//                     <IconButton 
//                       size="small" 
//                       className="bg-white hover:bg-red-100"
//                       onClick={handleBulkDelete}
//                     >
//                       <Delete className="size-4 text-red-500" />
//                     </IconButton>
//                   </Tooltip>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </motion.header>

//       {/* Messages Grid/List View */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <AnimatePresence mode="wait">
//           {!messages || messages.length === 0 ? (
//             <motion.div
//               key="empty"
//               variants={itemVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="text-center py-16"
//             >
//               <motion.div
//                 animate={{ 
//                   y: [0, -10, 0],
//                   rotate: [0, 5, -5, 0]
//                 }}
//                 transition={{ 
//                   duration: 3,
//                   repeat: Infinity,
//                   repeatType: "reverse"
//                 }}
//                 className="text-8xl mb-6"
//               >
//                 📭
//               </motion.div>
//               <motion.h3 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-2xl font-bold text-gray-900 mb-2"
//               >
//                 No messages found
//               </motion.h3>
//               <motion.p 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-gray-500 mb-6"
//               >
//                 Try adjusting your search or filter
//               </motion.p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => {
//                   setSearchTerm("");
//                   setSelectedCategory("all");
//                 }}
//                 className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 Clear Filters
//               </motion.button>
//             </motion.div>
//           ) : viewMode === "grid" ? (
//             // Grid View
//             <motion.div
//               key="grid"
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//             >
//               {messages.map((message, index) => (
//                 <motion.div
//                   key={message?.id || index}
//                   variants={itemVariants}
//                   whileHover="hover"
//                   whileTap="tap"
//                   custom={gridItemVariants}
//                   onHoverStart={() => setHoveredMessage(message?.id)}
//                   onHoverEnd={() => setHoveredMessage(null)}
//                   className={`relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer group
//                     ${hoveredMessage === message?.id ? 'shadow-xl ring-2 ring-indigo-300' : ''}
//                   `}
//                   onClick={() => handleOpenView(message)}
//                   layout
//                 >
//                   {/* Status Indicator */}
//                   <div className={`absolute top-3 left-3 z-10 w-3 h-3 rounded-full ${
//                     message?.status === 'pending' ? 'bg-yellow-500 animate-pulse' :
//                     message?.status === 'In_Progress' ? 'bg-blue-500' :
//                     message?.status === 'Resolved' ? 'bg-green-500' :
//                     message?.status === 'Rejected' ? 'bg-red-500' : 'bg-gray-500'
//                   }`} />
                  
//                   {/* Header Gradient */}
//                   <div className={`h-24 bg-gradient-to-br ${
//                     message?.status === 'pending' ? 'from-yellow-100 to-amber-100' :
//                     message?.status === 'In_Progress' ? 'from-blue-100 to-indigo-100' :
//                     message?.status === 'Resolved' ? 'from-green-100 to-emerald-100' :
//                     message?.status === 'Rejected' ? 'from-red-100 to-rose-100' :
//                     'from-gray-100 to-slate-100'
//                   } relative`}>
//                     <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
//                       <span className="text-4xl opacity-30">
//                         {getStatusIcon(message?.status)}
//                       </span>
//                     </div>
//                   </div>
                  
//                   <div className="p-4">
//                     {/* Header */}
//                     <div className="flex items-start justify-between mb-3">
//                       <div className="flex items-center gap-2">
//                         <motion.div
//                           whileHover={{ scale: 1.1 }}
//                           className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-md"
//                         >
//                           {message?.name?.charAt(0) || '?'}
//                         </motion.div>
//                         <div>
//                           <h3 className="font-semibold text-gray-900 line-clamp-1">
//                             {message?.name || 'Unknown'}
//                           </h3>
//                           <div className="flex items-center gap-1 text-xs text-gray-500">
//                             <Schedule className="size-3" />
//                             <span>{new Date(message?.createdAt).toLocaleDateString()}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Subject */}
//                     <p className="text-sm font-medium text-gray-700 mb-1 line-clamp-1">
//                       {message?.subject || 'Hotel Reservation'}
//                     </p>

//                     {/* Message Preview */}
//                     <p className="text-sm text-gray-600 line-clamp-2 mb-3 min-h-[40px]">
//                       {message?.message || 'No content'}
//                     </p>

//                     {/* Footer */}
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <Chip 
//                           label={message?.status?.replace('_', ' ') || 'pending'}
//                           size="small"
//                           className={`${getStatusColor(message?.status)} text-xs`}
//                           icon={<span>{getStatusIcon(message?.status)}</span>}
//                         />
//                       </div>
                      
//                       <div className="flex items-center gap-1">
//                         <Tooltip title="View Details">
//                           <IconButton 
//                             size="small"
//                             className="opacity-0 group-hover:opacity-100 transition-opacity"
//                           >
//                             <Info className="size-4 text-gray-400" />
//                           </IconButton>
//                         </Tooltip>
//                       </div>
//                     </div>

//                     {/* Selection Indicator */}
//                     {selectedMessages.includes(message?.id) && (
//                       <motion.div
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         className="absolute top-3 right-3 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg"
//                       >
//                         <Check className="size-4 text-white" />
//                       </motion.div>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           ) : (
//             // List View
//             <motion.div
//               key="list"
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="space-y-3"
//             >
//               {/* List Header */}
//               <motion.div 
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-white/50 backdrop-blur-sm rounded-xl text-xs font-medium text-gray-500 uppercase tracking-wider"
//               >
//                 <div className="col-span-1">
//                   <input
//                     type="checkbox"
//                     checked={selectedMessages.length === messages.length}
//                     onChange={selectAllMessages}
//                     className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
//                   />
//                 </div>
//                 <div className="col-span-1">Status</div>
//                 <div className="col-span-2">Name</div>
//                 <div className="col-span-2">Email</div>
//                 <div className="col-span-3">Subject</div>
//                 <div className="col-span-2">Created</div>
//                 <div className="col-span-1">Actions</div>
//               </motion.div>

//               {messages.map((message, index) => (
//                 <motion.div
//                   key={message?.id || index}
//                   variants={itemVariants}
//                   whileHover="hover"
//                   custom={listItemVariants}
//                   onHoverStart={() => setHoveredMessage(message?.id)}
//                   onHoverEnd={() => setHoveredMessage(null)}
//                   className={`relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group
//                     ${hoveredMessage === message?.id ? 'ring-2 ring-indigo-300' : ''}
//                   `}
//                   onClick={() => handleOpenView(message)}
//                   layout
//                 >
//                   <div className="p-4">
//                     <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
//                       {/* Checkbox */}
//                       <div className="col-span-1 flex items-center">
//                         <input
//                           type="checkbox"
//                           checked={selectedMessages.includes(message?.id)}
//                           onChange={() => {}}
//                           className="w-4 h-4 text-indigo-600 rounded text-black border-gray-300 focus:ring-indigo-500"
//                           onClick={(e) => toggleMessageSelection(message?.id, e)}
//                         />
//                       </div>

//                       {/* Status */}
//                       <div className="col-span-1 flex items-center">
//                         <Tooltip title={message?.status?.replace('_', ' ') || 'pending'}>
//                           <span className={`w-3 h-3 rounded-full ${
//                             message?.status === 'pending' ? 'bg-yellow-500 animate-pulse' :
//                             message?.status === 'In_Progress' ? 'bg-blue-500' :
//                             message?.status === 'Resolved' ? 'bg-green-500' :
//                             message?.status === 'Rejected' ? 'bg-red-500' : 'bg-gray-500'
//                           }`} />
//                         </Tooltip>
//                       </div>

//                       {/* Name */}
//                       <div className="col-span-2 flex items-center gap-2">
//                         <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
//                           {message?.name?.charAt(0) || '?'}
//                         </div>
//                         <span className="font-medium text-gray-900 truncate">
//                           {message?.name || 'Unknown'}
//                         </span>
//                       </div>

//                       {/* Email */}
//                       <div className="col-span-2">
//                         <p className="text-sm text-gray-600 truncate">
//                           {message?.email || ''}
//                         </p>
//                       </div>

//                       {/* Subject */}
//                       <div className="col-span-3">
//                         <p className="text-sm text-gray-600 truncate">
//                           {message?.subject || 'Hotel Reservation'}
//                         </p>
//                       </div>

//                       {/* Created At */}
//                       <div className="col-span-2 flex items-center gap-2 text-sm text-gray-500">
//                         <Schedule className="size-4" />
//                         <span>{new Date(message?.createdAt).toLocaleDateString()}</span>
//                       </div>

//                       {/* Actions */}
//                       <div className="col-span-1 flex items-center gap-1 justify-end">
//                         <Tooltip title="Edit">
//                           <IconButton 
//                             size="small"
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               handleOpenEdit(message);
//                             }}
//                             className="opacity-0 group-hover:opacity-100 transition-opacity"
//                           >
//                             <Edit className="size-4 text-blue-500" />
//                           </IconButton>
//                         </Tooltip>
                        
//                         <Tooltip title="Delete">
//                           <IconButton 
//                             size="small"
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               handleDeleteMessage(message);
//                             }}
//                             className="opacity-0 group-hover:opacity-100 transition-opacity"
//                           >
//                             <Delete className="size-4 text-red-500" />
//                           </IconButton>
//                         </Tooltip>
//                       </div>
//                     </div>

//                     {/* Mobile-only details */}
//                     <div className="mt-2 md:hidden flex items-center justify-between text-sm">
//                       <div className="flex items-center gap-2">
//                         <span className="text-gray-500">{message?.email}</span>
//                         <Chip 
//                           label={message?.status?.replace('_', ' ') || 'pending'}
//                           size="small"
//                           className={`${getStatusColor(message?.status)} text-xs`}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Pagination */}
//         {pagination.totalPages > 1 && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex flex-wrap items-center justify-center gap-4 mt-8"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => handlePageChange(pagination.page - 1)}
//               disabled={pagination.page === 1}
//               className="px-4 py-2 rounded-xl border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
//             >
//               Previous
//             </motion.button>
            
//             <div className="flex items-center gap-2">
//               {[...Array(Math.min(5, pagination.totalPages))].map((_, i) => {
//                 let pageNum;
//                 if (pagination.totalPages <= 5) {
//                   pageNum = i + 1;
//                 } else if (pagination.page <= 3) {
//                   pageNum = i + 1;
//                 } else if (pagination.page >= pagination.totalPages - 2) {
//                   pageNum = pagination.totalPages - 4 + i;
//                 } else {
//                   pageNum = pagination.page - 2 + i;
//                 }
                
//                 return (
//                   <motion.button
//                     key={pageNum}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={() => handlePageChange(pageNum)}
//                     className={`w-10 h-10 rounded-xl font-medium transition-all ${
//                       pagination.page === pageNum
//                         ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
//                         : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
//                     }`}
//                   >
//                     {pageNum}
//                   </motion.button>
//                 );
//               })}
//             </div>
            
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => handlePageChange(pagination.page + 1)}
//               disabled={pagination.page === pagination.totalPages}
//               className="px-4 py-2 rounded-xl border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
//             >
//               Next
//             </motion.button>
//           </motion.div>
//         )}
        
//         {/* Stats */}
//         {messages.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center mt-4 text-sm text-gray-500"
//           >
//             Showing {messages.length} of {pagination.total} messages
//           </motion.div>
//         )}
//       </main>

//       {/* Floating Action Button */}
//       <motion.button
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         whileHover={{ scale: 1.1, rotate: 5 }}
//         whileTap={{ scale: 0.9 }}
//         className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow z-10"
//         onClick={handleOpenCreate}
//       >
//         <Send className="size-6" />
//       </motion.button>
//     </div>
//   );
// };






























/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Search,
  Notifications,
  ViewModule,
  ViewList,
  FilterList,
  Sort,
  Refresh,
  MoreVert,
  Star,
  StarBorder,
  AttachFile,
  Image,
  Send,
  Delete,
  Archive,
  Markunread,
  Schedule,
  Close,
  Check,
  Warning,
  Info,
  Add,
  Edit,
  Save,
  Cancel,
  Person,
  Email,
  Subject,
  Category,
  Flag,
  Phone,
  AccessTime,
  CheckCircle,
  Error,
  Help,
  Timeline,
  DoneAll,
  Block,
  HourglassEmpty,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, Badge, IconButton, Chip, Tooltip } from "@mui/material";

// API base URL - replace with your actual API endpoint
const API_BASE_URL = "https://hotel-nodejs-oa32.onrender.com/63729/892308";

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for error handling
api.interceptors.response.use(
  response => response,
  error => {
    if (error.code === 'ECONNABORTED') {
      toast.error('Request timeout. Please try again.');
    } else if (!error.response) {
      toast.error('Network error. Please check your connection.');
    } else {
      console.error('API Error:', error.response?.data || error.message);
    }
    return Promise.reject(error);
  }
);

// Animated Modal Components
const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message, type = 'warning' }) => {
  const icons = {
    warning: <Warning className="text-yellow-500 text-6xl" />,
    danger: <Error className="text-red-500 text-6xl" />,
    info: <Info className="text-blue-500 text-6xl" />,
    success: <CheckCircle className="text-green-500 text-6xl" />,
  };

  const colors = {
    warning: 'from-yellow-500 to-amber-500',
    danger: 'from-red-500 to-rose-500',
    info: 'from-blue-500 to-cyan-500',
    success: 'from-green-500 to-emerald-500',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-2 bg-gradient-to-r ${colors[type]}`} />
            
            <div className="p-8 text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", damping: 15, delay: 0.1 }}
                className="mb-6"
              >
                {icons[type]}
              </motion.div>

              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-gray-900 mb-3"
              >
                {title}
              </motion.h3>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 mb-8"
              >
                {message}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-3 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onConfirm}
                  className={`px-6 py-3 bg-gradient-to-r ${colors[type]} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow`}
                >
                  Confirm
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
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

const SuccessModal = ({ isOpen, onClose, title, message, details }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500" />
            
            <div className="p-8 text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", damping: 15, delay: 0.1 }}
                className="mb-6"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <CheckCircle className="text-green-500 text-6xl" />
                </motion.div>
              </motion.div>

              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-gray-900 mb-3"
              >
                {title}
              </motion.h3>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 mb-6"
              >
                {message}
              </motion.p>

              {details && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-green-50 rounded-xl p-4 mb-6 text-left"
                >
                  {Object.entries(details).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2 text-sm mb-2 last:mb-0">
                      <span className="font-medium text-gray-700 capitalize">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </motion.div>
              )}

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
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

const ErrorModal = ({ isOpen, onClose, title, message, error }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-2 bg-gradient-to-r from-red-500 to-rose-500" />
            
            <div className="p-8 text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", damping: 15, delay: 0.1 }}
                className="mb-6"
              >
                <motion.div
                  animate={{ 
                    x: [-5, 5, -5, 5, 0],
                    y: [0, -5, 5, -5, 0]
                  }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Error className="text-red-500 text-6xl" />
                </motion.div>
              </motion.div>

              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-gray-900 mb-3"
              >
                {title}
              </motion.h3>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 mb-6"
              >
                {message}
              </motion.p>

              {error && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-red-50 rounded-xl p-4 mb-6 text-left"
                >
                  <p className="text-sm text-red-700 font-mono">{error}</p>
                </motion.div>
              )}

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-8 py-3 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
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

const CreateEditModal = ({ isOpen, onClose, onSubmit, formData, setFormData, formErrors, setFormErrors, mode = 'create' }) => {
  const statusOptions = [
    { value: 'pending', label: 'Pending', icon: '⏳', color: 'yellow' },
    { value: 'In_Progress', label: 'In Progress', icon: '⚙️', color: 'blue' },
    { value: 'Resolved', label: 'Resolved', icon: '✅', color: 'green' },
    { value: 'Rejected', label: 'Rejected', icon: '❌', color: 'red' },
  ];

  const validateField = (name, value) => {
    switch(name) {
      case 'name':
        return value && value.length >= 2 ? '' : 'Name must be at least 2 characters';
      case 'email':
        return !value ? 'Email is required' : 
               /\S+@\S+\.\S+/.test(value) ? '' : 'Please enter a valid email';
      case 'phone':
        return !value ? 'Phone number is required' : 
               /^[\d\s\+\-\(\)]{10,}$/.test(value) ? '' : 'Please enter a valid phone number';
      case 'message':
        return value && value.length >= 5 ? '' : 'Message must be at least 5 characters';
      default:
        return !value ? `${name} is required` : '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate field
    const error = validateField(name, value);
    setFormErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = () => {
    // Validate all fields
    const errors = {};
    const requiredFields = ['name', 'email', 'phone', 'message'];
    
    requiredFields.forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) errors[key] = error;
    });
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      toast.error('Please fix the errors in the form');
      return;
    }
    
    onSubmit();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-2 bg-gradient-to-r ${mode === 'create' ? 'from-indigo-500 to-purple-500' : 'from-blue-500 to-cyan-500'}`} />
            
            <div className="p-8">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center gap-3 mb-8"
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${mode === 'create' ? 'from-indigo-500 to-purple-500' : 'from-blue-500 to-cyan-500'} flex items-center justify-center shadow-lg`}
                >
                  {mode === 'create' ? <Add className="text-white text-2xl" /> : <Edit className="text-white text-2xl" />}
                </motion.div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {mode === 'create' ? 'Create New Message' : 'Edit Message'}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {mode === 'create' ? 'Fill in the details to send a new message' : 'Update the message details below'}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Person className="inline mr-2 text-gray-400" /> Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name || ''}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl text-black border ${
                      formErrors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-indigo-300'
                    } focus:ring focus:ring-opacity-50 ${
                      formErrors.name ? 'focus:ring-red-200' : 'focus:ring-indigo-200'
                    } transition-all bg-white/50 backdrop-blur-sm`}
                    placeholder="Enter your full name"
                  />
                  {formErrors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1"
                    >
                      {formErrors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Email className="inline mr-2 text-gray-400" /> Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-black rounded-xl border ${
                      formErrors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-indigo-300'
                    } focus:ring focus:ring-opacity-50 ${
                      formErrors.email ? 'focus:ring-red-200' : 'focus:ring-indigo-200'
                    } transition-all bg-white/50 backdrop-blur-sm`}
                    placeholder="Enter your email address"
                  />
                  {formErrors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1"
                    >
                      {formErrors.email}
                    </motion.p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline mr-2 text-gray-400" /> Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone || ''}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-black rounded-xl border ${
                      formErrors.phone ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-indigo-300'
                    } focus:ring focus:ring-opacity-50 ${
                      formErrors.phone ? 'focus:ring-red-200' : 'focus:ring-indigo-200'
                    } transition-all bg-white/50 backdrop-blur-sm`}
                    placeholder="Enter your phone number"
                  />
                  {formErrors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1"
                    >
                      {formErrors.phone}
                    </motion.p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Subject className="inline mr-2 text-gray-400" /> Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject || 'Hotel Reservation'}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-black border border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all bg-white/50 backdrop-blur-sm"
                    placeholder="Enter subject"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Send className="inline mr-2 text-gray-400" /> Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message || ''}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-xl text-black border ${
                      formErrors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-indigo-300'
                    } focus:ring focus:ring-opacity-50 ${
                      formErrors.message ? 'focus:ring-red-200' : 'focus:ring-indigo-200'
                    } transition-all bg-white/50 backdrop-blur-sm resize-none`}
                    placeholder="Type your message here..."
                  />
                  {formErrors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1"
                    >
                      {formErrors.message}
                    </motion.p>
                  )}
                </div>

                {/* Status Field (only for edit mode) */}
                {mode === 'edit' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Timeline className="inline mr-2 text-gray-400" /> Status
                    </label>
                    <select
                      name="status"
                      value={formData.status || 'pending'}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border text-black border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all bg-white/50 backdrop-blur-sm"
                    >
                      {statusOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.icon} {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex gap-3 justify-end mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  className={`px-6 py-3 bg-gradient-to-r ${
                    mode === 'create' ? 'from-indigo-500 to-purple-500' : 'from-blue-500 to-cyan-500'
                  } text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow`}
                >
                  {mode === 'create' ? 'Create Message' : 'Update Message'}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ViewModal = ({ isOpen, onClose, message, onEdit, onDelete }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-600 border-yellow-200';
      case 'In_Progress': return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'Resolved': return 'bg-green-100 text-green-600 border-green-200';
      case 'Rejected': return 'bg-red-100 text-red-600 border-red-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return <HourglassEmpty className="text-yellow-500" />;
      case 'In_Progress': return <Timeline className="text-blue-500" />;
      case 'Resolved': return <CheckCircle className="text-green-500" />;
      case 'Rejected': return <Block className="text-red-500" />;
      default: return <Help className="text-gray-500" />;
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString();
  };

  return (
    <AnimatePresence>
      {isOpen && message && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500" />
            
            <div className="p-8">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center justify-between mb-8"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <Email className="text-white text-2xl" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Message Details</h2>
                    <p className="text-gray-500 text-sm">Viewing message information</p>
                  </div>
                </div>
                
                <Chip
                  icon={getStatusIcon(message.status)}
                  label={message.status?.replace('_', ' ') || 'pending'}
                  className={`${getStatusColor(message.status)} font-medium px-3 py-1`}
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                {/* Sender Info */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-sm font-medium text-gray-500 mb-4">Sender Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Name</p>
                      <p className="text-gray-900 font-medium flex items-center gap-2">
                        <Person className="text-gray-400" /> {message.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Email</p>
                      <p className="text-gray-900 font-medium flex items-center gap-2">
                        <Email className="text-gray-400" /> {message.email}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Phone</p>
                      <p className="text-gray-900 font-medium flex items-center gap-2">
                        <Phone className="text-gray-400" /> {message.phone}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Subject</p>
                      <p className="text-gray-900 font-medium flex items-center gap-2">
                        <Subject className="text-gray-400" /> {message.subject || 'Hotel Reservation'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Message Content */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-sm font-medium text-gray-500 mb-4">Message Content</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {message.message}
                  </p>
                </div>

                {/* Timestamps */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-sm font-medium text-gray-500 mb-4">Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <AccessTime className="text-indigo-500 text-sm" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Created At</p>
                        <p className="text-sm text-gray-900">
                          {formatDate(message.createdAt)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <AccessTime className="text-indigo-500 text-sm" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Updated At</p>
                        <p className="text-sm text-gray-900">
                          {formatDate(message.updatedAt)}
                        </p>
                      </div>
                    </div>
                    {message.sentAt && (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Send className="text-green-500 text-sm" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Sent At</p>
                          <p className="text-sm text-gray-900">
                            {formatDate(message.sentAt)}
                          </p>
                        </div>
                      </div>
                    )}
                    {/* Virtual field */}
                    {message.isResolved !== undefined && (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="text-green-500 text-sm" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Resolved Status</p>
                          <p className="text-sm text-gray-900">
                            {message.isResolved ? 'Resolved' : 'Not Resolved'}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Error (if any) */}
                {message.error && (
                  <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                    <h3 className="text-sm font-medium text-red-500 mb-2">Error Details</h3>
                    <p className="text-sm text-red-600">{message.error}</p>
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex gap-3 justify-end mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onClose();
                    onEdit(message);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
                >
                  <Edit className="text-sm" /> Edit
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onClose();
                    onDelete(message);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
                >
                  <Delete className="text-sm" /> Delete
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  Close
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MessageManagements = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredMessage, setHoveredMessage] = useState(null);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("newest");
  const [filterOpen, setFilterOpen] = useState(false);
  
  // Modal states
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(null);
  const [modalConfig, setModalConfig] = useState({
    title: '',
    message: '',
    type: 'warning',
    details: null,
    error: null
  });
  
  // Form state for create/edit
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Hotel Reservation',
    message: '',
    status: 'pending',
  });
  
  // Form validation errors
  const [formErrors, setFormErrors] = useState({});
  
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0
  });

  // Fetch messages from API
  const fetchMessages = async (page = 1, category = selectedCategory, search = searchTerm, sort = sortBy) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Build query params
      const params = new URLSearchParams({
        page: page.toString(),
        limit: pagination.limit.toString(),
      });
      
      // Add sorting
      if (sort === 'newest') {
        params.append('sort', '-createdAt');
      } else if (sort === 'oldest') {
        params.append('sort', 'createdAt');
      } else if (sort === 'status') {
        params.append('sort', 'status');
      } else if (sort === 'name') {
        params.append('sort', 'name');
      }
      
      // Add category filter
      if (category !== 'all') {
        if (category === 'pending' || category === 'In_Progress' || 
            category === 'Resolved' || category === 'Rejected') {
          params.append('status', category);
        }
      }
      
      // Add search
      if (search) {
        params.append('search', search);
      }
      
      const response = await api.get(`/?${params.toString()}`);
      
      // Handle response structure
      const data = response.data;
      let messagesData = [];
      let total = 0;
      let totalPages = 0;
      
      if (Array.isArray(data)) {
        messagesData = data;
        total = data.length;
        totalPages = Math.ceil(total / pagination.limit);
      } else if (data.data && Array.isArray(data.data)) {
        messagesData = data.data;
        total = data.total || data.data.length;
        totalPages = data.totalPages || Math.ceil(total / pagination.limit);
      } else if (data.messages && Array.isArray(data.messages)) {
        messagesData = data.messages;
        total = data.total || data.messages.length;
        totalPages = data.totalPages || Math.ceil(total / pagination.limit);
      }
      
      setMessages(messagesData);
      setPagination({
        page: data.page || page,
        limit: data.limit || pagination.limit,
        total: total,
        totalPages: totalPages
      });
      
      if (messagesData.length === 0) {
        toast.info('No messages found');
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
      setError(error.response?.data?.message || error.message);
      setMessages([]);
      
      showErrorModal(
        'Failed to Load Messages',
        'There was an error loading your messages. Please try again.',
        error.response?.data?.message || error.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Create new message
  const createMessage = async (messageData) => {
    try {
      const response = await api.post('/', messageData);
      
      // Add the new message to the list
      const newMessage = response.data;
      setMessages(prevMessages => [newMessage, ...prevMessages]);
      
      // Update pagination total
      setPagination(prev => ({
        ...prev,
        total: prev.total + 1,
        totalPages: Math.ceil((prev.total + 1) / prev.limit)
      }));
      
      showSuccessModal('Message Created!', 'Your message has been sent successfully.', {
        'Name': newMessage.name,
        'Email': newMessage.email,
        'Subject': newMessage.subject,
        'Status': newMessage.status
      });
      
      return newMessage;
    } catch (error) {
      console.error("Error creating message:", error);
      
      showErrorModal(
        'Failed to Create Message',
        'There was an error creating your message. Please try again.',
        error.response?.data?.message || error.message
      );
      
      throw error;
    }
  };

  // Fetch message by ID
  const fetchMessageById = async (id) => {
    try {
      const response = await api.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching message ${id}:`, error);
      
      showErrorModal(
        'Failed to Load Message',
        'There was an error loading the message details.',
        error.response?.data?.message || error.message
      );
      
      throw error;
    }
  };

  // Update message
  const updateMessage = async (id, updates) => {
    try {
      const response = await api.put(`/${id}`, updates);
      
      setMessages(prevMessages =>
        prevMessages.map(msg =>
          msg._id === id ? { ...msg, ...response.data } : msg
        )
      );
      
      showSuccessModal('Message Updated!', 'The message has been updated successfully.', {
        'Name': response.data.name,
        'Status': response.data.status,
        'Updated': 'Success'
      });
      
      return response.data;
    } catch (error) {
      console.error(`Error updating message ${id}:`, error);
      
      showErrorModal(
        'Failed to Update Message',
        'There was an error updating the message.',
        error.response?.data?.message || error.message
      );
      
      throw error;
    }
  };

  // Patch message
  const patchMessage = async (id, updates) => {
    try {
      const response = await api.patch(`/${id}`, updates);
      
      setMessages(prevMessages =>
        prevMessages.map(msg =>
          msg._id === id ? { ...msg, ...response.data } : msg
        )
      );
      
      return response.data;
    } catch (error) {
      console.error(`Error updating message ${id}:`, error);
      throw error;
    }
  };

  // Bulk update messages
  const bulkUpdateMessages = async (ids, updates, action = 'updated') => {
    if (ids.length === 0) {
      showErrorModal('No Messages Selected', 'Please select at least one message to perform this action.');
      return;
    }
    
    try {
      const response = await api.patch('/bulk', { ids, updates });
      
      setMessages(prevMessages =>
        prevMessages.map(msg =>
          ids.includes(msg._id) ? { ...msg, ...updates } : msg
        )
      );
      
      showSuccessModal(`${ids.length} Messages ${action}!`, `Successfully ${action} ${ids.length} messages.`);
      
      return response.data;
    } catch (error) {
      console.error('Error bulk updating messages:', error);
      
      showErrorModal(
        `Failed to ${action} Messages`,
        `There was an error ${action.toLowerCase()} the messages.`,
        error.response?.data?.message || error.message
      );
      
      throw error;
    }
  };

  // Delete message
  const deleteMessage = async (id) => {
    try {
      await api.delete(`/${id}`);
      
      setMessages(prevMessages => prevMessages.filter(msg => msg._id !== id));
      setSelectedMessages(prev => prev.filter(msgId => msgId !== id));
      
      // Update pagination total
      setPagination(prev => ({
        ...prev,
        total: prev.total - 1,
        totalPages: Math.ceil((prev.total - 1) / prev.limit)
      }));
      
      showSuccessModal('Message Deleted!', 'The message has been deleted successfully.');
      
      return true;
    } catch (error) {
      console.error(`Error deleting message ${id}:`, error);
      
      showErrorModal(
        'Failed to Delete Message',
        'There was an error deleting the message.',
        error.response?.data?.message || error.message
      );
      
      throw error;
    }
  };

  // Bulk delete messages
  const bulkDeleteMessages = async (ids) => {
    if (ids.length === 0) {
      showErrorModal('No Messages Selected', 'Please select at least one message to delete.');
      return;
    }
    
    try {
      await api.delete('/bulk', { data: { ids } });
      
      setMessages(prevMessages => prevMessages.filter(msg => !ids.includes(msg._id)));
      setSelectedMessages([]);
      
      // Update pagination total
      setPagination(prev => ({
        ...prev,
        total: prev.total - ids.length,
        totalPages: Math.ceil((prev.total - ids.length) / prev.limit)
      }));
      
      showSuccessModal(`${ids.length} Messages Deleted!`, `Successfully deleted ${ids.length} messages.`);
      
      return true;
    } catch (error) {
      console.error('Error bulk deleting messages:', error);
      
      showErrorModal(
        'Failed to Delete Messages',
        'There was an error deleting the messages.',
        error.response?.data?.message || error.message
      );
      
      throw error;
    }
  };

  // Modal helper functions
  const showConfirmModal = (title, message, type = 'warning', onConfirm) => {
    setModalConfig({ title, message, type, onConfirm });
    setConfirmModalOpen(true);
  };

  const showSuccessModal = (title, message, details = null) => {
    setModalConfig({ title, message, details });
    setSuccessModalOpen(true);
  };

  const showErrorModal = (title, message, error = null) => {
    setModalConfig({ title, message, error });
    setErrorModalOpen(true);
  };

  // Load messages on mount
  useEffect(() => {
    fetchMessages(1, selectedCategory, searchTerm, sortBy);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const listItemVariants = {
    hover: {
      scale: 1.01,
      x: 4,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.99 },
  };

  const gridItemVariants = {
    hover: {
      scale: 1.02,
      y: -4,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  // Calculate categories based on schema
  const categories = [
    { id: "all", label: "All Messages", count: pagination.total || 0, color: "from-blue-500 to-cyan-500", icon: "📬" },
    { id: "pending", label: "Pending", count: messages?.filter(m => m?.status === 'pending')?.length || 0, color: "from-yellow-500 to-amber-500", icon: "⏳" },
    { id: "In_Progress", label: "In Progress", count: messages?.filter(m => m?.status === 'In_Progress')?.length || 0, color: "from-blue-500 to-indigo-500", icon: "⚙️" },
    { id: "Resolved", label: "Resolved", count: messages?.filter(m => m?.status === 'Resolved')?.length || 0, color: "from-green-500 to-emerald-500", icon: "✅" },
    { id: "Rejected", label: "Rejected", count: messages?.filter(m => m?.status === 'Rejected')?.length || 0, color: "from-red-500 to-rose-500", icon: "❌" },
  ];

  const sortOptions = [
    { value: "newest", label: "Newest First", icon: "🆕" },
    { value: "oldest", label: "Oldest First", icon: "📅" },
    { value: "status", label: "Status", icon: "🏷️" },
    { value: "name", label: "Name", icon: "👤" },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-600 border-yellow-200';
      case 'In_Progress': return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'Resolved': return 'bg-green-100 text-green-600 border-green-200';
      case 'Rejected': return 'bg-red-100 text-red-600 border-red-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return '⏳';
      case 'In_Progress': return '⚙️';
      case 'Resolved': return '✅';
      case 'Rejected': return '❌';
      default: return '📝';
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchMessages(pagination.page, selectedCategory, searchTerm, sortBy)
      .finally(() => setIsRefreshing(false));
  };

  const toggleMessageSelection = (id, e) => {
    e?.stopPropagation();
    setSelectedMessages(prev => 
      prev.includes(id) ? prev.filter(msgId => msgId !== id) : [...prev, id]
    );
  };

  const selectAllMessages = () => {
    if (selectedMessages.length === messages.length) {
      setSelectedMessages([]);
    } else {
      setSelectedMessages(messages.map(msg => msg._id));
    }
  };

  const handleBulkDelete = () => {
    if (selectedMessages.length === 0) {
      showErrorModal('No Messages Selected', 'Please select at least one message to delete.');
      return;
    }
    
    showConfirmModal(
      'Delete Messages',
      `Are you sure you want to delete ${selectedMessages.length} message${selectedMessages.length > 1 ? 's' : ''}? This action cannot be undone.`,
      'danger',
      async () => {
        await bulkDeleteMessages(selectedMessages);
        setConfirmModalOpen(false);
      }
    );
  };

  const handleBulkStatusUpdate = async (status) => {
    if (selectedMessages.length === 0) {
      showErrorModal('No Messages Selected', 'Please select at least one message to update.');
      return;
    }
    
    showConfirmModal(
      'Update Status',
      `Are you sure you want to mark ${selectedMessages.length} message${selectedMessages.length > 1 ? 's' : ''} as ${status}?`,
      'info',
      async () => {
        await bulkUpdateMessages(selectedMessages, { status }, `marked as ${status}`);
        setConfirmModalOpen(false);
      }
    );
  };

  const handleDeleteMessage = (message) => {
    showConfirmModal(
      'Delete Message',
      `Are you sure you want to delete the message from "${message.name}"? This action cannot be undone.`,
      'danger',
      async () => {
        await deleteMessage(message._id);
        setConfirmModalOpen(false);
      }
    );
  };

  const handleCreateSubmit = async () => {
    try {
      const newMessage = await createMessage(formData);
      setCreateModalOpen(false);
      resetForm();
    } catch (error) {
      // Error handled in createMessage
    }
  };

  const handleEditSubmit = async () => {
    try {
      await updateMessage(currentMessage._id, formData);
      setEditModalOpen(false);
      setCurrentMessage(null);
      resetForm();
    } catch (error) {
      // Error handled in updateMessage
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Hotel Reservation',
      message: '',
      status: 'pending',
    });
    setFormErrors({});
  };

  const handleOpenCreate = () => {
    resetForm();
    setCreateModalOpen(true);
  };

  const handleOpenEdit = async (message) => {
    try {
      const fullMessage = await fetchMessageById(message._id);
      setCurrentMessage(fullMessage);
      setFormData({
        name: fullMessage.name || '',
        email: fullMessage.email || '',
        phone: fullMessage.phone || '',
        subject: fullMessage.subject || 'Hotel Reservation',
        message: fullMessage.message || '',
        status: fullMessage.status || 'pending',
      });
      setEditModalOpen(true);
    } catch (error) {
      // Error handled in fetchMessageById
    }
  };

  const handleOpenView = async (message) => {
    try {
      const fullMessage = await fetchMessageById(message._id);
      setCurrentMessage(fullMessage);
      setViewModalOpen(true);
    } catch (error) {
      // Error handled in fetchMessageById
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchMessages(newPage, selectedCategory, searchTerm, sortBy);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Show loading state
  if (isLoading && messages.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-20 h-20 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto mb-6"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-gray-800 mb-2"
          >
            Loading Messages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-500"
          >
            Please wait while we fetch your messages...
          </motion.p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      {/* Modals */}
      <ConfirmModal
        isOpen={confirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        onConfirm={modalConfig.onConfirm}
        title={modalConfig.title}
        message={modalConfig.message}
        type={modalConfig.type}
      />

      <SuccessModal
        isOpen={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        title={modalConfig.title}
        message={modalConfig.message}
        details={modalConfig.details}
      />

      <ErrorModal
        isOpen={errorModalOpen}
        onClose={() => setErrorModalOpen(false)}
        title={modalConfig.title}
        message={modalConfig.message}
        error={modalConfig.error}
      />

      <CreateEditModal
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateSubmit}
        formData={formData}
        setFormData={setFormData}
        formErrors={formErrors}
        setFormErrors={setFormErrors}
        mode="create"
      />

      <CreateEditModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSubmit={handleEditSubmit}
        formData={formData}
        setFormData={setFormData}
        formErrors={formErrors}
        setFormErrors={setFormErrors}
        mode="edit"
      />

      <ViewModal
        isOpen={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        message={currentMessage}
        onEdit={handleOpenEdit}
        onDelete={handleDeleteMessage}
      />

      {/* Header Section */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Top Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <motion.div 
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="flex items-center gap-3"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg cursor-pointer"
                onClick={() => window.location.reload()}
              >
                <Send className="size-6 text-white" />
              </motion.div>
              <div>
                <motion.h1 
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                >
                  Message Center
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xs text-gray-500"
                >
                  Manage your conversations
                </motion.p>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Search Bar */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative flex-1"
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-4" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && fetchMessages(1, selectedCategory, e.target.value, sortBy)}
                  className="pl-10 pr-4 py-2.5 w-full sm:w-80 rounded-xl border border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all bg-white/50 backdrop-blur-sm"
                />
                {searchTerm && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    onClick={() => {
                      setSearchTerm("");
                      fetchMessages(1, selectedCategory, "", sortBy);
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <Close className="size-4 text-gray-400 hover:text-gray-600" />
                  </motion.button>
                )}
              </motion.div>

              <div className="flex items-center gap-2">
                {/* Create Button */}
                <Tooltip title="Create New Message">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleOpenCreate}
                    className="p-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Add className="size-5" />
                  </motion.button>
                </Tooltip>

                {/* Sort Dropdown */}
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setFilterOpen(!filterOpen)}
                    className="p-2.5 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 transition-colors"
                  >
                    <Sort className="size-5 text-gray-600" />
                  </motion.button>
                  
                  <AnimatePresence>
                    {filterOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ type: "spring", damping: 20 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-20"
                      >
                        {sortOptions.map((option) => (
                          <motion.button
                            key={option.value}
                            whileHover={{ x: 4, backgroundColor: '#f5f3ff' }}
                            onClick={() => {
                              setSortBy(option.value);
                              setFilterOpen(false);
                              fetchMessages(1, selectedCategory, searchTerm, option.value);
                            }}
                            className={`w-full px-4 py-2 text-left flex items-center gap-2 transition-colors ${
                              sortBy === option.value ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700'
                            }`}
                          >
                            <span>{option.icon}</span>
                            <span>{option.label}</span>
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* View Toggle */}
                <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-gray-200">
                  <Tooltip title="Grid View">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-lg transition-all ${
                        viewMode === "grid" 
                          ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md" 
                          : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <ViewModule className="size-5" />
                    </motion.button>
                  </Tooltip>
                  <Tooltip title="List View">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-lg transition-all ${
                        viewMode === "list" 
                          ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md" 
                          : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <ViewList className="size-5" />
                    </motion.button>
                  </Tooltip>
                </div>

                {/* Refresh Button */}
                <Tooltip title="Refresh">
                  <motion.button
                    animate={{ rotate: isRefreshing ? 360 : 0 }}
                    transition={{ duration: 1, repeat: isRefreshing ? Infinity : 0, ease: "linear" }}
                    onClick={handleRefresh}
                    className="p-2.5 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 transition-colors"
                  >
                    <Refresh className="size-5 text-gray-600" />
                  </motion.button>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* Categories */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mt-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedCategory(category.id);
                  fetchMessages(1, category.id, searchTerm, sortBy);
                }}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all
                  ${selectedCategory === category.id 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                    : 'bg-white/70 backdrop-blur-sm text-gray-600 hover:bg-white border border-gray-200'
                  }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
                <motion.span 
                  key={category.count}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`ml-2 px-2 py-0.5 rounded-lg text-xs
                    ${selectedCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-gray-600'
                    }`}
                >
                  {category.count}
                </motion.span>
              </motion.button>
            ))}
          </motion.div>

          {/* Selected Actions Bar */}
          <AnimatePresence>
            {selectedMessages.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0, y: -20 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -20 }}
                transition={{ type: "spring", damping: 20 }}
                className="mt-4 p-3 bg-indigo-50 rounded-xl flex flex-wrap items-center gap-3"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    checked={selectedMessages.length === messages.length}
                    onChange={selectAllMessages}
                    className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-indigo-600 font-medium">
                    {selectedMessages.length} selected
                  </span>
                </motion.div>
                <div className="flex-1" />
                <div className="flex items-center gap-2">
                  <Tooltip title="Mark as Pending">
                    <IconButton 
                      size="small" 
                      className="bg-white hover:bg-yellow-100"
                      onClick={() => handleBulkStatusUpdate('pending')}
                    >
                      <HourglassEmpty className="size-4 text-yellow-600" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Mark as In Progress">
                    <IconButton 
                      size="small" 
                      className="bg-white hover:bg-blue-100"
                      onClick={() => handleBulkStatusUpdate('In_Progress')}
                    >
                      <Timeline className="size-4 text-blue-600" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Mark as Resolved">
                    <IconButton 
                      size="small" 
                      className="bg-white hover:bg-green-100"
                      onClick={() => handleBulkStatusUpdate('Resolved')}
                    >
                      <CheckCircle className="size-4 text-green-600" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Mark as Rejected">
                    <IconButton 
                      size="small" 
                      className="bg-white hover:bg-red-100"
                      onClick={() => handleBulkStatusUpdate('Rejected')}
                    >
                      <Block className="size-4 text-red-600" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete Selected">
                    <IconButton 
                      size="small" 
                      className="bg-white hover:bg-red-100"
                      onClick={handleBulkDelete}
                    >
                      <Delete className="size-4 text-red-500" />
                    </IconButton>
                  </Tooltip>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Messages Grid/List View */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {!messages || messages.length === 0 ? (
            <motion.div
              key="empty"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-center py-16"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="text-8xl mb-6"
              >
                📭
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-gray-900 mb-2"
              >
                No messages found
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-500 mb-6"
              >
                Try adjusting your search or filter
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  fetchMessages(1, "all", "", sortBy);
                }}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Clear Filters
              </motion.button>
            </motion.div>
          ) : viewMode === "grid" ? (
            // Grid View
            <motion.div
              key="grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {messages.map((message, index) => (
                <motion.div
                  key={message?._id || index}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  custom={gridItemVariants}
                  onHoverStart={() => setHoveredMessage(message?._id)}
                  onHoverEnd={() => setHoveredMessage(null)}
                  className={`relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer group
                    ${hoveredMessage === message?._id ? 'shadow-xl ring-2 ring-indigo-300' : ''}
                  `}
                  onClick={() => handleOpenView(message)}
                  layout
                >
                  {/* Status Indicator */}
                  <div className={`absolute top-3 left-3 z-10 w-3 h-3 rounded-full ${
                    message?.status === 'pending' ? 'bg-yellow-500 animate-pulse' :
                    message?.status === 'In_Progress' ? 'bg-blue-500' :
                    message?.status === 'Resolved' ? 'bg-green-500' :
                    message?.status === 'Rejected' ? 'bg-red-500' : 'bg-gray-500'
                  }`} />
                  
                  {/* Header Gradient */}
                  <div className={`h-24 bg-gradient-to-br ${
                    message?.status === 'pending' ? 'from-yellow-100 to-amber-100' :
                    message?.status === 'In_Progress' ? 'from-blue-100 to-indigo-100' :
                    message?.status === 'Resolved' ? 'from-green-100 to-emerald-100' :
                    message?.status === 'Rejected' ? 'from-red-100 to-rose-100' :
                    'from-gray-100 to-slate-100'
                  } relative`}>
                    <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                      <span className="text-4xl opacity-30">
                        {getStatusIcon(message?.status)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-md"
                        >
                          {message?.name?.charAt(0) || '?'}
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-gray-900 line-clamp-1">
                            {message?.name || 'Unknown'}
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Schedule className="size-3" />
                            <span>{new Date(message?.createdAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Subject */}
                    <p className="text-sm font-medium text-gray-700 mb-1 line-clamp-1">
                      {message?.subject || 'Hotel Reservation'}
                    </p>

                    {/* Message Preview */}
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3 min-h-[40px]">
                      {message?.message || 'No content'}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Chip 
                          label={message?.status?.replace('_', ' ') || 'pending'}
                          size="small"
                          className={`${getStatusColor(message?.status)} text-xs`}
                          icon={<span>{getStatusIcon(message?.status)}</span>}
                        />
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Tooltip title="View Details">
                          <IconButton 
                            size="small"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Info className="size-4 text-gray-400" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </div>

                    {/* Selection Indicator */}
                    {selectedMessages.includes(message?._id) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-3 right-3 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Check className="size-4 text-white" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // List View
            <motion.div
              key="list"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-3"
            >
              {/* List Header */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-white/50 backdrop-blur-sm rounded-xl text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="col-span-1">
                  <input
                    type="checkbox"
                    checked={selectedMessages.length === messages.length}
                    onChange={selectAllMessages}
                    className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                  />
                </div>
                <div className="col-span-1">Status</div>
                <div className="col-span-2">Name</div>
                <div className="col-span-2">Email</div>
                <div className="col-span-3">Subject</div>
                <div className="col-span-2">Created</div>
                <div className="col-span-1">Actions</div>
              </motion.div>

              {messages.map((message, index) => (
                <motion.div
                  key={message?._id || index}
                  variants={itemVariants}
                  whileHover="hover"
                  custom={listItemVariants}
                  onHoverStart={() => setHoveredMessage(message?._id)}
                  onHoverEnd={() => setHoveredMessage(null)}
                  className={`relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group
                    ${hoveredMessage === message?._id ? 'ring-2 ring-indigo-300' : ''}
                  `}
                  onClick={() => handleOpenView(message)}
                  layout
                >
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      {/* Checkbox */}
                      <div className="col-span-1 flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedMessages.includes(message?._id)}
                          onChange={() => {}}
                          className="w-4 h-4 text-indigo-600 rounded text-black border-gray-300 focus:ring-indigo-500"
                          onClick={(e) => toggleMessageSelection(message?._id, e)}
                        />
                      </div>

                      {/* Status */}
                      <div className="col-span-1 flex items-center">
                        <Tooltip title={message?.status?.replace('_', ' ') || 'pending'}>
                          <span className={`w-3 h-3 rounded-full ${
                            message?.status === 'pending' ? 'bg-yellow-500 animate-pulse' :
                            message?.status === 'In_Progress' ? 'bg-blue-500' :
                            message?.status === 'Resolved' ? 'bg-green-500' :
                            message?.status === 'Rejected' ? 'bg-red-500' : 'bg-gray-500'
                          }`} />
                        </Tooltip>
                      </div>

                      {/* Name */}
                      <div className="col-span-2 flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {message?.name?.charAt(0) || '?'}
                        </div>
                        <span className="font-medium text-gray-900 truncate">
                          {message?.name || 'Unknown'}
                        </span>
                      </div>

                      {/* Email */}
                      <div className="col-span-2">
                        <p className="text-sm text-gray-600 truncate">
                          {message?.email || ''}
                        </p>
                      </div>

                      {/* Subject */}
                      <div className="col-span-3">
                        <p className="text-sm text-gray-600 truncate">
                          {message?.subject || 'Hotel Reservation'}
                        </p>
                      </div>

                      {/* Created At */}
                      <div className="col-span-2 flex items-center gap-2 text-sm text-gray-500">
                        <Schedule className="size-4" />
                        <span>{new Date(message?.createdAt).toLocaleDateString()}</span>
                      </div>

                      {/* Actions */}
                      <div className="col-span-1 flex items-center gap-1 justify-end">
                        <Tooltip title="Edit">
                          <IconButton 
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenEdit(message);
                            }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Edit className="size-4 text-blue-500" />
                          </IconButton>
                        </Tooltip>
                        
                        <Tooltip title="Delete">
                          <IconButton 
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteMessage(message);
                            }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Delete className="size-4 text-red-500" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </div>

                    {/* Mobile-only details */}
                    <div className="mt-2 md:hidden flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">{message?.email}</span>
                        <Chip 
                          label={message?.status?.replace('_', ' ') || 'pending'}
                          size="small"
                          className={`${getStatusColor(message?.status)} text-xs`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePageChange(pagination.page - 1)}
              disabled={pagination.page === 1}
              className="px-4 py-2 rounded-xl border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Previous
            </motion.button>
            
            <div className="flex items-center gap-2">
              {[...Array(Math.min(5, pagination.totalPages))].map((_, i) => {
                let pageNum;
                if (pagination.totalPages <= 5) {
                  pageNum = i + 1;
                } else if (pagination.page <= 3) {
                  pageNum = i + 1;
                } else if (pagination.page >= pagination.totalPages - 2) {
                  pageNum = pagination.totalPages - 4 + i;
                } else {
                  pageNum = pagination.page - 2 + i;
                }
                
                return (
                  <motion.button
                    key={pageNum}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-10 h-10 rounded-xl font-medium transition-all ${
                      pagination.page === pageNum
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {pageNum}
                  </motion.button>
                );
              })}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePageChange(pagination.page + 1)}
              disabled={pagination.page === pagination.totalPages}
              className="px-4 py-2 rounded-xl border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Next
            </motion.button>
          </motion.div>
        )}
        
        {/* Stats */}
        {messages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-4 text-sm text-gray-500"
          >
            Showing {messages.length} of {pagination.total} messages
          </motion.div>
        )}
      </main>

      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow z-10"
        onClick={handleOpenCreate}
      >
        <Send className="size-6" />
      </motion.button>
    </div>
  );
};
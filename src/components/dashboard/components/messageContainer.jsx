/* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Edit as EditIcon,
//   Delete as DeleteIcon,
//   Save as SaveIcon,
//   Cancel as CancelIcon,
//   ChevronLeft,
//   ChevronRight,
// } from "@mui/icons-material";

// export const MessagesManager = () => {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingId, setEditingId] = useState(null);
//   const [editForm, setEditForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//     status: "pending",
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const messagesPerPage = 10;

//   const statusOptions = [
//     { value: "pending", label: "Pending", color: "bg-yellow-100 text-yellow-800" },
//     { value: "in_progress", label: "In Progress", color: "bg-blue-100 text-blue-800" },
//     { value: "resolved", label: "Resolved", color: "bg-green-100 text-green-800" },
//     { value: "rejected", label: "Rejected", color: "bg-red-100 text-red-800" },
//   ];

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   const fetchMessages = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("https://hotel-nodejs-oa32.onrender.com/63729/892308");
//       const messagesData = response.data?.data || response.data || [];
//       setMessages(messagesData);
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to load messages");
//       console.error("Fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Pagination logic
//   const indexOfLastMessage = currentPage * messagesPerPage;
//   const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
//   const currentMessages = messages.slice(indexOfFirstMessage, indexOfLastMessage);
//   const totalPages = Math.ceil(messages.length / messagesPerPage);

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this message?")) {
//       try {
//         await axios.delete(`https://hotel-nodejs-oa32.onrender.com/63729/892308/${id}`);
//         setMessages(messages.filter((msg) => msg._id !== id));
        
//         // Reset to first page if current page becomes empty
//         if (currentMessages.length === 1 && currentPage > 1) {
//           setCurrentPage(currentPage - 1);
//         }
//       } catch (err) {
//         alert(err.response?.data?.message || "Delete failed!");
//       }
//     }
//   };

//   const handleEdit = (message) => {
//     setEditingId(message._id);
//     setEditForm({
//       name: message.name || "",
//       email: message.email || "",
//       subject: message.subject || "",
//       message: message.message || "",
//       status: message.status || "pending",
//     });
//   };

//   const handleUpdate = async () => {
//     try {
//       if (!editForm.name || !editForm.email || !editForm.message) {
//         throw new Error("Name, email and message are required");
//       }

//       const response = await axios.put(
//         `https://hotel-nodejs-oa32.onrender.com/63729/892308/${editingId}`,
//         editForm
//       );

//       setMessages(messages.map((msg) =>
//         msg._id === editingId ? { ...msg, ...editForm } : msg
//       ));
//       setEditingId(null);
//       alert("Message updated successfully!");
//     } catch (err) {
//       alert(err.response?.data?.message || "Update failed!");
//     }
//   };

//   const updateStatus = async (id, newStatus) => {
//     try {
//       const currentMessage = messages.find(msg => msg._id === id);
//       const updateData = {
//         ...currentMessage,
//         status: newStatus
//       };

//       await axios.put(
//         `https://hotel-nodejs-oa32.onrender.com/63729/892308/${id}`,
//         updateData
//       );

//       setMessages(messages.map(msg =>
//         msg._id === id ? { ...msg, status: newStatus } : msg
//       ));
//     } catch (err) {
//       alert(err.response?.data?.message || "Status update failed!");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-red-500 p-4">{error}</div>;
//   }

//   return (
//     <div className="bg-white rounded-lg shadow overflow-hidden">
//       <div className="p-4 border-b border-gray-200 bg-gray-50">
//         <h2 className="text-xl font-semibold">Messages Management</h2>
//         <p className="text-sm text-gray-600">
//           Showing {(currentPage - 1) * messagesPerPage + 1} to{" "}
//           {Math.min(currentPage * messagesPerPage, messages.length)} of{" "}
//           {messages.length} messages
//         </p>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {currentMessages.map((message) => (
//               <tr key={message._id}>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <select
//                     value={message.status}
//                     onChange={(e) => updateStatus(message._id, e.target.value)}
//                     className={`px-2 py-1 rounded text-xs ${
//                       statusOptions.find(opt => opt.value === message.status)?.color || "bg-gray-100"
//                     }`}
//                   >
//                     {statusOptions.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.label}
//                       </option>
//                     ))}
//                   </select>
//                 </td>
                
//                 {editingId === message._id ? (
//                   <>
//                     <td className="px-6 py-4">
//                       <input
//                         type="text"
//                         name="name"
//                         value={editForm.name}
//                         onChange={handleInputChange}
//                         className="border rounded px-2 py-1 w-full"
//                       />
//                     </td>
//                     <td className="px-6 py-4">
//                       <input
//                         type="email"
//                         name="email"
//                         value={editForm.email}
//                         onChange={handleInputChange}
//                         className="border rounded px-2 py-1 w-full"
//                       />
//                     </td>
//                     <td className="px-6 py-4">
//                       <input
//                         type="text"
//                         name="subject"
//                         value={editForm.subject}
//                         onChange={handleInputChange}
//                         className="border rounded px-2 py-1 w-full"
//                       />
//                     </td>
//                     <td className="px-6 py-4">
//                       <textarea
//                         name="message"
//                         value={editForm.message}
//                         onChange={handleInputChange}
//                         className="border rounded px-2 py-1 w-full"
//                         rows={2}
//                       />
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <button
//                         onClick={handleUpdate}
//                         className="text-green-600 mr-2"
//                         title="Save"
//                       >
//                         <SaveIcon />
//                       </button>
//                       <button
//                         onClick={() => setEditingId(null)}
//                         className="text-red-600"
//                         title="Cancel"
//                       >
//                         <CancelIcon />
//                       </button>
//                     </td>
//                   </>
//                 ) : (
//                   <>
//                     <td className="px-6 py-4 whitespace-nowrap">{message.name}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{message.email}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{message.subject || "-"}</td>
//                     <td className="px-6 py-4 max-w-xs truncate">{message.message}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <button
//                         onClick={() => handleEdit(message)}
//                         className="text-blue-600 mr-2"
//                         title="Edit"
//                       >
//                         <EditIcon />
//                       </button>
//                       <button
//                         onClick={() => handleDelete(message._id)}
//                         className="text-red-600"
//                         title="Delete"
//                       >
//                         <DeleteIcon />
//                       </button>
//                     </td>
//                   </>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {totalPages > 1 && (
//         <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="p-1 rounded disabled:opacity-50"
//           >
//             <ChevronLeft />
//           </button>
          
//           <div className="flex space-x-1">
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => handlePageChange(page)}
//                 className={`px-3 py-1 rounded ${
//                   currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
//                 }`}
//               >
//                 {page}
//               </button>
//             ))}
//           </div>
          
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="p-1 rounded disabled:opacity-50"
//           >
//             <ChevronRight />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };





/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Cancel,
  Delete,
  Edit,
  Search,
  SkipNext,
  SkipPrevious,
  CheckCircle,
} from "@mui/icons-material";
import { format, parseISO } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
  </div>
);

const MessageSearch = ({ onSearch, onClear }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      toast.error("Please enter a message ID");
      return;
    }
    onSearch(searchTerm);
  };

  return (
    <div className="mb-6 flex items-center gap-2">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by message ID..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
      </div>
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1"
      >
        <Search /> Search
      </button>
      <button
        onClick={() => {
          setSearchTerm("");
          onClear();
          toast.info("Search cleared");
        }}
        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-1"
      >
        <Cancel /> Clear
      </button>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const statusClasses = {
    pending: "bg-yellow-100 text-yellow-800",
    in_progress: "bg-blue-100 text-blue-800",
    resolved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };

  const statusLabels = {
    pending: "Pending",
    in_progress: "In Progress",
    resolved: "Resolved",
    rejected: "Rejected"
  };

  return (
    <span
      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
        statusClasses[status] || "bg-gray-100 text-gray-800"
      }`}
    >
      {statusLabels[status] || status}
    </span>
  );
};

export default function MessagesManager() {
  const [allMessages, setAllMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    status: "pending",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const messagesPerPage = 10;

  const statusOptions = ["pending", "in_progress", "resolved", "rejected"];

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://hotel-nodejs-oa32.onrender.com/63729/892308");
      const messagesData = response.data?.data || response.data || [];
      setAllMessages(messagesData);
      setFilteredMessages(messagesData);
      toast.success(`Loaded ${messagesData.length} messages`);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to load messages");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchById = async (id) => {
    if (!id) {
      setFilteredMessages(allMessages);
      return;
    }

    try {
      setSearchLoading(true);
      
      // First try API search
      try {
        const response = await axios.get(
          `https://hotel-nodejs-oa32.onrender.com/63729/892308/${id}`
        );
        if (response.data) {
          const result = Array.isArray(response.data) ? response.data : [response.data];
          setFilteredMessages(result);
          toast.success(`Found ${result.length} matching message(s)`);
          return;
        }
      } catch (apiError) {
        console.log("API search failed, falling back to client-side search", apiError);
      }
      
      // Fallback to client-side search
      const lowerCaseId = id.toLowerCase();
      const results = allMessages.filter(msg => 
        msg._id && msg._id.toLowerCase().includes(lowerCaseId)
      );
      
      if (results.length > 0) {
        setFilteredMessages(results);
        toast.success(`Found ${results.length} matching message(s)`);
      } else {
        setFilteredMessages([]);
        toast.warning("No messages found matching your search");
      }
    } catch (error) {
      console.error("Search error:", error);
      toast.error("Failed to search messages");
      setFilteredMessages([]);
    } finally {
      setSearchLoading(false);
    }
  };

  const handleClearSearch = () => {
    setFilteredMessages(allMessages);
    setCurrentPage(1);
  };

  const handleDelete = async (id) => {
    try {
      if (!window.confirm("Are you sure you want to delete this message?")) return;
      setLoading(true);
      
      await axios.delete(
        `https://hotel-nodejs-oa32.onrender.com/63729/892308/${id}`
      );
      
      setAllMessages(prev => prev.filter(msg => msg._id !== id));
      setFilteredMessages(prev => prev.filter(msg => msg._id !== id));
      
      toast.success("Message deleted successfully");
      
      // Reset to first page if current page becomes empty
      if (filteredMessages.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete message");
    } finally {
      setLoading(false);
    }
  };

  const startEditing = (message) => {
    setEditingId(message._id);
    setFormData({
      name: message.name || "",
      email: message.email || "",
      subject: message.subject || "",
      message: message.message || "",
      status: message.status || "pending",
    });
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.status) newErrors.status = "Status is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = async () => {
    if (!validateForm()) {
      toast.error("Please fix the form errors before submitting");
      return;
    }

    try {
      if (!window.confirm("Are you sure you want to update this message?")) return;
      setLoading(true);
      
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        status: formData.status,
      };

      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/63729/892308/${editingId}`,
        payload
      );

      const updatedMessage = response.data?.updatedMessage || response.data?.data || response.data;
      
      setAllMessages(prev => prev.map(msg => 
        msg._id === editingId ? { ...msg, ...updatedMessage } : msg
      ));
      setFilteredMessages(prev => prev.map(msg => 
        msg._id === editingId ? { ...msg, ...updatedMessage } : msg
      ));
      
      setEditingId(null);
      toast.success("Message updated successfully");
    } catch (err) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      }
      toast.error(err.response?.data?.message || "Failed to update message");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      if (!window.confirm(`Change message status to "${newStatus}"?`)) return;
      setLoading(true);

      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/63729/892308/${id}`,
        { status: newStatus }
      );

      setAllMessages(prev => prev.map(msg =>
        msg._id === id ? { ...msg, status: newStatus } : msg
      ));
      setFilteredMessages(prev => prev.map(msg =>
        msg._id === id ? { ...msg, status: newStatus } : msg
      ));

      toast.success(`Status updated to ${newStatus}`);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update status");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const cancelEditing = () => {
    setEditingId(null);
    setErrors({});
    toast.info("Editing cancelled");
  };

  // Pagination logic
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = filteredMessages.slice(indexOfFirstMessage, indexOfLastMessage);
  const totalPages = Math.ceil(filteredMessages.length / messagesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading && allMessages.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <h1 className="text-3xl font-bold text-gray-800 mb-6">Messages Management</h1>
      
      <MessageSearch 
        onSearch={handleSearchById} 
        onClear={handleClearSearch}
      />
      
      {searchLoading && <LoadingSpinner />}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentMessages.length > 0 ? (
                currentMessages.map((message) => (
                  <tr key={message._id} className="hover:bg-gray-50">
                    {editingId === message._id ? (
                      <>
                        {/* Edit Mode */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {message._id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="space-y-2">
                            <div>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`border rounded px-3 py-2 w-full ${
                                  errors.name ? "border-red-500" : "border-gray-300"
                                }`}
                              />
                              {errors.name && (
                                <p className="text-red-500 text-xs">{errors.name}</p>
                              )}
                            </div>
                            <div>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`border rounded px-3 py-2 w-full ${
                                  errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                              />
                              {errors.email && (
                                <p className="text-red-500 text-xs">{errors.email}</p>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className={`border rounded px-3 py-2 w-full ${
                              errors.subject ? "border-red-500" : "border-gray-300"
                            }`}
                          />
                          {errors.subject && (
                            <p className="text-red-500 text-xs">{errors.subject}</p>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className={`border rounded px-3 py-2 w-full h-24 ${
                              errors.message ? "border-red-500" : "border-gray-300"
                            }`}
                          />
                          {errors.message && (
                            <p className="text-red-500 text-xs">{errors.message}</p>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            name="status"
                            value={formData.status}
                            onChange={(e) => handleStatusChange(message._id, e.target.value)}
                            className={`border rounded px-3 py-2 w-full ${
                              errors.status ? "border-red-500" : "border-gray-300"
                            }`}
                          >
                            {statusOptions.map((status) => (
                              <option key={status} value={status}>
                                {status.replace('_', ' ')}
                              </option>
                            ))}
                          </select>
                          {errors.status && (
                            <p className="text-red-500 text-xs">{errors.status}</p>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {message.createdAt && format(parseISO(message.createdAt), "MMM d, yyyy")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-2">
                            <button
                              onClick={handleUpdate}
                              className="text-green-600 hover:text-green-800"
                              title="Save"
                            >
                              <CheckCircle />
                            </button>
                            <button
                              onClick={cancelEditing}
                              className="text-red-600 hover:text-red-800"
                              title="Cancel"
                            >
                              <Cancel />
                            </button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        {/* View Mode */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {message._id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {message.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {message.email}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            ID: {message._id}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {message.subject || "-"}
                        </td>
                        <td className="px-6 py-4 max-w-xs">
                          <div className="text-sm text-gray-900 line-clamp-3">
                            {message.message}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={message.status} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {message.createdAt && format(parseISO(message.createdAt), "MMM d, yyyy")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => startEditing(message)}
                              className="text-blue-600 hover:text-blue-800"
                              title="Edit"
                            >
                              <Edit />
                            </button>
                            <button
                              onClick={() => handleDelete(message._id)}
                              className="text-red-600 hover:text-red-800"
                              title="Delete"
                            >
                              <Delete />
                            </button>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                    {filteredMessages.length === 0 ? "No messages found" : "No messages on this page"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Previous
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{indexOfFirstMessage + 1}</span> to{" "}
                  <span className="font-medium">
                    {Math.min(indexOfLastMessage, filteredMessages.length)}
                  </span> of <span className="font-medium">{filteredMessages.length}</span> messages
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">First</span>
                    «
                  </button>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Previous</span>
                    ‹
                  </button>

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
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                          currentPage === pageNum
                            ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                            : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Next</span>
                    ›
                  </button>
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Last</span>
                    »
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
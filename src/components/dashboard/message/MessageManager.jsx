/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Cancel,
  Delete,
  Edit,
  Save,
  SkipNext,
  SkipPrevious,
  CheckCircle,
  Warning,
  Info,
  Search,
} from "@mui/icons-material";
import { format, parseISO } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StatusBadge = ({ status }) => {
  const statusClasses = {
    pending: "bg-yellow-100 text-yellow-800",
    in_progress: "bg-blue-100 text-blue-800",
    resolved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
        statusClasses[status] || "bg-gray-100 text-gray-800"
      }`}
    >
      {status.replace("_", " ")}
    </span>
  );
};

const MessageSearch = ({ onSearchResults, onLoading }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      if (!searchTerm) {
        toast.error("Please enter a search term");
        return;
      }

      onLoading(true);
      const response = await axios.get(
        `https://hotel-nodejs-oa32.onrender.com/63729/892308/search?query=${searchTerm}`
      );

      const messagesData = response.data?.data || response.data || [];
      onSearchResults(messagesData);
      toast.success(`Found ${messagesData.length} messages`);
    } catch (error) {
      console.error("Search error:", error);
      toast.error(error.response?.data?.message || "Failed to search messages");
      onSearchResults([]);
    } finally {
      onLoading(false);
    }
  };

  return (
    <div className="mb-6 flex items-center gap-2">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by name, email or subject..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
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
          onSearchResults(null);
          toast.info("Search cleared");
        }}
        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-1"
      >
        <Cancel /> Clear
      </button>
    </div>
  );
};

export const MessagesManager = () => {
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    status: "pending",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const messagesPerPage = 10;

  const statusOptions = [
    { value: "pending", label: "Pending" },
    { value: "in_progress", label: "In Progress" },
    { value: "resolved", label: "Resolved" },
    { value: "rejected", label: "Rejected" },
  ];

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when messages change
  }, [filteredMessages]);

  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://hotel-nodejs-oa32.onrender.com/63729/892308"
      );

      const messagesData = response.data?.data || response.data || [];
      const formattedMessages = messagesData.map((msg) => ({
        ...msg,
        status: msg.status || "pending",
      }));

      setMessages(formattedMessages);
      setFilteredMessages(formattedMessages);
      toast.success(`Loaded ${formattedMessages.length} messages`);
    } catch (err) {
      console.error("Fetch error:", err);
      toast.error(err.response?.data?.message || "Failed to load messages");
    } finally {
      setIsLoading(false);
    }
  };

  // Pagination logic
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = filteredMessages.slice(
    indexOfFirstMessage,
    indexOfLastMessage
  );
  const totalPages = Math.ceil(filteredMessages.length / messagesPerPage);

  const handleSearchResults = (results) => {
    if (results === null) {
      setFilteredMessages(messages);
    } else {
      setFilteredMessages(results);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!editForm.name.trim()) newErrors.name = "Name is required";
    if (!editForm.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editForm.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!editForm.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;

    try {
      setIsLoading(true);
      await axios.delete(
        `https://hotel-nodejs-oa32.onrender.com/63729/892308/${id}`
      );

      setMessages(messages.filter((msg) => msg._id !== id));
      setFilteredMessages(filteredMessages.filter((msg) => msg._id !== id));
      toast.success("Message deleted successfully");

      // Adjust pagination if needed
      if (currentMessages.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } catch (err) {
      console.error("Delete error:", err);
      toast.error(err.response?.data?.message || "Failed to delete message");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (message) => {
    setEditingId(message._id);
    setEditForm({
      name: message.name || "",
      phone: message.phone || "",
      email: message.email || "",
      subject: message.subject || "",
      message: message.message || "",
      status: message.status || "pending",
    });
    setErrors({});
  };

  const handleUpdate = async () => {
    if (!validateForm()) return;

    try {
      setIsLoading(true);
      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/63729/892308/${editingId}`,
        editForm
      );

      const updatedMessage = response.data?.data || response.data;

      setMessages(
        messages.map((msg) =>
          msg._id === editingId ? { ...msg, ...updatedMessage } : msg
        )
      );
      setFilteredMessages(
        filteredMessages.map((msg) =>
          msg._id === editingId ? { ...msg, ...updatedMessage } : msg
        )
      );
      setEditingId(null);
      toast.success("Message updated successfully");
    } catch (err) {
      console.error("Update error:", err);
      toast.error(err.response?.data?.message || "Failed to update message");
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/63729/892308/status/${id}`,
        { status: newStatus }
      );

      setMessages(
        messages.map((msg) =>
          msg._id === id ? { ...msg, status: newStatus } : msg
        )
      );
      setFilteredMessages(
        filteredMessages.map((msg) =>
          msg._id === id ? { ...msg, status: newStatus } : msg
        )
      );
      toast.success(`Status updated to ${newStatus.replace("_", " ")}`);
    } catch (err) {
      console.error("Status update error:", err);
      toast.error(err.response?.data?.message || "Failed to update status");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const cancelEditing = () => {
    setEditingId(null);
    setErrors({});
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer position="top-right" autoClose={3000} />

      <MessageSearch
        onSearchResults={handleSearchResults}
        onLoading={setSearchLoading}
      />

      {(isLoading || searchLoading) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guest
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Message
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentMessages.length > 0 ? (
                currentMessages.map((message) => (
                  <tr key={message._id} className="hover:bg-gray-50">
                    {editingId === message._id ? (
                      <>
                        {/* Edit Mode */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            name="status"
                            value={editForm.status}
                            onChange={handleInputChange}
                            className={`border rounded px-3 py-2 w-full ${
                              errors.status
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          >
                            {statusOptions.map((option) => (
                              <option
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="text"
                            name="name"
                            value={editForm.name}
                            onChange={handleInputChange}
                            className={`border rounded px-3 py-2 w-full ${
                              errors.name ? "border-red-500" : "border-gray-300"
                            }`}
                            placeholder="Name"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.name}
                            </p>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="space-y-2">
                            <input
                              type="email"
                              name="email"
                              value={editForm.email}
                              onChange={handleInputChange}
                              className={`border rounded px-3 py-2 w-full ${
                                errors.email
                                  ? "border-red-500"
                                  : "border-gray-300"
                              }`}
                              placeholder="Email"
                            />
                            {errors.email && (
                              <p className="text-red-500 text-xs mt-1">
                                {errors.email}
                              </p>
                            )}
                            <input
                              type="text"
                              name="phone"
                              value={editForm.phone}
                              onChange={handleInputChange}
                              className="border rounded px-3 py-2 w-full border-gray-300"
                              placeholder="Phone"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="text"
                            name="subject"
                            value={editForm.subject}
                            onChange={handleInputChange}
                            className="border rounded px-3 py-2 w-full border-gray-300"
                            placeholder="Subject"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <textarea
                            name="message"
                            value={editForm.message}
                            onChange={handleInputChange}
                            className={`border rounded px-3 py-2 w-full ${
                              errors.message
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                            rows="3"
                            placeholder="Message"
                          />
                          {errors.message && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.message}
                            </p>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={handleUpdate}
                              className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                              <CheckCircle className="mr-1" /> Save
                            </button>
                            <button
                              onClick={cancelEditing}
                              className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              <Cancel className="mr-1" /> Cancel
                            </button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        {/* View Mode */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={message.status} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {message.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {message.email}
                          </div>
                          {message.phone && (
                            <div className="text-sm text-gray-500">
                              {message.phone}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {message.subject || "-"}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900 line-clamp-2">
                            {message.message}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEdit(message)}
                              className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              <Edit className="mr-1" /> Edit
                            </button>
                            <button
                              onClick={() => handleDelete(message._id)}
                              className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                              <Delete className="mr-1" /> Delete
                            </button>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No messages found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
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
                  Showing{" "}
                  <span className="font-medium">
                    {(currentPage - 1) * messagesPerPage + 1}
                  </span>{" "}
                  to{" "}
                  <span className="font-medium">
                    {Math.min(
                      currentPage * messagesPerPage,
                      filteredMessages.length
                    )}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium">{filteredMessages.length}</span>{" "}
                  messages
                </p>
              </div>
              <div>
                <nav
                  className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination"
                >
                  <button
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">First</span>«
                  </button>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Previous</span>‹
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
                    <span className="sr-only">Next</span>›
                  </button>
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Last</span>»
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
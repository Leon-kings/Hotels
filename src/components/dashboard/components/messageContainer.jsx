/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";

export const MessagesManager = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    status: "pending",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 10;

  const statusOptions = [
    { value: "pending", label: "Pending", color: "bg-yellow-100 text-yellow-800" },
    { value: "in_progress", label: "In Progress", color: "bg-blue-100 text-blue-800" },
    { value: "resolved", label: "Resolved", color: "bg-green-100 text-green-800" },
    { value: "rejected", label: "Rejected", color: "bg-red-100 text-red-800" },
  ];

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://hotel-nodejs-oa32.onrender.com/63729/892308");
      const messagesData = response.data?.data || response.data || [];
      setMessages(messagesData);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load messages");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Pagination logic
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = messages.slice(indexOfFirstMessage, indexOfLastMessage);
  const totalPages = Math.ceil(messages.length / messagesPerPage);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await axios.delete(`https://hotel-nodejs-oa32.onrender.com/63729/892308/${id}`);
        setMessages(messages.filter((msg) => msg._id !== id));
        
        // Reset to first page if current page becomes empty
        if (currentMessages.length === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      } catch (err) {
        alert(err.response?.data?.message || "Delete failed!");
      }
    }
  };

  const handleEdit = (message) => {
    setEditingId(message._id);
    setEditForm({
      name: message.name || "",
      email: message.email || "",
      subject: message.subject || "",
      message: message.message || "",
      status: message.status || "pending",
    });
  };

  const handleUpdate = async () => {
    try {
      if (!editForm.name || !editForm.email || !editForm.message) {
        throw new Error("Name, email and message are required");
      }

      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/63729/892308/${editingId}`,
        editForm
      );

      setMessages(messages.map((msg) =>
        msg._id === editingId ? { ...msg, ...editForm } : msg
      ));
      setEditingId(null);
      alert("Message updated successfully!");
    } catch (err) {
      alert(err.response?.data?.message || "Update failed!");
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const currentMessage = messages.find(msg => msg._id === id);
      const updateData = {
        ...currentMessage,
        status: newStatus
      };

      await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/63729/892308/${id}`,
        updateData
      );

      setMessages(messages.map(msg =>
        msg._id === id ? { ...msg, status: newStatus } : msg
      ));
    } catch (err) {
      alert(err.response?.data?.message || "Status update failed!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-xl font-semibold">Messages Management</h2>
        <p className="text-sm text-gray-600">
          Showing {(currentPage - 1) * messagesPerPage + 1} to{" "}
          {Math.min(currentPage * messagesPerPage, messages.length)} of{" "}
          {messages.length} messages
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentMessages.map((message) => (
              <tr key={message._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={message.status}
                    onChange={(e) => updateStatus(message._id, e.target.value)}
                    className={`px-2 py-1 rounded text-xs ${
                      statusOptions.find(opt => opt.value === message.status)?.color || "bg-gray-100"
                    }`}
                  >
                    {statusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </td>
                
                {editingId === message._id ? (
                  <>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        name="name"
                        value={editForm.name}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1 w-full"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="email"
                        name="email"
                        value={editForm.email}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1 w-full"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        name="subject"
                        value={editForm.subject}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1 w-full"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <textarea
                        name="message"
                        value={editForm.message}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1 w-full"
                        rows={2}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={handleUpdate}
                        className="text-green-600 mr-2"
                        title="Save"
                      >
                        <SaveIcon />
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="text-red-600"
                        title="Cancel"
                      >
                        <CancelIcon />
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-4 whitespace-nowrap">{message.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{message.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{message.subject || "-"}</td>
                    <td className="px-6 py-4 max-w-xs truncate">{message.message}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleEdit(message)}
                        className="text-blue-600 mr-2"
                        title="Edit"
                      >
                        <EditIcon />
                      </button>
                      <button
                        onClick={() => handleDelete(message._id)}
                        className="text-red-600"
                        title="Delete"
                      >
                        <DeleteIcon />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-1 rounded disabled:opacity-50"
          >
            <ChevronLeft />
          </button>
          
          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-1 rounded disabled:opacity-50"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};
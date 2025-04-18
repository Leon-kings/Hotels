import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  SkipPrevious,
  SkipNext,
} from "@mui/icons-material";

export const MessagesManager = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    status: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 8;

  // Status options with visual styling
  const statusOptions = [
    {
      value: "pending",
      label: "Pending",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      value: "in_progress",
      label: "In Progress",
      color: "bg-blue-100 text-blue-800",
    },
    {
      value: "resolved",
      label: "Resolved",
      color: "bg-green-100 text-green-800",
    },
    { value: "rejected", label: "Rejected", color: "bg-red-100 text-red-800" },
  ];

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://hotel-nodejs-oa32.onrender.com/63729/892308"
      );

      const messagesData = response.data?.data || response.data || [];
      const formattedMessages = messagesData.map((msg) => ({
        ...msg,
        status: msg.status || "pending", // Default status
      }));

      setMessages(formattedMessages);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load messages");
      console.error("Fetch error:", {
        error: err,
        response: err.response,
        request: err.request,
      });
    } finally {
      setLoading(false);
    }
  };

  // Pagination logic
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = messages.slice(
    indexOfFirstMessage,
    indexOfLastMessage
  );
  const totalPages = Math.ceil(messages.length / messagesPerPage);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await axios.delete(
          `https://hotel-nodejs-oa32.onrender.com/63729/892308/${id}`
        );
        setMessages(messages.filter((msg) => msg._id !== id));

        // Adjust pagination if needed
        if (currentMessages.length === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      } catch (err) {
        alert(err.response?.data?.message || "Delete failed!");
        console.error("Delete error:", err);
      }
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
      status: message.status || "",
    });
  };

  const handleUpdate = async () => {
    try {
      // Basic validation
      if (!editForm.name || !editForm.email) {
        throw new Error("Name and email are required");
      }

      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/63729/89230/${editingId}`,
        editForm,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.data) {
        throw new Error("No data returned from server");
      }

      setMessages(
        messages.map((msg) =>
          msg._id === editingId ? { ...msg, ...editForm } : msg
        )
      );
      setEditingId(null);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.response?.data?.error || err.message;
      console.error("Update failed:", {
        error: err,
        response: err.response,
        request: err.request,
      });
      alert(`Update failed: ${errorMessage}`);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      // 1. Fetch existing data
      const { data: existingData } = await axios.get(
        `https://hotel-nodejs-oa32.onrender.com/63729/892308/${id}`
      );

      // 2. Update only status while keeping other fields
      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/63729/892308/${id}`,
        { ...existingData, status: newStatus }, // Merge old data + new status
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);
      // 3. Optimistic UI update
      setMessages((prev) =>
        prev.map((msg) =>
          msg._id === id ? { ...msg, status: newStatus } : msg
        )
      );

      alert("Status updated!");
    } catch (err) {
      console.error("Update failed:", err.response?.data || err.message);
      alert("Failed to update status.", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
        <h4 className="text-lg font-semibold">Messages Management</h4>
        <div className="text-sm text-gray-600">
          Page {currentPage} of {totalPages} ({messages.length} messages)
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
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
            {currentMessages.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                  No messages found
                </td>
              </tr>
            ) : (
              currentMessages.map((message) => (
                <tr key={message._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={message.status}
                      onChange={(e) =>
                        updateStatus(message._id, e.target.value)
                      }
                      className={`text-xs px-3 py-1 rounded-full ${
                        statusOptions.find(
                          (opt) => opt.value === message.status
                        )?.color || "bg-gray-100"
                      }`}
                    >
                      {statusOptions.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          className={option.color}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </td>
                  {editingId === message._id ? (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          name="name"
                          value={editForm.name}
                          onChange={handleInputChange}
                          className="border rounded px-3 py-2 w-full"
                          required
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="email"
                          name="email"
                          value={editForm.email}
                          onChange={handleInputChange}
                          className="border rounded px-3 py-2 w-full"
                          required
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          name="subject"
                          value={editForm.subject}
                          onChange={handleInputChange}
                          className="border rounded px-3 py-2 w-full"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <textarea
                          name="message"
                          value={editForm.message}
                          onChange={handleInputChange}
                          className="border rounded px-3 py-2 w-full"
                          rows="2"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap space-x-2">
                        <button
                          onClick={handleUpdate}
                          className="text-green-600 hover:text-green-900"
                          title="Save"
                        >
                          <SaveIcon className="text-blue-500 size-6"/>
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="text-red-600 hover:text-red-900"
                          title="Cancel"
                        >
                          <CancelIcon className="text-red-500 size-6"/>
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {message.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {message.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {message.subject || "-"}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">
                          {message.message}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap space-x-2">
                        <button
                          onClick={() => handleEdit(message)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit"
                        >
                          <EditIcon className="text-green-500 size-6"/>
                        </button>
                        <button
                          onClick={() => handleDelete(message._id)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete"
                        >
                          <DeleteIcon className="text-red-500 size-6"/>
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {messages.length > messagesPerPage && (
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1 ? "text-gray-400" : "hover:bg-gray-100"
            }`}
          >
            <SkipPrevious />
          </button>

          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => paginate(num)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === num
                    ? "bg-purple-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {num}
              </button>
            ))}
          </div>

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages ? "text-gray-400" : "hover:bg-gray-100"
            }`}
          >
            <SkipNext />
          </button>
        </div>
      )}
    </div>
  );
};

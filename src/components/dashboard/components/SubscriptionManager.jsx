import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  People as PeopleIcon,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  RadioButtonUnchecked,
  DoneAll,
  SkipPrevious,
  SkipNext,
} from "@mui/icons-material";

export const SubscriptionManager = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    status: "active",
    plan: "",
    subscriptionDate: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const subscribersPerPage = 8;

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://hotel-nodejs-oa32.onrender.com/83920/92303"
      );
      setSubscribers(response.data.data || response.data || []);
      console.log(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load subscribers");
    } finally {
      setLoading(false);
    }
  };

  // Get current subscribers for pagination
  const indexOfLastSubscriber = currentPage * subscribersPerPage;
  const indexOfFirstSubscriber = indexOfLastSubscriber - subscribersPerPage;
  const currentSubscribers = subscribers.slice(
    indexOfFirstSubscriber,
    indexOfLastSubscriber
  );
  const totalPages = Math.ceil(subscribers.length / subscribersPerPage);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this subscriber?")) {
      try {
        await axios.delete(
          `https://hotel-nodejs-oa32.onrender.com/83920/92303/${id}`
        );
        setSubscribers(subscribers.filter((sub) => sub._id !== id));
        // Reset to first page if current page becomes empty
        if (currentSubscribers.length === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      } catch (err) {
        alert(err, "Delete failed !!");
      }
    }
  };

  const handleEdit = (subscriber) => {
    setEditingId(subscriber._id);
    setEditForm({
      name: subscriber.name || "",
      email: subscriber.email || "",
      phone: subscriber.phone || "",
      status: subscriber.status || "active",
      plan: subscriber.plan || "",
      subscriptionDate: subscriber.subscriptionDate || "",
    });
  };

  const handleUpdate = async (id) => {
    try {
      if (!editForm.name || !editForm.email) {
        throw new Error("Name and email are required");
      }

      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/83920/92303/${id}`,
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

      setSubscribers(
        subscribers.map((sub) => (sub._id === id ? { ...sub, ...editForm } : sub))
      );
      setEditingId(null);
      alert("Subscriber updated successfully!");
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

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleStatus = async (id) => {
    try {
      const updatedSubscribers = subscribers.map(sub => {
        if (sub._id === id) {
          return { 
            ...sub, 
            status: sub.status === "active" ? "inactive" : "active" 
          };
        }
        return sub;
      });
      
      setSubscribers(updatedSubscribers);
      
      // In a real app, you would also update the backend
      await axios.patch(
        `https://hotel-nodejs-oa32.onrender.com/83920/92303/${id}`,
        { status: updatedSubscribers.find(sub => sub._id === id).status }
      );
    } catch (err) {
      console.error("Failed to update status:", err);
      alert("Failed to update status");
    }
  };

  const markAllAsActive = async () => {
    try {
      const updatedSubscribers = subscribers.map(sub => ({ ...sub, status: "active" }));
      setSubscribers(updatedSubscribers);
      
      // In a real app, you would also update the backend
      await axios.patch(
        "https://hotel-nodejs-oa32.onrender.com/83920/92303"
      );
    } catch (err) {
      console.error("Failed to mark all as active:", err);
      alert("Failed to mark all as active");
    }
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
        <div className="flex items-center">
          <PeopleIcon className="text-purple-500 mr-2" />
          <h4 className="text-lg font-semibold">Subscribers Management</h4>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            Page {currentPage} of {totalPages} ({subscribers.length} total subscribers)
          </div>
          <button
            onClick={markAllAsActive}
            className="flex items-center px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            title="Mark all as active"
          >
            <DoneAll className="mr-1" fontSize="small" />
            <span className="text-sm">Mark All Active</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[30px]">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[200px]">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">
                State
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">
               Source
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">
                Subscription Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentSubscribers.length === 0 ? (
              <tr>
                <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                  No subscribers found on this page
                </td>
              </tr>
            ) : (
              currentSubscribers.map((subscriber) => (
                <tr 
                  key={subscriber._id} 
                  className={`hover:bg-gray-50 ${subscriber.status === 'active' ? 'bg-green-50' : 'bg-red-50'}`}
                >
                  <td className="px-2 py-4 whitespace-nowrap text-center">
                    <button 
                      onClick={() => toggleStatus(subscriber._id)}
                      title={subscriber.status === 'active' ? 'Active - Click to deactivate' : 'Inactive - Click to activate'}
                    >
                      {subscriber.status === 'active' ? (
                        <CheckCircle className="text-green-500" />
                      ) : (
                        <RadioButtonUnchecked className="text-red-500" />
                      )}
                    </button>
                  </td>
                  {editingId === subscriber._id ? (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap">
                       {editForm._id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="email"
                          name="email"
                          value={editForm.email}
                          onChange={handleInputChange}
                          className="border rounded px-3 py-2 w-full min-w-[200px]"
                          required
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          name="phone"
                          value='Active'
                          onChange={handleInputChange}
                          className="border rounded px-3 py-2 w-full min-w-[150px]"
                        />
                      </td>
                      <td className="px-6 py-4 text-black whitespace-nowrap">
                       {editForm.source} 
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {new Date(subscriber.subscribedAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap space-x-2">
                        <button
                          onClick={() => handleUpdate(subscriber._id)}
                          className="text-green-600 hover:text-green-900 p-1"
                          title="Save"
                        >
                          <SaveIcon className="text-green-500" />
                        </button>
                        <button
                          onClick={handleCancel}
                          className="text-gray-600 hover:text-gray-900 p-1"
                          title="Cancel"
                        >
                          <CancelIcon className="text-red-500" />
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-3 text-left whitespace-nowrap min-w-[150px]">
                        <div className="text-sm text-gray-900">
                          {subscriber._id || "-"}
                        </div>
                      </td>
                      <td className="px-6 py-3 text-left whitespace-nowrap min-w-[200px]">
                        <div className="text-sm text-gray-900">
                          {subscriber.email || "-"}
                        </div>
                      </td>
                      <td className="px-6 py-3 text-left whitespace-nowrap min-w-[150px]">
                        <div className="text-sm text-blue-600">
                          {"Active"}
                        </div>
                      </td>
                      <td className="px-6 py-3 text-left whitespace-nowrap min-w-[150px]">
                        <div className="text-sm text-gray-900">
                          {subscriber.source || "-"}
                        </div>
                      </td>
                      <td className="px-6 py-3 text-left whitespace-nowrap min-w-[150px]">
                        <div className="text-sm text-gray-900">
                          {new Date(subscriber.subscribedAt).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap min-w-[120px] space-x-2">
                        <button
                          onClick={() => handleEdit(subscriber)}
                          className="text-blue-600 hover:text-blue-900 p-1"
                          title="Edit"
                        >
                          <EditIcon className="text-blue-400" />
                        </button>
                        <button
                          onClick={() => handleDelete(subscriber._id)}
                          className="text-red-600 hover:text-red-900 p-1"
                          title="Delete"
                        >
                          <DeleteIcon className="text-red-400" />
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

      {/* Pagination */}
      {subscribers.length > subscribersPerPage && (
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center px-4 py-2 rounded-md ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <SkipPrevious className="text-green-800" />
          </button>

          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === number
                      ? "bg-purple-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {number}
                </button>
              )
            )}
          </div>

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <SkipNext className="text-green-800" />
          </button>
        </div>
      )}
    </div>
  );
};
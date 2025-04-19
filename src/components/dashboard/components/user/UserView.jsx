/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Cancel,
  Delete,
  Edit,
  Search,
  SkipNext,
  SkipPrevious,
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Lock as LockIcon,
  AdminPanelSettings as AdminIcon,
  AccountCircle as UserIcon,
  Check as CheckIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

const UserSearch = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://hotel-nodejs-oa32.onrender.com/37829/7892/search?term=${searchTerm}`
      );
      onSearchResults(response.data.users || []);
    } catch (error) {
      console.error("Search error:", error);
      onSearchResults([]);
    }
  };

  return (
    <div className="mb-4 bg-white text-black">
      <input
        type="text"
        placeholder="Search users..."
        className="border p-2 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-500 text-white p-2 rounded"
      >
        <Search />
      </button>
      <button
        onClick={() => {
          setSearchTerm("");
          onSearchResults(null);
        }}
        className="ml-2 bg-gray-500 text-white p-2 rounded"
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default function UserView() {
  const [allUsers, setAllUsers] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "user",
    status: "active",
  });
  const [errors, setErrors] = useState({});
  const usersPerPage = 10;

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://hotel-nodejs-oa32.onrender.com/37829/7892"
        );
        const usersData =
          response.data?.data || response.data?.data?.users || [];
        setAllUsers(usersData);
        setTotalPages(Math.ceil(usersData.length / usersPerPage));
        updateCurrentUsers(usersData, 1);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Update current users when page changes
  useEffect(() => {
    updateCurrentUsers(allUsers, currentPage);
  }, [currentPage, allUsers]);

  const updateCurrentUsers = (users, page) => {
    const startIndex = (page - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    setCurrentUsers(users.slice(startIndex, endIndex));
  };

  // Delete user
  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this user?")) {
        console.log('Attempting to delete user with ID:', id);
        
        // Add authentication headers if needed
        const config = {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        };
  
        const response = await axios.delete(
          `https://hotel-nodejs-oa32.onrender.com/37829/7892/${id}`, // Updated endpoint
          config
        );
  
        console.log('Delete response:', response.data.data);
        
        // Ensure we're comparing the same types
        setAllUsers(prevUsers => 
          prevUsers.filter((user) => String(user._id) === String(id))
        );
        
        alert('User deleted successfully');
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        alert(`Error: ${error.response.data.message || error.message}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request:', error.request);
        alert('No response received from server');
      } else {
        // Something happened in setting up the request
        console.error('Error message:', error.message);
        alert(`Error: ${error.message}`);
      }
    }
  };

  // Handle edit
  const startEditing = (user) => {
    setEditingId(user._id);
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone || "",
      role: user.role,
      status: user.status || "active",
    });
    setErrors({});
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Update user
  const handleUpdate = async (userId) => {
    if (!validateForm()) {
      return;
    }

    try {
      if (!window.confirm("Are you sure you want to update this user?")) {
        return;
      }

      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/37829/7892/${userId}`,
        formData
      );

      const updatedUser =
        response.data?.updatedUser || response.data.data || response.data;

      setAllUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, ...updatedUser } : user
        )
      );

      setEditingId(null);
    } catch (error) {
      console.error("User update error:", error);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      }
    }
  };

  // Quick status update
  const handleStatusChange = async (userId, newStatus) => {
    try {
      if (!window.confirm(`Change user status to "${newStatus}"?`)) {
        return;
      }

      setAllUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, status: newStatus } : user
        )
      );

      await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/37829/7892/${userId}`,
        { role: newStatus }
      );
    } catch (error) {
      console.error("Status update failed:", error);
      setAllUsers((prevUsers) => [...prevUsers]);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingId(null);
    setErrors({});
  };

  return (
    <div className="container mx-auto p-4">
      <UserSearch
        onSearchResults={(results) => {
          if (results === null) {
            updateCurrentUsers(allUsers, 1);
            setTotalPages(Math.ceil(allUsers.length / usersPerPage));
          } else {
            setCurrentUsers(results.slice(0, usersPerPage));
            setTotalPages(Math.ceil(results.length / usersPerPage));
          }
        }}
      />

      <div className="bg-white text-black rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table min-w-full divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-gray-200">
              {currentUsers.map((user) => (
                <tr key={user._id}>
                  {editingId === user._id ? (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <PersonIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`border rounded px-2 py-1 w-full pl-10 ${
                              errors.name ? "border-red-500" : ""
                            }`}
                          />
                        </div>
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.name}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <EmailIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`border rounded px-2 py-1 w-full pl-10 ${
                              errors.email ? "border-red-500" : ""
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <PhoneIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`border rounded px-2 py-1 w-full pl-10 ${
                              errors.phone ? "border-red-500" : ""
                            }`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            {formData.role === "admin" ? (
                              <AdminIcon className="h-5 w-5 text-gray-400" />
                            ) : (
                              <UserIcon className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                          <select
                            name="role"
                            value={formData.role}
                            onSubmit={handleStatusChange}
                            className={`border rounded px-2 py-1 w-full pl-10 appearance-none ${
                              errors.role ? "border-red-500" : ""
                            }`}
                          >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                          </select>
                        </div>
                        {errors.role && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.role}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <select
                          name="status"
                          value={formData.status}
                          onChange={handleInputChange}
                          className={`border rounded px-2 py-1 w-full ${
                            errors.status ? "border-red-500" : ""
                          }`}
                        >
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                          <option value="suspended">Suspended</option>
                        </select>
                        {errors.status && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.status}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                        <button
                          onClick={() => handleUpdate(user._id)}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        >
                          <CheckIcon className="text-blue-500 size-6" />
                        </button>
                        <button
                          onClick={cancelEditing}
                          className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                        >
                          <CloseIcon className="text-red-500" />
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <PersonIcon className="h-5 w-5 text-gray-400 mr-2" />
                          {user.fullname}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <EmailIcon className="h-5 w-5 text-gray-400 mr-2" />
                          {user.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
                          {user.phone || "N/A"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          {user.role === "admin" ? (
                            <>
                              <AdminIcon className="h-5 w-5 text-purple-400 mr-2" />
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                Admin
                              </span>
                            </>
                          ) : (
                            <>
                              <UserIcon className="h-5 w-5 text-blue-400 mr-2" />
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                User
                              </span>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.status === "active"
                              ? "bg-green-100 text-green-800"
                              : user.status === "inactive"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          onClick={() => startEditing(user)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          <Edit className="text-green-500 size-6" />
                        </button>
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          <Delete className="text-red-400 size-6" />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {allUsers.length === 0 && (
          <div className="p-4 text-center text-gray-500">No users found</div>
        )}

        {totalPages > 1 && (
          <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
            <div>
              Showing {(currentPage - 1) * usersPerPage + 1} to{" "}
              {Math.min(currentPage * usersPerPage, allUsers.length)} of{" "}
              {allUsers.length} users
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                <SkipPrevious />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 rounded ${
                      currentPage === page
                        ? "bg-blue-600 text-white"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                <SkipNext />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

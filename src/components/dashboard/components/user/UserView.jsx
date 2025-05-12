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
} from "@mui/icons-material";

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
  </div>
);

const SearchModal = ({ 
  results, 
  onClose, 
  onDelete, 
  onEdit, 
  editingId,
  formData,
  errors,
  handleInputChange,
  handleUpdate,
  cancelEditing
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">
              Search Results ({results.length})
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <Close />
            </button>
          </div>
          
          {results.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
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
                <tbody className="bg-white divide-y divide-gray-200">
                  {results.map((user) => (
                    <tr key={user._id} className="hover:bg-gray-50">
                      {editingId === user._id ? (
                        <>
                          {/* Edit Mode */}
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user._id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              type="text"
                              name="fullname"
                              value={formData.fullname}
                              onChange={handleInputChange}
                              className={`border rounded px-3 py-2 w-full ${
                                errors.fullname ? "border-red-500" : "border-gray-300"
                              }`}
                            />
                            {errors.fullname && (
                              <p className="text-red-500 text-xs">{errors.fullname}</p>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
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
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="border rounded px-3 py-2 w-full"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <select
                              name="status"
                              value={formData.status}
                              onChange={handleInputChange}
                              className="border rounded px-3 py-2 w-full"
                            >
                              <option value="user">User</option>
                              <option value="admin">Admin</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap space-x-2">
                            <button
                              onClick={() => handleUpdate(user._id)}
                              className="bg-green-500 text-white px-3 py-1 rounded"
                            >
                              <Save />
                            </button>
                            <button
                              onClick={cancelEditing}
                              className="bg-gray-500 text-white px-3 py-1 rounded"
                            >
                              <Cancel />
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          {/* View Mode */}
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user._id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {user.fullname}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.phone || "N/A"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                user.status === "admin"
                                  ? "bg-purple-100 text-purple-800"
                                  : "bg-green-100 text-green-800"
                              }`}
                            >
                              {user.status === "admin" ? "Admin" : "User"}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap space-x-2">
                            <button
                              onClick={() => onEdit(user)}
                              className="bg-blue-500 text-white px-3 py-1 rounded"
                            >
                              <Edit />
                            </button>
                            <button
                              onClick={() => onDelete(user._id)}
                              className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                              <Delete />
                            </button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No matching users found
            </div>
          )}
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
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
          placeholder="Search by name, email or ID..."
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
          onSearch("");
        }}
        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-1"
      >
        <Close /> Clear
      </button>
    </div>
  );
};

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    status: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
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
      
      // First try searching via API
      try {
        const response = await axios.get(
          `https://hotel-nodejs-oa32.onrender.com/37829/7892/term=${term}`
        );
        if (response.data.users && response.data.users.length > 0) {
          setSearchResults(response.data.users);
          return;
        }
      } catch (apiError) {
        console.log("API search failed, falling back to client-side search",apiError);
      }
      
      // Fallback to client-side search if API fails or returns no results
      const lowerCaseTerm = term.toLowerCase();
      const results = users.filter(user => 
        (user.fullname && user.fullname.toLowerCase().includes(lowerCaseTerm)) ||
        (user.email && user.email.toLowerCase().includes(lowerCaseTerm)) ||
        (user._id && user._id.toLowerCase().includes(lowerCaseTerm))
      );
      
      setSearchResults(results);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    } finally {
      setSearchLoading(false);
    }
  };

  const closeSearchModal = () => {
    setSearchResults(null);
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this user?")) {
        setLoading(true);
        await axios.delete(
          `https://hotel-nodejs-oa32.onrender.com/37829/7892/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
          }
        );
        // Update both main users list and search results if they exist
        setUsers(prev => prev.filter(user => user._id !== id));
        if (searchResults) {
          setSearchResults(prev => prev.filter(user => user._id !== id));
        }
        setSuccessMessage("User deleted successfully");
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert(error.response?.data?.message || "Failed to delete user");
    } finally {
      setLoading(false);
    }
  };

  const startEditing = (user) => {
    setEditingId(user._id);
    setFormData({
      fullname: user.fullname,
      email: user.email,
      phone: user.phone || "",
      status: user.status || "user",
      password: ""
    });
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullname.trim()) newErrors.fullname = "Fullname is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (formData.password && formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = async (userId) => {
    if (!validateForm()) return;

    try {
      if (!window.confirm("Are you sure you want to update this user?")) return;
      setLoading(true);
      
      const updateData = {};
      const originalUser = users.find(u => u._id === userId);
      
      if (formData.fullname !== originalUser.fullname) updateData.fullname = formData.fullname;
      if (formData.email !== originalUser.email) updateData.email = formData.email;
      if (formData.phone !== originalUser.phone) updateData.phone = formData.phone;
      if (formData.status !== originalUser.status) updateData.status = formData.status;
      if (formData.password) updateData.password = formData.password;

      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/37829/7892/${userId}`,
        updateData
      );

      const updatedUser = response.data?.updatedUser || response.data?.data || response.data;
      
      // Update both main users list and search results if they exist
      setUsers(prev => prev.map(user => 
        user._id === userId ? { ...user, ...updatedUser } : user
      ));
      if (searchResults) {
        setSearchResults(prev => prev.map(user => 
          user._id === userId ? { ...user, ...updatedUser } : user
        ));
      }
      
      setEditingId(null);
      setSuccessMessage("User updated successfully");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("User update error:", error);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        alert(error.response?.data?.message || "Failed to update user");
      }
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
  };

  // Pagination logic
  const currentUsers = users.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Management</h1>
      
      <UserSearch onSearch={handleSearch} />
      
      {searchLoading && <LoadingSpinner />}
      {searchResults !== null && (
        <SearchModal 
          results={searchResults} 
          onClose={closeSearchModal}
          onDelete={handleDelete}
          onEdit={startEditing}
          editingId={editingId}
          formData={formData}
          errors={errors}
          handleInputChange={handleInputChange}
          handleUpdate={handleUpdate}
          cancelEditing={cancelEditing}
        />
      )}

      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
          {successMessage}
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentUsers.length > 0 ? (
                    currentUsers.map((user) => (
                      <tr key={user._id} className="hover:bg-gray-50">
                        {editingId === user._id ? (
                          <>
                            {/* Edit Mode */}
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                  <Person className="text-blue-600" />
                                </div>
                                <div className="ml-4">
                                  <input
                                    type="text"
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleInputChange}
                                    className={`border rounded px-3 py-2 w-full ${
                                      errors.fullname ? "border-red-500" : "border-gray-300"
                                    }`}
                                    placeholder="Full Name"
                                  />
                                  {errors.fullname && (
                                    <p className="mt-1 text-sm text-red-600">{errors.fullname}</p>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="space-y-2">
                                <div>
                                  <div className="flex items-center">
                                    <Email className="text-gray-400 mr-2" />
                                    <input
                                      type="email"
                                      name="email"
                                      value={formData.email}
                                      onChange={handleInputChange}
                                      className={`border rounded px-3 py-2 w-full ${
                                        errors.email ? "border-red-500" : "border-gray-300"
                                      }`}
                                      placeholder="Email"
                                    />
                                  </div>
                                  {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                  )}
                                </div>
                                <div>
                                  <div className="flex items-center">
                                    <Phone className="text-gray-400 mr-2" />
                                    <input
                                      type="tel"
                                      name="phone"
                                      value={formData.phone}
                                      onChange={handleInputChange}
                                      className="border border-gray-300 rounded px-3 py-2 w-full"
                                      placeholder="Phone"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div className="flex items-center">
                                    <Lock className="text-gray-400 mr-2" />
                                    <input
                                      type="password"
                                      name="password"
                                      value={formData.password}
                                      onChange={handleInputChange}
                                      className={`border rounded px-3 py-2 w-full ${
                                        errors.password ? "border-red-500" : "border-gray-300"
                                      }`}
                                      placeholder="New Password (leave blank to keep current)"
                                    />
                                  </div>
                                  {errors.password && (
                                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <select
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                              >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                              </select>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => handleUpdate(user._id)}
                                  className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                  <Save className="mr-1" /> Save
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
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                  {user.status === "admin" ? (
                                    <AdminPanelSettings className="text-blue-600" />
                                  ) : (
                                    <Person className="text-blue-600" />
                                  )}
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {user.fullname}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {user._id}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900 flex items-center">
                                <Email className="text-gray-400 mr-2" />
                                {user.email}
                              </div>
                              <div className="text-sm text-gray-500 flex items-center mt-1">
                                <Phone className="text-gray-400 mr-2" />
                                {user.phone || "N/A"}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  user.status === "admin"
                                    ? "bg-purple-100 text-purple-800"
                                    : "bg-green-100 text-green-800"
                                }`}
                              >
                                {user.status === "admin" ? "Admin" : "User"}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => startEditing(user)}
                                  className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                  <Edit className="mr-1" /> Edit
                                </button>
                                <button
                                  onClick={() => handleDelete(user._id)}
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
                      <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                        No users found
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
                      Showing <span className="font-medium">{(currentPage - 1) * usersPerPage + 1}</span> to{" "}
                      <span className="font-medium">
                        {Math.min(currentPage * usersPerPage, users.length)}
                      </span>{" "}
                      of <span className="font-medium">{users.length}</span> users
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
          </>
        )}
      </div>
    </div>
  );
};

export default UserTable;
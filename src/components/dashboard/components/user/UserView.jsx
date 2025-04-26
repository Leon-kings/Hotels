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
  Save,
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
    fullname: "",
    email: "",
    phone: "",
    status: "",
    password:""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true); // <--- added
  const usersPerPage = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://hotel-nodejs-oa32.onrender.com/37829/7892"
        );
        const usersData =
          response.data?.users || response.data?.data?.users || [];
        setAllUsers(usersData);
        setTotalPages(Math.ceil(usersData.length / usersPerPage));
        updateCurrentUsers(usersData, 1);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    updateCurrentUsers(allUsers, currentPage);
  }, [currentPage, allUsers]);

  const updateCurrentUsers = (users, page) => {
    const startIndex = (page - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    setCurrentUsers(users.slice(startIndex, endIndex));
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this user?")) {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        };
        await axios.delete(
          `https://hotel-nodejs-oa32.onrender.com/37829/7892/${id}`,
          config
        );
        setAllUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        alert("User deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert(error.response?.data?.message || error.message);
    }
  };

  const startEditing = (user) => {
    setEditingId(user._id);
    setFormData({
      fullname: user.fullname,
      email: user.email,
      phone: user.phone || "",
      status: user.status || "",
      password:user.password
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = async (userId) => {
    if (!validateForm()) return;

    try {
      if (!window.confirm("Are you sure you want to update this user?")) return;
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
      alert('Update successfuly');
    } catch (error) {
      console.error("User update error:", error);
      alert('Update failled', error);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      }
    }
  };

  const handleStatusChange = async (userId, newStatus) => {
    try {
      if (!window.confirm(`Change user status to "${newStatus}"?`)) return;
      setAllUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, status: newStatus } : user
        )
      );
      await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/37829/7892/${userId}`,
        { status: newStatus }
      );
    } catch (error) {
      console.error("Status update failed:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
        {/* Loading state */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="table min-w-full divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Fullname
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Password
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-gray-200">
                  {currentUsers.map((user) => (
                    <tr key={user._id}>
                      {editingId === user._id ? (
                        <>
                          {/* Inputs for editing */}
                          <td className="px-6 py-4 whitespace-nowrap text-sm ">
                            {user._id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <input
                              type="text"
                              name="fullname"
                              value={formData.fullname}
                              onChange={handleInputChange}
                              className={`border rounded px-2 py-1 w-full ${
                                errors.fullname ? "border-red-500" : ""
                              }`}
                            />
                            {errors.fullname && (
                              <p className="text-red-500 text-xs">
                                {errors.fullname}
                              </p>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className={`border rounded px-2 py-1 w-full ${
                                errors.email ? "border-red-500" : ""
                              }`}
                            />
                            {errors.email && (
                              <p className="text-red-500 text-xs">
                                {errors.email}
                              </p>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="border rounded px-2 py-1 w-full"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <input
                              type="password"
                              name="passsword"
                              value={formData.password}
                              onChange={handleInputChange}
                              className="border rounded px-2 py-1 w-full"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <select
                              name="status"
                              value={formData.status}
                              onChange={handleStatusChange}
                              className="border rounded px-2 py-1 w-full"
                            >
                              <option value="user">User</option> 
                              <option value="admin">Admin</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                            <button
                              onClick={() => handleUpdate(user._id)}
                              className="bg-green-500 text-white px-3 py-1 rounded"
                            >
                              <Save className="size-6" />{" "}
                            </button>
                            <button
                              onClick={cancelEditing}
                              className="bg-gray-500 text-white px-3 py-1 rounded"
                            >
                              <Cancel className="size-6" />{" "}
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {user._id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {user.fullname}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {user.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {user.phone || "N/A"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {user.password || "**************"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {user.status}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                            <button
                              onClick={() => startEditing(user)}
                              className="bg-blue-500 text-white px-3 py-1 rounded"
                            >
                              {" "}
                              <Edit className="size-6" />{" "}
                            </button>
                            <button
                              onClick={() => handleDelete(user._id)}
                              className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                              <Delete className="size-6" />
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
              <div className="p-4 text-center text-gray-500">
                No users found
              </div>
            )}

            {/* Pagination */}
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
                    className="px-3 py-1 rounded bg-blue-500 text-white"
                  >
                    Prev
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-1 rounded ${
                          currentPage === page ? "bg-blue-600" : "bg-blue-500"
                        } text-white`}
                      >
                        {page}
                      </button>
                    )
                  )}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded bg-blue-500 text-white"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

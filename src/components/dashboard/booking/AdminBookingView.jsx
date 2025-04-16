/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import {
  Cancel,
  Delete,
  Edit,
  Search,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";

const BookingSearch = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://hotel-nodejs-oa32.onrender.com/84383/92823/search?term=${searchTerm}&status=cancelled`
      );
      onSearchResults(response.data.bookings || []);
    } catch (error) {
      console.error("Search error:", error);
      onSearchResults([]);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search cancelled bookings..."
        className="border p-2 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-500 text-white p-2 rounded"
      >
        <Search className="text-blue-500 size-6" />
      </button>
      <button
        onClick={() => {
          setSearchTerm("");
          onSearchResults(null);
        }}
        className="ml-2 bg-gray-500 text-white p-2 rounded"
      >
        <Cancel className="text-red-500 size-6" />
      </button>
    </div>
  );
};

export default function AdminBookingView() {
  const [allBookings, setAllBookings] = useState([]);
  const [currentBookings, setCurrentBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [editingBooking, setEditingBooking] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    adult: "",
    children: "",
    roomType: "",
    status: "",
  });
  const [errors, setErrors] = useState({});
  const bookingsPerPage = 10;

  // Fetch all bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          "https://hotel-nodejs-oa32.onrender.com/84383/92823"
        );

        let bookingsData = [];
        if (response.data?.bookings) {
          bookingsData = response.data.bookings;
        } else if (response.data?.data?.bookings) {
          bookingsData = response.data.data.bookings;
        } else {
          console.warn("Unexpected response structure:", response.data);
        }

        setAllBookings(bookingsData);
        setTotalPages(Math.ceil(bookingsData.length / bookingsPerPage));
        updateCurrentBookings(bookingsData, 1);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  // Update current bookings when page changes
  useEffect(() => {
    updateCurrentBookings(allBookings, currentPage);
  }, [currentPage, allBookings]);

  const updateCurrentBookings = (bookings, page) => {
    const startIndex = (page - 1) * bookingsPerPage;
    const endIndex = startIndex + bookingsPerPage;
    setCurrentBookings(bookings.slice(startIndex, endIndex));
  };

  // Delete booking
  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this booking?")) {
        await axios.delete(
          `https://hotel-nodejs-oa32.onrender.com/84383/92823/${id}`
        );
        setAllBookings(allBookings.filter((booking) => booking._id !== id));
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
      alert("Failed to delete booking. Please try again.");
    }
  };

  // Handle edit
  const handleEdit = (booking) => {
    setEditingBooking(booking._id);
    setFormData({
      name: booking.name,
      email: booking.email,
      checkInDate: booking.checkInDate.split("T")[0],
      checkOutDate: booking.checkOutDate.split("T")[0],
      adult: booking.adult,
      children: booking.children,
      roomType: booking.roomType,
      status: booking.status,
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

    if (!formData.checkInDate) {
      newErrors.checkInDate = "Check-in date is required";
    }

    if (!formData.checkOutDate) {
      newErrors.checkOutDate = "Check-out date is required";
    } else if (
      new Date(formData.checkOutDate) <= new Date(formData.checkInDate)
    ) {
      newErrors.checkOutDate = "Check-out must be after check-in";
    }

    if (!formData.roomType) {
      newErrors.roomType = "Room type is required";
    }

    if (!formData.status) {
      newErrors.status = "Status is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Update booking
  const handleUpdate = async (bookingId) => {
    if (!validateForm()) {
      return;
    }

    try {
      if (!window.confirm("Are you sure you want to update this booking?")) {
        return;
      }

      const payload = {
        ...formData,
        checkInDate: new Date(formData.checkInDate).toISOString(),
        checkOutDate: new Date(formData.checkOutDate).toISOString(),
      };

      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/84383/92823/${bookingId}`,
        payload
      );

      const updatedBooking =
        response.data?.updatedBooking || response.data.data || response.data;

      if (!updatedBooking || !updatedBooking._id) {
        throw new Error("No valid booking data returned from server");
      }

      setAllBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking._id === bookingId
            ? { ...booking, ...updatedBooking }
            : booking
        )
      );

      setEditingBooking(null);
      alert("Booking updated successfully!");
    } catch (error) {
      console.error("Booking update error:", {
        message: error.message,
        response: error.response?.data,
      });

      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        const errorMessage =
          error.response?.data?.message ||
          "Failed to update booking. Please try again.";
        alert(`Error: ${errorMessage}`);
      }
    }
  };

  // Quick status update
  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      // Confirm with the user before proceeding
      if (
        !window.confirm(
          `Are you sure you want to change the status to "${newStatus}"?`
        )
      ) {
        return; // Exit if user cancels
      }

      // Optimistic UI update (apply changes before API call)
      setAllBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking._id === bookingId
            ? { ...booking, status: newStatus }
            : booking
        )
      );

      // API call
      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/84383/92823/${bookingId}`,
        { status: newStatus },
        {
          headers: {
            "Content-Type": "application/json",
            // Add auth header if required (e.g., JWT):
            // "Authorization": `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      alert("Update confirmed");
      // Verify server response (optional)
      if (!response.data || response.data.error) {
        throw new Error(
          response.data?.error || "Server did not confirm the update"
        );
      }

      // Success feedback (optional)
      alert(`Status successfully updated to "${newStatus}"!`);
    } catch (error) {
      // Revert optimistic update on failure
      setAllBookings((prevBookings) => [...prevBookings]);

      // Detailed error logging
      console.error("Status update failed:", {
        error: error.message,
        serverResponse: error.response?.data,
        statusCode: error.response?.status,
      });

      // User-friendly error message
      const errorMessage =
        error.response?.data?.message ||
        "Failed to update status. Please try again.";

      alert(`Error: ${errorMessage}`);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
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

  return (
    <div className="container mx-auto p-4">
      <BookingSearch
        onSearchResults={(results) => {
          if (results === null) {
            updateCurrentBookings(allBookings, 1);
            setTotalPages(Math.ceil(allBookings.length / bookingsPerPage));
          } else {
            setCurrentBookings(results.slice(0, bookingsPerPage));
            setTotalPages(Math.ceil(results.length / bookingsPerPage));
          }
        }}
      />

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check-In
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check-Out
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Room Type
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
              {currentBookings.map((booking) => (
                <tr key={booking._id}>
                  {editingBooking === booking._id ? (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`border rounded px-2 py-1 w-full ${
                            errors.name ? "border-red-500" : ""
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.name}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
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
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="date"
                          name="checkInDate"
                          value={formData.checkInDate}
                          onChange={handleInputChange}
                          className={`border rounded px-2 py-1 w-full ${
                            errors.checkInDate ? "border-red-500" : ""
                          }`}
                        />
                        {errors.checkInDate && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.checkInDate}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="date"
                          name="checkOutDate"
                          value={formData.checkOutDate}
                          onChange={handleInputChange}
                          className={`border rounded px-2 py-1 w-full ${
                            errors.checkOutDate ? "border-red-500" : ""
                          }`}
                        />
                        {errors.checkOutDate && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.checkOutDate}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          name="roomType"
                          value={formData.roomType}
                          onChange={handleInputChange}
                          className={`border rounded px-2 py-1 w-full ${
                            errors.roomType ? "border-red-500" : ""
                          }`}
                        >
                          <option value="">Select Room Type</option>
                          <option value="deluxe">Deluxe</option>
                          <option value="standard">Standard</option>
                          <option value="suite">Suite</option>
                        </select>
                        {errors.roomType && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.roomType}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          name="status"
                          value={formData.status}
                          onChange={handleInputChange}
                          className={`border rounded px-2 py-1 w-full ${
                            errors.status ? "border-red-500" : ""
                          }`}
                        >
                          <option value="">Select Status</option>
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="cancelled">Cancelled</option>
                          <option value="completed">Completed</option>
                        </select>
                        {errors.status && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.status}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap space-x-2">
                        <button
                          onClick={() => handleUpdate(booking._id)}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        >
                          <Edit className="text-green-200" />
                        </button>
                        <button
                          onClick={() => setEditingBooking(null)}
                          className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                        >
                          <Cancel className="text-red-400" />
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {booking.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {booking.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {new Date(booking.checkInDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {new Date(booking.checkOutDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap capitalize">
                        {booking.roomType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={booking.status}
                          onChange={(e) =>
                            handleStatusChange(booking._id, e.target.value)
                          }
                          className="border rounded px-2 py-1"
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="cancelled">Cancelled</option>
                          <option value="completed">Completed</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap space-x-2">
                        <button
                          onClick={() => handleEdit(booking)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          <Edit />
                        </button>
                        <button
                          onClick={() => handleDelete(booking._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
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

        {allBookings.length === 0 && (
          <div className="p-4 text-center text-gray-500">No bookings found</div>
        )}

        {totalPages > 1 && (
          <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
            <div>
              Showing {(currentPage - 1) * bookingsPerPage + 1} to{" "}
              {Math.min(currentPage * bookingsPerPage, allBookings.length)} of{" "}
              {allBookings.length} bookings
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

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
  Warning,
  Info,
} from "@mui/icons-material";
import { format, parseISO } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingSearch = ({ onSearchResults, onLoading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = async () => {
    try {
      if (!searchTerm) {
        toast.error("Please enter a booking ID");
        return;
      }

      onLoading(true);
      const response = await axios.get(
        `https://hotel-nodejs-oa32.onrender.com/84383/92823/${searchTerm}`
      );

      // Check if data exists in expected format
      if (!response.data?.bookings) {
        throw new Error("Unexpected API response format");
      }

      onSearchResults(response.data.bookings);
      toast.success("Fetched successfully !!");
      // ... success toast
    } catch (error) {
      // Enhanced error logging
      console.error("Full error:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
      toast.error(error.response?.data?.message || "Failed to search bookings");
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
          placeholder="Search by booking ID..."
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

const StatusBadge = ({ status }) => {
  const statusClasses = {
    pending: "bg-yellow-100 text-yellow-800",
    confirmed: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
    completed: "bg-blue-100 text-blue-800",
  };

  return (
    <span
      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
        statusClasses[status] || "bg-gray-100 text-gray-800"
      }`}
    >
      {status}
    </span>
  );
};

export default function AdminBookingView() {
  const [allBookings, setAllBookings] = useState([]);
  const [currentBookings, setCurrentBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    roomType: "",
    status: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const bookingsPerPage = 10;

  const roomTypes = ["standard", "deluxe", "suite", "family", "executive"];
  const statusOptions = ["pending", "confirmed", "cancelled", "completed"];

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://hotel-nodejs-oa32.onrender.com/84383/92823"
        );
        const bookingsData =
          response.data?.bookings || response.data?.data?.bookings || [];
        setAllBookings(bookingsData);
        setTotalPages(Math.ceil(bookingsData.length / bookingsPerPage));
        updateCurrentBookings(bookingsData, 1);
        toast.success(`Loaded ${bookingsData.length} bookings`);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        toast.error("Failed to load bookings");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, []);

  useEffect(() => {
    updateCurrentBookings(allBookings, currentPage);
  }, [currentPage, allBookings]);

  const updateCurrentBookings = (bookings, page) => {
    const startIndex = (page - 1) * bookingsPerPage;
    const endIndex = startIndex + bookingsPerPage;
    setCurrentBookings(bookings.slice(startIndex, endIndex));
  };

  const handleSearchResults = (results) => {
    if (results === null) {
      updateCurrentBookings(allBookings, 1);
      setTotalPages(Math.ceil(allBookings.length / bookingsPerPage));
    } else {
      setCurrentBookings(results.slice(0, bookingsPerPage));
      setTotalPages(Math.ceil(results.length / bookingsPerPage));
    }
    setCurrentPage(1);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.checkInDate)
      newErrors.checkInDate = "Check-in date is required";
    if (!formData.checkOutDate)
      newErrors.checkOutDate = "Check-out date is required";
    if (!formData.roomType) newErrors.roomType = "Room type is required";
    if (!formData.status) newErrors.status = "Status is required";

    // Validate check-out date is after check-in date
    if (formData.checkInDate && formData.checkOutDate) {
      const checkIn = new Date(formData.checkInDate);
      const checkOut = new Date(formData.checkOutDate);
      if (checkOut <= checkIn) {
        newErrors.checkOutDate = "Check-out must be after check-in";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDelete = async (id) => {
    try {
      if (!window.confirm("Are you sure you want to delete this booking?"))
        return;
      setIsLoading(true);

      await axios.delete(
        `https://hotel-nodejs-oa32.onrender.com/84383/92823/${id}`
      );

      setAllBookings((prev) => prev.filter((booking) => booking._id !== id));
      toast.success("Booking deleted successfully");
    } catch (error) {
      console.error("Error deleting booking:", error);
      toast.error(error.response?.data?.message || "Failed to delete booking");
    } finally {
      setIsLoading(false);
    }
  };

  const startEditing = (booking) => {
    setEditingId(booking._id);
    setFormData({
      name: booking.name,
      email: booking.email,
      checkInDate: format(parseISO(booking.checkInDate), "yyyy-MM-dd"),
      checkOutDate: format(parseISO(booking.checkOutDate), "yyyy-MM-dd"),
      roomType: booking.roomType,
      status: booking.status,
    });
    setErrors({});
  };

  const handleUpdate = async (bookingId) => {
    if (!validateForm()) return;

    try {
      if (!window.confirm("Are you sure you want to update this booking?"))
        return;
      setIsLoading(true);

      const payload = {
        name: formData.name,
        email: formData.email,
        checkInDate: new Date(formData.checkInDate).toISOString(),
        checkOutDate: new Date(formData.checkOutDate).toISOString(),
        roomType: formData.roomType,
        status: formData.status,
      };

      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/84383/92823/${bookingId}`,
        payload
      );

      const updatedBooking =
        response.data?.updatedBooking || response.data?.data || response.data;

      setAllBookings((prev) =>
        prev.map((booking) =>
          booking._id === bookingId
            ? { ...booking, ...updatedBooking }
            : booking
        )
      );

      setEditingId(null);
      toast.success("Booking updated successfully");
    } catch (error) {
      console.error("Booking update error:", error);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      }
      toast.error(error.response?.data?.message || "Failed to update booking");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      if (!window.confirm(`Change booking status to "${newStatus}"?`)) return;
      setIsLoading(true);

      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/84383/92823/${bookingId}`,
        { status: newStatus }
      );

      setAllBookings((prev) =>
        prev.map((booking) =>
          booking._id === bookingId
            ? { ...booking, status: newStatus }
            : booking
        )
      );

      toast.success(`Status updated to ${newStatus}`);
    } catch (error) {
      console.error("Status update failed:", error);
      toast.error(error.response?.data?.message || "Failed to update status");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

      <BookingSearch
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
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guest
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dates
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Room
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
              {currentBookings.length > 0 ? (
                currentBookings.map((booking) => (
                  <tr key={booking._id} className="hover:bg-gray-50">
                    {editingId === booking._id ? (
                      <>
                        {/* Edit Mode */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {booking._id}
                          </div>
                          <div className="text-sm font-medium text-gray-500">
                            {booking.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="space-y-2">
                            <div>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`border rounded px-3 text-black py-2 w-full ${
                                  errors.name
                                    ? "border-red-500"
                                    : "border-gray-300"
                                }`}
                                placeholder="Guest Name"
                              />
                              {errors.name && (
                                <p className="text-red-500 text-xs mt-1">
                                  {errors.name}
                                </p>
                              )}
                            </div>
                            <div>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`border rounded px-3 py-2 text-black w-full ${
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
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="space-y-2">
                            <div>
                              <label className="block text-sm text-gray-500 mb-1">
                                Check-in
                              </label>
                              <input
                                type="date"
                                name="checkInDate"
                                value={formData.checkInDate}
                                onChange={handleInputChange}
                                className={`border rounded text-black px-3 py-2 w-full ${
                                  errors.checkInDate
                                    ? "border-red-500"
                                    : "border-gray-300"
                                }`}
                              />
                              {errors.checkInDate && (
                                <p className="text-red-500 text-xs mt-1">
                                  {errors.checkInDate}
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="block text-sm text-gray-500 mb-1">
                                Check-out
                              </label>
                              <input
                                type="date"
                                name="checkOutDate"
                                value={formData.checkOutDate}
                                onChange={handleInputChange}
                                className={`border rounded px-3 text-black py-2 w-full ${
                                  errors.checkOutDate
                                    ? "border-red-500"
                                    : "border-gray-300"
                                }`}
                              />
                              {errors.checkOutDate && (
                                <p className="text-red-500 text-xs mt-1">
                                  {errors.checkOutDate}
                                </p>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            name="roomType"
                            value={formData.roomType}
                            onChange={handleInputChange}
                            className={`border rounded px-3 text-black py-2 w-full ${
                              errors.roomType
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          >
                            <option value="">Select Room Type</option>
                            {roomTypes.map((type) => (
                              <option
                                key={type}
                                value={type}
                                className="capitalize text-black"
                              >
                                {type}
                              </option>
                            ))}
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
                            onChange={handleStatusChange}
                            className={`border rounded px-3 text-black py-2 w-full ${
                              errors.status
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          >
                            <option value="">Select Status</option>
                            {statusOptions.map((status) => (
                              <option
                                key={status}
                                value={status}
                                className="capitalize text-black"
                              >
                                {status}
                              </option>
                            ))}
                          </select>
                          {errors.status && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.status}
                            </p>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleUpdate(booking._id)}
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
                          <div className="text-sm font-medium text-gray-900">
                            {booking._id}
                          </div>
                          <div className="text-sm font-medium text-gray-400">
                            {booking.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {booking.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {format(
                              parseISO(booking.checkInDate),
                              "MMM d, yyyy"
                            )}
                          </div>
                          <div className="text-sm text-gray-500">
                            to{" "}
                            {format(
                              parseISO(booking.checkOutDate),
                              "MMM d, yyyy"
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-900 whitespace-nowrap capitalize">
                          {booking.roomType}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={booking.status} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => startEditing(booking)}
                              className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              <Edit className="mr-1" /> Edit
                            </button>
                            <button
                              onClick={() => handleDelete(booking._id)}
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
                    colSpan="5"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No bookings found
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
                    {(currentPage - 1) * bookingsPerPage + 1}
                  </span>{" "}
                  to{" "}
                  <span className="font-medium">
                    {Math.min(
                      currentPage * bookingsPerPage,
                      allBookings.length
                    )}
                  </span>{" "}
                  of <span className="font-medium">{allBookings.length}</span>{" "}
                  bookings
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
}

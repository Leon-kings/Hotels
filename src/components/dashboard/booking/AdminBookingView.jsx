/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Delete, Edit, SkipNext, SkipPrevious } from "@mui/icons-material";

const BookingSearch = ({ onSearchResults }) => {
  const [searchCriteria, setSearchCriteria] = useState({
    searchTerm: "",
    searchType: "name",
    dateRange: {
      startDate: "",
      endDate: "",
    },
    status: "",
  });

  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);

  const searchTypes = [
    { value: "name", label: "Guest Name" },
    { value: "bookingId", label: "Booking ID" },
    { value: "email", label: "Email" },
    { value: "date", label: "Date Range" },
    { value: "status", label: "Status" },
  ];

  const statusOptions = ["confirmed", "pending", "cancelled", "completed"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria((prev) => ({
      ...prev,
      dateRange: {
        ...prev.dateRange,
        [name]: value,
      },
    }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    setError(null);

    try {
      let queryParams = {};

      switch (searchCriteria.searchType) {
        case "name":
          queryParams.name = searchCriteria.searchTerm;
          break;
        case "bookingId":
          queryParams.bookingId = searchCriteria.searchTerm;
          break;
        case "email":
          queryParams.email = searchCriteria.searchTerm;
          break;
        case "date":
          if (searchCriteria.dateRange.startDate) {
            queryParams.startDate = new Date(
              searchCriteria.dateRange.startDate
            ).toISOString();
          }
          if (searchCriteria.dateRange.endDate) {
            queryParams.endDate = new Date(
              searchCriteria.dateRange.endDate
            ).toISOString();
          }
          break;
        case "status":
          queryParams.status = searchCriteria.status;
          break;
        default:
          break;
      }

      const response = await axios.get(
        "https://hotel-nodejs-oa32.onrender.com/84383/92823",
        {
          params: queryParams,
        }
      );

      onSearchResults(response.data.bookings || []);
    } catch (err) {
      console.error("Search error:", err);
      setError(err.response?.data?.message || "Failed to search bookings");
      onSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const resetSearch = () => {
    setSearchCriteria({
      searchTerm: "",
      searchType: "name",
      dateRange: {
        startDate: "",
        endDate: "",
      },
      status: "",
    });
    onSearchResults(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Search Bookings</h2>

      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Search By
            </label>
            <select
              name="searchType"
              value={searchCriteria.searchType}
              onChange={handleInputChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              {searchTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {["name", "bookingId", "email"].includes(
            searchCriteria.searchType
          ) && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {
                  searchTypes.find((t) => t.value === searchCriteria.searchType)
                    ?.label
                }
              </label>
              <input
                type="text"
                name="searchTerm"
                value={searchCriteria.searchTerm}
                onChange={handleInputChange}
                placeholder={`Enter ${searchCriteria.searchType}`}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          )}

          {searchCriteria.searchType === "date" && (
            <div className="col-span-1 md:col-span-2 space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Date Range
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="date"
                    name="startDate"
                    value={searchCriteria.dateRange.startDate}
                    onChange={handleDateChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex items-center justify-center text-gray-500 sm:py-0 py-2">
                  to
                </div>
                <div className="flex-1">
                  <input
                    type="date"
                    name="endDate"
                    value={searchCriteria.dateRange.endDate}
                    onChange={handleDateChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {searchCriteria.searchType === "status" && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                name="status"
                value={searchCriteria.status}
                onChange={handleInputChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">All Statuses</option>
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="flex items-center justify-end gap-4">
          <button
            type="button"
            onClick={resetSearch}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Reset
          </button>
          <button
            type="submit"
            disabled={isSearching}
            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              isSearching ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isSearching ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Searching...
              </>
            ) : (
              "Search"
            )}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-400 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}
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
  const bookingsPerPage = 10;

  // Fetch all bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          "https://hotel-nodejs-oa32.onrender.com/84383/92823"
        );

        // First, log the entire response to see its structure
        console.log("Full API response:", response.data);

        // Determine the correct data path
        let bookingsData = [];
        if (response.data?.bookings) {
          bookingsData = response.data.bookings;
        } else if (response.data?.data?.bookings) {
          bookingsData = response.data.data.bookings;
        } else {
          console.warn("Unexpected response structure:", response.data);
        }

        // Log the extracted bookings data
        console.log("Bookings data:", bookingsData);

        // Update state
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
  };

  // Update booking
  const handleUpdate = async (bookingId) => {
    try {
      if (!window.confirm("Are you sure you want to update this booking?")) {
        return;
      }

      console.log("Updating booking ID:", bookingId);
      console.log("Booking form data:", formData);

      const payload = {
        ...formData,
        checkInDate: formData.checkInDate.includes("T")
          ? formData.checkInDate
          : new Date(formData.checkInDate).toISOString(),
        checkOutDate: formData.checkOutDate.includes("T")
          ? formData.checkOutDate
          : new Date(formData.checkOutDate).toISOString(),
      };

      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/84383/92823/${bookingId}`,
        payload
      );

      console.log("Update response:", response.data.data);

      const updatedBooking =
        response.data?.updatedBooking || response.data.data || response.data;
      console.log(updatedBooking);

      if (!updatedBooking) {
        throw new Error("No valid booking data returned from server");
      }

      setAllBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking._id === bookingId ? { ...booking, ...payload } : booking
        )
      );

      setEditingBooking(null);
      alert("Booking updated successfully!");
    } catch (error) {
      console.error("Booking update error:", {
        message: error.message,
        response: error.response,
        request: {
          url: error.config?.url,
          data: error.config?.data,
        },
      });

      const errorMessage =
        error.response?.data?.message ||
        "Failed to update booking. Please try again.";

      alert(`Error: ${errorMessage}`);
    }
  };

  // Quick status update
  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      if (
        !window.confirm(
          `Are you sure you want to change the status to ${newStatus}?`
        )
      ) {
        return;
      }

      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/84383/92823/${bookingId}/status`,
        { status: newStatus }
      );

      setAllBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking._id === bookingId
            ? { ...booking, status: newStatus }
            : booking
        )
      );

      alert("Status updated successfully!");
    } catch (error) {
      console.error("Status update error:", error);
      alert("Failed to update status. Please try again.");
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
            // Reset to show all bookings
            updateCurrentBookings(allBookings, 1);
            setTotalPages(Math.ceil(allBookings.length / bookingsPerPage));
          } else {
            // Show search results
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
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="date"
                          name="checkInDate"
                          value={formData.checkInDate}
                          onChange={handleInputChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="date"
                          name="checkOutDate"
                          value={formData.checkOutDate}
                          onChange={handleInputChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          name="roomType"
                          value={formData.roomType}
                          onChange={handleInputChange}
                          className="border rounded px-2 py-1 w-full"
                        >
                          <option value="deluxe">Deluxe</option>
                          <option value="standard">Standard</option>
                          <option value="suite">Suite</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          name="status"
                          value={formData.status}
                          onChange={handleInputChange}
                          className="border rounded px-2 py-1 w-full"
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="cancelled">Cancelled</option>
                          <option value="completed">Completed</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap space-x-2">
                        <button
                          onClick={() => handleUpdate(booking._id)}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingBooking(null)}
                          className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                        >
                          Cancel
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
                        {booking.status}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap space-x-2">
                        <button
                          onClick={() => handleEdit(booking)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          <Edit className="text-blue-500" />
                        </button>
                        <button
                          onClick={() => handleDelete(booking._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          <Delete className="text-red-500" />
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
                <SkipPrevious className="text-green-800" />
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
                <SkipNext className="text-green-800" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

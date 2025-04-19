import React, { useState, useEffect } from "react";
import axios from "axios";
import { AddTask, Cancel, Clear, Delete, Edit, Search } from "@mui/icons-material";

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
        <Search className="size-6 text-blue-500" />
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

export default function AdminBookingViewCancel() {
  const [allBookings, setAllBookings] = useState([]);
  const [cancelledBookings, setCancelledBookings] = useState([]);
  const [currentBookings, setCurrentBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const bookingsPerPage = 10;

  // Fetch all bookings and filter cancelled ones
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://hotel-nodejs-oa32.onrender.com/84383/92823"
        );

        const bookingsData =
          response.data?.bookings || response.data?.data?.bookings || [];

        setAllBookings(bookingsData);
        const cancelled = bookingsData.filter((b) => b.status === "cancelled");
        setCancelledBookings(cancelled);
        setTotalPages(Math.ceil(cancelled.length / bookingsPerPage));
        updateCurrentBookings(cancelled, 1);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        // alert("Failed to load bookings. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Update current bookings when page changes
  useEffect(() => {
    updateCurrentBookings(cancelledBookings, currentPage);
  }, [currentPage, cancelledBookings]);

  const updateCurrentBookings = (bookings, page) => {
    const startIndex = (page - 1) * bookingsPerPage;
    const endIndex = startIndex + bookingsPerPage;
    setCurrentBookings(bookings.slice(startIndex, endIndex));
  };

  // Handle status change (only allow changing to confirmed)
  const handleStatusChange = async (bookingId) => {
    try {
      if (!window.confirm("Are you sure you want to confirm this booking?"))
        return;

      // Optimistic update - remove from cancelled list
      setCancelledBookings((prev) => prev.filter((b) => b._id !== bookingId));

      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/84383/92823/${bookingId}`,
        { status: "confirmed" },
        { headers: { "Content-Type": "application/json" } }
      );

      // Update all bookings with the new status
      setAllBookings((prev) =>
        prev.map((b) =>
          b._id === bookingId ? { ...b, status: "confirmed" } : b
        )
      );

      if (!response.data) throw new Error("No confirmation from server");
      alert("Booking confirmed successfully!");
    } catch (error) {
      // Revert on error
      const originalBooking = allBookings.find((b) => b._id === bookingId);
      if (originalBooking?.status === "cancelled") {
        setCancelledBookings((prev) =>
          [...prev, originalBooking].sort(
            (a, b) => new Date(a.checkInDate) - new Date(b.checkInDate)
          )
        );
      }

      console.error(
        "Status update failed:",
        error.response?.data || error.message
      );
      alert(error.response?.data?.message || "Failed to confirm booking");
    }
  };

  // Handle delete booking
  const handleDelete = async (bookingId) => {
    try {
      if (
        !window.confirm(
          "Are you sure you want to permanently delete this booking?"
        )
      )
        return;

      // Optimistic update - remove from cancelled list
      setCancelledBookings((prev) => prev.filter((b) => b._id !== bookingId));
      setAllBookings((prev) => prev.filter((b) => b._id !== bookingId));

      await axios.delete(
        `https://hotel-nodejs-oa32.onrender.com/84383/92823/${bookingId}`
      );

      // Recalculate total pages after deletion
      setTotalPages(
        Math.ceil((cancelledBookings.length - 1) / bookingsPerPage)
      );

      alert("Booking deleted successfully!");
    } catch (error) {
      // Revert on error
      const originalBooking = allBookings.find((b) => b._id === bookingId);
      if (originalBooking?.status === "cancelled") {
        setCancelledBookings((prev) =>
          [...prev, originalBooking].sort(
            (a, b) => new Date(a.checkInDate) - new Date(b.checkInDate)
          )
        );
      }

      console.error("Delete failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to delete booking");
    }
  };

  // Handle search results
  const handleSearchResults = (results) => {
    if (results === null) {
      updateCurrentBookings(cancelledBookings, 1);
      setTotalPages(Math.ceil(cancelledBookings.length / bookingsPerPage));
    } else {
      const cancelledResults = results.filter((b) => b.status === "cancelled");
      setCurrentBookings(cancelledResults.slice(0, bookingsPerPage));
      setTotalPages(Math.ceil(cancelledResults.length / bookingsPerPage));
    }
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container text-black mx-auto p-4">
      <h4 className="text-2xl font-bold mb-4">Cancelled Bookings</h4>

      <BookingSearch onSearchResults={handleSearchResults} />

      {loading ? (
        <div className="text-center py-8">Loading cancelled bookings...</div>
      ) : (
        <div className="bg-white text-black rounded-lg shadow overflow-hidden">
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
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white text-black divide-y divide-gray-200">
                {currentBookings.map((booking) => (
                  <tr key={booking._id} className="bg-red-50 hover:bg-red-100">
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
                    <td className="px-6 py-4 whitespace-nowrap space-x-2">
                      <button
                        onClick={() => handleStatusChange(booking._id)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        <AddTask className="size-6 text-green-500" />
                      </button>
                      <button
                        onClick={() => handleDelete(booking._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        <Delete className="text-red-500 size-6" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {cancelledBookings.length === 0 && !loading && (
            <div className="p-4 text-center text-gray-500">
              No cancelled bookings found
            </div>
          )}

          {totalPages > 1 && (
            <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
              <div>
                Showing {(currentPage - 1) * bookingsPerPage + 1} to{" "}
                {Math.min(
                  currentPage * bookingsPerPage,
                  cancelledBookings.length
                )}{" "}
                of {cancelledBookings.length} bookings
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
                  Prev
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
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

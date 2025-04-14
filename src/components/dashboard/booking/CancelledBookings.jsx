import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Delete, Edit } from "@mui/icons-material";

const BookingSearch = ({ onSearchResults, searchType }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://hotel-nodejs-oa32.onrender.com/84383/92823/search?term=${searchTerm}&status=${searchType}`
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
        placeholder={`Search ${searchType} bookings...`}
        className="border p-2 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-500 text-white p-2 rounded"
      >
        Search
      </button>
      <button
        onClick={() => {
          setSearchTerm("");
          onSearchResults(null);
        }}
        className="ml-2 bg-gray-500 text-white p-2 rounded"
      >
        Clear
      </button>
    </div>
  );
};

export default function AdminBookingViewCancel() {
  const [allBookings, setAllBookings] = useState([]);
  const [confirmedBookings, setConfirmedBookings] = useState([]);
  const [cancelledBookings, setCancelledBookings] = useState([]);
  const [currentBookings, setCurrentBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showConfirmed, setShowConfirmed] = useState(true);
  const bookingsPerPage = 10;

  // Fetch all bookings and filter by status
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          "https://hotel-nodejs-oa32.onrender.com/84383/92823"
        );
        
        const bookingsData = response.data?.bookings || 
                           response.data?.data?.bookings || 
                           [];
        
        setAllBookings(bookingsData);
        updateFilteredBookings(bookingsData);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        alert("Failed to load bookings. Please try again.");
      }
    };

    fetchBookings();
  }, []);

  const updateFilteredBookings = (bookings) => {
    const confirmed = bookings.filter(b => b.status === "confirmed");
    const cancelled = bookings.filter(b => b.status === "cancelled");
    setConfirmedBookings(confirmed);
    setCancelledBookings(cancelled);
    
    const displayedBookings = showConfirmed ? confirmed : cancelled;
    setTotalPages(Math.ceil(displayedBookings.length / bookingsPerPage));
    updateCurrentBookings(displayedBookings, 1);
  };

  // Update current bookings when page or filter changes
  useEffect(() => {
    const displayedBookings = showConfirmed ? confirmedBookings : cancelledBookings;
    updateCurrentBookings(displayedBookings, currentPage);
  }, [currentPage, showConfirmed, confirmedBookings, cancelledBookings]);

  const updateCurrentBookings = (bookings, page) => {
    const startIndex = (page - 1) * bookingsPerPage;
    const endIndex = startIndex + bookingsPerPage;
    setCurrentBookings(bookings.slice(startIndex, endIndex));
  };

  // Handle status change
  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      if (!window.confirm(`Are you sure you want to mark this booking as "${newStatus}"?`)) return;

      // Optimistic update
      if (newStatus === "confirmed") {
        setConfirmedBookings(prev => [...prev, allBookings.find(b => b._id === bookingId)]);
        setCancelledBookings(prev => prev.filter(b => b._id !== bookingId));
      } else {
        setCancelledBookings(prev => [...prev, allBookings.find(b => b._id === bookingId)]);
        setConfirmedBookings(prev => prev.filter(b => b._id !== bookingId));
      }

      const response = await axios.patch(
        `https://hotel-nodejs-oa32.onrender.com/84383/92823/${bookingId}`,
        { status: newStatus },
        { headers: { "Content-Type": "application/json" } }
      );

      // Update all bookings with the new status
      setAllBookings(prev => 
        prev.map(b => b._id === bookingId ? { ...b, status: newStatus } : b)
      );

      if (!response.data) throw new Error("No confirmation from server");
      alert(`Booking status updated to "${newStatus}" successfully!`);
    } catch (error) {
      // Revert on error
      updateFilteredBookings(allBookings);
      
      console.error("Status update failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to update booking status");
    }
  };

  // Handle search results
  const handleSearchResults = (results) => {
    if (results === null) {
      const displayedBookings = showConfirmed ? confirmedBookings : cancelledBookings;
      updateCurrentBookings(displayedBookings, 1);
      setTotalPages(Math.ceil(displayedBookings.length / bookingsPerPage));
    } else {
      const filteredResults = results.filter(b => 
        showConfirmed ? b.status === "confirmed" : b.status === "cancelled"
      );
      setCurrentBookings(filteredResults.slice(0, bookingsPerPage));
      setTotalPages(Math.ceil(filteredResults.length / bookingsPerPage));
    }
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Toggle between confirmed and cancelled bookings
  const toggleBookingView = () => {
    setShowConfirmed(!showConfirmed);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          {showConfirmed ? "Confirmed" : "Cancelled"} Bookings
        </h1>
        <button
          onClick={toggleBookingView}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Show {showConfirmed ? "Cancelled" : "Confirmed"} Bookings
        </button>
      </div>
      
      <BookingSearch 
        onSearchResults={handleSearchResults} 
        searchType={showConfirmed ? "confirmed" : "cancelled"} 
      />

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-In</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-Out</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentBookings.map((booking) => (
                <tr 
                  key={booking._id} 
                  className={booking.status === "confirmed" ? "bg-green-50 hover:bg-green-100" : "bg-red-50 hover:bg-red-100"}
                >
                  <td className="px-6 py-4 whitespace-nowrap">{booking.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{booking.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(booking.checkInDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(booking.checkOutDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap capitalize">{booking.roomType}</td>
                  <td className="px-6 py-4 whitespace-nowrap capitalize">{booking.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-2">
                    <button
                      onClick={() => handleStatusChange(
                        booking._id, 
                        booking.status === "confirmed" ? "cancelled" : "confirmed"
                      )}
                      className={`px-3 py-1 rounded ${
                        booking.status === "confirmed" 
                          ? "bg-red-500 hover:bg-red-600" 
                          : "bg-green-500 hover:bg-green-600"
                      } text-white`}
                    >
                      {booking.status === "confirmed" ? "Cancel" : "Reconfirm"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {currentBookings.length === 0 && (
          <div className="p-4 text-center text-gray-500">
            No {showConfirmed ? "confirmed" : "cancelled"} bookings found
          </div>
        )}

        {totalPages > 1 && (
          <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
            <div>
              Showing {(currentPage - 1) * bookingsPerPage + 1} to{" "}
              {Math.min(currentPage * bookingsPerPage, 
                showConfirmed ? confirmedBookings.length : cancelledBookings.length)} of{" "}
              {showConfirmed ? confirmedBookings.length : cancelledBookings.length} bookings
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
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
              ))}
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
    </div>
  );
}
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export const BookingChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Format month names from date strings
  const formatMonth = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleString('default', { month: 'short' });
  };

  // Process bookings data to group by month
  const processBookingsData = (bookings) => {
    const monthlyBookings = {};
    
    bookings.forEach(booking => {
      const month = formatMonth(booking.createdAt || booking.checkInDate);
      if (month) {
        monthlyBookings[month] = (monthlyBookings[month] || 0) + 1;
      }
    });

    // Convert to array and sort by month order
    const monthsOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return Object.entries(monthlyBookings)
      .map(([name, bookings]) => ({ name, bookings }))
      .sort((a, b) => monthsOrder.indexOf(a.name) - monthsOrder.indexOf(b.name));
  };

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://hotel-nodejs-oa32.onrender.com/84383/92823"
        );

        console.log("API Response:", response.data);

        // Extract bookings array from the nested structure
        const bookingsArray = response.data?.data?.bookings || [];
        
        if (!Array.isArray(bookingsArray)) {
          throw new Error("Invalid data format received from API");
        }

        if (bookingsArray.length === 0) {
          throw new Error("No booking data available");
        }

        // Process the bookings data to get monthly counts
        const processedData = processBookingsData(bookingsArray);

        if (processedData.length === 0) {
          throw new Error("Could not process booking data");
        }

        setData(processedData);
        setError(null);
      } catch (err) {
        console.error("API Error:", err);
        setError(err.message || "Failed to fetch booking data");
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBookingData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500 mb-3"></div>
        <p className="text-gray-500 text-sm">Loading booking data...</p>
      </div>
    );
  }

  if (error || data.length === 0) {
    return (
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-lg font-semibold text-gray-800">
            Monthly Bookings
          </h3>
          <div className="text-xs text-gray-500">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
        
        <div className="h-72 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 mb-2">No booking data available</p>
            <p className="text-sm text-red-500">{error}</p>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
          <div>Source: Hotel Booking API</div>
          <div className="flex space-x-2">
            <span className="inline-block w-3 h-3 rounded-full bg-indigo-400"></span>
            <span>Current Year</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-semibold text-gray-800">
          Monthly Bookings
        </h3>
        <div className="text-xs text-gray-500">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f3f4f6"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              label={{
                value: "Total Bookings",
                angle: -90,
                position: "insideLeft",
                fill: "#4b5563",
                fontSize: 12,
                offset: 10,
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                fontSize: "13px",
              }}
              formatter={(value) => [value, "Bookings"]}
              labelFormatter={(label) => `Month: ${label}`}
              cursor={{ fill: "#f9fafb" }}
            />
            <Bar
              dataKey="bookings"
              fill="#6366f1"
              radius={[4, 4, 0, 0]}
              name="Bookings"
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
        <div>Source: Hotel Booking API</div>
        <div className="flex space-x-2">
          <span className="inline-block w-3 h-3 rounded-full bg-indigo-400"></span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};
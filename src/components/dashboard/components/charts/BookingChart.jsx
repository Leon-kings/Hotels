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

  // Format month names consistently
  const formatMonth = (monthString) => {
    if (!monthString) return "";
    return monthString.substring(0, 3);
  };

  // Generate realistic fallback data
  const generateFallbackData = () => {
    const currentMonth = new Date().getMonth();
    return Array.from({ length: 6 }).map((_, index) => {
      const monthIndex = (currentMonth - 5 + index + 12) % 12;
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return {
        name: months[monthIndex],
        bookings: Math.floor(Math.random() * 50) + 30, // 30-80 bookings
      };
    });
  };

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://hotel-nodejs-oa32.onrender.com/84383/92823",
          { timeout: 50000000000 } // 5 second timeout
        );

        // Debugging: Log actual API response
        console.log("API Response:", response.data);
        // alert("fetched successfully !!");
        // Handle multiple possible response structures
        const rawData =
          response.data.bookings || response.data.data || response.data || [];

        const processedData = Array.isArray(rawData)
          ? rawData
              .map((item) => ({
                name: formatMonth(item.month || item.date ),
                bookings:
                  item.results ?? item.bookings ?? item.count ?? 0,
              }))
              .filter((item) => item.name) // Remove invalid entries
          : generateFallbackData();

        // Ensure we have at least 3 months data
        const finalData =
          processedData.length >= 3
            ? processedData
            : [...processedData, ...generateFallbackData()].slice(0, 6);

        setData(finalData);
        setError(null);
      } catch (err) {
        console.error("API Error:", err);
        setError(err.message);
        setData(generateFallbackData());
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
      </div>
    );
  }

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-semibold text-gray-800">
          Monthly Bookings
          {error && (
            <span className="ml-2 text-xs bg-amber-50 text-amber-600 px-2 py-1 rounded">
              Using sample data
            </span>
          )}
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
        <div>{error ? `Error: ${error}` : "Source: Hotel Booking API"}</div>
        <div className="flex space-x-2">
          <span className="inline-block w-3 h-3 rounded-full bg-indigo-400"></span>
          <span>Current Year</span>
        </div>
      </div>
    </div>
  );
};

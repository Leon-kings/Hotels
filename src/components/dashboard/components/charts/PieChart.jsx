import React, { useState, useEffect } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]; // Colors for 3 months

export const PieChartData = () => {
  const [pieData, setPieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback data in case API fails
  const getFallbackData = () => [
    { name: "Jan", value: 45, fullMonth: "January" },
    { name: "Feb", value: 68, fullMonth: "February" },
    { name: "Mar", value: 72, fullMonth: "March" }
  ];

  const fetchBookingData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get(
        "https://hotel-nodejs-oa32.onrender.com/84383/92823",
        { timeout: 500000 }
      );

      // Handle different API response structures
      const rawData = response.data?.data || response.data?.bookings || response.data;
      
      // Ensure we have an array before mapping
      const safeData = Array.isArray(rawData) ? rawData : [];
      
      const transformedData = safeData.slice(0, 3).map(item => ({
        name: item.month?.substring(0, 3) || "N/A",
        value: item.bookings || item.count || 0,
        fullMonth: item.month || "Unknown Month"
      }));

      // Use API data if valid, otherwise fallback
      setPieData(transformedData.length >= 2 ? transformedData : getFallbackData());
      
    } catch (err) {
      console.error("Failed to fetch booking data:", err);
      setError(err.message);
      setPieData(getFallbackData());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookingData();
    
    // Optional: Refresh data every 5 minutes
    const interval = setInterval(fetchBookingData, 300000);
    return () => clearInterval(interval);
  }, []);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 shadow-md rounded border border-gray-200 text-sm">
          <p className="font-medium">{data.fullMonth}</p>
          <p>Bookings: <strong>{data.value}</strong></p>
        </div>
      );
    }
    return null;
  };

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    name
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-xs font-medium"
      >
        {`${name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Booking Comparison (Last 3 Months)</h3>
        <button
          onClick={fetchBookingData}
          className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
          disabled={loading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Refresh
        </button>
      </div>

      {error && (
        <div className="mb-3 p-2 bg-red-50 text-red-600 rounded text-sm">
          Showing sample data: {error}
        </div>
      )}

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={40}
              label={renderCustomizedLabel}
              labelLine={false}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              formatter={(value) => {
                const item = pieData.find((d) => d.name === value);
                return `${item?.fullMonth || value}: ${item?.value}`;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-2 text-xs text-gray-500 text-center">
        {error ? "Using sample data" : `Last updated: ${new Date().toLocaleTimeString()}`}
      </div>
    </div>
  );
};


import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  People,
  Email,
  MonetizationOn,
  ShoppingCart,
  Refresh,
} from "@mui/icons-material";

export const Analytics = () => {
  const [counts, setCounts] = useState({
    users: { count: 0, loading: true, error: null },
    messages: { count: 0, loading: true, error: null },
    revenue: { count: 0, loading: true, error: null },
    orders: { count: 0, loading: true, error: null },
  });

  const fetchCounts = async () => {
    // Set all to loading state
    setCounts({
      users: { ...counts.users, loading: true, error: null },
      messages: { ...counts.messages, loading: true, error: null },
      revenue: { ...counts.revenue, loading: true, error: null },
      orders: { ...counts.orders, loading: true, error: null },
    });

    try {
      const endpoints = [
        { key: "users", url: "/api/users" },
        {
          key: "messages",
          url: "https://hotel-nodejs-oa32.onrender.com/63729/892308",
        },
        {
          key: "revenue",
          url: "https://hotel-nodejs-oa32.onrender.com/83920/92303",
        },
        {
          key: "orders",
          url: "https://hotel-nodejs-oa32.onrender.com/84383/92823",
        },
      ];

      const responses = await Promise.all(
        endpoints.map((endpoint) =>
          axios
            .get(endpoint.url)
            .then((res) => ({ key: endpoint.key, data: res.data }))
            .catch((err) => ({ key: endpoint.key, error: err.message }))
        )
      );

      const newCounts = { ...counts };
      responses.forEach((response) => {
        if (response.error) {
          newCounts[response.key] = {
            count: 0,
            loading: false,
            error: response.error,
          };
        } else {
          newCounts[response.key] = {
            count: getItemCount(response.data),
            loading: false,
            error: null,
          };
        }
      });

      setCounts(newCounts);
    } catch (error) {
      alert("Failed to fetch counts:", error);
    }
  };

  const getItemCount = (data) => {
    if (!data) return 0;
    if (Array.isArray(data)) return data.length;
    if (typeof data === "object") return Object.keys(data).length;
    return 0;
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  const metricCards = [
    {
      key: "users",
      title: "Total Users",
      icon: <People className="text-xl size-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      key: "messages",
      title: "Messages",
      icon: <Email className="text-xl size-6" />,
      color: "bg-green-100 text-green-600",
    },
    {
      key: "revenue",
      title: "Revenue Items",
      icon: <MonetizationOn className="text-xl size-6" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      key: "orders",
      title: "Orders",
      icon: <ShoppingCart className="text-xl size-6" />,
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <div className="p-5 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h4 className="text-2xl font-semibold text-gray-800">Data</h4>
        <button
          onClick={fetchCounts}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
        >
          <Refresh className="text-lg font-bold text-blue-500" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricCards.map((metric) => {
          const data = counts[metric.key];
          return (
            <div
              key={metric.key}
              className="bg-white rounded-lg shadow-md p-6 min-h-[140px]"
            >
              {data.loading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-pulse text-gray-500">Loading...</div>
                </div>
              ) : data.error ? (
                <div className="text-red-500 h-full flex items-center">
                  Error: {data.error}
                </div>
              ) : (
                <div className="flex justify-between items-center h-full">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">
                      {metric.title}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {data.count.toLocaleString()}
                    </h3>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${metric.color}`}
                  >
                    {metric.icon}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

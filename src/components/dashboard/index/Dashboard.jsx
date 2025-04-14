/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useMemo } from "react";
import {
  AttachMoney,
  People,
  ShoppingCart,
  TrendingUp,
  BarChart as BarChartIcon,
  Book,
  Payment,
  Message,
  Close,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import AdminBookingView from "../booking/AdminBookingView";
import { LatestBookings } from "../components/LatestBooking";
import { MessagesSection } from "../components/messageContainer";
import { MessagesManager } from "../message/MessageManager";

import { SubscriptionManager } from "../components/SubscriptionManager";
import { MessagesAnalytics } from "../components/Graph2";
import AdminBookingViewConfirmed from "../booking/ConfirmedBooking";
import AdminBookingViewCancel from "../booking/CancelledBookings";
import AdminBookingViewPending from "../booking/PendingBooking";


export const Dashboard = () => {
  const [dateFilter, setDateFilter] = useState("monthly");
  const [showAllOrders, setShowAllOrders] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [expandedView, setExpandedView] = useState(false);

  const rawData = useMemo(
    () => ({
      monthly: {
        stats: [
          { title: "Total Revenue", value: "$12,345", change: "+12%" },
          { title: "Active Users", value: "1,234", change: "+8%" },
          { title: "New Orders", value: "56", change: "+3.2%" },
          { title: "Conversion", value: "3.6%", change: "-0.5%" },
        ],
        chart: [
          { name: "Week 1", value: 3000 },
          { name: "Week 2", value: 4000 },
          { name: "Week 3", value: 3500 },
          { name: "Week 4", value: 4500 },
        ],
        orders: [
          {
            id: "#12345",
            customer: "John Smith",
            date: "2023-05-15",
            amount: "$125.00",
            status: "Delivered",
          },
          {
            id: "#12346",
            customer: "Sarah Johnson",
            date: "2023-05-14",
            amount: "$89.99",
            status: "Shipped",
          },
          {
            id: "#12347",
            customer: "Michael Brown",
            date: "2023-05-14",
            amount: "$234.50",
            status: "Processing",
          },
        ],

        payments: [
          {
            id: "P001",
            amount: "$125.00",
            method: "Credit Card",
            status: "Completed",
            date: "2023-05-15",
            customer: "John Smith",
            invoice: "INV-001",
            items: 3,
          },
          {
            id: "P002",
            amount: "$89.99",
            method: "PayPal",
            status: "Pending",
            date: "2023-05-14",
            customer: "Sarah Johnson",
            invoice: "INV-002",
            items: 2,
          },
        ],
      },
      yearly: {
        stats: [
          { title: "Total Revenue", value: "$148,140", change: "+18%" },
          { title: "Active Users", value: "14,808", change: "+22%" },
          { title: "New Orders", value: "672", change: "+15%" },
          { title: "Conversion", value: "4.1%", change: "+0.3%" },
        ],
        chart: [
          { name: "Jan", value: 12000 },
          { name: "Feb", value: 15000 },
          { name: "Mar", value: 18000 },
          { name: "Apr", value: 21000 },
          { name: "May", value: 20000 },
        ],
        orders: [
          {
            id: "#12001",
            customer: "Alex Johnson",
            date: "2023-01-15",
            amount: "$225.00",
            status: "Delivered",
          },
          {
            id: "#12045",
            customer: "Maria Garcia",
            date: "2023-02-14",
            amount: "$189.99",
            status: "Delivered",
          },
        ],
        books: [
          {
            id: "B101",
            title: "Advanced React",
            author: "Mark Taylor",
            stock: 78,
            price: "$34.99",
            category: "Programming",
            published: "2023-01-20",
            description:
              "Deep dive into advanced React patterns and performance optimization",
          },
        ],
        payments: [
          {
            id: "P101",
            amount: "$225.00",
            method: "Credit Card",
            status: "Completed",
            date: "2023-01-15",
            customer: "Alex Johnson",
            invoice: "INV-101",
            items: 5,
          },
        ],
        messages: [
          {
            id: "M101",
            sender: "admin@example.com",
            subject: "Account Update",
            status: "Read",
            date: "2023-01-10 09:45",
            body: "Your account has been successfully upgraded to the premium plan. Thank you for your business!",
            priority: "Normal",
          },
        ],
      },
    }),
    []
  );

  const currentData = rawData[dateFilter];
  const {
    stats,
    chart: chartData,
    orders,
    books,
    payments,
    messages,
  } = currentData;
  const displayedOrders = showAllOrders ? orders : orders.slice(0, 3);

  const statIcons = [
    <AttachMoney className="text-green-500" />,
    <People className="text-blue-500" />,
    <ShoppingCart className="text-purple-500" />,
    <TrendingUp className="text-yellow-500" />,
  ];

  const handleComponentClick = (component) => {
    if (selectedComponent === component) {
      setExpandedView(!expandedView);
    } else {
      setSelectedComponent(component);
      setExpandedView(true);
    }
  };

  const renderComponentDetails = () => {
    const data = currentData[selectedComponent];
    if (!data || data.length === 0) return null;

    switch (selectedComponent) {
      case "books":
        return (
          <div className="bg-white rounded-lg shadow-md p-6 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Book Details</h3>
              <button
                onClick={() => setExpandedView(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Close className="text-red-500" />
              </button>
            </div>
            <div className="space-y-6">
              {data.map((book) => (
                <div key={book.id} className="border-b pb-4 last:border-b-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-lg font-semibold">{book.title}</h4>
                      <p className="text-gray-600">by {book.author}</p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <span className="font-medium">Price:</span> {book.price}
                      </p>
                      <p>
                        <span className="font-medium">Stock:</span> {book.stock}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <span className="font-medium">Category:</span>{" "}
                        {book.category}
                      </p>
                      <p>
                        <span className="font-medium">Published:</span>{" "}
                        {book.published}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-gray-700">{book.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "payments":
        return (
          <div className="bg-white rounded-lg shadow-md p-6 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Payment Details</h3>
              <button
                onClick={() => setExpandedView(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Close />
              </button>
            </div>
            <div className="space-y-6">
              {data.map((payment) => (
                <div key={payment.id} className="border-b pb-4 last:border-b-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-lg font-semibold">
                        Payment #{payment.id}
                      </h4>
                      <p
                        className={`text-lg font-bold ${
                          payment.status === "Completed"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {payment.status}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <span className="font-medium">Amount:</span>{" "}
                        {payment.amount}
                      </p>
                      <p>
                        <span className="font-medium">Method:</span>{" "}
                        {payment.method}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <span className="font-medium">Date:</span>{" "}
                        {payment.date}
                      </p>
                      <p>
                        <span className="font-medium">Customer:</span>{" "}
                        {payment.customer}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-4">
                    <div>
                      <p>
                        <span className="font-medium">Invoice:</span>{" "}
                        {payment.invoice}
                      </p>
                    </div>
                    <div>
                      <p>
                        <span className="font-medium">Items:</span>{" "}
                        {payment.items}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "messages":
        return (
          <div className="bg-white rounded-lg shadow-md p-6 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Message Details</h3>
              <button
                onClick={() => setExpandedView(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Close className="text-red-500" />
              </button>
            </div>
            <div className="space-y-6">
              {data.map((message) => (
                <div key={message.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold">
                        {message.subject}
                      </h4>
                      <p className="text-gray-600">From: {message.sender}</p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        message.priority === "High"
                          ? "bg-red-100 text-red-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {message.priority}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <p>
                        <span className="font-medium">Date:</span>{" "}
                        {message.date}
                      </p>
                    </div>
                    <div>
                      <p
                        className={`${
                          message.status === "Unread"
                            ? "text-blue-600 font-semibold"
                            : "text-gray-600"
                        }`}
                      >
                        {message.status}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="whitespace-pre-line">{message.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded shadow">
          <p className="font-semibold">{label}</p>
          <p className="text-blue-500">${payload[0].value.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 sm:px-6 lg:px-8 py-6 text-black bg-white mt-4 mb-4"
    >
      <div className="grid">
        <div className="w-full">
          <MessagesAnalytics />
        </div>
      </div>


      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`bg-gray-100 rounded-lg p-4 cursor-pointer transition-all ${
            selectedComponent === "payments"
              ? "ring-2 ring-blue-500 bg-blue-50"
              : ""
          }`}
          onClick={() => handleComponentClick("payments")}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Payment className="text-green-500 text-3xl" />
              <div>
                <h3 className="font-semibold">Payments</h3>
                <p className="text-sm text-gray-600">
                  {payments.length} transactions
                </p>
              </div>
            </div>
            {selectedComponent === "payments" ? (
              expandedView ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )
            ) : null}
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`bg-gray-100 rounded-lg p-4 cursor-pointer transition-all ${
            selectedComponent === "messages" ? "ring-2  bg-blue-600" : ""
          }`}
        >
          <div className=" w-full justify-between">
            <MessagesSection />
          </div>
        </motion.div>
      </div>

      {/* Component Details */}
      <AnimatePresence>
        {expandedView && selectedComponent && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderComponentDetails()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chart + Orders */}
      <div className="flex flex-col lg:flex-col gap-6 mt-6">
        {/* Chart */}
        <div className="flex-1 bg-gray-100 rounded-lg p-4 h-64">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">
              {dateFilter === "monthly" ? "Monthly Revenue" : "Yearly Revenue"}
            </h3>
            <BarChartIcon className="text-gray-500" />
          </div>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart
              data={chartData}
              margin={{
                top: 5,
                right: 10,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="value"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Orders */}
        <div className="flex-1 bg-gray-100 rounded-lg p-4">
          <LatestBookings />
        </div>
      </div>
      <div className="w-full mt-4 mb-4">
        <AdminBookingView />
      </div>
      <div className="w-full mt-4 mb-4">
        <MessagesManager />
      </div>
      {/* subsc */}
      <div className="w-full mt-4 mb-4">
        <SubscriptionManager />
      </div>
      <div className="w-full mt-4 mb-4">
        <AdminBookingViewConfirmed />
      </div>
      <div className="w-full mt-4 mb-4">
        <AdminBookingViewCancel />
      </div>
      <div className="w-full mt-4 mb-4">
        <AdminBookingViewPending />
      </div>
    </motion.div>
  );
};

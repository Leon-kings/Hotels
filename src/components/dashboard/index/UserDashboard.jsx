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
import AdminBookingView from "../booking/AdminBookingView";
import { LatestBookings } from "../components/LatestBooking";
import { MessagesSection } from "../components/messageContainer";
import { MessagesManager } from "../message/MessageManager";
import { SubscriptionManager } from "../components/SubscriptionManager";
import { Analytics } from "../components/Analytics";
import AdminBookingViewConfirmed from "../booking/ConfirmedBooking";
import AdminBookingViewCancel from "../booking/CancelledBookings";
import AdminBookingViewPending from "../booking/PendingBooking";

export const UserDashboard = () => {
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
          <Analytics />
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
      Orders
      <div className="flex-1 bg-gray-100 rounded-lg p-4">
        <LatestBookings />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
        <div className="bookings-part">
          <AdminBookingView />
        </div>
        <div className="message-part">
          <MessagesManager />
        </div>
      </div>
      {/* <div className="w-full mt-4 mb-4">
        <AdminBookingView />
      </div>
      <div className="w-full mt-4 mb-4">
        <MessagesManager />
      </div> */}
      {/* subsc */}
      {/* <div className="w-full mt-4 mb-4">
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
      </div> */}
    </motion.div>
  );
};

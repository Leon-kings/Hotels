/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useState } from "react";
import AdminBookingView from "../booking/AdminBookingView";
import { LatestBookings } from "../components/LatestBooking";
import { MessagesManager } from "../message/MessageManager";
import { SubscriptionManager } from "../components/SubscriptionManager";
import { Analytics } from "../components/Analytics";
import AdminBookingViewConfirmed from "../booking/ConfirmedBooking";
import AdminBookingViewCancel from "../booking/CancelledBookings";
import AdminBookingViewPending from "../booking/PendingBooking";
import { Graphs } from "../components/charts/DataGraphs";
import { Layout } from "../components/sidebar/Sidebar";

export const Dashboard = () => {
  return (
    <>
      <Layout />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-4 sm:px-6 lg:px-8 py-6 text-black bg-white mt-4 mb-4"
      >
        <Graphs />
        {/* Component Details */}
        {/* Chart + Orders */}

        <h5 className="text"> Orders</h5>
        <div className="flex-1 bg-gray-100 rounded-lg p-4">
          <LatestBookings />
        </div>
        <div className="w-full mt-4 mb-4">
          <AdminBookingView />
        </div>
        <div className="w-full mt-4 mb-4">
          <MessagesManager />
        </div>

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
    </>
  );
};

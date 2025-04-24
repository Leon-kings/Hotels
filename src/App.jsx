import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Booking } from "./components/booking/Book";
import { About } from "./pages/about/About";
import { RoomsServices } from "./pages/services/RoomServices";
import { Testimony } from "./pages/testimony/Testimony";
import { OurTeam } from "./pages/our team/OurTeam";
import Service from "./pages/service/Service";
import Home from "./pages/home/Home";
import { ContactSection } from "./pages/contact/Contact";
import { Dashboard } from "./components/dashboard/index/Dashboard";
// You'll need to create this
import { Login } from "./pages/login/Login";
// Dashboard routes
import UserDashboard from "./components/dashboard/index/UserDashboard";
import { AdminReportGenerator } from "./components/dashboard/components/report/AdminReportGenerator";
import { BookingPannel } from "./components/dashboard/components/pannel/BookingPannel";
import { MessagePannel } from "./components/dashboard/components/pannel/MessagePannel";
import { UserPannel } from "./components/dashboard/components/pannel/UserPannel";
import { Calendar } from "./components/dashboard/components/calender/Calender";
import { Profile } from "./components/dashboard/components/profile/Profile";
import { SettingsPannel } from "./components/dashboard/components/settings/Settings";
import { GraphicalData } from "./components/dashboard/components/charts/DataGraphs";
import { UserViewMe } from "./components/dashboard/userDashComponent/user/UserViewMe";
import { UserBooking } from "./components/dashboard/userDashComponent/bookings/UserBookingsView";
import { UserMessageView } from "./components/dashboard/userDashComponent/messages/UserMessageView";
import NotFound from "./pages/not found/NotFound";
import Layout from "./pages/layout/Layout";
import ErrorBoundary from "./pages/errorElement/ErrorElement";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status (e.g., from localStorage, session, or context)
    const checkAuth = () => {
      const token = localStorage.getItem("authToken"); // Or your auth token
      setIsAuthenticated(!!token);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    ); // Or a loading spinner
  }

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/L-6382-8279/34" replace />;
  }

  return children;
};

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public routes Route */}
          <Route element={<Layout />}>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/A-7483-783/34" />
            <Route element={<Booking />} path="/B-7839-283/34" />
            <Route element={<Service />} path="/S-6832-342/34" />
            <Route element={<RoomsServices />} path="/R-8763-327/34" />
            <Route element={<OurTeam />} path="/O-2973-342/34" />
            <Route element={<Testimony />} path="/T-8732-452/34" />
            <Route element={<ContactSection />} path="/C-3872-2344/34" />
            <Route element={<Login />} path="/L-6382-8279/34" />
            <Route
              path="*"
              element={<NotFound />}
              errorElement={<ErrorBoundary />}
            />
            {/* end of public Route */}
            {/* Protected Dashboard Route */}
            <Route
              path="/Dash-32793"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/U-23-Dash-32793"
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            {/* Dashboard Routes */}
            <Route element={<BookingPannel />} path="/AB-7832-342" />
            <Route element={<MessagePannel />} path="/MS-3562-922" />
            <Route element={<UserPannel />} path="/UV-2390-389" />
            <Route element={<AdminReportGenerator />} path="/ARG-3832-382" />
            <Route element={<Calendar />} path="/C-6784-873" />
            <Route element={<Profile />} path="/PF-5638-893" />
            <Route element={<SettingsPannel />} path="/SG-6788-327" />
            <Route element={<GraphicalData />} path="/GD-2761-823" />
            {/* userDashboard */}
            <Route element={<UserViewMe />} path="/UVM-7289-2782" />
            <Route element={<UserBooking />} path="/UBV-7929-2092" />
            <Route element={<UserMessageView />} path="/UMV-7988-0023" />
            {/* <Route element={<UserBooking />} path="/UBV-7929-2092" /> */}
          </Route>
        </Routes>
        {/* Protected Dashboard Route Ended */}
      </BrowserRouter>
    </>
  );
}

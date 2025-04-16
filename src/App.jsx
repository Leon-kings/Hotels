import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/nav/Navbar";
import { Booking } from "./components/booking/Book";
import { About } from "./pages/about/About";
import { RoomsServices } from "./pages/services/RoomServices";
import { Testimony } from "./pages/testimony/Testimony";
import { OurTeam } from "./pages/our team/OurTeam";
import { Footer } from "./components/footer/Footer";
import Service from "./pages/service/Service";
import Home from "./pages/home/Home";
import { ContactSection } from "./pages/contact/Contact";
import { Dashboard } from "./components/dashboard/index/Dashboard"; 
// You'll need to create this
import { Login } from "./components/dashboard/login/Login";
import { UserDashboard } from "./components/dashboard/index/UserDashboard";

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
        <Navbar />
        <Routes>
          {/* Public routes Route */}
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/A-7483-783/34" />
          <Route element={<Booking />} path="/B-7839-283/34" />
          <Route element={<Service />} path="/S-6832-342/34" />
          <Route element={<RoomsServices />} path="/R-8763-327/34" />
          <Route element={<OurTeam />} path="/O-2973-342/34" />
          <Route element={<Testimony />} path="/T-8732-452/34" />
          <Route element={<ContactSection />} path="/C-3872-2344/34" />
          <Route element={<Login />} path="/L-6382-8279/34" />
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
        </Routes>
        {/* Protected Dashboard Route Ended */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

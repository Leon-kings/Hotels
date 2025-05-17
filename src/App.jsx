/* eslint-disable react-refresh/only-export-components */

import React, { useEffect, useState, createContext, useContext } from "react";
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
import { Login } from "./pages/login/Login";
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

// Auth Context
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    userEmail: null,
    isLoading: true,
    isAuthenticated: false,
  });

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const email = localStorage.getItem("userEmail");

    if (token && email) {
      setAuthState({
        userEmail: email,
        isLoading: false,
        isAuthenticated: true,
      });
    } else {
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  }, []);

  const login = (email, token) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userEmail", email);
    setAuthState({
      userEmail: email,
      isLoading: false,
      isAuthenticated: true,
    });
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    setAuthState({
      userEmail: null,
      isLoading: false,
      isAuthenticated: false,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const PublicRoute = ({ children }) => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return children;
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/L-6382-8279/34" replace />;
  }

  return children;
};

const RestrictedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const AppContent = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes that are always accessible */}
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/L-6382-8279/34"
            element={
              <RestrictedRoute>
                <Login />
              </RestrictedRoute>
            }
          />
        </Route>
        {/* Protected routes */}
        <Route element={<Layout />}>
          <Route
            path="/A-7483-783/34"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/B-7839-283/34"
            element={
              <ProtectedRoute>
                <Booking />
              </ProtectedRoute>
            }
          />
          <Route
            path="/S-6832-342/34"
            element={
              <ProtectedRoute>
                <Service />
              </ProtectedRoute>
            }
          />
          <Route
            path="/R-8763-327/34"
            element={
              <ProtectedRoute>
                <RoomsServices />
              </ProtectedRoute>
            }
          />
          <Route
            path="/O-2973-342/34"
            element={
              <ProtectedRoute>
                <OurTeam />
              </ProtectedRoute>
            }
          />
          <Route
            path="/T-8732-452/34"
            element={
              <ProtectedRoute>
                <Testimony />
              </ProtectedRoute>
            }
          />
          <Route
            path="/C-3872-2344/34"
            element={
              <ProtectedRoute>
                <ContactSection />
              </ProtectedRoute>
            }
          />

          {/* Dashboard routes */}
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
          <Route
            path="/AB-7832-342"
            element={
              <ProtectedRoute>
                <BookingPannel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/MS-3562-922"
            element={
              <ProtectedRoute>
                <MessagePannel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/UV-2390-389"
            element={
              <ProtectedRoute>
                <UserPannel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ARG-3832-382"
            element={
              <ProtectedRoute>
                <AdminReportGenerator />
              </ProtectedRoute>
            }
          />
          <Route
            path="/C-6784-873"
            element={
              <ProtectedRoute>
                <Calendar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/PF-5638-893"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/SG-6788-327"
            element={
              <ProtectedRoute>
                <SettingsPannel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/GD-2761-823"
            element={
              <ProtectedRoute>
                <GraphicalData />
              </ProtectedRoute>
            }
          />
          <Route
            path="/UVM-7289-2782"
            element={
              <ProtectedRoute>
                <UserViewMe />
              </ProtectedRoute>
            }
          />
          <Route
            path="/UBV-7929-2092"
            element={
              <ProtectedRoute>
                <UserBooking />
              </ProtectedRoute>
            }
          />
          <Route
            path="/UMV-7988-0023"
            element={
              <ProtectedRoute>
                <UserMessageView />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Catch-all route */}
        <Route
          path="*"
          element={<NotFound />}
          errorElement={<ErrorBoundary />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

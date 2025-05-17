/* eslint-disable no-unused-vars */
import React, { useEffect, useState, createContext, useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
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

// Create Auth Context
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user data
    const token = localStorage.getItem("authToken");
    const email = localStorage.getItem("userEmail");
    if (token && email) {
      setUserEmail(email);
    }
    setIsLoading(false);
  }, []);

  const login = (email, token) => {
    setUserEmail(email);
    localStorage.setItem("authToken", token);
    localStorage.setItem("userEmail", email);
  };

  const logout = () => {
    setUserEmail(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}

// ProtectedRoute component remains the same but uses userEmail
const ProtectedRoute = ({ children }) => {
  const { userEmail } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const email = localStorage.getItem("userEmail");
    if (token && email) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-40">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Verifying access...</p>
        </div>
      </div>
    );
  }

  if (!userEmail && !localStorage.getItem("authToken")) {
    return <Navigate to="/L-6382-8279/34" replace />;
  }

  return children;
};

export default function App() {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    // Simulate app loading
    const timer = setTimeout(() => {
      setAppLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (appLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="flex flex-col items-center">
          <div className="animate-pulse">
            <div className="h-20 w-20 rounded-full bg-blue-100 mb-4"></div>
          </div>
          <div className="animate-pulse flex space-x-2">
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
          </div>
          <p className="mt-6 text-xl font-semibold text-gray-800">Welcome to Hotel Haven</p>
        </div>
      </div>
    );
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes Route */}
          <Route
            path="*"
            element={<NotFound />}
            errorElement={<ErrorBoundary />}
          />
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
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
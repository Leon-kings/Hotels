/* eslint-disable no-unused-vars */
import React, { useEffect, useState, createContext, useContext } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Booking } from "./components/booking/Book";
import { About } from "./pages/about/About";
import { RoomsServices } from "./pages/services/RoomServices";
import { Testimony } from "./pages/testimony/Testimony";
import { OurTeam } from "./pages/our team/OurTeam";
import Service from "./pages/service/Service";
import Home from "./pages/home/Home";
import { ContactSection } from "./pages/contact/Contact";
import { Dashboard } from "./components/dashboard/admin/Dashboard";
// Dashboard routes
import { UserViewMe } from "./components/dashboard/userDashComponent/user/UserViewMe";
import { UserBooking } from "./components/dashboard/userDashComponent/bookings/UserBookingsView";
import { UserMessageView } from "./components/dashboard/userDashComponent/messages/UserMessageView";
import NotFound from "./pages/not found/NotFound";
import { Layout } from "./components/dashboard/admin/components/sidebar/Sidebar";
import ErrorBoundary from "./pages/errorElement/ErrorElement";
import user from "./assets/images/logo/276-2763872_hospitality-hotel-icon.png";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { UserManagement } from "./components/dashboard/admin/components/management/users/UserManagement";
import { BookingManagements } from "./components/dashboard/admin/components/management/bookings/BookingManagement";
import { Universal } from "./pages/layout/Layout";
import { MessageManagement } from "./components/dashboard/admin/components/management/messages/MessageManagements";
import { BookingChart } from "./components/dashboard/admin/components/charts/booking/BookingChart";
import { Menu } from "./components/dashboard/admin/components/management/menu/Menu";
import { Amenities } from "./pages/amenties/Amenties";
import { Maintenance } from "./pages/maintenances/Maintenances";
import { RoomTypes } from "./pages/room/RoomTypes";
import { AdminProfile } from "./components/dashboard/admin/components/profile/AdminProfile";
import { Security } from "./components/dashboard/admin/components/management/security/Security";
import { FAQ } from "./pages/faq/FQA";
import Calendar from "./components/dashboard/admin/components/management/calender/Calender";
import { UserDashboard } from "./components/dashboard/user/UserDashboard";
import { DashboardMeManagement } from "./components/dashboard/user/components/managements/users/UserManagementDashboard";
import { UserBookingManagement } from "./components/dashboard/user/components/managements/bookings/UserBookingManagement";
import { UserMessagesManagement } from "./components/dashboard/user/components/managements/messages/UserMessagesManagements";
import { UserLayout } from "./components/dashboard/user/components/sidebar/Sidebar";
import { UserSecurityManagement } from "./components/dashboard/user/components/managements/security/UserSecurity";
import { UserProfile } from "./components/dashboard/user/components/managements/profile/UserProfile";
import { UserCalendar } from "./components/dashboard/user/components/managements/calender/UserCalender";
import { UserMenu } from "./components/dashboard/user/components/managements/menu/UserMenu";
import { UserBookingChart } from "./components/dashboard/user/components/managements/chart/UserChart";
import { UserAmenities } from "./components/dashboard/user/components/managements/UserAmenities.jsx/UserAmenties";
import { UserMaintenance } from "./components/dashboard/user/components/managements/maintenance/UserMaintenance";
import { UserRoomTypes } from "./components/dashboard/user/components/managements/roomtypes/UserRoomTypes";

// Add these keyframe animations to your App.css
const style = document.createElement("style");
// themeConfig.js
export const themeColors = {
  primary: {
    gradient: "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600",
    light: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
    dark: "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900",
    glow: "rgba(139, 92, 246, 0.5)",
  },
  secondary: {
    gradient: "bg-gradient-to-tr from-cyan-500 to-blue-600",
    light: "bg-gradient-to-tr from-cyan-400 to-blue-500",
    dark: "bg-gradient-to-tr from-cyan-600 to-blue-700",
  },
  accent: {
    gradient: "bg-gradient-to-bl from-amber-500 to-orange-600",
    light: "bg-gradient-to-bl from-amber-400 to-orange-500",
    dark: "bg-gradient-to-bl from-amber-600 to-orange-700",
  },
};

export const backgroundStyles = {
  default: "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900",
  services: "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900",
  about: "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900",
  home: "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900",
  contact: "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900",
};
style.textContent = `
  @keyframes progress {
    0% { width: 0%; }
    50% { width: 70%; }
    100% { width: 100%; }
  }

  @keyframes shimmer {
    100% { transform: translateX(100%); }
  }
  
  .back-to-top {
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 999;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  
  .back-to-top:hover {
    transform: scale(1.1) translateY(-5px);
  }
  
  .back-to-top-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #3b82f6;
    color: white;
    border: none;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
  
  .back-to-top-button:hover {
    background: #2563eb;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
`;
document.head.appendChild(style);

// Back to Top Component
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`back-to-top ${isVisible ? "opacity-100 visible" : "opacity-0 invisible"}`}
      style={{ transition: "opacity 0.3s, visibility 0.3s" }}
    >
      <button
        onClick={scrollToTop}
        className="back-to-top-button"
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
};

// Route Loading Component with different animations

const RouteLoadingMotion = ({
  type = "spinner",
  message = "Loading...",
  showProgress = false,
  page = "default", // Track which page is loading
}) => {
  // Get the background for the specific page
  const getPageBackground = () => {
    return backgroundStyles[page] || backgroundStyles.default;
  };

  // Predefined messages for different pages
  const pageMessages = {
    services: [
      "Preparing amazing services for you... ✨",
      "Loading innovative solutions... 🚀",
      "Gathering our best offerings... 💡",
      "Almost ready to serve you! ⚡",
    ],
    about: [
      "Loading our story... 📖",
      "Discover who we are... 🌟",
      "Preparing our journey... 🎯",
      "Getting to know us better... 🤝",
    ],
    home: [
      "Welcome back! 🌈",
      "Setting up your experience... 🎨",
      "Making things beautiful... ✨",
      "Almost there! 🎉",
    ],
    contact: [
      "Getting your messages ready... 📬",
      "Preparing contact options... 📞",
      "Setting up communication... 💬",
      "Almost ready to connect! 🤝",
    ],
    default: [
      "Loading awesome content... 🚀",
      "Just a moment please... ⏳",
      "Making it perfect for you... ✨",
      "Almost finished! 🎯",
    ],
  };

  // Get random message based on page
  const getRandomMessage = () => {
    const messages = pageMessages[page] || pageMessages.default;
    return messages[Math.floor(Math.random() * messages.length)];
  };

  // Unified loading animations with consistent theme
  const motions = {
    spinner: (
      <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-indigo-500 blur-xl opacity-50 animate-pulse"></div>
          <div className="relative animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-white shadow-2xl"></div>
        </div>
        <p className="mt-6 text-xl font-bold text-white drop-shadow-lg">
          {message || getRandomMessage()}
        </p>
      </div>
    ),

    pulse: (
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-50 animate-ping"></div>
          <div className="relative animate-pulse">
            <div className="h-20 w-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-2xl"></div>
          </div>
        </div>
        <p className="mt-6 text-xl font-bold text-white drop-shadow-lg animate-pulse">
          {message || getRandomMessage()}
        </p>
      </div>
    ),

    bounce: (
      <div className="flex flex-col items-center">
        <div className="relative animate-bounce">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg blur-xl opacity-50"></div>
          <div className="relative h-20 w-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-2xl flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
        <p className="mt-6 text-xl font-bold text-white drop-shadow-lg">
          {message || getRandomMessage()}
        </p>
      </div>
    ),

    wave: (
      <div className="flex flex-col items-center">
        <div className="flex space-x-3">
          {[0, 0.2, 0.4, 0.6, 0.8].map((delay, index) => (
            <div
              key={index}
              className="h-5 w-5 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-full shadow-lg"
              style={{
                animation: `waveBounce 1.4s ease-in-out ${delay}s infinite`,
                transform: "translateY(0)",
              }}
            ></div>
          ))}
        </div>
        <p className="mt-6 text-xl font-bold text-white drop-shadow-lg">
          {message || getRandomMessage()}
        </p>
      </div>
    ),

    galaxy: (
      <div className="flex flex-col items-center">
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow blur-md"></div>
          <div className="absolute inset-2 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-full flex items-center justify-center">
            <div className="h-3 w-3 bg-white rounded-full animate-ping"></div>
          </div>
        </div>
        <p className="mt-6 text-xl font-bold text-white drop-shadow-lg">
          {message || getRandomMessage()}
        </p>
      </div>
    ),

    rings: (
      <div className="flex flex-col items-center">
        <div className="relative h-24 w-24">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute inset-0 border-4 border-transparent rounded-full animate-ping"
              style={{
                borderTopColor:
                  i === 0
                    ? "#818CF8"
                    : i === 1
                      ? "#C084FC"
                      : i === 2
                        ? "#F472B6"
                        : "#34D399",
                borderWidth: "4px",
                animationDelay: `${i * 0.2}s`,
                opacity: 0.6,
              }}
            ></div>
          ))}
        </div>
        <p className="mt-6 text-xl font-bold text-white drop-shadow-lg">
          {message || getRandomMessage()}
        </p>
      </div>
    ),

    // Page-specific animations
    services: (
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full animate-ping opacity-25"></div>
          <div className="relative grid grid-cols-2 gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-10 w-10 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-lg animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-xl font-bold text-white drop-shadow-lg">
          {message || "Loading our services..."}
        </p>
      </div>
    ),

    about: (
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl animate-pulse"></div>
          <div className="relative flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-16 w-12 bg-gradient-to-t from-indigo-500 to-pink-500 rounded-t-lg animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-xl font-bold text-white drop-shadow-lg">
          {message || "Discovering our story..."}
        </p>
      </div>
    ),
  };

  // Add CSS animations
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes waveBounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-25px); }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
      }
      
      .animate-spin-slow {
        animation: spin 3s linear infinite;
      }
      
      .float-animation {
        animation: float 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Floating particles for background
  const Particles = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${8 + Math.random() * 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}
    </div>
  );

  // Get the motion type based on page if not specified
  const getMotionType = () => {
    if (type !== "spinner") return type;

    // Different default animations for different pages
    const pageDefaults = {
      services: "services",
      about: "about",
      home: "galaxy",
      contact: "rings",
      default: "spinner",
    };

    return pageDefaults[page] || type;
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${getPageBackground()} z-50 overflow-hidden`}
    >
      <Particles />

      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

      {/* Main content with page-specific class */}
      <div
        className={`relative z-10 transform transition-all duration-500 hover:scale-105 page-loading-${page}`}
      >
        {motions[getMotionType()] || motions.spinner}

        {/* Progress indicator with page-specific colors */}
        {showProgress && (
          <div className="mt-8 text-center">
            <div className="flex justify-center space-x-2 mb-3">
              <div
                className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
            <p className="text-sm text-white/60 italic">{getRandomMessage()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Create Auth Context
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState(null);
  const [userStatus, setUserStatus] = useState(null); // admin or user
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("authToken") || localStorage.getItem("authToken");
    const email = Cookies.get("userEmail") || localStorage.getItem("userEmail");
    const status =
      Cookies.get("userStatus") || localStorage.getItem("userStatus");

    if (token && email) {
      setUserEmail(email);
      setUserStatus(status === "admin" ? "admin" : "user");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    setIsLoading(false);
  }, []);

  const login = (userData, token, navigate) => {
    const status = userData.status === "admin" ? "admin" : "user";
    setUserEmail(userData.email);
    setUserStatus(status);

    // Cookies
    Cookies.set("authToken", token, { expires: 0.25 });
    Cookies.set("userEmail", userData.email, { expires: 0.25 });
    Cookies.set("userStatus", status, { expires: 0.25 });

    // LocalStorage
    localStorage.setItem("authToken", token);
    localStorage.setItem("userEmail", userData.email);
    localStorage.setItem("userStatus", status);

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // Redirect after login
    navigate(status === "admin" ? "/Dash-32793" : "/U-23-Dash-32793");
  };

  const logout = async (navigate) => {
    try {
      // Get token from cookies or localStorage
      const token =
        Cookies.get("authToken") || localStorage.getItem("authToken");

      if (token) {
        // Send logout request to API
        await axios.post(
          "https://hotel-nodejs-oa32.onrender.com/37829/7892/logout",
          {}, // if your API expects a body, you can send it here
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true, // if your backend uses cookies
          },
        );
      }

      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout error:", error.response?.data || error.message);
      toast.warning("Logout request failed, clearing local session anyway");
    } finally {
      // Clear local state and storage regardless of API response
      setUserEmail(null);
      setUserStatus(null);

      Cookies.remove("authToken");
      Cookies.remove("userEmail");
      Cookies.remove("userStatus");

      localStorage.removeItem("authToken");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userStatus");

      delete axios.defaults.headers.common["Authorization"];

      navigate("/"); // redirect to homepage
    }
  };

  if (isLoading) return <RouteLoadingMotion type="rotate" />;

  return (
    <AuthContext.Provider
      value={{ userEmail, userStatus, login, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}

// PrivateRoute
export const PrivateRoute = ({ children, requiredStatus }) => {
  const { userEmail, userStatus, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <RouteLoadingMotion type="wave" />;

  const token = Cookies.get("authToken") || localStorage.getItem("authToken");

  // Not logged in
  if (!token || !userEmail) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Status check
  if (requiredStatus && userStatus !== requiredStatus) {
    return (
      <Navigate
        to={userStatus === "admin" ? "/Dash-32793" : "/U-23-Dash-32793"}
        replace
      />
    );
  }

  return children;
};

// Route Loader Component
const RouteLoader = ({ children, loadingType = "spinner" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    if (prevLocation && prevLocation !== location.pathname) {
      setIsLoading(true);

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 600);

      return () => clearTimeout(timer);
    }

    setPrevLocation(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    setPrevLocation(location.pathname);
  }, []);

  return (
    <>
      {isLoading && <RouteLoadingMotion type={loadingType} />}
      {children}
    </>
  );
};

// FIXED: Created a wrapper component that provides navigate to auth functions
function AppContent() {
  const navigate = useNavigate();
  const { login, logout } = useAuth();

  return (
    <>
      <Routes>
        {/* Public routes with Layout (includes navbar) */}
        <Route element={<Universal />}>
          <Route
            index
            path="/"
            element={
              <RouteLoader loadingType="spinner">
                <Home />
              </RouteLoader>
            }
          />
          <Route
            path="/A-7483-783/34"
            element={
              <RouteLoader loadingType="pulse">
                <About />
              </RouteLoader>
            }
          />
          <Route
            path="/faq/data"
            element={
              <RouteLoader loadingType="pulse">
                <FAQ />
              </RouteLoader>
            }
          />
          <Route
            path="/B-7839-283/34"
            element={
              <RouteLoader loadingType="bounce">
                <Booking />
              </RouteLoader>
            }
          />
          <Route
            path="/S-6832-342/34"
            element={
              <RouteLoader loadingType="wave">
                <Service />
              </RouteLoader>
            }
          />
          <Route
            path="/R-8763-327/34"
            element={
              <RouteLoader loadingType="rotate">
                <RoomsServices />
              </RouteLoader>
            }
          />
          <Route
            path="/O-2973-342/34"
            element={
              <RouteLoader loadingType="shimmer">
                <OurTeam />
              </RouteLoader>
            }
          />
          <Route
            path="/T-8732-452/34"
            element={
              <RouteLoader loadingType="progress">
                <Testimony />
              </RouteLoader>
            }
          />
          <Route
            path="/C-3872-2344/34"
            element={
              <RouteLoader loadingType="spinner">
                <ContactSection />
              </RouteLoader>
            }
          />
        </Route>

        {/* Admin Dashboard Routes - Protected with Layout (includes sidebar) */}
        <Route
          path="/Dash-32793"
          element={
            <PrivateRoute requiredStatus="admin">
              <Layout>
                <RouteLoader loadingType="rotate">
                  <Dashboard />
                </RouteLoader>
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/AB-7832-342"
          element={
            <PrivateRoute requiredStatus="admin">
              <Layout>
                <RouteLoader loadingType="bounce">
                  <BookingManagements />
                </RouteLoader>
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/Calendar/services/90"
          element={
            <PrivateRoute requiredStatus="admin">
              <Layout>
                <RouteLoader loadingType="bounce">
                  <Calendar />
                </RouteLoader>
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/Amenties/services/24"
          element={
            <PrivateRoute requiredStatus="admin">
              <Layout>
                <RouteLoader loadingType="bounce">
                  <Amenities />
                </RouteLoader>
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/Maintenance/services"
          element={
            <PrivateRoute requiredStatus="admin">
              <Layout>
                <RouteLoader loadingType="rotate">
                  <Maintenance />
                </RouteLoader>
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/Room/type/services"
          element={
            <PrivateRoute requiredStatus="admin">
              <Layout>
                <RouteLoader loadingType="wave">
                  <RoomTypes />
                </RouteLoader>
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/Profile/data"
          element={
            <PrivateRoute requiredStatus="admin">
              <Layout>
                <RouteLoader loadingType="wave">
                  <AdminProfile />
                </RouteLoader>
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/MS-3562-922"
          element={
            <PrivateRoute requiredStatus="admin">
              <Layout>
                <RouteLoader loadingType="wave">
                  <MessageManagement />
                </RouteLoader>
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/UV-2390-389"
          element={
            <PrivateRoute requiredStatus="admin">
              <Layout>
                <RouteLoader loadingType="shimmer">
                  <UserManagement />
                </RouteLoader>
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/booking/chart"
          element={
            <PrivateRoute requiredStatus="admin">
              <Layout>
                <RouteLoader loadingType="progress">
                  <BookingChart />
                </RouteLoader>
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/menu/services/42"
          element={
            <PrivateRoute requiredStatus="admin">
              <Layout>
                <RouteLoader loadingType="pulse">
                  <Menu />
                </RouteLoader>
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/Security/admin/43"
          element={
            <PrivateRoute requiredStatus="admin">
              <Layout>
                <RouteLoader loadingType="spinner">
                  <Security />
                </RouteLoader>
              </Layout>
            </PrivateRoute>
          }
        />
        {/* **************************************** */}
        <Route
          path="/U-23-Dash-32793"
          element={
            <PrivateRoute requiredStatus="user">
              <UserLayout>
                <RouteLoader loadingType="wave">
                  <UserDashboard />
                </RouteLoader>
              </UserLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/User/Dashboard/492"
          element={
            <PrivateRoute requiredStatus="user">
              <UserLayout>
                <RouteLoader loadingType="wave">
                  <DashboardMeManagement />
                </RouteLoader>
              </UserLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/User/Dashboard/amenties"
          element={
            <PrivateRoute requiredStatus="user">
              <UserLayout>
                <RouteLoader loadingType="wave">
                  <UserAmenities />
                </RouteLoader>
              </UserLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/User/Dashboard/maintenance"
          element={
            <PrivateRoute requiredStatus="user">
              <UserLayout>
                <RouteLoader loadingType="wave">
                  <UserMaintenance />
                </RouteLoader>
              </UserLayout>
            </PrivateRoute>
          }
        />

                <Route
          path="/User/Dashboard/room/type"
          element={
            <PrivateRoute requiredStatus="user">
              <UserLayout>
                <RouteLoader loadingType="wave">
                  <UserRoomTypes />
                </RouteLoader>
              </UserLayout>
            </PrivateRoute>
          }
        />

        

        <Route
          path="/User/Dashboard/menu"
          element={
            <PrivateRoute requiredStatus="user">
              <UserLayout>
                <RouteLoader loadingType="wave">
                  <UserMenu />
                </RouteLoader>
              </UserLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/User/Dashboard/chart"
          element={
            <PrivateRoute requiredStatus="user">
              <UserLayout>
                <RouteLoader loadingType="wave">
                  <UserBookingChart />
                </RouteLoader>
              </UserLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/User/dashboard/bookings"
          element={
            <PrivateRoute requiredStatus="user">
              <UserLayout>
                <RouteLoader loadingType="shimmer">
                  <UserBookingManagement />
                </RouteLoader>
              </UserLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/User/dashboard/settings"
          element={
            <PrivateRoute requiredStatus="user">
              <UserLayout>
                <RouteLoader loadingType="shimmer">
                  <UserSecurityManagement />
                </RouteLoader>
              </UserLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/User/dashboard/profile"
          element={
            <PrivateRoute requiredStatus="user">
              <UserLayout>
                <RouteLoader loadingType="shimmer">
                  <UserProfile />
                </RouteLoader>
              </UserLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/User/dashboard/calender"
          element={
            <PrivateRoute requiredStatus="user">
              <UserLayout>
                <RouteLoader loadingType="shimmer">
                  <UserCalendar />
                </RouteLoader>
              </UserLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/Room/type/services"
          element={
            <PrivateRoute requiredStatus="user">
              <Layout>
                <RouteLoader loadingType="wave">
                  <RoomTypes />
                </RouteLoader>
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/User/messages/management"
          element={
            <PrivateRoute requiredStatus="user">
              <UserLayout>
                <RouteLoader loadingType="rotate">
                  <UserMessagesManagement />
                </RouteLoader>
              </UserLayout>
            </PrivateRoute>
          }
        />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BackToTop />
    </>
  );
}

// FIXED: Main App component with correct hierarchy
export default function App() {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
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
            <img
              className="h-20 w-20 rounded-full bg-blue-100 mb-4"
              src={user}
              alt=""
            />
          </div>
          <div className="flex space-x-2 animate-bounce">
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
          </div>
          <p className="mt-6 text-xl font-semibold text-gray-800 animate-pulse">
            Welcome to Luxury Hotel
          </p>
        </div>
      </div>
    );
  }

  // FIXED: Proper nesting - BrowserRouter at the top, then AuthProvider, then AppContent
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

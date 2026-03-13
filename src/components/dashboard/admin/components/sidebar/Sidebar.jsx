
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  People,
  Settings,
  PieChart,
  CalendarToday,
  ExpandMore,
  ChevronRight,
  Menu,
  Close,
  Dashboard as DashboardIcon,
  ShoppingCart,
  Message,
  Logout,
  Notifications,
  Search,
  Hotel,
  Restaurant,
  Spa,
  Pool,
  KingBed,
  TrendingUp,
  AccessTime,
  CheckCircle,
  Info,
  Warning,
  Error,
  Markunread,
  Delete,
  Build,
  EventAvailable,
  AttachMoney,
  SupportAgent,
} from "@mui/icons-material";
import { Button, IconButton, Badge, Avatar, Tooltip } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Layout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showUserInfo, setShowUserInfo] = useState(true);
  const [showQuickStats, setShowQuickStats] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userData, setUserData] = useState({
    _id: "",
    fullname: "",
    email: "",
    phone: "",
    status: "",
    createdAt: "",
    updatedAt: "",
    lastLogin: "",
    statistics: {
      weekly: { totalLogins: 0, totalTimeSpent: 0 },
      monthly: { totalLogins: 0, totalTimeSpent: 0 },
      totalLogins: 0,
      totalSessions: 0,
      totalTimeSpent: 0,
    },
  });
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [dashboardStats, setDashboardStats] = useState({
    totalUsers: 0,
    totalBookings: 0,
    totalMessages: 0,
    totalTestimonials: 0,
    totalRooms: 12,
    occupancyRate: 78,
    revenue: 45280,
    avgRating: 4.8,
    totalRevenue: 125000,
    monthlyGrowth: 15,
    activeBookings: 24,
    checkIns: 8,
    checkOuts: 12,
    availableRooms: 45,
    maintenanceRooms: 3,
    totalStaff: 32,
    onDutyStaff: 24,
    totalEvents: 5,
    upcomingEvents: 3,
  });

  const location = useLocation();
  const navigate = useNavigate();

  // Menu items as specified
  const menuItems = [
    {
      title: "Dashboard",
      icon: (
        <DashboardIcon className="size-5 xsm:size-5 sm:size-5 md:size-5 lg:size-6" />
      ),
      link: "/Dash-32793",
      color: "from-blue-500 to-blue-600",
      badge:
        dashboardStats.totalBookings > 0
          ? Math.min(dashboardStats.totalBookings, 9)
          : undefined,
    },
    {
      title: "Users",
      icon: (
        <People className="size-5 xsm:size-5 sm:size-5 md:size-5 lg:size-6" />
      ),
      link: "/UV-2390-389",
      color: "from-green-500 to-green-600",
      badge:
        dashboardStats.totalUsers > 0
          ? Math.min(dashboardStats.totalUsers, 9)
          : undefined,
    },
    {
      title: "Bookings",
      icon: (
        <ShoppingCart className="size-5 xsm:size-5 sm:size-5 md:size-5 lg:size-6" />
      ),
      link: "/AB-7832-342",
      color: "from-purple-500 to-purple-600",
      badge:
        dashboardStats.totalBookings > 0
          ? Math.min(dashboardStats.totalBookings, 9)
          : undefined,
    },
    {
      title: "Messages",
      icon: (
        <Message className="size-5 xsm:size-5 sm:size-5 md:size-5 lg:size-6" />
      ),
      link: "/MS-3562-922",
      color: "from-pink-500 to-pink-600",
      badge:
        dashboardStats.totalMessages > 0
          ? Math.min(dashboardStats.totalMessages, 9)
          : undefined,
    },
    {
      title: "Analytics",
      icon: (
        <PieChart className="size-5 xsm:size-5 sm:size-5 md:size-5 lg:size-6" />
      ),
      color: "from-yellow-500 to-yellow-600",
      submenu: [
        { title: "Charts", link: "/GD-2761-823", icon: "📊" },
        // { title: "Reports", link: "/ARG-3832-382", icon: "📈" },
        // { title: "Revenue Analytics", link: "/RA-4721-563", icon: "💰" },
        // { title: "User Analytics", link: "/UA-5821-674", icon: "👥" },
      ],
    },
    {
      title: "Calendar",
      icon: (
        <CalendarToday className="size-5 xsm:size-5 sm:size-5 md:size-5 lg:size-6" />
      ),
      link: "/Calendar/services/90",
      color: "from-red-500 to-red-600",
    },
    {
      title: "Settings",
      icon: (
        <Settings className="size-5 xsm:size-5 sm:size-5 md:size-5 lg:size-6" />
      ),
      color: "from-gray-500 to-gray-600",
      submenu: [
        { title: "Profile", link: "/Profile/data", icon: "👤" },
        { title: "Security", link: "/Security/admin/43", icon: "🔒" },
      ],
    },
  ];

  // Additional attractive routes
  const additionalRoutes = [
    {
      title: "Hotel Management",
      icon: (
        <Hotel className="size-5 xsm:size-5 sm:size-5 md:size-5 lg:size-6" />
      ),
      color: "from-indigo-500 to-indigo-600",
      submenu: [
        { title: "Rooms", link: "/RM-1234-567", icon: "🛏️" },
        { title: "Room Types", link: "/Room/type/services", icon: "🏨" },
        { title: "Amenities", link: "/Amenties/services/24", icon: "✨" },
        { title: "Maintenance", link: "/Maintenance/services", icon: "🔧" },
      ],
    },
    {
      title: "Restaurant",
      icon: (
        <Restaurant className="size-5 xsm:size-5 sm:size-5 md:size-5 lg:size-6" />
      ),
      color: "from-orange-500 to-orange-600",
      submenu: [
        { title: "Menu", link: "/menu/services/42", icon: "📋" },
        // { title: "Staff", link: "/ST-0123-456", icon: "👨‍🍳" },
      ],
    },

    {
      title: "Support",
      icon: (
        <SupportAgent className="size-5 xsm:size-5 sm:size-5 md:size-5 lg:size-6" />
      ),
      color: "from-rose-500 to-rose-600",
      submenu: [{ title: "FAQ", link: "/faq/data", icon: "❓" }],
    },
  ];

  // Combine all menu items
  const allMenuCategories = [
    {
      title: "MAIN",
      items: menuItems,
    },
    {
      title: "HOTEL SERVICES",
      items: additionalRoutes.slice(0, 4),
    },
    {
      title: "ROOMS & EVENTS",
      items: additionalRoutes.slice(4, 6),
    },
    {
      title: "FINANCE & SUPPORT",
      items: additionalRoutes.slice(6, 8),
    },
  ];

  // Fetch user data by email from cookies
  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoadingUser(true);

      // Get auth token and user email from cookies
      const authToken = Cookies.get("authToken");
      const userEmail = Cookies.get("userEmail");

      if (!authToken || !userEmail) {
        setIsLoadingUser(false);
        navigate("/");
        return;
      }

      try {
        const response = await axios.get(
          `https://hotel-nodejs-oa32.onrender.com/37829/7892/email/${encodeURIComponent(userEmail)}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          },
        );

        if (response.data && response.data.user) {
          const currentUser = response.data.user;

          setUserData({
            _id: currentUser._id || "",
            fullname: currentUser.fullname || "",
            email: currentUser.email || "",
            phone: currentUser.phone || "",
            status: currentUser.status || "user",
            createdAt: currentUser.createdAt || "",
            updatedAt: currentUser.updatedAt || "",
            lastLogin: currentUser.lastLogin || "",
            statistics: currentUser.statistics || {
              weekly: { totalLogins: 0, totalTimeSpent: 0 },
              monthly: { totalLogins: 0, totalTimeSpent: 0 },
              totalLogins: 0,
              totalSessions: 0,
              totalTimeSpent: 0,
            },
          });

          Cookies.set(
            "userName",
            currentUser.fullname || currentUser.email.split("@")[0],
            { expires: 7 },
          );
          Cookies.set("userStatus", currentUser.status || "user", {
            expires: 7,
          });
          Cookies.set("userId", currentUser._id || "", { expires: 7 });

          setDashboardStats((prev) => ({
            ...prev,
            totalUsers: response.data.totalUsers || 0,
          }));

          fetchNotifications(currentUser._id, authToken);
        }
      } catch (error) {
        console.error(
          "Error fetching user data:",
          error.response?.data || error.message,
        );
        toast.error("Failed to load user data. Please login again.", {
          position: "top-right",
          autoClose: 5000,
        });

        if (error.response?.status === 401) {
          Cookies.remove("authToken");
          Cookies.remove("userEmail");
          navigate("/");
        }
      } finally {
        setIsLoadingUser(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  // Fetch notifications
  const fetchNotifications = async (userId, token) => {
    try {
      const sampleNotifications = [
        {
          id: 1,
          type: "booking",
          title: "New Booking",
          message: "John Doe booked Deluxe King Room",
          time: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
          read: false,
          icon: <ShoppingCart className="text-blue-500" />,
        },
        {
          id: 2,
          type: "message",
          title: "New Message",
          message: "You have a new message from support",
          time: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
          read: false,
          icon: <Message className="text-green-500" />,
        },
      ];
      setNotifications(sampleNotifications);
      setUnreadCount(2);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  // Mark notification as read
  const markAsRead = async (notificationId) => {
    const updatedNotifications = notifications.map((notif) =>
      notif.id === notificationId ? { ...notif, read: true } : notif,
    );
    setNotifications(updatedNotifications);
    setUnreadCount(updatedNotifications.filter((n) => !n.read).length);
  };

  // Mark all as read
  const markAllAsRead = async () => {
    const updatedNotifications = notifications.map((notif) => ({
      ...notif,
      read: true,
    }));
    setNotifications(updatedNotifications);
    setUnreadCount(0);
  };

  // Delete notification
  const deleteNotification = async (notificationId, e) => {
    e.stopPropagation();
    const updatedNotifications = notifications.filter(
      (n) => n.id !== notificationId,
    );
    setNotifications(updatedNotifications);
    setUnreadCount(updatedNotifications.filter((n) => !n.read).length);
  };

  // Get user display data
  const getDisplayName = () => {
    return userData.fullname || userData.email?.split("@")[0] || "User";
  };

  const getUserStatus = () => {
    return userData.status || "user";
  };

  const getAvatarUrl = () => {
    if (userData.fullname) {
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.fullname)}&background=4f46e5&color=fff&bold=true`;
    }
    return `https://ui-avatars.com/api/?name=${userData.email?.charAt(0) || "U"}&background=4f46e5&color=fff&bold=true`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsCollapsed(true);
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Logout function
  const logout = async () => {
    setIsLoggingOut(true);

    try {
      const token = Cookies.get("authToken");

      if (token) {
        await axios.post(
          "https://hotel-nodejs-oa32.onrender.com/37829/7892/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          },
        );
      }

      toast.success("Logged out successfully", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Logout error:", error.response?.data || error.message);
    } finally {
      Cookies.remove("authToken");
      Cookies.remove("userEmail");
      Cookies.remove("userName");
      Cookies.remove("userStatus");
      Cookies.remove("userId");
      Cookies.remove("userPhone");

      localStorage.removeItem("authToken");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userName");
      localStorage.removeItem("userStatus");

      delete axios.defaults.headers.common["Authorization"];

      setUserData({
        _id: "",
        fullname: "",
        email: "",
        phone: "",
        status: "",
        createdAt: "",
        updatedAt: "",
        lastLogin: "",
        statistics: {
          weekly: { totalLogins: 0, totalTimeSpent: 0 },
          monthly: { totalLogins: 0, totalTimeSpent: 0 },
          totalLogins: 0,
          totalSessions: 0,
          totalTimeSpent: 0,
        },
      });

      setShowLogoutModal(false);
      setIsLoggingOut(false);
      navigate("/");
    }
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const toggleMenu = () => {
    if (isMobile) {
      setSidebarOpen(!sidebarOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  const toggleSubMenu = (title) => {
    const menuItem = allMenuCategories
      .flatMap((cat) => cat.items)
      .find((item) => item.title === title);
    if (menuItem?.submenu) {
      setOpenSubMenu(openSubMenu === title ? null : title);
    }
  };

  // Check if menu item is active
  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  // Only show user info if we have real data
  const hasUserData = userData.email && userData.email !== "";

  // Animation variants
  const sidebarVariants = {
    expanded: {
      width: isMobile ? "100%" : "280px",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    collapsed: {
      width: isMobile ? "100%" : "80px",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const menuItemVariants = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    hover: {
      scale: 1.02,
      backgroundColor: "rgba(255,255,255,0.1)",
      transition: { duration: 0.2 },
    },
  };

  const subMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* Animated Background Particles - Hidden on very small screens */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden hidden md:block">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>

      {/* Logout Confirmation Modal */}
      <AnimatePresence>
        {showLogoutModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm p-4"
            onClick={() => !isLoggingOut && setShowLogoutModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl p-6 xsm:p-8 max-w-md w-full mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                    scale: [1, 1.1, 1.1, 1.1, 1],
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-red-500 to-red-700 w-20 h-20 xsm:w-24 xsm:h-24 rounded-full flex items-center justify-center mx-auto mb-4 xsm:mb-6 shadow-lg"
                >
                  <Logout
                    className="text-red-600 text-3xl xsm:text-4xl"
                    style={{ fontSize: "2rem" }}
                  />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl xsm:text-2xl font-bold text-gray-800 mb-2"
                >
                  Ready to Leave?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm xsm:text-base text-gray-600 mb-6"
                >
                  Are you sure you want to logout from your account?
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col xsm:flex-row gap-3 justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowLogoutModal(false)}
                    disabled={isLoggingOut}
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium order-2 xsm:order-1"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={logout}
                    disabled={isLoggingOut}
                    className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium order-1 xsm:order-2"
                  >
                    {isLoggingOut ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Logging out...</span>
                      </>
                    ) : (
                      <>
                        <Logout className="size-4 xsm:size-5" />
                        <span>Logout</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notifications Modal */}
      <AnimatePresence>
        {showNotifications && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm p-4"
            onClick={() => setShowNotifications(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl w-full max-w-2xl mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 xsm:p-6">
                <div className="flex flex-col xsm:flex-row justify-between items-start xsm:items-center gap-3 mb-4 xsm:mb-6">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl xsm:text-2xl font-bold text-gray-800">
                      Notifications
                    </h2>
                    {unreadCount > 0 && (
                      <span className="bg-red-500 text-white text-xs xsm:text-sm px-2 py-1 rounded-full">
                        {unreadCount} new
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 w-full xsm:w-auto">
                    {unreadCount > 0 && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={markAllAsRead}
                        className="px-3 xsm:px-4 py-1.5 xsm:py-2 text-xs xsm:text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex-1 xsm:flex-none"
                      >
                        Mark all as read
                      </motion.button>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowNotifications(false)}
                      className="p-1.5 xsm:p-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full transition-colors"
                    >
                      <Close className="text-gray-600 size-5 xsm:size-6" />
                    </motion.button>
                  </div>
                </div>

                <div className="space-y-3 max-h-[50vh] xsm:max-h-[60vh] overflow-y-auto custom-scrollbar pr-1">
                  {notifications.length === 0 ? (
                    <div className="text-center py-8 xsm:py-12">
                      <Markunread className="text-5xl xsm:text-6xl text-gray-300 mb-4" />
                      <p className="text-gray-500 text-sm xsm:text-base">
                        No notifications
                      </p>
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => markAsRead(notification.id)}
                        className={`flex items-start gap-3 xsm:gap-4 p-3 xsm:p-4 rounded-xl cursor-pointer transition-all ${
                          notification.read
                            ? "bg-gray-50 hover:bg-gray-100"
                            : "bg-blue-50 hover:bg-blue-100 border-l-4 border-blue-500"
                        }`}
                      >
                        <div className="p-1.5 xsm:p-2 bg-white rounded-full shadow-sm shrink-0">
                          {notification.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col xsm:flex-row xsm:justify-between xsm:items-start gap-1 mb-1">
                            <h3
                              className={`font-semibold text-sm xsm:text-base truncate ${notification.read ? "text-gray-700" : "text-gray-900"}`}
                            >
                              {notification.title}
                            </h3>
                            <span className="text-xs text-gray-500 whitespace-nowrap">
                              {formatTimeAgo(notification.time)}
                            </span>
                          </div>
                          <p
                            className={`text-xs xsm:text-sm line-clamp-2 ${notification.read ? "text-gray-600" : "text-gray-800"}`}
                          >
                            {notification.message}
                          </p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) =>
                            deleteNotification(notification.id, e)
                          }
                          className="p-1 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full transition-colors shrink-0"
                        >
                          <Delete className="size-3 xsm:size-4 text-gray-500" />
                        </motion.button>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      {sidebarOpen && isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 backdrop-blur-sm"
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar */}
      <motion.div
        variants={sidebarVariants}
        animate={isCollapsed && !isMobile ? "collapsed" : "expanded"}
        className={`bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white h-screen fixed lg:relative z-40
          shadow-2xl overflow-hidden transition-transform duration-300
          ${isMobile ? (sidebarOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"}`}
        style={{
          width: isMobile ? "85%" : isCollapsed ? "80px" : "280px",
          maxWidth: isMobile ? "320px" : "none",
        }}
      >
        {/* Sidebar Content with Overflow */}
        <div className="h-full flex flex-col overflow-hidden">
          {/* Logo Area */}
          <div className="p-3 xsm:p-4 lg:p-6 flex items-center justify-between border-b border-gray-700 shrink-0">
            <div className="flex items-center gap-2 xsm:gap-3 min-w-0">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="w-8 h-8 xsm:w-9 xsm:h-9 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shrink-0"
              >
                <Hotel className="text-white size-4 xsm:size-5 lg:size-6" />
              </motion.div>
              {(!isCollapsed || isMobile) && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-base xsm:text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent truncate"
                >
                  HotelMS
                </motion.span>
              )}
            </div>

            {!isMobile && (
              <motion.div
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMenu}
                className="p-1 hover:bg-gray-700 rounded-lg cursor-pointer shrink-0"
              >
                {isCollapsed ? (
                  <ChevronRight className="size-4 xsm:size-5" />
                ) : (
                  <ExpandMore className="size-4 xsm:size-5" />
                )}
              </motion.div>
            )}

            {isMobile && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMenu}
                className="p-1 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg cursor-pointer shrink-0"
              >
                <Close className="size-4 xsm:size-5" />
              </motion.button>
            )}
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {/* Search Bar */}
            {(!isCollapsed || isMobile) && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-2 xsm:p-3 lg:p-4"
              >
                <div className="relative">
                  <Search className="absolute left-2 xsm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-3 xsm:size-4 lg:size-5" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-gray-700 text-white pl-7 xsm:pl-9 pr-2 xsm:pr-3 py-1.5 xsm:py-2 text-xs xsm:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </motion.div>
            )}

            {/* Collapsible User Info Card */}
            {(!isCollapsed || isMobile) && hasUserData && (
              <div className="mx-2 xsm:mx-3 mb-3 xsm:mb-4">
                <div
                  className="flex items-center justify-between p-1.5 xsm:p-2 bg-gray-800/50 rounded-t-lg cursor-pointer"
                  onClick={() => setShowUserInfo(!showUserInfo)}
                >
                  <span className="text-xs font-semibold text-gray-400">
                    USER PROFILE
                  </span>
                  <motion.div
                    animate={{ rotate: showUserInfo ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExpandMore className="size-3 xsm:size-4 text-gray-400" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {showUserInfo && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-3 xsm:p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-b-lg border-x border-b border-gray-600">
                        <div className="flex items-center gap-2 xsm:gap-3 mb-2 xsm:mb-3">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="relative shrink-0"
                          >
                            <Avatar
                              src={getAvatarUrl()}
                              sx={{
                                width: isMobile ? 40 : 48,
                                height: isMobile ? 40 : 48,
                              }}
                              className="ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-800"
                            >
                              {userData.fullname?.charAt(0) || "U"}
                            </Avatar>
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                              className="absolute bottom-0 right-0 w-2 h-2 xsm:w-2.5 xsm:h-2.5 bg-green-500 rounded-full border-2 border-gray-800"
                            />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <motion.p
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="text-xs xsm:text-sm font-semibold truncate"
                            >
                              {getDisplayName()}
                            </motion.p>
                            <motion.p
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                              className="text-xs text-gray-400 truncate"
                            >
                              {userData.email}
                            </motion.p>
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                              className="flex items-center gap-1 mt-1"
                            >
                              <span
                                className={`text-xs px-1.5 xsm:px-2 py-0.5 rounded-full ${
                                  userData.status === "admin"
                                    ? "bg-purple-500/20 text-purple-300"
                                    : "bg-blue-500/20 text-blue-300"
                                }`}
                              >
                                {userData.status}
                              </span>
                            </motion.div>
                          </div>
                        </div>

                        {/* User Stats */}
                        <div className="grid grid-cols-2 gap-1 xsm:gap-2 mt-2 xsm:mt-3 pt-2 xsm:pt-3 border-t border-gray-600">
                          <div className="text-center">
                            <p className="text-xs text-gray-400">Logins</p>
                            <p className="text-xs xsm:text-sm font-semibold">
                              {userData.statistics?.totalLogins || 0}
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-400">
                              Member Since
                            </p>
                            <p className="text-xs font-semibold">
                              {userData.createdAt
                                ? new Date(
                                    userData.createdAt,
                                  ).toLocaleDateString()
                                : "N/A"}
                            </p>
                          </div>
                        </div>

                        {/* Last Login */}
                        {userData.lastLogin && (
                          <div className="mt-1 xsm:mt-2 text-center">
                            <p className="text-xs text-gray-400">Last Login</p>
                            <p className="text-xs truncate">
                              {formatDate(userData.lastLogin)}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Navigation Menu */}
            <nav className="px-1 xsm:px-2 pb-20">
              {allMenuCategories.map(
                (category, categoryIndex) =>
                  category.items.length > 0 && (
                    <div key={category.title} className="mb-3 xsm:mb-4">
                      {(!isCollapsed || isMobile) && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: categoryIndex * 0.1 }}
                          className="px-2 xsm:px-3 mb-1 xsm:mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                        >
                          {category.title}
                        </motion.div>
                      )}

                      {category.items.map((item, index) => (
                        <motion.div
                          key={item.title}
                          variants={menuItemVariants}
                          initial="initial"
                          animate="animate"
                          transition={{
                            delay: categoryIndex * 0.1 + index * 0.05,
                          }}
                          onHoverStart={() => setHoveredItem(item.title)}
                          onHoverEnd={() => setHoveredItem(null)}
                        >
                          <motion.div
                            whileHover="hover"
                            variants={menuItemVariants}
                            onClick={() => {
                              if (!item.submenu && item.link) {
                                if (isMobile) setSidebarOpen(false);
                                navigate(item.link);
                              }
                              toggleSubMenu(item.title);
                            }}
                            className={`relative flex items-center p-1.5 xsm:p-2 lg:p-3 my-0.5 xsm:my-1 rounded-lg xsm:rounded-xl cursor-pointer
                            ${
                              isActiveLink(item.link)
                                ? `bg-gradient-to-r ${item.color} shadow-lg`
                                : openSubMenu === item.title
                                  ? `bg-gradient-to-r ${item.color} shadow-lg`
                                  : "hover:bg-gray-700"
                            } transition-all duration-300`}
                          >
                            {/* Icon with Badge */}
                            <div className="relative shrink-0">
                              {item.icon}
                              {item.badge && (!isCollapsed || isMobile) && (
                                <motion.span
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-3 h-3 xsm:w-3.5 xsm:h-3.5 flex items-center justify-center text-[8px] xsm:text-[10px]"
                                >
                                  {item.badge}
                                </motion.span>
                              )}
                            </div>

                            {(!isCollapsed || isMobile) && (
                              <>
                                <motion.span
                                  className="ml-2 xsm:ml-2.5 lg:ml-3 text-xs xsm:text-sm lg:text-sm font-medium flex-1 truncate"
                                  animate={{
                                    x: hoveredItem === item.title ? 5 : 0,
                                  }}
                                >
                                  {item.title}
                                </motion.span>

                                {item.submenu && (
                                  <motion.span
                                    className="ml-auto shrink-0"
                                    animate={{
                                      rotate:
                                        openSubMenu === item.title ? 180 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <ExpandMore className="size-3 xsm:size-4 lg:size-5" />
                                  </motion.span>
                                )}
                              </>
                            )}
                          </motion.div>

                          {/* Submenu */}
                          <AnimatePresence>
                            {(!isCollapsed || isMobile) &&
                              item.submenu &&
                              openSubMenu === item.title && (
                                <motion.div
                                  variants={subMenuVariants}
                                  initial="hidden"
                                  animate="visible"
                                  exit="hidden"
                                  className="ml-3 xsm:ml-4 pl-2 xsm:pl-3 border-l-2 border-gray-600 overflow-hidden"
                                >
                                  {item.submenu.map((subItem, subIndex) => (
                                    <motion.div
                                      key={subIndex}
                                      variants={{
                                        hidden: { x: -20, opacity: 0 },
                                        visible: { x: 0, opacity: 1 },
                                      }}
                                      transition={{ delay: subIndex * 0.1 }}
                                    >
                                      <Link to={subItem.link}>
                                        <motion.div
                                          whileHover={{ x: 5 }}
                                          onClick={() =>
                                            isMobile && setSidebarOpen(false)
                                          }
                                          className="flex items-center gap-1.5 xsm:gap-2 py-1.5 xsm:py-2 px-2 xsm:px-3 text-xs xsm:text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all"
                                        >
                                          <span className="text-sm xsm:text-base">
                                            {subItem.icon}
                                          </span>
                                          <span className="truncate">
                                            {subItem.title}
                                          </span>
                                        </motion.div>
                                      </Link>
                                    </motion.div>
                                  ))}
                                </motion.div>
                              )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  ),
              )}
            </nav>
          </div>

          {/* Quick Stats - Sticky at bottom */}
          {(!isCollapsed || isMobile) && (
            <div className="shrink-0 border-t border-gray-700 bg-gray-800">
              <div
                className="flex items-center justify-between p-2 xsm:p-3 cursor-pointer"
                onClick={() => setShowQuickStats(!showQuickStats)}
              >
                <span className="text-xs font-semibold text-gray-400">
                  QUICK STATS
                </span>
                <motion.div
                  animate={{ rotate: showQuickStats ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ExpandMore className="size-3 xsm:size-4 text-gray-400" />
                </motion.div>
              </div>
              <AnimatePresence>
                {showQuickStats && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-2 xsm:p-3 bg-gray-800/50">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-400">
                          Today's Stats
                        </span>
                        <TrendingUp className="size-3 xsm:size-4 text-green-400" />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="text-xs text-gray-400">Occupancy</p>
                          <p className="text-xs xsm:text-sm font-semibold text-green-400">
                            {dashboardStats.occupancyRate}%
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Revenue</p>
                          <p className="text-xs xsm:text-sm font-semibold text-blue-400">
                            ${dashboardStats.revenue}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">
                            Active Bookings
                          </p>
                          <p className="text-xs xsm:text-sm font-semibold text-yellow-400">
                            {dashboardStats.activeBookings}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Check-ins</p>
                          <p className="text-xs xsm:text-sm font-semibold text-purple-400">
                            {dashboardStats.checkIns}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Logout Button */}
          <div className="shrink-0 p-2 xsm:p-3 lg:p-4 border-t border-gray-700 bg-gray-800">
            <Tooltip
              title={isCollapsed && !isMobile ? "Logout" : ""}
              placement="right"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLogoutClick}
                disabled={isLoggingOut}
                className={`flex items-center gap-2 xsm:gap-3 w-full p-2 xsm:p-2.5 lg:p-3 rounded-lg xsm:rounded-xl
                  bg-gradient-to-r from-red-500 to-red-600 text-white
                  hover:from-red-600 hover:to-red-700 transition-all shadow-lg
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${isCollapsed && !isMobile ? "justify-center" : "justify-start"}`}
              >
                <Logout className="size-4 xsm:size-5 shrink-0" />
                {(!isCollapsed || isMobile) && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs xsm:text-sm lg:text-sm font-medium truncate"
                  >
                    Logout
                  </motion.span>
                )}
              </motion.button>
            </Tooltip>
          </div>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-gray-50 transition-colors duration-300 relative">
        {/* Top Bar */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl shadow-sm p-2 xsm:p-3 lg:p-4 flex justify-between items-center border-b border-gray-200"
        >
          <div className="flex items-center gap-2 xsm:gap-3 lg:gap-4 min-w-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="lg:hidden p-1.5 xsm:p-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg transition-colors shrink-0"
            >
              <Menu className="text-white size-4 xsm:size-5" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-1 xsm:gap-2 min-w-0"
            >
              <h1 className="text-sm xsm:text-base lg:text-xl font-bold text-gray-800 truncate">
                {hasUserData
                  ? `Welcome back, ${getDisplayName()}!`
                  : "Welcome to HotelMS"}
              </h1>
              {hasUserData && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-1 px-1.5 xsm:px-2 py-0.5 xsm:py-1 bg-green-100 rounded-full shrink-0"
                >
                  <CheckCircle className="size-3 xsm:size-3.5 text-green-500" />
                  <span className="text-[10px] xsm:text-xs text-green-600 hidden xsm:inline">
                    Online
                  </span>
                </motion.div>
              )}
            </motion.div>
          </div>

          <div className="flex items-center gap-1 xsm:gap-2 lg:gap-3 shrink-0">
            {/* Time */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-1 xsm:gap-2 px-2 xsm:px-3 py-1 xsm:py-1.5 bg-gray-100 rounded-lg"
            >
              <AccessTime className="size-3 xsm:size-3.5 text-gray-600" />
              <span className="text-xs xsm:text-sm text-gray-600">
                {new Date().toLocaleTimeString()}
              </span>
            </motion.div>

            {/* Notifications */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <IconButton
                onClick={() => setShowNotifications(true)}
                className="hover:bg-gray-100 p-1.5 xsm:p-2"
                size="small"
              >
                <Badge
                  badgeContent={unreadCount > 0 ? unreadCount : 0}
                  color="error"
                  overlap="circular"
                >
                  <Notifications className="text-gray-600 size-4 xsm:size-5" />
                </Badge>
              </IconButton>
            </motion.div>

            {/* User Avatar */}
            {hasUserData && (
              <Tooltip
                title={
                  <div className="p-1 xsm:p-2">
                    <p className="text-xs xsm:text-sm font-semibold">
                      {getDisplayName()}
                    </p>
                    <p className="text-[10px] xsm:text-xs text-gray-400">
                      {userData.email}
                    </p>
                  </div>
                }
                arrow
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Avatar
                    src={getAvatarUrl()}
                    sx={{
                      width: isMobile ? 28 : 32,
                      height: isMobile ? 28 : 32,
                    }}
                    className="cursor-pointer ring-2 ring-blue-500 hover:ring-4 transition-all"
                  >
                    {userData.fullname?.charAt(0)}
                  </Avatar>
                </motion.div>
              </Tooltip>
            )}
          </div>
        </motion.div>

        {/* Page Content */}
        <div className="p-2 xsm:p-3 lg:p-4 xl:p-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </div>
      </main>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #2d3748;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4a5568;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #718096;
        }

        @media (min-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
        }

        @media (min-width: 1024px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 5px;
          }
        }
      `}</style>
    </div>
  );
};

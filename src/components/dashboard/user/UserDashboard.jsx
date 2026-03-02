/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  People,
  Message,
  RateReview,
  BookOnline,
  TrendingUp,
  TrendingDown,
  Refresh,
  MoreVert,
  Close,
  Email,
  Phone,
  LocationOn,
  Star,
  CalendarToday,
  Person,
  Room,
  AccessTime,
  Dashboard as DashboardIcon,
  Hotel,
  Restaurant,
  Spa,
  Pool,
  Wifi,
  LocalBar,
  FitnessCenter,
  DirectionsCar,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { formatDistanceToNow, format } from "date-fns";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const UserDashboard = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);
  const [userData, setUserData] = useState(null);
  const [dashboardData, setDashboardData] = useState({
    userProfile: null,
    userMessages: [],
    userTestimonials: [],
    userBookings: [],
  });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState("week");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedModal, setSelectedModal] = useState(null);
  const [modalData, setModalData] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");

  // Get user email from cookies on component mount
  useEffect(() => {
    const email = Cookies.get("userEmail") || localStorage.getItem("userEmail");
    const status = Cookies.get("userStatus") || localStorage.getItem("userStatus");
    
    if (!email) {
      toast.error("Please login to access dashboard", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      navigate("/");
      return;
    }

    if (status === "admin") {
      navigate("/Dash-32793");
      return;
    }

    setUserEmail(email);
  }, [navigate]);

  // API endpoints
  const API_ENDPOINTS = {
    users: "https://hotel-nodejs-oa32.onrender.com/37829/7892",
    messages: "https://hotel-nodejs-oa32.onrender.com/63729/892308",
    testimonials: "https://hotel-nodejs-oa32.onrender.com/89492/9238",
    bookings: "https://hotel-nodejs-oa32.onrender.com/84383/92823",
  };

  // Filter data by email
  const filterByEmail = (data, email) => {
    if (!data || !email) return [];
    return data.filter(item => {
      // Check various possible email fields in the data
      const itemEmail = item.email || item.userEmail || item.guestEmail || 
                       (item.user && item.user.email) || (item.guest && item.guest.email);
      return itemEmail?.toLowerCase() === email.toLowerCase();
    });
  };

  // Fetch dashboard data filtered by email
  const fetchDashboardData = async (showRefreshToast = false) => {
    if (!userEmail) return;

    try {
      if (showRefreshToast) {
        setRefreshing(true);
      }

      const [usersRes, messagesRes, testimonialsRes, bookingsRes] =
        await Promise.all([
          axios.get(API_ENDPOINTS.users),
          axios.get(API_ENDPOINTS.messages),
          axios.get(API_ENDPOINTS.testimonials),
          axios.get(API_ENDPOINTS.bookings),
        ]);

      // Get all users data
      const allUsers = usersRes.data.users || [];
      
      // Find current user profile
      const currentUser = allUsers.find(
        user => user.email?.toLowerCase() === userEmail.toLowerCase()
      );

      // Filter messages by email
      const userMessages = filterByEmail(
        messagesRes.data.data || [], 
        userEmail
      );

      // Filter testimonials by email
      const userTestimonials = filterByEmail(
        testimonialsRes.data.orders || [], 
        userEmail
      );

      // Filter bookings by email
      const userBookings = filterByEmail(
        bookingsRes.data.data?.bookings || [], 
        userEmail
      );

      setDashboardData({
        userProfile: currentUser,
        userMessages,
        userTestimonials,
        userBookings,
      });

      setUserData(currentUser);

      if (showRefreshToast) {
        toast.success("Dashboard updated successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      toast.error("Failed to fetch latest data", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (userEmail) {
      fetchDashboardData();

      // Auto refresh every 30 seconds
      const interval = setInterval(() => {
        fetchDashboardData(false);
      }, 30000);

      return () => clearInterval(interval);
    }
  }, [userEmail]);

  // Get user's items from each category
  const getUserItems = (category) => {
    switch (category) {
      case 'profile':
        return dashboardData.userProfile ? [dashboardData.userProfile] : [];
      case 'messages':
        return dashboardData.userMessages || [];
      case 'testimonials':
        return dashboardData.userTestimonials || [];
      case 'bookings':
        return dashboardData.userBookings || [];
      default:
        return [];
    }
  };

  // Handle view all click
  const handleViewAll = (category) => {
    setModalData(getUserItems(category));
    setSelectedModal(category);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedModal(null);
    setModalData([]);
  };

  // Calculate user statistics
  const statistics = {
    totalMessages: dashboardData.userMessages.length,
    totalTestimonials: dashboardData.userTestimonials.length,
    totalBookings: dashboardData.userBookings.length,
    upcomingBookings: dashboardData.userBookings.filter(b => {
      const checkIn = new Date(b.checkIn || b.date || b.arrivalDate);
      return checkIn > new Date();
    }).length,
    completedBookings: dashboardData.userBookings.filter(b => {
      const checkOut = new Date(b.checkOut || b.departureDate);
      return checkOut < new Date();
    }).length,
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cardVariants = {
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  // Profile Card Component
  const ProfileCard = ({ profile }) => {
    if (!profile) return null;

    return (
      <motion.div
        variants={itemVariants}
        whileHover="hover"
        whileTap="tap"
        onHoverStart={() => setHoveredCard('profile')}
        onHoverEnd={() => setHoveredCard(null)}
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white"
      >
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-blue-600">
                {profile.fullname?.charAt(0) || profile.name?.charAt(0) || 'U'}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{profile.fullname || profile.name}</h2>
              <p className="text-blue-100">{profile.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Phone className="text-sm" />
              <span className="text-sm">{profile.phone || 'Not provided'}</span>
            </div>
            <div className="flex items-center gap-2">
              <LocationOn className="text-sm" />
              <span className="text-sm">{profile.country || profile.location || 'Not provided'}</span>
            </div>
            <div className="flex items-center gap-2">
              <AccessTime className="text-sm" />
              <span className="text-sm">
                Joined {profile.createdAt ? format(new Date(profile.createdAt), 'MMM yyyy') : 'Recently'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-sm" />
              <span className="text-sm">Member</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Data Card Component for user-specific data
  const DataCard = ({ title, icon: Icon, color, data, category, count }) => {
    const items = data.slice(0, 6);

    return (
      <motion.div
        variants={itemVariants}
        whileHover="hover"
        whileTap="tap"
        onHoverStart={() => setHoveredCard(title)}
        onHoverEnd={() => setHoveredCard(null)}
        className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
      >
        {/* Animated background gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0`}
          animate={{
            opacity: hoveredCard === title ? 0.1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{
                  rotate: hoveredCard === title ? [0, -10, 10, -10, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
                className={`p-3 rounded-xl bg-gradient-to-r ${color} bg-opacity-10`}
              >
                <Icon className="text-2xl" style={{ color: color.split(' ')[1] }} />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Total: {count}
                </p>
              </div>
            </div>
            {items.length > 0 && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleViewAll(category)}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View All
              </motion.button>
            )}
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 gap-3">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 cursor-pointer hover:shadow-md transition-all"
              >
                {category === 'messages' && (
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-white">
                      {item.subject || 'No Subject'}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                      {item.content || item.message || 'No content'}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {item.createdAt ? formatDistanceToNow(new Date(item.createdAt), { addSuffix: true }) : 'Recently'}
                    </p>
                  </div>
                )}

                {category === 'testimonials' && (
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`text-sm ${i < (item.rating || 5) ? 'text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                      "{item.text || item.content || 'No content'}"
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {item.createdAt ? format(new Date(item.createdAt), 'MMM dd, yyyy') : 'Recently'}
                    </p>
                  </div>
                )}

                {category === 'bookings' && (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-white">
                        {item.roomType || 'Standard Room'}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        Guests: {item.guests || item.adults || 1}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <CalendarToday className="text-xs text-gray-400" />
                        <p className="text-xs text-gray-400">
                          {item.checkIn ? format(new Date(item.checkIn), 'MMM dd') : 'N/A'} - 
                          {item.checkOut ? format(new Date(item.checkOut), 'MMM dd') : 'N/A'}
                        </p>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs ${
                      new Date(item.checkOut || item.departureDate) < new Date() 
                        ? 'bg-gray-200 text-gray-600' 
                        : 'bg-green-200 text-green-700'
                    }`}>
                      {new Date(item.checkOut || item.departureDate) < new Date() ? 'Completed' : 'Upcoming'}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {items.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">No {title.toLowerCase()} found</p>
            </div>
          )}
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-10"
          animate={{
            scale: hoveredCard === title ? [1, 1.2, 1] : 1,
            rotate: hoveredCard === title ? [0, 45, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    );
  };

  // Modal Component
  const Modal = ({ isOpen, onClose, data, category }) => {
    if (!isOpen) return null;

    const getIcon = () => {
      switch (category) {
        case 'profile': return <Person className="text-blue-500" />;
        case 'messages': return <Message className="text-green-500" />;
        case 'testimonials': return <RateReview className="text-purple-500" />;
        case 'bookings': return <BookOnline className="text-orange-500" />;
        default: return <Person />;
      }
    };

    const getTitle = () => {
      switch (category) {
        case 'profile': return 'My Profile';
        case 'messages': return 'My Messages';
        case 'testimonials': return 'My Testimonials';
        case 'bookings': return 'My Bookings';
        default: return 'Details';
      }
    };

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                  {getIcon()}
                </div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  {getTitle()} <span className="text-sm font-normal text-gray-500">({data.length} items)</span>
                </h2>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Close className="text-gray-600 dark:text-gray-400" />
              </motion.button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
              <div className="grid grid-cols-1 gap-4">
                {data.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.01 }}
                    className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 hover:shadow-lg transition-all"
                  >
                    {category === 'profile' && item && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                            {item.fullname?.charAt(0) || item.name?.charAt(0) || 'U'}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                              {item.fullname || item.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">{item.email}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="font-medium">{item.phone || 'Not provided'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Location</p>
                            <p className="font-medium">{item.country || item.location || 'Not provided'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Member Since</p>
                            <p className="font-medium">
                              {item.createdAt ? format(new Date(item.createdAt), 'MMMM dd, yyyy') : 'Recently'}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Status</p>
                            <p className="font-medium capitalize">{item.status || 'Active'}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {category === 'messages' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-800 dark:text-white">
                            {item.subject || 'No Subject'}
                          </h4>
                          <span className="text-xs text-gray-400">
                            {item.createdAt ? format(new Date(item.createdAt), 'MMM dd, yyyy HH:mm') : 'Date N/A'}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-3 rounded">
                          {item.content || item.message || 'No content'}
                        </p>
                        {item.reply && (
                          <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Reply:</p>
                            <p className="text-gray-600 dark:text-gray-300">{item.reply}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {category === 'testimonials' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`text-sm ${i < (item.rating || 5) ? 'text-yellow-400' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="text-xs text-gray-400">
                            {item.createdAt ? format(new Date(item.createdAt), 'MMM dd, yyyy') : 'Recently'}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 italic bg-white dark:bg-gray-800 p-3 rounded">
                          "{item.text || item.content || 'No content'}"
                        </p>
                      </div>
                    )}

                    {category === 'bookings' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-800 dark:text-white">
                            {item.roomType || 'Standard Room'} - Room {item.roomNumber || 'N/A'}
                          </h4>
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            new Date(item.checkOut || item.departureDate) < new Date() 
                              ? 'bg-gray-200 text-gray-600' 
                              : 'bg-green-200 text-green-700'
                          }`}>
                            {new Date(item.checkOut || item.departureDate) < new Date() ? 'Completed' : 'Upcoming'}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          <div>
                            <p className="text-xs text-gray-500">Check In</p>
                            <p className="text-sm font-medium">
                              {item.checkIn ? format(new Date(item.checkIn), 'MMM dd, yyyy') : 'N/A'}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Check Out</p>
                            <p className="text-sm font-medium">
                              {item.checkOut ? format(new Date(item.checkOut), 'MMM dd, yyyy') : 'N/A'}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Guests</p>
                            <p className="text-sm font-medium">{item.guests || item.adults || 1}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Total</p>
                            <p className="text-sm font-medium">${item.totalPrice || item.amount || 'N/A'}</p>
                          </div>
                        </div>
                        {item.specialRequests && (
                          <div className="mt-2">
                            <p className="text-xs text-gray-500">Special Requests</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{item.specialRequests}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  // Welcome Message Component
  const WelcomeMessage = ({ name }) => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 mb-6 text-white"
    >
      <h1 className="text-2xl font-bold mb-2">
        Welcome back, {name}! 👋
      </h1>
      <p className="text-purple-100">
        Here's your personal dashboard overview. You can manage your bookings, messages, and testimonials here.
      </p>
    </motion.div>
  );

  // Loading Skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <div className="grid grid-cols-1 gap-6 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="h-64 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl"
            />
          ))}
        </div>
      </div>
    );
  }

  if (!userEmail) {
    return null; // Will redirect in useEffect
  }

  const userName = dashboardData.userProfile?.fullname || 
                  dashboardData.userProfile?.name || 
                  userEmail.split('@')[0];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 sm:p-6">
      {/* Welcome Message */}
      <WelcomeMessage name={userName} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6"
      >
        <div>
          <motion.h1
            className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white"
            animate={{
              textShadow: [
                "0 0 0 rgba(99,102,241,0)",
                "0 0 10px rgba(99,102,241,0.5)",
                "0 0 0 rgba(99,102,241,0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            My Dashboard
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
            Manage your activities and view your history
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Time Range Selector */}
          <motion.select
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="flex-1 sm:flex-none px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
            <option value="year">This Year</option>
            <option value="all">All Time</option>
          </motion.select>

          {/* Refresh Button */}
          <motion.button
            whileHover={{ scale: 1.05, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => fetchDashboardData(true)}
            disabled={refreshing}
            className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-50"
          >
            <Refresh
              className={`text-gray-600 dark:text-gray-400 ${refreshing ? "animate-spin" : ""}`}
            />
          </motion.button>
        </div>
      </motion.div>

      {/* Statistics Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6"
      >
        <StatCard
          title="Total Bookings"
          value={statistics.totalBookings}
          icon={BookOnline}
          color="from-orange-500 to-orange-600"
        />
        <StatCard
          title="Upcoming"
          value={statistics.upcomingBookings}
          icon={CalendarToday}
          color="from-green-500 to-green-600"
        />
        <StatCard
          title="Messages"
          value={statistics.totalMessages}
          icon={Message}
          color="from-blue-500 to-blue-600"
        />
        <StatCard
          title="Testimonials"
          value={statistics.totalTestimonials}
          icon={RateReview}
          color="from-purple-500 to-purple-600"
        />
      </motion.div>

      {/* Profile Card */}
      {dashboardData.userProfile && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <ProfileCard profile={dashboardData.userProfile} />
        </motion.div>
      )}

      {/* Data Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-6"
      >
        {/* Messages Card */}
        {dashboardData.userMessages.length > 0 && (
          <DataCard
            title="My Messages"
            icon={Message}
            color="from-blue-500 to-blue-600"
            data={dashboardData.userMessages}
            category="messages"
            count={statistics.totalMessages}
          />
        )}
        
        {/* Testimonials Card */}
        {dashboardData.userTestimonials.length > 0 && (
          <DataCard
            title="My Testimonials"
            icon={RateReview}
            color="from-purple-500 to-purple-600"
            data={dashboardData.userTestimonials}
            category="testimonials"
            count={statistics.totalTestimonials}
          />
        )}
        
        {/* Bookings Card */}
        {dashboardData.userBookings.length > 0 && (
          <DataCard
            title="My Bookings"
            icon={BookOnline}
            color="from-orange-500 to-orange-600"
            data={dashboardData.userBookings}
            category="bookings"
            count={statistics.totalBookings}
          />
        )}

        {/* Empty State */}
        {dashboardData.userMessages.length === 0 && 
         dashboardData.userTestimonials.length === 0 && 
         dashboardData.userBookings.length === 0 && (
          <motion.div
            variants={itemVariants}
            className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
          >
            <DashboardIcon className="text-6xl text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No Data Found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              You haven't created any bookings, messages, or testimonials yet.
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Modal for viewing all items */}
      <Modal
        isOpen={selectedModal !== null}
        onClose={handleCloseModal}
        data={modalData}
        category={selectedModal}
      />

      {/* Quick Actions Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate('/book-room')}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white text-2xl hover:shadow-xl transition-shadow"
      >
        <Hotel />
      </motion.button>
    </div>
  );
};

// Stat Card Component (updated for user dashboard)
const StatCard = ({ title, value, icon: Icon, color }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover="hover"
      whileTap="tap"
      variants={{
        hover: {
          scale: 1.02,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 17,
          },
        },
        tap: {
          scale: 0.98,
        },
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 cursor-pointer"
    >
      {/* Animated background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0`}
        animate={{
          opacity: hovered ? 0.1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2 sm:mb-4">
          <motion.div
            animate={{
              rotate: hovered ? [0, -10, 10, -10, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
            className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${color} bg-opacity-10`}
          >
            <Icon className="text-lg sm:text-2xl" style={{ color: color.split(' ')[1] }} />
          </motion.div>
        </div>

        <motion.h3
          className="text-xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-1"
          animate={{
            scale: hovered ? [1, 1.1, 1] : 1,
          }}
        >
          {value}
        </motion.h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{title}</p>
      </div>

      {/* Decorative circles */}
      <motion.div
        className="absolute -bottom-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-10"
        animate={{
          scale: hovered ? [1, 1.2, 1] : 1,
          rotate: hovered ? [0, 45, 0] : 0,
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};
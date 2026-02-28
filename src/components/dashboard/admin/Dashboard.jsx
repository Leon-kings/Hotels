// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import {
//   People,
//   Message,
//   RateReview,
//   BookOnline,
//   TrendingUp,
//   TrendingDown,
//   Refresh,
//   MoreVert,
// } from "@mui/icons-material";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import { formatDistanceToNow } from "date-fns";
// import { Line, Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from "chart.js";
// import { Layout } from "./components/sidebar/Sidebar";
// import { Toaster, toast } from "react-hot-toast";

// // Register ChartJS components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// );

// export const Dashboard = () => {
//   const [dashboardData, setDashboardData] = useState({
//     users: [],
//     messages: [],
//     testimonials: [],
//     bookings: [],
//   });
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [selectedTimeRange, setSelectedTimeRange] = useState("week");
//   const [hoveredCard, setHoveredCard] = useState(null);

//   // API endpoints
//   const API_ENDPOINTS = {
//     users: "https://hotel-nodejs-oa32.onrender.com/37829/7892",
//     messages: "https://hotel-nodejs-oa32.onrender.com/63729/892308",
//     testimonials: "https://hotel-nodejs-oa32.onrender.com/89492/9238",
//     bookings: "https://hotel-nodejs-oa32.onrender.com/84383/92823",
//   };

//   // Fetch dashboard data
//   const fetchDashboardData = async (showRefreshToast = false) => {
//     try {
//       if (showRefreshToast) {
//         setRefreshing(true);
//       }

//       const [usersRes, messagesRes, testimonialsRes, bookingsRes] =
//         await Promise.all([
//           axios.get(API_ENDPOINTS.users),
//           axios.get(API_ENDPOINTS.messages),
//           axios.get(API_ENDPOINTS.testimonials),
//           axios.get(API_ENDPOINTS.bookings),
//         ]);

//       setDashboardData({
//         users: usersRes.data.users || [],
//         messages: messagesRes.data.data || [],
//         testimonials: testimonialsRes.data.orders || [],
//         bookings: bookingsRes.data.data?.bookings || [],
//       });

//       if (showRefreshToast) {
//         toast.success("Dashboard updated successfully!");
//       }
//     } catch (error) {
//       console.error("Error fetching dashboard data:", error);
//       toast.error("Failed to fetch latest data");
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   useEffect(() => {
//     fetchDashboardData();

//     // Auto refresh every 30 seconds
//     const interval = setInterval(() => {
//       fetchDashboardData(false);
//     }, 30000);

//     return () => clearInterval(interval);
//   }, []);

//   // Calculate statistics
//   const statistics = {
//     totalUsers: dashboardData.users.length,
//     activeUsers: dashboardData.users.filter(
//       (u) => u.statistics?.totalLogins > 0,
//     ).length,
//     totalMessages: dashboardData.messages.length,
//     totalTestimonials: dashboardData.testimonials.length,
//     totalBookings: dashboardData.bookings.length,
//     recentLogins: dashboardData.users.filter((u) => {
//       const lastLogin = new Date(u.lastLogin || u.updatedAt);
//       const hoursDiff = (new Date() - lastLogin) / (1000 * 60 * 60);
//       return hoursDiff < 24;
//     }).length,
//   };

//   // Chart data for user activity
//   const userActivityData = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         label: "User Logins",
//         data: [12, 19, 15, 17, 14, 13, 18],
//         borderColor: "rgb(99, 102, 241)",
//         backgroundColor: "rgba(99, 102, 241, 0.1)",
//         tension: 0.4,
//         fill: true,
//       },
//     ],
//   };

//   // Chart options
//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         backgroundColor: "rgba(0,0,0,0.8)",
//         titleColor: "#fff",
//         bodyColor: "#fff",
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         grid: {
//           color: "rgba(0,0,0,0.05)",
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//     },
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//       },
//     },
//   };

//   const cardVariants = {
//     hover: {
//       scale: 1.02,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 17,
//       },
//     },
//     tap: {
//       scale: 0.98,
//     },
//   };

//   // Stat Card Component
//   const StatCard = ({ title, value, color, trend, trendValue, delay }) => (
//     <motion.div
//       variants={itemVariants}
//       custom={delay}
//       whileHover="hover"
//       whileTap="tap"

//       onHoverStart={() => setHoveredCard(title)}
//       onHoverEnd={() => setHoveredCard(null)}
//       className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 cursor-pointer"
//     >
//       {/* Animated background gradient */}
//       <motion.div
//         className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0`}
//         animate={{
//           opacity: hoveredCard === title ? 0.1 : 0,
//         }}
//         transition={{ duration: 0.3 }}
//       />

//       <div className="relative z-10">
//         <div className="flex items-center justify-between mb-4">
//           <motion.div
//             animate={{
//               rotate: hoveredCard === title ? [0, -10, 10, -10, 0] : 0,
//             }}
//             transition={{ duration: 0.5 }}
//             className={`p-3 rounded-xl bg-gradient-to-r ${color} bg-opacity-10`}
//           >
//             <Icon className="text-2xl text-white" />
//           </motion.div>
//           <motion.div
//             animate={{
//               scale: hoveredCard === title ? [1, 1.2, 1] : 1,
//             }}
//             className="flex items-center gap-1"
//           >
//             {trend === "up" ? (
//               <TrendingUp className="text-green-500" />
//             ) : (
//               <TrendingDown className="text-red-500" />
//             )}
//             <span
//               className={`text-sm ${trend === "up" ? "text-green-500" : "text-red-500"}`}
//             >
//               {trendValue}
//             </span>
//           </motion.div>
//         </div>

//         <motion.h3
//           className="text-3xl font-bold text-gray-800 dark:text-white mb-1"
//           animate={{
//             scale: hoveredCard === title ? [1, 1.1, 1] : 1,
//           }}
//         >
//           {value}
//         </motion.h3>
//         <p className="text-gray-600 dark:text-gray-400 text-sm">{title}</p>
//       </div>

//       {/* Decorative circles */}
//       <motion.div
//         className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-10"
//         animate={{
//           scale: hoveredCard === title ? [1, 1.2, 1] : 1,
//           rotate: hoveredCard === title ? [0, 45, 0] : 0,
//         }}
//         transition={{ duration: 0.5 }}
//       />
//     </motion.div>
//   );

//   // Activity Card Component
//   const ActivityCard = ({ activity, type, index }) => {
//     const getActivityIcon = () => {
//       switch (type) {
//         case "user":
//           return <People className="text-blue-500" />;
//         case "message":
//           return <Message className="text-green-500" />;
//         case "testimonial":
//           return <RateReview className="text-purple-500" />;
//         case "booking":
//           return <BookOnline className="text-orange-500" />;
//         default:
//           return <People />;
//       }
//     };

//     const getActivityTitle = () => {
//       switch (type) {
//         case "user":
//           return activity.fullname || "New User";
//         case "message":
//           return "New Message";
//         case "testimonial":
//           return "New Testimonial";
//         case "booking":
//           return "New Booking";
//         default:
//           return "Activity";
//       }
//     };

//     const getActivityDescription = () => {
//       switch (type) {
//         case "user":
//           return activity.email || "User registered";
//         case "message":
//           return activity.content || "New message received";
//         case "testimonial":
//           return activity.text || "New testimonial added";
//         case "booking":
//           return `Booking for ${activity.roomType || "room"}`;
//         default:
//           return "Recent activity";
//       }
//     };

//     const getActivityTime = () => {
//       const date = activity.createdAt || activity.updatedAt || new Date();
//       return formatDistanceToNow(new Date(date), { addSuffix: true });
//     };

//     return (
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: index * 0.1 }}
//         whileHover={{ scale: 1.02, x: 5 }}
//         className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer group"
//       >
//         <motion.div
//           whileHover={{ rotate: 360 }}
//           transition={{ duration: 0.5 }}
//           className="p-2 bg-white dark:bg-gray-600 rounded-lg shadow-md"
//         >
//           {getActivityIcon()}
//         </motion.div>

//         <div className="flex-1">
//           <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//             {getActivityTitle()}
//           </h4>
//           <p className="text-sm text-gray-600 dark:text-gray-400">
//             {getActivityDescription()}
//           </p>
//           <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
//             {getActivityTime()}
//           </p>
//         </div>

//         <motion.div
//           animate={{ x: hoveredCard === `activity-${index}` ? 5 : 0 }}
//           className="text-gray-400"
//         >
//           <MoreVert className="opacity-0 group-hover:opacity-100 transition-opacity" />
//         </motion.div>
//       </motion.div>
//     );
//   };

//   // Loading Skeleton
//   if (loading) {
//     return (
//       <Layout>
//         <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//             {[1, 2, 3, 4].map((i) => (
//               <motion.div
//                 key={i}
//                 animate={{
//                   opacity: [0.5, 1, 0.5],
//                   scale: [1, 1.02, 1],
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   delay: i * 0.1,
//                 }}
//                 className="h-32 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl"
//               />
//             ))}
//           </div>
//         </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       <Toaster position="top-right" />

//       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 lg:p-6">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6"
//         >
//           <div>
//             <motion.h1
//               className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white"
//               animate={{
//                 textShadow: [
//                   "0 0 0 rgba(99,102,241,0)",
//                   "0 0 10px rgba(99,102,241,0.5)",
//                   "0 0 0 rgba(99,102,241,0)",
//                 ],
//               }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               Dashboard Overview
//             </motion.h1>
//             <p className="text-gray-600 dark:text-gray-400 mt-1">
//               Welcome back! Here's what's happening with your hotel.
//             </p>
//           </div>

//           <div className="flex items-center gap-3">
//             {/* Time Range Selector */}
//             <motion.select
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               value={selectedTimeRange}
//               onChange={(e) => setSelectedTimeRange(e.target.value)}
//               className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="day">Today</option>
//               <option value="week">This Week</option>
//               <option value="month">This Month</option>
//               <option value="year">This Year</option>
//             </motion.select>

//             {/* Refresh Button */}
//             <motion.button
//               whileHover={{ scale: 1.05, rotate: 180 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => fetchDashboardData(true)}
//               disabled={refreshing}
//               className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-50"
//             >
//               <Refresh
//                 className={`text-gray-600 dark:text-gray-400 ${refreshing ? "animate-spin" : ""}`}
//               />
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Statistics Cards */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
//         >
//           <StatCard
//             title="Total Users"
//             value={statistics.totalUsers}
//             icon={People}
//             color="from-blue-500 to-blue-600"
//             trend="up"
//             trendValue="+12%"
//           />
//           <StatCard
//             title="Active Today"
//             value={statistics.recentLogins}
//             icon={People}
//             color="from-green-500 to-green-600"
//             trend="up"
//             trendValue="+5%"
//           />
//           <StatCard
//             title="Messages"
//             value={statistics.totalMessages}
//             icon={Message}
//             color="from-purple-500 to-purple-600"
//             trend="down"
//             trendValue="-3%"
//           />
//           <StatCard
//             title="Bookings"
//             value={statistics.totalBookings}
//             icon={BookOnline}
//             color="from-orange-500 to-orange-600"
//             trend="up"
//             trendValue="+8%"
//           />
//         </motion.div>

//         {/* Charts Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6"
//         >
//           {/* User Activity Chart */}
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
//           >
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
//               User Activity Overview
//             </h3>
//             <div className="h-64">
//               <Line data={userActivityData} options={chartOptions} />
//             </div>
//           </motion.div>

//           {/* Quick Stats */}
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
//           >
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
//               Quick Stats
//             </h3>
//             <div className="space-y-4">
//               {[
//                 {
//                   label: "Total Users",
//                   value: statistics.totalUsers,
//                   color: "bg-blue-500",
//                   percentage: 65,
//                 },
//                 {
//                   label: "Messages",
//                   value: statistics.totalMessages,
//                   color: "bg-green-500",
//                   percentage: 30,
//                 },
//                 {
//                   label: "Testimonials",
//                   value: statistics.totalTestimonials,
//                   color: "bg-purple-500",
//                   percentage: 15,
//                 },
//                 {
//                   label: "Bookings",
//                   value: statistics.totalBookings,
//                   color: "bg-orange-500",
//                   percentage: 45,
//                 },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ width: 0 }}
//                   animate={{ width: "100%" }}
//                   transition={{ delay: 0.5 + index * 0.1 }}
//                 >
//                   <div className="flex justify-between text-sm mb-1">
//                     <span className="text-gray-600 dark:text-gray-400">
//                       {stat.label}
//                     </span>
//                     <span className="font-semibold text-gray-800 dark:text-white">
//                       {stat.value}
//                     </span>
//                   </div>
//                   <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{ width: `${stat.percentage}%` }}
//                       transition={{ delay: 0.6 + index * 0.1, duration: 1 }}
//                       className={`${stat.color} h-2 rounded-full`}
//                     />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Recent Activity Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
//         >
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
//               Recent Activity
//             </h3>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
//             >
//               View All
//             </motion.button>
//           </div>

//           <div className="space-y-3">
//             {/* Combine and sort all activities by date */}
//             {[
//               ...dashboardData.users
//                 .slice(0, 2)
//                 .map((u) => ({ ...u, activityType: "user" })),
//               ...dashboardData.messages
//                 .slice(0, 2)
//                 .map((m) => ({ ...m, activityType: "message" })),
//               ...dashboardData.testimonials
//                 .slice(0, 2)
//                 .map((t) => ({ ...t, activityType: "testimonial" })),
//               ...dashboardData.bookings
//                 .slice(0, 2)
//                 .map((b) => ({ ...b, activityType: "booking" })),
//             ]
//               .sort(
//                 (a, b) =>
//                   new Date(b.createdAt || b.updatedAt) -
//                   new Date(a.createdAt || a.updatedAt),
//               )
//               .slice(0, 5)
//               .map((activity, index) => (
//                 <ActivityCard
//                   key={index}
//                   activity={activity}
//                   type={activity.activityType}
//                   index={index}
//                 />
//               ))}

//             {dashboardData.users.length === 0 &&
//               dashboardData.messages.length === 0 &&
//               dashboardData.testimonials.length === 0 &&
//               dashboardData.bookings.length === 0 && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-center py-8"
//                 >
//                   <p className="text-gray-500 dark:text-gray-400">
//                     No recent activities
//                   </p>
//                 </motion.div>
//               )}
//           </div>
//         </motion.div>

//         {/* Floating Action Button for quick actions */}
//         <motion.button
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white text-2xl"
//         >
//           +
//         </motion.button>
//       </div>
//     </Layout>
//   );
// };
























// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import {
//   People,
//   Message,
//   RateReview,
//   BookOnline,
//   TrendingUp,
//   TrendingDown,
//   Refresh,
//   MoreVert,
// } from "@mui/icons-material";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import { formatDistanceToNow } from "date-fns";
// import { Line, Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from "chart.js";
// import { Layout } from "./components/sidebar/Sidebar";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Register ChartJS components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// );

// export const Dashboard = () => {
//   const [dashboardData, setDashboardData] = useState({
//     users: [],
//     messages: [],
//     testimonials: [],
//     bookings: [],
//   });
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [selectedTimeRange, setSelectedTimeRange] = useState("week");
//   const [hoveredCard, setHoveredCard] = useState(null);

//   // API endpoints
//   const API_ENDPOINTS = {
//     users: "https://hotel-nodejs-oa32.onrender.com/37829/7892",
//     messages: "https://hotel-nodejs-oa32.onrender.com/63729/892308",
//     testimonials: "https://hotel-nodejs-oa32.onrender.com/89492/9238",
//     bookings: "https://hotel-nodejs-oa32.onrender.com/84383/92823",
//   };

//   // Fetch dashboard data
//   const fetchDashboardData = async (showRefreshToast = false) => {
//     try {
//       if (showRefreshToast) {
//         setRefreshing(true);
//       }

//       const [usersRes, messagesRes, testimonialsRes, bookingsRes] =
//         await Promise.all([
//           axios.get(API_ENDPOINTS.users),
//           axios.get(API_ENDPOINTS.messages),
//           axios.get(API_ENDPOINTS.testimonials),
//           axios.get(API_ENDPOINTS.bookings),
//         ]);

//       setDashboardData({
//         users: usersRes.data.users || [],
//         messages: messagesRes.data.data || [],
//         testimonials: testimonialsRes.data.orders || [],
//         bookings: bookingsRes.data.data?.bookings || [],
//       });

//       if (showRefreshToast) {
//         toast.success("Dashboard updated successfully!", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           theme: "colored",
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching dashboard data:", error);
//       toast.error("Failed to fetch latest data", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: "colored",
//       });
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   useEffect(() => {
//     fetchDashboardData();

//     // Auto refresh every 30 seconds
//     const interval = setInterval(() => {
//       fetchDashboardData(false);
//     }, 30000);

//     return () => clearInterval(interval);
//   }, []);

//   // Calculate statistics
//   const statistics = {
//     totalUsers: dashboardData.users.length,
//     activeUsers: dashboardData.users.filter(
//       (u) => u.statistics?.totalLogins > 0,
//     ).length,
//     totalMessages: dashboardData.messages.length,
//     totalTestimonials: dashboardData.testimonials.length,
//     totalBookings: dashboardData.bookings.length,
//     recentLogins: dashboardData.users.filter((u) => {
//       const lastLogin = new Date(u.lastLogin || u.updatedAt);
//       const hoursDiff = (new Date() - lastLogin) / (1000 * 60 * 60);
//       return hoursDiff < 24;
//     }).length,
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//       },
//     },
//   };

//   const cardVariants = {
//     hover: {
//       scale: 1.02,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 17,
//       },
//     },
//     tap: {
//       scale: 0.98,
//     },
//   };

//   // Stat Card Component
//   const StatCard = ({ title, value, color, trend, trendValue, delay }) => (
//     <motion.div
//       variants={itemVariants}
//       custom={delay}
//       whileHover="hover"
//       whileTap="tap"
//       variants={cardVariants}
//       onHoverStart={() => setHoveredCard(title)}
//       onHoverEnd={() => setHoveredCard(null)}
//       className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 cursor-pointer"
//     >
//       {/* Animated background gradient */}
//       <motion.div
//         className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0`}
//         animate={{
//           opacity: hoveredCard === title ? 0.1 : 0,
//         }}
//         transition={{ duration: 0.3 }}
//       />

//       <div className="relative z-10">
//         <div className="flex items-center justify-between mb-4">
//           <motion.div
//             animate={{
//               rotate: hoveredCard === title ? [0, -10, 10, -10, 0] : 0,
//             }}
//             transition={{ duration: 0.5 }}
//             className={`p-3 rounded-xl bg-gradient-to-r ${color} bg-opacity-10`}
//           >
//             {/* Icon would go here - you'll need to pass the icon as a prop */}
//           </motion.div>
//           <motion.div
//             animate={{
//               scale: hoveredCard === title ? [1, 1.2, 1] : 1,
//             }}
//             className="flex items-center gap-1"
//           >
//             {trend === "up" ? (
//               <TrendingUp className="text-green-500" />
//             ) : (
//               <TrendingDown className="text-red-500" />
//             )}
//             <span
//               className={`text-sm ${trend === "up" ? "text-green-500" : "text-red-500"}`}
//             >
//               {trendValue}
//             </span>
//           </motion.div>
//         </div>

//         <motion.h3
//           className="text-3xl font-bold text-gray-800 dark:text-white mb-1"
//           animate={{
//             scale: hoveredCard === title ? [1, 1.1, 1] : 1,
//           }}
//         >
//           {value}
//         </motion.h3>
//         <p className="text-gray-600 dark:text-gray-400 text-sm">{title}</p>
//       </div>

//       {/* Decorative circles */}
//       <motion.div
//         className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-10"
//         animate={{
//           scale: hoveredCard === title ? [1, 1.2, 1] : 1,
//           rotate: hoveredCard === title ? [0, 45, 0] : 0,
//         }}
//         transition={{ duration: 0.5 }}
//       />
//     </motion.div>
//   );

//   // Activity Card Component
//   const ActivityCard = ({ activity, type, index }) => {
//     const getActivityIcon = () => {
//       switch (type) {
//         case "user":
//           return <People className="text-blue-500" />;
//         case "message":
//           return <Message className="text-green-500" />;
//         case "testimonial":
//           return <RateReview className="text-purple-500" />;
//         case "booking":
//           return <BookOnline className="text-orange-500" />;
//         default:
//           return <People />;
//       }
//     };

//     const getActivityTitle = () => {
//       switch (type) {
//         case "user":
//           return activity.fullname || "New User";
//         case "message":
//           return "New Message";
//         case "testimonial":
//           return "New Testimonial";
//         case "booking":
//           return "New Booking";
//         default:
//           return "Activity";
//       }
//     };

//     const getActivityDescription = () => {
//       switch (type) {
//         case "user":
//           return activity.email || "User registered";
//         case "message":
//           return activity.content || "New message received";
//         case "testimonial":
//           return activity.text || "New testimonial added";
//         case "booking":
//           return `Booking for ${activity.roomType || "room"}`;
//         default:
//           return "Recent activity";
//       }
//     };

//     const getActivityTime = () => {
//       const date = activity.createdAt || activity.updatedAt || new Date();
//       return formatDistanceToNow(new Date(date), { addSuffix: true });
//     };

//     return (
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: index * 0.1 }}
//         whileHover={{ scale: 1.02, x: 5 }}
//         className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer group"
//       >
//         <motion.div
//           whileHover={{ rotate: 360 }}
//           transition={{ duration: 0.5 }}
//           className="p-2 bg-white dark:bg-gray-600 rounded-lg shadow-md"
//         >
//           {getActivityIcon()}
//         </motion.div>

//         <div className="flex-1">
//           <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//             {getActivityTitle()}
//           </h4>
//           <p className="text-sm text-gray-600 dark:text-gray-400">
//             {getActivityDescription()}
//           </p>
//           <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
//             {getActivityTime()}
//           </p>
//         </div>

//         <motion.div
//           animate={{ x: hoveredCard === `activity-${index}` ? 5 : 0 }}
//           className="text-gray-400"
//         >
//           <MoreVert className="opacity-0 group-hover:opacity-100 transition-opacity" />
//         </motion.div>
//       </motion.div>
//     );
//   };

//   // Get latest 6 activities
//   const getLatestActivities = () => {
//     const allActivities = [
//       ...dashboardData.users
//         .slice(0, 2)
//         .map((u) => ({ ...u, activityType: "user" })),
//       ...dashboardData.messages
//         .slice(0, 2)
//         .map((m) => ({ ...m, activityType: "message" })),
//       ...dashboardData.testimonials
//         .slice(0, 2)
//         .map((t) => ({ ...t, activityType: "testimonial" })),
//       ...dashboardData.bookings
//         .slice(0, 2)
//         .map((b) => ({ ...b, activityType: "booking" })),
//     ]
//       .sort(
//         (a, b) =>
//           new Date(b.createdAt || b.updatedAt) -
//           new Date(a.createdAt || a.updatedAt),
//       )
//       .slice(0, 6); // Show only latest 6 activities

//     return allActivities;
//   };

//   // Loading Skeleton
//   if (loading) {
//     return (
//       <Layout>
//         <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//             {[1, 2, 3, 4].map((i) => (
//               <motion.div
//                 key={i}
//                 animate={{
//                   opacity: [0.5, 1, 0.5],
//                   scale: [1, 1.02, 1],
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   delay: i * 0.1,
//                 }}
//                 className="h-32 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl"
//               />
//             ))}
//           </div>
//         </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />

//       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 lg:p-6">
//         <Layout/>
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6"
//         >
//           <div>
//             <motion.h1
//               className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white"
//               animate={{
//                 textShadow: [
//                   "0 0 0 rgba(99,102,241,0)",
//                   "0 0 10px rgba(99,102,241,0.5)",
//                   "0 0 0 rgba(99,102,241,0)",
//                 ],
//               }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               Dashboard Overview
//             </motion.h1>
//             <p className="text-gray-600 dark:text-gray-400 mt-1">
//               Welcome back! Here's what's happening with your hotel.
//             </p>
//           </div>

//           <div className="flex items-center gap-3">
//             {/* Time Range Selector */}
//             <motion.select
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               value={selectedTimeRange}
//               onChange={(e) => setSelectedTimeRange(e.target.value)}
//               className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="day">Today</option>
//               <option value="week">This Week</option>
//               <option value="month">This Month</option>
//               <option value="year">This Year</option>
//             </motion.select>

//             {/* Refresh Button */}
//             <motion.button
//               whileHover={{ scale: 1.05, rotate: 180 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => fetchDashboardData(true)}
//               disabled={refreshing}
//               className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-50"
//             >
//               <Refresh
//                 className={`text-gray-600 dark:text-gray-400 ${refreshing ? "animate-spin" : ""}`}
//               />
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Statistics Cards */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
//         >
//           <StatCard
//             title="Total Users"
//             value={statistics.totalUsers}
//             color="from-blue-500 to-blue-600"
//             trend="up"
//             trendValue="+12%"
//           />
//           <StatCard
//             title="Active Today"
//             value={statistics.recentLogins}
//             color="from-green-500 to-green-600"
//             trend="up"
//             trendValue="+5%"
//           />
//           <StatCard
//             title="Messages"
//             value={statistics.totalMessages}
//             color="from-purple-500 to-purple-600"
//             trend="down"
//             trendValue="-3%"
//           />
//           <StatCard
//             title="Bookings"
//             value={statistics.totalBookings}
//             color="from-orange-500 to-orange-600"
//             trend="up"
//             trendValue="+8%"
//           />
//         </motion.div>

//         {/* Charts Section - Removed graphs */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="mb-6"
//         >
//           {/* Quick Stats - Keeping this as it's not a graph */}
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
//           >
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
//               Quick Stats
//             </h3>
//             <div className="space-y-4">
//               {[
//                 {
//                   label: "Total Users",
//                   value: statistics.totalUsers,
//                   color: "bg-blue-500",
//                   percentage: 65,
//                 },
//                 {
//                   label: "Messages",
//                   value: statistics.totalMessages,
//                   color: "bg-green-500",
//                   percentage: 30,
//                 },
//                 {
//                   label: "Testimonials",
//                   value: statistics.totalTestimonials,
//                   color: "bg-purple-500",
//                   percentage: 15,
//                 },
//                 {
//                   label: "Bookings",
//                   value: statistics.totalBookings,
//                   color: "bg-orange-500",
//                   percentage: 45,
//                 },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ width: 0 }}
//                   animate={{ width: "100%" }}
//                   transition={{ delay: 0.5 + index * 0.1 }}
//                 >
//                   <div className="flex justify-between text-sm mb-1">
//                     <span className="text-gray-600 dark:text-gray-400">
//                       {stat.label}
//                     </span>
//                     <span className="font-semibold text-gray-800 dark:text-white">
//                       {stat.value}
//                     </span>
//                   </div>
//                   <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{ width: `${stat.percentage}%` }}
//                       transition={{ delay: 0.6 + index * 0.1, duration: 1 }}
//                       className={`${stat.color} h-2 rounded-full`}
//                     />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Recent Activity Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
//         >
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
//               Recent Activity (Latest 6)
//             </h3>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
//             >
//               View All
//             </motion.button>
//           </div>

//           <div className="space-y-3">
//             {getLatestActivities().map((activity, index) => (
//               <ActivityCard
//                 key={index}
//                 activity={activity}
//                 type={activity.activityType}
//                 index={index}
//               />
//             ))}

//             {getLatestActivities().length === 0 && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-center py-8"
//               >
//                 <p className="text-gray-500 dark:text-gray-400">
//                   No recent activities
//                 </p>
//               </motion.div>
//             )}
//           </div>
//         </motion.div>

//         {/* Floating Action Button for quick actions */}
//         <motion.button
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white text-2xl"
//         >
//           +
//         </motion.button>
//       </div>
//     </Layout>
//   );
// };













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
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { formatDistanceToNow, format } from "date-fns";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

export const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    users: [],
    messages: [],
    testimonials: [],
    bookings: [],
  });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState("week");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedModal, setSelectedModal] = useState(null);
  const [modalData, setModalData] = useState([]);

  // API endpoints
  const API_ENDPOINTS = {
    users: "https://hotel-nodejs-oa32.onrender.com/37829/7892",
    messages: "https://hotel-nodejs-oa32.onrender.com/63729/892308",
    testimonials: "https://hotel-nodejs-oa32.onrender.com/89492/9238",
    bookings: "https://hotel-nodejs-oa32.onrender.com/84383/92823",
  };

  // Fetch dashboard data
  const fetchDashboardData = async (showRefreshToast = false) => {
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

      setDashboardData({
        users: usersRes.data.users || [],
        messages: messagesRes.data.data || [],
        testimonials: testimonialsRes.data.orders || [],
        bookings: bookingsRes.data.data?.bookings || [],
      });

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
    fetchDashboardData();

    // Auto refresh every 30 seconds
    const interval = setInterval(() => {
      fetchDashboardData(false);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Get last 6 items from each category
  const getLastSixItems = (category) => {
    const items = dashboardData[category] || [];
    return items.slice(-6).reverse(); // Last 6, most recent first
  };

  // Handle view all click
  const handleViewAll = (category) => {
    setModalData(getLastSixItems(category));
    setSelectedModal(category);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedModal(null);
    setModalData([]);
  };

  // Calculate statistics
  const statistics = {
    totalUsers: dashboardData.users.length,
    activeUsers: dashboardData.users.filter(
      (u) => u.statistics?.totalLogins > 0,
    ).length,
    totalMessages: dashboardData.messages.length,
    totalTestimonials: dashboardData.testimonials.length,
    totalBookings: dashboardData.bookings.length,
    recentLogins: dashboardData.users.filter((u) => {
      const lastLogin = new Date(u.lastLogin || u.updatedAt);
      const hoursDiff = (new Date() - lastLogin) / (1000 * 60 * 60);
      return hoursDiff < 24;
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

  // Data Card Component
  const DataCard = ({ title, icon: Icon, color, data, category, count }) => {
    const lastSix = data.slice(0, 6);

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
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleViewAll(category)}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              View All
            </motion.button>
          </div>

          {/* Last 6 Items Grid - Responsive */}
          <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-3">
            {lastSix.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 cursor-pointer hover:shadow-md transition-all"
              >
                {category === 'users' && (
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {item.fullname?.charAt(0) || 'U'}
                    </div>
                    <p className="text-sm font-medium text-gray-800 dark:text-white truncate">
                      {item.fullname || 'N/A'}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {item.email || 'No email'}
                    </p>
                  </div>
                )}

                {category === 'messages' && (
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-white truncate">
                      {item.name || 'Anonymous'}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                      {item.content || item.message || 'No content'}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {item.createdAt ? formatDistanceToNow(new Date(item.createdAt), { addSuffix: true }) : 'Recently'}
                    </p>
                  </div>
                )}

                {category === 'testimonials' && (
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`text-xs ${i < (item.rating || 5) ? 'text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                      {item.text || item.content || 'No content'}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {item.author || item.name || 'Anonymous'}
                    </p>
                  </div>
                )}

                {category === 'bookings' && (
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-white truncate">
                      {item.guestName || item.name || 'Guest'}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {item.roomType || 'Standard Room'}
                    </p>
                    <p className="text-xs text-gray-400">
                      {item.checkIn ? format(new Date(item.checkIn), 'MMM dd') : 'Soon'}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {lastSix.length === 0 && (
            <div className="text-center py-4">
              <p className="text-gray-500 dark:text-gray-400">No data available</p>
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
        case 'users': return <People className="text-blue-500" />;
        case 'messages': return <Message className="text-green-500" />;
        case 'testimonials': return <RateReview className="text-purple-500" />;
        case 'bookings': return <BookOnline className="text-orange-500" />;
        default: return <People />;
      }
    };

    const getTitle = () => {
      switch (category) {
        case 'users': return 'All Users';
        case 'messages': return 'All Messages';
        case 'testimonials': return 'All Testimonials';
        case 'bookings': return 'All Bookings';
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 hover:shadow-lg transition-all"
                  >
                    {category === 'users' && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {item.fullname?.charAt(0) || 'U'}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 dark:text-white">
                              {item.fullname || 'N/A'}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              @{item.username || 'username'}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-1 text-sm">
                          <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <Email className="text-xs" /> {item.email || 'No email'}
                          </p>
                          <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <Phone className="text-xs" /> {item.phone || 'No phone'}
                          </p>
                          <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <LocationOn className="text-xs" /> {item.country || 'N/A'}
                          </p>
                          <p className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs">
                            <AccessTime className="text-xs" /> 
                            Joined {item.createdAt ? formatDistanceToNow(new Date(item.createdAt), { addSuffix: true }) : 'Recently'}
                          </p>
                        </div>
                      </div>
                    )}

                    {category === 'messages' && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                            <Message className="text-green-600 text-sm" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 dark:text-white">
                              {item.name || 'Anonymous'}
                            </h3>
                            <p className="text-xs text-gray-500">{item.email || 'No email'}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-2 rounded">
                          {item.content || item.message || 'No content'}
                        </p>
                        <p className="text-xs text-gray-400">
                          {item.createdAt ? format(new Date(item.createdAt), 'MMM dd, yyyy HH:mm') : 'Date not available'}
                        </p>
                      </div>
                    )}

                    {category === 'testimonials' && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                            <RateReview className="text-purple-600 text-sm" />
                          </div>
                          <h3 className="font-semibold text-gray-800 dark:text-white">
                            {item.author || item.name || 'Anonymous'}
                          </h3>
                        </div>
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
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                            <Person className="text-orange-600 text-sm" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 dark:text-white">
                              {item.guestName || item.name || 'Guest'}
                            </h3>
                            <p className="text-xs text-gray-500">{item.email || 'No email'}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <p className="text-xs text-gray-500">Room</p>
                            <p className="font-medium text-gray-700 dark:text-gray-300">{item.roomType || 'Standard'}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Guests</p>
                            <p className="font-medium text-gray-700 dark:text-gray-300">{item.guests || item.adults || 1}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Check In</p>
                            <p className="font-medium text-gray-700 dark:text-gray-300">
                              {item.checkIn ? format(new Date(item.checkIn), 'MMM dd') : 'N/A'}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Check Out</p>
                            <p className="font-medium text-gray-700 dark:text-gray-300">
                              {item.checkOut ? format(new Date(item.checkOut), 'MMM dd') : 'N/A'}
                            </p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                          Booked {item.createdAt ? formatDistanceToNow(new Date(item.createdAt), { addSuffix: true }) : 'Recently'}
                        </p>
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

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 sm:p-6">
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
            Dashboard Overview
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
            Welcome back! Here's the latest 6 items from each category.
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
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
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
          title="Total Users"
          value={statistics.totalUsers}
          icon={People}
          color="from-blue-500 to-blue-600"
          trend="up"
          trendValue="+12%"
        />
        <StatCard
          title="Active Today"
          value={statistics.recentLogins}
          icon={People}
          color="from-green-500 to-green-600"
          trend="up"
          trendValue="+5%"
        />
        <StatCard
          title="Messages"
          value={statistics.totalMessages}
          icon={Message}
          color="from-purple-500 to-purple-600"
          trend="down"
          trendValue="-3%"
        />
        <StatCard
          title="Bookings"
          value={statistics.totalBookings}
          icon={BookOnline}
          color="from-orange-500 to-orange-600"
          trend="up"
          trendValue="+8%"
        />
      </motion.div>

      {/* Data Cards Grid - Showing last 6 items from each category */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-6"
      >
        <DataCard
          title="Users"
          icon={People}
          color="from-blue-500 to-blue-600"
          data={getLastSixItems('users')}
          category="users"
          count={statistics.totalUsers}
        />
        
        <DataCard
          title="Messages"
          icon={Message}
          color="from-green-500 to-green-600"
          data={getLastSixItems('messages')}
          category="messages"
          count={statistics.totalMessages}
        />
        
        <DataCard
          title="Testimonials"
          icon={RateReview}
          color="from-purple-500 to-purple-600"
          data={getLastSixItems('testimonials')}
          category="testimonials"
          count={statistics.totalTestimonials}
        />
        
        <DataCard
          title="Bookings"
          icon={BookOnline}
          color="from-orange-500 to-orange-600"
          data={getLastSixItems('bookings')}
          category="bookings"
          count={statistics.totalBookings}
        />
      </motion.div>

      {/* Modal for viewing all items */}
      <Modal
        isOpen={selectedModal !== null}
        onClose={handleCloseModal}
        data={modalData}
        category={selectedModal}
      />

      {/* Floating Action Button for quick actions */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white text-2xl hover:shadow-xl transition-shadow"
      >
        +
      </motion.button>
    </div>
  );
};

// Stat Card Component (updated to include icon)
const StatCard = ({ title, value, icon: Icon, color, trend, trendValue }) => {
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
          <motion.div
            animate={{
              scale: hovered ? [1, 1.2, 1] : 1,
            }}
            className="flex items-center gap-1"
          >
            {trend === "up" ? (
              <TrendingUp className="text-green-500 text-sm sm:text-base" />
            ) : (
              <TrendingDown className="text-red-500 text-sm sm:text-base" />
            )}
            <span
              className={`text-xs sm:text-sm ${trend === "up" ? "text-green-500" : "text-red-500"}`}
            >
              {trendValue}
            </span>
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


// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import {
//   People,
//   Settings,
//   PieChart,
//   CalendarToday,
//   ExpandMore,
//   ChevronRight,
//   Menu,
//   Close,
//   Dashboard as DashboardIcon,
//   ShoppingCart,
//   Message,
//   Logout,
//   Notifications,
//   Search,
//   DarkMode,
//   LightMode,
// } from "@mui/icons-material";
// import { Button, IconButton, Badge, Avatar, Tooltip } from "@mui/material";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export const Layout = ({ children }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [openSubMenu, setOpenSubMenu] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [showLogoutModal, setShowLogoutModal] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);
//   const [userData, setUserData] = useState({
//     email: "",
//     name: "",
//     status: "",
//     avatar: "",
//     lastLogin: null,
//     id: "",
//     phone: "",
//     country: "",
//   });
//   const [isLoadingUser, setIsLoadingUser] = useState(true);
//   const [dashboardStats, setDashboardStats] = useState({
//     totalUsers: 0,
//     totalBookings: 0,
//     totalMessages: 0,
//     totalTestimonials: 0,
//   });

//   const location = useLocation();
//   const navigate = useNavigate();

//   // Fetch user data from cookies and API
//   useEffect(() => {
//     const fetchUserData = async () => {
//       setIsLoadingUser(true);

//       // Get auth token from cookies
//       const authToken = Cookies.get("authToken");

//       if (!authToken) {
//         setIsLoadingUser(false);
//         return;
//       }

//       try {
//         // Get user email from cookies
//         const userEmail = Cookies.get("userEmail");

//         if (userEmail) {
//           // Fetch all users to find the current user
//           const response = await axios.get(
//             "https://hotel-nodejs-oa32.onrender.com/37829/7892",
//             {
//               headers: {
//                 Authorization: `Bearer ${authToken}`,
//               },
//             },
//           );

//           const users = response.data.users || [];
//           const currentUser = users.find((u) => u.email === userEmail);

//           if (currentUser) {
//             // Set user data from API
//             const userFullData = {
//               email: currentUser.email || userEmail,
//               name:
//                 currentUser.fullname ||
//                 currentUser.username ||
//                 currentUser.email?.split("@")[0] ||
//                 "User",
//               status: currentUser.status || "user",
//               avatar:
//                 currentUser.avatar ||
//                 `https://ui-avatars.com/api/?name=${currentUser.fullname || currentUser.email}&background=4f46e5&color=fff`,
//               lastLogin:
//                 currentUser.lastLogin ||
//                 currentUser.updatedAt ||
//                 new Date().toISOString(),
//               id: currentUser._id || currentUser.id || "",
//               phone: currentUser.phone || "",
//               country: currentUser.country || "",
//             };

//             setUserData(userFullData);

//             // Update cookies with real data
//             Cookies.set("userName", userFullData.name, { expires: 7 });
//             Cookies.set("userstatus", userFullData.status, { expires: 7 });
//             Cookies.set("userId", userFullData.id, { expires: 7 });
//             if (userFullData.phone)
//               Cookies.set("userPhone", userFullData.phone, { expires: 7 });
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         toast.error("Failed to load user data", {
//           position: "top-right",
//           autoClose: 3000,
//           theme: isDarkMode ? "dark" : "light",
//         });
//       } finally {
//         setIsLoadingUser(false);
//       }
//     };

//     fetchUserData();
//   }, [isDarkMode]);

//   // Fetch dashboard statistics
//   useEffect(() => {
//     const fetchDashboardStats = async () => {
//       const authToken = Cookies.get("authToken");

//       if (!authToken) return;

//       try {
//         // Fetch all data in parallel
//         const [usersRes, bookingsRes, messagesRes, testimonialsRes] =
//           await Promise.all([
//             axios.get("https://hotel-nodejs-oa32.onrender.com/37829/7892", {
//               headers: { Authorization: `Bearer ${authToken}` },
//             }),
//             axios.get("https://hotel-nodejs-oa32.onrender.com/84383/92823", {
//               headers: { Authorization: `Bearer ${authToken}` },
//             }),
//             axios.get("https://hotel-nodejs-oa32.onrender.com/63729/892308", {
//               headers: { Authorization: `Bearer ${authToken}` },
//             }),
//             axios.get("https://hotel-nodejs-oa32.onrender.com/89492/9238", {
//               headers: { Authorization: `Bearer ${authToken}` },
//             }),
//           ]);

//         setDashboardStats({
//           totalUsers: usersRes.data.users?.length || 0,
//           totalBookings: bookingsRes.data.data?.bookings?.length || 0,
//           totalMessages: messagesRes.data.data?.length || 0,
//           totalTestimonials: testimonialsRes.data.orders?.length || 0,
//         });
//       } catch (error) {
//         console.error("Error fetching dashboard stats:", error);
//       }
//     };

//     fetchDashboardStats();
//   }, []);

//   // Check if current route is admin or user dashboard
//   const isAdminRoute =
//     location.pathname.includes("Dash-32793") ||
//     location.pathname.includes("AB-7832-342") ||
//     location.pathname.includes("MS-3562-922") ||
//     location.pathname.includes("UV-2390-389");

//   const isUserRoute = location.pathname.includes("U-23-Dash-32793");

//   // Get real user data (no fallbacks to dummy data)
//   const getDisplayEmail = () => {
//     return userData.email || ""; // Return empty string if no real email
//   };

//   const getDisplayName = () => {
//     return userData.name || ""; // Return empty string if no real name
//   };

//   const getUserstatus = () => {
//     return userData.status || ""; // Return empty string if no real status
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//       if (window.innerWidth < 1024) {
//         setIsCollapsed(true);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Apply dark mode class to html element
//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [isDarkMode]);

//   // Logout function with API integration
//   const logout = async () => {
//     setIsLoggingOut(true);

//     try {
//       // Get token from cookies
//       const token = Cookies.get("authToken");

//       if (token) {
//         // Send logout request to API
//         await axios.post(
//           "https://hotel-nodejs-oa32.onrender.com/37829/7892/logout",
//           {},
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//             withCredentials: true,
//           },
//         );
//       }

//       toast.success("Logged out successfully", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: isDarkMode ? "dark" : "light",
//       });
//     } catch (error) {
//       console.error("Logout error:", error.response?.data || error.message);
//     } finally {
//       // Clear all cookies
//       Cookies.remove("authToken");
//       Cookies.remove("userEmail");
//       Cookies.remove("userName");
//       Cookies.remove("userstatus");
//       Cookies.remove("userStatus");
//       Cookies.remove("userAvatar");
//       Cookies.remove("userLastLogin");
//       Cookies.remove("userId");
//       Cookies.remove("userPhone");
//       Cookies.remove("userCountry");

//       // Clear localStorage items
//       localStorage.removeItem("authToken");
//       localStorage.removeItem("userEmail");
//       localStorage.removeItem("userName");
//       localStorage.removeItem("userstatus");
//       localStorage.removeItem("userStatus");

//       // Clear axios default headers
//       delete axios.defaults.headers.common["Authorization"];

//       // Reset user data
//       setUserData({
//         email: "",
//         name: "",
//         status: "",
//         avatar: "",
//         lastLogin: null,
//         id: "",
//         phone: "",
//         country: "",
//       });

//       // Close modal and reset loading state
//       setShowLogoutModal(false);
//       setIsLoggingOut(false);

//       // Redirect to homepage
//       navigate("/");
//     }
//   };

//   const handleLogoutClick = () => {
//     setShowLogoutModal(true);
//   };

//   // Animation variants
//   const sidebarVariants = {
//     expanded: {
//       width: "280px",
//       transition: { duration: 0.3, ease: "easeInOut" },
//     },
//     collapsed: {
//       width: "80px",
//       transition: { duration: 0.3, ease: "easeInOut" },
//     },
//   };

//   const menuItemVariants = {
//     initial: { x: -20, opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//     hover: {
//       scale: 1.02,
//       backgroundColor: "rgba(255,255,255,0.1)",
//       transition: { duration: 0.2 },
//     },
//   };

//   const subMenuVariants = {
//     hidden: { height: 0, opacity: 0 },
//     visible: {
//       height: "auto",
//       opacity: 1,
//       transition: { duration: 0.3, staggerChildren: 0.1 },
//     },
//   };

//   // Menu items with real data
//   const menuItems = [
//     {
//       title: "Dashboard",
//       icon: <DashboardIcon className="size-6" />,
//       link: "/Dash-32793",
//       color: "from-blue-500 to-blue-600",
//       badge:
//         dashboardStats.totalBookings > 0
//           ? Math.min(dashboardStats.totalBookings, 9)
//           : undefined,
//     },
//     {
//       title: "Users",
//       icon: <People className="size-6" />,
//       link: "/UV-2390-389",
//       color: "from-green-500 to-green-600",
//       badge:
//         dashboardStats.totalUsers > 0
//           ? Math.min(dashboardStats.totalUsers, 9)
//           : undefined,
//     },
//     {
//       title: "Bookings",
//       icon: <ShoppingCart className="size-6" />,
//       link: "/AB-7832-342",
//       color: "from-purple-500 to-purple-600",
//       badge:
//         dashboardStats.totalBookings > 0
//           ? Math.min(dashboardStats.totalBookings, 9)
//           : undefined,
//     },
//     {
//       title: "Messages",
//       icon: <Message className="size-6" />,
//       link: "/MS-3562-922",
//       color: "from-pink-500 to-pink-600",
//       badge:
//         dashboardStats.totalMessages > 0
//           ? Math.min(dashboardStats.totalMessages, 9)
//           : undefined,
//     },
//     {
//       title: "Analytics",
//       icon: <PieChart className="size-6" />,
//       color: "from-yellow-500 to-yellow-600",
//       submenu: [
//         { title: "Charts", link: "/GD-2761-823", icon: "📊" },
//         { title: "Reports", link: "/ARG-3832-382", icon: "📈" },
//       ],
//     },
//     {
//       title: "Calendar",
//       icon: <CalendarToday className="size-6" />,
//       link: "/C-6784-873",
//       color: "from-red-500 to-red-600",
//     },
//     {
//       title: "Settings",
//       icon: <Settings className="size-6" />,
//       color: "from-gray-500 to-gray-600",
//       submenu: [
//         { title: "Profile", link: "/PF-5638-893", icon: "👤" },
//         { title: "Security", link: "/SG-6788-327", icon: "🔒" },
//       ],
//     },
//   ];

//   const toggleMenu = () => setIsCollapsed(!isCollapsed);
//   const toggleTheme = () => setIsDarkMode(!isDarkMode);

//   const toggleSubMenu = (title) => {
//     const menuItem = menuItems.find((item) => item.title === title);
//     if (menuItem?.submenu) {
//       setOpenSubMenu(openSubMenu === title ? null : title);
//     }
//   };

//   // Check if menu item is active
//   const isActiveLink = (link) => {
//     return location.pathname === link;
//   };

//   // Only show user info if we have real data
//   const hasUserData = userData.email && userData.email !== "";

//   return (
//     <div className={`flex h-screen ${isDarkMode ? "dark" : ""}`}>
//       {/* Toast Container */}
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
//         theme={isDarkMode ? "dark" : "light"}
//       />

//       {/* Logout Confirmation Modal */}
//       <AnimatePresence>
//         {showLogoutModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm"
//             onClick={() => !isLoggingOut && setShowLogoutModal(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.8, y: 50, opacity: 0 }}
//               animate={{ scale: 1, y: 0, opacity: 1 }}
//               exit={{ scale: 0.8, y: 50, opacity: 0 }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md mx-4 shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="text-center">
//                 <motion.div
//                   animate={{
//                     rotate: [0, 10, -10, 10, 0],
//                     scale: [1, 1.1, 1.1, 1.1, 1],
//                   }}
//                   transition={{ duration: 0.5 }}
//                   className="bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
//                 >
//                   <Logout
//                     className="text-red-600 dark:text-red-300 text-4xl"
//                     style={{ fontSize: "2.5rem" }}
//                   />
//                 </motion.div>

//                 <motion.h2
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 }}
//                   className="text-2xl font-bold text-gray-800 dark:text-white mb-2"
//                 >
//                   Ready to Leave?
//                 </motion.h2>

//                 <motion.p
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                   className="text-gray-600 dark:text-gray-300 mb-6"
//                 >
//                   Are you sure you want to logout from your account?
//                   <br />
//                   <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 block">
//                     You'll need to login again to access your dashboard.
//                   </span>
//                 </motion.p>

//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                   className="flex gap-4 justify-center"
//                 >
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setShowLogoutModal(false)}
//                     disabled={isLoggingOut}
//                     className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
//                   >
//                     Cancel
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={logout}
//                     disabled={isLoggingOut}
//                     className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-medium"
//                   >
//                     {isLoggingOut ? (
//                       <>
//                         <motion.div
//                           animate={{ rotate: 360 }}
//                           transition={{
//                             duration: 1,
//                             repeat: Infinity,
//                             ease: "linear",
//                           }}
//                           className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                         />
//                         <span>Logging out...</span>
//                       </>
//                     ) : (
//                       <>
//                         <Logout className="size-5" />
//                         <span>Logout</span>
//                       </>
//                     )}
//                   </motion.button>
//                 </motion.div>

//                 {/* User Info - Only show if we have real data */}
//                 {hasUserData && !isLoggingOut && (
//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.4 }}
//                     className="text-xs text-gray-400 dark:text-gray-500 mt-4"
//                   >
//                     Logging out as: {userData.email}
//                   </motion.p>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Mobile Overlay */}
//       {!isCollapsed && isMobile && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 z-20 backdrop-blur-sm"
//           onClick={toggleMenu}
//         />
//       )}

//       {/* Sidebar */}
//       <motion.div
//         variants={sidebarVariants}
//         animate={isCollapsed ? "collapsed" : "expanded"}
//         className={`bg-gradient-to-b from-gray-900 to-gray-800 text-white h-screen fixed lg:relative z-30
//           shadow-2xl overflow-hidden
//           ${isCollapsed && isMobile ? "-translate-x-full" : "translate-x-0"}`}
//       >
//         {/* Logo Area with Animation */}
//         <motion.div className="p-6 flex items-center justify-between border-b border-gray-700">
//           <motion.div
//             className="flex items-center gap-3"
//             animate={{ rotate: isCollapsed ? 360 : 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {!isCollapsed && (
//               <motion.span
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
//               >
//                 HotelMS
//               </motion.span>
//             )}
//           </motion.div>

//           {!isMobile && (
//             <motion.div
//               whileHover={{ scale: 1.1, rotate: 180 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={toggleMenu}
//               className="p-1 hover:bg-gray-700 rounded-lg"
//             >
//               {isCollapsed ? <ChevronRight /> : <ExpandMore />}
//             </motion.div>
//           )}
//         </motion.div>

//         {/* Search Bar - Only when expanded */}
//         {!isCollapsed && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="p-4"
//           >
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//               />
//             </div>
//           </motion.div>
//         )}

//         {/* User Info - Only show if we have real user data and sidebar is expanded */}
//         {!isCollapsed && hasUserData && (
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="px-4 py-3 mx-2 bg-gray-700/50 rounded-xl mb-4"
//           >
//             <div className="flex items-center gap-3">
//               <Avatar src={userData.avatar} className="ring-2 ring-blue-500">
//                 {userData.name?.charAt(0) || "U"}
//               </Avatar>
//               <div className="flex-1 min-w-0">
//                 <p className="text-sm font-medium truncate">{userData.name}</p>
//                 <p className="text-xs text-gray-400 truncate">
//                   {userData.email}
//                 </p>
//                 <p className="text-xs text-gray-400 capitalize">
//                   {userData.status}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         )}

//         {/* Navigation Menu */}
//         <nav className="mt-2 overflow-y-auto h-[calc(100vh-280px)] custom-scrollbar">
//           {menuItems.map((item, index) => (
//             <motion.div
//               key={item.title}
//               variants={menuItemVariants}
//               initial="initial"
//               animate="animate"
//               transition={{ delay: index * 0.05 }}
//               onHoverStart={() => setHoveredItem(item.title)}
//               onHoverEnd={() => setHoveredItem(null)}
//             >
//               <motion.div
//                 whileHover="hover"
//                 variants={menuItemVariants}
//                 onClick={() => {
//                   if (!item.submenu && item.link) {
//                     if (isMobile) setIsCollapsed(true);
//                     navigate(item.link);
//                   }
//                   toggleSubMenu(item.title);
//                 }}
//                 className={`relative flex items-center p-3 mx-2 rounded-xl cursor-pointer
//                   ${
//                     isActiveLink(item.link)
//                       ? `bg-gradient-to-r ${item.color} shadow-lg`
//                       : openSubMenu === item.title
//                         ? `bg-gradient-to-r ${item.color} shadow-lg`
//                         : "hover:bg-gray-700"
//                   } transition-all duration-300`}
//               >
//                 {/* Animated Background on Hover */}
//                 {hoveredItem === item.title &&
//                   !openSubMenu &&
//                   !isActiveLink(item.link) && (
//                     <motion.div
//                       layoutId="hoverBackground"
//                       className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 rounded-xl`}
//                       initial={{ scale: 0.8 }}
//                       animate={{ scale: 1 }}
//                       transition={{ duration: 0.2 }}
//                     />
//                   )}

//                 {/* Icon with Badge */}
//                 <div className="relative">
//                   {item.icon}
//                   {item.badge && !isCollapsed && (
//                     <motion.span
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
//                     >
//                       {item.badge}
//                     </motion.span>
//                   )}
//                 </div>

//                 {!isCollapsed && (
//                   <>
//                     <motion.span
//                       className="ml-3 text-sm font-medium"
//                       animate={{ x: hoveredItem === item.title ? 5 : 0 }}
//                     >
//                       {item.title}
//                     </motion.span>

//                     {item.submenu && (
//                       <motion.span
//                         className="ml-auto"
//                         animate={{
//                           rotate: openSubMenu === item.title ? 180 : 0,
//                         }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <ExpandMore className="size-5" />
//                       </motion.span>
//                     )}
//                   </>
//                 )}
//               </motion.div>

//               {/* Submenu with Animation */}
//               <AnimatePresence>
//                 {!isCollapsed && item.submenu && openSubMenu === item.title && (
//                   <motion.div
//                     variants={subMenuVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="hidden"
//                     className="ml-4 pl-6 border-l-2 border-gray-600 overflow-hidden"
//                   >
//                     {item.submenu.map((subItem, subIndex) => (
//                       <motion.div
//                         key={subIndex}
//                         variants={{
//                           hidden: { x: -20, opacity: 0 },
//                           visible: { x: 0, opacity: 1 },
//                         }}
//                         transition={{ delay: subIndex * 0.1 }}
//                       >
//                         <Link to={subItem.link}>
//                           <motion.div
//                             whileHover={{ x: 10 }}
//                             onClick={() => isMobile && setIsCollapsed(true)}
//                             className="flex items-center gap-2 py-2 px-4 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all"
//                           >
//                             <span className="text-lg">{subItem.icon}</span>
//                             {subItem.title}
//                           </motion.div>
//                         </Link>
//                       </motion.div>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </nav>

//         {/* Logout Button at Bottom */}
//         <motion.div
//           className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700 bg-gray-800"
//           initial={{ y: 100 }}
//           animate={{ y: 0 }}
//           transition={{ delay: 0.5 }}
//         >
//           <Tooltip title={isCollapsed ? "Logout" : ""} placement="right">
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={handleLogoutClick}
//               disabled={isLoggingOut}
//               className={`flex items-center gap-3 w-full p-3 rounded-xl
//                 bg-gradient-to-r from-red-500 to-red-600 text-white
//                 hover:from-red-600 hover:to-red-700 transition-all shadow-lg
//                 disabled:opacity-50 disabled:cursor-not-allowed
//                 ${isCollapsed ? "justify-center" : "justify-start"}`}
//             >
//               <Logout className="size-5" />
//               {!isCollapsed && (
//                 <motion.span
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="font-medium"
//                 >
//                   Logout
//                 </motion.span>
//               )}
//             </motion.button>
//           </Tooltip>
//         </motion.div>
//       </motion.div>

//       {/* Main Content Area */}
//       <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//         {/* Top Bar */}
//         <motion.div
//           initial={{ y: -100 }}
//           animate={{ y: 0 }}
//           className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center"
//         >
//           <div className="flex items-center gap-4">
//             <motion.button
//               whileHover={{ scale: 1.1, rotate: 180 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={toggleMenu}
//               className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
//             >
//               <Menu className="text-gray-600 dark:text-gray-300" />
//             </motion.button>

//             <motion.h1
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-xl font-bold text-gray-800 dark:text-white"
//             >
//               {hasUserData
//                 ? `Welcome back, ${userData.name}!`
//                 : "Welcome to Hotel Management System"}
//             </motion.h1>
//           </div>

//           <div className="flex items-center gap-3">
//             {/* Theme Toggle */}
//             <motion.button
//               whileHover={{ scale: 1.1, rotate: 180 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={toggleTheme}
//               className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
//             >
//               {isDarkMode ? (
//                 <LightMode className="text-yellow-500" />
//               ) : (
//                 <DarkMode className="text-gray-600" />
//               )}
//             </motion.button>

//             {/* Notifications */}
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="relative"
//             >
//               <IconButton className="hover:bg-gray-100 dark:hover:bg-gray-700">
//                 <Badge
//                   badgeContent={
//                     dashboardStats.totalMessages > 0
//                       ? Math.min(dashboardStats.totalMessages, 9)
//                       : 0
//                   }
//                   color="error"
//                 >
//                   <Notifications className="text-gray-600 dark:text-gray-300" />
//                 </Badge>
//               </IconButton>
//             </motion.div>

//             {/* User Avatar - Only show if we have user data */}
//             {hasUserData && (
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Avatar
//                   src={userData.avatar}
//                   className="cursor-pointer ring-2 ring-blue-500 hover:ring-4 transition-all"
//                 >
//                   {userData.name?.charAt(0)}
//                 </Avatar>
//               </motion.div>
//             )}
//           </div>
//         </motion.div>

//         {/* Page Content */}
//         <div className="p-4 lg:p-6">{children}</div>
//       </main>

//       {/* Custom Scrollbar Styles */}
//       <style jsx>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 5px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: #2d3748;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #4a5568;
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #718096;
//         }
//       `}</style>
//     </div>
//   );
// };

































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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
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
  });

  const location = useLocation();
  const navigate = useNavigate();

  // Fetch user data by email from cookies
  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoadingUser(true);

      // Get auth token and user email from cookies
      const authToken = Cookies.get("authToken");
      const userEmail = Cookies.get("userEmail");

      console.log("Cookies - authToken:", authToken ? "Present" : "Missing");
      console.log("Cookies - userEmail:", userEmail);

      if (!authToken || !userEmail) {
        console.log("Missing auth token or user email, redirecting to login");
        setIsLoadingUser(false);
        navigate("/");
        return;
      }

      try {
        // Fetch user by email from API
        console.log("Fetching user data for email:", userEmail);
        
        const response = await axios.get(
          `https://hotel-nodejs-oa32.onrender.com/37829/7892/email/${encodeURIComponent(userEmail)}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        console.log("User API Response:", response.data);

        if (response.data && response.data.user) {
          const currentUser = response.data.user;
          
          // Set user data with the exact structure from API
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

          // Update cookies with real data
          Cookies.set("userName", currentUser.fullname || currentUser.email.split('@')[0], { expires: 7 });
          Cookies.set("userStatus", currentUser.status || "user", { expires: 7 });
          Cookies.set("userId", currentUser._id || "", { expires: 7 });
          if (currentUser.phone) Cookies.set("userPhone", currentUser.phone, { expires: 7 });
          
          // Set dashboard stats
          setDashboardStats(prev => ({
            ...prev,
            totalUsers: response.data.totalUsers || 0,
          }));

          // Fetch notifications after user data is loaded
          fetchNotifications(currentUser._id, authToken);
        }
      } catch (error) {
        console.error("Error fetching user data:", error.response?.data || error.message);
        toast.error("Failed to load user data. Please login again.", {
          position: "top-right",
          autoClose: 5000,
        });
        
        // If unauthorized, redirect to login
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
      // You can replace this with your actual notifications API endpoint
      const response = await axios.get(
        `https://hotel-nodejs-oa32.onrender.com/notifications/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data && response.data.notifications) {
        setNotifications(response.data.notifications);
        setUnreadCount(response.data.notifications.filter(n => !n.read).length);
      } else {
        // Sample notifications for demo
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
          {
            id: 3,
            type: "alert",
            title: "System Update",
            message: "System maintenance scheduled for tonight",
            time: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
            read: true,
            icon: <Info className="text-yellow-500" />,
          },
        ];
        setNotifications(sampleNotifications);
        setUnreadCount(2);
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
      // Set sample notifications on error
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
    }
  };

  // Mark notification as read
  const markAsRead = async (notificationId) => {
    const updatedNotifications = notifications.map(notif =>
      notif.id === notificationId ? { ...notif, read: true } : notif
    );
    setNotifications(updatedNotifications);
    setUnreadCount(updatedNotifications.filter(n => !n.read).length);

    try {
      const token = Cookies.get("authToken");
      await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/notifications/${notificationId}/read`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  // Mark all as read
  const markAllAsRead = async () => {
    const updatedNotifications = notifications.map(notif => ({ ...notif, read: true }));
    setNotifications(updatedNotifications);
    setUnreadCount(0);

    try {
      const token = Cookies.get("authToken");
      await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/notifications/read-all`,
        { userId: userData._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Error marking all notifications as read:", error);
    }
  };

  // Delete notification
  const deleteNotification = async (notificationId, e) => {
    e.stopPropagation();
    
    const updatedNotifications = notifications.filter(n => n.id !== notificationId);
    setNotifications(updatedNotifications);
    setUnreadCount(updatedNotifications.filter(n => !n.read).length);

    try {
      const token = Cookies.get("authToken");
      await axios.delete(
        `https://hotel-nodejs-oa32.onrender.com/notifications/${notificationId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  // Check if current route is admin or user dashboard
  const isAdminRoute =
    location.pathname.includes("Dash-32793") ||
    location.pathname.includes("AB-7832-342") ||
    location.pathname.includes("MS-3562-922") ||
    location.pathname.includes("UV-2390-389");

  const isUserRoute = location.pathname.includes("U-23-Dash-32793");

  // Get user display data
  const getDisplayName = () => {
    return userData.fullname || userData.email?.split('@')[0] || "User";
  };

  const getUserStatus = () => {
    return userData.status || "user";
  };

  const getAvatarUrl = () => {
    if (userData.fullname) {
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.fullname)}&background=4f46e5&color=fff&bold=true`;
    }
    return `https://ui-avatars.com/api/?name=${userData.email?.charAt(0) || 'U'}&background=4f46e5&color=fff&bold=true`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
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
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Logout function with API integration
  const logout = async () => {
    setIsLoggingOut(true);

    try {
      // Get token from cookies
      const token = Cookies.get("authToken");

      if (token) {
        // Send logout request to API
        await axios.post(
          "https://hotel-nodejs-oa32.onrender.com/37829/7892/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );
      }

      toast.success("Logged out successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error("Logout error:", error.response?.data || error.message);
    } finally {
      // Clear all cookies
      Cookies.remove("authToken");
      Cookies.remove("userEmail");
      Cookies.remove("userName");
      Cookies.remove("userStatus");
      Cookies.remove("userId");
      Cookies.remove("userPhone");

      // Clear localStorage items
      localStorage.removeItem("authToken");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userName");
      localStorage.removeItem("userStatus");

      // Clear axios default headers
      delete axios.defaults.headers.common["Authorization"];

      // Reset user data
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

      // Close modal and reset loading state
      setShowLogoutModal(false);
      setIsLoggingOut(false);

      // Redirect to homepage
      navigate("/");
    }
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  // Animation variants
  const sidebarVariants = {
    expanded: {
      width: "280px",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    collapsed: {
      width: "80px",
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

  // Menu items with categories
  const menuCategories = [
    {
      title: "MAIN",
      items: [
        {
          title: "Dashboard",
          icon: <DashboardIcon className="size-6" />,
          link: "/Dash-32793",
          color: "from-blue-500 to-blue-600",
          badge:
            dashboardStats.totalBookings > 0
              ? Math.min(dashboardStats.totalBookings, 9)
              : undefined,
        },
        {
          title: "Analytics",
          icon: <PieChart className="size-6" />,
          link: "/analytics",
          color: "from-yellow-500 to-yellow-600",
          submenu: [
            { title: "Charts", link: "/GD-2761-823", icon: "📊" },
            { title: "Reports", link: "/ARG-3832-382", icon: "📈" },
          ],
        },
      ],
    },
    {
      title: "MANAGEMENT",
      items: [
        {
          title: "Users",
          icon: <People className="size-6" />,
          link: "/UV-2390-389",
          color: "from-green-500 to-green-600",
          badge:
            dashboardStats.totalUsers > 0
              ? Math.min(dashboardStats.totalUsers, 9)
              : undefined,
        },
        {
          title: "Bookings",
          icon: <ShoppingCart className="size-6" />,
          link: "/AB-7832-342",
          color: "from-purple-500 to-purple-600",
          badge:
            dashboardStats.totalBookings > 0
              ? Math.min(dashboardStats.totalBookings, 9)
              : undefined,
        },
        {
          title: "Messages",
          icon: <Message className="size-6" />,
          link: "/MS-3562-922",
          color: "from-pink-500 to-pink-600",
          badge:
            dashboardStats.totalMessages > 0
              ? Math.min(dashboardStats.totalMessages, 9)
              : undefined,
        },
      ],
    },
    {
      title: "HOTEL SERVICES",
      items: [
        {
          title: "Rooms",
          icon: <KingBed className="size-6" />,
          link: "/rooms",
          color: "from-indigo-500 to-indigo-600",
        },
        {
          title: "Restaurant",
          icon: <Restaurant className="size-6" />,
          link: "/restaurant",
          color: "from-orange-500 to-orange-600",
        },
        {
          title: "Spa",
          icon: <Spa className="size-6" />,
          link: "/spa",
          color: "from-teal-500 to-teal-600",
        },
        {
          title: "Pool",
          icon: <Pool className="size-6" />,
          link: "/pool",
          color: "from-cyan-500 to-cyan-600",
        },
      ],
    },
    {
      title: "SCHEDULE",
      items: [
        {
          title: "Calendar",
          icon: <CalendarToday className="size-6" />,
          link: "/C-6784-873",
          color: "from-red-500 to-red-600",
        },
      ],
    },
    {
      title: "SETTINGS",
      items: [
        {
          title: "Settings",
          icon: <Settings className="size-6" />,
          color: "from-gray-500 to-gray-600",
          submenu: [
            { title: "Profile", link: "/PF-5638-893", icon: "👤" },
            { title: "Security", link: "/SG-6788-327", icon: "🔒" },
          ],
        },
      ],
    },
  ];

  const toggleMenu = () => setIsCollapsed(!isCollapsed);

  const toggleSubMenu = (title) => {
    const menuItem = menuCategories
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

  return (
    <div className="flex h-screen bg-gray-50">
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

      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm"
            onClick={() => !isLoggingOut && setShowLogoutModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                    scale: [1, 1.1, 1.1, 1.1, 1],
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-red-100 to-red-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <Logout
                    className="text-red-600 text-4xl"
                    style={{ fontSize: "2.5rem" }}
                  />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl font-bold text-gray-800 mb-2"
                >
                  Ready to Leave?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 mb-6"
                >
                  Are you sure you want to logout from your account?
                  <br />
                  <span className="text-sm text-gray-500 mt-2 block">
                    You'll need to login again to access your dashboard.
                  </span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-4 justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowLogoutModal(false)}
                    disabled={isLoggingOut}
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={logout}
                    disabled={isLoggingOut}
                    className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-medium"
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
                        <Logout className="size-5" />
                        <span>Logout</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>

                {/* User Info - Only show if we have real data */}
                {hasUserData && !isLoggingOut && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xs text-gray-400 mt-4"
                  >
                    Logging out as: {userData.email}
                  </motion.p>
                )}
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
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm"
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
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-gray-800">Notifications</h2>
                    {unreadCount > 0 && (
                      <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full">
                        {unreadCount} new
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {unreadCount > 0 && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={markAllAsRead}
                        className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Mark all as read
                      </motion.button>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowNotifications(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <Close className="text-gray-600" />
                    </motion.button>
                  </div>
                </div>

                <div className="space-y-3 max-h-[60vh] overflow-y-auto custom-scrollbar">
                  {notifications.length === 0 ? (
                    <div className="text-center py-12">
                      <Markunread className="text-6xl text-gray-300 mb-4" />
                      <p className="text-gray-500">No notifications</p>
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => markAsRead(notification.id)}
                        className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                          notification.read
                            ? "bg-gray-50 hover:bg-gray-100"
                            : "bg-blue-50 hover:bg-blue-100 border-l-4 border-blue-500"
                        }`}
                      >
                        <div className="p-2 bg-white rounded-full shadow-sm">
                          {notification.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className={`font-semibold ${notification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                              {notification.title}
                            </h3>
                            <span className="text-xs text-gray-500">
                              {formatTimeAgo(notification.time)}
                            </span>
                          </div>
                          <p className={`text-sm ${notification.read ? 'text-gray-600' : 'text-gray-800'}`}>
                            {notification.message}
                          </p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => deleteNotification(notification.id, e)}
                          className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                        >
                          <Delete className="size-4 text-gray-500" />
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
      {!isCollapsed && isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-20 backdrop-blur-sm"
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar */}
      <motion.div
        variants={sidebarVariants}
        animate={isCollapsed ? "collapsed" : "expanded"}
        className={`bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white h-screen fixed lg:relative z-30
          shadow-2xl overflow-hidden
          ${isCollapsed && isMobile ? "-translate-x-full" : "translate-x-0"}`}
      >
        {/* Logo Area with Animation */}
        <motion.div className="p-6 flex items-center justify-between border-b border-gray-700">
          <motion.div
            className="flex items-center gap-3"
            animate={{ rotate: isCollapsed ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"
            >
              <Hotel className="text-white" />
            </motion.div>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                HotelMS
              </motion.span>
            )}
          </motion.div>

          {!isMobile && (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="p-1 hover:bg-gray-700 rounded-lg cursor-pointer"
            >
              {isCollapsed ? <ChevronRight /> : <ExpandMore />}
            </motion.div>
          )}
        </motion.div>

        {/* Search Bar - Only when expanded */}
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </motion.div>
        )}

        {/* User Info Card - Only show if we have real user data and sidebar is expanded */}
        {!isCollapsed && hasUserData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-3 mb-4 p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl border border-gray-600"
          >
            <div className="flex items-center gap-3 mb-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <Avatar
                  src={getAvatarUrl()}
                  sx={{ width: 56, height: 56 }}
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
                  className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"
                />
              </motion.div>
              <div className="flex-1 min-w-0">
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm font-semibold truncate"
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
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    userData.status === 'admin' 
                      ? 'bg-purple-500/20 text-purple-300' 
                      : 'bg-blue-500/20 text-blue-300'
                  }`}>
                    {userData.status}
                  </span>
                </motion.div>
              </div>
            </div>

            {/* User Stats */}
            <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-gray-600">
              <div className="text-center">
                <p className="text-xs text-gray-400">Logins</p>
                <p className="text-sm font-semibold">{userData.statistics?.totalLogins || 0}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-400">Member Since</p>
                <p className="text-xs font-semibold">
                  {userData.createdAt ? new Date(userData.createdAt).toLocaleDateString() : 'N/A'}
                </p>
              </div>
            </div>

            {/* Last Login */}
            {userData.lastLogin && (
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400">Last Login</p>
                <p className="text-xs">
                  {new Date(userData.lastLogin).toLocaleString()}
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Navigation Menu with Categories */}
        <nav className="mt-2 overflow-y-auto h-[calc(100vh-400px)] custom-scrollbar px-2">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.title} className="mb-4">
              {!isCollapsed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider"
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
                  transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                  onHoverStart={() => setHoveredItem(item.title)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <motion.div
                    whileHover="hover"
                    variants={menuItemVariants}
                    onClick={() => {
                      if (!item.submenu && item.link) {
                        if (isMobile) setIsCollapsed(true);
                        navigate(item.link);
                      }
                      toggleSubMenu(item.title);
                    }}
                    className={`relative flex items-center p-3 my-1 rounded-xl cursor-pointer
                      ${
                        isActiveLink(item.link)
                          ? `bg-gradient-to-r ${item.color} shadow-lg`
                          : openSubMenu === item.title
                            ? `bg-gradient-to-r ${item.color} shadow-lg`
                            : "hover:bg-gray-700"
                      } transition-all duration-300`}
                  >
                    {/* Animated Background on Hover */}
                    {hoveredItem === item.title &&
                      !openSubMenu &&
                      !isActiveLink(item.link) && (
                        <motion.div
                          layoutId="hoverBackground"
                          className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 rounded-xl`}
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}

                    {/* Icon with Badge */}
                    <div className="relative">
                      {item.icon}
                      {item.badge && !isCollapsed && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                        >
                          {item.badge}
                        </motion.span>
                      )}
                    </div>

                    {!isCollapsed && (
                      <>
                        <motion.span
                          className="ml-3 text-sm font-medium flex-1"
                          animate={{ x: hoveredItem === item.title ? 5 : 0 }}
                        >
                          {item.title}
                        </motion.span>

                        {item.submenu && (
                          <motion.span
                            className="ml-auto"
                            animate={{
                              rotate: openSubMenu === item.title ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <ExpandMore className="size-5" />
                          </motion.span>
                        )}
                      </>
                    )}
                  </motion.div>

                  {/* Submenu with Animation */}
                  <AnimatePresence>
                    {!isCollapsed && item.submenu && openSubMenu === item.title && (
                      <motion.div
                        variants={subMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="ml-4 pl-6 border-l-2 border-gray-600 overflow-hidden"
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
                                whileHover={{ x: 10 }}
                                onClick={() => isMobile && setIsCollapsed(true)}
                                className="flex items-center gap-2 py-2 px-4 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all"
                              >
                                <span className="text-lg">{subItem.icon}</span>
                                {subItem.title}
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
          ))}
        </nav>

        {/* Quick Stats - Only when expanded */}
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-20 left-0 right-0 p-4"
          >
            <div className="bg-gray-800/50 rounded-xl p-3 backdrop-blur-sm border border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-400">Today's Stats</span>
                <TrendingUp className="size-4 text-green-400" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-gray-400">Occupancy</p>
                  <p className="text-sm font-semibold text-green-400">{dashboardStats.occupancyRate}%</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Revenue</p>
                  <p className="text-sm font-semibold text-blue-400">${dashboardStats.revenue}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Logout Button at Bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700 bg-gray-800"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Tooltip title={isCollapsed ? "Logout" : ""} placement="right">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogoutClick}
              disabled={isLoggingOut}
              className={`flex items-center gap-3 w-full p-3 rounded-xl
                bg-gradient-to-r from-red-500 to-red-600 text-white
                hover:from-red-600 hover:to-red-700 transition-all shadow-lg
                disabled:opacity-50 disabled:cursor-not-allowed
                ${isCollapsed ? "justify-center" : "justify-start"}`}
            >
              <Logout className="size-5" />
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-medium"
                >
                  Logout
                </motion.span>
              )}
            </motion.button>
          </Tooltip>
        </motion.div>
      </motion.div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto bg-gray-50 transition-colors duration-300 relative">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Top Bar */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl shadow-md p-4 flex justify-between items-center border-b border-gray-200"
        >
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="text-gray-600" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <h1 className="text-xl font-bold text-gray-800">
                {hasUserData
                  ? `Welcome back, ${getDisplayName()}!`
                  : "Welcome to Hotel Management System"}
              </h1>
              {hasUserData && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-1 px-2 py-1 bg-green-100 rounded-full"
                >
                  <CheckCircle className="size-4 text-green-500" />
                  <span className="text-xs text-green-600">Online</span>
                </motion.div>
              )}
            </motion.div>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Actions */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg"
            >
              <AccessTime className="size-4 text-gray-600" />
              <span className="text-sm text-gray-600">
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
                className="hover:bg-gray-100"
              >
                <Badge
                  badgeContent={unreadCount > 0 ? unreadCount : 0}
                  color="error"
                >
                  <Notifications className="text-gray-600" />
                </Badge>
              </IconButton>
            </motion.div>

            {/* User Avatar with Tooltip - Only show if we have user data */}
            {hasUserData && (
              <Tooltip
                title={
                  <div className="p-2">
                    <p className="font-semibold">{getDisplayName()}</p>
                    <p className="text-xs text-gray-400">{userData.email}</p>
                    <p className="text-xs mt-1">Last login: {formatDate(userData.lastLogin)}</p>
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
        <div className="p-4 lg:p-6 relative z-10">
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
          width: 5px;
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
      `}</style>
    </div>
  );
};
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaLinkedin,
//   FaInstagram,
//   FaYoutube,
//   FaEnvelope,
//   FaPhone,
//   FaArrowRight,
//   FaBars,
//   FaWhatsapp,
// } from "react-icons/fa";
// import { Button } from "@mui/material";
// import logo from "../../assets/images/logo/hotel-icon-black-logo-symbol-your-web-site-design-app-vector-illustration-isolated-white-background-240118715.webp";
// import { Link } from "react-router-dom";

// export const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [pagesMenuOpen, setPagesMenuOpen] = useState(false);

//   // time
//   const [time, setTime] = useState("");

//   // Function to get the current time in Kigali, Rwanda (GMT+2)
//   const getCurrentTime = () => {
//     const now = new Date();
//     const options = {
//       timeZone: "Africa/Kigali", // Set timezone to Kigali, Rwanda
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//       hour12: false, // Use 24-hour format
//     };
//     return new Intl.DateTimeFormat("en-US", options).format(now);
//   };

//   // Update time every second
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(getCurrentTime());
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);
//   const ClockTime = () => {
//     return (
//       <motion.div className="text-xl font-sm text-white  rounded-lg shadow-lg">
//         {time}
//       </motion.div>
//     );
//   };

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/A-7483-783/34" },
//     { name: "Services", href: "/S-6832-342/34" },
//     { name: "Rooms", href: "/R-8763-327/34" },
//     { name: "Contact", href: "/C-3872-2344/34" },
//   ];

//   const pageLinks = [
//     { name: "Booking", href: "/B-7839-283/34" },
//     { name: "Our Team", href: "/O-2973-342/34" },
//     { name: "Testimonial", href: "/T-8732-452/34" },
//   ];

//   const socialLinks = [
//     {
//       icon: <FaFacebook className="text-blue-500" />,
//       href: "https://facebook.com/",
//     },
//     {
//       icon: <FaTwitter className="text-blue-300" />,
//       href: "https://twitter.com/",
//     },
//     {
//       icon: <FaLinkedin className="text-gray-500" />,
//       href: "https://linkedIn.com/",
//     },
//     {
//       icon: <FaInstagram className="text-red-500" />,
//       href: "https://Instagram.com/",
//     },
//     {
//       icon: <FaYoutube className="text-red-400" />,
//       href: "https://youtube.com/",
//     },
//   ];

//   return (
//     <header className="w-full dark:text-white text-white">
//       {/* Top Bar - Desktop Only */}
//       <div className="hidden lg:flex bg-black text-white">
//         <div className="container mx-auto flex justify-between items-center py-2 px-5">
//           <div className="flex space-x-6">
//             <div className="flex items-center">
//               <FaEnvelope className="text-blue-600 mr-2" />
//               <span className="text-sm">info@example.com</span>
//             </div>
//             <div className="flex items-center">
//               <FaPhone className="text-blue-600 mr-2" />
//               <span className="text-sm">+250 (78) 794-4577</span>
//             </div>
//             <div className="flex items-center">
//               <FaWhatsapp className="text-blue-600 mr-2" />
//               <span className="text-sm">+250 (72) 755-6145</span>
//             </div>
//           </div>
//           <label className="px-0 lg:block xl:block sm:hidden md:hidden">
//             <ClockTime />
//           </label>
//           <div className="flex space-x-4">
//             {socialLinks.map((link, index) => (
//               <Link key={index} to={link.href}>
//                 <motion.p
//                   className="text-gray-700 hover:text-blue-600 text-lg"
//                   whileHover={{ scale: 1.2 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {" "}
//
//                 </motion.p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <div className="text-white dark:text-white w-full px-0">
//         <div className="flex flex-wrap items-center">
//           {/* Logo - Desktop */}
//           <div className="hidden p-4 lg:flex items-center justify-center w-1/4 h-24">
//             <motion.div
//               className="flex items-center"
//               whileHover={{ scale: 1.05 }}
//             >
//               <Link to={"/"}>
//                 <img
//                   src={logo}
//                   alt=""
//                   className="w-20 rounded-xl object-cover"
//                 />
//               </Link>
//             </motion.div>
//           </div>

//           <div className="w-full lg:w-3/4">
//             <div className="time lg:hidden xl:hidden sm:block md:block">
//               <ClockTime />
//             </div>
//             <div className="flex justify-between items-center h-24 px-4 lg:px-0">
//               {/* Logo - Mobile */}
//               <div className="lg:hidden">
//                 <motion.p>
//                   <Link to={"/"}>
//                     <img
//                       src={logo}
//                       alt=""
//                       className="w-16 rounded-xl object-cover"
//                     />
//                   </Link>
//                 </motion.p>
//               </div>

//               {/* Mobile Menu Button */}

//               <motion.button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="lg:hidden text-white focus:outline-none"
//               >
//                 <FaBars className="text-2xl" />
//               </motion.button>

//               {/* Desktop Navigation */}
//               <nav className="w-full hidden lg:flex items-center space-x-8">
//                 <div className="flex space-x-8">
//                   {navLinks.map((link, index) => (
//                     <motion.div key={index} whileHover={{ scale: 1.05 }}>
//                       {link.name === "Pages" ? (
//                         <div className="relative">
//                           <button
//                             onClick={() => setPagesMenuOpen(!pagesMenuOpen)}
//                             className="flex items-center hover:text-blue-400"
//                           >
//                             Pages
//                             <FaArrowRight
//                               className={`ml-1 transform ${
//                                 pagesMenuOpen ? "rotate-90" : ""
//                               } transition-transform`}
//                             />
//                           </button>
//                           <AnimatePresence>
//                             {pagesMenuOpen && (
//                               <motion.div
//                                 initial={{ opacity: 0, y: -10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -10 }}
//                                 className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10"
//                               >
//                                 {pageLinks.map((page, i) => (
//                                   <Link key={i} to={page.href}>
//                                     <button className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400">
//                                       <Button className="font-bold">
//                                         {page.name}
//                                       </Button>
//                                     </button>
//                                   </Link>
//                                 ))}
//                               </motion.div>
//                             )}
//                           </AnimatePresence>
//                         </div>
//                       ) : (
//                         <Link to={link.href}>
//                           <button className="hover:text-blue-400">
//                             <Button className="font-bold">{link.name}</Button>
//                           </button>
//                         </Link>
//                       )}
//                     </motion.div>
//                   ))}
//                 </div>
//                 <Link to={"/L-6382-8279/34"}>
//                   <motion.button className="bg-blue-600 hover:bg-blue-700 rounded-none text-white flex items-center">
//                     {" "}
//                     <Button>
//                       Order
//                       <FaArrowRight className="ml-1" />
//                     </Button>
//                   </motion.button>
//                 </Link>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-gray-800 overflow-hidden"
//           >
//             <div
//               className="w-full grid grid-cols-5 mt-3 p-4
//              mb-3 sm:text-center justify-items-center bg-black text-white px-4 space-x-4"
//             >
//               {socialLinks.map((link, index) => (
//                 <Link key={index} to={link.href}>
//                   <motion.p
//                     className="text-gray-700 hover:text-blue-600 text-lg"
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     {" "}
//
//                   </motion.p>
//                 </Link>
//               ))}
//             </div>
//             <div className="flex flex-col space-y-4 p-4">
//               {navLinks.map((link, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <Link to={link.href}>
//                     <motion.button
//                       href={link.href}
//                       className="block w-full py-2 hover:text-blue-400"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       {link.name}
//                     </motion.button>
//                   </Link>
//                 </motion.div>
//               ))}
//               <div className="pt-4 border-t border-gray-700">
//                 <h3 className="mb-2 font-medium">Pages</h3>
//                 {pageLinks.map((page, i) => (
//                   <motion.div
//                     key={i}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="mt-2"
//                   >
//                     <Link to={page.href}>
//                       <motion.button
//                         className="block py-2 w-full pl-4 hover:text-blue-400"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         {page.name}
//                       </motion.button>
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>
//               <Link to={"/L-6382-8279/34"}>
//                 <motion.button className="bg-blue-600 hover:bg-blue-700 mt-4 py-3 text-white w-full flex items-center justify-center">
//                   Order
//                   <FaArrowRight className="ml-2" />
//                 </motion.button>
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// /* eslint-disable no-unused-vars */

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaLinkedin,
//   FaInstagram,
//   FaYoutube,
//   FaEnvelope,
//   FaPhone,
//   FaArrowRight,
//   FaBars,
//   FaWhatsapp,
//   FaClock,
//   FaConciergeBell,
//   FaHotel,
//   FaUserTie,
//   FaQuoteRight,
//   FaCalendarCheck,
//   FaRegGem,
//   FaStar,
//   FaMapMarkerAlt,
//   FaUser,
//   FaSignInAlt,
//   FaUserPlus,
//   FaSignOutAlt,
//   FaTachometerAlt,
//   FaUserCircle,
//   FaCog,
//   FaBell,
//   FaSearch,
//   FaTimes,
//   FaEye,
//   FaEyeSlash,
//   FaKey,
//   FaLock,
//   FaEnvelope as FaEnvelopeIcon,
//   FaUserAlt,
// } from "react-icons/fa";
// import { MdLocalHotel, MdDashboard } from "react-icons/md";
// import { Button, CircularProgress, Snackbar, Alert } from "@mui/material";
// import logo from "../../assets/images/logo/hotel-icon-black-logo-symbol-your-web-site-design-app-vector-illustration-isolated-white-background-240118715.webp";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export const Navbar = () => {
//   const navigate = useNavigate();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [pagesMenuOpen, setPagesMenuOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   // const [time, setTime] = useState("");
//   const [time, setTime] = useState({
//     time: "",
//     date: "",
//     latitude: "",
//     longitude: "",
//     location: "",
//   });

//   // Auth States
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showRegisterModal, setShowRegisterModal] = useState(false);
//   const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const [showContactModal, setShowContactModal] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [alertMessage, setAlertMessage] = useState({
//     type: "",
//     message: "",
//     show: false,
//   });
//   const [resetMessage, setResetMessage] = useState("");

//   // Form States
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//     rememberMe: false,
//   });
//   const [registerData, setRegisterData] = useState({
//     fullname: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     phone: "",
//   });
//   const [forgotPasswordData, setForgotPasswordData] = useState({ email: "" });
//   const [contactData, setContactData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });
//   const [contactErrors, setContactErrors] = useState({});
//   const [contactSubmitting, setContactSubmitting] = useState(false);
//   const [contactSuccess, setContactSuccess] = useState(false);

//   // Time update - FIXED: Now updates every minute instead of every second
//   // useEffect(() => {
//   //   const updateTime = () => {
//   //     const now = new Date();
//   //     const options = { timeZone: "Africa/Kigali", hour: "2-digit", minute: "2-digit", hour12: false };
//   //     setTime(new Intl.DateTimeFormat("en-US", options).format(now));
//   //   };

//   //   updateTime();
//   //   const interval = setInterval(updateTime, 60000); // Update every minute instead of every second
//   //   return () => clearInterval(interval);
//   // }, []);

//   useEffect(() => {
//     const updateTimeAndLocation = () => {
//       const now = new Date();

//       // Get date in readable format
//       const dateOptions = {
//         timeZone: "Africa/Kigali",
//         weekday: "long",
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//       };

//       // Get time
//       const timeOptions = {
//         timeZone: "Africa/Kigali",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         hour12: false,
//       };

//       const formattedDate = new Intl.DateTimeFormat(
//         "en-US",
//         dateOptions,
//       ).format(now);
//       const formattedTime = new Intl.DateTimeFormat(
//         "en-US",
//         timeOptions,
//       ).format(now);

//       // Get location from browser
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             setTime((prev) => ({
//               ...prev,
//               time: formattedTime,
//               date: formattedDate,
//               latitude: latitude.toFixed(4),
//               longitude: longitude.toFixed(4),
//               location: `${latitude.toFixed(4)}°, ${longitude.toFixed(4)}°`,
//             }));
//           },
//           (error) => {
//             // Fallback if location permission denied or error
//             setTime({
//               time: formattedTime,
//               date: formattedDate,
//               latitude: "N/A",
//               longitude: "N/A",
//               location: "Location access denied",
//             });
//             console.log("Geolocation error:", error.message);
//           },
//         );
//       } else {
//         // Fallback if geolocation not supported
//         setTime({
//           time: formattedTime,
//           date: formattedDate,
//           latitude: "N/A",
//           longitude: "N/A",
//           location: "Geolocation not supported",
//         });
//       }
//     };

//     updateTimeAndLocation();
//     const interval = setInterval(updateTimeAndLocation, 60000); // Update every minute
//     return () => clearInterval(interval);
//   }, []);

//   // Check auth
//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     const savedUser = localStorage.getItem("user");
//     if (token && savedUser) {
//       setIsAuthenticated(true);
//       setUser(JSON.parse(savedUser));
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     }
//   }, []);

//   // Scroll effect
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close modals on escape
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === "Escape") {
//         setShowLoginModal(false);
//         setShowRegisterModal(false);
//         setShowForgotPassword(false);
//         setShowContactModal(false);
//       }
//     };
//     window.addEventListener("keydown", handleEscape);
//     return () => window.removeEventListener("keydown", handleEscape);
//   }, []);

//   const ClockTime = () => {
//     // Format date for display
//     const formatDate = (dateString) => {
//       if (!dateString) return "";
//       const date = new Date();
//       return date.toLocaleDateString("en-US", {
//         weekday: "short",
//         month: "short",
//         day: "numeric",
//       });
//     };

//     return (
//       <motion.div
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600
//         px-2 xsm:px-3 sm:px-4
//         py-1 xsm:py-1.5 sm:py-2
//         rounded-full shadow-lg
//         max-w-[120px] xsm:max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] xl:max-w-[320px]
//         overflow-hidden"
//       >
//         <FaClock
//           className="text-white
//         text-[10px] xsm:text-xs sm:text-sm
//         flex-shrink-0"
//         />

//         <div className="flex flex-col items-start ml-1 xsm:ml-2">
//           <span
//             className="font-semibold text-white leading-tight
//           text-[10px] xsm:text-xs sm:text-sm"
//           >
//             {time.time || "--:--"}
//           </span>
//           <span
//             className="text-white opacity-90 leading-tight
//           text-[8px] xsm:text-[9px] sm:text-[10px]"
//           >
//             {time.date ? formatDate(time.date) : "---"}
//           </span>
//         </div>

//         {time.latitude !== "N/A" && (
//           <>
//             <div
//               className="w-px h-4 xsm:h-5 sm:h-6 bg-white opacity-30
//             mx-1 xsm:mx-2
//             flex-shrink-0"
//             ></div>

//             <div
//               className="flex items-center space-x-0.5 xsm:space-x-1
//             min-w-0 flex-1"
//             >
//               <FaMapMarkerAlt
//                 className="text-white
//               text-[8px] xsm:text-[10px] sm:text-xs
//               flex-shrink-0"
//               />
//               <span
//                 className="text-white opacity-90 truncate
//               text-[8px] xsm:text-[9px] sm:text-[10px]"
//               >
//                 {time.location || `${time.latitude}, ${time.longitude}`}
//               </span>
//             </div>
//           </>
//         )}
//       </motion.div>
//     );
//   };

//   const handleAuthSuccess = (token, userData) => {
//     localStorage.setItem("authToken", token);
//     localStorage.setItem("user", JSON.stringify(userData));
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     setIsAuthenticated(true);
//     setUser(userData);
//     setShowLoginModal(false);
//     setShowRegisterModal(false);
//     setAlertMessage({
//       type: "success",
//       message: `Welcome ${userData.fullname || userData.name}!`,
//       show: true,
//     });
//     navigate(userData.status === "admin" ? "/Dash-32793" : "/U-23-Dash-32793");
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("user");
//     delete axios.defaults.headers.common["Authorization"];
//     setIsAuthenticated(false);
//     setUser(null);
//     setAlertMessage({
//       type: "info",
//       message: "Logged out successfully",
//       show: true,
//     });
//     navigate("/");
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/37829/7892/login",
//         loginData,
//       );
//       if (res.data.token) handleAuthSuccess(res.data.token, res.data.user);
//     } catch (err) {
//       setAlertMessage({
//         type: "error",
//         message: err.response?.data?.message || "Login failed",
//         show: true,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (registerData.password !== registerData.confirmPassword) {
//       setAlertMessage({
//         type: "error",
//         message: "Passwords do not match",
//         show: true,
//       });
//       return;
//     }
//     if (registerData.password.length < 6) {
//       setAlertMessage({
//         type: "error",
//         message: "Password must be at least 6 characters",
//         show: true,
//       });
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/37829/7892",
//         registerData,
//       );
//       if (res.data.token) {
//         handleAuthSuccess(res.data.token, res.data.user);
//       } else {
//         setShowRegisterModal(false);
//         setShowLoginModal(true);
//         setAlertMessage({
//           type: "success",
//           message: "Registration successful! Please login.",
//           show: true,
//         });
//       }
//     } catch (err) {
//       setAlertMessage({
//         type: "error",
//         message: err.response?.data?.message || "Registration failed",
//         show: true,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleForgotPassword = async (e) => {
//     e.preventDefault();
//     if (!forgotPasswordData.email) {
//       setAlertMessage({
//         type: "error",
//         message: "Please enter your email",
//         show: true,
//       });
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/37829/7892/forgot-password",
//         forgotPasswordData,
//       );
//       setResetMessage(res.data.message || "Reset link sent to your email");
//       setAlertMessage({
//         type: "success",
//         message: "Reset link sent!",
//         show: true,
//       });
//       setTimeout(() => {
//         setShowForgotPassword(false);
//         setForgotPasswordData({ email: "" });
//         setResetMessage("");
//       }, 3000);
//     } catch (err) {
//       setAlertMessage({
//         type: "error",
//         message: err.response?.data?.message || "Failed to send reset link",
//         show: true,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleContactSubmit = async (e) => {
//     e.preventDefault();

//     // Validate
//     const errors = {};
//     if (!contactData.name.trim()) errors.name = "Name required";
//     if (!contactData.email.trim()) errors.email = "Email required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email))
//       errors.email = "Invalid email";
//     if (!contactData.subject.trim()) errors.subject = "Subject required";
//     if (!contactData.message.trim()) errors.message = "Message required";

//     if (Object.keys(errors).length > 0) {
//       setContactErrors(errors);
//       return;
//     }

//     setContactSubmitting(true);
//     try {
//       await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/83920/92303",
//         contactData,
//       );
//       setContactSuccess(true);
//       setContactData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//       });
//       setAlertMessage({
//         type: "success",
//         message: "Message sent successfully!",
//         show: true,
//       });
//       setTimeout(() => {
//         setShowContactModal(false);
//         setContactSuccess(false);
//       }, 2000);
//     } catch (error) {
//       setAlertMessage({
//         type: "error",
//         message: "Failed to send message",
//         show: true,
//       });
//     } finally {
//       setContactSubmitting(false);
//     }
//   };

//   const navLinks = [
//     { name: "Home", href: "/", icon: <MdLocalHotel className="mr-2" /> },
//     {
//       name: "About",
//       href: "/A-7483-783/34",
//       icon: <FaHotel className="mr-2" />,
//     },
//     {
//       name: "Services",
//       href: "/S-6832-342/34",
//       icon: <FaConciergeBell className="mr-2" />,
//     },
//     {
//       name: "Rooms",
//       href: "/R-8763-327/34",
//       icon: <FaRegGem className="mr-2" />,
//     },
//     {
//       name: "Contact",
//       href: "#",
//       icon: <FaEnvelope className="mr-2" />,
//       onClick: () => setShowContactModal(true),
//     },
//   ];

//   const pageLinks = [
//     {
//       name: "Booking",
//       href: "/B-7839-283/34",
//       icon: <FaCalendarCheck className="mr-2" />,
//     },
//     {
//       name: "Our Team",
//       href: "/O-2973-342/34",
//       icon: <FaUserTie className="mr-2" />,
//     },
//     {
//       name: "Testimonial",
//       href: "/T-8732-452/34",
//       icon: <FaQuoteRight className="mr-2" />,
//     },
//   ];

//   const socialLinks = [
//     {
//       icon: <FaFacebook />,
//       href: "https://facebook.com/",
//       color: "text-blue-500",
//     },
//     {
//       icon: <FaTwitter />,
//       href: "https://twitter.com/",
//       color: "text-blue-400",
//     },
//     {
//       icon: <FaLinkedin />,
//       href: "https://linkedIn.com/",
//       color: "text-blue-600",
//     },
//     {
//       icon: <FaInstagram />,
//       href: "https://Instagram.com/",
//       color: "text-pink-500",
//     },
//     {
//       icon: <FaYoutube />,
//       href: "https://youtube.com/",
//       color: "text-red-500",
//     },
//   ];

//   // Modal variants
//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 50 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 300, damping: 25 },
//     },
//     exit: { opacity: 0, scale: 0.8, y: 50 },
//   };

//   const overlayVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//     exit: { opacity: 0 },
//   };

//   return (
//     <>
//       <header className="w-full relative z-50">
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-95" />

//         {/* Top Bar */}
//         <motion.div className="hidden lg:flex bg-gradient-to-r from-gray-900 to-black text-white border-b border-gray-800 relative">
//           <div className="container mx-auto flex justify-between items-center py-2 px-5">
//             <div className="flex space-x-6">
//               {[
//                 { icon: FaEnvelope, text: "info@example.com" },
//                 { icon: FaPhone, text: "+250 (78) 794-4577" },
//                 { icon: FaWhatsapp, text: "+250 (72) 755-6145" },
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center">
//                   <item.icon className="text-blue-400 mr-2 text-sm" />
//                   <span className="text-sm hover:text-blue-400 transition">
//                     {item.text}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <ClockTime />

//             <div className="flex space-x-3">
//               {socialLinks.map((link, i) => (
//                 <Link key={i} to={link.href}>
//                   <div
//                     className={`${link.color} hover:text-white text-lg transition`}
//                   ></div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Main Nav */}
//         <motion.div
//           className={`relative transition-all ${scrolled ? "bg-gray-900 shadow-2xl" : "bg-transparent"}`}
//         >
//           <div className="flex items-center">
//             {/* Logo */}
//             <div className="hidden lg:flex w-1/4 h-24 items-center justify-center">
//               <Link to="/">
//                 <img src={logo} alt="Logo" className="w-16 rounded-xl" />
//               </Link>
//             </div>

//             <div className="w-full lg:w-3/4">
//               <div className="flex justify-between items-center h-24 px-4 lg:px-0">
//                 {/* Mobile Logo */}
//                 <Link to="/" className="lg:hidden">
//                   <img src={logo} alt="Logo" className="w-12 rounded-xl" />
//                 </Link>

//                 {/* Mobile Time & Auth */}
//                 <div className="flex items-center space-x-3 lg:hidden">
//                   <ClockTime />

//                   {isAuthenticated ? (
//                     <div className="relative">
//                       <button
//                         onClick={() => setUserMenuOpen(!userMenuOpen)}
//                         className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1.5 rounded-full"
//                       >
//                         <FaUserCircle className="text-white" />
//                         <span className="text-white text-sm font-medium">
//                           {user?.fullname?.split(" ")[0]}
//                         </span>
//                       </button>

//                       <AnimatePresence>
//                         {userMenuOpen && (
//                           <motion.div
//                             initial={{ opacity: 0, y: -10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -10 }}
//                             className="absolute right-0 mt-2 w-44 bg-gray-800 rounded-xl shadow-2xl z-50 border border-gray-700"
//                           >
//                             <div className="p-3 border-b border-gray-700">
//                               <p className="text-white text-sm font-medium truncate">
//                                 {user?.fullname}
//                               </p>
//                               <p className="text-gray-400 text-xs truncate">
//                                 {user?.email}
//                               </p>
//                             </div>
//                             <button
//                               onClick={() => {
//                                 navigate(
//                                   user?.status === "admin"
//                                     ? "/Dash-32793"
//                                     : "/U-23-Dash-32793",
//                                 );
//                                 setUserMenuOpen(false);
//                               }}
//                               className="w-full px-4 py-2.5 text-left bg-gradient-to-b from-blue-400 to-indigo-400 transition flex items-center text-sm"
//                             >
//                               <MdDashboard className="mr-2" />
//                             </button>
//                             <button
//                               onClick={handleLogout}
//                               className="w-full px-4 py-2.5 text-left bg-gradient-to-b from-red-300 to-red-400 transition flex items-center text-sm"
//                             >
//                               <FaSignOutAlt className="mr-2" />
//                             </button>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   ) : (
//                     <div className="flex items-center space-x-2">
//                       <button
//                         onClick={() => setShowLoginModal(true)}
//                         className="bg-gradient-to-t from-blue-400 to-blue-600 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center"
//                       >
//                         <FaSignInAlt className="mr-1" />
//                       </button>
//                       <button
//                         onClick={() => setShowRegisterModal(true)}
//                         className="bg-gradient-to-b from-blue-400 to-indigo-400 text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center"
//                       >
//                         <FaUserPlus className="mr-1" />
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <button
//                   onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                   className="lg:hidden text-white"
//                 >
//                   {mobileMenuOpen ? (
//                     <FaTimes className="text-2xl" />
//                   ) : (
//                     <FaBars className="text-2xl" />
//                   )}
//                 </button>

//                 {/* Desktop Nav */}
//                 <nav className="hidden lg:flex items-center space-x-4 pr-6">
//                   {navLinks.map((link, i) => (
//                     <div key={i} className="relative group">
//                       {link.name === "Pages" ? (
//                         <div>
//                           <button
//                             onClick={() => setPagesMenuOpen(!pagesMenuOpen)}
//                             className="flex items-center px-3 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 transition"
//                           >
//                             {link.name}{" "}
//                             <FaArrowRight
//                               className={`ml-2 transition ${pagesMenuOpen ? "rotate-90" : ""}`}
//                             />
//                           </button>

//                           <AnimatePresence>
//                             {pagesMenuOpen && (
//                               <motion.div
//                                 initial={{ opacity: 0, y: -10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -10 }}
//                                 className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-xl shadow-2xl z-50 border border-gray-700"
//                               >
//                                 {pageLinks.map((page, j) => (
//                                   <Link key={j} to={page.href}>
//                                     <button
//                                       onClick={() => setPagesMenuOpen(false)}
//                                       className="w-full px-4 py-2.5 text-left bg-gradient-to-b from-blue-400 to-indigo-400 transition flex items-center text-sm"
//                                     >
//                                       {page.name}
//                                     </button>
//                                   </Link>
//                                 ))}
//                               </motion.div>
//                             )}
//                           </AnimatePresence>
//                         </div>
//                       ) : link.onClick ? (
//                         <button
//                           onClick={link.onClick}
//                           className="flex items-center px-3 py-2 text-white bg-gradient-to-b from-blue-400 to-indigo-400 transition"
//                         >
//                           {link.name}
//                         </button>
//                       ) : (
//                         <Link to={link.href}>
//                           <button className="flex items-center px-3 py-2 text-white bg-gradient-to-b from-blue-400 to-indigo-400 transition">
//                             {link.name}
//                           </button>
//                         </Link>
//                       )}
//                       <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition" />
//                     </div>
//                   ))}

//                   {/* Desktop Auth */}
//                   {isAuthenticated ? (
//                     <div className="relative">
//                       <button
//                         onClick={() => setUserMenuOpen(!userMenuOpen)}
//                         className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-xl text-white"
//                       >
//                         <FaUserCircle />{" "}
//                         <span>{user?.fullname?.split(" ")[0]}</span>
//                       </button>

//                       <AnimatePresence>
//                         {userMenuOpen && (
//                           <motion.div
//                             initial={{ opacity: 0, y: -10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -10 }}
//                             className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-xl shadow-2xl z-50 border border-gray-700"
//                           >
//                             <div className="p-4 border-b border-gray-700">
//                               <p className="text-white font-medium truncate">
//                                 {user?.fullname}
//                               </p>
//                               <p className="text-gray-400 text-sm truncate">
//                                 {user?.email}
//                               </p>
//                             </div>
//                             <button
//                               onClick={() => {
//                                 navigate(
//                                   user?.status === "admin"
//                                     ? "/Dash-32793"
//                                     : "/U-23-Dash-32793",
//                                 );
//                                 setUserMenuOpen(false);
//                               }}
//                               className="w-full px-4 py-3 text-left bg-gradient-to-b from-blue-400 to-indigo-400 transition flex items-center"
//                             >
//                               <MdDashboard className="mr-2" />
//                             </button>
//                             <button
//                               onClick={handleLogout}
//                               className="w-full px-4 py-3 text-left bg-gradient-to-b from-red-300 to-red-400 transition flex items-center"
//                             >
//                               <FaSignOutAlt className="mr-2" />
//                             </button>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   ) : (
//                     <div className="flex items-center space-x-3">
//                       <button
//                         onClick={() => setShowLoginModal(true)}
//                         className="bg-gradient-to-t from-blue-400 to-blue-600 px-6 py-2 rounded-xl font-bold transition"
//                       >
//                         <FaSignInAlt className="inline mr-2" />
//                       </button>
//                       <button
//                         onClick={() => setShowRegisterModal(true)}
//                         className="bg-gradient-to-b from-violet-500 to-indigo-500 text-white px-6 py-2 rounded-xl font-bold transition"
//                       >
//                         <FaUserPlus className="inline mr-2" />
//                       </button>
//                     </div>
//                   )}
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="lg:hidden bg-gray-900 overflow-hidden"
//             >
//               <div className="p-4">
//                 {navLinks.map((link, i) => (
//                   <div key={i}>
//                     {link.onClick ? (
//                       <button
//                         onClick={() => {
//                           link.onClick();
//                           setMobileMenuOpen(false);
//                         }}
//                         className="w-full py-3 px-4 text-left bg-gradient-to-b from-blue-400 to-indigo-400 rounded-lg transition flex items-center"
//                       >
//                         {link.name}
//                       </button>
//                     ) : (
//                       <Link to={link.href}>
//                         <button
//                           onClick={() => setMobileMenuOpen(false)}
//                           className="w-full py-3 px-4 text-left bg-gradient-to-b from-blue-400 to-indigo-400 rounded-lg transition flex items-center"
//                         >
//                           {link.name}
//                         </button>
//                       </Link>
//                     )}
//                   </div>
//                 ))}

//                 <div className="mt-4 pt-4 border-t border-gray-800">
//                   <h3 className="px-4 mb-2 font-semibold text-blue-400">
//                     Quick Links
//                   </h3>
//                   {pageLinks.map((page, i) => (
//                     <Link key={i} to={page.href}>
//                       <button
//                         onClick={() => setMobileMenuOpen(false)}
//                         className="w-full py-2 px-8 text-left bg-gradient-to-b from-blue-400 to-indigo-400 transition flex items-center text-sm"
//                       >
//                         {page.name}
//                       </button>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>

//       {/* Login Modal */}
//       <AnimatePresence>
//         {showLoginModal && (
//           <>
//             <motion.div
//               variants={overlayVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]"
//               onClick={() => setShowLoginModal(false)}
//             />
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700"
//             >
//               <div className="p-6">
//                 <button
//                   onClick={() => setShowLoginModal(false)}
//                   className="absolute top-4 right-4 bg-gradient-to-b from-red-500 to-red-700"
//                 >
//                   <FaTimes />
//                 </button>

//                 <div className="text-center mb-6">
//                   <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
//                     <FaUserCircle className="text-4xl text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-white">
//                     Welcome Back
//                   </h2>
//                 </div>

//                 <form onSubmit={handleLogin} className="text-white">
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-gray-300 text-sm mb-1">
//                         Email
//                       </label>
//                       <div className="relative">
//                         <FaEnvelopeIcon className="absolute left-3 top-3 text-gray-400" />
//                         <input
//                           type="email"
//                           value={loginData.email}
//                           onChange={(e) =>
//                             setLoginData({
//                               ...loginData,
//                               email: e.target.value,
//                             })
//                           }
//                           className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-blue-500"
//                           placeholder="Enter email"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 text-sm mb-1">
//                         Password
//                       </label>
//                       <div className="relative">
//                         <FaLock className="absolute left-3 top-3 text-gray-400" />
//                         <input
//                           type={showPassword ? "text" : "password"}
//                           value={loginData.password}
//                           onChange={(e) =>
//                             setLoginData({
//                               ...loginData,
//                               password: e.target.value,
//                             })
//                           }
//                           className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-10 py-2.5 text-white focus:border-blue-500"
//                           placeholder="Enter password"
//                           required
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowPassword(!showPassword)}
//                           className="absolute right-3 top-3 text-gray-400"
//                         >
//                           {showPassword ? <FaEyeSlash /> : <FaEye />}
//                         </button>
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-between">
//                       <label className="flex items-center space-x-2">
//                         <input
//                           type="checkbox"
//                           checked={loginData.rememberMe}
//                           onChange={(e) =>
//                             setLoginData({
//                               ...loginData,
//                               rememberMe: e.target.checked,
//                             })
//                           }
//                           className="rounded border-gray-600 bg-gray-800 text-blue-600"
//                         />
//                         <span className="text-gray-300 text-sm">Remember</span>
//                       </label>
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setShowLoginModal(false);
//                           setShowForgotPassword(true);
//                         }}
//                         className="bg-gradient-to-b from-blue-400 to-indigo-400 text-white text-sm"
//                       >
//                         Forgot your Password?
//                       </button>
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center"
//                     >
//                       {loading ? (
//                         <CircularProgress size={20} color="inherit" />
//                       ) : (
//                         <>
//                           <FaSignInAlt className="mr-2" /> Sign In
//                         </>
//                       )}
//                     </button>

//                     <p className="text-center text-gray-400 text-sm">
//                       No account?{" "}
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setShowLoginModal(false);
//                           setShowRegisterModal(true);
//                         }}
//                         className="bg-gradient-to-b from-violet-400 to-indigo-400 font-semibold"
//                       >
//                         Register
//                       </button>
//                     </p>
//                   </div>
//                 </form>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Register Modal */}
//       <AnimatePresence>
//         {showRegisterModal && (
//           <>
//             <motion.div
//               variants={overlayVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]"
//               onClick={() => setShowRegisterModal(false)}
//             />
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700"
//             >
//               <div className="p-6 max-h-[80vh] overflow-y-auto">
//                 <button
//                   onClick={() => setShowRegisterModal(false)}
//                   className="absolute top-4 right-4 bg-gradient-to-b from-red-500 to-red-700"
//                 >
//                   <FaTimes />
//                 </button>

//                 <div className="text-center mb-6">
//                   <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
//                     <FaUserPlus className="text-4xl text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-white">
//                     Create Account
//                   </h2>
//                 </div>

//                 <form onSubmit={handleRegister} className="text-white">
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-gray-300 text-sm mb-1">
//                         Full Name
//                       </label>
//                       <div className="relative">
//                         <FaUserAlt className="absolute left-3 top-3 text-gray-400" />
//                         <input
//                           type="text"
//                           value={registerData.fullname}
//                           onChange={(e) =>
//                             setRegisterData({
//                               ...registerData,
//                               fullname: e.target.value,
//                             })
//                           }
//                           className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500"
//                           placeholder="Full name"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 text-sm mb-1">
//                         Email
//                       </label>
//                       <div className="relative">
//                         <FaEnvelopeIcon className="absolute left-3 top-3 text-gray-400" />
//                         <input
//                           type="email"
//                           value={registerData.email}
//                           onChange={(e) =>
//                             setRegisterData({
//                               ...registerData,
//                               email: e.target.value,
//                             })
//                           }
//                           className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500"
//                           placeholder="Email"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 text-sm mb-1">
//                         Phone
//                       </label>
//                       <div className="relative">
//                         <FaPhone className="absolute left-3 top-3 text-gray-400" />
//                         <input
//                           type="tel"
//                           value={registerData.phone}
//                           onChange={(e) =>
//                             setRegisterData({
//                               ...registerData,
//                               phone: e.target.value,
//                             })
//                           }
//                           className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500"
//                           placeholder="+250..."
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 text-sm mb-1">
//                         Password
//                       </label>
//                       <div className="relative">
//                         <FaLock className="absolute left-3 top-3 text-gray-400" />
//                         <input
//                           type={showPassword ? "text" : "password"}
//                           value={registerData.password}
//                           onChange={(e) =>
//                             setRegisterData({
//                               ...registerData,
//                               password: e.target.value,
//                             })
//                           }
//                           className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-10 py-2.5 text-white focus:border-purple-500"
//                           placeholder="Min. 6 characters"
//                           required
//                         />
//                         <div
//                           type="button"
//                           onClick={() => setShowPassword(!showPassword)}
//                           className="absolute right-3 top-3 text-gray-400"
//                         >
//                           {showPassword ? <FaEyeSlash /> : <FaEye />}
//                         </div>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 text-sm mb-1">
//                         Confirm Password
//                       </label>
//                       <div className="relative">
//                         <FaKey className="absolute left-3 top-3 text-gray-400" />
//                         <input
//                           type="password"
//                           value={registerData.confirmPassword}
//                           onChange={(e) =>
//                             setRegisterData({
//                               ...registerData,
//                               confirmPassword: e.target.value,
//                             })
//                           }
//                           className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500"
//                           placeholder="Confirm password"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center"
//                     >
//                       {loading ? (
//                         <CircularProgress size={20} color="inherit" />
//                       ) : (
//                         <>
//                           <FaUserPlus className="mr-2" /> Register
//                         </>
//                       )}
//                     </button>

//                     <p className="text-center text-gray-400 text-sm">
//                       If you have account?{" "}
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setShowRegisterModal(false);
//                           setShowLoginModal(true);
//                         }}
//                         className="bg-gradient-to-b from-blue-400 to-indigo-400 font-semibold"
//                       >
//                         Login
//                       </button>
//                     </p>
//                   </div>
//                 </form>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Forgot Password Modal */}
//       <AnimatePresence>
//         {showForgotPassword && (
//           <>
//             <motion.div
//               variants={overlayVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]"
//               onClick={() => setShowForgotPassword(false)}
//             />
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700"
//             >
//               <div className="p-6">
//                 <button
//                   onClick={() => setShowForgotPassword(false)}
//                   className="absolute top-4 right-4 bg-gradient-to-b from-red-500 to-red-700"
//                 >
//                   <FaTimes />
//                 </button>

//                 <div className="text-center mb-6">
//                   <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center">
//                     <FaKey className="text-4xl text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-white">
//                     Forgot Password?
//                   </h2>
//                 </div>

//                 {resetMessage && (
//                   <div className="mb-4 p-3 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg">
//                     <p className="text-green-400 text-sm text-center">
//                       {resetMessage}
//                     </p>
//                   </div>
//                 )}

//                 <form onSubmit={handleForgotPassword} className="text-white">
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-gray-300 text-sm mb-1">
//                         Email
//                       </label>
//                       <div className="relative">
//                         <FaEnvelopeIcon className="absolute left-3 top-3 text-gray-400" />
//                         <input
//                           type="email"
//                           value={forgotPasswordData.email}
//                           onChange={(e) =>
//                             setForgotPasswordData({ email: e.target.value })
//                           }
//                           className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-yellow-500"
//                           placeholder="Enter email"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold py-3 rounded-lg"
//                     >
//                       {loading ? (
//                         <CircularProgress size={20} color="inherit" />
//                       ) : (
//                         "Send Reset Link"
//                       )}
//                     </button>

//                     <p className="text-center text-gray-400 text-sm">
//                       If you remember?{" "}
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setShowForgotPassword(false);
//                           setShowLoginModal(true);
//                         }}
//                         className="bg-gradient-to-b from-blue-400 to-indigo-400 font-semibold"
//                       >
//                         Login
//                       </button>
//                     </p>
//                   </div>
//                 </form>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Contact Modal */}
//       <AnimatePresence>
//         {showContactModal && (
//           <>
//             <motion.div
//               variants={overlayVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]"
//               onClick={() => setShowContactModal(false)}
//             />
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700"
//             >
//               <div className="p-6 max-h-[80vh] overflow-y-auto">
//                 <button
//                   onClick={() => {
//                     setShowContactModal(false);
//                     setContactSuccess(false);
//                     setContactErrors({});
//                   }}
//                   className="absolute top-4 right-4 bg-gradient-to-b from-red-500 to-red-700 z-10"
//                 >
//                   <FaTimes />
//                 </button>

//                 {contactSuccess ? (
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="text-center py-8"
//                   >
//                     <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <svg
//                         className="w-10 h-10 text-white"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     </div>
//                     <h3 className="text-xl font-semibold text-white mb-2">
//                       Message Sent!
//                     </h3>
//                     <p className="text-gray-400">We'll get back to you soon.</p>
//                   </motion.div>
//                 ) : (
//                   <>
//                     <div className="text-center mb-6">
//                       <h2 className="text-2xl font-bold text-white">
//                         Contact Us
//                       </h2>
//                       <p className="text-gray-400 text-sm">
//                         We'd love to hear from you
//                       </p>
//                     </div>

//                     <form onSubmit={handleContactSubmit} className="text-white">
//                       <div className="space-y-4">
//                         <div>
//                           <input
//                             type="text"
//                             placeholder="Full Name *"
//                             value={contactData.name}
//                             onChange={(e) =>
//                               setContactData({
//                                 ...contactData,
//                                 name: e.target.value,
//                               })
//                             }
//                             className={`w-full bg-gray-800 border ${contactErrors.name ? "border-red-500" : "border-gray-700"} rounded-lg px-4 py-3 text-white focus:border-blue-500`}
//                           />
//                           {contactErrors.name && (
//                             <p className="text-red-500 text-xs mt-1">
//                               {contactErrors.name}
//                             </p>
//                           )}
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                           <div>
//                             <input
//                               type="email"
//                               placeholder="Email *"
//                               value={contactData.email}
//                               onChange={(e) =>
//                                 setContactData({
//                                   ...contactData,
//                                   email: e.target.value,
//                                 })
//                               }
//                               className={`w-full bg-gray-800 border ${contactErrors.email ? "border-red-500" : "border-gray-700"} rounded-lg px-4 py-3 text-white focus:border-blue-500`}
//                             />
//                             {contactErrors.email && (
//                               <p className="text-red-500 text-xs mt-1">
//                                 {contactErrors.email}
//                               </p>
//                             )}
//                           </div>
//                           <div>
//                             <input
//                               type="tel"
//                               placeholder="Phone"
//                               value={contactData.phone}
//                               onChange={(e) =>
//                                 setContactData({
//                                   ...contactData,
//                                   phone: e.target.value,
//                                 })
//                               }
//                               className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500"
//                             />
//                           </div>
//                         </div>

//                         <div>
//                           <input
//                             type="text"
//                             placeholder="Subject *"
//                             value={contactData.subject}
//                             onChange={(e) =>
//                               setContactData({
//                                 ...contactData,
//                                 subject: e.target.value,
//                               })
//                             }
//                             className={`w-full bg-gray-800 border ${contactErrors.subject ? "border-red-500" : "border-gray-700"} rounded-lg px-4 py-3 text-white focus:border-blue-500`}
//                           />
//                           {contactErrors.subject && (
//                             <p className="text-red-500 text-xs mt-1">
//                               {contactErrors.subject}
//                             </p>
//                           )}
//                         </div>

//                         <div>
//                           <textarea
//                             rows="4"
//                             placeholder="Message *"
//                             value={contactData.message}
//                             onChange={(e) =>
//                               setContactData({
//                                 ...contactData,
//                                 message: e.target.value,
//                               })
//                             }
//                             className={`w-full bg-gray-800 border ${contactErrors.message ? "border-red-500" : "border-gray-700"} rounded-lg px-4 py-3 text-white focus:border-blue-500`}
//                           />
//                           {contactErrors.message && (
//                             <p className="text-red-500 text-xs mt-1">
//                               {contactErrors.message}
//                             </p>
//                           )}
//                         </div>

//                         <button
//                           type="submit"
//                           disabled={contactSubmitting}
//                           className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center"
//                         >
//                           {contactSubmitting ? (
//                             <CircularProgress size={20} color="inherit" />
//                           ) : (
//                             "Send Message"
//                           )}
//                         </button>
//                       </div>
//                     </form>

//                     <div className="mt-6 pt-4 border-t border-gray-800">
//                       <div className="grid grid-cols-2 gap-4 text-sm">
//                         <div className="flex items-center text-gray-400">
//                           <FaPhone className="mr-2 text-blue-400" /> +250 787
//                           944 577
//                         </div>
//                         <div className="flex items-center text-gray-400">
//                           <FaEnvelope className="mr-2 text-blue-400" />{" "}
//                           info@hotel.com
//                         </div>
//                         <div className="flex items-center text-gray-400">
//                           <FaMapMarkerAlt className="mr-2 text-blue-400" />{" "}
//                           Kigali, Rwanda
//                         </div>
//                         <div className="flex items-center text-gray-400">
//                           <FaClock className="mr-2 text-blue-400" /> Mon-Fri:
//                           9AM-6PM
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Alert */}
//       <Snackbar
//         open={alertMessage.show}
//         autoHideDuration={6000}
//         onClose={() => setAlertMessage({ ...alertMessage, show: false })}
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       >
//         <Alert
//           onClose={() => setAlertMessage({ ...alertMessage, show: false })}
//           severity={alertMessage.type}
//           variant="filled"
//         >
//           {alertMessage.message}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// };

// /* eslint-disable no-unused-vars */

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaLinkedin,
//   FaInstagram,
//   FaYoutube,
//   FaEnvelope,
//   FaPhone,
//   FaArrowRight,
//   FaBars,
//   FaWhatsapp,
//   FaClock,
//   FaConciergeBell,
//   FaHotel,
//   FaUserTie,
//   FaQuoteRight,
//   FaCalendarCheck,
//   FaRegGem,
//   FaStar,
//   FaMapMarkerAlt,
//   FaUser,
//   FaSignInAlt,
//   FaUserPlus,
//   FaSignOutAlt,
//   FaTachometerAlt,
//   FaUserCircle,
//   FaCog,
//   FaBell,
//   FaSearch,
//   FaTimes,
//   FaEye,
//   FaEyeSlash,
//   FaKey,
//   FaLock,
//   FaEnvelope as FaEnvelopeIcon,
//   FaUserAlt,
// } from "react-icons/fa";
// import { MdLocalHotel, MdDashboard } from "react-icons/md";
// import { Button, CircularProgress, Snackbar, Alert } from "@mui/material";
// import logo from "../../assets/images/logo/hotel-icon-black-logo-symbol-your-web-site-design-app-vector-illustration-isolated-white-background-240118715.webp";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export const Navbar = () => {
//   const navigate = useNavigate();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [pagesMenuOpen, setPagesMenuOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   // const [time, setTime] = useState("");
//   const [time, setTime] = useState({
//     time: "",
//     date: "",
//     latitude: "",
//     longitude: "",
//     location: "",
//   });

//   // Auth States
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showRegisterModal, setShowRegisterModal] = useState(false);
//   const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const [showContactModal, setShowContactModal] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [alertMessage, setAlertMessage] = useState({
//     type: "",
//     message: "",
//     show: false,
//   });
//   const [resetMessage, setResetMessage] = useState("");

//   // Success/Fail Modals
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showFailModal, setShowFailModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");

//   // Form States
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//     rememberMe: false,
//   });
//   const [registerData, setRegisterData] = useState({
//     fullname: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     phone: "",
//   });
//   const [forgotPasswordData, setForgotPasswordData] = useState({ email: "" });
//   const [contactData, setContactData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });
//   const [contactErrors, setContactErrors] = useState({});
//   const [contactSubmitting, setContactSubmitting] = useState(false);
//   const [contactSuccess, setContactSuccess] = useState(false);

//   // Time update - FIXED: Now updates every minute instead of every second
//   // useEffect(() => {
//   //   const updateTime = () => {
//   //     const now = new Date();
//   //     const options = { timeZone: "Africa/Kigali", hour: "2-digit", minute: "2-digit", hour12: false };
//   //     setTime(new Intl.DateTimeFormat("en-US", options).format(now));
//   //   };

//   //   updateTime();
//   //   const interval = setInterval(updateTime, 60000); // Update every minute instead of every second
//   //   return () => clearInterval(interval);
//   // }, []);

//   useEffect(() => {
//     const updateTimeAndLocation = () => {
//       const now = new Date();

//       // Get date in readable format
//       const dateOptions = {
//         timeZone: "Africa/Kigali",
//         weekday: "long",
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//       };

//       // Get time
//       const timeOptions = {
//         timeZone: "Africa/Kigali",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         hour12: false,
//       };

//       const formattedDate = new Intl.DateTimeFormat(
//         "en-US",
//         dateOptions,
//       ).format(now);
//       const formattedTime = new Intl.DateTimeFormat(
//         "en-US",
//         timeOptions,
//       ).format(now);

//       // Get location from browser
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             setTime((prev) => ({
//               ...prev,
//               time: formattedTime,
//               date: formattedDate,
//               latitude: latitude.toFixed(4),
//               longitude: longitude.toFixed(4),
//               location: `${latitude.toFixed(4)}°, ${longitude.toFixed(4)}°`,
//             }));
//           },
//           (error) => {
//             // Fallback if location permission denied or error
//             setTime({
//               time: formattedTime,
//               date: formattedDate,
//               latitude: "N/A",
//               longitude: "N/A",
//               location: "Location access denied",
//             });
//             console.log("Geolocation error:", error.message);
//           },
//         );
//       } else {
//         // Fallback if geolocation not supported
//         setTime({
//           time: formattedTime,
//           date: formattedDate,
//           latitude: "N/A",
//           longitude: "N/A",
//           location: "Geolocation not supported",
//         });
//       }
//     };

//     updateTimeAndLocation();
//     const interval = setInterval(updateTimeAndLocation, 60000); // Update every minute
//     return () => clearInterval(interval);
//   }, []);

//   // Check auth
//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     const savedUser = localStorage.getItem("user");
//     if (token && savedUser) {
//       setIsAuthenticated(true);
//       setUser(JSON.parse(savedUser));
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     }
//   }, []);

//   // Scroll effect
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close modals on escape
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === "Escape") {
//         setShowLoginModal(false);
//         setShowRegisterModal(false);
//         setShowForgotPassword(false);
//         setShowContactModal(false);
//         setShowSuccessModal(false);
//         setShowFailModal(false);
//       }
//     };
//     window.addEventListener("keydown", handleEscape);
//     return () => window.removeEventListener("keydown", handleEscape);
//   }, []);

//   const ClockTime = () => {
//     // Format date for display
//     const formatDate = (dateString) => {
//       if (!dateString) return "";
//       const date = new Date();
//       return date.toLocaleDateString("en-US", {
//         weekday: "short",
//         month: "short",
//         day: "numeric",
//       });
//     };

//     return (
//       <motion.div
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600
//         px-2 xsm:px-3 sm:px-4
//         py-1 xsm:py-1.5 sm:py-2
//         rounded-full shadow-lg
//         max-w-[120px] xsm:max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] xl:max-w-[320px]
//         overflow-hidden"
//       >
//         <FaClock
//           className="text-white
//         text-[10px] xsm:text-xs sm:text-sm
//         flex-shrink-0"
//         />

//         <div className="flex flex-col items-start ml-1 xsm:ml-2">
//           <span
//             className="font-semibold text-white leading-tight
//           text-[10px] xsm:text-xs sm:text-sm"
//           >
//             {time.time || "--:--"}
//           </span>
//           <span
//             className="text-white opacity-90 leading-tight
//           text-[8px] xsm:text-[9px] sm:text-[10px]"
//           >
//             {time.date ? formatDate(time.date) : "---"}
//           </span>
//         </div>

//         {time.latitude !== "N/A" && (
//           <>
//             <div
//               className="w-px h-4 xsm:h-5 sm:h-6 bg-white opacity-30
//             mx-1 xsm:mx-2
//             flex-shrink-0"
//             ></div>

//             <div
//               className="flex items-center space-x-0.5 xsm:space-x-1
//             min-w-0 flex-1"
//             >
//               <FaMapMarkerAlt
//                 className="text-white
//               text-[8px] xsm:text-[10px] sm:text-xs
//               flex-shrink-0"
//               />
//               <span
//                 className="text-white opacity-90 truncate
//               text-[8px] xsm:text-[9px] sm:text-[10px]"
//               >
//                 {time.location || `${time.latitude}, ${time.longitude}`}
//               </span>
//             </div>
//           </>
//         )}
//       </motion.div>
//     );
//   };

//   const handleAuthSuccess = (token, userData) => {
//     localStorage.setItem("authToken", token);
//     localStorage.setItem("user", JSON.stringify(userData));
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     setIsAuthenticated(true);
//     setUser(userData);
//     setShowLoginModal(false);
//     setShowRegisterModal(false);
//     setModalMessage(`Welcome ${userData.fullname || userData.name}!`);
//     setShowSuccessModal(true);
//     setTimeout(() => {
//       navigate(
//         userData.status === "admin" ? "/Dash-32793" : "/U-23-Dash-32793",
//       );
//     }, 2000);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("user");
//     delete axios.defaults.headers.common["Authorization"];
//     setIsAuthenticated(false);
//     setUser(null);
//     setModalMessage("Logged out successfully");
//     setShowSuccessModal(true);
//     setTimeout(() => {
//       navigate("/");
//     }, 2000);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/37829/7892/login",
//         loginData,
//       );
//       if (res.data.token) handleAuthSuccess(res.data.token, res.data.user);
//     } catch (err) {
//       setModalMessage(err.response?.data?.message || "Login failed");
//       setShowFailModal(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (registerData.password !== registerData.confirmPassword) {
//       setModalMessage("Passwords do not match");
//       setShowFailModal(true);
//       return;
//     }
//     if (registerData.password.length < 6) {
//       setModalMessage("Password must be at least 6 characters");
//       setShowFailModal(true);
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/37829/7892",
//         registerData,
//       );
//       if (res.data.token) {
//         handleAuthSuccess(res.data.token, res.data.user);
//       } else {
//         setShowRegisterModal(false);
//         setModalMessage("Registration successful! Please login.");
//         setShowSuccessModal(true);
//         setTimeout(() => {
//           setShowLoginModal(true);
//         }, 2000);
//       }
//     } catch (err) {
//       setModalMessage(err.response?.data?.message || "Registration failed");
//       setShowFailModal(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleForgotPassword = async (e) => {
//     e.preventDefault();
//     if (!forgotPasswordData.email) {
//       setModalMessage("Please enter your email");
//       setShowFailModal(true);
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/37829/7892/forgot-password",
//         forgotPasswordData,
//       );
//       setResetMessage(res.data.message || "Reset link sent to your email");
//       setModalMessage("Reset link sent successfully!");
//       setShowSuccessModal(true);
//       setTimeout(() => {
//         setShowForgotPassword(false);
//         setForgotPasswordData({ email: "" });
//         setResetMessage("");
//       }, 2000);
//     } catch (err) {
//       setModalMessage(
//         err.response?.data?.message || "Failed to send reset link",
//       );
//       setShowFailModal(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleContactSubmit = async (e) => {
//     e.preventDefault();

//     // Validate
//     const errors = {};
//     if (!contactData.name.trim()) errors.name = "Name required";
//     if (!contactData.email.trim()) errors.email = "Email required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email))
//       errors.email = "Invalid email";
//     if (!contactData.subject.trim()) errors.subject = "Subject required";
//     if (!contactData.message.trim()) errors.message = "Message required";

//     if (Object.keys(errors).length > 0) {
//       setContactErrors(errors);
//       return;
//     }

//     setContactSubmitting(true);
//     try {
//       await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/83920/92303",
//         contactData,
//       );
//       setContactSuccess(true);
//       setContactData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//       });
//       setModalMessage("Message sent successfully!");
//       setShowSuccessModal(true);
//       setTimeout(() => {
//         setShowContactModal(false);
//         setContactSuccess(false);
//       }, 2000);
//     } catch (error) {
//       setModalMessage("Failed to send message");
//       setShowFailModal(true);
//     } finally {
//       setContactSubmitting(false);
//     }
//   };

//   const navLinks = [
//     { name: "Home", href: "/" },
//     {
//       name: "About",
//       href: "/A-7483-783/34",
//     },
//     {
//       name: "Services",
//       href: "/S-6832-342/34",
//     },
//     {
//       name: "Rooms",
//       href: "/R-8763-327/34",
//     },
//     {
//       name: "Contact",
//       href: "#",

//       onClick: () => setShowContactModal(true),
//     },
//   ];

//   const pageLinks = [
//     {
//       name: "Booking",
//       href: "/B-7839-283/34",
//       icon: <FaCalendarCheck className="mr-2" />,
//     },
//     {
//       name: "Our Team",
//       href: "/O-2973-342/34",
//       icon: <FaUserTie className="mr-2" />,
//     },
//     {
//       name: "Testimonial",
//       href: "/T-8732-452/34",
//       icon: <FaQuoteRight className="mr-2" />,
//     },
//   ];

//   const socialLinks = [
//     {
//       icon: <FaFacebook />,
//       href: "https://facebook.com/",
//       color: "text-blue-500",
//     },
//     {
//       icon: <FaTwitter />,
//       href: "https://twitter.com/",
//       color: "text-blue-400",
//     },
//     {
//       icon: <FaLinkedin />,
//       href: "https://linkedIn.com/",
//       color: "text-blue-600",
//     },
//     {
//       icon: <FaInstagram />,
//       href: "https://Instagram.com/",
//       color: "text-pink-500",
//     },
//     {
//       icon: <FaYoutube />,
//       href: "https://youtube.com/",
//       color: "text-red-500",
//     },
//   ];

//   // Modal variants
//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 50 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 300, damping: 25 },
//     },
//     exit: { opacity: 0, scale: 0.8, y: 50 },
//   };

//   const overlayVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//     exit: { opacity: 0 },
//   };

//   return (
//     <>
//       <header className="w-full relative z-50">
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-95" />

//         {/* Top Bar */}
//         <motion.div className="hidden lg:flex bg-gradient-to-r from-gray-900 to-black text-white border-b border-gray-800 relative">
//           <div className="container mx-auto flex justify-between items-center py-2 px-5">
//             <div className="flex space-x-6">
//               {[
//                 { icon: FaEnvelope, text: "info@example.com" },
//                 { icon: FaPhone, text: "+250 (78) 794-4577" },
//                 { icon: FaWhatsapp, text: "+250 (72) 755-6145" },
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center">
//                   <item.icon className="text-blue-400 mr-2 text-sm" />
//                   <span className="text-sm hover:text-blue-400 transition">
//                     {item.text}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <ClockTime />

//             <div className="flex space-x-3">
//               {socialLinks.map((link, i) => (
//                 <Link key={i} to={link.href}>
//                   <div
//                     className={`${link.color} hover:text-white text-lg transition`}
//                   ></div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Main Nav */}
//         <motion.div
//           className={`relative transition-all ${scrolled ? "bg-gray-900 shadow-2xl" : "bg-transparent"}`}
//         >
//           <div className="flex items-center">
//             {/* Logo */}
//             <div className="hidden lg:flex w-1/4 h-24 items-center justify-center">
//               <Link to="/">
//                 <img src={logo} alt="Logo" className="w-16 rounded-xl" />
//               </Link>
//             </div>

//             <div className="w-full lg:w-3/4">
//               <div className="flex justify-between items-center h-24 px-4 lg:px-0">
//                 {/* Mobile Logo */}
//                 <Link to="/" className="lg:hidden">
//                   <img src={logo} alt="Logo" className="w-12 rounded-xl" />
//                 </Link>

//                 {/* Mobile Time & Auth */}
//                 <div className="flex items-center space-x-3 lg:hidden">
//                   <ClockTime />

//                   {isAuthenticated ? (
//                     <div className="relative">
//                       <button
//                         onClick={() => setUserMenuOpen(!userMenuOpen)}
//                         className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1.5 rounded-full"
//                       >
//                         <FaUserCircle className="text-white" />
//                         <span className="text-white text-sm font-medium">
//                           {user?.fullname?.split(" ")[0]}
//                         </span>
//                       </button>

//                       <AnimatePresence>
//                         {userMenuOpen && (
//                           <motion.div
//                             initial={{ opacity: 0, y: -10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -10 }}
//                             className="absolute right-0 mt-2 w-44 bg-gray-800 rounded-xl shadow-2xl z-50 border border-gray-700"
//                           >
//                             <div className="p-3 border-b border-gray-700">
//                               <p className="text-white text-sm font-medium truncate">
//                                 {user?.fullname}
//                               </p>
//                               <p className="text-gray-400 text-xs truncate">
//                                 {user?.email}
//                               </p>
//                             </div>
//                             <button
//                               onClick={() => {
//                                 navigate(
//                                   user?.status === "admin"
//                                     ? "/Dash-32793"
//                                     : "/U-23-Dash-32793",
//                                 );
//                                 setUserMenuOpen(false);
//                               }}
//                               className="w-full px-4 py-2.5 text-left bg-gradient-to-b from-blue-400 to-indigo-400 transition flex items-center text-sm"
//                             >
//                               <MdDashboard className="mr-2" />
//                             </button>
//                             <button
//                               onClick={handleLogout}
//                               className="w-full px-4 py-2.5 text-left bg-gradient-to-b from-red-300 to-red-400 transition flex items-center text-sm"
//                             >
//                               <FaSignOutAlt className="mr-2" />
//                             </button>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   ) : (
//                     <div className="flex items-center space-x-2">
//                       <button
//                         onClick={() => setShowLoginModal(true)}
//                         className="bg-gradient-to-t from-blue-400 to-blue-600 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center"
//                       >
//                         <FaSignInAlt className="mr-1" />
//                       </button>
//                       <button
//                         onClick={() => setShowRegisterModal(true)}
//                         className="bg-gradient-to-b from-blue-400 to-indigo-400 text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center"
//                       >
//                         <FaUserPlus className="mr-1" />
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <button
//                   onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                   className="lg:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition"
//                 >
//                   {mobileMenuOpen ? (
//                     <FaTimes className="text-2xl" />
//                   ) : (
//                     <FaBars className="text-2xl" />
//                   )}
//                 </button>

//                 {/* Desktop Nav */}
//                 <nav className="hidden lg:flex items-center space-x-4 pr-6">
//                   {navLinks.map((link, i) => (
//                     <div key={i} className="relative group">
//                       {link.name === "Pages" ? (
//                         <div>
//                           <button
//                             onClick={() => setPagesMenuOpen(!pagesMenuOpen)}
//                             className="flex items-center px-3 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 transition"
//                           >
//                             {link.name}{" "}
//                             <FaArrowRight
//                               className={`ml-2 transition ${pagesMenuOpen ? "rotate-90" : ""}`}
//                             />
//                           </button>

//                           <AnimatePresence>
//                             {pagesMenuOpen && (
//                               <motion.div
//                                 initial={{ opacity: 0, y: -10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -10 }}
//                                 className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-xl shadow-2xl z-50 border border-gray-700"
//                               >
//                                 {pageLinks.map((page, j) => (
//                                   <Link key={j} to={page.href}>
//                                     <button
//                                       onClick={() => setPagesMenuOpen(false)}
//                                       className="w-full px-4 py-2.5 text-left bg-gradient-to-b from-blue-400 to-indigo-400 transition flex items-center text-sm"
//                                     >
//                                       {page.name}
//                                     </button>
//                                   </Link>
//                                 ))}
//                               </motion.div>
//                             )}
//                           </AnimatePresence>
//                         </div>
//                       ) : link.onClick ? (
//                         <button
//                           onClick={link.onClick}
//                           className="flex items-center px-3 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 transition"
//                         >
//                           {link.name}
//                         </button>
//                       ) : (
//                         <Link to={link.href}>
//                           <button className="flex items-center px-3 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 transition">
//                             {link.name}
//                           </button>
//                         </Link>
//                       )}
//                       <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition" />
//                     </div>
//                   ))}

//                   {/* Desktop Auth */}
//                   {isAuthenticated ? (
//                     <div className="relative">
//                       <button
//                         onClick={() => setUserMenuOpen(!userMenuOpen)}
//                         className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-xl text-white"
//                       >
//                         <FaUserCircle />{" "}
//                         <span>{user?.fullname?.split(" ")[0]}</span>
//                       </button>

//                       <AnimatePresence>
//                         {userMenuOpen && (
//                           <motion.div
//                             initial={{ opacity: 0, y: -10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -10 }}
//                             className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-xl shadow-2xl z-50 border border-gray-700"
//                           >
//                             <div className="p-4 border-b border-gray-700">
//                               <p className="text-white font-medium truncate">
//                                 {user?.fullname}
//                               </p>
//                               <p className="text-gray-400 text-sm truncate">
//                                 {user?.email}
//                               </p>
//                             </div>
//                             <button
//                               onClick={() => {
//                                 navigate(
//                                   user?.status === "admin"
//                                     ? "/Dash-32793"
//                                     : "/U-23-Dash-32793",
//                                 );
//                                 setUserMenuOpen(false);
//                               }}
//                               className="w-full px-4 py-3 text-left bg-gradient-to-b from-blue-400 to-indigo-400 transition flex items-center"
//                             >
//                               <MdDashboard className="mr-2" />
//                             </button>
//                             <button
//                               onClick={handleLogout}
//                               className="w-full px-4 py-3 text-left bg-gradient-to-b from-red-300 to-red-400 transition flex items-center"
//                             >
//                               <FaSignOutAlt className="mr-2" />
//                             </button>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   ) : (
//                     <div className="flex items-center space-x-3">
//                       <button
//                         onClick={() => setShowLoginModal(true)}
//                         className="bg-gradient-to-t from-blue-400 to-blue-600 px-6 py-2 rounded-xl font-bold transition"
//                       >
//                         <FaSignInAlt className="inline mr-2" />
//                       </button>
//                       <button
//                         onClick={() => setShowRegisterModal(true)}
//                         className="bg-gradient-to-b from-violet-500 to-indigo-500 text-white px-6 py-2 rounded-xl font-bold transition"
//                       >
//                         <FaUserPlus className="inline mr-2" />
//                       </button>
//                     </div>
//                   )}
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Mobile Menu - COMPLETELY REWRITTEN TO ENSURE VISIBILITY */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.2 }}
//               className="lg:hidden bg-gray-900 border-t border-gray-800 shadow-xl"
//               style={{ position: "relative", zIndex: 40 }}
//             >
//               <div className="py-4 px-4 space-y-2">
//                 {/* Main Navigation Links */}
//                 {navLinks.map((link, index) => (
//                   <div key={index}>
//                     {link.onClick ? (
//                       <button
//                         onClick={() => {
//                           link.onClick();
//                           setMobileMenuOpen(false);
//                         }}
//                         className="w-full text-left px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium flex items-center hover:from-blue-600 hover:to-indigo-700 transition-all"
//                       >
//                         <span>{link.name}</span>
//                       </button>
//                     ) : (
//                       <Link
//                         to={link.href}
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         <div className="w-full text-left px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium flex items-center hover:from-blue-600 hover:to-indigo-700 transition-all cursor-pointer">
//                           <span>{link.name}</span>
//                         </div>
//                       </Link>
//                     )}
//                   </div>
//                 ))}

//                 {/* Quick Links Section */}
//                 <div className="mt-6 pt-4 border-t border-gray-800">
//                   <h3 className="text-blue-400 font-semibold px-4 mb-3">
//                     Quick Links
//                   </h3>
//                   <div className="space-y-2">
//                     {pageLinks.map((page, index) => (
//                       <Link
//                         key={index}
//                         to={page.href}
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         <button className="px-8 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg transition-all flex items-center cursor-pointer">
//                           <span>{page.name}</span>
//                         </button>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Contact Info for Mobile */}
//                 <div className="mt-6 pt-4 border-t border-gray-800">
//                   <div className="space-y-3 px-4">
//                     <div className="flex items-center text-gray-400">
//                       <FaPhone className="text-blue-400 mr-3" />
//                       <span className="text-sm">+250 (78) 794-4577</span>
//                     </div>
//                     <div className="flex items-center text-gray-400">
//                       <FaEnvelope className="text-blue-400 mr-3" />
//                       <span className="text-sm">info@example.com</span>
//                     </div>
//                     <div className="flex items-center text-gray-400">
//                       <FaWhatsapp className="text-blue-400 mr-3" />
//                       <span className="text-sm">+250 (72) 755-6145</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>

//       {/* Login Modal */}
//       <AnimatePresence>
//         {showLoginModal && (
//           <>
//             <motion.div
//               variants={overlayVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]"
//               onClick={() => setShowLoginModal(false)}
//             />
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700"
//             >
//               <div className="p-6">
//                 <button
//                   onClick={() => setShowLoginModal(false)}
//                   className="absolute top-4 right-4 bg-gradient-to-b from-red-500 to-red-700 p-2 rounded-full"
//                 >
//                   <FaTimes />
//                 </button>

//                 <div className="text-center mb-6">
//                   <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
//                     <FaUserCircle className="text-4xl text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-white">
//                     Welcome Back
//                   </h2>
//                 </div>

//                 <form onSubmit={handleLogin} className="text-white">
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-gray-300 text-sm mb-1">
//                         Email
//                       </label>
//                       <div className="relative">
//                         <FaEnvelopeIcon className="absolute left-3 top-3 text-gray-400" />
//                         <input
//                           type="email"
//                           value={loginData.email}
//                           onChange={(e) =>
//                             setLoginData({
//                               ...loginData,
//                               email: e.target.value,
//                             })
//                           }
//                           className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-blue-500"
//                           placeholder="Enter email"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 text-sm mb-1">
//                         Password
//                       </label>
//                       <div className="relative">
//                         <FaLock className="absolute left-3 top-3 text-gray-400" />
//                         <input
//                           type={showPassword ? "text" : "password"}
//                           value={loginData.password}
//                           onChange={(e) =>
//                             setLoginData({
//                               ...loginData,
//                               password: e.target.value,
//                             })
//                           }
//                           className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-10 py-2.5 text-white focus:border-blue-500"
//                           placeholder="Enter password"
//                           required
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowPassword(!showPassword)}
//                           className="absolute right-3 top-3 text-gray-400"
//                         >
//                           {showPassword ? <FaEyeSlash /> : <FaEye />}
//                         </button>
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-between">
//                       <label className="flex items-center space-x-2">
//                         <input
//                           type="checkbox"
//                           checked={loginData.rememberMe}
//                           onChange={(e) =>
//                             setLoginData({
//                               ...loginData,
//                               rememberMe: e.target.checked,
//                             })
//                           }
//                           className="rounded border-gray-600 bg-gray-800 text-blue-600"
//                         />
//                         <span className="text-gray-300 text-sm">Remember</span>
//                       </label>
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setShowLoginModal(false);
//                           setShowForgotPassword(true);
//                         }}
//                         className="text-blue-400 hover:text-blue-300 text-sm"
//                       >
//                         Forgot your Password?
//                       </button>
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center"
//                     >
//                       {loading ? (
//                         <CircularProgress size={20} color="inherit" />
//                       ) : (
//                         <>
//                           <FaSignInAlt className="mr-2" /> Sign In
//                         </>
//                       )}
//                     </button>

//                     <p className="text-center text-gray-400 text-sm">
//                       No account?{" "}
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setShowLoginModal(false);
//                           setShowRegisterModal(true);
//                         }}
//                         className="text-purple-400 hover:text-purple-300 font-semibold"
//                       >
//                         Register
//                       </button>
//                     </p>
//                   </div>
//                 </form>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Register Modal */}
//       <AnimatePresence>
//         {showRegisterModal && (
//           <>
//             <motion.div
//               variants={overlayVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]"
//               onClick={() => setShowRegisterModal(false)}
//             />
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700"
//             >
//               <div className="p-6 max-h-[80vh] overflow-y-auto">
//                 <button
//                   onClick={() => setShowRegisterModal(false)}
//                   className="absolute top-4 right-4 bg-gradient-to-b from-red-500 to-red-700 p-2 rounded-full"
//                 >
//                   <FaTimes />
//                 </button>

//                 <div className="text-center mb-6">
//                   <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
//                     <FaUserPlus className="text-4xl text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-white">
//                     Create Account
//                   </h2>
//                 </div>

//                 <form onSubmit={handleRegister} className="text-white">
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-gray-300 text-sm mb-1">
//                         Full Name
//                       </label>
//                       <div className="relative">
//                         <FaUserAlt className="absolute left-3 top-3 text-gray-400" />
//                         <input
//                           type="text"
//                           value={registerData.fullname}
//                           onChange={(e) =>
//                             setRegisterData({
//                               ...registerData,
//                               fullname: e.target.value,
//                             })
//                           }
//                           className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500"
//                           placeholder="Full name"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 text-sm mb-1">
//                         Email
//                       </label>
//                       <div className="relative">
//                         <FaEnvelopeIcon className="absolute left-3 top-3 text-gray-400" />
//                         <input
//                           type="email"
//                           value={registerData.email}
//                           onChange={(e) =>
//                             setRegisterData({
//                               ...registerData,
//                               email: e.target.value,
//                             })
//                           }
//                           className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500"
//                           placeholder="Email"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 text-sm mb-1">
//                         Phone
//                       </label>
//                       <div className="relative">
//                         <FaPhone className="absolute left-3 top-3 text-gray-400" />
//                         <input
//                           type="tel"
//                           value={registerData.phone}
//                           onChange={(e) =>
//                             setRegisterData({
//                               ...registerData,
//                               phone: e.target.value,
//                             })
//                           }
//                           className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500"
//                           placeholder="+250..."
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 text-sm mb-1">
//                         Password
//                       </label>
//                       <div className="relative">
//                         <FaLock className="absolute left-3 top-3 text-gray-400" />
//                         <input
//                           type={showPassword ? "text" : "password"}
//                           value={registerData.password}
//                           onChange={(e) =>
//                             setRegisterData({
//                               ...registerData,
//                               password: e.target.value,
//                             })
//                           }
//                           className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-10 py-2.5 text-white focus:border-purple-500"
//                           placeholder="Min. 6 characters"
//                           required
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowPassword(!showPassword)}
//                           className="absolute right-3 top-3 text-gray-400"
//                         >
//                           {showPassword ? <FaEyeSlash /> : <FaEye />}
//                         </button>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 text-sm mb-1">
//                         Confirm Password
//                       </label>
//                       <div className="relative">
//                         <FaKey className="absolute left-3 top-3 text-gray-400" />
//                         <input
//                           type="password"
//                           value={registerData.confirmPassword}
//                           onChange={(e) =>
//                             setRegisterData({
//                               ...registerData,
//                               confirmPassword: e.target.value,
//                             })
//                           }
//                           className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500"
//                           placeholder="Confirm password"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center"
//                     >
//                       {loading ? (
//                         <CircularProgress size={20} color="inherit" />
//                       ) : (
//                         <>
//                           <FaUserPlus className="mr-2" /> Register
//                         </>
//                       )}
//                     </button>

//                     <p className="text-center text-gray-400 text-sm">
//                       If you have account?{" "}
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setShowRegisterModal(false);
//                           setShowLoginModal(true);
//                         }}
//                         className="text-blue-400 hover:text-blue-300 font-semibold"
//                       >
//                         Login
//                       </button>
//                     </p>
//                   </div>
//                 </form>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Forgot Password Modal */}
//       <AnimatePresence>
//         {showForgotPassword && (
//           <>
//             <motion.div
//               variants={overlayVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]"
//               onClick={() => setShowForgotPassword(false)}
//             />
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700"
//             >
//               <div className="p-6">
//                 <button
//                   onClick={() => setShowForgotPassword(false)}
//                   className="absolute top-4 right-4 bg-gradient-to-b from-red-500 to-red-700 p-2 rounded-full"
//                 >
//                   <FaTimes />
//                 </button>

//                 <div className="text-center mb-6">
//                   <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center">
//                     <FaKey className="text-4xl text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-white">
//                     Forgot Password?
//                   </h2>
//                 </div>

//                 {resetMessage && (
//                   <div className="mb-4 p-3 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg">
//                     <p className="text-green-400 text-sm text-center">
//                       {resetMessage}
//                     </p>
//                   </div>
//                 )}

//                 <form onSubmit={handleForgotPassword} className="text-white">
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-gray-300 text-sm mb-1">
//                         Email
//                       </label>
//                       <div className="relative">
//                         <FaEnvelopeIcon className="absolute left-3 top-3 text-gray-400" />
//                         <input
//                           type="email"
//                           value={forgotPasswordData.email}
//                           onChange={(e) =>
//                             setForgotPasswordData({ email: e.target.value })
//                           }
//                           className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-yellow-500"
//                           placeholder="Enter email"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold py-3 rounded-lg"
//                     >
//                       {loading ? (
//                         <CircularProgress size={20} color="inherit" />
//                       ) : (
//                         "Send Reset Link"
//                       )}
//                     </button>

//                     <p className="text-center text-gray-400 text-sm">
//                       If you remember?{" "}
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setShowForgotPassword(false);
//                           setShowLoginModal(true);
//                         }}
//                         className="text-blue-400 hover:text-blue-300 font-semibold"
//                       >
//                         Login
//                       </button>
//                     </p>
//                   </div>
//                 </form>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Contact Modal */}
//       <AnimatePresence>
//         {showContactModal && (
//           <>
//             <motion.div
//               variants={overlayVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]"
//               onClick={() => setShowContactModal(false)}
//             />
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700"
//             >
//               <div className="p-6 max-h-[80vh] overflow-y-auto">
//                 <button
//                   onClick={() => {
//                     setShowContactModal(false);
//                     setContactSuccess(false);
//                     setContactErrors({});
//                   }}
//                   className="absolute top-4 right-4 bg-gradient-to-b from-red-500 to-red-700 p-2 rounded-full z-10"
//                 >
//                   <FaTimes />
//                 </button>

//                 {contactSuccess ? (
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="text-center py-8"
//                   >
//                     <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <svg
//                         className="w-10 h-10 text-white"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     </div>
//                     <h3 className="text-xl font-semibold text-white mb-2">
//                       Message Sent!
//                     </h3>
//                     <p className="text-gray-400">We'll get back to you soon.</p>
//                   </motion.div>
//                 ) : (
//                   <>
//                     <div className="text-center mb-6">
//                       <h2 className="text-2xl font-bold text-white">
//                         Contact Us
//                       </h2>
//                       <p className="text-gray-400 text-sm">
//                         We'd love to hear from you
//                       </p>
//                     </div>

//                     <form onSubmit={handleContactSubmit} className="text-white">
//                       <div className="space-y-4">
//                         <div>
//                           <input
//                             type="text"
//                             placeholder="Full Name *"
//                             value={contactData.name}
//                             onChange={(e) =>
//                               setContactData({
//                                 ...contactData,
//                                 name: e.target.value,
//                               })
//                             }
//                             className={`w-full bg-gray-800 border ${contactErrors.name ? "border-red-500" : "border-gray-700"} rounded-lg px-4 py-3 text-white focus:border-blue-500`}
//                           />
//                           {contactErrors.name && (
//                             <p className="text-red-500 text-xs mt-1">
//                               {contactErrors.name}
//                             </p>
//                           )}
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                           <div>
//                             <input
//                               type="email"
//                               placeholder="Email *"
//                               value={contactData.email}
//                               onChange={(e) =>
//                                 setContactData({
//                                   ...contactData,
//                                   email: e.target.value,
//                                 })
//                               }
//                               className={`w-full bg-gray-800 border ${contactErrors.email ? "border-red-500" : "border-gray-700"} rounded-lg px-4 py-3 text-white focus:border-blue-500`}
//                             />
//                             {contactErrors.email && (
//                               <p className="text-red-500 text-xs mt-1">
//                                 {contactErrors.email}
//                               </p>
//                             )}
//                           </div>
//                           <div>
//                             <input
//                               type="tel"
//                               placeholder="Phone"
//                               value={contactData.phone}
//                               onChange={(e) =>
//                                 setContactData({
//                                   ...contactData,
//                                   phone: e.target.value,
//                                 })
//                               }
//                               className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500"
//                             />
//                           </div>
//                         </div>

//                         <div>
//                           <input
//                             type="text"
//                             placeholder="Subject *"
//                             value={contactData.subject}
//                             onChange={(e) =>
//                               setContactData({
//                                 ...contactData,
//                                 subject: e.target.value,
//                               })
//                             }
//                             className={`w-full bg-gray-800 border ${contactErrors.subject ? "border-red-500" : "border-gray-700"} rounded-lg px-4 py-3 text-white focus:border-blue-500`}
//                           />
//                           {contactErrors.subject && (
//                             <p className="text-red-500 text-xs mt-1">
//                               {contactErrors.subject}
//                             </p>
//                           )}
//                         </div>

//                         <div>
//                           <textarea
//                             rows="4"
//                             placeholder="Message *"
//                             value={contactData.message}
//                             onChange={(e) =>
//                               setContactData({
//                                 ...contactData,
//                                 message: e.target.value,
//                               })
//                             }
//                             className={`w-full bg-gray-800 border ${contactErrors.message ? "border-red-500" : "border-gray-700"} rounded-lg px-4 py-3 text-white focus:border-blue-500`}
//                           />
//                           {contactErrors.message && (
//                             <p className="text-red-500 text-xs mt-1">
//                               {contactErrors.message}
//                             </p>
//                           )}
//                         </div>

//                         <button
//                           type="submit"
//                           disabled={contactSubmitting}
//                           className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center"
//                         >
//                           {contactSubmitting ? (
//                             <CircularProgress size={20} color="inherit" />
//                           ) : (
//                             "Send Message"
//                           )}
//                         </button>
//                       </div>
//                     </form>

//                     <div className="mt-6 pt-4 border-t border-gray-800">
//                       <div className="grid grid-cols-2 gap-4 text-sm">
//                         <div className="flex items-center text-gray-400">
//                           <FaPhone className="mr-2 text-blue-400" /> +250 787
//                           944 577
//                         </div>
//                         <div className="flex items-center text-gray-400">
//                           <FaEnvelope className="mr-2 text-blue-400" />{" "}
//                           info@hotel.com
//                         </div>
//                         <div className="flex items-center text-gray-400">
//                           <FaMapMarkerAlt className="mr-2 text-blue-400" />{" "}
//                           Kigali, Rwanda
//                         </div>
//                         <div className="flex items-center text-gray-400">
//                           <FaClock className="mr-2 text-blue-400" /> Mon-Fri:
//                           9AM-6PM
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Success Modal */}
//       <AnimatePresence>
//         {showSuccessModal && (
//           <>
//             <motion.div
//               variants={overlayVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[200]"
//               onClick={() => setShowSuccessModal(false)}
//             />
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-gray-900 rounded-2xl shadow-2xl z-[201] border border-green-500"
//             >
//               <div className="p-6 text-center">
//                 <div className="w-20 h-20 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
//                   <svg
//                     className="w-10 h-10 text-white"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-2">
//                   Success!
//                 </h3>
//                 <p className="text-gray-400 mb-4">{modalMessage}</p>
//                 <button
//                   onClick={() => setShowSuccessModal(false)}
//                   className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
//                 >
//                   Close
//                 </button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Fail Modal */}
//       <AnimatePresence>
//         {showFailModal && (
//           <>
//             <motion.div
//               variants={overlayVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[200]"
//               onClick={() => setShowFailModal(false)}
//             />
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-gray-900 rounded-2xl shadow-2xl z-[201] border border-red-500"
//             >
//               <div className="p-6 text-center">
//                 <div className="w-20 h-20 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center">
//                   <svg
//                     className="w-10 h-10 text-white"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-2">
//                   Error!
//                 </h3>
//                 <p className="text-gray-400 mb-4">{modalMessage}</p>
//                 <button
//                   onClick={() => setShowFailModal(false)}
//                   className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
//                 >
//                   Close
//                 </button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Alert */}
//       <Snackbar
//         open={alertMessage.show}
//         autoHideDuration={6000}
//         onClose={() => setAlertMessage({ ...alertMessage, show: false })}
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       >
//         <Alert
//           onClose={() => setAlertMessage({ ...alertMessage, show: false })}
//           severity={alertMessage.type}
//           variant="filled"
//         >
//           {alertMessage.message}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// };

/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaArrowRight,
  FaBars,
  FaWhatsapp,
  FaClock,
  FaConciergeBell,
  FaHotel,
  FaUserTie,
  FaQuoteRight,
  FaCalendarCheck,
  FaRegGem,
  FaStar,
  FaMapMarkerAlt,
  FaUser,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaTachometerAlt,
  FaUserCircle,
  FaCog,
  FaBell,
  FaSearch,
  FaTimes,
  FaEye,
  FaEyeSlash,
  FaKey,
  FaLock,
  FaEnvelope as FaEnvelopeIcon,
  FaUserAlt,
} from "react-icons/fa";
import { MdLocalHotel, MdDashboard } from "react-icons/md";
import { Button, CircularProgress, Snackbar, Alert } from "@mui/material";
import logo from "../../assets/images/logo/hotel-icon-black-logo-symbol-your-web-site-design-app-vector-illustration-isolated-white-background-240118715.webp";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const [time, setTime] = useState("");
  const [time, setTime] = useState({
    time: "",
    date: "",
    latitude: "",
    longitude: "",
    location: "",
  });

  // Auth States
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    type: "",
    message: "",
    show: false,
  });
  const [resetMessage, setResetMessage] = useState("");

  // Success/Fail Modals
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Form States
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [registerData, setRegisterData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [forgotPasswordData, setForgotPasswordData] = useState({ email: "" });
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [contactErrors, setContactErrors] = useState({});
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  // Time update - FIXED: Now updates every minute instead of every second
  // useEffect(() => {
  //   const updateTime = () => {
  //     const now = new Date();
  //     const options = { timeZone: "Africa/Kigali", hour: "2-digit", minute: "2-digit", hour12: false };
  //     setTime(new Intl.DateTimeFormat("en-US", options).format(now));
  //   };

  //   updateTime();
  //   const interval = setInterval(updateTime, 60000); // Update every minute instead of every second
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const updateTimeAndLocation = () => {
      const now = new Date();

      // Get date in readable format
      const dateOptions = {
        timeZone: "Africa/Kigali",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      // Get time
      const timeOptions = {
        timeZone: "Africa/Kigali",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };

      const formattedDate = new Intl.DateTimeFormat(
        "en-US",
        dateOptions,
      ).format(now);
      const formattedTime = new Intl.DateTimeFormat(
        "en-US",
        timeOptions,
      ).format(now);

      // Get location from browser
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setTime((prev) => ({
              ...prev,
              time: formattedTime,
              date: formattedDate,
              latitude: latitude.toFixed(4),
              longitude: longitude.toFixed(4),
              location: `${latitude.toFixed(4)}°, ${longitude.toFixed(4)}°`,
            }));
          },
          (error) => {
            // Fallback if location permission denied or error
            setTime({
              time: formattedTime,
              date: formattedDate,
              latitude: "N/A",
              longitude: "N/A",
              location: "Location access denied",
            });
            console.log("Geolocation error:", error.message);
          },
        );
      } else {
        // Fallback if geolocation not supported
        setTime({
          time: formattedTime,
          date: formattedDate,
          latitude: "N/A",
          longitude: "N/A",
          location: "Geolocation not supported",
        });
      }
    };

    updateTimeAndLocation();
    const interval = setInterval(updateTimeAndLocation, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // Check auth
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const savedUser = localStorage.getItem("user");
    if (token && savedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(savedUser));
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close modals on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setShowLoginModal(false);
        setShowRegisterModal(false);
        setShowForgotPassword(false);
        setShowContactModal(false);
        setShowSuccessModal(false);
        setShowFailModal(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  
const ClockTime = () => {
  const [time, setTime] = useState({
    time: "",
    date: "",
    latitude: "N/A",
    longitude: "N/A",
    location: "",
  });

  // Format date
  const formatDate = (dateObj) => {
    return dateObj.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  // Format time
  const formatTime = (dateObj) => {
    return dateObj.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  // Live clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime((prev) => ({
        ...prev,
        time: formatTime(now),
        date: now,
      }));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  // Get user location
  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setTime((prev) => ({
          ...prev,
          latitude: position.coords.latitude.toFixed(4),
          longitude: position.coords.longitude.toFixed(4),
        }));
      },
      (error) => {
        console.log("Location error:", error.message);
      }
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        flex items-center
        px-2 xsm:px-3 sm:px-4 
        py-1 xsm:py-1.5 sm:py-2 
        rounded-full shadow-lg
        max-w-[120px] xsm:max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] xl:max-w-[320px]
        overflow-hidden
        md:ml-auto
      "
    >
      <FaClock
        className="
          text-white 
          text-[10px] xsm:text-xs sm:text-sm 
          flex-shrink-0
        "
      />

      <div className="flex flex-col items-start ml-1 xsm:ml-2">
        <span
          className="
            font-semibold text-white leading-tight
            text-[10px] xsm:text-xs sm:text-sm
          "
        >
          {time.time || "--:--"}
        </span>

        <span
          className="
            text-white opacity-90 leading-tight
            text-[8px] xsm:text-[9px] sm:text-[10px]
          "
        >
          {time.date ? formatDate(time.date) : "---"}
        </span>
      </div>

      {time.latitude !== "N/A" && (
        <>
          <div
            className="
              w-px h-4 xsm:h-5 sm:h-6 
              bg-white opacity-30 
              mx-1 xsm:mx-2 
              flex-shrink-0
            "
          ></div>

          <div
            className="
              flex items-center space-x-0.5 xsm:space-x-1 
              min-w-0 flex-1
            "
          >
            <FaMapMarkerAlt
              className="
                text-white 
                text-[8px] xsm:text-[10px] sm:text-xs 
                flex-shrink-0
              "
            />

            <span
              className="
                text-white opacity-90 truncate
                text-[8px] xsm:text-[9px] sm:text-[10px]
              "
            >
              {time.location ||
                `${time.latitude}, ${time.longitude}`}
            </span>
          </div>
        </>
      )}
    </motion.div>
  );
};


  const handleAuthSuccess = (token, userData) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(userData));
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setIsAuthenticated(true);
    setUser(userData);
    setShowLoginModal(false);
    setShowRegisterModal(false);
    setModalMessage(`Welcome ${userData.fullname || userData.name}!`);
    setShowSuccessModal(true);
    setTimeout(() => {
      navigate(
        userData.status === "admin" ? "/Dash-32793" : "/U-23-Dash-32793",
      );
    }, 2000);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
    setIsAuthenticated(false);
    setUser(null);
    setModalMessage("Logged out successfully");
    setShowSuccessModal(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://hotel-nodejs-oa32.onrender.com/37829/7892/login",
        loginData,
      );
      if (res.data.token) handleAuthSuccess(res.data.token, res.data.user);
    } catch (err) {
      setModalMessage(err.response?.data?.message || "Login failed");
      setShowFailModal(true);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      setModalMessage("Passwords do not match");
      setShowFailModal(true);
      return;
    }
    if (registerData.password.length < 6) {
      setModalMessage("Password must be at least 6 characters");
      setShowFailModal(true);
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://hotel-nodejs-oa32.onrender.com/37829/7892",
        registerData,
      );
      if (res.data.token) {
        handleAuthSuccess(res.data.token, res.data.user);
      } else {
        setShowRegisterModal(false);
        setModalMessage("Registration successful! Please login.");
        setShowSuccessModal(true);
        setTimeout(() => {
          setShowLoginModal(true);
        }, 2000);
      }
    } catch (err) {
      setModalMessage(err.response?.data?.message || "Registration failed");
      setShowFailModal(true);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!forgotPasswordData.email) {
      setModalMessage("Please enter your email");
      setShowFailModal(true);
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://hotel-nodejs-oa32.onrender.com/37829/7892/forgot-password",
        forgotPasswordData,
      );
      setResetMessage(res.data.message || "Reset link sent to your email");
      setModalMessage("Reset link sent successfully!");
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowForgotPassword(false);
        setForgotPasswordData({ email: "" });
        setResetMessage("");
      }, 2000);
    } catch (err) {
      setModalMessage(
        err.response?.data?.message || "Failed to send reset link",
      );
      setShowFailModal(true);
    } finally {
      setLoading(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    // Validate
    const errors = {};
    if (!contactData.name.trim()) errors.name = "Name required";
    if (!contactData.email.trim()) errors.email = "Email required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email))
      errors.email = "Invalid email";
    if (!contactData.subject.trim()) errors.subject = "Subject required";
    if (!contactData.message.trim()) errors.message = "Message required";

    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      return;
    }

    setContactSubmitting(true);
    try {
      await axios.post(
        "https://hotel-nodejs-oa32.onrender.com/83920/92303",
        contactData,
      );
      setContactSuccess(true);
      setContactData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setModalMessage("Message sent successfully!");
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowContactModal(false);
        setContactSuccess(false);
      }, 2000);
    } catch (error) {
      setModalMessage("Failed to send message");
      setShowFailModal(true);
    } finally {
      setContactSubmitting(false);
    }
  };

  const handleDashboardClick = () => {
    if (isAuthenticated && user) {
      navigate(user?.status === "admin" ? "/Dash-32793" : "/U-23-Dash-32793");
      setUserMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/A-7483-783/34",
    },
    {
      name: "Services",
      href: "/S-6832-342/34",
    },
    {
      name: "Rooms",
      href: "/R-8763-327/34",
    },
    {
      name: "Contact",
      href: "#",
      onClick: () => setShowContactModal(true),
    },
  ];

  const pageLinks = [
    {
      name: "Booking",
      href: "/B-7839-283/34",
      icon: <FaCalendarCheck className="mr-2" />,
    },
    {
      name: "Our Team",
      href: "/O-2973-342/34",
      icon: <FaUserTie className="mr-2" />,
    },
    {
      name: "Testimonial",
      href: "/T-8732-452/34",
      icon: <FaQuoteRight className="mr-2" />,
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook />,
      href: "https://facebook.com/",
      color: "text-blue-500",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/",
      color: "text-blue-400",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedIn.com/",
      color: "text-blue-600",
    },
    {
      icon: <FaInstagram />,
      href: "https://Instagram.com/",
      color: "text-pink-500",
    },
    {
      icon: <FaYoutube />,
      href: "https://youtube.com/",
      color: "text-red-500",
    },
  ];

  // Modal variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: { opacity: 0, scale: 0.8, y: 50 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <header className="w-full relative z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-95" />

        {/* Top Bar */}
        <motion.div className="hidden lg:flex bg-gradient-to-r from-gray-900 to-black text-white border-b border-gray-800 relative">
          <div className="container mx-auto flex justify-between items-center py-2 px-5">
            <div className="flex space-x-6">
              {[
                { icon: FaEnvelope, text: "info@example.com" },
                { icon: FaPhone, text: "+250 (78) 794-4577" },
                { icon: FaWhatsapp, text: "+250 (72) 755-6145" },
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <item.icon className="text-blue-400 mr-2 text-sm" />
                  <span className="text-sm hover:text-blue-400 transition">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <ClockTime />

            <div className="flex space-x-3">
              {socialLinks.map((link, i) => (
                <Link key={i} to={link.href}>
                  <div
                    className={`${link.color} hover:text-white text-lg transition`}
                  ></div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Nav */}
        <motion.div
          className={`relative transition-all ${scrolled ? "bg-gray-900 shadow-2xl" : "bg-transparent"}`}
        >
          <div className="flex items-center">
            {/* Logo */}
            <div className="hidden lg:flex w-1/4 h-24 items-center justify-center">
              <Link to="/">
                <img src={logo} alt="Logo" className="w-16 rounded-xl" />
              </Link>
            </div>

            <div className="w-full lg:w-3/4">
              <div className="flex justify-between items-center h-24 px-4 lg:px-0">
                {/* Mobile Logo */}
                <Link to="/" className="lg:hidden">
                  <img src={logo} alt="Logo" className="w-12 rounded-xl" />
                </Link>

                {/* Mobile Time & Auth */}
                <div className="flex items-center space-x-3 lg:hidden">
                  <ClockTime />

                  {isAuthenticated ? (
                    <div className="relative">
                      <button
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                        className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1.5 rounded-full"
                      >
                        <FaUserCircle className="text-white" />
                        <span className="text-white text-sm font-medium">
                          {user?.fullname?.split(" ")[0]}
                        </span>
                      </button>

                      <AnimatePresence>
                        {userMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute right-0 mt-2 w-44 bg-gray-800 rounded-xl shadow-2xl z-50 border border-gray-700"
                          >
                            <div className="p-3 border-b border-gray-700">
                              <p className="text-white text-sm font-medium truncate">
                                {user?.fullname}
                              </p>
                              <p className="text-gray-400 text-xs truncate">
                                {user?.email}
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                navigate(
                                  user?.status === "admin"
                                    ? "/Dash-32793"
                                    : "/U-23-Dash-32793",
                                );
                                setUserMenuOpen(false);
                              }}
                              className="w-full px-4 py-2.5 text-left bg-gradient-to-b from-blue-600 to-violet-700 text-white transition flex items-center text-sm"
                            >
                              <MdDashboard className="mr-2" />
                            </button>
                            <button
                              onClick={handleLogout}
                              className="w-full px-4 py-2.5 text-left bg-gradient-to-b from-red-400 to-red-700 text-white transition flex items-center text-sm"
                            >
                              <FaSignOutAlt className="mr-2" />
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setShowLoginModal(true)}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center"
                      >
                        <FaSignInAlt className="mr-1" />
                      </button>
                      <button
                        onClick={() => setShowRegisterModal(true)}
                        className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center"
                      >
                        <FaUserPlus className="mr-1" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden bg-gradient-to-b from-blue-400 to-violet-400 text-white rounded-lg transition"
                >
                  {mobileMenuOpen ? (
                    <FaTimes className="text-2xl " />
                  ) : (
                    <FaBars className="text-2xl " />
                  )}
                </button>

                {/* Desktop Nav - Left side links */}
                <nav className="hidden lg:flex items-center space-x-4 flex-1">
                  {navLinks.map((link, i) => (
                    <div key={i} className="relative group">
                      {link.name === "Pages" ? (
                        <div>
                          <button
                            onClick={() => setPagesMenuOpen(!pagesMenuOpen)}
                            className="flex items-center px-3 py-2 bg-gradient-to-b from-blue-400 to-violet-400 text-white transition"
                          >
                            {link.name}{" "}
                            <FaArrowRight
                              className={`ml-2 transition ${pagesMenuOpen ? "rotate-90" : ""}`}
                            />
                          </button>

                          <AnimatePresence>
                            {pagesMenuOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-xl shadow-2xl z-50 border border-gray-700"
                              >
                                {pageLinks.map((page, j) => (
                                  <Link key={j} to={page.href}>
                                    <button
                                      onClick={() => setPagesMenuOpen(false)}
                                      className="w-full px-4 py-2.5 text-left bg-gradient-to-b from-blue-400 to-violet-400 text-white transition flex items-center text-sm"
                                    >
                                      {page.name}
                                    </button>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : link.onClick ? (
                        <button
                          onClick={link.onClick}
                          className="flex items-center px-3 py-2 bg-gradient-to-b from-blue-400 to-violet-400 text-white transition"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <Link to={link.href}>
                          <button className="flex items-center px-3 py-2 bg-gradient-to-b from-blue-400 to-violet-400 text-white transition">
                            {link.name}
                          </button>
                        </Link>
                      )}
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition" />
                    </div>
                  ))}
                </nav>

                {/* Desktop Auth - Right side with space */}
                <div className="hidden lg:flex items-center space-x-4 pr-6 ml-auto">
                  {isAuthenticated ? (
                    <>
                      {/* Dashboard Button */}
                      <button
                        onClick={handleDashboardClick}
                        className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl font-medium hover:shadow-lg transition-all"
                      >
                        <MdDashboard />
                      </button>

                      {/* User Menu */}
                      <div className="relative">
                        <button
                          onClick={() => setUserMenuOpen(!userMenuOpen)}
                          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-xl text-white hover:shadow-lg transition-all"
                        >
                          <FaUserCircle />
                          <span>{user?.fullname?.split(" ")[0]}</span>
                        </button>

                        <AnimatePresence>
                          {userMenuOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-xl shadow-2xl z-50 border border-gray-700"
                            >
                              <div className="p-4 border-b border-gray-700">
                                <p className="text-white font-medium truncate">
                                  {user?.fullname}
                                </p>
                                <p className="text-gray-400 text-sm truncate">
                                  {user?.email}
                                </p>
                              </div>
                              <button
                                onClick={handleDashboardClick}
                                className="w-full px-4 py-3 text-left hover:bg-gray-700 transition flex items-center"
                              >
                                <MdDashboard className="mr-2" />
                              </button>
                              <button
                                onClick={handleLogout}
                                className="w-full px-4 py-3 text-left hover:bg-gray-700 transition flex items-center"
                              >
                                <FaSignOutAlt className="mr-2" />
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setShowLoginModal(true)}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all flex items-center"
                      >
                        <FaSignInAlt className="mr-2" />
                      </button>
                      <button
                        onClick={() => setShowRegisterModal(true)}
                        className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all flex items-center"
                      >
                        <FaUserPlus className="mr-2" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Menu - COMPLETELY REWRITTEN TO ENSURE VISIBILITY */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-gray-900 border-t border-gray-800 shadow-xl"
              style={{ position: "relative", zIndex: 40 }}
            >
              <div className="py-4 px-4 space-y-2">
                {/* Main Navigation Links */}
                {navLinks.map((link, index) => (
                  <div key={index}>
                    {link.onClick ? (
                      <button
                        onClick={() => {
                          link.onClick();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 rounded-lg font-medium flex items-center bg-gradient-to-b from-blue-400 to-violet-400 text-white transition-all"
                      >
                        <span>{link.name}</span>
                      </button>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <button className="w-full text-left px-4 py-3  rounded-lg font-medium flex items-center bg-gradient-to-b from-blue-400 to-violet-400 text-white transition-all cursor-pointer">
                          <span>{link.name}</span>
                        </button>
                      </Link>
                    )}
                  </div>
                ))}

                {/* Quick Links Section */}
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <h3 className="text-blue-400 font-semibold px-4 mb-3">
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    {pageLinks.map((page, index) => (
                      <Link
                        key={index}
                        to={page.href}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <button className="w-full my-2 bg-gradient-to-b from-blue-400 to-violet-400 text-white rounded-lg transition-all flex items-center cursor-pointer">
                          {page.name}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Auth Buttons */}
                <div className="mt-6 pt-4 border-t border-gray-800">
                  {isAuthenticated ? (
                    <div className="space-y-2 px-4">
                      <button
                        onClick={() => {
                          handleDashboardClick();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center"
                      >
                        <MdDashboard className="mr-2" />
                      </button>
                      <button
                        onClick={() => {
                          handleLogout();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center"
                      >
                        <FaSignOutAlt className="mr-2" />
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3 px-4">
                      <button
                        onClick={() => {
                          setShowLoginModal(true);
                          setMobileMenuOpen(false);
                        }}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center"
                      >
                        <FaSignInAlt className="mr-2" />
                      </button>
                      <button
                        onClick={() => {
                          setShowRegisterModal(true);
                          setMobileMenuOpen(false);
                        }}
                        className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center"
                      >
                        <FaUserPlus className="mr-2" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Contact Info for Mobile */}
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <div className="flex flex-col items-center space-y-3 px-4">
                    <div className="flex items-center text-gray-400">
                      <FaPhone className="text-blue-400 mr-3" />
                      <span className="text-sm">+250 (78) 794-4577</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <FaEnvelope className="text-blue-400 mr-3" />
                      <span className="text-sm">info@example.com</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <FaWhatsapp className="text-blue-400 mr-3" />
                      <span className="text-sm">+250 (72) 755-6145</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]"
              onClick={() => setShowLoginModal(false)}
            />
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700"
            >
              <div className="p-6">
                <button
                  onClick={() => setShowLoginModal(false)}
                  className="absolute top-4 right-4 bg-gradient-to-b from-red-500 to-red-700 p-2 rounded-full"
                >
                  <FaTimes />
                </button>

                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <FaUserCircle className="text-4xl text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Welcome Back
                  </h2>
                </div>

                <form onSubmit={handleLogin} className="text-white">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">
                        Email
                      </label>
                      <div className="relative">
                        <FaEnvelopeIcon className="absolute left-3 top-3 text-gray-400" />
                        <input
                          type="email"
                          value={loginData.email}
                          onChange={(e) =>
                            setLoginData({
                              ...loginData,
                              email: e.target.value,
                            })
                          }
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-blue-500"
                          placeholder="Enter email"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <FaLock className="absolute left-3 top-3 text-gray-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          value={loginData.password}
                          onChange={(e) =>
                            setLoginData({
                              ...loginData,
                              password: e.target.value,
                            })
                          }
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-10 py-2.5 text-white focus:border-blue-500"
                          placeholder="Enter password"
                          required
                        />
                        <div
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-gray-400"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={loginData.rememberMe}
                          onChange={(e) =>
                            setLoginData({
                              ...loginData,
                              rememberMe: e.target.checked,
                            })
                          }
                          className="rounded border-gray-600 bg-gray-800 text-blue-600"
                        />
                        <span className="text-gray-300 text-sm">Remember</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setShowLoginModal(false);
                          setShowForgotPassword(true);
                        }}
                        className="text-blue-400 hover:text-blue-300 text-sm"
                      >
                        Forgot your Password?
                      </button>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center"
                    >
                      {loading ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : (
                        <>
                          <FaSignInAlt className="mr-2" /> Sign In
                        </>
                      )}
                    </button>

                    <p className="text-center text-gray-400 text-sm">
                      No account?{" "}
                      <button
                        type="button"
                        onClick={() => {
                          setShowLoginModal(false);
                          setShowRegisterModal(true);
                        }}
                        className="bg-gradient-to-b from-indigo-400 to-violet-400 text-whitefont-semibold"
                      >
                        Register
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Register Modal */}
      <AnimatePresence>
        {showRegisterModal && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]"
              onClick={() => setShowRegisterModal(false)}
            />
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700"
            >
              <div className="p-6 max-h-[80vh] overflow-y-auto">
                <button
                  onClick={() => setShowRegisterModal(false)}
                  className="absolute top-4 right-4 bg-gradient-to-b from-red-500 to-red-700 p-2 rounded-full"
                >
                  <FaTimes />
                </button>

                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <FaUserPlus className="text-4xl text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Create Account
                  </h2>
                </div>

                <form onSubmit={handleRegister} className="text-white">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <FaUserAlt className="absolute left-3 top-3 text-gray-400" />
                        <input
                          type="text"
                          value={registerData.fullname}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              fullname: e.target.value,
                            })
                          }
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500"
                          placeholder="Full name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm mb-1">
                        Email
                      </label>
                      <div className="relative">
                        <FaEnvelopeIcon className="absolute left-3 top-3 text-gray-400" />
                        <input
                          type="email"
                          value={registerData.email}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              email: e.target.value,
                            })
                          }
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm mb-1">
                        Phone
                      </label>
                      <div className="relative">
                        <FaPhone className="absolute left-3 top-3 text-gray-400" />
                        <input
                          type="tel"
                          value={registerData.phone}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              phone: e.target.value,
                            })
                          }
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500"
                          placeholder="+250..."
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <FaLock className="absolute left-3 top-3 text-gray-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          value={registerData.password}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              password: e.target.value,
                            })
                          }
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-10 py-2.5 text-white focus:border-purple-500"
                          placeholder="Min. 6 characters"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-gray-400"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm mb-1">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <FaKey className="absolute left-3 top-3 text-gray-400" />
                        <input
                          type="password"
                          value={registerData.confirmPassword}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              confirmPassword: e.target.value,
                            })
                          }
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-purple-500"
                          placeholder="Confirm password"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center"
                    >
                      {loading ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : (
                        <>
                          <FaUserPlus className="mr-2" /> Register
                        </>
                      )}
                    </button>

                    <p className="text-center text-gray-400 text-sm">
                      If you have account?{" "}
                      <button
                        type="button"
                        onClick={() => {
                          setShowRegisterModal(false);
                          setShowLoginModal(true);
                        }}
                        className="bg-gradient-to-b from-blue-400 to-violet-400 text-white font-semibold"
                      >
                        Login
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Forgot Password Modal */}
      <AnimatePresence>
        {showForgotPassword && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]"
              onClick={() => setShowForgotPassword(false)}
            />
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700"
            >
              <div className="p-6">
                <button
                  onClick={() => setShowForgotPassword(false)}
                  className="absolute top-4 right-4 bg-gradient-to-b from-red-500 to-red-700 p-2 rounded-full"
                >
                  <FaTimes />
                </button>

                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center">
                    <FaKey className="text-4xl text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Forgot Password?
                  </h2>
                </div>

                {resetMessage && (
                  <div className="mb-4 p-3 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg">
                    <p className="text-green-400 text-sm text-center">
                      {resetMessage}
                    </p>
                  </div>
                )}

                <form onSubmit={handleForgotPassword} className="text-white">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 text-sm mb-1">
                        Email
                      </label>
                      <div className="relative">
                        <FaEnvelopeIcon className="absolute left-3 top-3 text-gray-400" />
                        <input
                          type="email"
                          value={forgotPasswordData.email}
                          onChange={(e) =>
                            setForgotPasswordData({ email: e.target.value })
                          }
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-yellow-500"
                          placeholder="Enter email"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold py-3 rounded-lg"
                    >
                      {loading ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : (
                        "Send Reset Link"
                      )}
                    </button>

                    <p className="text-center text-gray-400 text-sm">
                      If you remember?{" "}
                      <button
                        type="button"
                        onClick={() => {
                          setShowForgotPassword(false);
                          setShowLoginModal(true);
                        }}
                        className="bg-gradient-to-b from-blue-400 to-violet-400 text-white font-semibold"
                      >
                        Login
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]"
              onClick={() => setShowContactModal(false)}
            />
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl bg-gray-900 rounded-2xl shadow-2xl z-[101] border border-gray-700"
            >
              <div className="p-6 max-h-[80vh] overflow-y-auto">
                <button
                  onClick={() => {
                    setShowContactModal(false);
                    setContactSuccess(false);
                    setContactErrors({});
                  }}
                  className="absolute top-4 right-4 bg-gradient-to-b from-red-500 to-red-700 p-2 rounded-full z-10"
                >
                  <FaTimes />
                </button>

                {contactSuccess ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400">We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <>
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-white">
                        Contact Us
                      </h2>
                      <p className="text-gray-400 text-sm">
                        We'd love to hear from you
                      </p>
                    </div>

                    <form onSubmit={handleContactSubmit} className="text-white">
                      <div className="space-y-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Full Name *"
                            value={contactData.name}
                            onChange={(e) =>
                              setContactData({
                                ...contactData,
                                name: e.target.value,
                              })
                            }
                            className={`w-full bg-gray-800 border ${contactErrors.name ? "border-red-500" : "border-gray-700"} rounded-lg px-4 py-3 text-white focus:border-blue-500`}
                          />
                          {contactErrors.name && (
                            <p className="text-red-500 text-xs mt-1">
                              {contactErrors.name}
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <input
                              type="email"
                              placeholder="Email *"
                              value={contactData.email}
                              onChange={(e) =>
                                setContactData({
                                  ...contactData,
                                  email: e.target.value,
                                })
                              }
                              className={`w-full bg-gray-800 border ${contactErrors.email ? "border-red-500" : "border-gray-700"} rounded-lg px-4 py-3 text-white focus:border-blue-500`}
                            />
                            {contactErrors.email && (
                              <p className="text-red-500 text-xs mt-1">
                                {contactErrors.email}
                              </p>
                            )}
                          </div>
                          <div>
                            <input
                              type="tel"
                              placeholder="Phone"
                              value={contactData.phone}
                              onChange={(e) =>
                                setContactData({
                                  ...contactData,
                                  phone: e.target.value,
                                })
                              }
                              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500"
                            />
                          </div>
                        </div>

                        <div>
                          <input
                            type="text"
                            placeholder="Subject *"
                            value={contactData.subject}
                            onChange={(e) =>
                              setContactData({
                                ...contactData,
                                subject: e.target.value,
                              })
                            }
                            className={`w-full bg-gray-800 border ${contactErrors.subject ? "border-red-500" : "border-gray-700"} rounded-lg px-4 py-3 text-white focus:border-blue-500`}
                          />
                          {contactErrors.subject && (
                            <p className="text-red-500 text-xs mt-1">
                              {contactErrors.subject}
                            </p>
                          )}
                        </div>

                        <div>
                          <textarea
                            rows="4"
                            placeholder="Message *"
                            value={contactData.message}
                            onChange={(e) =>
                              setContactData({
                                ...contactData,
                                message: e.target.value,
                              })
                            }
                            className={`w-full bg-gray-800 border ${contactErrors.message ? "border-red-500" : "border-gray-700"} rounded-lg px-4 py-3 text-white focus:border-blue-500`}
                          />
                          {contactErrors.message && (
                            <p className="text-red-500 text-xs mt-1">
                              {contactErrors.message}
                            </p>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={contactSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center"
                        >
                          {contactSubmitting ? (
                            <CircularProgress size={20} color="inherit" />
                          ) : (
                            "Send Message"
                          )}
                        </button>
                      </div>
                    </form>

                    <div className="mt-6 pt-4 border-t border-gray-800">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center text-gray-400">
                          <FaPhone className="mr-2 text-blue-400" /> +250 787
                          944 577
                        </div>
                        <div className="flex items-center text-gray-400">
                          <FaEnvelope className="mr-2 text-blue-400" />{" "}
                          info@hotel.com
                        </div>
                        <div className="flex items-center text-gray-400">
                          <FaMapMarkerAlt className="mr-2 text-blue-400" />{" "}
                          Kigali, Rwanda
                        </div>
                        <div className="flex items-center text-gray-400">
                          <FaClock className="mr-2 text-blue-400" /> Mon-Fri:
                          9AM-6PM
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[200]"
              onClick={() => setShowSuccessModal(false)}
            />
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-gray-900 rounded-2xl shadow-2xl z-[201] border border-green-500"
            >
              <div className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Success!
                </h3>
                <p className="text-gray-400 mb-4">{modalMessage}</p>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Fail Modal */}
      <AnimatePresence>
        {showFailModal && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[200]"
              onClick={() => setShowFailModal(false)}
            />
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-gray-900 rounded-2xl shadow-2xl z-[201] border border-red-500"
            >
              <div className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Error!
                </h3>
                <p className="text-gray-400 mb-4">{modalMessage}</p>
                <button
                  onClick={() => setShowFailModal(false)}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Alert */}
      <Snackbar
        open={alertMessage.show}
        autoHideDuration={6000}
        onClose={() => setAlertMessage({ ...alertMessage, show: false })}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setAlertMessage({ ...alertMessage, show: false })}
          severity={alertMessage.type}
          variant="filled"
        >
          {alertMessage.message}
        </Alert>
      </Snackbar>
    </>
  );
};

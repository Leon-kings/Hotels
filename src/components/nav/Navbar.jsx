/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MdDashboard,
  MdHotel,
  MdRoomService,
  MdPerson,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
  MdClose,
  MdMenu,
  MdArrowForward,
  MdLogin,
  MdPersonAdd,
  MdKey,
  MdHome,
  MdInfo,
  MdHelp,
  MdContactMail,
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdAccessTime,
  MdLogout,
  MdEvent,
  MdStar,
} from "react-icons/md";
import { CircularProgress } from "@mui/material";
import logo from "../../assets/images/logo/hotel-icon-black-logo-symbol-your-web-site-design-app-vector-illustration-isolated-white-background-240118715.webp";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../App";
import { ArrowDownward } from "@mui/icons-material";

export const Navbar = () => {
  const navigate = useNavigate();
  const { userEmail, userStatus, login, logout } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState({
    time: "",
    date: "",
    latitude: "",
    longitude: "",
    location: "",
  });

  // Modal States
  const [loading, setLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [resetMessage, setResetMessage] = useState("");

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

  // Get user name from email (you might want to store fullname in context)
  const getUserName = () => {
    if (userEmail) {
      return userEmail.split("@")[0]; // This is a fallback
    }
    return "User";
  };

  useEffect(() => {
    const updateTimeAndLocation = () => {
      const now = new Date();

      const dateOptions = {
        timeZone: "Africa/Kigali",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

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
            setTime({
              time: formattedTime,
              date: formattedDate,
              latitude: "N/A",
              longitude: "N/A",
              location: "Location access denied",
            });
          },
        );
      } else {
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
    const interval = setInterval(updateTimeAndLocation, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    const formatDate = (dateObj) => {
      return dateObj.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
    };

    const formatTime = (dateObj) => {
      return dateObj.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center px-2 xsm:px-3 sm:px-4 py-1 xsm:py-1.5 sm:py-2 rounded-full shadow-lg max-w-[120px] xsm:max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] xl:max-w-[320px] overflow-hidden md:ml-auto"
      >
        <div className="flex flex-col items-start ml-1 xsm:ml-2">
          <span className="font-semibold text-white leading-tight text-[10px] xsm:text-xs sm:text-sm">
            {time.time || "--:--"}
          </span>
          <span className="text-white opacity-90 leading-tight text-[8px] xsm:text-[9px] sm:text-[10px]">
            {time.date ? formatDate(new Date()) : "---"}
          </span>
        </div>

        {time.latitude !== "N/A" && (
          <>
            <div className="w-px h-4 xsm:h-5 sm:h-6 bg-white opacity-30 mx-1 xsm:mx-2 flex-shrink-0"></div>
            <div className="flex items-center space-x-0.5 xsm:space-x-1 min-w-0 flex-1">
              <MdLocationOn className="text-white text-[8px] xsm:text-[10px] sm:text-xs flex-shrink-0" />
              <span className="text-white opacity-90 truncate text-[8px] xsm:text-[9px] sm:text-[10px]">
                {time.location || `${time.latitude}, ${time.longitude}`}
              </span>
            </div>
          </>
        )}
      </motion.div>
    );
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://hotel-nodejs-oa32.onrender.com/37829/7892/login",
        loginData,
      );

      if (res.data.token && res.data.user) {
        // AuthProvider handles navigation
        login(res.data.user, res.data.token, navigate);
        setShowLoginModal(false);
        setModalMessage(`Welcome ${res.data.user.fullname}!`);
        setShowSuccessModal(true);
        setTimeout(() => setShowSuccessModal(false), 2000);
      }
    } catch (err) {
      setModalMessage(err.response?.data?.message || "Login failed");
      setShowFailModal(true);
      setTimeout(() => setShowFailModal(false), 2000);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      setModalMessage("Passwords do not match");
      setShowFailModal(true);
      setTimeout(() => setShowFailModal(false), 2000);
      return;
    }
    if (registerData.password.length < 6) {
      setModalMessage("Password must be at least 6 characters");
      setShowFailModal(true);
      setTimeout(() => setShowFailModal(false), 2000);
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://hotel-nodejs-oa32.onrender.com/37829/7892",
        registerData,
      );

      setShowRegisterModal(false);
      setModalMessage("Registration successful! Please login.");
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        setShowLoginModal(true);
      }, 2000);
    } catch (err) {
      setModalMessage(err.response?.data?.message || "Registration failed");
      setShowFailModal(true);
      setTimeout(() => setShowFailModal(false), 2000);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!forgotPasswordData.email) {
      setModalMessage("Please enter your email");
      setShowFailModal(true);
      setTimeout(() => setShowFailModal(false), 2000);
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
        setShowSuccessModal(false);
      }, 2000);
    } catch (err) {
      setModalMessage(
        err.response?.data?.message || "Failed to send reset link",
      );
      setShowFailModal(true);
      setTimeout(() => setShowFailModal(false), 2000);
    } finally {
      setLoading(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

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
        setShowSuccessModal(false);
      }, 2000);
    } catch (error) {
      setModalMessage("Failed to send message");
      setShowFailModal(true);
      setTimeout(() => setShowFailModal(false), 2000);
    } finally {
      setContactSubmitting(false);
    }
  };

  const handleDashboardClick = () => {
    if (userEmail) {
      navigate(userStatus === "admin" ? "/Dash-32793" : "/U-23-Dash-32793");
      setUserMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "/", icon: <MdHome className="mr-2" /> },
    {
      name: "About",
      href: "/A-7483-783/34",
      icon: <MdInfo className="mr-2" />,
    },
    {
      name: "Services",
      href: "/S-6832-342/34",
      icon: <MdRoomService className="mr-2" />,
    },
    {
      name: "Rooms",
      href: "/R-8763-327/34",
      icon: <MdHotel className="mr-2" />,
    },
    { name: "FAQ", href: "/faq/data", icon: <MdHelp className="mr-2" /> },
    {
      name: "Contact",
      href: "#",
      onClick: () => setShowContactModal(true),
      icon: <MdContactMail className="mr-2" />,
    },
  ];

  const pageLinks = [
    {
      name: "Booking",
      href: "/B-7839-283/34",
      icon: <MdEvent className="mr-2" />,
    },
    {
      name: "Testimonial",
      href: "/T-8732-452/34",
      icon: <MdStar className="mr-2" />,
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
      <header className="w-full fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-95" />

        {/* Top Bar */}
        <motion.div className="hidden lg:flex bg-gradient-to-r from-gray-900 to-black text-white border-b border-gray-800 relative">
          <div className="container mx-auto flex justify-between items-center py-2 px-5">
            <div className="flex space-x-6">
              {[
                { icon: MdEmail, text: "info@example.com" },
                { icon: MdPhone, text: "+250 (78) 794-4577" },
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
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`${link.color} text-lg transition cursor-pointer hover:scale-110`}
                  >
                    {link.icon}
                  </div>
                </a>
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

                  {userEmail ? (
                    <div className="relative">
                      <button
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                        className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1.5 rounded-full"
                      >
                        <MdPerson className="text-white" />
                        <span>
                          {getUserName()?.length > 6
                            ? getUserName().slice(0, 6) + "..."
                            : getUserName() || "N/A"}
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
                                {getUserName()}
                              </p>
                              <p className="text-gray-400 text-xs truncate">
                                {userEmail}
                              </p>
                            </div>
                            <button
                              onClick={handleDashboardClick}
                              className="w-full px-4 py-2.5 text-left bg-gradient-to-b from-blue-600 to-violet-700 text-white transition flex items-center text-sm"
                            >
                              <MdDashboard className="mr-2" />
                            </button>
                            <button
                              onClick={() => logout(navigate)}
                              className="w-full px-4 py-2.5 text-left bg-gradient-to-b from-red-400 to-red-700 text-white transition flex items-center text-sm"
                            >
                              <MdLogout className="mr-2" />
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
                        <MdLogin className="mr-1" />
                      </button>
                      <button
                        onClick={() => setShowRegisterModal(true)}
                        className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center"
                      >
                        <MdPersonAdd className="mr-1" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden bg-gradient-to-b from-blue-400 to-violet-400 text-white p-2 rounded-lg transition"
                >
                  {mobileMenuOpen ? (
                    <MdClose className="text-2xl" />
                  ) : (
                    <MdMenu className="text-2xl" />
                  )}
                </button>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center space-x-4 flex-1">
                  {navLinks.map((link, i) => (
                    <div key={i} className="relative group">
                      {link.onClick ? (
                        <button
                          onClick={link.onClick}
                          className="flex items-center px-3 py-2 bg-gradient-to-b from-blue-400 to-violet-400 text-white rounded-lg transition"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <Link to={link.href}>
                          <button className="flex items-center px-3 py-2 bg-gradient-to-b from-blue-400 to-violet-400 text-white rounded-lg transition">
                            {link.name}
                          </button>
                        </Link>
                      )}
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition" />
                    </div>
                  ))}

                  {/* Pages Dropdown */}
                  <div className="relative group">
                    <button
                      onClick={() => setPagesMenuOpen(!pagesMenuOpen)}
                      className="flex items-center px-3 py-2 bg-gradient-to-b from-blue-400 to-violet-400 text-white rounded-lg transition"
                    >
                      <ArrowDownward className="text-white ml-1" />
                    </button>

                    <AnimatePresence>
                      {pagesMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute left-0 mt-4 rounded-2xl w-48 bg-gradient-to-b from-blue-400 to-violet-400 text-white rounded-xl shadow-2xl z-50 border "
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
                </nav>

                {/* Desktop Auth */}
                <div className="hidden lg:flex items-center space-x-4 pr-6 ml-auto">
                  {userEmail ? (
                    <>
                      <button
                        onClick={handleDashboardClick}
                        className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl font-medium hover:shadow-lg transition-all"
                      >
                        <MdDashboard className="text-xl" />
                      </button>

                      <div className="relative">
                        <button
                          onClick={() => setUserMenuOpen(!userMenuOpen)}
                          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-xl text-white hover:shadow-lg transition-all"
                        >
                          <MdPerson className="text-xl" />
                          <span>
                            {getUserName()?.length > 6
                              ? getUserName().slice(0, 6) + "..."
                              : getUserName() || "N/A"}
                          </span>
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
                                  {getUserName()}
                                </p>
                                <p className="text-gray-400 text-sm truncate">
                                  {userEmail}
                                </p>
                                <p className="text-gray-500 text-xs mt-1">
                                  Role: {userStatus || "user"}
                                </p>
                              </div>
                              <button
                                onClick={handleDashboardClick}
                                className="w-full px-4 py-3 text-left bg-gradient-to-r from-green-500 to-emerald-600 text-white transition flex items-center"
                              >
                                <MdDashboard className="mr-2" /> Dashboard
                              </button>
                              <button
                                onClick={() => logout(navigate)}
                                className="w-full px-4 py-3 text-left bg-gradient-to-r from-red-500 to-red-600 text-white transition flex items-center"
                              >
                                <MdLogout className="mr-2" />
                                LogOut
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
                        <MdLogin className="mr-2" />
                      </button>
                      <button
                        onClick={() => setShowRegisterModal(true)}
                        className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all flex items-center"
                      >
                        <MdPersonAdd className="mr-2" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Menu */}
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
                        <button className="w-full text-left px-4 py-3 rounded-lg font-medium flex items-center bg-gradient-to-b from-blue-400 to-violet-400 text-white transition-all cursor-pointer">
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
                        <button className="w-full my-2 px-4 py-3 bg-gradient-to-b from-blue-400 to-violet-400 text-white rounded-lg transition-all flex items-center cursor-pointer">
                          {page.name}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Auth Buttons */}
                <div className="mt-6 pt-4 border-t border-gray-800">
                  {userEmail ? (
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
                          logout(navigate);
                          setMobileMenuOpen(false);
                        }}
                        className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center"
                      >
                        <MdLogout className="mr-2" />
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
                        <MdLogin className="mr-2" />
                      </button>
                      <button
                        onClick={() => {
                          setShowRegisterModal(true);
                          setMobileMenuOpen(false);
                        }}
                        className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center"
                      >
                        <MdPersonAdd className="mr-2" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Contact Info for Mobile */}
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <div className="flex flex-col items-center space-y-3 px-4">
                    <div className="flex items-center text-gray-400">
                      <MdPhone className="text-blue-400 mr-3" />
                      <span className="text-sm">+250 (78) 794-4577</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MdEmail className="text-blue-400 mr-3" />
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
                  <MdClose />
                </button>

                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <MdPerson className="text-4xl text-white" />
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
                        <MdEmail className="absolute left-3 top-3 text-gray-400" />
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
                        <MdLock className="absolute left-3 top-3 text-gray-400" />
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
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-gray-400"
                        >
                          {showPassword ? (
                            <MdVisibilityOff />
                          ) : (
                            <MdVisibility />
                          )}
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
                          <MdLogin className="mr-2" /> Sign In
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
                        className="text-blue-400 hover:text-blue-300 font-semibold"
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
                  <MdClose />
                </button>

                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <MdPersonAdd className="text-4xl text-white" />
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
                        <MdPerson className="absolute left-3 top-3 text-gray-400" />
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
                        <MdEmail className="absolute left-3 top-3 text-gray-400" />
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
                        <MdPhone className="absolute left-3 top-3 text-gray-400" />
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
                        <MdLock className="absolute left-3 top-3 text-gray-400" />
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
                        <div
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-gray-400"
                        >
                          {showPassword ? (
                            <MdVisibilityOff />
                          ) : (
                            <MdVisibility />
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm mb-1">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <MdKey className="absolute left-3 top-3 text-gray-400" />
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
                          <MdPersonAdd className="mr-2" /> Register
                        </>
                      )}
                    </button>

                    <p className="text-center text-gray-400 text-sm">
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => {
                          setShowRegisterModal(false);
                          setShowLoginModal(true);
                        }}
                        className="text-blue-400 hover:text-blue-300 font-semibold"
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
                  <MdClose />
                </button>

                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center">
                    <MdKey className="text-4xl text-white" />
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
                        <MdEmail className="absolute left-3 top-3 text-gray-400" />
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
                      Remember your password?{" "}
                      <button
                        type="button"
                        onClick={() => {
                          setShowForgotPassword(false);
                          setShowLoginModal(true);
                        }}
                        className="text-blue-400 hover:text-blue-300 font-semibold"
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
                    setContactErrors({});
                  }}
                  className="absolute top-4 right-4 bg-gradient-to-b from-red-500 to-red-700 p-2 rounded-full z-10"
                >
                  <MdClose />
                </button>

                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Contact Us</h2>
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
                      <MdPhone className="mr-2 text-blue-400" /> +250 787 944
                      577
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MdEmail className="mr-2 text-blue-400" /> info@hotel.com
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MdLocationOn className="mr-2 text-blue-400" /> Kigali,
                      Rwanda
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MdAccessTime className="mr-2 text-blue-400" /> Mon-Fri:
                      9AM-6PM
                    </div>
                  </div>
                </div>
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
    </>
  );
};

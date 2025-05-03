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
} from "react-icons/fa";
import { Button } from "@mui/material";
import logo from "../../assets/images/logo/hotel-icon-black-logo-symbol-your-web-site-design-app-vector-illustration-isolated-white-background-240118715.webp";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);

  // time
  const [time, setTime] = useState("");

  // Function to get the current time in Kigali, Rwanda (GMT+2)
  const getCurrentTime = () => {
    const now = new Date();
    const options = {
      timeZone: "Africa/Kigali", // Set timezone to Kigali, Rwanda
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Use 24-hour format
    };
    return new Intl.DateTimeFormat("en-US", options).format(now);
  };

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  const ClockTime = () => {
    return (
      <motion.div className="text-xl font-mono text-white  rounded-lg shadow-lg">
        {time}
      </motion.div>
    );
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/A-7483-783/34" },
    { name: "Services", href: "/S-6832-342/34" },
    { name: "Rooms", href: "/R-8763-327/34" },
    { name: "Contact", href: "/C-3872-2344/34" },
  ];

  const pageLinks = [
    { name: "Booking", href: "/B-7839-283/34" },
    { name: "Our Team", href: "/O-2973-342/34" },
    { name: "Testimonial", href: "/T-8732-452/34" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook className="text-blue-500" />,
      href: "https://facebook.com/",
    },
    {
      icon: <FaTwitter className="text-blue-300" />,
      href: "https://twitter.com/",
    },
    {
      icon: <FaLinkedin className="text-gray-500" />,
      href: "https://linkedIn.com/",
    },
    {
      icon: <FaInstagram className="text-red-500" />,
      href: "https://Instagram.com/",
    },
    {
      icon: <FaYoutube className="text-red-400" />,
      href: "https://youtube.com/",
    },
  ];

  return (
    <header className="w-full dark:text-white text-white">
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:flex bg-black text-white">
        <div className="container mx-auto flex justify-between items-center py-2 px-5">
          <div className="flex space-x-6">
            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 mr-2" />
              <span className="text-sm">info@example.com</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-blue-600 mr-2" />
              <span className="text-sm">+250 (78) 794-4577</span>
            </div>
            <div className="flex items-center">
              <FaWhatsapp className="text-blue-600 mr-2" />
              <span className="text-sm">+250 (72) 755-6145</span>
            </div>
          </div>
          <ClockTime />
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <Link key={index} to={link.href}>
                <motion.p
                  className="text-gray-700 hover:text-blue-600 text-lg"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {" "}
                  {link.icon}
                </motion.p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="text-white dark:text-white w-full px-0">
        <div className="flex flex-wrap items-center">
          {/* Logo - Desktop */}
          <div className="hidden p-4 lg:flex items-center justify-center w-1/4 h-24">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Link to={"/"}>
                <img
                  src={logo}
                  alt=""
                  className="w-20 rounded-xl object-cover"
                />
              </Link>
            </motion.div>
          </div>

          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center h-24 px-4 lg:px-0">
              {/* Logo - Mobile */}
              <div className="lg:hidden">
                <motion.p>
                  <Link to={"/"}>
                    <img
                      src={logo}
                      alt=""
                      className="w-16 rounded-xl object-cover"
                    />
                  </Link>
                </motion.p>
              </div>

              {/* Mobile Menu Button */}

              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white focus:outline-none"
              >
                <FaBars className="text-2xl" />
              </motion.button>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <div className="flex space-x-8">
                  {navLinks.map((link, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.05 }}>
                      {link.name === "Pages" ? (
                        <div className="relative">
                          <button
                            onClick={() => setPagesMenuOpen(!pagesMenuOpen)}
                            className="flex items-center hover:text-blue-400"
                          >
                            Pages
                            <FaArrowRight
                              className={`ml-1 transform ${
                                pagesMenuOpen ? "rotate-90" : ""
                              } transition-transform`}
                            />
                          </button>
                          <AnimatePresence>
                            {pagesMenuOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10"
                              >
                                {pageLinks.map((page, i) => (
                                  <Link key={i} to={page.href}>
                                    <button className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400">
                                      <Button className="font-bold">
                                        {page.name}
                                      </Button>
                                    </button>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link to={link.href}>
                          <button className="hover:text-blue-400">
                            <Button className="font-bold">{link.name}</Button>
                          </button>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
                <Link to={"/L-6382-8279/34"}>
                  <motion.button className="bg-blue-600 hover:bg-blue-700 rounded-none text-white flex items-center">
                    {" "}
                    <Button>
                      Order
                      <FaArrowRight className="ml-1" />
                    </Button>
                  </motion.button>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-800 overflow-hidden"
          >
            <div
              className="w-full grid grid-cols-5 mt-3 p-4
             mb-3 sm:text-center justify-items-center bg-black text-white px-4 space-x-4"
            >
              {socialLinks.map((link, index) => (
                <Link key={index} to={link.href}>
                  <motion.p
                    className="text-gray-700 hover:text-blue-600 text-lg"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {" "}
                    {link.icon}
                  </motion.p>
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link to={link.href}>
                    <motion.button
                      href={link.href}
                      className="block w-full py-2 hover:text-blue-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <h3 className="mb-2 font-medium">Pages</h3>
                {pageLinks.map((page, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-2"
                  >
                    <Link to={page.href}>
                      <motion.button
                        className="block py-2 w-full pl-4 hover:text-blue-400"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {page.name}
                      </motion.button>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <Link to={"/L-6382-8279/34"}>
                <motion.button className="bg-blue-600 hover:bg-blue-700 mt-4 py-3 text-white w-full flex items-center justify-center">
                  Order
                  <FaArrowRight className="ml-2" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

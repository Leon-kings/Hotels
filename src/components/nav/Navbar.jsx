/* eslint-disable no-unused-vars */
import React, { useState } from "react";
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
} from "react-icons/fa";
import { Button } from "@mui/material";
import logo from "../../assets/images/logo/276-2763872_hospitality-hotel-icon.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);

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
    { icon: <FaFacebook />, href: "/" },
    { icon: <FaTwitter />, href: "/" },
    { icon: <FaLinkedin />, href: "/" },
    { icon: <FaInstagram />, href: "/" },
    { icon: <FaYoutube />, href: "/" },
  ];

  return (
    <header className="w-full dark:text-white text-white">
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:flex bg-white text-gray-900">
        <div className="container mx-auto flex justify-between items-center py-2 px-5">
          <div className="flex space-x-6">
            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 mr-2" />
              <span className="text-sm">info@hotel.com</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-blue-600 mr-2" />
              <span className="text-sm">+250 (78) 794-4577</span>
            </div>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.button
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 text-lg"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {" "}
                <Button href="/">{link.icon}</Button>
              </motion.button>
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
              href="/"
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Link to={"/"}>
                <img
                  src={logo}
                  alt=""
                  className="w-24 rounded-xl object-cover"
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
                      className="w-24 rounded-xl object-cover"
                    />
                  </Link>
                </motion.p>
              </div>

              {/* Mobile Menu Button */}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white focus:outline-none"
              >
                <FaBars className="text-2xl" />
              </button>

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
                                  <button
                                    key={i}
                                    href={page.href}
                                    className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-400"
                                  >
                                    <Button href={page.href} className="font-bold">
                                      {page.name}
                                    </Button>
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <button className="hover:text-blue-400">
                          <Button className="font-bold" href={link.href}>{link.name}</Button>
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
                <motion.button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-none text-white flex items-center">
                  <Button disabled>
                    Order
                    <FaArrowRight className="ml-2" />
                  </Button>
                </motion.button>
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
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href={link.href}
                    className="block py-2 hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <h3 className="mb-2 font-medium">Pages</h3>
                {pageLinks.map((page, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      href={page.href}
                      className="block py-2 pl-4 hover:text-blue-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {page.name}
                    </a>
                  </motion.div>
                ))}
              </div>
              <motion.button
                disabled
                className="bg-blue-600 hover:bg-blue-700 mt-4 py-3 text-white w-full flex items-center justify-center"
              >
                Order
                <FaArrowRight className="ml-2" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

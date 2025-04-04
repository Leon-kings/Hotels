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

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/" },
    { name: "Services", href: "/" },
    { name: "Rooms", href: "/" },
    { name: "Contact", href: "/" },
  ];

  const pageLinks = [
    { name: "Booking", href: "/" },
    { name: "Our Team", href: "/" },
    { name: "Testimonial", href: "/" },
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
              <span className="text-sm">info@example.com</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-blue-600 mr-2" />
              <span className="text-sm">+012 345 6789</span>
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
                {link.icon}
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
              <h1 className="text-blue-600 uppercase font-bold text-3xl">
                Hotelier
              </h1>
            </motion.div>
          </div>

          <div className="w-full lg:w-3/4">

            <div className="flex justify-between items-center h-24 px-4 lg:px-0">
              {/* Logo - Mobile */}
              <div className="lg:hidden">
                <motion.p>
                  <h3 className="text-blue-600 uppercase font-bold text-2xl">
                    Hotelier
                  </h3>
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
                                    {page.name}
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <button
                          href={link.href}
                          className="hover:text-blue-400"
                        >
                          {link.name}
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-none text-white flex items-center"
                >
                  Premium Version
                  <FaArrowRight className="ml-2" />
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 hover:bg-blue-700 mt-4 py-3 text-white w-full flex items-center justify-center"
              >
                Premium Version
                <FaArrowRight className="ml-2" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

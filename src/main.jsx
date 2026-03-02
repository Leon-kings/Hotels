/* eslint-disable no-unused-vars */
// import React, { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// )



// main.jsx
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx';
import { AuthProvider } from './App.jsx'; // Adjust path as needed

// Enhanced Root Component with Authentication and Routing
const Root = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        {/* Toast Notification Container with Enhanced Design */}
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
          theme="colored"
          style={{ zIndex: 9999 }}
          toastClassName="rounded-xl shadow-lg"
          progressClassName="rounded-full"
        />
        
        {/* Auth Provider wrapping the entire app */}
        <AuthProvider>
          <App />
        </AuthProvider>

        {/* Animated Background Elements */}
        <motion.div
          className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
          
          {/* Animated Floating Orbs */}
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl"
            animate={{
              x: [-50, 50, -50],
              y: [-50, 50, -50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />

          {/* Grid Pattern Overlay */}
          <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-201`} />
        </motion.div>
      </BrowserRouter>
    </StrictMode>
  );
};

// Render the app
createRoot(document.getElementById('root')).render(<Root />);
/* eslint-disable no-unused-vars */
// Security.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';

// Material Icons as SVG components
const Icon = ({ name, className = "w-6 h-6" }) => {
  const icons = {
    // Account & Profile
    person: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg> ),
    email: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> ),
    
    // Security & Authentication
    lock: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg> ),
    security: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg> ),
    two_factor: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/></svg> ),
    
    // Verification & Codes
    verified: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 3 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5 12 21l3.4 1.5 1.89-3.2 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"/></svg> ),
    qr_code: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM21 19h-2v2h-2v-4h2v-2h-4v6h6zM15 13h-2v2h2v2h-2v2h2v-2h2v-2h-2z"/></svg> ),
    
    // Notifications
    notifications: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg> ),
    
    // Actions
    edit: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg> ),
    save: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg> ),
    delete: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg> ),
    
    // Toggle switches
    toggle_on: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg> ),
    toggle_off: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg> ),
    
    // Status indicators
    check_circle: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> ),
    error: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg> ),
    warning: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg> ),
    
    // Navigation & Actions
    arrow_back: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg> ),
    send: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg> ),
    visibility: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg> ),
    visibility_off: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg> ),
    
    // Time & Devices
    access_time: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg> ),
    devices: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/></svg> ),
    phone: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg> ),
    
    // Info & Help
    info: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg> ),
    help: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg> ),
    
    // Close
    close: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg> )
  };
  return icons[name] || null;
};

// Toggle Switch Component
const ToggleSwitch = ({ enabled, onChange, label, description }) => {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
        enabled ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-700'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
};

export const Security = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  
  // Security settings states
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [twoFactorStep, setTwoFactorStep] = useState('setup'); // 'setup', 'verify', 'enabled'
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [twoFactorQR, setTwoFactorQR] = useState('');
  
  const [loginAlerts, setLoginAlerts] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  
  const [activeSessions, setActiveSessions] = useState([]);
  const [showSessions, setShowSessions] = useState(false);
  
  const [trustedDevices, setTrustedDevices] = useState([]);
  const [showDevices, setShowDevices] = useState(false);
  
  const [recentActivity, setRecentActivity] = useState([]);
  
  // Password change states
  const [passwordStep, setPasswordStep] = useState('current');
  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [passwordErrors, setPasswordErrors] = useState({});
  
  // Verification code states
  const [verificationCode, setVerificationCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [verificationEmail, setVerificationEmail] = useState('');
  
  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [modalData, setModalData] = useState(null);
  
  const [submissionModalOpen, setSubmissionModalOpen] = useState(false);
  const [submissionType, setSubmissionType] = useState('success');
  const [submissionMessage, setSubmissionMessage] = useState('');
  
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [confirmTitle, setConfirmTitle] = useState('');
  const [confirmMessage, setConfirmMessage] = useState('');

  // Get email from cookies
  const userEmail = Cookies.get('userEmail') || Cookies.get('email');

  // Animation variants (matching Service component)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { opacity: 0, scale: 0.8, y: 20 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://hotel-nodejs-oa32.onrender.com/37829/7892');
        const data = await response.json();
        
        if (data.message === 'success' && data.users) {
          if (userEmail) {
            const foundUser = data.users.find(u => u.email === userEmail);
            if (foundUser) {
              setUser(foundUser);
              setVerificationEmail(foundUser.email);
              
              // Mock data for demonstration
              setActiveSessions([
                { id: 1, device: 'Chrome on Windows', location: 'New York, USA', ip: '192.168.1.1', lastActive: 'Just now', current: true },
                { id: 2, device: 'Safari on iPhone', location: 'New York, USA', ip: '192.168.1.2', lastActive: '2 hours ago', current: false },
                { id: 3, device: 'Firefox on Mac', location: 'Boston, USA', ip: '192.168.1.3', lastActive: '3 days ago', current: false }
              ]);
              
              setTrustedDevices([
                { id: 1, device: 'Chrome on Windows', lastUsed: '2024-03-01', trusted: true },
                { id: 2, device: 'Safari on iPhone', lastUsed: '2024-02-28', trusted: true }
              ]);
              
              setRecentActivity([
                { id: 1, action: 'Password changed', location: 'New York, USA', device: 'Chrome on Windows', time: '2 days ago', status: 'success' },
                { id: 2, action: 'Login successful', location: 'New York, USA', device: 'Chrome on Windows', time: '2 days ago', status: 'success' },
                { id: 3, action: 'Login failed', location: 'Unknown', device: 'Unknown', time: '5 days ago', status: 'failed' },
                { id: 4, action: 'Profile updated', location: 'New York, USA', device: 'Chrome on Windows', time: '1 week ago', status: 'success' }
              ]);
            }
          }
        }
      } catch (error) {
        toast.error('Failed to fetch security data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userEmail]);

  // Generate random 6-digit code
  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Simulate sending email
  const sendEmail = async (to, subject, body) => {
    console.log(`Sending email to: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body}`);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1500);
    });
  };

  // Handle password change
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    
    // Validate current step
    if (passwordStep === 'current') {
      if (!passwordData.current) {
        setPasswordErrors({ current: 'Current password is required' });
        return;
      }
      
      // Send verification code
      const code = generateVerificationCode();
      setGeneratedCode(code);
      
      try {
        toast.info('Sending verification code to your email...');
        await sendEmail(
          verificationEmail,
          'Password Change Verification',
          `Your verification code for changing your password is: ${code}. If you didn't request this, please secure your account immediately.`
        );
        
        setPasswordStep('verify');
        setSubmissionType('success');
        setSubmissionMessage(`Verification code sent to ${verificationEmail}`);
        setSubmissionModalOpen(true);
      } catch (error) {
        toast.error('Failed to send verification code');
      }
      return;
    }
    
    if (passwordStep === 'verify') {
      if (verificationCode !== generatedCode) {
        setPasswordErrors({ verify: 'Invalid verification code' });
        return;
      }
      setPasswordStep('new');
      setVerificationCode('');
      return;
    }
    
    if (passwordStep === 'new') {
      // Validate new password
      const errors = {};
      
      if (!passwordData.new) {
        errors.new = 'New password is required';
      } else if (passwordData.new.length < 8) {
        errors.new = 'Password must be at least 8 characters';
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(passwordData.new)) {
        errors.new = 'Password must contain uppercase, lowercase and numbers';
      }
      
      if (!passwordData.confirm) {
        errors.confirm = 'Please confirm your password';
      } else if (passwordData.new !== passwordData.confirm) {
        errors.confirm = 'Passwords do not match';
      }
      
      if (Object.keys(errors).length > 0) {
        setPasswordErrors(errors);
        return;
      }
      
      // Simulate password change
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setSubmissionType('success');
        setSubmissionMessage('Your password has been changed successfully!');
        setSubmissionModalOpen(true);
        
        // Reset form
        setPasswordStep('current');
        setPasswordData({ current: '', new: '', confirm: '' });
        setVerificationCode('');
        setGeneratedCode('');
        setPasswordErrors({});
        
        toast.success('Password changed successfully!');
      } catch (error) {
        setSubmissionType('error');
        setSubmissionMessage('Failed to change password. Please try again.');
        setSubmissionModalOpen(true);
      } finally {
        setLoading(false);
      }
    }
  };

  // Handle 2FA setup
  const handleTwoFactorSetup = async () => {
    if (twoFactorStep === 'setup') {
      // Generate QR code (simulated)
      setTwoFactorQR('qrcode-placeholder');
      setTwoFactorStep('verify');
      return;
    }
    
    if (twoFactorStep === 'verify') {
      if (twoFactorCode.length === 6) {
        setTwoFactorEnabled(true);
        setTwoFactorStep('enabled');
        setSubmissionType('success');
        setSubmissionMessage('Two-factor authentication has been enabled for your account!');
        setSubmissionModalOpen(true);
      } else {
        toast.error('Please enter a valid 6-digit code');
      }
    }
  };

  // Handle logout all devices
  const handleLogoutAllDevices = () => {
    setConfirmTitle('Logout All Devices');
    setConfirmMessage('This will sign you out from all devices except this one. Continue?');
    setConfirmAction(() => async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setActiveSessions(prev => prev.map(s => s.current ? s : { ...s, lastActive: 'Session ended' }));
        
        setSubmissionType('success');
        setSubmissionMessage('Successfully logged out from all other devices!');
        setSubmissionModalOpen(true);
        toast.success('Logged out from all other devices');
      } catch (error) {
        toast.error('Failed to logout devices');
      } finally {
        setLoading(false);
        setConfirmModalOpen(false);
      }
    });
    setConfirmModalOpen(true);
  };

  // Handle remove trusted device
  const handleRemoveDevice = (deviceId) => {
    setConfirmTitle('Remove Trusted Device');
    setConfirmMessage('This device will no longer be trusted for 2FA bypass. Continue?');
    setConfirmAction(() => async () => {
      try {
        setTrustedDevices(prev => prev.filter(d => d.id !== deviceId));
        setSubmissionType('success');
        setSubmissionMessage('Device removed from trusted list');
        setSubmissionModalOpen(true);
      } catch (error) {
        toast.error('Failed to remove device');
      } finally {
        setConfirmModalOpen(false);
      }
    });
    setConfirmModalOpen(true);
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading && !user) {
    return (
      <div className="w-full py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <>
      <div className="w-full py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 mt-2 text-white">
              Security{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Settings
              </span>
            </h1>
            <motion.p 
              className="text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Manage your account security and privacy settings
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            {/* Tabs */}
            <motion.div 
              variants={itemVariants}
              className="flex border-b border-gray-800 bg-gray-900/50 rounded-t-xl overflow-hidden"
            >
              {[
                { id: 'overview', label: 'Security Overview', icon: 'security' },
                { id: 'password', label: 'Password', icon: 'lock' },
                { id: 'twofactor', label: 'Two-Factor Auth', icon: 'two_factor' },
                { id: 'devices', label: 'Devices & Sessions', icon: 'devices' }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-4 px-2 text-sm md:text-base transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Icon name={tab.icon} className="w-5 h-5" />
                  <span className="font-medium hidden md:inline">{tab.label}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Content Area */}
            <motion.div 
              variants={itemVariants}
              className="bg-gray-900/30 backdrop-blur-lg rounded-b-xl p-6 md:p-8 border border-gray-800"
            >
              <AnimatePresence mode="wait">
                {/* Security Overview Tab */}
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Security Score Card */}
                    <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl p-6 border border-blue-600/20">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white">Security Score</h3>
                        <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">85%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: '85%' }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        />
                      </div>
                      <p className="text-sm text-gray-400 mt-4">Good! Consider enabling 2FA for better security</p>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div 
                        variants={itemVariants}
                        className="bg-gray-800/50 p-5 rounded-xl border border-gray-700"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="bg-blue-600/20 p-3 rounded-lg">
                            <Icon name="lock" className="w-6 h-6 text-blue-500" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1">Password</h4>
                            <p className="text-sm text-gray-400 mb-3">Last changed 2 months ago</p>
                            <button 
                              onClick={() => setActiveTab('password')}
                              className="text-blue-500 hover:text-blue-400 text-sm font-medium"
                            >
                              Change password →
                            </button>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        variants={itemVariants}
                        className="bg-gray-800/50 p-5 rounded-xl border border-gray-700"
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`p-3 rounded-lg ${twoFactorEnabled ? 'bg-green-600/20' : 'bg-yellow-600/20'}`}>
                            <Icon name="two_factor" className={`w-6 h-6 ${twoFactorEnabled ? 'text-green-500' : 'text-yellow-500'}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1">Two-Factor Auth</h4>
                            <p className="text-sm text-gray-400 mb-3">
                              {twoFactorEnabled ? 'Enabled' : 'Not enabled'}
                            </p>
                            <button 
                              onClick={() => setActiveTab('twofactor')}
                              className="text-blue-500 hover:text-blue-400 text-sm font-medium"
                            >
                              {twoFactorEnabled ? 'Manage 2FA →' : 'Enable 2FA →'}
                            </button>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        variants={itemVariants}
                        className="bg-gray-800/50 p-5 rounded-xl border border-gray-700"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="bg-purple-600/20 p-3 rounded-lg">
                            <Icon name="devices" className="w-6 h-6 text-purple-500" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1">Active Sessions</h4>
                            <p className="text-sm text-gray-400 mb-3">{activeSessions.filter(s => s.current || s.lastActive === 'Just now').length} active now</p>
                            <button 
                              onClick={() => setActiveTab('devices')}
                              className="text-blue-500 hover:text-blue-400 text-sm font-medium"
                            >
                              Manage devices →
                            </button>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        variants={itemVariants}
                        className="bg-gray-800/50 p-5 rounded-xl border border-gray-700"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="bg-green-600/20 p-3 rounded-lg">
                            <Icon name="notifications" className="w-6 h-6 text-green-500" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1">Login Alerts</h4>
                            <p className="text-sm text-gray-400 mb-3">{loginAlerts ? 'Enabled' : 'Disabled'}</p>
                            <button 
                              onClick={() => setLoginAlerts(!loginAlerts)}
                              className="text-blue-500 hover:text-blue-400 text-sm font-medium"
                            >
                              {loginAlerts ? 'Disable' : 'Enable'} →
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
                      <h3 className="text-lg font-semibold text-white mb-4">Recent Security Activity</h3>
                      <div className="space-y-3">
                        {recentActivity.slice(0, 3).map((activity) => (
                          <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className={`w-2 h-2 rounded-full ${activity.status === 'success' ? 'bg-green-500' : 'bg-red-500'}`} />
                              <div>
                                <p className="text-sm font-medium text-white">{activity.action}</p>
                                <p className="text-xs text-gray-400">{activity.device} • {activity.location}</p>
                              </div>
                            </div>
                            <span className="text-xs text-gray-500">{activity.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Password Tab */}
                {activeTab === 'password' && (
                  <motion.div
                    key="password"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="max-w-md mx-auto">
                      <form onSubmit={handlePasswordChange} className="space-y-6">
                        {/* Current Password Step */}
                        {passwordStep === 'current' && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-4"
                          >
                            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl p-6 text-center border border-blue-600/20">
                              <div className="bg-blue-600/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                <Icon name="lock" className="w-10 h-10 text-blue-500" />
                              </div>
                              <h3 className="text-xl font-bold text-white mb-2">Change Password</h3>
                              <p className="text-gray-400 mb-6">
                                Enter your current password to get started
                              </p>
                              
                              <div className="space-y-4">
                                <div>
                                  <div className="relative">
                                    <Icon name="lock" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                                    <input
                                      type={showPassword.current ? "text" : "password"}
                                      value={passwordData.current}
                                      onChange={(e) => {
                                        setPasswordData({...passwordData, current: e.target.value});
                                        setPasswordErrors({});
                                      }}
                                      className={`w-full pl-10 pr-10 py-3 bg-gray-800 border ${
                                        passwordErrors.current ? 'border-red-500' : 'border-gray-700'
                                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all`}
                                      placeholder="Current password"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => setShowPassword({...showPassword, current: !showPassword.current})}
                                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400"
                                    >
                                      <Icon name={showPassword.current ? 'visibility_off' : 'visibility'} className="w-5 h-5" />
                                    </button>
                                  </div>
                                  {passwordErrors.current && (
                                    <p className="mt-1 text-sm text-red-500">{passwordErrors.current}</p>
                                  )}
                                </div>

                                <motion.button
                                  type="submit"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all"
                                >
                                  Continue
                                </motion.button>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Verify Email Step */}
                        {passwordStep === 'verify' && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-4"
                          >
                            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl p-6 border border-blue-600/20">
                              <h3 className="text-xl font-bold text-white mb-2 text-center">Verify Your Identity</h3>
                              <p className="text-gray-400 text-center mb-6">
                                We've sent a verification code to <span className="text-blue-500">{verificationEmail}</span>
                              </p>
                              
                              <div className="space-y-4">
                                <div>
                                  <input
                                    type="text"
                                    value={verificationCode}
                                    onChange={(e) => {
                                      setVerificationCode(e.target.value.replace(/[^0-9]/g, '').slice(0, 6));
                                      setPasswordErrors({});
                                    }}
                                    placeholder="Enter 6-digit code"
                                    maxLength="6"
                                    className={`w-full px-4 py-3 bg-gray-800 border ${
                                      passwordErrors.verify ? 'border-red-500' : 'border-gray-700'
                                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 text-center text-2xl tracking-widest transition-all`}
                                  />
                                  {passwordErrors.verify && (
                                    <p className="mt-1 text-sm text-red-500">{passwordErrors.verify}</p>
                                  )}
                                </div>
                                
                                <div className="flex space-x-3">
                                  <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all"
                                  >
                                    Verify
                                  </motion.button>
                                  <motion.button
                                    type="button"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setPasswordStep('current')}
                                    className="flex-1 bg-gray-800 text-gray-300 py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-all border border-gray-700"
                                  >
                                    Back
                                  </motion.button>
                                </div>

                                <p className="text-sm text-gray-500 text-center">
                                  Didn't receive the code? 
                                  <button 
                                    type="button"
                                    onClick={handlePasswordChange}
                                    className="text-blue-500 hover:text-blue-400 ml-1"
                                  >
                                    Resend
                                  </button>
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* New Password Step */}
                        {passwordStep === 'new' && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-4"
                          >
                            <div className="bg-gradient-to-br from-green-600/10 to-blue-600/10 rounded-xl p-6 border border-green-600/20">
                              <div className="flex items-center justify-center mb-4">
                                <div className="bg-green-600/20 rounded-full p-2">
                                  <Icon name="check_circle" className="w-8 h-8 text-green-500" />
                                </div>
                              </div>
                              
                              <h3 className="text-xl font-bold text-white mb-2 text-center">Create New Password</h3>
                              <p className="text-gray-400 text-center mb-6">
                                Choose a strong password you haven't used before
                              </p>
                              
                              <div className="space-y-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-400 mb-2">
                                    New Password
                                  </label>
                                  <div className="relative">
                                    <Icon name="lock" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                                    <input
                                      type={showPassword.new ? "text" : "password"}
                                      value={passwordData.new}
                                      onChange={(e) => {
                                        setPasswordData({...passwordData, new: e.target.value});
                                        setPasswordErrors({});
                                      }}
                                      className={`w-full pl-10 pr-10 py-3 bg-gray-800 border ${
                                        passwordErrors.new ? 'border-red-500' : 'border-gray-700'
                                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all`}
                                      placeholder="Enter new password"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => setShowPassword({...showPassword, new: !showPassword.new})}
                                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400"
                                    >
                                      <Icon name={showPassword.new ? 'visibility_off' : 'visibility'} className="w-5 h-5" />
                                    </button>
                                  </div>
                                  {passwordErrors.new && (
                                    <p className="mt-1 text-sm text-red-500">{passwordErrors.new}</p>
                                  )}
                                </div>

                                <div>
                                  <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Confirm Password
                                  </label>
                                  <div className="relative">
                                    <Icon name="lock" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                                    <input
                                      type={showPassword.confirm ? "text" : "password"}
                                      value={passwordData.confirm}
                                      onChange={(e) => {
                                        setPasswordData({...passwordData, confirm: e.target.value});
                                        setPasswordErrors({});
                                      }}
                                      className={`w-full pl-10 pr-10 py-3 bg-gray-800 border ${
                                        passwordErrors.confirm ? 'border-red-500' : 'border-gray-700'
                                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all`}
                                      placeholder="Confirm new password"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => setShowPassword({...showPassword, confirm: !showPassword.confirm})}
                                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400"
                                    >
                                      <Icon name={showPassword.confirm ? 'visibility_off' : 'visibility'} className="w-5 h-5" />
                                    </button>
                                  </div>
                                  {passwordErrors.confirm && (
                                    <p className="mt-1 text-sm text-red-500">{passwordErrors.confirm}</p>
                                  )}
                                </div>

                                {/* Password Strength Meter */}
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Password strength:</span>
                                    <span className="text-yellow-500">Medium</span>
                                  </div>
                                  <div className="w-full bg-gray-700 rounded-full h-1">
                                    <div className="w-2/3 bg-yellow-500 h-1 rounded-full" />
                                  </div>
                                  <ul className="text-xs text-gray-500 space-y-1 mt-2">
                                    <li className="flex items-center">
                                      <Icon name="check_circle" className="w-3 h-3 text-green-500 mr-1" />
                                      At least 8 characters
                                    </li>
                                    <li className="flex items-center">
                                      <Icon name="check_circle" className="w-3 h-3 text-green-500 mr-1" />
                                      Contains uppercase & lowercase
                                    </li>
                                    <li className="flex items-center">
                                      <Icon name="check_circle" className="w-3 h-3 text-green-500 mr-1" />
                                      Contains numbers
                                    </li>
                                    <li className="flex items-center">
                                      <Icon name="error" className="w-3 h-3 text-yellow-500 mr-1" />
                                      Add special characters for strong password
                                    </li>
                                  </ul>
                                </div>

                                <motion.button
                                  type="submit"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  disabled={loading}
                                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all disabled:opacity-70 mt-4"
                                >
                                  {loading ? (
                                    <div className="flex items-center justify-center">
                                      <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                      </svg>
                                      Updating Password...
                                    </div>
                                  ) : (
                                    "Update Password"
                                  )}
                                </motion.button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </form>

                      {/* Password Requirements Info */}
                      <div className="mt-6 bg-blue-600/10 rounded-lg p-4 border border-blue-600/20">
                        <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center">
                          <Icon name="info" className="w-4 h-4 mr-1" />
                          Password Requirements
                        </h4>
                        <ul className="text-xs text-gray-400 space-y-1">
                          <li>• Minimum 8 characters long</li>
                          <li>• At least one uppercase letter (A-Z)</li>
                          <li>• At least one lowercase letter (a-z)</li>
                          <li>• At least one number (0-9)</li>
                          <li>• Recommended: special characters (!@#$%^&*)</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Two-Factor Auth Tab */}
                {activeTab === 'twofactor' && (
                  <motion.div
                    key="twofactor"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="max-w-md mx-auto">
                      {twoFactorStep === 'setup' && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-6"
                        >
                          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl p-8 text-center border border-blue-600/20">
                            <div className="bg-blue-600/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                              <Icon name="two_factor" className="w-10 h-10 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Two-Factor Authentication</h3>
                            <p className="text-gray-400 mb-6">
                              Add an extra layer of security to your account. Once enabled, you'll need both your password and a verification code to sign in.
                            </p>
                            
                            <div className="space-y-4 text-left mb-6">
                              <div className="flex items-start space-x-3">
                                <div className="bg-green-600/20 rounded-full p-1 mt-0.5">
                                  <Icon name="check_circle" className="w-4 h-4 text-green-500" />
                                </div>
                                <div>
                                  <p className="text-sm text-white font-medium">Enhanced Security</p>
                                  <p className="text-xs text-gray-400">Protect your account even if your password is compromised</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <div className="bg-green-600/20 rounded-full p-1 mt-0.5">
                                  <Icon name="check_circle" className="w-4 h-4 text-green-500" />
                                </div>
                                <div>
                                  <p className="text-sm text-white font-medium">Works with Authenticator Apps</p>
                                  <p className="text-xs text-gray-400">Compatible with Google Authenticator, Authy, and more</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <div className="bg-yellow-600/20 rounded-full p-1 mt-0.5">
                                  <Icon name="warning" className="w-4 h-4 text-yellow-500" />
                                </div>
                                <div>
                                  <p className="text-sm text-white font-medium">Recovery Codes Provided</p>
                                  <p className="text-xs text-gray-400">You'll receive backup codes in case you lose access to your authenticator</p>
                                </div>
                              </div>
                            </div>

                            <motion.button
                              onClick={handleTwoFactorSetup}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all"
                            >
                              Get Started
                            </motion.button>
                          </div>
                        </motion.div>
                      )}

                      {twoFactorStep === 'verify' && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-6"
                        >
                          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl p-6 border border-blue-600/20">
                            <h3 className="text-xl font-bold text-white mb-4 text-center">Scan QR Code</h3>
                            
                            {/* QR Code Placeholder */}
                            <div className="bg-white p-4 rounded-lg mb-4 flex justify-center">
                              <div className="w-48 h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                <Icon name="qr_code" className="w-32 h-32 text-white opacity-50" />
                              </div>
                            </div>
                            
                            <p className="text-sm text-gray-400 text-center mb-4">
                              Scan this QR code with your authenticator app, then enter the 6-digit code below
                            </p>
                            
                            <div className="space-y-4">
                              <p className="text-xs text-gray-500 text-center">
                                Can't scan? Use this code instead: 
                                <span className="text-blue-500 font-mono ml-1">JBSWY3DPEHPK3PXP</span>
                              </p>
                              
                              <div>
                                <input
                                  type="text"
                                  value={twoFactorCode}
                                  onChange={(e) => setTwoFactorCode(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                                  placeholder="Enter 6-digit code"
                                  maxLength="6"
                                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 text-center text-2xl tracking-widest transition-all"
                                />
                              </div>
                              
                              <div className="flex space-x-3">
                                <motion.button
                                  onClick={handleTwoFactorSetup}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all"
                                >
                                  Verify & Enable
                                </motion.button>
                                <motion.button
                                  onClick={() => setTwoFactorStep('setup')}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="flex-1 bg-gray-800 text-gray-300 py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-all border border-gray-700"
                                >
                                  Back
                                </motion.button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {twoFactorStep === 'enabled' && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-6"
                        >
                          <div className="bg-gradient-to-br from-green-600/10 to-blue-600/10 rounded-xl p-6 border border-green-600/20">
                            <div className="flex items-center justify-center mb-4">
                              <div className="bg-green-600/20 rounded-full p-3">
                                <Icon name="check_circle" className="w-12 h-12 text-green-500" />
                              </div>
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-2 text-center">2FA Enabled!</h3>
                            <p className="text-gray-400 text-center mb-6">
                              Your account is now protected with two-factor authentication
                            </p>
                            
                            {/* Backup Codes */}
                            <div className="bg-gray-800 rounded-lg p-4 mb-4">
                              <h4 className="text-sm font-semibold text-white mb-3">Backup Recovery Codes</h4>
                              <p className="text-xs text-gray-400 mb-3">
                                Save these codes in a secure place. You can use them to access your account if you lose your authenticator.
                              </p>
                              <div className="grid grid-cols-2 gap-2">
                                {['ABCD-1234', 'EFGH-5678', 'IJKL-9012', 'MNOP-3456', 'QRST-7890', 'UVWX-1234'].map((code, index) => (
                                  <div key={index} className="bg-gray-700 p-2 rounded text-center">
                                    <code className="text-xs text-blue-400">{code}</code>
                                  </div>
                                ))}
                              </div>
                              <button className="text-xs text-blue-500 hover:text-blue-400 mt-3 flex items-center">
                                <Icon name="save" className="w-3 h-3 mr-1" />
                                Download Codes
                              </button>
                            </div>
                            
                            {/* Trusted Devices */}
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-white mb-3">Trusted Devices</h4>
                              {trustedDevices.map((device) => (
                                <div key={device.id} className="flex items-center justify-between p-2 bg-gray-800 rounded-lg mb-2">
                                  <div className="flex items-center space-x-2">
                                    <Icon name="devices" className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-white">{device.device}</span>
                                  </div>
                                  <button 
                                    onClick={() => handleRemoveDevice(device.id)}
                                    className="text-xs text-red-500 hover:text-red-400"
                                  >
                                    Remove
                                  </button>
                                </div>
                              ))}
                            </div>
                            
                            <div className="flex space-x-3">
                              <motion.button
                                onClick={() => {
                                  setTwoFactorEnabled(false);
                                  setTwoFactorStep('setup');
                                }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex-1 bg-red-600/20 text-red-500 py-3 px-4 rounded-lg font-medium hover:bg-red-600/30 transition-all border border-red-600/30"
                              >
                                Disable 2FA
                              </motion.button>
                              <motion.button
                                onClick={() => setModalOpen(false)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex-1 bg-gray-800 text-gray-300 py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-all border border-gray-700"
                              >
                                Close
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Devices & Sessions Tab */}
                {activeTab === 'devices' && (
                  <motion.div
                    key="devices"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Active Sessions */}
                    <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white">Active Sessions</h3>
                        <button
                          onClick={handleLogoutAllDevices}
                          className="text-sm text-red-500 hover:text-red-400"
                        >
                          Logout all devices
                        </button>
                      </div>
                      
                      <div className="space-y-3">
                        {activeSessions.map((session) => (
                          <div key={session.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className={`w-2 h-2 rounded-full ${session.current ? 'bg-green-500' : 'bg-gray-500'}`} />
                              <div>
                                <p className="text-sm font-medium text-white">
                                  {session.device}
                                  {session.current && <span className="ml-2 text-xs text-green-500">(Current)</span>}
                                </p>
                                <p className="text-xs text-gray-400">{session.location} • {session.ip}</p>
                              </div>
                            </div>
                            <span className="text-xs text-gray-500">{session.lastActive}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Trusted Devices */}
                    <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
                      <h3 className="text-lg font-semibold text-white mb-4">Trusted Devices</h3>
                      
                      <div className="space-y-3">
                        {trustedDevices.map((device) => (
                          <div key={device.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Icon name="devices" className="w-5 h-5 text-blue-500" />
                              <div>
                                <p className="text-sm font-medium text-white">{device.device}</p>
                                <p className="text-xs text-gray-400">Last used: {formatDate(device.lastUsed)}</p>
                              </div>
                            </div>
                            <button
                              onClick={() => handleRemoveDevice(device.id)}
                              className="text-sm text-red-500 hover:text-red-400"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Login Alerts Settings */}
                    <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
                      <h3 className="text-lg font-semibold text-white mb-4">Security Notifications</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-white">Login Alerts</p>
                            <p className="text-xs text-gray-400">Get notified when someone logs into your account</p>
                          </div>
                          <ToggleSwitch 
                            enabled={loginAlerts}
                            onChange={() => setLoginAlerts(!loginAlerts)}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-white">Email Notifications</p>
                            <p className="text-xs text-gray-400">Receive security alerts via email</p>
                          </div>
                          <ToggleSwitch 
                            enabled={emailNotifications}
                            onChange={() => setEmailNotifications(!emailNotifications)}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-white">SMS Alerts</p>
                            <p className="text-xs text-gray-400">Get text messages for critical security events</p>
                          </div>
                          <ToggleSwitch 
                            enabled={smsNotifications}
                            onChange={() => setSmsNotifications(!smsNotifications)}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Security Tips */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 max-w-4xl mx-auto bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-xl p-6 border border-blue-600/20"
          >
            <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
              <Icon name="security" className="w-5 h-5 mr-2" />
              Security Best Practices
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                <span>Use a unique password for each of your important accounts</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                <span>Enable two-factor authentication whenever possible</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                <span>Regularly review your active sessions and trusted devices</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                <span>Never share your verification codes with anyone</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {confirmModalOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setConfirmModalOpen(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gray-900 rounded-2xl max-w-md w-full overflow-hidden border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-yellow-600/20 rounded-full p-3">
                    <Icon name="warning" className="w-8 h-8 text-yellow-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">{confirmTitle}</h3>
                <p className="text-gray-400 text-center mb-6">{confirmMessage}</p>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setConfirmModalOpen(false)}
                    className="flex-1 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmAction}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-colors"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submission Result Modal */}
      <AnimatePresence>
        {submissionModalOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setSubmissionModalOpen(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gray-900 rounded-2xl max-w-md w-full overflow-hidden border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`p-6 text-center ${
                submissionType === 'success' 
                  ? 'bg-gradient-to-r from-green-600 to-green-700' 
                  : 'bg-gradient-to-r from-red-600 to-red-700'
              }`}>
                {submissionType === 'success' ? (
                  <Icon name="check_circle" className="text-white w-16 h-16 mx-auto" />
                ) : (
                  <Icon name="error" className="text-white w-16 h-16 mx-auto" />
                )}
              </div>
              
              {/* Modal Body */}
              <div className="p-8 text-center">
                <h3 className={`text-2xl font-bold mb-4 ${
                  submissionType === 'success' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {submissionType === 'success' ? 'Success!' : 'Error!'}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {submissionMessage}
                </p>

                <button
                  onClick={() => setSubmissionModalOpen(false)}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
        theme="dark"
      />
    </>
  );
}
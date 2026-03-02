
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, useContext, createContext } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';
import {
  Person,
  Email,
  Phone,
  Verified,
  AdminPanelSettings,
  HowToReg,
  Edit,
  Delete,
  Refresh,
  CheckCircle,
  Cancel,
  Shield,
  CalendarToday,
  Fingerprint,
  Lock,
  Security,
  AccountCircle,
  Logout,
  Password,
  Visibility,
  VisibilityOff,
  Key,
  Send,
  VerifiedUser,
  Warning,
  Notifications,
  Settings,
  Save,
  Login,
  AccountBox,
  VpnKey,
  LocationOn,
  Business,
  Language,
  Badge,
  Cloud,
  Smartphone,
  Wifi,
  Storage,
  History,
  Devices,
  Close,
  ArrowForward,
  Search,
  FilterList,
  Sort,
  Bookmark,
  BookmarkBorder,
  Share,
  Download,
  Print,
  MoreVert,
  Circle,
  Dashboard,
  BarChart,
  PieChart,
  Timeline,
  TableChart,
  DownloadForOffline,
  Menu,
  Dashboard as DashboardIcon
} from '@mui/icons-material';

// Create axios instance with credentials
const api = axios.create({
  baseURL: 'http://ruziganodejs.onrender.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Helper function to get cookie value
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

// Success Modal Component
const SuccessModal = ({ isOpen, onClose, title, message, details }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md"
      >
        <div className="p-6">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-4">
            <CheckCircle className="text-3xl text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{title}</h3>
          <p className="text-gray-600 text-center mb-4">{message}</p>
          {details && (
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-600 text-center">{details}</p>
            </div>
          )}
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg text-white font-medium transition-all bg-gradient-to-t from-green-500 to-green-700 hover:from-green-600 hover:to-green-800"
            >
              OK
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Error Modal Component
const ErrorModal = ({ isOpen, onClose, title, message, details }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md"
      >
        <div className="p-6">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full mx-auto mb-4">
            <Cancel className="text-3xl text-red-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{title}</h3>
          <p className="text-gray-600 text-center mb-4">{message}</p>
          {details && (
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-600 text-center">{details}</p>
            </div>
          )}
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg text-white font-medium transition-all bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800"
            >
              OK
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Confirm Modal Component
const ConfirmModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message, 
  type = "warning", 
  isLoading = false,
  confirmText = "Confirm",
  cancelText = "Cancel"
}) => {
  if (!isOpen) return null;

  const getIcon = () => {
    if (type === "error") return <Cancel className="text-2xl text-red-600" />;
    if (type === "warning") return <Warning className="text-2xl text-yellow-600" />;
    if (type === "info") return <Verified className="text-2xl text-blue-600" />;
    return <Shield className="text-2xl text-purple-600" />;
  };

  const getBgColor = () => {
    if (type === "error") return "bg-red-100";
    if (type === "warning") return "bg-yellow-100";
    if (type === "info") return "bg-blue-100";
    return "bg-purple-100";
  };

  const getButtonColor = () => {
    if (type === "error") return "bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800";
    if (type === "warning") return "bg-gradient-to-t from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800";
    if (type === "info") return "bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800";
    return "bg-gradient-to-t from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800";
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md"
      >
        <div className="p-6">
          <div className={`flex items-center justify-center w-12 h-12 rounded-full mx-auto mb-4 ${getBgColor()}`}>
            {getIcon()}
          </div>
          <h3 className="text-lg font-bold text-gray-900 text-center mb-2">{title}</h3>
          <p className="text-gray-600 text-center mb-6">{message}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              disabled={isLoading}
              className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 bg-gradient-to-t from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300"
            >
              {cancelText}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onConfirm}
              disabled={isLoading}
              className={`px-6 py-2.5 rounded-lg text-white font-medium transition-colors ${getButtonColor()} disabled:opacity-50`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                </div>
              ) : (
                confirmText
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Function to fetch user data from cookies/API
const fetchUserData = async () => {
  try {
    console.log('Fetching user data...');
    
    // Try to get user from Cookies (from App.jsx)
    const userCookie = Cookies.get('user');
    if (userCookie) {
      try {
        const userData = JSON.parse(userCookie);
        console.log('User data from cookie:', userData);
        
        // Set user data in cookies for backward compatibility
        if (userData.name) document.cookie = `userName=${userData.name}; path=/`;
        if (userData.email) {
          document.cookie = `userEmail=${userData.email}; path=/`;
          // Save email to cookie for search functionality
          document.cookie = `userSearchEmail=${userData.email}; path=/`;
        }
        if (userData._id) document.cookie = `userId=${userData._id}; path=/`;
        if (userData.role) document.cookie = `userRole=${userData.role}; path=/`;
        if (userData.isVerified) document.cookie = `isVerified=${userData.isVerified}; path=/`;
        
        return {
          name: userData.name || userData.username || 'User',
          email: userData.email || '',
          id: userData._id || userData.id || '1',
          role: userData.role || 'user',
          isVerified: userData.isVerified || false,
          phone: userData.phone || '',
          createdAt: userData.createdAt || new Date().toISOString(),
          updatedAt: userData.updatedAt || new Date().toISOString(),
          isActive: true,
          location: userData.location || '',
          company: userData.company || '',
          language: userData.language || 'en',
          avatar: userData.avatar || '',
          bio: userData.bio || '',
          token: userData.token || ''
        };
      } catch (parseError) {
        console.error('Error parsing user cookie:', parseError);
      }
    }
    
    // Try to get user info from old cookies
    const userName = getCookie('userName') || getCookie('username') || getCookie('name') || 'User';
    const userEmail = getCookie('userEmail') || getCookie('email') || '';
    const userId = getCookie('userId') || getCookie('id') || '1';
    const userRole = getCookie('userRole') || getCookie('role') || 'user';
    const isVerified = getCookie('isVerified') === 'true' || false;
    const phone = getCookie('phone') || '';
    
    // If we have an API endpoint for user data, fetch it
    try {
      console.log('Trying to fetch from /auth/profile...');
      const response = await api.get("/auth/profile");
      
      if (response.data && response.data.user) {
        console.log('Profile data received:', response.data.user);
        const userData = response.data.user;
        
        // Save email to cookie for search functionality
        if (userData.email) {
          document.cookie = `userSearchEmail=${userData.email}; path=/`;
        }
        
        return {
          name: userData.name || userData.username || userName,
          email: userData.email || userEmail,
          id: userData._id || userId,
          role: userData.role || userRole,
          isVerified: userData.isVerified || isVerified,
          phone: userData.phone || phone,
          createdAt: userData.createdAt || new Date().toISOString(),
          updatedAt: userData.updatedAt || new Date().toISOString(),
          isActive: true,
          location: userData.location || '',
          company: userData.company || '',
          language: userData.language || 'en',
          avatar: userData.avatar || '',
          bio: userData.bio || ''
        };
      }
    } catch (apiError) {
      console.log("Profile API failed, trying email endpoint:", apiError.message);
      
      // Try email endpoint as fallback if we have email
      if (userEmail) {
        try {
          console.log('Trying to fetch from /auth/:email endpoint...');
          const emailResponse = await api.get(`/auth/${userEmail}`);
          
          if (emailResponse.data && emailResponse.data.user) {
            console.log('Email endpoint data received:', emailResponse.data.user);
            const userData = emailResponse.data.user;
            
            // Save email to cookie for search functionality
            if (userData.email) {
              document.cookie = `userSearchEmail=${userData.email}; path=/`;
            }
            
            return {
              name: userData.name || userData.username || userName,
              email: userData.email || userEmail,
              id: userData._id || userId,
              role: userData.role || userRole,
              isVerified: userData.isVerified || isVerified,
              phone: userData.phone || phone,
              createdAt: userData.createdAt || new Date().toISOString(),
              updatedAt: userData.updatedAt || new Date().toISOString(),
              isActive: true,
              location: userData.location || '',
              company: userData.company || '',
              language: userData.language || 'en',
              avatar: userData.avatar || '',
              bio: userData.bio || ''
            };
          }
        } catch (emailError) {
          console.log("Email endpoint also failed:", emailError.message);
        }
      }
      
      console.log("Both APIs failed, using cookies only");
    }
    
    // Save email to cookie for search functionality if available
    if (userEmail) {
      document.cookie = `userSearchEmail=${userEmail}; path=/`;
    }
    
    // Return data from cookies only
    console.log('Returning cookie data');
    return {
      name: userName,
      email: userEmail,
      id: userId,
      role: userRole,
      isVerified: isVerified,
      phone: phone,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true,
      location: '',
      company: '',
      language: 'en',
      avatar: '',
      bio: ''
    };
  } catch (error) {
    console.error("Error in fetchUserData:", error);
    
    // Return fallback data
    return {
      name: "User",
      email: "user@example.com",
      id: "1",
      role: "user",
      isVerified: false,
      phone: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true,
      location: '',
      company: '',
      language: 'en',
      avatar: '',
      bio: ''
    };
  }
};

export const UserProfile = () => {
  // Get user from Cookies (as done in App.jsx)
  const [user, setUser] = useState(() => {
    try {
      const savedUser = Cookies.get('user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Error parsing user cookie:", error);
      return null;
    }
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Modal states
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [logoutDialog, setLogoutDialog] = useState(false);
  const [verifyEmailDialog, setVerifyEmailDialog] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState('');
  
  // Success/Error modal states
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [modalDetails, setModalDetails] = useState('');
  
  // Edit data state
  const [editData, setEditData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Password change state
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Verification state
  const [verificationEmail, setVerificationEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isSendingVerification, setIsSendingVerification] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [activeVerificationStep, setActiveVerificationStep] = useState(0);

  // Toggle states
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  
  // Password visibility
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Activity stats
  const [activityStats, setActivityStats] = useState({
    lastLogin: null,
    totalLogins: 0,
    devices: 2,
    storageUsed: '1.2 GB'
  });

  // API loading states
  const [isUpdating, setIsUpdating] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Show success modal
  const showSuccess = useCallback((title, message, details = "") => {
    setModalTitle(title);
    setModalMessage(message);
    setModalDetails(details);
    setShowSuccessModal(true);
  }, []);

  // Show error modal
  const showError = useCallback((title, message, details = "") => {
    setModalTitle(title);
    setModalMessage(message);
    setModalDetails(details);
    setShowErrorModal(true);
  }, []);

  // Load user data on component mount
  useEffect(() => {
    const loadUserData = async () => {
      if (!user) {
        setLoading(true);
        try {
          const userData = await fetchUserData();
          setUser(userData);
          setVerificationEmail(userData.email || '');
          setEditData({
            name: userData.name || '',
            email: userData.email || '',
            phone: userData.phone || '',
            role: userData.role || 'user'
          });
          
          // Update activity stats
          if (userData.createdAt) {
            setActivityStats(prev => ({
              ...prev,
              lastLogin: userData.updatedAt || userData.createdAt,
              totalLogins: 1
            }));
          }
          
          showSuccess("Profile Loaded", "Your profile has been loaded successfully!");
        } catch (err) {
          setError(err.message);
          showError("Load Failed", "Failed to load your profile data");
          console.error('Failed to load user data:', err);
        } finally {
          setLoading(false);
        }
      } else {
        // User already exists from cookie
        setVerificationEmail(user.email || '');
        setEditData({
          name: user.name || '',
          email: user.email || '',
          phone: user.phone || '',
        });
        
        if (user.createdAt) {
          setActivityStats(prev => ({
            ...prev,
            lastLogin: user.updatedAt || user.createdAt,
            totalLogins: 1
          }));
        }
      }
    };

    loadUserData();
  }, []);

  // Update user profile
  const handleUpdateUser = async () => {
    if (!user) return;
    
    try {
      setIsUpdating(true);
      const response = await api.put('/auth/profile', editData);
      
      if (response.data && response.data.user) {
        const updatedUser = response.data.user;
        
        // Update local state
        setUser(updatedUser);
        
        // Update cookies
        Cookies.set('user', JSON.stringify(updatedUser), { expires: 7 });
        if (updatedUser.name) {
          document.cookie = `userName=${updatedUser.name}; path=/`;
        }
        if (updatedUser.email) {
          document.cookie = `userEmail=${updatedUser.email}; path=/`;
          document.cookie = `userSearchEmail=${updatedUser.email}; path=/`;
        }
        if (updatedUser.role) {
          document.cookie = `userRole=${updatedUser.role}; path=/`;
        }
        
        showSuccess("Profile Updated", "Your profile has been updated successfully!", "Changes have been saved to our database.");
        setEditModal(false);
      } else {
        throw new Error('Update failed');
      }
    } catch (err) {
      console.error('Error updating user:', err);
      showError("Update Failed", err.response?.data?.message || 'Failed to update your profile');
    } finally {
      setIsUpdating(false);
    }
  };

  // Change password
  const handleChangePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      showError("Validation Error", "New passwords do not match!");
      return;
    }
    
    if (passwordData.newPassword.length < 6) {
      showError("Validation Error", "Password must be at least 6 characters long!");
      return;
    }
    
    try {
      setIsChangingPassword(true);
      const response = await api.put("/auth/change-password", {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      });
      
      if (response.data && response.data.success) {
        showSuccess("Password Changed", "Your password has been changed successfully!", "You can now use your new password to log in.");
        setPasswordModal(false);
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
      } else {
        throw new Error('Password change failed');
      }
    } catch (err) {
      console.error('Error changing password:', err);
      showError("Password Change Failed", err.response?.data?.message || 'Failed to change your password');
    } finally {
      setIsChangingPassword(false);
    }
  };

  // Send verification email
  const handleSendVerificationEmail = async () => {
    if (!verificationEmail) {
      showError("Validation Error", "Please enter your email address");
      return;
    }
    
    try {
      setIsSendingVerification(true);
      const response = await api.post("/auth/send-verification", {
        email: verificationEmail
      });
      
      if (response.data && response.data.success) {
        showSuccess("Verification Sent", "Verification email sent successfully!", "Please check your inbox for the verification code.");
        setActiveVerificationStep(1);
      } else {
        throw new Error('Failed to send verification');
      }
    } catch (err) {
      console.error('Error sending verification:', err);
      showError("Verification Failed", err.response?.data?.message || 'Failed to send verification email');
    } finally {
      setIsSendingVerification(false);
    }
  };

  // Verify email with code
  const handleVerifyEmail = async () => {
    if (!verificationCode) {
      showError("Validation Error", "Please enter verification code");
      return;
    }
    
    try {
      setIsVerifying(true);
      const response = await api.post("/auth/verify-email", {
        code: verificationCode
      });
      
      if (response.data && response.data.success) {
        showSuccess("Email Verified", "Email verified successfully!", "Your email address is now verified.");
        
        // Refresh user data
        const userData = await fetchUserData();
        setUser(userData);
        
        // Update cookie
        Cookies.set('user', JSON.stringify({ ...user, isVerified: true }), { expires: 7 });
        
        setVerifyEmailDialog(false);
        setVerificationCode('');
        setActiveVerificationStep(0);
      } else {
        throw new Error('Verification failed');
      }
    } catch (err) {
      console.error('Error verifying email:', err);
      showError("Verification Failed", err.response?.data?.message || 'Failed to verify your email');
    } finally {
      setIsVerifying(false);
    }
  };

  // Delete user
  const handleDeleteUser = async () => {
    if (!user) return;
    
    if (deleteConfirmation !== 'DELETE') {
      showError("Confirmation Required", "Please type DELETE to confirm");
      return;
    }
    
    try {
      setIsDeleting(true);
      const response = await api.delete("/auth/profile");
      
      if (response.data && response.data.success) {
        showSuccess("Account Deleted", "Your account has been deleted successfully!", "All your data has been removed from our servers.");
        
        // Clear all user data
        Cookies.remove('user');
        document.cookie.split(";").forEach((c) => {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        
        setUser(null);
        setDeleteDialog(false);
        setDeleteConfirmation('');
        
        // Redirect to home page
        setTimeout(() => {
          window.location.href = '/';
        }, 3000);
      } else {
        throw new Error('Delete failed');
      }
    } catch (err) {
      console.error('Error deleting user:', err);
      showError("Delete Failed", err.response?.data?.message || 'Failed to delete your account');
    } finally {
      setIsDeleting(false);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      setLoading(true);
      // Call logout API
      const response = await api.post('/logout', null, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token') || ''}`
        },
        withCredentials: true
      });

      // Clear all cookies
      Cookies.remove('user');
      Cookies.remove('token');

      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });

      // Reset user state
      setUser(null);

      showSuccess("Logged Out", "You have been logged out successfully!");
      
      // Redirect to home after short delay
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);

    } catch (error) {
      console.error('Logout error:', error);
      showError("Logout Failed", "Failed to logout. Please try again.");
    } finally {
      setLoading(false);
      setLogoutDialog(false);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      return 'Invalid date';
    }
  };

  // Get user initials for avatar
  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Calculate account age
  const getAccountAge = (createdAt) => {
    if (!createdAt) return 'N/A';
    
    try {
      const created = new Date(createdAt);
      const now = new Date();
      const diffTime = Math.abs(now - created);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) return 'Today';
      if (diffDays < 30) return `${diffDays} days`;
      if (diffDays < 365) return `${Math.floor(diffDays / 30)} months`;
      return `${Math.floor(diffDays / 365)} years`;
    } catch (error) {
      return 'N/A';
    }
  };

  // Open edit modal
  const handleEditClick = () => {
    if (user) {
      setEditData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
      });
      setEditModal(true);
    }
  };

  // Open password modal
  const handlePasswordClick = () => {
    setPasswordModal(true);
  };

  // Open verify email modal
  const handleVerifyEmailClick = () => {
    setVerificationEmail(user?.email || '');
    setVerifyEmailDialog(true);
    setActiveVerificationStep(0);
  };

  // Refresh user data
  const handleRefresh = async () => {
    try {
      setLoading(true);
      const userData = await fetchUserData();
      setUser(userData);
      showSuccess("Profile Refreshed", "Your profile data has been refreshed!");
    } catch (err) {
      showError("Refresh Failed", "Failed to refresh your profile data");
    } finally {
      setLoading(false);
    }
  };

  if (loading && !user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center"
        >
          <div className="relative inline-block mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 border-4 border-blue-200 border-t-blue-500 rounded-full"
            ></motion.div>
            <AccountCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Loading Profile</h3>
          <p className="text-gray-600 mb-4">Fetching your account information from API...</p>
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "60%" }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"
          ></motion.div>
        </motion.div>
      </div>
    );
  }

  if (error && !user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center border border-gray-100"
        >
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Cancel className="text-4xl text-red-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Profile Error</h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRefresh}
              className="bg-gradient-to-t from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto gap-2 w-full"
            >
              <Refresh />
              Retry Loading
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/login'}
              className="bg-gradient-to-t from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto gap-2 w-full"
            >
              <Login />
              Go to Login
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center border border-gray-100"
        >
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AccountCircle className="text-4xl text-blue-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Not Logged In</h3>
          <p className="text-gray-600 mb-6">Please log in to view your profile</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-t from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
          >
            Go to Homepage
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#2f7ede] to-[#2f7ede] text-white p-4 md:p-6 lg:p-8">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ marginTop: '60px' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8 lg:mb-12 bg-gradient-to-t from-[#2f7ede] to-[#2f7ede] text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="p-3 bg-gradient-to-t from-blue-500 to-blue-400 rounded-2xl shadow-lg"
                >
                  <AccountCircle className="text-white text-3xl" />
                </motion.div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    My Profile
                  </h1>
                  <p className="text-gray-100 mt-1">Manage your account settings and preferences</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRefresh}
                className="bg-gradient-to-t from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white font-semibold py-2.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Refresh />
                Refresh
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLogoutDialog(true)}
                className="bg-gradient-to-t from-red-500 to-red-400 hover:from-red-600 hover:to-red-500 text-white font-semibold py-2.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Logout />
                Logout
              </motion.button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Overview */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-t from-[#2f7ede] to-[#2f7ede] text-white rounded-3xl shadow-2xl overflow-hidden border-0"
            >
              <div className="p-6 lg:p-8 text-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative"
                    >
                      <div className="h-24 w-24 sm:h-32 sm:w-32 border-4 border-white shadow-2xl rounded-full bg-white flex items-center justify-center">
                        <span className="text-3xl sm:text-4xl font-bold text-blue-600">
                          {getInitials(user?.name)}
                        </span>
                      </div>
                      {user?.isVerified && (
                        <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1.5 rounded-full shadow-lg">
                          <Verified className="text-sm" />
                        </div>
                      )}
                    </motion.div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold mb-2">{user?.name || 'No Name'}</h2>
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <Email className="text-sm text-blue-100" />
                        <p className="text-blue-100 opacity-90 text-sm sm:text-base">{user?.email}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${user?.isVerified ? 'bg-green-500/20 text-green-100' : 'bg-red-500/20 text-red-100'}`}>
                          {user?.isVerified ? <CheckCircle className="text-xs" /> : <Cancel className="text-xs" />}
                          {user?.isVerified ? 'Verified' : 'Unverified'}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white flex items-center gap-1">
                          {user?.role === 'admin' ? <Shield className="text-xs" /> : <Person className="text-xs" />}
                          {user?.role === 'admin' ? 'Admin' : 'User'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {/* Toggle verification */}}
                      title={user?.isVerified ? 'Mark as unverified' : 'Mark as verified'}
                      className="bg-white hover:bg-gray-100 shadow-lg rounded-full p-2 transition-colors duration-200"
                    >
                      {user?.isVerified ? <CheckCircle className="text-green-600" /> : <Cancel className="text-red-600" />}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleEditClick}
                      title="Edit profile"
                      className="bg-white hover:bg-gray-100 shadow-lg rounded-full p-2 transition-colors duration-200"
                    >
                      <Edit className="text-blue-600" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personal Information Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-t from-blue-500 to-blue-400 rounded-xl">
                    <Person className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Personal Information</h3>
                </div>
                <div className="h-px bg-gray-200 mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-1">
                        <Fingerprint className="text-blue-500 text-sm" />
                        <span className="text-xs font-medium text-gray-600">USER ID</span>
                      </div>
                      <p className="font-mono text-sm bg-white text-black p-2 rounded-lg break-all">
                        {user?.id}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <Email className="text-blue-600 text-sm" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Email Address</p>
                            <p className="font-semibold text-black truncate">{user?.email}</p>
                          </div>
                        </div>
                        {!user?.isVerified && (
                          <motion.div
                            animate={{
                              scale: [1, 1.05, 1],
                              transition: { 
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse"
                              }
                            }}
                          >
                            <button
                              onClick={handleVerifyEmailClick}
                              className="bg-gradient-to-t from-orange-500 to-orange-400 text-white text-xs px-3 py-1 rounded-lg"
                            >
                              Verify
                            </button>
                          </motion.div>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <Phone className="text-green-600 text-sm" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Phone Number</p>
                          <p className="font-semibold text-black">{user?.phone || 'Not provided'}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Account Information */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          {user?.role === 'admin' ? (
                            <AdminPanelSettings className="text-purple-600 text-sm" />
                          ) : (
                            <HowToReg className="text-purple-600 text-sm" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Account Type</p>
                          <p className="font-semibold text-blue-500">{user?.role === 'admin' ? 'Administrator' : 'Standard User'}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${user?.role === 'admin' ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'}`}>
                        {user?.role === 'admin' ? 'Admin' : 'User'}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
                        <div className="flex items-center gap-2 mb-1">
                          <CalendarToday className="text-purple-500 text-sm" />
                          <span className="text-xs font-medium text-gray-600">ACCOUNT AGE</span>
                        </div>
                        <p className="text-2xl font-bold text-purple-600">{getAccountAge(user?.createdAt)}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Created On</p>
                          <p className="text-sm font-medium bg-gray-50 text-black p-2 rounded-lg">
                            {formatDate(user?.createdAt)}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Last Updated</p>
                          <p className="text-sm font-medium bg-gray-50 text-black p-2 rounded-lg">
                            {formatDate(user?.updatedAt)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Activity Stats Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-t from-green-500 to-green-400 rounded-xl">
                    <History className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Activity Statistics</h3>
                </div>
                <div className="h-px bg-gray-200 mb-6"></div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50">
                    <History className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-600">{activityStats.totalLogins}</p>
                    <p className="text-sm text-gray-600">Total Logins</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50">
                    <Devices className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">{activityStats.devices}</p>
                    <p className="text-sm text-gray-600">Active Devices</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50">
                    <Storage className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-purple-600">{activityStats.storageUsed}</p>
                    <p className="text-sm text-gray-600">Storage Used</p>
                  </div>
                  
                  <div className="text-center p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50">
                    <Wifi className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-amber-600">Online</p>
                    <p className="text-sm text-gray-600">Status</p>
                  </div>
                </div>
                
                {activityStats.lastLogin && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CalendarToday className="h-4 w-4" />
                      <span>Last login: {formatDate(activityStats.lastLogin)}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Actions & Settings */}
          <div className="space-y-8">
            {/* Quick Actions Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-t from-green-500 to-green-400 rounded-xl">
                    <Settings className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Quick Actions</h3>
                </div>
                <div className="h-px bg-gray-200 mb-6"></div>
                
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleEditClick}
                    className="bg-gradient-to-t from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full flex items-center justify-center gap-2"
                  >
                    <Edit />
                    Edit Profile
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePasswordClick}
                    className="bg-gradient-to-t from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full flex items-center justify-center gap-2"
                  >
                    <Password />
                    Change Password
                  </motion.button>
                  
                  {!user?.isVerified && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleVerifyEmailClick}
                      className="bg-gradient-to-t from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full flex items-center justify-center gap-2"
                    >
                      <VerifiedUser />
                      Verify Email
                    </motion.button>
                  )}
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setDeleteDialog(true)}
                    className="border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 font-semibold py-3 rounded-xl transition-all duration-300 w-full flex items-center justify-center gap-2"
                  >
                    <Delete />
                    Delete Account
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Security Settings Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-t from-red-500 to-red-400 rounded-xl">
                    <Security className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Security Settings</h3>
                </div>
                <div className="h-px bg-gray-200 mb-6"></div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-black">Two-Factor Authentication</p>
                        <p className="text-sm text-gray-600">Enhanced account security</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={twoFactorEnabled}
                          onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-gray-600">Email Status</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${user?.isVerified ? 'bg-green-100' : 'bg-red-100'}`}>
                          {user?.isVerified ? (
                            <Verified className="text-green-600" />
                          ) : (
                            <Warning className="text-red-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-blue-400">{user?.isVerified ? 'Verified' : 'Unverified'}</p>
                          <p className="text-sm text-gray-600">Email address</p>
                        </div>
                      </div>
                      <button
                        onClick={handleVerifyEmailClick}
                        className={`font-semibold text-white px-3 py-1 rounded-lg ${user?.isVerified ? 'bg-gradient-to-t from-red-500 to-red-400' : 'bg-gradient-to-t from-green-500 to-green-400'}`}
                      >
                        {user?.isVerified ? 'Unverify' : 'Verify'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title={modalTitle}
        message={modalMessage}
        details={modalDetails}
      />

      {/* Error Modal */}
      <ErrorModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        title={modalTitle}
        message={modalMessage}
        details={modalDetails}
      />

      {/* Edit Profile Modal */}
      {editModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
              <div className="flex items-center gap-3">
                <Edit className="text-2xl" />
                <h3 className="text-xl font-bold">Edit Profile</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Person className="h-5 w-5 text-blue-500" />
                    </div>
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                      className="pl-10 w-full px-4 py-3 text-black bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter full name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Email className="h-5 w-5 text-blue-500" />
                    </div>
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                      className="pl-10 w-full px-4 text-black py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-blue-500" />
                    </div>
                    <input
                      type="tel"
                      value={editData.phone}
                      onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                      className="pl-10 w-full text-black px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50 flex justify-end gap-3">
              <button
                onClick={() => setEditModal(false)}
                className="border border-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateUser}
                disabled={isUpdating}
                className="bg-gradient-to-t from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-xl shadow-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUpdating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Change Password Modal */}
      {passwordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
              <div className="flex items-center gap-3">
                <Lock className="text-2xl" />
                <h3 className="text-xl font-bold">Change Password</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Key className="h-5 w-5 text-green-500" />
                    </div>
                    <input
                      type={showCurrentPassword ? 'text' : 'password'}
                      value={passwordData.currentPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                      className="pl-10 pr-10 w-full px-4 py-3 text-black bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter current password"
                    />
                    <div
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showCurrentPassword ? <VisibilityOff className="h-5 w-5 text-gray-400" /> : <Visibility className="h-5 w-5 text-gray-400" />}
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Password className="h-5 w-5 text-green-500" />
                    </div>
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                      className="pl-10 pr-10 w-full px-4 text-black py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter new password"
                    />
                    <div
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showNewPassword ? <VisibilityOff className="h-5 w-5 text-gray-400" /> : <Visibility className="h-5 w-5 text-gray-400" />}
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">Password must be at least 6 characters long</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Key className="h-5 w-5 text-green-500" />
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                      className={`pl-10 pr-10 w-full px-4 py-3 text-black bg-gray-50 border rounded-xl focus:ring-2 focus:border-transparent ${
                        passwordData.newPassword !== passwordData.confirmPassword && passwordData.confirmPassword
                          ? 'border-red-300 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-green-500'
                      }`}
                      placeholder="Confirm new password"
                    />
                    <div
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showConfirmPassword ? <VisibilityOff className="h-5 w-5 text-gray-400" /> : <Visibility className="h-5 w-5 text-gray-400" />}
                    </div>
                  </div>
                  {passwordData.newPassword !== passwordData.confirmPassword && passwordData.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">Passwords do not match</p>
                  )}
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50 flex justify-end gap-3">
              <button
                onClick={() => setPasswordModal(false)}
                className="border border-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleChangePassword}
                disabled={passwordData.newPassword !== passwordData.confirmPassword || passwordData.newPassword.length < 6 || isChangingPassword}
                className="bg-gradient-to-t from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-2 px-6 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isChangingPassword ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Updating...
                  </>
                ) : (
                  'Update Password'
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Verify Email Modal */}
      {verifyEmailDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white p-6">
              <div className="flex items-center gap-3">
                <VerifiedUser className="text-2xl" />
                <h3 className="text-xl font-bold">Verify Email Address</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6 mt-4">
                {/* Stepper */}
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeVerificationStep >= 0 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                      1
                    </div>
                    <div className={`w-16 h-1 ${activeVerificationStep >= 1 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeVerificationStep >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                      2
                    </div>
                    <div className={`w-16 h-1 ${activeVerificationStep >= 2 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeVerificationStep >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                      3
                    </div>
                  </div>
                </div>
                
                {activeVerificationStep === 0 && (
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <p className="text-sm text-blue-700">We'll send a verification code to your email address</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Email className="h-5 w-5 text-orange-500" />
                        </div>
                        <input
                          type="email"
                          value={verificationEmail}
                          onChange={(e) => setVerificationEmail(e.target.value)}
                          className="pl-10 w-full px-4 py-3 text-black bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter email address"
                          disabled
                        />
                      </div>
                    </div>
                    <button
                      onClick={handleSendVerificationEmail}
                      disabled={isSendingVerification || !verificationEmail}
                      className="bg-gradient-to-t from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold py-3 rounded-xl shadow-lg w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSendingVerification ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send />
                          Send Verification Code
                        </>
                      )}
                    </button>
                  </div>
                )}
                
                {activeVerificationStep === 1 && (
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-xl">
                      <p className="text-sm text-green-700">Verification code sent to {verificationEmail}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Verification Code</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Key className="h-5 w-5 text-orange-500" />
                        </div>
                        <input
                          type="text"
                          value={verificationCode}
                          onChange={(e) => setVerificationCode(e.target.value)}
                          className="pl-10 w-full px-4 py-3 text-black bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter 6-digit code"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setActiveVerificationStep(0)}
                        className="border border-gray-300 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors duration-200 w-full"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleVerifyEmail}
                        disabled={isVerifying || !verificationCode}
                        className="bg-gradient-to-t from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold py-3 rounded-xl shadow-lg w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isVerifying ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Verifying...
                          </>
                        ) : (
                          <>
                            <Verified />
                            Verify Email
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Delete Account Confirm Modal */}
      <ConfirmModal
        isOpen={deleteDialog}
        onClose={() => {
          setDeleteDialog(false);
          setDeleteConfirmation('');
        }}
        onConfirm={handleDeleteUser}
        title="Delete Account"
        message="Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently lost."
        type="error"
        isLoading={isDeleting}
        confirmText="Delete Account"
        cancelText="Cancel"
      />

      {/* Logout Confirm Modal */}
      <ConfirmModal
        isOpen={logoutDialog}
        onClose={() => setLogoutDialog(false)}
        onConfirm={handleLogout}
        title="Confirm Logout"
        message="Are you sure you want to logout from your account?"
        type="info"
        isLoading={loading}
        confirmText="Logout"
        cancelText="Stay Logged In"
      />
    </div>
  );
};
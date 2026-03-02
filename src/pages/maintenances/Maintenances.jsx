/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Build as BuildIcon,
  Plumbing as PlumbingIcon,
  ElectricalServices as ElectricalIcon,
  AcUnit as AcIcon,
  Kitchen as KitchenIcon,
  LocalLaundryService as LaundryIcon,
  Wifi as WifiIcon,
  Lock as LockIcon,
  Window as WindowIcon,
  Lightbulb as LightIcon,
  WaterDrop as WaterIcon,
  Fireplace as FireplaceIcon,
  Garage as GarageIcon,
  Roofing as RoofingIcon,
  PestControl as PestIcon,
  CleaningServices as CleaningIcon,
  CheckCircle as CheckIcon,
  Close as CloseIcon,
  PriorityHigh as PriorityIcon,
  Schedule as ScheduleIcon,
  Room as RoomIcon,
  Person as PersonIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Description as DescriptionIcon,
  AddPhotoAlternate as ImageIcon,
  Send as SendIcon,
  History as HistoryIcon,
  Warning as WarningIcon,
  Done as DoneIcon,
  Error as ErrorIcon,
  AccessTime as TimeIcon,
  Refresh as RefreshIcon,
  Star as StarIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  ShoppingCart,
  LocalBar,
  RestaurantMenu,
} from "@mui/icons-material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// API Configuration
const API_URL = "https://your-api-endpoint.com/maintenance"; // Replace with your actual API

// Maintenance Categories with gradient colors
const maintenanceCategories = [
  { id: "plumbing", label: "Plumbing", icon: <PlumbingIcon />, gradient: "from-blue-500 to-indigo-600" },
  { id: "electrical", label: "Electrical", icon: <ElectricalIcon />, gradient: "from-yellow-500 to-amber-600" },
  { id: "hvac", label: "HVAC", icon: <AcIcon />, gradient: "from-cyan-500 to-blue-600" },
  { id: "appliance", label: "Appliance", icon: <KitchenIcon />, gradient: "from-purple-500 to-indigo-600" },
  { id: "wifi", label: "WiFi/Internet", icon: <WifiIcon />, gradient: "from-green-500 to-emerald-600" },
  { id: "lock", label: "Locks/Security", icon: <LockIcon />, gradient: "from-red-500 to-rose-600" },
  { id: "window", label: "Windows/Doors", icon: <WindowIcon />, gradient: "from-indigo-500 to-blue-600" },
  { id: "lighting", label: "Lighting", icon: <LightIcon />, gradient: "from-amber-500 to-yellow-600" },
  { id: "water", label: "Water/Leaks", icon: <WaterIcon />, gradient: "from-sky-500 to-blue-600" },
  { id: "pest", label: "Pest Control", icon: <PestIcon />, gradient: "from-amber-700 to-amber-900" },
  { id: "cleaning", label: "Cleaning", icon: <CleaningIcon />, gradient: "from-teal-500 to-cyan-600" },
  { id: "other", label: "Other", icon: <BuildIcon />, gradient: "from-gray-500 to-gray-700" }
];

// Priority Levels with gradients
const priorityLevels = [
  { id: "low", label: "Low", gradient: "from-green-500 to-green-600", icon: <TimeIcon /> },
  { id: "medium", label: "Medium", gradient: "from-yellow-500 to-amber-500", icon: <ScheduleIcon /> },
  { id: "high", label: "High", gradient: "from-orange-500 to-red-500", icon: <WarningIcon /> },
  { id: "emergency", label: "Emergency", gradient: "from-red-600 to-rose-600", icon: <ErrorIcon /> }
];

// Status Badge Component with gradients
const StatusBadge = ({ status }) => {
  const statusConfig = {
    pending: { gradient: "from-yellow-400 to-amber-500", icon: <TimeIcon className="text-sm" />, label: "Pending" },
    in_progress: { gradient: "from-blue-400 to-indigo-500", icon: <RefreshIcon className="text-sm" />, label: "In Progress" },
    completed: { gradient: "from-green-400 to-emerald-500", icon: <DoneIcon className="text-sm" />, label: "Completed" },
    cancelled: { gradient: "from-red-400 to-rose-500", icon: <ErrorIcon className="text-sm" />, label: "Cancelled" }
  };

  const config = statusConfig[status] || statusConfig.pending;

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${config.gradient} shadow-sm`}>
      {config.icon}
      {config.label}
    </span>
  );
};

// Maintenance Request Card with gradients
const MaintenanceCard = ({ request, onViewDetails, onTrackStatus }) => {
  const category = maintenanceCategories.find(c => c.id === request.category) || maintenanceCategories[11];
  const priority = priorityLevels.find(p => p.id === request.priority) || priorityLevels[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8, 
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { type: "spring", stiffness: 300 }
      }}
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300"
      onClick={() => onViewDetails(request)}
    >
      <div className={`h-2 bg-gradient-to-r ${priority.gradient}`} />
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-lg`}>
            <div className="text-2xl">
              {category.icon}
            </div>
          </div>
          <StatusBadge status={request.status} />
        </div>

        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{request.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{request.description}</p>

        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center gap-2 text-gray-400">
            <RoomIcon className="text-gray-400 text-base" />
            <span className="font-medium">Room {request.roomNumber}</span>
          </div>
          <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-white bg-gradient-to-r ${priority.gradient} shadow-sm`}>
            {priority.icon}
            <span className="text-xs font-medium">{priority.label}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <ScheduleIcon className="text-base" />
            <span>{new Date(request.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <motion.button
            whileHover={{ x: 3 }}
            onClick={(e) => {
              e.stopPropagation();
              onTrackStatus(request);
            }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 text-sm font-semibold flex items-center gap-1"
          >
            Track Status
            <ArrowForwardIcon className="text-sm" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Maintenance Form Component with gradients
const MaintenanceForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: "medium",
    roomNumber: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    preferredTime: "",
    images: [],
    urgent: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!formData.category) {
      newErrors.category = "Please select a category";
    }
    if (!formData.roomNumber) {
      newErrors.roomNumber = "Room number is required";
    }
    if (!formData.contactName.trim()) {
      newErrors.contactName = "Contact name is required";
    }
    if (!formData.contactPhone.trim()) {
      newErrors.contactPhone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(formData.contactPhone.replace(/\D/g, ''))) {
      newErrors.contactPhone = "Please enter a valid phone number";
    }
    if (formData.contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
      newErrors.contactEmail = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files.map(f => f.name)]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const requestData = {
        ...formData,
        roomNumber: parseInt(formData.roomNumber),
        createdAt: new Date().toISOString(),
        status: "pending",
        requestId: "REQ" + Math.floor(Math.random() * 10000)
      };

      await onSubmit(requestData);
      
      toast.success("Maintenance request submitted successfully!");
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error submitting request:", error);
      toast.error(error.response?.data?.message || "Failed to submit request");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { number: 1, title: "Issue Details", icon: <DescriptionIcon /> },
    { number: 2, title: "Contact Information", icon: <PersonIcon /> },
    { number: 3, title: "Additional Info", icon: <ImageIcon /> }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className="sticky top-0 bg-gradient-to-t from-gray-800 via-gray-900 to-black text-white p-6 rounded-t-2xl border-b border-gray-700">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <BuildIcon className="text-yellow-400" />
                Submit Maintenance Request
              </h2>
              <p className="text-gray-400 mt-1">We'll fix it as soon as possible</p>
            </div>
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 bg-gradient-to-t from-red-500 to-red-700 text-white rounded-full transition-colors hover:shadow-lg"
            >
              <CloseIcon />
            </motion.button>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between mt-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`flex items-center gap-2 transition-all ${
                  currentStep >= step.number ? 'text-white' : 'text-gray-500'
                }`}
              >
                <motion.div 
                  animate={currentStep >= step.number ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3 }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep >= step.number 
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-700 text-white shadow-lg' 
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {currentStep > step.number ? <CheckIcon className="text-sm" /> : step.number}
                </motion.div>
                <span className="hidden md:block text-sm font-medium">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 text-white">
          {/* Step 1: Issue Details */}
          <div className={currentStep === 1 ? 'block' : 'hidden'}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Brief description of the issue"
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all text-white placeholder-gray-500 ${
                    errors.title ? 'border-red-500' : 'border-gray-700'
                  }`}
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-500">{errors.title}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {maintenanceCategories.map((cat) => (
                    <motion.div
                      key={cat.id}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData(prev => ({ ...prev, category: cat.id }))}
                      className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                        formData.category === cat.id
                          ? `border-transparent bg-gradient-to-br ${cat.gradient} text-white shadow-lg`
                          : 'border-gray-700 hover:border-yellow-500 bg-gray-800'
                      }`}
                    >
                      <div className={`text-3xl mb-2 ${formData.category === cat.id ? 'text-white' : `text-transparent bg-clip-text bg-gradient-to-br ${cat.gradient}`}`}>
                        {cat.icon}
                      </div>
                      <span className={`text-sm font-medium ${formData.category === cat.id ? 'text-white' : 'text-gray-300'}`}>
                        {cat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-500">{errors.category}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Please provide detailed description of the issue..."
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all text-white placeholder-gray-500 ${
                    errors.description ? 'border-red-500' : 'border-gray-700'
                  }`}
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-500">{errors.description}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Room Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="roomNumber"
                    value={formData.roomNumber}
                    onChange={handleChange}
                    placeholder="e.g., 101"
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all text-white placeholder-gray-500 ${
                      errors.roomNumber ? 'border-red-500' : 'border-gray-700'
                    }`}
                  />
                  {errors.roomNumber && (
                    <p className="mt-1 text-sm text-red-500">{errors.roomNumber}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Priority Level
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all text-white"
                  >
                    {priorityLevels.map(p => (
                      <option key={p.id} value={p.id}>{p.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Contact Information */}
          <div className={currentStep === 2 ? 'block' : 'hidden'}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <PersonIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all text-white placeholder-gray-500 ${
                      errors.contactName ? 'border-red-500' : 'border-gray-700'
                    }`}
                  />
                </div>
                {errors.contactName && (
                  <p className="mt-1 text-sm text-red-500">{errors.contactName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all text-white placeholder-gray-500 ${
                      errors.contactPhone ? 'border-red-500' : 'border-gray-700'
                    }`}
                  />
                </div>
                {errors.contactPhone && (
                  <p className="mt-1 text-sm text-red-500">{errors.contactPhone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <EmailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all text-white placeholder-gray-500 ${
                      errors.contactEmail ? 'border-red-500' : 'border-gray-700'
                    }`}
                  />
                </div>
                {errors.contactEmail && (
                  <p className="mt-1 text-sm text-red-500">{errors.contactEmail}</p>
                )}
              </div>
            </div>
          </div>

          {/* Step 3: Additional Info */}
          <div className={currentStep === 3 ? 'block' : 'hidden'}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Time for Maintenance
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all text-white"
                >
                  <option value="">Anytime</option>
                  <option value="morning">Morning (8AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 4PM)</option>
                  <option value="evening">Evening (4PM - 8PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Upload Photos (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 text-center hover:border-yellow-500 transition-all group bg-gray-800">
                  <ImageIcon className="text-5xl text-gray-600 mx-auto mb-2 group-hover:text-yellow-500 transition-colors" />
                  <p className="text-gray-400 mb-2">Drag & drop photos here or click to browse</p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="inline-block px-4 py-2 bg-gradient-to-t from-yellow-500 to-yellow-700 text-white rounded-lg cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                  >
                    Browse Files
                  </label>
                </div>
                {formData.images.length > 0 && (
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {formData.images.map((img, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-sm text-gray-300">
                        {img}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-red-900/30 to-rose-900/30 rounded-xl border border-red-800">
                <input
                  type="checkbox"
                  name="urgent"
                  id="urgent"
                  checked={formData.urgent}
                  onChange={handleChange}
                  className="w-4 h-4 text-red-600 rounded focus:ring-red-500 bg-gray-800 border-gray-700"
                />
                <label htmlFor="urgent" className="text-sm font-medium text-red-400">
                  This is an urgent issue (requires immediate attention)
                </label>
              </div>
            </div>
          </div>

          {/* Navigation Buttons with gradients */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-700">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                currentStep === 1
                  ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-t from-gray-700 to-gray-800 text-white hover:shadow-md'
              }`}
              disabled={currentStep === 1}
            >
              <ArrowBackIcon className="text-sm" />
              Previous
            </motion.button>
            
            {currentStep < 3 ? (
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentStep(prev => prev + 1)}
                className="px-6 py-3 bg-gradient-to-t from-yellow-500 to-yellow-700 text-white rounded-xl font-medium hover:shadow-lg transition-all flex items-center gap-2"
              >
                Next Step
                <ArrowForwardIcon className="text-sm" />
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={`px-8 py-3 bg-gradient-to-t from-green-500 to-green-700 text-white rounded-xl font-medium hover:shadow-lg transition-all flex items-center gap-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <SendIcon />
                    Submit Request
                  </>
                )}
              </motion.button>
            )}
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

// Track Status Modal with gradients
const TrackStatusModal = ({ request, onClose }) => {
  const steps = [
    { status: "pending", label: "Request Received", icon: <ScheduleIcon />, gradient: "from-yellow-400 to-amber-500" },
    { status: "in_progress", label: "In Progress", icon: <RefreshIcon />, gradient: "from-blue-400 to-indigo-500" },
    { status: "completed", label: "Completed", icon: <DoneIcon />, gradient: "from-green-400 to-emerald-500" }
  ];

  const currentStepIndex = steps.findIndex(s => s.status === request.status);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Track Request
          </h3>
          <motion.button
            whileHover={{ rotate: 90, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-2 bg-gradient-to-t from-red-500 to-red-700 text-white rounded-full transition-colors hover:shadow-lg"
          >
            <CloseIcon />
          </motion.button>
        </div>

        <div className="mb-6 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700">
          <h4 className="font-bold text-white">{request.title}</h4>
          <p className="text-sm text-gray-400 mt-1">Request #{request.requestId}</p>
        </div>

        {/* Timeline with gradients */}
        <div className="relative">
          {steps.map((step, index) => (
            <div key={step.status} className="flex items-start gap-4 mb-8">
              <motion.div 
                animate={index === currentStepIndex ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 1, repeat: index === currentStepIndex ? Infinity : 0 }}
                className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${
                  index <= currentStepIndex ? step.gradient : 'from-gray-700 to-gray-800'
                } shadow-lg`}
              >
                {step.icon}
              </motion.div>
              <div className="flex-1">
                <p className={`font-bold ${
                  index <= currentStepIndex ? 'text-white' : 'text-gray-500'
                }`}>
                  {step.label}
                </p>
                {index === currentStepIndex && request.updatedAt && (
                  <p className="text-sm text-gray-400 mt-1">
                    Updated: {new Date(request.updatedAt).toLocaleString()}
                  </p>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={`absolute left-6 top-12 w-0.5 h-12 -translate-x-1/2 bg-gradient-to-b ${
                  index < currentStepIndex ? steps[index].gradient : 'from-gray-700 to-gray-700'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Estimated Time with gradient */}
        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-xl text-white">
          <div className="flex items-center gap-2 mb-2">
            <TimeIcon />
            <span className="font-semibold">Estimated completion:</span>
          </div>
          <p className="text-white/90 pl-7">
            {request.status === 'completed' 
              ? 'Completed' 
              : request.priority === 'emergency'
                ? 'Within 2 hours'
                : request.priority === 'high'
                  ? 'Within 4 hours'
                  : 'Within 24 hours'
            }
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClose}
          className="w-full mt-6 px-4 py-3 bg-gradient-to-t from-red-500 to-red-700 text-white rounded-xl font-medium hover:shadow-md transition-all hover:scale-105"
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

// Main Component
export const Maintenance = () => {
  const [requests, setRequests] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showTrackModal, setShowTrackModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    completed: 0
  });

  // Fetch maintenance requests
  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    setIsLoading(true);
    try {
      // Replace with your actual API endpoint
      const response = await axios.get(`${API_URL}/requests`);
      setRequests(response.data);
      
      const newStats = {
        total: response.data.length,
        pending: response.data.filter(r => r.status === 'pending').length,
        inProgress: response.data.filter(r => r.status === 'in_progress').length,
        completed: response.data.filter(r => r.status === 'completed').length
      };
      setStats(newStats);
    } catch (error) {
      console.error("Error fetching requests:", error);
      toast.error("Failed to load maintenance requests");
      
      // Mock data for demo
      const mockRequests = [
        {
          id: 1,
          requestId: "REQ1234",
          title: "Leaking Faucet",
          description: "Bathroom sink faucet is leaking continuously",
          category: "plumbing",
          priority: "medium",
          roomNumber: 101,
          status: "pending",
          createdAt: new Date().toISOString(),
          contactName: "John Doe"
        },
        {
          id: 2,
          requestId: "REQ1235",
          title: "AC Not Cooling",
          description: "Air conditioner is blowing warm air",
          category: "hvac",
          priority: "high",
          roomNumber: 205,
          status: "in_progress",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          contactName: "Jane Smith"
        },
        {
          id: 3,
          requestId: "REQ1236",
          title: "Broken Light",
          description: "Bedroom light fixture not working",
          category: "lighting",
          priority: "low",
          roomNumber: 304,
          status: "completed",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          contactName: "Bob Johnson"
        }
      ];
      setRequests(mockRequests);
      setStats({
        total: 3,
        pending: 1,
        inProgress: 1,
        completed: 1
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitRequest = async (requestData) => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.post(`${API_URL}/requests`, requestData);
      
      setRequests(prev => [response.data, ...prev]);
      setStats(prev => ({
        ...prev,
        total: prev.total + 1,
        pending: prev.pending + 1
      }));
      
      toast.success("Maintenance request submitted successfully!");
    } catch (error) {
      console.error("Error submitting request:", error);
      
      // Mock success for demo
      const mockResponse = {
        ...requestData,
        id: Date.now()
      };
      setRequests(prev => [mockResponse, ...prev]);
      setStats(prev => ({
        ...prev,
        total: prev.total + 1,
        pending: prev.pending + 1
      }));
      
      throw error;
    }
  };

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
    toast.info(`Viewing details for request #${request.requestId}`);
  };

  const handleTrackStatus = (request) => {
    setSelectedRequest(request);
    setShowTrackModal(true);
  };

  const filteredRequests = requests.filter(req => {
    if (filter === "all") return true;
    return req.status === filter;
  });

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 mx-auto mb-6 rounded-full border-4 border-gray-700 border-t-yellow-500"
          />
          <p className="text-xl font-medium bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Loading maintenance requests...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900">
        {/* Header with gradient */}
        <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row justify-between items-center gap-6"
            >
              <div>
                <motion.h1 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl font-black flex items-center gap-3 mb-4 text-white"
                >
                  <BuildIcon className="text-4xl text-yellow-400" />
                  Maintenance Requests
                </motion.h1>
                <motion.p 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-400 text-lg max-w-2xl"
                >
                  Submit and track maintenance requests for your room. We'll address your concerns promptly.
                </motion.p>
              </div>
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 30px -10px rgba(234, 179, 8, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowForm(true)}
                className="px-8 py-4 bg-gradient-to-t from-yellow-500 to-yellow-700 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 hover:scale-105"
              >
                <BuildIcon />
                New Request
              </motion.button>
            </motion.div>

            {/* Stats Cards with gradients */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-500/20 rounded-xl">
                    <BuildIcon className="text-2xl text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{stats.total}</div>
                    <div className="text-gray-400">Total Requests</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-500/20 rounded-xl">
                    <TimeIcon className="text-2xl text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">{stats.pending}</div>
                    <div className="text-gray-400">Pending</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <RefreshIcon className="text-2xl text-blue-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400">{stats.inProgress}</div>
                    <div className="text-gray-400">In Progress</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <DoneIcon className="text-2xl text-green-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400">{stats.completed}</div>
                    <div className="text-gray-400">Completed</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Filters with gradients */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-3 mb-8">
            {["all", "pending", "in_progress", "completed"].map((status, index) => (
              <motion.button
                key={status}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(status)}
                className={`px-6 py-2 rounded-xl font-medium transition-all ${
                  filter === status
                    ? status === 'pending' 
                      ? 'bg-gradient-to-t from-yellow-500 to-yellow-700 text-white shadow-lg'
                      : status === 'in_progress'
                        ? 'bg-gradient-to-t from-blue-500 to-blue-700 text-white shadow-lg'
                        : status === 'completed'
                          ? 'bg-gradient-to-t from-green-500 to-green-700 text-white shadow-lg'
                          : 'bg-gradient-to-t from-yellow-500 to-yellow-700 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                {status === 'all' ? 'All Requests' : 
                 status === 'in_progress' ? 'In Progress' :
                 status.charAt(0).toUpperCase() + status.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Requests Grid */}
          {filteredRequests.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRequests.map((request, index) => (
                <MaintenanceCard
                  key={request.id}
                  request={request}
                  onViewDetails={handleViewDetails}
                  onTrackStatus={handleTrackStatus}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <BuildIcon className="text-7xl text-gray-600 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">No maintenance requests</h3>
              <p className="text-gray-400 mb-6">There are no {filter !== 'all' ? filter : ''} requests at the moment.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowForm(true)}
                className="px-8 py-3 bg-gradient-to-t from-yellow-500 to-yellow-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Submit a Request
              </motion.button>
            </motion.div>
          )}
        </div>

        {/* Forms and Modals */}
        <AnimatePresence>
          {showForm && (
            <MaintenanceForm
              onSubmit={handleSubmitRequest}
              onClose={() => setShowForm(false)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showTrackModal && selectedRequest && (
            <TrackStatusModal
              request={selectedRequest}
              onClose={() => {
                setShowTrackModal(false);
                setSelectedRequest(null);
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
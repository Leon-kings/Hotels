/* eslint-disable no-unused-vars */
// Calendar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Material Icons as SVG components
const Icon = ({ name, className = "w-6 h-6" }) => {
  const icons = {
    // Navigation
    menu: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg> ),
    close: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg> ),
    arrow_back: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg> ),
    arrow_forward: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg> ),
    arrow_up: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/></svg> ),
    arrow_down: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg> ),
    
    // Calendar & Time
    calendar: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg> ),
    today: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg> ),
    date_range: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg> ),
    
    // Time Icons
    access_time: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg> ),
    schedule: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg> ),
    hour_empty: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"/></svg> ),
    
    // Event Icons
    event: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg> ),
    event_available: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg> ),
    event_busy: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M9.31 17l2.44-2.44L14.19 17l1.06-1.06-2.44-2.44 2.44-2.44L14.19 10l-2.44 2.44L9.31 10l-1.06 1.06 2.44 2.44-2.44 2.44L9.31 17zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg> ),
    
    // Room & Booking
    meeting_room: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z"/></svg> ),
    hotel: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg> ),
    
    // Status
    check_circle: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> ),
    cancel: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg> ),
    pending: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg> ),
    
    // Actions
    add: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg> ),
    edit: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg> ),
    delete: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg> ),
    
    // Weather
    wb_sunny: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/></svg> ),
    
    // Info
    info: ( <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg> )
  };
  return icons[name] || null;
};

// Real-time clock component
const RealTimeClock = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };
  
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  return (
    <motion.div 
      className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 border border-blue-600/30"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600/30 p-3 rounded-lg">
            <Icon name="access_time" className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Current Date & Time</p>
            <p className="text-2xl font-bold text-white">{formatTime(time)}</p>
            <p className="text-sm text-gray-400">{formatDate(time)}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">Timezone</p>
          <p className="text-sm font-medium text-white">
            {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Calendar Day component
const CalendarDay = ({ day, isCurrentMonth, isToday, isSelected, hasEvent, onClick, events = [] }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative w-full aspect-square rounded-lg flex flex-col items-center justify-center
        transition-all duration-200
        ${isCurrentMonth ? 'bg-gray-800/50 hover:bg-gray-700' : 'bg-gray-800/20 text-gray-600'}
        ${isToday ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-900' : ''}
        ${isSelected ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : ''}
      `}
    >
      <span className={`text-sm font-medium ${isSelected ? 'text-white' : isCurrentMonth ? 'text-white' : 'text-gray-600'}`}>
        {day}
      </span>
      
      {/* Event indicators */}
      {events.length > 0 && (
        <div className="absolute bottom-1 flex space-x-1">
          {events.slice(0, 3).map((event, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full ${
                event.status === 'confirmed' ? 'bg-green-500' :
                event.status === 'pending' ? 'bg-yellow-500' :
                event.status === 'cancelled' ? 'bg-red-500' : 'bg-blue-500'
              }`}
            />
          ))}
          {events.length > 3 && (
            <span className="text-xs text-gray-400">+{events.length - 3}</span>
          )}
        </div>
      )}
    </motion.button>
  );
};

// Event Card component
const EventCard = ({ event, onEdit, onDelete }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'confirmed': return 'bg-green-600/20 text-green-400 border-green-600/30';
      case 'pending': return 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30';
      case 'cancelled': return 'bg-red-600/20 text-red-400 border-red-600/30';
      default: return 'bg-blue-600/20 text-blue-400 border-blue-600/30';
    }
  };
  
  const getStatusIcon = (status) => {
    switch(status) {
      case 'confirmed': return 'check_circle';
      case 'pending': return 'pending';
      case 'cancelled': return 'cancel';
      default: return 'event';
    }
  };
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-blue-600/50 transition-all"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className={`p-1.5 rounded ${getStatusColor(event.status)}`}>
            <Icon name={getStatusIcon(event.status)} className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">{event.title}</h4>
            <p className="text-xs text-gray-400">{event.time}</p>
          </div>
        </div>
        <div className="flex space-x-1">
          <button
            onClick={() => onEdit(event)}
            className="p-1 hover:bg-gray-700 rounded transition-colors"
          >
            <Icon name="edit" className="w-4 h-4 text-gray-400" />
          </button>
          <button
            onClick={() => onDelete(event.id)}
            className="p-1 hover:bg-gray-700 rounded transition-colors"
          >
            <Icon name="delete" className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
      
      {event.roomType && (
        <div className="flex items-center space-x-2 mt-2 text-xs">
          <Icon name="meeting_room" className="w-3 h-3 text-gray-500" />
          <span className="text-gray-400">{event.roomType}</span>
        </div>
      )}
      
      {event.guests && (
        <div className="flex items-center space-x-2 mt-1 text-xs">
          <Icon name="hotel" className="w-3 h-3 text-gray-500" />
          <span className="text-gray-400">{event.guests} guests</span>
        </div>
      )}
      
      <div className={`mt-2 text-xs px-2 py-1 rounded-full inline-block ${getStatusColor(event.status)}`}>
        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
      </div>
    </motion.div>
  );
};

// Add Event Modal
const AddEventModal = ({ isOpen, onClose, onSave, selectedDate, eventToEdit = null }) => {
  const [formData, setFormData] = useState({
    title: '',
    time: '10:00',
    endTime: '11:00',
    roomType: 'Standard Room',
    guests: 2,
    status: 'pending',
    notes: ''
  });
  
  useEffect(() => {
    if (eventToEdit) {
      setFormData(eventToEdit);
    } else {
      setFormData({
        title: '',
        time: '10:00',
        endTime: '11:00',
        roomType: 'Standard Room',
        guests: 2,
        status: 'pending',
        notes: ''
      });
    }
  }, [eventToEdit, isOpen]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: eventToEdit?.id || Date.now(),
      date: selectedDate
    });
  };
  
  const roomTypes = [
    'Standard Room',
    'Deluxe Room',
    'Suite',
    'Executive Suite',
    'Presidential Suite'
  ];
  
  if (!isOpen) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-900 rounded-xl max-w-md w-full border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-xl font-bold text-white">
            {eventToEdit ? 'Edit Event' : 'Add New Event'}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            {selectedDate?.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Event Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              placeholder="e.g., Check-in, Meeting, etc."
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Start Time
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                End Time
              </label>
              <input
                type="time"
                value={formData.endTime}
                onChange={(e) => setFormData({...formData, endTime: e.target.value})}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Room Type
            </label>
            <select
              value={formData.roomType}
              onChange={(e) => setFormData({...formData, roomType: e.target.value})}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            >
              {roomTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Number of Guests
            </label>
            <input
              type="number"
              min="1"
              max="10"
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              rows="3"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white resize-none"
              placeholder="Additional notes..."
            />
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button
              type="submit"
              className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              {eventToEdit ? 'Update Event' : 'Add Event'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 bg-gray-800 text-gray-300 rounded-lg font-medium hover:bg-gray-700 transition-all border border-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

// Main Calendar Component
export const UserCalendar=() => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [view, setView] = useState('month'); // 'month', 'week', 'day'
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [selectedViewDate, setSelectedViewDate] = useState(new Date());
  
  // Load events from localStorage
  useEffect(() => {
    const savedEvents = localStorage.getItem('calendarEvents');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    } else {
      // Sample events
      const sampleEvents = [
        {
          id: 1,
          title: 'Check-in: John Smith',
          date: new Date().toISOString(),
          time: '14:00',
          endTime: '15:00',
          roomType: 'Deluxe Room',
          guests: 2,
          status: 'confirmed',
          notes: 'Early check-in requested'
        },
        {
          id: 2,
          title: 'Spa Appointment',
          date: new Date(Date.now() + 86400000).toISOString(),
          time: '10:30',
          endTime: '12:00',
          roomType: 'Suite',
          guests: 1,
          status: 'confirmed',
          notes: 'Couples massage'
        },
        {
          id: 3,
          title: 'Meeting with Events Team',
          date: new Date(Date.now() + 172800000).toISOString(),
          time: '09:00',
          endTime: '10:30',
          roomType: 'Executive Suite',
          guests: 4,
          status: 'pending',
          notes: 'Wedding planning'
        }
      ];
      setEvents(sampleEvents);
      localStorage.setItem('calendarEvents', JSON.stringify(sampleEvents));
    }
  }, []);

  // Save events to localStorage
  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);

  // Get days in month
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Get first day of month (0-6, where 0 is Sunday)
  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Previous month days
    const prevMonthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, prevMonthDays - i)
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i)
      });
    }

    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days = 42
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i)
      });
    }

    return days;
  };

  // Check if date is today
  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  // Check if date is selected
  const isSelected = (date) => {
    return date.toDateString() === selectedDate.toDateString();
  };

  // Get events for a specific date
  const getEventsForDate = (date) => {
    return events.filter(event => 
      new Date(event.date).toDateString() === date.toDateString()
    );
  };

  // Handle previous month
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Handle next month
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Handle today
  const handleToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  // Handle add event
  const handleAddEvent = () => {
    setEditingEvent(null);
    setEventModalOpen(true);
  };

  // Handle save event
  const handleSaveEvent = (eventData) => {
    if (editingEvent) {
      setEvents(events.map(e => e.id === eventData.id ? eventData : e));
      toast.success('Event updated successfully!');
    } else {
      setEvents([...events, eventData]);
      toast.success('Event added successfully!');
    }
    setEventModalOpen(false);
  };

  // Handle edit event
  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setEventModalOpen(true);
  };

  // Handle delete event
  const handleDeleteEvent = (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter(e => e.id !== eventId));
      toast.success('Event deleted successfully!');
    }
  };

  // Calendar days
  const calendarDays = generateCalendarDays();
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div className="w-full py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 mt-2 text-white">
              Event{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Calendar
              </span>
            </h1>
            <motion.p 
              className="text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Manage your bookings, events, and schedules in real-time
            </motion.p>
          </motion.div>

          {/* Real-time Clock */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <RealTimeClock />
          </motion.div>

          {/* Calendar Controls */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto mb-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <motion.button
                  variants={itemVariants}
                  onClick={handlePrevMonth}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Icon name="arrow_back" className="w-5 h-5" />
                </motion.button>
                <motion.h2 
                  variants={itemVariants}
                  className="text-xl font-bold text-white min-w-[200px] text-center"
                >
                  {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </motion.h2>
                <motion.button
                  variants={itemVariants}
                  onClick={handleNextMonth}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Icon name="arrow_forward" className="w-5 h-5" />
                </motion.button>
              </div>
              
              <div className="flex items-center space-x-2">
                <motion.button
                  variants={itemVariants}
                  onClick={handleToday}
                  className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                >
                  Today
                </motion.button>
                <motion.button
                  variants={itemVariants}
                  onClick={handleAddEvent}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all text-sm font-medium flex items-center space-x-2"
                >
                  <Icon name="add" className="w-4 h-4" />
                  <span>Add Event</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Calendar Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto bg-gray-900/30 backdrop-blur-lg rounded-xl border border-gray-800 p-6"
          >
            {/* Week days header */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {weekDays.map((day, index) => (
                <motion.div
                  key={day}
                  variants={itemVariants}
                  className="text-center text-sm font-medium text-gray-400 py-2"
                >
                  {day}
                </motion.div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, index) => {
                const dayEvents = getEventsForDate(day.date);
                return (
                  <CalendarDay
                    key={index}
                    day={day.day}
                    isCurrentMonth={day.isCurrentMonth}
                    isToday={isToday(day.date)}
                    isSelected={isSelected(day.date)}
                    hasEvent={dayEvents.length > 0}
                    events={dayEvents}
                    onClick={() => setSelectedDate(day.date)}
                  />
                );
              })}
            </div>
          </motion.div>

          {/* Selected Date Events */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto mt-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">
                Events for {selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h3>
              <button
                onClick={handleAddEvent}
                className="text-sm text-blue-400 hover:text-blue-300 flex items-center space-x-1"
              >
                <Icon name="add" className="w-4 h-4" />
                <span>Add Event</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getEventsForDate(selectedDate).length > 0 ? (
                getEventsForDate(selectedDate).map(event => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onEdit={handleEditEvent}
                    onDelete={handleDeleteEvent}
                  />
                ))
              ) : (
                <motion.div 
                  variants={itemVariants}
                  className="col-span-full bg-gray-800/30 rounded-lg p-8 text-center border border-gray-700"
                >
                  <Icon name="event" className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400">No events scheduled for this day</p>
                  <button
                    onClick={handleAddEvent}
                    className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    + Add an event
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Upcoming Events Preview */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto mt-8"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Upcoming Events</h3>
            <div className="bg-gray-800/30 rounded-lg border border-gray-700 divide-y divide-gray-700">
              {events
                .filter(e => new Date(e.date) >= new Date())
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .slice(0, 5)
                .map((event, index) => (
                  <div key={event.id} className="flex items-center justify-between p-4 hover:bg-gray-800/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-600/20 p-2 rounded-lg">
                        <Icon name="event" className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{event.title}</h4>
                        <p className="text-xs text-gray-400">
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })} at {event.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        event.status === 'confirmed' ? 'bg-green-600/20 text-green-400' :
                        event.status === 'pending' ? 'bg-yellow-600/20 text-yellow-400' :
                        'bg-red-600/20 text-red-400'
                      }`}>
                        {event.status}
                      </span>
                      <button
                        onClick={() => handleEditEvent(event)}
                        className="p-1 hover:bg-gray-700 rounded"
                      >
                        <Icon name="edit" className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>

          {/* Calendar Legend */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto mt-8 bg-gray-800/30 rounded-lg p-4 border border-gray-700"
          >
            <h4 className="text-sm font-semibold text-white mb-3">Calendar Legend</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-400">Today</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-400">Confirmed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-xs text-gray-400">Pending</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-xs text-gray-400">Cancelled</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add Event Modal */}
      <AnimatePresence>
        {eventModalOpen && (
          <AddEventModal
            isOpen={eventModalOpen}
            onClose={() => setEventModalOpen(false)}
            onSave={handleSaveEvent}
            selectedDate={selectedDate}
            eventToEdit={editingEvent}
          />
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
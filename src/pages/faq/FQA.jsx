/* eslint-disable no-unused-vars */
// FAQ.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Material Icons as SVG components
const Icon = ({ name, className = "w-6 h-6" }) => {
  const icons = {
    // General Icons
    search: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>
    ),
    help: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
      </svg>
    ),
    info: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),

    // Room Type Icons
    standard: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z" />
      </svg>
    ),
    deluxe: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 6h-2v3h-2V6h-2v3h-2V6h-2v3H9V6H7v3H5V6H3v12h18V6zM8 16H6v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
      </svg>
    ),
    suite: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 10V5H3v5H2v9h2v-2h16v2h2v-9h-1zm-8-3h4v3h-4V7zm-6 0h4v3H7V7zm-2 5h14v3H5v-3z" />
      </svg>
    ),
    executive: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 10V5H3v5H2v9h2v-2h16v2h2v-9h-1zm-10-3h4v3h-4V7zm-6 0h4v3H5V7zm10 10h-2v-3h2v3zm-6 0H7v-3h2v3zm8-3h2v3h-2v-3zm-8 0H5v-3h2v3z" />
      </svg>
    ),
    presidential: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 10V5H3v5H2v9h2v-2h16v2h2v-9h-1zm-10-3h4v3h-4V7zm-6 0h4v3H5V7zm10 10h-2v-3h2v3zm-6 0H7v-3h2v3zm8-3h2v3h-2v-3zm-8 0H5v-3h2v3zM19 6H5V5h14v1z" />
      </svg>
    ),

    // Hotel Amenities
    wifi: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.66-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
      </svg>
    ),
    breakfast: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 3H4v14h14v-7h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z" />
      </svg>
    ),
    pool: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M2 21h20v-2H2v2zm13-5.5c.68 0 1.31-.26 1.79-.71.2-.19.48-.29.77-.29.29 0 .57.1.77.29.48.45 1.11.71 1.79.71.68 0 1.31-.26 1.79-.71.2-.19.48-.29.77-.29.29 0 .57.1.77.29.48.45 1.12.71 1.8.71v-2c-.28 0-.56-.1-.78-.29-.44-.4-1.08-.71-1.79-.71s-1.35.31-1.79.71c-.22.19-.5.29-.78.29-.28 0-.56-.1-.78-.29-.44-.4-1.08-.71-1.79-.71s-1.35.31-1.79.71c-.22.19-.5.29-.78.29-.28 0-.56-.1-.78-.29-.44-.4-1.08-.71-1.79-.71s-1.35.31-1.79.71c-.22.19-.5.29-.78.29v2c.68 0 1.31-.26 1.79-.71.2-.19.48-.29.77-.29.29 0 .57.1.77.29.48.45 1.11.71 1.79.71.68 0 1.31-.26 1.79-.71.2-.19.48-.29.77-.29.29 0 .57.1.77.29.48.45 1.12.71 1.8.71zm0-5c.68 0 1.31-.26 1.79-.71.2-.19.48-.29.77-.29.29 0 .57.1.77.29.48.45 1.11.71 1.79.71.68 0 1.31-.26 1.79-.71.2-.19.48-.29.77-.29.29 0 .57.1.77.29.48.45 1.12.71 1.8.71v-2c-.28 0-.56-.1-.78-.29-.44-.4-1.08-.71-1.79-.71s-1.35.31-1.79.71c-.22.19-.5.29-.78.29-.28 0-.56-.1-.78-.29-.44-.4-1.08-.71-1.79-.71s-1.35.31-1.79.71c-.22.19-.5.29-.78.29-.28 0-.56-.1-.78-.29-.44-.4-1.08-.71-1.79-.71s-1.35.31-1.79.71c-.22.19-.5.29-.78.29v2c.68 0 1.31-.26 1.79-.71.2-.19.48-.29.77-.29.29 0 .57.1.77.29.48.45 1.11.71 1.79.71.68 0 1.31-.26 1.79-.71.2-.19.48-.29.77-.29.29 0 .57.1.77.29.48.45 1.12.71 1.8.71z" />
      </svg>
    ),
    spa: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5 9c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H9.82c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3c.78 0 1.48-.31 2-.82.52.51 1.22.82 2 .82h6c.78 0 1.48-.31 2-.82.52.51 1.22.82 2 .82 1.66 0 3-1.34 3-3s-1.34-3-3-3z" />
      </svg>
    ),
    gym: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
      </svg>
    ),
    parking: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z" />
      </svg>
    ),
    restaurant: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
      </svg>
    ),
    room_service: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M2 17h20v2H2zm11.84-9.21c.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z" />
      </svg>
    ),

    // Booking & Policies
    calendar: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
      </svg>
    ),
    payment: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
      </svg>
    ),
    cancel: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
      </svg>
    ),
    check_in: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
      </svg>
    ),

    // Contact
    phone: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
      </svg>
    ),
    email: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    location: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),

    // Social
    facebook: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z" />
      </svg>
    ),
    instagram: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25zM12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
      </svg>
    ),
    twitter: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
      </svg>
    ),

    // Actions
    send: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
      </svg>
    ),
    close: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    ),
    arrow_down: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5z" />
      </svg>
    ),
    arrow_up: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 14l5-5 5 5z" />
      </svg>
    ),
    check: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    ),
  };
  return icons[name] || null;
};

// FAQ Categories
const categories = [
  { id: "all", label: "All Questions", icon: "help" },
  { id: "rooms", label: "Rooms & Suites", icon: "standard" },
  { id: "booking", label: "Booking & Reservations", icon: "calendar" },
  { id: "policies", label: "Hotel Policies", icon: "info" },
  { id: "amenities", label: "Amenities & Services", icon: "spa" },
  { id: "payment", label: "Payment & Cancellation", icon: "payment" },
  { id: "contact", label: "Contact & Support", icon: "phone" },
];

// FAQ Data
const faqData = [
  // Rooms & Suites
  {
    id: 1,
    category: "rooms",
    question: "What room types do you offer?",
    answer:
      "We offer five luxurious room categories to suit every preference:\n\n• Standard Room: Elegantly appointed rooms with modern amenities, perfect for solo travelers or couples.\n• Deluxe Room: More spacious with enhanced views and premium amenities.\n• Suite: Separate living and sleeping areas with upgraded furnishings and services.\n• Executive Suite: Enhanced business amenities with exclusive lounge access.\n• Presidential Suite: Our pinnacle of luxury with panoramic views, butler service, and the finest amenities.",
    icon: "standard",
  },
  {
    id: 2,
    category: "rooms",
    question: "What are the differences between Standard and Deluxe rooms?",
    answer:
      "Standard Rooms offer comfortable accommodations with essential amenities including a queen-sized bed, work desk, and city views. Deluxe Rooms provide additional space (approximately 30% larger), upgraded bedding, premium bathroom amenities, and either ocean or panoramic city views. Deluxe guests also receive priority room service and access to our premium bath products.",
    icon: "deluxe",
  },
  {
    id: 3,
    category: "rooms",
    question: "Tell me about the Presidential Suite",
    answer:
      "Our Presidential Suite is the epitome of luxury living. Spanning over 2,000 square feet, it features:\n\n• Master bedroom with king-sized bed and en-suite marble bathroom with Jacuzzi\n• Separate living room with dining area for 8 guests\n• Private study/office\n• Panoramic floor-to-ceiling windows with 270-degree views\n• Personal butler service 24/7\n• Complimentary limousine airport transfer\n• Access to the exclusive Presidential Lounge\n• Private check-in and check-out\n• Customized welcome amenities",
    icon: "presidential",
  },
  {
    id: 4,
    category: "rooms",
    question: "Do Executive Suites include lounge access?",
    answer:
      "Yes, Executive Suite guests enjoy complimentary access to our Executive Lounge, which offers:\n\n• Complimentary breakfast buffet\n• Afternoon tea and coffee service\n• Evening cocktails and canapés\n• Private check-in/out services\n• Dedicated concierge\n• Meeting room access (2 hours per day)\n• Complimentary soft drinks and snacks throughout the day",
    icon: "executive",
  },
  {
    id: 5,
    category: "rooms",
    question: "Are connecting rooms available for families?",
    answer:
      "Yes, we offer connecting rooms for families and groups. We can connect Standard Rooms, Deluxe Rooms, or combine a Suite with a Standard Room. Please mention your preference when booking, and we will do our best to accommodate your needs based on availability.",
    icon: "standard",
  },

  // Booking & Reservations
  {
    id: 6,
    category: "booking",
    question: "What are your check-in and check-out times?",
    answer:
      "Standard check-in time is 3:00 PM and check-out is at 12:00 PM noon. We offer early check-in and late check-out subject to availability:\n\n• Early check-in (from 11:00 AM): $50 fee\n• Late check-out (until 4:00 PM): $75 fee\n• Executive Suite and Presidential Suite guests receive complimentary late check-out until 4:00 PM.",
    icon: "check_in",
  },
  {
    id: 7,
    category: "booking",
    question: "How do I make a reservation?",
    answer:
      "You can make a reservation through multiple channels:\n\n1. Online: Visit our website and use our real-time booking engine\n2. Phone: Call our reservations team at +1 (555) 123-4567 (24/7)\n3. Email: Send your booking details to reservations@luxuryhotel.com\n4. Travel Agents: Contact your preferred travel agent\n5. Direct: Visit our front desk for in-person bookings\n\nWe recommend booking at least 2 weeks in advance for peak seasons.",
    icon: "calendar",
  },
  {
    id: 8,
    category: "booking",
    question: "Do you offer special rates for corporate bookings?",
    answer:
      "Yes, we offer competitive corporate rates for business travelers. Our corporate program includes:\n\n• Discounted room rates (15-25% off BAR)\n• Complimentary Wi-Fi\n• Access to business center\n• Meeting room credits\n• Flexible cancellation policy\n• Express check-in/out\n\nContact our corporate sales team at corporate@luxuryhotel.com for a customized quote.",
    icon: "executive",
  },
  {
    id: 9,
    category: "booking",
    question: "Can I request a specific room or view?",
    answer:
      "Absolutely! During booking, you can specify preferences such as:\n\n• High floor\n• Ocean view / City view\n• Quiet location\n• Near elevator\n• Connecting room\n• Accessibility features\n\nWhile we cannot guarantee specific room numbers, we always do our best to accommodate requests based on availability. For special occasions (anniversaries, honeymoons), please let us know in advance.",
    icon: "standard",
  },

  // Hotel Policies
  {
    id: 10,
    category: "policies",
    question: "What is your pet policy?",
    answer:
      "We welcome well-behaved pets at our hotel. Our pet policy includes:\n\n• Maximum 2 pets per room\n• Dogs and cats only (up to 40 lbs each)\n• Non-refundable pet fee: $75 per stay\n• Pet amenities include bed, bowls, and treats\n• Pet relief areas available on property\n• Pets must be leashed in public areas\n• Never leave pets unattended in room\n\nService animals are always welcome with no additional fee.",
    icon: "room_service",
  },
  {
    id: 11,
    category: "policies",
    question: "Is smoking allowed in the rooms?",
    answer:
      "All our rooms and suites are 100% non-smoking. We have designated outdoor smoking areas for guests who smoke. A cleaning fee of $250 will be charged for smoking in non-smoking areas. This policy ensures a fresh, clean environment for all our guests.",
    icon: "info",
  },
  {
    id: 12,
    category: "policies",
    question: "What is your policy on extra guests?",
    answer:
      "Our room occupancy policies:\n\n• Standard Room: Maximum 2 guests\n• Deluxe Room: Maximum 3 guests\n• Suite: Maximum 4 guests\n• Executive Suite: Maximum 4 guests\n• Presidential Suite: Maximum 6 guests\n\nExtra person charges (beyond double occupancy):\n• Adults (12+): $50 per person/night\n• Children (3-11): $25 per child/night\n• Infants (0-2): Free (crib provided on request)",
    icon: "standard",
  },
  {
    id: 13,
    category: "policies",
    question: "Do you have age requirements for check-in?",
    answer:
      "Guests must be at least 21 years old to check-in and must present a valid government-issued ID and credit card at check-in. Guests under 21 must be accompanied by a parent or legal guardian. We reserve the right to request additional identification if needed.",
    icon: "info",
  },

  // Amenities & Services
  {
    id: 14,
    category: "amenities",
    question: "What amenities are included in my stay?",
    answer:
      "All guests enjoy complimentary access to:\n\n• High-speed Wi-Fi (standard speed)\n• Fitness Center (24/7)\n• Rooftop Swimming Pool (6 AM - 10 PM)\n• Business Center\n• Daily Housekeeping\n• In-room Safe\n• Flat-screen TV with cable\n• Mini-bar\n• Coffee/Tea maker\n• Hair dryer\n• Iron and ironing board\n\nPremium amenities available for Suite guests.",
    icon: "spa",
  },
  {
    id: 15,
    category: "amenities",
    question: "Tell me about your spa and wellness facilities",
    answer:
      "Our award-winning Spa offers a sanctuary of wellness:\n\nTreatments Available:\n• Massages (Swedish, Deep Tissue, Hot Stone)\n• Facials and Skincare\n• Body Wraps and Scrubs\n• Manicure/Pedicure\n• Couples Treatments\n\nFacilities:\n• Steam Room\n• Sauna\n• Jacuzzi\n• Relaxation Lounge\n• Yoga Studio (classes available)\n\nHours: 9 AM - 9 PM daily\nAdvance booking recommended: ext. 5555",
    icon: "spa",
  },
  {
    id: 16,
    category: "amenities",
    question: "Do you have a restaurant on site?",
    answer:
      "Yes, we have multiple dining options:\n\n1. The Grand Dining Room: Fine dining, breakfast 6:30-10:30 AM, dinner 6-10 PM\n2. Sky Lounge: Rooftop bar with panoramic views, 4 PM - midnight\n3. Café Lobby: Light meals and coffee, 7 AM - 7 PM\n4. Pool Bar & Grill: Casual dining by the pool, 11 AM - 6 PM\n5. In-Room Dining: 24/7 full menu available\n\nOur Executive Chef specializes in international cuisine with local influences.",
    icon: "restaurant",
  },
  {
    id: 17,
    category: "amenities",
    question: "Is parking available?",
    answer:
      "Yes, we offer multiple parking options:\n\n• Self-parking: $25 per night\n• Valet parking: $35 per night\n• Electric vehicle charging stations: Available (2 stations)\n• Oversized vehicle parking: Available upon request\n\nIn and out privileges included. Secure, covered parking with 24/7 security.",
    icon: "parking",
  },
  {
    id: 18,
    category: "amenities",
    question: "Do you have a gym?",
    answer:
      "Our state-of-the-art Fitness Center features:\n\n• Cardio equipment (treadmills, ellipticals, bikes)\n• Strength training machines\n• Free weights (5-50 lbs)\n• Yoga mats and accessories\n• Peloton bikes\n• Personal trainers available on request\n• Towel service and water stations\n• Operating hours: 24/7 with key card access",
    icon: "gym",
  },

  // Payment & Cancellation
  {
    id: 19,
    category: "payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept the following payment methods:\n\nCredit Cards:\n• Visa\n• Mastercard\n• American Express\n• Discover\n• Diners Club\n• JCB\n\nOther Methods:\n• Cash (USD only)\n• Debit Cards with Visa/Mastercard logo\n• Mobile Payments (Apple Pay, Google Pay)\n• Hotel Gift Cards\n• Company Checks (with prior approval)\n\nA valid credit card is required at check-in for incidentals.",
    icon: "payment",
  },
  {
    id: 20,
    category: "payment",
    question: "What is your cancellation policy?",
    answer:
      "Our standard cancellation policy:\n\n• Flexible Rate: Cancel up to 24 hours before arrival for full refund\n• Standard Rate: Cancel up to 3 days before arrival\n• Non-Refundable Rate: No cancellations or refunds\n• Suite Bookings: Cancel up to 7 days before arrival\n• Group Bookings (5+ rooms): Cancel up to 14 days before arrival\n\nNo-show fee equals first night's room and tax. Peak season policies may vary.",
    icon: "cancel",
  },
  {
    id: 21,
    category: "payment",
    question: "Do you offer refunds for early departure?",
    answer:
      "Early departure fees apply:\n\n• Notice given before 6 PM day of arrival: No fee\n• Notice given after 6 PM day of arrival: One night penalty\n• Early departure fee: $100 plus any applicable rate difference\n• Suite bookings: Full stay may be charged\n\nExecutive Suite and Presidential Suite guests enjoy waived early departure fees.",
    icon: "payment",
  },
  {
    id: 22,
    category: "payment",
    question: "Is a security deposit required?",
    answer:
      "A security deposit/authorization is required at check-in:\n\n• Standard Rooms: $100 per night\n• Deluxe Rooms: $150 per night\n• Suites: $200 per night\n• Executive Suite: $250 per night\n• Presidential Suite: $500 per night\n\nThe authorization is released 3-5 business days after check-out, depending on your bank.",
    icon: "payment",
  },

  // Contact & Support
  {
    id: 23,
    category: "contact",
    question: "How can I contact the hotel?",
    answer:
      "You can reach us through multiple channels:\n\n📞 Phone: +1 (555) 123-4567 (24/7)\n📧 Email: info@luxuryhotel.com\n📍 Address: 123 Luxury Avenue, Beverly Hills, CA 90210\n\nDepartments:\n• Reservations: reservations@luxuryhotel.com\n• Concierge: concierge@luxuryhotel.com\n• Guest Services: guestservices@luxuryhotel.com\n• Sales & Events: events@luxuryhotel.com\n• HR: careers@luxuryhotel.com",
    icon: "phone",
  },
  {
    id: 24,
    category: "contact",
    question: "What are your front desk hours?",
    answer:
      "Our front desk is staffed 24 hours a day, 7 days a week. Our multilingual staff is always available to assist you with:\n\n• Check-in/Check-out\n• Luggage storage\n• Local information\n• Restaurant reservations\n• Transportation arrangements\n• Tour bookings\n• Emergency assistance\n\nNight staff is available for overnight arrivals.",
    icon: "phone",
  },
  {
    id: 25,
    category: "contact",
    question: "Do you have a concierge service?",
    answer:
      "Yes, our award-winning concierge team is available daily from 7 AM to 11 PM. Services include:\n\n• Restaurant reservations\n• Theater and event tickets\n• Tour arrangements\n• Transportation booking\n• Special occasion planning\n• Local recommendations\n• Language assistance\n• Currency exchange\n\nContact the concierge at ext. 5555 or concierge@luxuryhotel.com",
    icon: "help",
  },
  {
    id: 26,
    category: "contact",
    question: "How do I get to the hotel from the airport?",
    answer:
      "We offer several transportation options:\n\n🚗 Hotel Limousine Service: $75 (pre-booking required)\n🚕 Taxi: Approximately $40-50\n🚌 Shuttle Service: $25 per person\n🚇 Public Transit: $5 (Metro Rail)\n\nDriving directions from LAX:\n• Take Century Blvd to I-405 N\n• Merge onto I-405 N\n• Exit on Santa Monica Blvd\n• Turn right on Luxury Avenue\n• Hotel entrance on the left\n\nComplimentary parking for limousine service guests.",
    icon: "location",
  },
];

// FAQ Item Component
const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <motion.div
      className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between bg-gradient-to-t from-gray-800 to-gray-950 text-white"
      >
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
            <Icon name={faq.icon} className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
        </div>
        <Icon
          name={isOpen ? "arrow_up" : "arrow_down"}
          className="w-6 h-6 text-gray-400 transition-transform duration-300"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 pt-2 border-t border-gray-700">
              <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Room Type Card Component
const RoomTypeCard = ({ type, icon, description, size, view, price }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-600/50 transition-all"
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
          <Icon name={icon} className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{type}</h3>
      </div>

      <p className="text-gray-400 text-sm mb-4">{description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm">
          <span className="text-gray-500 w-20">Size:</span>
          <span className="text-white">{size}</span>
        </div>
        <div className="flex items-center text-sm">
          <span className="text-gray-500 w-20">View:</span>
          <span className="text-white">{view}</span>
        </div>
        <div className="flex items-center text-sm">
          <span className="text-gray-500 w-20">From:</span>
          <span className="text-blue-400 font-semibold">{price}</span>
        </div>
      </div>

      <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all">
        View Details
      </button>
    </motion.div>
  );
};

export const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState({});
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionModalOpen, setSubmissionModalOpen] = useState(false);
  const [submissionType, setSubmissionType] = useState("success");
  const [submissionMessage, setSubmissionMessage] = useState("");

  // Animation variants
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
        stiffness: 300,
      },
    },
    exit: { opacity: 0, scale: 0.8, y: 20 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Filter FAQs based on category and search
  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Toggle FAQ item
  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Handle contact form changes
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Validate contact form
  const validateContactForm = () => {
    const errors = {};

    if (!contactForm.name) errors.name = "Name is required";
    if (!contactForm.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(contactForm.email))
      errors.email = "Email is invalid";
    if (!contactForm.subject) errors.subject = "Subject is required";
    if (!contactForm.message) errors.message = "Message is required";
    else if (contactForm.message.length < 20)
      errors.message = "Message must be at least 20 characters";

    return errors;
  };

  // Handle contact form submit
  const handleContactSubmit = async (e) => {
    e.preventDefault();

    const errors = validateContactForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmissionType("success");
      setSubmissionMessage(
        "Thank you for your message! Our support team will respond within 24 hours.",
      );
      setSubmissionModalOpen(true);

      // Reset form
      setContactForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmissionType("error");
      setSubmissionMessage(
        "Failed to send message. Please try again or call us directly.",
      );
      setSubmissionModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <motion.p
              className="text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Find answers to common questions about our luxury hotel, rooms,
              amenities, and services
            </motion.p>
          </motion.div>

          {/* Room Types Showcase */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Our Luxurious Room Collection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <RoomTypeCard
                type="Standard Room"
                icon="standard"
                description="Elegant comfort for the discerning traveler"
                size="350-400 sq ft"
                view="City View"
                price="$299/night"
              />
              <RoomTypeCard
                type="Deluxe Room"
                icon="deluxe"
                description="Enhanced space with premium amenities"
                size="450-500 sq ft"
                view="Ocean/City"
                price="$399/night"
              />
              <RoomTypeCard
                type="Suite"
                icon="suite"
                description="Separate living area, upgraded luxury"
                size="600-700 sq ft"
                view="Panoramic"
                price="$599/night"
              />
              <RoomTypeCard
                type="Executive Suite"
                icon="executive"
                description="Business amenities with lounge access"
                size="700-800 sq ft"
                view="Premium"
                price="$799/night"
              />
              <RoomTypeCard
                type="Presidential Suite"
                icon="presidential"
                description="Ultimate luxury with butler service"
                size="2000+ sq ft"
                view="360° Panoramic"
                price="$1,999/night"
              />
            </div>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Icon
                name="search"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"
              />
              <input
                type="text"
                placeholder="Search your question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
              />
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                variants={itemVariants}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                <Icon name={category.icon} className="w-4 h-4" />
                <span>{category.label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* FAQ List */}
          <motion.div
            variants={containerVariants}
            className="max-w-3xl mx-auto space-y-4 mb-12"
          >
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openItems[faq.id] || false}
                  onToggle={() => toggleItem(faq.id)}
                />
              ))
            ) : (
              <motion.div
                variants={itemVariants}
                className="text-center py-12 bg-gray-800/30 rounded-xl border border-gray-700"
              >
                <Icon
                  name="search"
                  className="w-16 h-16 text-gray-600 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  No questions found
                </h3>
                <p className="text-gray-400">
                  Try adjusting your search or browse a different category
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Still Have Questions */}
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-600/20"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                Still Have Questions?
              </h2>
              <p className="text-gray-400">
                Can't find what you're looking for? Send us a message and we'll
                get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    className={`w-full px-4 py-3 bg-gray-800 border ${
                      formErrors.name ? "border-red-500" : "border-gray-700"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all`}
                    placeholder="John Doe"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className={`w-full px-4 py-3 bg-gray-800 border ${
                      formErrors.email ? "border-red-500" : "border-gray-700"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all`}
                    placeholder="john@example.com"
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  className={`w-full px-4 py-3 bg-gray-800 border ${
                    formErrors.subject ? "border-red-500" : "border-gray-700"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all`}
                  placeholder="What is your question about?"
                />
                {formErrors.subject && (
                  <p className="mt-1 text-sm text-red-500">
                    {formErrors.subject}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  rows="4"
                  className={`w-full px-4 py-3 bg-gray-800 border ${
                    formErrors.message ? "border-red-500" : "border-gray-700"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all resize-none`}
                  placeholder="Type your question here..."
                />
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {formErrors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-70 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Icon name="send" className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <Icon
                    name="phone"
                    className="w-6 h-6 text-blue-500 mx-auto mb-2"
                  />
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p className="text-white font-medium">+1 (555) 123-4567</p>
                </div>
                <div>
                  <Icon
                    name="email"
                    className="w-6 h-6 text-purple-500 mx-auto mb-2"
                  />
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="text-white font-medium">info@luxuryhotel.com</p>
                </div>
                <div>
                  <Icon
                    name="location"
                    className="w-6 h-6 text-pink-500 mx-auto mb-2"
                  />
                  <p className="text-sm text-gray-400">Visit Us</p>
                  <p className="text-white font-medium">
                    123 Luxury Avenue, Beverly Hills
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={containerVariants}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              {
                icon: "room_service",
                label: "24/7 Room Service",
                value: "Available",
              },
              {
                icon: "wifi",
                label: "High-Speed WiFi",
                value: "Complimentary",
              },
              {
                icon: "check_in",
                label: "Early Check-in",
                value: "Upon Request",
              },
              {
                icon: "cancel",
                label: "Free Cancellation",
                value: "Up to 48hrs",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/30 rounded-xl p-4 text-center border border-gray-700"
              >
                <Icon
                  name={stat.icon}
                  className="w-8 h-8 text-blue-500 mx-auto mb-2"
                />
                <p className="text-xs text-gray-400">{stat.label}</p>
                <p className="text-sm font-semibold text-white">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

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
              <div
                className={`p-6 text-center ${
                  submissionType === "success"
                    ? "bg-gradient-to-r from-green-600 to-green-700"
                    : "bg-gradient-to-r from-red-600 to-red-700"
                }`}
              >
                {submissionType === "success" ? (
                  <Icon name="check" className="text-white w-16 h-16 mx-auto" />
                ) : (
                  <Icon name="close" className="text-white w-16 h-16 mx-auto" />
                )}
              </div>

              {/* Modal Body */}
              <div className="p-8 text-center">
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    submissionType === "success"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {submissionType === "success" ? "Message Sent!" : "Error!"}
                </h3>

                <p className="text-gray-400 mb-6">{submissionMessage}</p>

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
};

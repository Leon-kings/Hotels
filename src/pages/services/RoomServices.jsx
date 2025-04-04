/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { additionalRooms, initialRooms } from "../../assets/data/data";

const RoomCard = ({ room, delay, onViewDetail, onBookNow }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="col-span-12 md:col-span-6 lg:col-span-4"
    >
      <div className="shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
        <div className="relative">
          <img className="w-full h-64 object-cover" src={room.image} alt="" />
          <button className="absolute left-0 top-full -translate-y-1/2 bg-primary text-white rounded py-1 px-3 ml-4 text-sm">
            ${room.price}/Night
          </button>
        </div>
        <div className="p-4 mt-2 flex-grow">
          <div className="flex justify-between mb-3">
            <h5 className="text-lg font-semibold">{room.name}</h5>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="flex mb-3 space-x-3 text-sm">
            <span className="border-r pr-3">
              <svg
                className="w-4 h-4 text-primary inline mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              {room.beds} Bed
            </span>
            <span className="border-r pr-3">
              <svg
                className="w-4 h-4 text-primary inline mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {room.baths} Bath
            </span>
            <span>
              <svg
                className="w-4 h-4 text-primary inline mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                />
              </svg>
              Wifi
            </span>
          </div>
          <p className="text-gray-600 mb-3 line-clamp-2">{room.description}</p>
          <div className="flex justify-between mt-auto">
            <button 
              onClick={() => onViewDetail(room)}
              className="bg-primary hover:bg-primary-dark text-white text-sm py-2 px-4 rounded transition-colors"
            >
              View Detail
            </button>
            <button 
              onClick={() => onBookNow(room)}
              className="bg-gray-800 hover:bg-gray-900 text-white text-sm py-2 px-4 rounded transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const RoomDetailModal = ({ room, onClose, onBookNow }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={room.image} 
            alt={room.name} 
            className="w-full h-64 md:h-80 object-cover rounded-t-lg"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{room.name}</h2>
            <div className="text-primary font-semibold text-xl">${room.price}/Night</div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>{room.beds} Beds</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{room.baths} Baths</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
              <span>Free WiFi</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{room.size} sq.ft</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Description</h3>
            <p className="text-gray-700">{room.description}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {room.amenities?.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end">
            <button 
              onClick={() => onBookNow(room)}
              className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const RoomsServices = () => {
  const [showAll, setShowAll] = useState(false);
  const [rooms, setRooms] = useState(initialRooms);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleViewMore = () => {
    if (showAll) {
      setRooms(initialRooms);
    } else {
      setRooms([...initialRooms, ...additionalRooms]);
    }
    setShowAll(!showAll);
  };

  const handleViewDetail = (room) => {
    setSelectedRoom(room);
    setShowDetailModal(true);
  };

  const handleBookNow = (room) => {
    setSelectedRoom(room);
    setShowDetailModal(false);
    setShowBookingModal(true);
    // Here you would typically show a booking form
    console.log("Booking room:", room.name);
  };

  const closeDetailModal = () => {
    setShowDetailModal(false);
  };

  return (
    <div className="py-12 bg-white text-black px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h6 className="text-primary uppercase font-semibold tracking-wider">
          Our Rooms
        </h6>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
          Explore Our <span className="text-primary uppercase">Rooms</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-12 gap-6">
        {rooms.map((room, index) => (
          <RoomCard 
            key={room.id} 
            room={room} 
            delay={index * 0.1}
            onViewDetail={handleViewDetail}
            onBookNow={handleBookNow}
          />
        ))}
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-center mt-8"
      >
        <button
          onClick={handleViewMore}
          className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          {showAll ? "Show Less" : "View More"}
        </button>
      </motion.div>

      <AnimatePresence>
        {showDetailModal && selectedRoom && (
          <RoomDetailModal 
            room={selectedRoom} 
            onClose={closeDetailModal}
            onBookNow={handleBookNow}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
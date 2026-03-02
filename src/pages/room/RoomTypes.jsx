/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Hotel as HotelIcon,
  KingBed as BedIcon,
  Bathtub as BathIcon,
  Wifi as WifiIcon,
  LocalBar as MinibarIcon,
  AcUnit as AcIcon,
  Security as SecurityIcon,
  Pool as PoolIcon,
  FitnessCenter as GymIcon,
  Restaurant as RestaurantIcon,
  RoomService as ServiceIcon,
  Weekend as SofaIcon,
  DesktopWindows as TvIcon,
  Coffee as CoffeeIcon,
  Kitchen as KitchenIcon,
  Fireplace as FireplaceIcon,
  Balcony as BalconyIcon,
  DirectionsCar as ParkingIcon,
  CheckCircle as CheckIcon,
  Close as CloseIcon,
  Star as StarIcon,
  People as PeopleIcon,
  SquareFoot as AreaIcon,
  Visibility as ViewIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
  Info as InfoIcon,
  LocalParking,
  Pool,
  FitnessCenter,
  Spa,
  Wifi,
  LocalBar,
  RestaurantMenu,
  ShoppingCart,
  DirectionsCar,
} from "@mui/icons-material";
import { toast } from "react-toastify";

// Room Types Data
const roomTypes = [
  { 
    id: 1,
    value: "standard", 
    label: "Standard Room",
    description: "Cozy and comfortable room perfect for solo travelers or couples. Features essential amenities for a pleasant stay.",
    price: 129,
    size: "28 m²",
    capacity: 2,
    beds: "1 Queen Bed",
    view: "City View",
    amenities: ["WiFi", "TV", "Air Conditioning", "Coffee Maker", "Private Bathroom"],
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&auto=format",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&auto=format",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format"
    ],
    rating: 4.5,
    reviews: 128,
    available: true,
    gradient: "from-blue-500 to-blue-700"
  },
  { 
    id: 2,
    value: "deluxe", 
    label: "Deluxe Room",
    description: "Spacious room with upgraded amenities and beautiful views. Ideal for guests seeking extra comfort.",
    price: 199,
    size: "35 m²",
    capacity: 3,
    beds: "1 King Bed",
    view: "Ocean View",
    amenities: ["WiFi", "Smart TV", "Air Conditioning", "Mini Bar", "Rain Shower", "Bathrobe", "Work Desk"],
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&auto=format"
    ],
    rating: 4.8,
    reviews: 256,
    available: true,
    gradient: "from-purple-500 to-purple-700"
  },
  { 
    id: 3,
    value: "suite", 
    label: "Suite",
    description: "Elegant suite with separate living area and premium amenities. Perfect for families or business travelers.",
    price: 299,
    size: "50 m²",
    capacity: 4,
    beds: "1 King Bed + Sofa Bed",
    view: "Panoramic City View",
    amenities: ["WiFi", "65\" Smart TV", "Air Conditioning", "Mini Bar", "Jacuzzi", "Living Area", "Dining Area", "Espresso Machine"],
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&auto=format",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&auto=format"
    ],
    rating: 4.9,
    reviews: 189,
    available: true,
    gradient: "from-pink-500 to-rose-600"
  },
  { 
    id: 4,
    value: "executive", 
    label: "Executive Suite",
    description: "Luxurious suite with executive lounge access and premium services. For discerning guests.",
    price: 399,
    size: "65 m²",
    capacity: 4,
    beds: "2 King Beds",
    view: "Ocean Front",
    amenities: ["WiFi", "75\" Smart TV", "Air Conditioning", "Premium Mini Bar", "Spa Bath", "Separate Living Room", "Kitchenette", "Butler Service", "Executive Lounge Access"],
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&auto=format",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format"
    ],
    rating: 4.9,
    reviews: 142,
    available: true,
    gradient: "from-amber-500 to-orange-600"
  },
  { 
    id: 5,
    value: "presidential", 
    label: "Presidential Suite",
    description: "Our most luxurious accommodation with unparalleled amenities and services. The ultimate luxury experience.",
    price: 999,
    size: "120 m²",
    capacity: 6,
    beds: "2 King Beds + 2 Queen Beds",
    view: "360° Panoramic View",
    amenities: ["WiFi", "85\" Smart TV", "Air Conditioning", "Premium Mini Bar", "Private Pool", "Jacuzzi", "Full Kitchen", "Dining Room", "Private Butler", "Limousine Service", "Private Terrace"],
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&auto=format",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&auto=format"
    ],
    rating: 5.0,
    reviews: 76,
    available: true,
    gradient: "from-yellow-500 to-yellow-700"
  }
];

// Amenities Icons Mapping
const amenityIcons = {
  "WiFi": <WifiIcon className="text-sm" />,
  "TV": <TvIcon className="text-sm" />,
  "Smart TV": <TvIcon className="text-sm" />,
  "Air Conditioning": <AcIcon className="text-sm" />,
  "Coffee Maker": <CoffeeIcon className="text-sm" />,
  "Mini Bar": <MinibarIcon className="text-sm" />,
  "Premium Mini Bar": <LocalBar className="text-sm" />,
  "Private Bathroom": <BathIcon className="text-sm" />,
  "Rain Shower": <BathIcon className="text-sm" />,
  "Bathrobe": <BathIcon className="text-sm" />,
  "Work Desk": <HotelIcon className="text-sm" />,
  "Living Area": <SofaIcon className="text-sm" />,
  "Separate Living Room": <SofaIcon className="text-sm" />,
  "Dining Area": <RestaurantIcon className="text-sm" />,
  "Dining Room": <RestaurantMenu className="text-sm" />,
  "Jacuzzi": <PoolIcon className="text-sm" />,
  "Spa Bath": <Spa className="text-sm" />,
  "Kitchenette": <KitchenIcon className="text-sm" />,
  "Full Kitchen": <KitchenIcon className="text-sm" />,
  "Butler Service": <ServiceIcon className="text-sm" />,
  "Private Butler": <ServiceIcon className="text-sm" />,
  "Executive Lounge Access": <HotelIcon className="text-sm" />,
  "Private Pool": <Pool className="text-sm" />,
  "Private Terrace": <BalconyIcon className="text-sm" />,
  "Limousine Service": <DirectionsCar className="text-sm" />,
  "65\" Smart TV": <TvIcon className="text-sm" />,
  "75\" Smart TV": <TvIcon className="text-sm" />,
  "85\" Smart TV": <TvIcon className="text-sm" />,
  "Espresso Machine": <CoffeeIcon className="text-sm" />,
  "Sofa Bed": <SofaIcon className="text-sm" />,
};

// Room Type Card Component
const RoomTypeCard = ({ room, onSelect, onViewDetails, isSelected }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8, 
        boxShadow: "0 25px 50px -12px rgba(234, 179, 8, 0.25)",
        transition: { type: "spring", stiffness: 300 }
      }}
      className={`bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 border-2 ${
        isSelected ? 'border-yellow-500 shadow-2xl shadow-yellow-500/20' : 'border-gray-800 hover:border-yellow-500/50'
      }`}
      onClick={() => onSelect(room)}
    >
      <div className={`h-2 bg-gradient-to-r ${room.gradient}`} />
      
      <div className="relative">
        <img 
          src={room.images[0]} 
          alt={room.label}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        {/* Price Badge */}
        <motion.div 
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="absolute left-4 bottom-4 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-4 py-2 rounded-lg font-bold shadow-lg"
        >
          ${room.price} <span className="text-sm font-normal">/ night</span>
        </motion.div>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-yellow-400 flex items-center gap-1">
          <StarIcon className="text-yellow-400 text-sm" />
          {room.rating} ({room.reviews})
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white">{room.label}</h3>
          <span className="text-sm text-gray-400">{room.size}</span>
        </div>

        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {room.description}
        </p>

        {/* Room Details */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex items-center gap-1 text-sm bg-gray-800 rounded-lg px-2 py-1">
            <PeopleIcon className="text-yellow-400 text-sm" />
            <span className="text-gray-300">{room.capacity} Guests</span>
          </div>
          <div className="flex items-center gap-1 text-sm bg-gray-800 rounded-lg px-2 py-1 col-span-2">
            <BedIcon className="text-yellow-400 text-sm" />
            <span className="text-gray-300 truncate">{room.beds}</span>
          </div>
        </div>

        {/* Amenities Preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {room.amenities.slice(0, 4).map((amenity, index) => (
            <span
              key={index}
              className="flex items-center gap-1 text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full border border-gray-700"
            >
              {amenityIcons[amenity] || <CheckIcon className="text-green-400 text-xs" />}
              {amenity}
            </span>
          ))}
          {room.amenities.length > 4 && (
            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full border border-gray-700">
              +{room.amenities.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(room);
            }}
            className="flex-1 px-4 py-2 bg-gradient-to-t from-blue-500 to-blue-700 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <InfoIcon className="text-sm" />
            Details
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(room);
            }}
            className="flex-1 px-4 py-2 bg-gradient-to-t from-yellow-500 to-yellow-700 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <HotelIcon className="text-sm" />
            Select
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Room Details Modal
const RoomDetailsModal = ({ room, onClose, onSelect }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

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
        className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Gallery */}
        <div className="relative h-80 bg-gray-900">
          <img
            src={room.images[currentImageIndex]}
            alt={room.label}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
          >
            <ArrowBackIcon />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
          >
            <ArrowForwardIcon />
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {room.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? 'bg-yellow-500 w-4'
                    : 'bg-white/50 hover:bg-white'
                }`}
              />
            ))}
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-gradient-to-t from-red-500 to-red-700 rounded-full text-white hover:shadow-lg transition-all hover:scale-110"
          >
            <CloseIcon />
          </button>

          {/* Room Type Badge */}
          <div className={`absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r ${room.gradient} text-white font-bold`}>
            {room.label}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title and Price */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{room.label}</h2>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-yellow-400">
                  <StarIcon className="text-sm" />
                  <span>{room.rating} ({room.reviews} reviews)</span>
                </div>
                <div className="text-gray-400">
                  {room.size} • {room.capacity} Guests
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-yellow-400">${room.price}</div>
              <div className="text-gray-400 text-sm">per night</div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
            <p className="text-gray-300 leading-relaxed">{room.description}</p>
          </div>

          {/* Room Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
              <BedIcon className="text-yellow-400 text-2xl mx-auto mb-2" />
              <div className="text-white font-medium">Beds</div>
              <div className="text-gray-400 text-sm">{room.beds}</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
              <PeopleIcon className="text-yellow-400 text-2xl mx-auto mb-2" />
              <div className="text-white font-medium">Capacity</div>
              <div className="text-gray-400 text-sm">{room.capacity} Guests</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
              <AreaIcon className="text-yellow-400 text-2xl mx-auto mb-2" />
              <div className="text-white font-medium">Size</div>
              <div className="text-gray-400 text-sm">{room.size}</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
              <ViewIcon className="text-yellow-400 text-2xl mx-auto mb-2" />
              <div className="text-white font-medium">View</div>
              <div className="text-gray-400 text-sm">{room.view}</div>
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {room.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-300 bg-gray-800/50 px-3 py-2 rounded-lg border border-gray-700"
                >
                  <span className="text-yellow-400">
                    {amenityIcons[amenity] || <CheckIcon className="text-sm" />}
                  </span>
                  <span className="text-sm">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gradient-to-t from-gray-700 to-gray-800 text-white rounded-xl font-medium hover:shadow-lg transition-all"
            >
              Close
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                onSelect(room);
                onClose();
              }}
              className="flex-1 px-6 py-3 bg-gradient-to-t from-yellow-500 to-yellow-700 text-white rounded-xl font-medium hover:shadow-lg transition-all hover:scale-105"
            >
              Select This Room
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main RoomTypes Component
export const RoomTypes = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedRoomForDetails, setSelectedRoomForDetails] = useState(null);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
    toast.success(`${room.label} selected!`);
  };

  const handleViewDetails = (room) => {
    setSelectedRoomForDetails(room);
    setShowDetailsModal(true);
  };

  const filteredRooms = roomTypes.filter(room => {
    if (filter === "all") return true;
    if (filter === "available") return room.available;
    return room.value === filter;
  });

  const sortedRooms = [...filteredRooms].sort((a, b) => {
    switch(sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "size":
        return parseInt(b.size) - parseInt(a.size);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h6 className="text-yellow-400 uppercase font-semibold tracking-wider text-sm mb-2">
              Luxury Accommodations
            </h6>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-yellow-400">Room Types</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choose from our selection of luxurious rooms and suites, each designed for your ultimate comfort
            </p>
          </motion.div>

          {/* Filter and Sort Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === "all"
                    ? "bg-gradient-to-t from-yellow-500 to-yellow-700 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                All Rooms
              </button>
              <button
                onClick={() => setFilter("available")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === "available"
                    ? "bg-gradient-to-t from-yellow-500 to-yellow-700 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Available Now
              </button>
              {roomTypes.map(room => (
                <button
                  key={room.value}
                  onClick={() => setFilter(room.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    filter === room.value
                      ? "bg-gradient-to-t from-yellow-500 to-yellow-700 text-white shadow-lg"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {room.label}
                </button>
              ))}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 cursor-pointer"
            >
              <option value="default">Sort by: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="size">Room Size</option>
            </select>
          </div>
        </div>
      </div>

      {/* Room Types Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedRooms.map((room, index) => (
            <RoomTypeCard
              key={room.id}
              room={room}
              onSelect={handleSelectRoom}
              onViewDetails={handleViewDetails}
              isSelected={selectedRoom?.id === room.id}
            />
          ))}
        </div>

        {/* Quick Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-yellow-400">Room Type</th>
                  <th className="text-left py-3 px-4 text-gray-300">Size</th>
                  <th className="text-left py-3 px-4 text-gray-300">Capacity</th>
                  <th className="text-left py-3 px-4 text-gray-300">Bed Type</th>
                  <th className="text-left py-3 px-4 text-gray-300">View</th>
                  <th className="text-left py-3 px-4 text-yellow-400">Price/Night</th>
                  <th className="text-left py-3 px-4 text-gray-300">Rating</th>
                </tr>
              </thead>
              <tbody>
                {roomTypes.map((room) => (
                  <tr key={room.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                    <td className="py-3 px-4 text-white font-medium">{room.label}</td>
                    <td className="py-3 px-4 text-gray-300">{room.size}</td>
                    <td className="py-3 px-4 text-gray-300">{room.capacity} guests</td>
                    <td className="py-3 px-4 text-gray-300">{room.beds}</td>
                    <td className="py-3 px-4 text-gray-300">{room.view}</td>
                    <td className="py-3 px-4 text-yellow-400 font-bold">${room.price}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        <StarIcon className="text-yellow-400 text-sm" />
                        <span className="text-white">{room.rating}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {showDetailsModal && selectedRoomForDetails && (
          <RoomDetailsModal
            room={selectedRoomForDetails}
            onClose={() => setShowDetailsModal(false)}
            onSelect={handleSelectRoom}
          />
        )}
      </AnimatePresence>
    </div>
  );
};


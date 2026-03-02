/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wifi as WifiIcon,
  Pool as PoolIcon,
  FitnessCenter as GymIcon,
  Restaurant as RestaurantIcon,
  LocalParking as ParkingIcon,
  Spa as SpaIcon,
  RoomService as RoomServiceIcon,
  FreeBreakfast as BreakfastIcon,
  AcUnit as AcIcon,
  LocalLaundryService as LaundryIcon,
  SmokeFree as SmokeFreeIcon,
  Pets as PetsIcon,
  BusinessCenter as BusinessIcon,
  AirportShuttle as ShuttleIcon,
  Security as SecurityIcon,
  CleaningServices as CleaningIcon,
  Bathtub as BathtubIcon,
  CoffeeMaker as CoffeeIcon,
  Kitchen as KitchenIcon,
  OutdoorGrill as GrillIcon,
  BeachAccess as BeachIcon,
  Fireplace as FireplaceIcon,
  HotTub as HotTubIcon,
  KingBed as KingBedIcon,
  ChildCare as ChildIcon,
  Event as EventIcon,
  MusicNote as MusicIcon,
  Wc as WcIcon,
  Elevator as ElevatorIcon,
  Pool as JacuzziIcon,
  Kitchen as MinibarIcon,
  Microwave as MicrowaveIcon,

  LocalBar as BarIcon,
  RestaurantMenu as DiningIcon,
  SportsBar as SportsBarIcon,
  Stadium as StadiumIcon,
  Casino as CasinoIcon,
  GolfCourse as GolfIcon,

  DirectionsBike as BikeIcon,
  DirectionsRun as RunIcon,
  Kayaking as KayakIcon,
  Surfing as SurfIcon,
  Pool as SwimIcon,
  Deck as DeckIcon,
  Balcony as BalconyIcon,
  Chair as LoungeIcon,
  Weekend as LoungeChairIcon,
  LocalCafe as CafeIcon,
  Liquor as CocktailIcon,
  WineBar as WineBarIcon,
  BakeryDining as BakeryIcon,
  Icecream as IceCreamIcon,
  Fastfood as FastFoodIcon,
  DinnerDining as DinnerIcon,
  LunchDining as LunchIcon,
  SetMeal as SetMealIcon,
  Tapas as TapasIcon,
  SoupKitchen as SoupIcon,
  RamenDining as NoodleIcon,
  KebabDining as KebabIcon,
  RiceBowl as RiceIcon,
  Egg as EggIcon,
  EmojiFoodBeverage as TeaIcon,
  LocalDrink as DrinkIcon,
  SportsBar as BeerIcon,
  CheckCircle as CheckIcon,
  Star as StarIcon,
  Favorite as FavoriteIcon,
  Info as InfoIcon,
  Close as CloseIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  SportsTennis
} from "@mui/icons-material";
import { FaRegIdBadge } from "react-icons/fa";

// Amenities Data
const amenitiesData = {
  popular: [
    { id: 1, name: "Free WiFi", icon: <WifiIcon />, description: "High-speed internet available throughout the property", category: "popular", included: true },
    { id: 2, name: "Swimming Pool", icon: <PoolIcon />, description: "Outdoor heated pool with lounge area", category: "popular", included: true },
    { id: 3, name: "Fitness Center", icon: <GymIcon />, description: "24/7 gym with modern equipment", category: "popular", included: true },
    { id: 4, name: "Restaurant", icon: <RestaurantIcon />, description: "Fine dining restaurant serving local cuisine", category: "popular", included: true },
    { id: 5, name: "Free Parking", icon: <ParkingIcon />, description: "Secure parking for guests", category: "popular", included: true },
    { id: 6, name: "Spa", icon: <SpaIcon />, description: "Luxury spa and wellness center", category: "popular", included: false }
  ],
  room: [
    { id: 7, name: "Air Conditioning", icon: <AcIcon />, description: "Individual climate control in each room", category: "room", included: true },
    { id: 8, name: "Room Service", icon: <RoomServiceIcon />, description: "24/7 in-room dining service", category: "room", included: true },
    { id: 9, name: "Mini Bar", icon: <MinibarIcon />, description: "Fully stocked mini bar", category: "room", included: false },
    { id: 10, name: "Coffee Maker", icon: <CoffeeIcon />, description: "Nespresso machine with complimentary pods", category: "room", included: true },
    { id: 11, name: "King Size Bed", icon: <KingBedIcon />, description: "Luxury king bed with premium linens", category: "room", included: true },
    { id: 12, name: "Private Bathroom", icon: <BathtubIcon />, description: "En-suite with rainfall shower", category: "room", included: true },
    { id: 13, name: "Jacuzzi Tub", icon: <HotTubIcon />, description: "Jacuzzi in select suites", category: "room", included: false },
    { id: 14, name: "Balcony", icon: <BalconyIcon />, description: "Private balcony with city view", category: "room", included: false },
    { id: 15, name: "Microwave", icon: <MicrowaveIcon />, description: "In-room microwave", category: "room", included: true },
    { id: 16, name: "Refrigerator", icon: <FaRegIdBadge />, description: "Personal refrigerator", category: "room", included: true }
  ],
  property: [
    { id: 17, name: "Laundry Service", icon: <LaundryIcon />, description: "Same-day laundry and dry cleaning", category: "property", included: true },
    { id: 18, name: "Non-Smoking", icon: <SmokeFreeIcon />, description: "100% smoke-free property", category: "property", included: true },
    { id: 19, name: "Pet Friendly", icon: <PetsIcon />, description: "Pets welcome (fees apply)", category: "property", included: false },
    { id: 20, name: "Business Center", icon: <BusinessIcon />, description: "Fully equipped business facilities", category: "property", included: true },
    { id: 21, name: "Airport Shuttle", icon: <ShuttleIcon />, description: "Complimentary airport transportation", category: "property", included: true },
    { id: 22, name: "24/7 Security", icon: <SecurityIcon />, description: "Round-the-clock security personnel", category: "property", included: true },
    { id: 23, name: "Daily Housekeeping", icon: <CleaningIcon />, description: "Daily cleaning service", category: "property", included: true },
    { id: 24, name: "Elevator", icon: <ElevatorIcon />, description: "Easy access to all floors", category: "property", included: true }
  ],
  dining: [
    { id: 25, name: "Breakfast Buffet", icon: <BreakfastIcon />, description: "Complimentary breakfast daily", category: "dining", included: true },
    { id: 26, name: "Bar & Lounge", icon: <BarIcon />, description: "Cocktail bar with live music", category: "dining", included: true },
    { id: 27, name: "Poolside Bar", icon: <DrinkIcon />, description: "Refreshing drinks by the pool", category: "dining", included: false },
    { id: 28, name: "Wine Cellar", icon: <WineBarIcon />, description: "Extensive wine collection", category: "dining", included: false },
    { id: 29, name: "Café", icon: <CafeIcon />, description: "Specialty coffee and pastries", category: "dining", included: true },
    { id: 30, name: "BBQ Facilities", icon: <GrillIcon />, description: "Outdoor grilling area", category: "dining", included: true },
    { id: 31, name: "Ice Cream Parlor", icon: <IceCreamIcon />, description: "Gourmet ice cream", category: "dining", included: false }
  ],
  recreation: [
    { id: 32, name: "Beach Access", icon: <BeachIcon />, description: "Private beach area", category: "recreation", included: true },
    { id: 33, name: "Tennis Court", icon: <SportsTennis />, description: "Professional tennis courts", category: "recreation", included: false },
    { id: 34, name: "Golf Course", icon: <GolfIcon />, description: "18-hole golf course", category: "recreation", included: false },
    { id: 35, name: "Bike Rental", icon: <BikeIcon />, description: "Complimentary bicycle rental", category: "recreation", included: true },
    { id: 36, name: "Fitness Classes", icon: <RunIcon />, description: "Daily yoga and pilates", category: "recreation", included: true },
    { id: 37, name: "Water Sports", icon: <KayakIcon />, description: "Kayaking and paddleboarding", category: "recreation", included: false },
    { id: 38, name: "Game Room", icon: <SportsBarIcon />, description: "Arcade and billiards", category: "recreation", included: true },
    { id: 39, name: "Movie Theater", icon: <StadiumIcon />, description: "Private cinema", category: "recreation", included: false }
  ],
  services: [
    { id: 40, name: "Concierge", icon: <InfoIcon />, description: "24/7 concierge service", category: "services", included: true },
    { id: 41, name: "Babysitting", icon: <ChildIcon />, description: "Professional childcare", category: "services", included: false },
    { id: 42, name: "Event Space", icon: <EventIcon />, description: "Wedding and conference facilities", category: "services", included: true },
    { id: 43, name: "Live Music", icon: <MusicIcon />, description: "Evening entertainment", category: "services", included: true },
    { id: 44, name: "Valet Parking", icon: <ParkingIcon />, description: "Complimentary valet service", category: "services", included: true },
    { id: 45, name: "Currency Exchange", icon: <BusinessIcon />, description: "On-site currency exchange", category: "services", included: true }
  ]
};

// Category tabs configuration
const categories = [
  { id: "all", label: "All Amenities", icon: <StarIcon />, color: "purple" },
  { id: "popular", label: "Popular", icon: <FavoriteIcon />, color: "pink" },
  { id: "room", label: "Room Amenities", icon: <KingBedIcon />, color: "blue" },
  { id: "property", label: "Property Features", icon: <BusinessIcon />, color: "green" },
  { id: "dining", label: "Dining", icon: <RestaurantIcon />, color: "orange" },
  { id: "recreation", label: "Recreation", icon: <SwimIcon />, color: "teal" },
  { id: "services", label: "Services", icon: <RoomServiceIcon />, color: "indigo" }
];

// Amenity Card Component
const AmenityCard = ({ amenity, index, onToggleFavorite, onViewDetail }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    onToggleFavorite(amenity.id);
  };

  // Color mapping for categories
  const getCategoryColor = (category) => {
    const colors = {
      popular: "from-pink-500 to-rose-500",
      room: "from-blue-500 to-cyan-500",
      property: "from-green-500 to-emerald-500",
      dining: "from-orange-500 to-amber-500",
      recreation: "from-teal-500 to-cyan-500",
      services: "from-indigo-500 to-purple-500"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  // Background pattern based on category
  const getPattern = (category) => {
    const patterns = {
      popular: "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 0%, transparent 20%)",
      room: "linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%)",
      property: "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 10px, transparent 10px, transparent 20px)",
      dining: "radial-gradient(circle at 80% 90%, rgba(255,255,255,0.1) 0%, transparent 30%)",
      recreation: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.05) 50%, transparent 50%)",
      services: "repeating-radial-gradient(circle at 0 0, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 5px, transparent 5px, transparent 10px)"
    };
    return patterns[category] || "none";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 30px 60px -15px rgba(0,0,0,0.5)"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onViewDetail(amenity)}
      className="relative cursor-pointer group"
    >
      {/* Card Container */}
      <div className={`
        relative overflow-hidden rounded-2xl p-6
        bg-gradient-to-br ${getCategoryColor(amenity.category)}
        text-white shadow-xl
        transform transition-all duration-300
        ${amenity.included ? 'opacity-100' : 'opacity-80'}
      `}>
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: getPattern(amenity.category) }}
        />

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Favorite Button */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleFavoriteClick}
          className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all
            ${isFavorite 
              ? 'bg-pink-500 text-white' 
              : 'bg-white/20 text-white hover:bg-white/30'
            }`}
        >
          <FavoriteIcon className={`text-sm ${isFavorite ? 'fill-current' : ''}`} />
        </motion.button>

        {/* Included Badge */}
        {amenity.included && (
          <div className="absolute top-4 left-4 z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-green-500 rounded-full p-1 shadow-lg"
            >
              <CheckIcon className="text-white text-xs" />
            </motion.div>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Icon Container */}
          <motion.div
            animate={{ 
              rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
              scale: isHovered ? 1.2 : 1
            }}
            transition={{ duration: 0.5 }}
            className="mb-4 p-4 bg-white/20 rounded-2xl backdrop-blur-sm"
          >
            <div className="text-5xl">
              {amenity.icon}
            </div>
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2">{amenity.name}</h3>

          {/* Description - appears on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-sm text-white/90 mt-2"
              >
                {amenity.description}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Category Badge */}
          <div className="mt-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs uppercase tracking-wider">
              {amenity.category}
            </span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
      </div>
    </motion.div>
  );
};

// Category Tab Component
const CategoryTab = ({ category, isActive, onClick }) => {
  const colorClasses = {
    purple: "from-purple-500 to-indigo-600",
    pink: "from-pink-500 to-rose-600",
    blue: "from-blue-500 to-cyan-600",
    green: "from-green-500 to-emerald-600",
    orange: "from-orange-500 to-amber-600",
    teal: "from-teal-500 to-cyan-600",
    indigo: "from-indigo-500 to-purple-600"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative flex items-center gap-3 px-6 py-3 rounded-xl font-medium
        transition-all duration-300 whitespace-nowrap
        ${isActive 
          ? `bg-gradient-to-r ${colorClasses[category.color]} text-white shadow-lg shadow-${category.color}-500/30`
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }
      `}
    >
      <span className="text-xl">{category.icon}</span>
      <span>{category.label}</span>
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 rounded-xl border-2 border-white/30"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

// Detail Modal Component
const DetailModal = ({ amenity, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className="relative h-48 bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
          </div>
          
          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl text-white"
            >
              {amenity.icon}
            </motion.div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors z-10"
          >
            <CloseIcon className="text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{amenity.name}</h2>
              <div className="flex items-center gap-3">
                <span className="px-4 py-1 bg-white/10 rounded-full text-white/80 text-sm">
                  {amenity.category}
                </span>
                {amenity.included ? (
                  <span className="flex items-center gap-1 text-green-400">
                    <CheckIcon className="text-sm" />
                    Included
                  </span>
                ) : (
                  <span className="text-amber-400">Available for additional fee</span>
                )}
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            {amenity.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-3xl text-yellow-400 mb-2">24/7</div>
              <div className="text-white/70 text-sm">Availability</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-3xl text-green-400 mb-2">Free</div>
              <div className="text-white/70 text-sm">For all guests</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-green-500/30 transition-all"
            >
              Request Service
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Stats Card Component
const StatsCard = ({ icon, value, label, color }) => {
  const colorClasses = {
    purple: "from-purple-500 to-indigo-600",
    pink: "from-pink-500 to-rose-600",
    blue: "from-blue-500 to-cyan-600",
    green: "from-green-500 to-emerald-600",
    orange: "from-orange-500 to-amber-600",
    teal: "from-teal-500 to-cyan-600"
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`bg-gradient-to-br ${colorClasses[color]} rounded-2xl p-6 text-white shadow-xl`}
    >
      <div className="flex items-center gap-4">
        <div className="text-4xl bg-white/20 p-3 rounded-2xl">
          {icon}
        </div>
        <div>
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-white/80">{label}</div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Component
export const Amenities = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAmenity, setSelectedAmenity] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  // Flatten all amenities for filtering
  const allAmenities = Object.values(amenitiesData).flat();

  // Filter amenities based on category and search
  const filteredAmenities = allAmenities.filter(amenity => {
    const matchesCategory = selectedCategory === "all" || amenity.category === selectedCategory;
    const matchesSearch = amenity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         amenity.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate stats
  const stats = {
    total: allAmenities.length,
    included: allAmenities.filter(a => a.included).length,
    popular: amenitiesData.popular.length,
    dining: amenitiesData.dining.length
  };

  const handleViewDetail = (amenity) => {
    setSelectedAmenity(amenity);
    setShowModal(true);
  };

  const handleToggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[400px] overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&auto=format')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-black mb-4 text-white"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.3)",
                  "0 0 40px rgba(255,255,255,0.6)",
                  "0 0 20px rgba(255,255,255,0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Hotel <span className="text-yellow-400">Amenities</span>
            </motion.h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Experience luxury at its finest with our comprehensive range of world-class amenities 
              designed to make your stay unforgettable.
            </p>
            
            {/* Search Bar */}
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search amenities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              {/* View Toggle */}
              <div className="flex bg-white/10 backdrop-blur-md rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-lg transition-all ${
                    viewMode === "grid" ? "bg-yellow-500 text-white" : "text-white/70"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-lg transition-all ${
                    viewMode === "list" ? "bg-yellow-500 text-white" : "text-white/70"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <StatsCard icon={<StarIcon />} value={stats.total} label="Total Amenities" color="purple" />
          <StatsCard icon={<CheckIcon />} value={stats.included} label="Included in Stay" color="green" />
          <StatsCard icon={<FavoriteIcon />} value={stats.popular} label="Popular Choices" color="pink" />
          <StatsCard icon={<RestaurantIcon />} value={stats.dining} label="Dining Options" color="orange" />
        </motion.div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {categories.map(category => (
            <CategoryTab
              key={category.id}
              category={category}
              isActive={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            />
          ))}
        </motion.div>
      </div>

      {/* Amenities Grid/List */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + viewMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-4"
            }
          >
            {filteredAmenities.map((amenity, index) => (
              viewMode === "grid" ? (
                <AmenityCard
                  key={amenity.id}
                  amenity={amenity}
                  index={index}
                  onToggleFavorite={handleToggleFavorite}
                  onViewDetail={handleViewDetail}
                />
              ) : (
                <motion.div
                  key={amenity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  onClick={() => handleViewDetail(amenity)}
                  className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-6 cursor-pointer group relative overflow-hidden"
                >
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-center gap-6 relative z-10">
                    <div className="text-4xl text-yellow-400 bg-gray-900 p-4 rounded-xl">
                      {amenity.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{amenity.name}</h3>
                      <p className="text-gray-400">{amenity.description}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      {amenity.included && (
                        <span className="text-green-400">
                          <CheckIcon />
                        </span>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleFavorite(amenity.id);
                        }}
                        className={`p-2 rounded-full transition-colors ${
                          favorites.includes(amenity.id)
                            ? 'text-pink-500'
                            : 'text-gray-500 hover:text-pink-500'
                        }`}
                      >
                        <FavoriteIcon />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredAmenities.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-8xl mb-6 opacity-30">🏨</div>
            <h3 className="text-2xl font-semibold text-white mb-2">No amenities found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>

      {/* Featured Amenities Section */}
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-12"
          >
            Featured <span className="text-yellow-400">Experiences</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Spa & Wellness",
                description: "Rejuvenate your senses with our luxury spa treatments",
                icon: <SpaIcon className="text-6xl" />,
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&auto=format"
              },
              {
                title: "Fine Dining",
                description: "Experience culinary excellence at our signature restaurants",
                icon: <RestaurantIcon className="text-6xl" />,
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format"
              },
              {
                title: "Infinity Pool",
                description: "Take a dip in our stunning infinity pool with panoramic views",
                icon: <PoolIcon className="text-6xl" />,
                image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=500&auto=format"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="mb-4 text-yellow-400 transform group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && selectedAmenity && (
          <DetailModal
            amenity={selectedAmenity}
            onClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};


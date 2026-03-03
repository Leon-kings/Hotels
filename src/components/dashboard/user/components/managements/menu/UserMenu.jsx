/* eslint-disable no-unused-vars */
import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";
import axios from "axios";
import {
  WineBar as WineIcon,
  LocalBar as BeerIcon,
  Liquor as CocktailIcon,
  EmojiFoodBeverage as CoffeeIcon,
  Fastfood as SnackIcon,
  LocationOn as MapIcon,
  Phone as PhoneIcon,
  Star as StarIcon,
  Favorite as FavoriteIcon,
  Add as AddIcon,
  CheckCircle as CheckIcon,
  RestaurantMenu as MenuIcon,
  LocalDrink as DrinkIcon,
  SportsBar as AleIcon,
  FreeBreakfast as TeaIcon,
  BakeryDining as PretzelIcon,
  Grain as PopcornIcon,
  DinnerDining as DinnerIcon,
  LunchDining as LunchIcon,
  BreakfastDining as BreakfastIcon,
  Icecream as DessertIcon,
  RamenDining as NoodleIcon,
  SetMeal as SetMealIcon,
  Egg as EggIcon,
  SoupKitchen as SoupIcon,
  KebabDining as KebabIcon,
  Tapas as TapasIcon,
  LocalBar,
  RestaurantMenu,
  ShoppingCart,
  Close as CloseIcon,
  Delete as DeleteIcon,
  Remove as RemoveIcon,
  Add as AddIcon2,
  Person as PersonIcon,
  History as HistoryIcon,
  Receipt as ReceiptIcon
} from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Online image URLs for menu items
const getItemImage = (category, name, type) => {
  if (type === "bar") {
    switch(category) {
      case 'wine':
        return "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&auto=format";
      case 'beer':
        return "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&auto=format";
      case 'cocktail':
        return "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format";
      case 'others':
        if (name.includes('Lemonade')) return "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&auto=format";
        if (name.includes('Juice')) return "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&auto=format";
        return "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&auto=format";
      case 'snacks':
        return "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?w=500&auto=format";
      default:
        return "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format";
    }
  } else {
    switch(category) {
      case 'appetizers':
        return "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=500&auto=format";
      case 'salads':
        return "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format";
      case 'soups':
        return "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&auto=format";
      case 'mains':
        return "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format";
      case 'pasta':
        return "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&auto=format";
      case 'pizza':
        return "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format";
      case 'desserts':
        return "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&auto=format";
      case 'beverages':
        return "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=500&auto=format";
      default:
        return "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format";
    }
  }
};

// Menu Item Card Component
const MenuItemCard = ({ item, delay, onViewDetail, onAddToCart, onToggleFavorite, isFavorite, user }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="col-span-12 md:col-span-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white p-2 rounded-2xl lg:col-span-4 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
        <div className="relative group">
          <img 
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
            src={item.image} 
            alt={item.name} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <motion.div 
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ delay: delay + 0.2 }}
            className="absolute left-0 top-full -translate-y-1/2 rounded py-1 px-3 ml-4 text-sm bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-bold shadow-lg"
          >
            ${item.price}
          </motion.div>
          
          {/* Favorite Button */}
          {user && (
            <button 
              onClick={() => onToggleFavorite(item.id)}
              className={`absolute top-2 right-2 p-2 rounded-full ${isFavorite ? 'text-pink-500' : 'text-white'} bg-black/50 hover:bg-black/70 transition-all`}
            >
              <FavoriteIcon className="size-5" />
            </button>
          )}

          {/* Category Badge */}
          <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-yellow-400">
            {item.category}
          </div>
        </div>
        
        <div className="p-4 mt-2 flex-grow">
          <div className="flex justify-between mb-3">
            <h5 className="text-lg text-yellow-300 font-semibold">
              {item.name}
            </h5>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5" />
              ))}
            </div>
          </div>
          
          <div className="flex mb-3 space-x-3 text-sm flex-wrap gap-2">
            {item.origin && (
              <span className="bg-gray-800 text-yellow-300 rounded-2xl p-2 border border-yellow-500 hover:bg-yellow-500/20 transition-colors flex items-center gap-1">
                <MapIcon className="text-green-400 size-4" />
                {item.origin}
              </span>
            )}
            {item.cuisine && (
              <span className="bg-gray-800 text-yellow-300 rounded-2xl p-2 border border-yellow-500 hover:bg-yellow-500/20 transition-colors">
                {item.cuisine}
              </span>
            )}
            {item.abv && (
              <span className="bg-gray-800 text-yellow-300 rounded-2xl p-2 border border-yellow-500 hover:bg-yellow-500/20 transition-colors">
                ABV: {item.abv}
              </span>
            )}
          </div>
          
          <p className="text-gray-200 mb-3 line-clamp-2">
            {item.description}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <label className="mr-2 text-sm text-gray-300 font-medium">Qty:</label>
              <div className="flex items-center border border-gray-600 rounded bg-gray-800">
                <button
                  onClick={decrementQuantity}
                  className="px-2 text-white py-1 bg-gray-700 hover:bg-gray-600 rounded-l transition-colors"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-12 text-center border-x border-gray-600 py-1 bg-gray-800 text-white"
                />
                <button
                  onClick={incrementQuantity}
                  className="px-2 py-1 text-white bg-gray-700 hover:bg-gray-600 rounded-r transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-sm text-yellow-300 font-medium bg-gray-800 px-3 py-1 rounded-full">
              Total: ${(item.price * quantity).toFixed(2)}
            </div>
          </div>

          <div className="flex justify-between mt-auto">
            <button
              onClick={() => onViewDetail(item)}
              className="bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-sm py-2 px-4 rounded-lg transition-all shadow-lg flex items-center gap-2 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Details</span>
            </button>
            <button
              onClick={() =>
                onAddToCart({
                  ...item,
                  quantity,
                  totalPrice: item.price * quantity,
                })
              }
              className="bg-gradient-to-t from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white text-sm py-2 px-4 rounded-lg transition-all shadow-lg flex items-center gap-2 transform hover:scale-105"
            >
              <ShoppingCart className="text-white size-4" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Item Detail Modal
const ItemDetailModal = ({ item, onClose, onAddToCart, user }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const totalPrice = item.price * quantity;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-80 object-cover rounded-t-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-t-xl"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
          >
            <CloseIcon className="text-white size-5" />
          </button>
          <div className="absolute bottom-4 left-4">
            <h2 className="text-3xl font-bold text-white mb-2">{item.name}</h2>
            <div className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-4 py-2 rounded-full font-bold text-lg">
                ${item.price}
              </span>
              <span className="text-white text-lg">per item</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            {item.origin && (
              <div className="bg-yellow-50 p-3 rounded-lg flex items-center gap-2 border border-yellow-200 hover:shadow-md transition-shadow">
                <MapIcon className="text-yellow-600 size-6" />
                <span className="font-semibold text-gray-800">{item.origin}</span>
              </div>
            )}
            {item.cuisine && (
              <div className="bg-yellow-50 p-3 rounded-lg flex items-center gap-2 border border-yellow-200 hover:shadow-md transition-shadow">
                <RestaurantMenu className="text-yellow-600 size-6" />
                <span className="font-semibold text-gray-800">{item.cuisine}</span>
              </div>
            )}
            {item.abv && (
              <div className="bg-yellow-50 p-3 rounded-lg flex items-center gap-2 border border-yellow-200 hover:shadow-md transition-shadow">
                <BeerIcon className="text-yellow-600 size-6" />
                <span className="font-semibold text-gray-800">ABV: {item.abv}</span>
              </div>
            )}
            {item.year && (
              <div className="bg-yellow-50 p-3 rounded-lg flex items-center gap-2 border border-yellow-200 hover:shadow-md transition-shadow">
                <WineIcon className="text-yellow-600 size-6" />
                <span className="font-semibold text-gray-800">Year: {item.year}</span>
              </div>
            )}
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 border-b pb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Order Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Quantity
                </label>
                <div className="flex items-center">
                  <button
                    onClick={decrementQuantity}
                    className="bg-gradient-to-t from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-800 px-4 py-2 rounded-l-lg font-bold transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 text-center border-y border-gray-300 py-2 text-gray-800 font-bold"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="bg-gradient-to-t from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-800 px-4 py-2 rounded-r-lg font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border border-yellow-200">
              <div>
                <p className="text-gray-700">
                  Price per item: <span className="text-yellow-600 font-bold">${item.price}</span>
                </p>
                <p className="text-sm text-gray-600">
                  <span className="text-yellow-600 font-bold">{quantity}</span> item{quantity > 1 ? "s" : ""}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold text-gray-800">
                  Total: <span className="text-yellow-600 font-bold">${totalPrice.toFixed(2)}</span>
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={onClose}
                className="bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg flex items-center gap-2 hover:scale-105"
              >
                <CloseIcon className="text-white size-5" />
                <span>Close</span>
              </button>
              <button
                onClick={() =>
                  onAddToCart({
                    ...item,
                    quantity,
                    totalPrice,
                  })
                }
                className="bg-gradient-to-t from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg flex items-center gap-2 hover:scale-105"
              >
                <ShoppingCart className="text-white size-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Cart Modal
const CartModal = ({
  cartItems,
  onClose,
  onRemoveItem,
  onUpdateQuantity,
  onProceedToPayment,
  user
}) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleUpdateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    onUpdateQuantity(index, newQuantity);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
            <button
              onClick={onClose}
              className="bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
            >
              <CloseIcon className="text-white size-5" />
            </button>
          </div>

          {user && (
            <div className="mb-4 p-3 bg-blue-50 rounded-lg flex items-center gap-2">
              <PersonIcon className="text-blue-600" />
              <span className="text-blue-800">Ordering as: {user.fullname || user.email}</span>
            </div>
          )}

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🛒</div>
              <p className="text-gray-600 text-lg">Your cart is empty</p>
              <button
                onClick={onClose}
                className="mt-4 bg-gradient-to-t from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white px-6 py-2 rounded-lg transition-all hover:scale-105"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg shadow-md"
                      />
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600 text-sm">
                          {item.quantity} × ${item.price}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => handleUpdateQuantity(index, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="bg-gray-200 text-gray-800 px-2 py-1 rounded-l disabled:opacity-50 hover:bg-gray-300 transition-colors"
                          >
                            -
                          </button>
                          <span className="px-2">{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQuantity(index, item.quantity + 1)}
                            className="bg-gray-200 text-gray-800 px-2 py-1 rounded-r hover:bg-gray-300 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(index)}
                          className="bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white text-sm mt-2 px-3 py-1 rounded-lg flex items-center gap-1 transition-all hover:scale-105"
                        >
                          <DeleteIcon className="text-white size-4" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800 text-lg">
                        ${item.totalPrice.toFixed(2)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t pt-4 mt-4 bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800 font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span className="text-gray-800 font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-4 pt-2 border-t border-gray-300">
                  <span className="text-gray-800">Total</span>
                  <span className="text-yellow-600">${total.toFixed(2)}</span>
                </div>

                <button
                  onClick={onProceedToPayment}
                  className="w-full bg-gradient-to-t from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-medium py-3 px-6 rounded-lg mt-6 transition-all shadow-lg hover:scale-105"
                >
                  Proceed to Payment
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Payment Modal
const PaymentModal = ({
  cartTotal,
  cartItems,
  onClose,
  onPaymentSuccess,
  user
}) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
    email: user?.email || "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user?.email) {
      setCardDetails(prev => ({ ...prev, email: user.email }));
    }
  }, [user]);

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = matches?.[0] || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    return parts.length ? parts.join(" ") : value;
  };

  const formatExpiry = (value) => {
    const v = value.replace(/[^0-9]/g, "");
    if (v.length >= 3) {
      return `${v.slice(0, 2)}/${v.slice(2, 4)}`;
    }
    return value;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardDetails((prev) => ({
      ...prev,
      number: formatted,
    }));
  };

  const handleExpiryChange = (e) => {
    const formatted = formatExpiry(e.target.value);
    setCardDetails((prev) => ({
      ...prev,
      expiry: formatted,
    }));
  };

  const validateForm = () => {
    if (!cardDetails.email) {
      setError("Email is required");
      toast.error("Email is required");
      return false;
    }

    if (paymentMethod === "card") {
      if (!cardDetails.number || cardDetails.number.replace(/\s/g, "").length < 15) {
        setError("Please enter a valid card number");
        toast.error("Please enter a valid card number");
        return false;
      }
      if (!cardDetails.name) {
        setError("Cardholder name is required");
        toast.error("Cardholder name is required");
        return false;
      }
      if (!cardDetails.expiry || cardDetails.expiry.length < 5) {
        setError("Please enter a valid expiry date (MM/YY)");
        toast.error("Please enter a valid expiry date (MM/YY)");
        return false;
      }
      if (!cardDetails.cvv || cardDetails.cvv.length < 3) {
        setError("Please enter a valid CVV");
        toast.error("Please enter a valid CVV");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const orderId = "ORD" + Math.floor(Math.random() * 1000000);
      
      const paymentData = {
        orderId,
        amount: cartTotal,
        customerEmail: cardDetails.email,
        customerName: cardDetails.name || user?.fullname || "Guest",
        paymentMethod,
        items: cartItems,
        userId: user?._id,
        orderDate: new Date().toISOString()
      };
      
      // Save order to user's history (simulated)
      if (user) {
        // You would typically save this to your backend
        const savedOrders = JSON.parse(localStorage.getItem(`orders_${user.email}`) || '[]');
        savedOrders.push(paymentData);
        localStorage.setItem(`orders_${user.email}`, JSON.stringify(savedOrders));
      }
      
      onPaymentSuccess(paymentData);

      toast.success("Payment processed successfully!");
    } catch (error) {
      console.error("Error during payment process:", error);
      setError("An error occurred during payment processing. Please try again.");
      toast.error("An error occurred during payment processing. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Complete Payment</h2>
            <button
              onClick={onClose}
              className="bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
              disabled={isProcessing}
            >
              <CloseIcon className="text-white size-5" />
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg border border-red-300">
              {error}
            </div>
          )}

          <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border border-yellow-200">
            <h3 className="font-medium mb-3 text-gray-800">Order Summary</h3>
            <div className="space-y-2">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-600">{item.quantity}x {item.name}</span>
                  <span className="text-gray-800 font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-bold text-lg mt-4 pt-3 border-t border-yellow-300">
              <span className="text-gray-800">Total</span>
              <span className="text-yellow-600">${cartTotal.toFixed(2)}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">
                Payment Method
              </label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    paymentMethod === "card"
                      ? "bg-gradient-to-t from-yellow-500 to-yellow-700 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setPaymentMethod("card")}
                  disabled={isProcessing}
                >
                  Credit Card
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    paymentMethod === "cash"
                      ? "bg-gradient-to-t from-yellow-500 to-yellow-700 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setPaymentMethod("cash")}
                  disabled={isProcessing}
                >
                  Cash
                </button>
              </div>
            </div>

            {paymentMethod === "card" && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1 font-medium">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    value={cardDetails.number}
                    onChange={handleCardNumberChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-800"
                    maxLength={19}
                    required
                    disabled={isProcessing}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-1 font-medium">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={cardDetails.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-800"
                    required
                    disabled={isProcessing}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-gray-700 mb-1 font-medium">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiry"
                      value={cardDetails.expiry}
                      onChange={handleExpiryChange}
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-800"
                      maxLength={5}
                      required
                      disabled={isProcessing}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1 font-medium">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={cardDetails.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-800"
                      maxLength={4}
                      required
                      disabled={isProcessing}
                    />
                  </div>
                </div>
              </>
            )}

            {paymentMethod === "cash" && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg text-center">
                <p className="text-gray-700">Pay with cash upon delivery</p>
                <p className="text-sm text-gray-500 mt-2">Our staff will contact you for delivery details</p>
              </div>
            )}

            <div className="mb-6">
              <label className="block text-gray-700 mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={cardDetails.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-800"
                required
                disabled={isProcessing || !!user?.email}
              />
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full py-3 px-6 rounded-lg font-medium text-white bg-gradient-to-t ${
                isProcessing ? "from-yellow-400 to-yellow-500" : "from-green-500 to-green-700 hover:from-green-600 hover:to-green-800"
              } transition-all flex items-center justify-center shadow-lg ${
                isProcessing ? "" : "hover:scale-105"
              }`}
            >
              {isProcessing ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                `Pay $${cartTotal.toFixed(2)}`
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Success Modal with Receipt
const SuccessModal = ({ onClose, cartItems, paymentData, user }) => {
  const receiptRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  // Simple PDF generation
  const generateSimplePDF = () => {
    try {
      setIsGeneratingPDF(true);
      
      // Create a simple text-based PDF using jsPDF
      import('jspdf').then((jsPDFModule) => {
        const jsPDF = jsPDFModule.default;
        const doc = new jsPDF();
        
        let yPos = 20;
        
        // Header
        doc.setFontSize(20);
        doc.setTextColor(255, 193, 7); // Yellow
        doc.text("GOURMET MENU", 20, yPos);
        
        yPos += 10;
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0); // Black
        doc.text("41 Orange Avenue, NYC", 20, yPos);
        doc.text("Tel: 012-345-6678", 20, yPos + 5);
        
        yPos += 15;
        doc.setFontSize(16);
        doc.text("PAYMENT RECEIPT", 20, yPos);
        
        yPos += 8;
        doc.setFontSize(10);
        doc.text(`Receipt #: ${paymentData?.orderId || 'N/A'}`, 20, yPos);
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, yPos + 5);
        doc.text(`Time: ${new Date().toLocaleTimeString()}`, 20, yPos + 10);
        
        yPos += 20;
        doc.text(`Customer: ${paymentData?.customerName || user?.fullname || 'Guest'}`, 20, yPos);
        doc.text(`Email: ${paymentData?.customerEmail || user?.email || 'N/A'}`, 20, yPos + 5);
        doc.text(`Payment Method: ${paymentData?.paymentMethod || 'Card'}`, 20, yPos + 10);
        
        yPos += 20;
        doc.setFontSize(12);
        doc.text("Items:", 20, yPos);
        
        yPos += 8;
        doc.setFontSize(10);
        
        // List items
        cartItems.forEach((item, index) => {
          doc.text(`${item.quantity}x ${item.name}`, 25, yPos);
          doc.text(`$${(item.price * item.quantity).toFixed(2)}`, 160, yPos);
          yPos += 6;
        });
        
        yPos += 10;
        doc.line(20, yPos, 190, yPos);
        yPos += 8;
        
        // Totals
        doc.text("Subtotal:", 140, yPos);
        doc.text(`$${subtotal.toFixed(2)}`, 160, yPos);
        yPos += 6;
        
        doc.text("Tax (10%):", 140, yPos);
        doc.text(`$${tax.toFixed(2)}`, 160, yPos);
        yPos += 6;
        
        doc.setFontSize(12);
        doc.setTextColor(255, 193, 7); // Yellow
        doc.text("TOTAL:", 140, yPos);
        doc.text(`$${total.toFixed(2)}`, 160, yPos);
        
        yPos += 15;
        doc.setTextColor(128, 128, 128); // Gray
        doc.setFontSize(8);
        doc.text("Thank you for your order!", 20, yPos);
        
        // Save PDF
        doc.save(`receipt-${paymentData?.orderId || 'order'}.pdf`);
        
        toast.success("Receipt downloaded successfully!");
        setIsGeneratingPDF(false);
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Failed to generate PDF. Please try printing instead.");
      setIsGeneratingPDF(false);
    }
  };

  // Handle print
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      toast.error("Pop-up blocked. Please allow pop-ups for this site.");
      return;
    }
    
    const receiptContent = `
      <html>
        <head>
          <title>Receipt ${paymentData?.orderId || ''}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 30px; max-width: 400px; margin: 0 auto; }
            .header { text-align: center; border-bottom: 2px solid #f59e0b; padding-bottom: 20px; margin-bottom: 20px; }
            .header h1 { color: #f59e0b; margin: 0; }
            .details { background: #f9fafb; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
            .items { margin-bottom: 20px; }
            .item { display: flex; justify-content: space-between; padding: 5px 0; border-bottom: 1px solid #e5e7eb; }
            .totals { border-top: 2px solid #e5e7eb; padding-top: 15px; }
            .total-row { display: flex; justify-content: space-between; margin: 5px 0; }
            .grand-total { font-size: 18px; font-weight: bold; color: #f59e0b; margin-top: 10px; padding-top: 10px; border-top: 2px solid #e5e7eb; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>GOURMET MENU</h1>
            <p>41 Orange Avenue, NYC</p>
            <p>Tel: 012-345-6678</p>
          </div>
          
          <h2 style="text-align: center;">PAYMENT RECEIPT</h2>
          <p style="text-align: center;">Receipt #: ${paymentData?.orderId || 'N/A'}</p>
          <p style="text-align: center;">Date: ${new Date().toLocaleDateString()}</p>
          
          <div class="details">
            <p><strong>Name:</strong> ${paymentData?.customerName || user?.fullname || 'Guest'}</p>
            <p><strong>Email:</strong> ${paymentData?.customerEmail || user?.email || 'N/A'}</p>
            <p><strong>Payment:</strong> ${paymentData?.paymentMethod || 'Card'}</p>
          </div>
          
          <div class="items">
            <h3>Items</h3>
            ${cartItems.map(item => `
              <div class="item">
                <span>${item.quantity}x ${item.name}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            `).join('')}
          </div>
          
          <div class="totals">
            <div class="total-row">
              <span>Subtotal:</span>
              <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="total-row">
              <span>Tax (10%):</span>
              <span>$${tax.toFixed(2)}</span>
            </div>
            <div class="grand-total total-row">
              <span>TOTAL:</span>
              <span>$${total.toFixed(2)}</span>
            </div>
          </div>
          
          <div class="footer">
            <p>Thank you for your order!</p>
          </div>
          
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `;
    
    printWindow.document.write(receiptContent);
    printWindow.document.close();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white rounded-xl max-w-md w-full p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Simple Receipt Preview */}
        <div className="mb-6 border rounded-lg p-4 bg-gray-50 text-left">
          <div className="border-b pb-2 mb-2">
            <h3 className="font-bold text-yellow-600">GOURMET MENU</h3>
            <p className="text-xs text-gray-600">41 Orange Avenue, NYC</p>
          </div>
          
          <p className="text-xs text-gray-500 mb-2">Receipt #{paymentData?.orderId || 'N/A'}</p>
          
          <div className="text-sm mb-3">
            <p><span className="font-semibold">Name:</span> {paymentData?.customerName || user?.fullname || 'Guest'}</p>
            <p><span className="font-semibold">Email:</span> {paymentData?.customerEmail || user?.email || 'N/A'}</p>
          </div>
          
          <div className="text-sm max-h-32 overflow-y-auto mb-3">
            {cartItems.map((item, idx) => (
              <div key={idx} className="flex justify-between py-1 border-b border-gray-100">
                <span>{item.quantity}x {item.name}</span>
                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="border-t pt-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax (10%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-base mt-2 pt-2 border-t">
              <span>TOTAL:</span>
              <span className="text-yellow-600">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="w-16 h-16 bg-gradient-to-t from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
        >
          <CheckIcon className="text-white w-8 h-8" />
        </motion.div>
        
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Payment Successful!</h2>
        <p className="text-gray-600 mb-4">
          You've ordered <span className="font-bold text-yellow-600">{totalItems}</span> item{totalItems > 1 ? "s" : ""}
        </p>
        
        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={generateSimplePDF}
            disabled={isGeneratingPDF}
            className={`w-full bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 ${
              isGeneratingPDF ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'
            }`}
          >
            {isGeneratingPDF ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating PDF...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Receipt (PDF)
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="w-full bg-gradient-to-t from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print Receipt
          </button>

          <button
            onClick={onClose}
            className="w-full bg-gradient-to-t from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg hover:scale-105"
          >
            Continue Shopping
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Order History Modal
const OrderHistoryModal = ({ isOpen, onClose, orders, user }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <HistoryIcon className="text-yellow-600" />
                  Order History
                </h2>
                <button
                  onClick={onClose}
                  className="bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
                >
                  <CloseIcon className="text-white size-5" />
                </button>
              </div>

              {orders.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">📦</div>
                  <p className="text-gray-600 text-lg">No orders yet</p>
                  <p className="text-gray-500 text-sm mt-2">Your order history will appear here</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((order, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-semibold text-gray-800">Order #{order.orderId}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(order.orderDate).toLocaleDateString()} at {new Date(order.orderDate).toLocaleTimeString()}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                          Completed
                        </span>
                      </div>
                      
                      <div className="space-y-2 mb-3">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="text-gray-600">{item.quantity}x {item.name}</span>
                            <span className="text-gray-800 font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t pt-3 flex justify-between">
                        <span className="text-gray-600 font-medium">Total Amount</span>
                        <span className="text-yellow-600 font-bold">${order.amount.toFixed(2)}</span>
                      </div>
                      
                      <div className="mt-2 text-xs text-gray-500">
                        Payment: {order.paymentMethod}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main Menu Component
export const UserMenu = () => {
  const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [menuType, setMenuType] = useState("bar");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("default");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  const [paymentData, setPaymentData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);

  const itemsPerPage = 9;

  // Get email from cookies
  useEffect(() => {
    const email = Cookies.get('userEmail');
    if (email) {
      setUserEmail(email);
      fetchUserData(email);
      loadOrderHistory(email);
    }
  }, []);

  const fetchUserData = async (email) => {
    try {
      const response = await axios.get(
        "https://hotel-nodejs-oa32.onrender.com/37829/7892"
      );
      
      const usersData = response.data?.users || response.data?.data?.users || [];
      const foundUser = usersData.find(u => u.email === email);
      
      if (foundUser) {
        setUser(foundUser);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const loadOrderHistory = (email) => {
    const savedOrders = JSON.parse(localStorage.getItem(`orders_${email}`) || '[]');
    setOrderHistory(savedOrders);
  };

  // Bar Menu Data
  const barMenu = {
    wine: [
      { id: 1, name: "St. Estephe", price: 36.00, description: "Rich full-bodied red with dark fruit notes", origin: "Bordeaux, France", year: 2018 },
      { id: 2, name: "St. Julien", price: 33.00, description: "Elegant with cassis and cedar aromas", origin: "Bordeaux, France", year: 2019 },
      { id: 3, name: "Verdillac", price: 35.00, description: "Crisp white with citrus and floral hints", origin: "Loire Valley, France", year: 2020 },
      { id: 4, name: "Medoc", price: 35.00, description: "Complex red with tobacco and berry flavors", origin: "Bordeaux, France", year: 2017 },
      { id: 5, name: "Chateau Coutet", price: 34.00, description: "Sweet white with honey and apricot notes", origin: "Barsac, France", year: 2016 },
      { id: 6, name: "Petit Chapeau", price: 36.00, description: "Light-bodied with cherry and spice", origin: "Beaujolais, France", year: 2021 }
    ],
    beer: [
      { id: 7, name: "Pale Lager", price: 8.00, description: "Crisp and clean with subtle hop bitterness", origin: "Germany", abv: "4.8%" },
      { id: 8, name: "Strong Ale", price: 6.00, description: "Bold and malty with dark fruit notes", origin: "Belgium", abv: "8.5%" },
      { id: 9, name: "Wheat Beer", price: 7.00, description: "Cloudy with banana and clove notes", origin: "Germany", abv: "5.2%" },
      { id: 10, name: "Brown Ale", price: 6.00, description: "Nutty with caramel and chocolate notes", origin: "England", abv: "5.6%" },
      { id: 11, name: "Devastator", price: 7.00, description: "Double bock with intense malt character", origin: "Germany", abv: "7.8%" }
    ],
    cocktail: [
      { id: 12, name: "Blue Hawaii", price: 7.00, description: "Tropical blend of rum, pineapple, and blue curacao", glass: "Hurricane glass" },
      { id: 13, name: "Long Island Temptations", price: 9.00, description: "Classic mix of multiple spirits with cola", glass: "Highball glass" },
      { id: 14, name: "Margarita", price: 8.00, description: "Perfect balance of tequila, lime, and orange liqueur", glass: "Margarita glass" },
      { id: 15, name: "Bacardi", price: 8.00, description: "Cocktail with rum, lime, and mint", glass: "Rocks glass" },
      { id: 16, name: "Martini", price: 9.00, description: "Elegant gin and vermouth with olive", glass: "Martini glass" },
      { id: 17, name: "Cosmopolitan", price: 9.00, description: "Vodka, cranberry, lime, and triple sec", glass: "Martini glass" }
    ],
    others: [
      { id: 18, name: "Lemonade", price: 3.00, description: "Fresh squeezed lemons with simple syrup", type: "Non-alcoholic" },
      { id: 19, name: "Iced Tea", price: 3.00, description: "Brewed daily with premium tea leaves", type: "Non-alcoholic" },
      { id: 20, name: "Orange Juice", price: 3.00, description: "Fresh squeezed Florida oranges", type: "Non-alcoholic" },
      { id: 21, name: "Strawberry Juice", price: 3.00, description: "Fresh blended strawberry refreshment", type: "Non-alcoholic" },
      { id: 22, name: "Smoothies", price: 3.00, description: "Creamy blend of fruits and yogurt", type: "Non-alcoholic" }
    ],
    snacks: [
      { id: 23, name: "Popcorn", price: 36.00, description: "Gourmet popcorn with truffle oil and parmesan", serving: "Large bowl" },
      { id: 24, name: "Pretzel Sticks", price: 33.00, description: "Soft pretzel sticks with beer cheese dip", serving: "Serves 2-3" },
      { id: 25, name: "Peanuts", price: 35.00, description: "Roasted peanuts with sea salt and herbs", serving: "Bowl" }
    ]
  };

  // Restaurant Menu Data
  const restaurantMenu = {
    appetizers: [
      { id: 101, name: "Bruschetta", price: 12.00, description: "Toasted bread with tomatoes, garlic, and basil", cuisine: "Italian" },
      { id: 102, name: "Calamari Fritti", price: 14.00, description: "Crispy fried squid with marinara sauce", cuisine: "Italian" },
      { id: 103, name: "Spring Rolls", price: 9.00, description: "Vegetable spring rolls with sweet chili sauce", cuisine: "Asian" },
      { id: 104, name: "Garlic Bread", price: 8.00, description: "Fresh baked bread with garlic butter and herbs", cuisine: "Italian" }
    ],
    salads: [
      { id: 105, name: "Caesar Salad", price: 13.00, description: "Romaine lettuce, croutons, parmesan with caesar dressing", cuisine: "American" },
      { id: 106, name: "Greek Salad", price: 12.00, description: "Tomatoes, cucumber, olives, feta with olive oil", cuisine: "Greek" },
      { id: 107, name: "Caprese Salad", price: 11.00, description: "Fresh mozzarella, tomatoes, basil with balsamic glaze", cuisine: "Italian" }
    ],
    soups: [
      { id: 108, name: "French Onion Soup", price: 10.00, description: "Rich beef broth with caramelized onions and cheese", cuisine: "French" },
      { id: 109, name: "Tomato Basil", price: 9.00, description: "Creamy tomato soup with fresh basil", cuisine: "Italian" },
      { id: 110, name: "Hot & Sour Soup", price: 9.00, description: "Spicy and tangy soup with tofu and mushrooms", cuisine: "Chinese" }
    ],
    mains: [
      { id: 111, name: "Grilled Salmon", price: 28.00, description: "Fresh Atlantic salmon with lemon butter sauce", cuisine: "Seafood" },
      { id: 112, name: "Ribeye Steak", price: 34.00, description: "12oz prime ribeye with herb butter", cuisine: "American" },
      { id: 113, name: "Chicken Parmesan", price: 22.00, description: "Breaded chicken with marinara and mozzarella", cuisine: "Italian" },
      { id: 114, name: "Vegetable Lasagna", price: 18.00, description: "Layered pasta with seasonal vegetables and ricotta", cuisine: "Italian" },
      { id: 115, name: "Pad Thai", price: 16.00, description: "Rice noodles with tofu, egg, peanuts, and bean sprouts", cuisine: "Thai" }
    ],
    pasta: [
      { id: 116, name: "Spaghetti Carbonara", price: 18.00, description: "Egg, cheese, pancetta, and black pepper", cuisine: "Italian" },
      { id: 117, name: "Fettuccine Alfredo", price: 17.00, description: "Creamy parmesan sauce with fettuccine", cuisine: "Italian" },
      { id: 118, name: "Penne Arrabbiata", price: 15.00, description: "Spicy tomato sauce with garlic and herbs", cuisine: "Italian" }
    ],
    pizza: [
      { id: 119, name: "Margherita Pizza", price: 16.00, description: "San Marzano tomatoes, mozzarella, basil", cuisine: "Italian" },
      { id: 120, name: "Pepperoni Pizza", price: 18.00, description: "Classic pepperoni with mozzarella", cuisine: "Italian" },
      { id: 121, name: "Quattro Formaggi", price: 19.00, description: "Four cheese blend", cuisine: "Italian" }
    ],
    desserts: [
      { id: 122, name: "Tiramisu", price: 9.00, description: "Coffee-flavored Italian dessert", cuisine: "Italian" },
      { id: 123, name: "Cheesecake", price: 8.00, description: "New York style with berry compote", cuisine: "American" },
      { id: 124, name: "Chocolate Lava Cake", price: 10.00, description: "Warm chocolate cake with molten center", cuisine: "French" },
      { id: 125, name: "Crème Brûlée", price: 8.00, description: "Rich custard with caramelized sugar top", cuisine: "French" }
    ],
    beverages: [
      { id: 126, name: "House Coffee", price: 3.00, description: "Fresh brewed daily", type: "Hot" },
      { id: 127, name: "Espresso", price: 3.50, description: "Double shot", type: "Hot" },
      { id: 128, name: "Cappuccino", price: 4.50, description: "Espresso with steamed milk foam", type: "Hot" },
      { id: 129, name: "Fresh Juice", price: 4.00, description: "Fresh squeezed", type: "Cold" }
    ]
  };

  const barCategories = [
    { id: 'all', label: 'All Items' },
    { id: 'wine', label: 'Wine' },
    { id: 'beer', label: 'Beer' },
    { id: 'cocktail', label: 'Cocktail' },
    { id: 'others', label: 'Others' },
    { id: 'snacks', label: 'Snacks' }
  ];

  const restaurantCategories = [
    { id: 'all', label: 'All Items' },
    { id: 'appetizers', label: 'Appetizers' },
    { id: 'salads', label: 'Salads' },
    { id: 'soups', label: 'Soups' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'pasta', label: 'Pasta' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'beverages', label: 'Beverages' }
  ];

  const getCurrentMenu = () => {
    return menuType === "bar" ? barMenu : restaurantMenu;
  };

  const currentMenu = getCurrentMenu();
  const currentCategories = menuType === "bar" ? barCategories : restaurantCategories;

  // Get all items with categories and images
  const allItems = useMemo(() => {
    return Object.entries(currentMenu).flatMap(([category, items]) => 
      items.map(item => ({ 
        ...item, 
        category,
        image: getItemImage(category, item.name, menuType)
      }))
    );
  }, [currentMenu, menuType]);

  // Filter items based on selected category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return allItems;
    }
    return allItems.filter(item => item.category === selectedCategory);
  }, [allItems, selectedCategory]);

  // Sort items
  const sortedItems = useMemo(() => {
    let sorted = [...filteredItems];
    
    switch(sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    
    return sorted;
  }, [filteredItems, sortBy]);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  // Reset page when category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, menuType]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDetail = (item) => {
    setSelectedItem(item);
    setShowDetailModal(true);
  };

  const handleAddToCart = (item) => {
    const existingIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingIndex >= 0) {
      const updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += item.quantity || 1;
      updatedCart[existingIndex].totalPrice =
        updatedCart[existingIndex].price * updatedCart[existingIndex].quantity;
      setCartItems(updatedCart);
      
      toast.success("Cart updated successfully!");
    } else {
      setCartItems((prev) => [
        ...prev,
        {
          ...item,
          quantity: item.quantity || 1,
          totalPrice: item.price * (item.quantity || 1),
        },
      ]);
      
      toast.success("Item added to cart!");
    }

    setShowDetailModal(false);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    toast.info("Item removed from cart");
  };

  const handleUpdateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    updatedCart[index].totalPrice = updatedCart[index].price * newQuantity;
    setCartItems(updatedCart);
  };

  const handleProceedToPayment = () => {
    setShowCartModal(false);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = (data) => {
    setPaymentData(data);
    setShowPaymentModal(false);
    setShowSuccessModal(true);
    toast.success("Payment completed successfully!");
    
    // Refresh order history
    if (user?.email) {
      loadOrderHistory(user.email);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setCartItems([]);
    setPaymentData(null);
  };

  const handleToggleFavorite = (itemId) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
    
    toast.info(favorites.includes(itemId) ? "Removed from favorites" : "Added to favorites");
  };

  const handleMenuTypeChange = (type) => {
    setMenuType(type);
    setSelectedCategory("all");
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0) * 1.1;
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Pagination buttons generator
  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            currentPage === i
              ? "bg-gradient-to-t from-yellow-500 to-yellow-700 text-white shadow-lg"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  if (isLoading) {
    return (
      <div className="py-12 w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white mx-auto min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300">Loading delicious menu...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="py-12 w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white mx-auto min-h-screen">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 px-4"
        >
          <div className="flex justify-between items-center mb-4">
            <h6 className="text-yellow-300 uppercase font-semibold tracking-wider text-sm">
              {menuType === "bar" ? "Bar & Lounge" : "Fine Dining"}
            </h6>
            
            {/* User Info and Order History */}
            {user && (
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowOrderHistory(true)}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all border border-yellow-500"
                >
                  <HistoryIcon className="text-yellow-400 size-5" />
                  <span className="hidden sm:inline">Order History</span>
                  {orderHistory.length > 0 && (
                    <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      {orderHistory.length}
                    </span>
                  )}
                </motion.button>
                
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
                  <PersonIcon className="text-yellow-400 size-5" />
                  <span className="text-sm text-gray-300">{user.fullname || user.email}</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Menu Type Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg p-1 bg-gray-800">
              <button
                onClick={() => handleMenuTypeChange("bar")}
                className={`px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  menuType === 'bar' 
                    ? 'bg-gradient-to-t from-yellow-500 to-yellow-700 text-white shadow-lg' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <LocalBar className="mr-2" />
                BAR MENU
              </button>
              <button
                onClick={() => handleMenuTypeChange("restaurant")}
                className={`px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  menuType === 'restaurant' 
                    ? 'bg-gradient-to-t from-yellow-500 to-yellow-700 text-white shadow-lg' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <RestaurantMenu className="mr-2" />
                RESTAURANT MENU
              </button>
            </div>
          </div>

          <motion.h1 
            className="text-4xl md:text-5xl font-bold mt-2 mb-4"
            animate={{ 
              textShadow: ["0 0 20px rgba(255,215,0,0.3)", "0 0 40px rgba(255,215,0,0.6)", "0 0 20px rgba(255,215,0,0.3)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-yellow-400">
              {menuType === "bar" ? "BAR MENU" : "RESTAURANT MENU"}
            </span>
          </motion.h1>
          
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our carefully curated selection of food and drinks
          </p>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
            <div className="flex items-center gap-2 bg-gray-800 px-6 py-2 rounded-full border border-yellow-500 hover:bg-yellow-500/20 transition-colors">
              <MapIcon className="text-yellow-400" />
              <span className="text-gray-200">41 Orange Avenue, NYC</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-6 py-2 rounded-full border border-yellow-500 hover:bg-yellow-500/20 transition-colors">
              <PhoneIcon className="text-yellow-400" />
              <span className="text-gray-200">012-345-6678</span>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-8 px-4"
        >
          {currentCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-gradient-to-t from-yellow-500 to-yellow-700 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Sort Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-end mb-6 px-4"
        >
          <div className="flex items-center space-x-3">
            <label className="text-gray-300 font-medium">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 cursor-pointer"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </motion.div>

        {/* Items Grid */}
        <div className="grid grid-cols-12 gap-6 px-4">
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <MenuItemCard
                key={item.id}
                item={item}
                delay={index * 0.1}
                onViewDetail={handleViewDetail}
                onAddToCart={handleAddToCart}
                onToggleFavorite={handleToggleFavorite}
                isFavorite={favorites.includes(item.id)}
                user={user}
              />
            ))
          ) : (
            <div className="col-span-12 text-center py-12">
              <p className="text-gray-400 text-xl">No items found in this category</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center items-center space-x-2 mt-8"
          >
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage === 1
                  ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Previous
            </button>
            
            {renderPaginationButtons()}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage === totalPages
                  ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Next
            </button>
          </motion.div>
        )}

        {/* Page Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-4 text-gray-400"
        >
          Showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, sortedItems.length)} of {sortedItems.length} items
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-12 pt-8 border-t border-yellow-500 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 text-sm mb-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
          </p>
          <div className="text-2xl font-bold text-yellow-400">
            BestTemplates
          </div>
        </motion.div>

        {/* Cart Button */}
        {cartItemCount > 0 && (
          <div className="fixed bottom-6 right-6 z-40">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCartModal(true)}
              className="bg-gradient-to-t from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white font-medium py-3 px-6 rounded-full shadow-2xl flex items-center gap-2 transition-all"
            >
              <ShoppingCart className="text-white size-5" />
              <span className="font-bold">{cartItemCount}</span>
              <span>{cartItemCount === 1 ? "Item" : "Items"}</span>
              <span className="bg-white text-yellow-600 px-2 py-1 rounded-full text-sm font-bold ml-2">
                ${cartTotal.toFixed(0)}
              </span>
            </motion.button>
          </div>
        )}

        {/* Modals */}
        <AnimatePresence>
          {showDetailModal && selectedItem && (
            <ItemDetailModal
              item={selectedItem}
              onClose={() => setShowDetailModal(false)}
              onAddToCart={handleAddToCart}
              user={user}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showCartModal && (
            <CartModal
              cartItems={cartItems}
              onClose={() => setShowCartModal(false)}
              onRemoveItem={handleRemoveFromCart}
              onUpdateQuantity={handleUpdateQuantity}
              onProceedToPayment={handleProceedToPayment}
              user={user}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showPaymentModal && (
            <PaymentModal
              cartTotal={cartTotal}
              cartItems={cartItems}
              onClose={() => setShowPaymentModal(false)}
              onPaymentSuccess={handlePaymentSuccess}
              user={user}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showSuccessModal && paymentData && (
            <SuccessModal
              cartItems={cartItems}
              paymentData={paymentData}
              onClose={handleCloseSuccessModal}
              user={user}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showOrderHistory && (
            <OrderHistoryModal
              isOpen={showOrderHistory}
              onClose={() => setShowOrderHistory(false)}
              orders={orderHistory}
              user={user}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
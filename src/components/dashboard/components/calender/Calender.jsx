import React, { useState, useEffect } from 'react';

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Get current month and year
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  // Get days in month
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  // Get first day of month (0-6, where 0 is Sunday)
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  // Create array of days
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Add empty slots for days before the first day of the month
  const emptySlots = Array(firstDayOfMonth).fill(null);

  // Navigation functions
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Check if a day is today
  const isToday = (day) => {
    return (
      day === currentTime.getDate() &&
      currentDate.getMonth() === currentTime.getMonth() &&
      currentDate.getFullYear() === currentTime.getFullYear()
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-6">
        {/* Calendar Header */}
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <h2 className="text-xl font-bold text-gray-800">
            {month} {year}
          </h2>
          <button 
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Current Time Display */}
        <div className="text-center mb-4">
          <div className="text-2xl font-semibold text-blue-600">
            {currentTime.toLocaleTimeString()}
          </div>
          <div className="text-sm text-gray-500">
            {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {/* Day names */}
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center font-medium text-gray-500 py-1">
              {day}
            </div>
          ))}

          {/* Empty slots for days before the first day of the month */}
          {emptySlots.map((_, index) => (
            <div key={`empty-${index}`} className="h-10"></div>
          ))}

          {/* Days of the month */}
          {days.map((day) => (
            <div
              key={day}
              className={`h-10 flex items-center justify-center rounded-full 
                ${isToday(day) ? 'bg-blue-500 text-white font-bold' : 'hover:bg-gray-100'}`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


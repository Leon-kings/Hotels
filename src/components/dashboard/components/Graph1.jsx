import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import {
  ChevronLeft,
  ChevronRight,
  CalendarToday,
  ArrowUpward
} from "@mui/icons-material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const UserGrowthChart = () => {
  const [growthData, setGrowthData] = useState({ labels: [], datasets: [] });
  const [loading, setLoading] = useState(false);
  const [timeRange, setTimeRange] = useState("year");
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Generate sample data since we removed API integration
    generateSampleData();
  }, [timeRange, currentYear]);

  const generateSampleData = () => {
    setLoading(true);
    
    // Simulate data loading delay
    setTimeout(() => {
      const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
      
      const labels = months;
      const dataPoints = months.map((_, index) => 
        Math.floor(Math.random() * 1000) + (index * 200)
      );
      
      setGrowthData({
        labels,
        datasets: [{
          label: "Total Users",
          data: dataPoints,
          backgroundColor: "rgba(99, 102, 241, 0.2)",
          borderColor: "rgba(99, 102, 241, 1)",
          borderWidth: 2,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: "rgba(99, 102, 241, 1)"
        }]
      });
      setLoading(false);
    }, 500);
  };

  const changeYear = (increment) => {
    setCurrentYear(prev => prev + increment);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold">User Growth Analytics</h3>
          <p className="text-sm text-gray-500">
            Track how your user base is growing over time
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => changeYear(-1)}
              className="p-1 rounded-md hover:bg-gray-100"
              title="Previous year"
            >
              <ChevronLeft />
            </button>
            <span className="font-medium px-2 py-1 bg-gray-100 rounded-md">
              <CalendarToday className="inline mr-1" fontSize="small" />
              {currentYear}
            </span>
            <button
              onClick={() => changeYear(1)}
              className="p-1 rounded-md hover:bg-gray-100"
              title="Next year"
              disabled={currentYear >= new Date().getFullYear()}
            >
              <ChevronRight />
            </button>
          </div>
          
          <div className="flex space-x-1">
            <button
              onClick={() => setTimeRange("week")}
              className={`px-3 py-1 text-sm rounded-md ${
                timeRange === "week" 
                  ? "bg-purple-500 text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeRange("month")}
              className={`px-3 py-1 text-sm rounded-md ${
                timeRange === "month" 
                  ? "bg-purple-500 text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setTimeRange("year")}
              className={`px-3 py-1 text-sm rounded-md ${
                timeRange === "year" 
                  ? "bg-purple-500 text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>

      <div className="h-80">
        <Line 
          data={growthData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                mode: 'index',
                intersect: false,
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  drawBorder: false
                },
                ticks: {
                  callback: function(value) {
                    return value.toLocaleString();
                  }
                }
              },
              x: {
                grid: {
                  display: false
                }
              }
            },
            elements: {
              point: {
                radius: 4,
                hoverRadius: 6
              }
            }
          }}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <p className="text-2xl font-bold">
                {growthData.datasets[0]?.data?.reduce((a, b) => a + b, 0).toLocaleString() || '0'}
              </p>
            </div>
            <div className="bg-purple-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">Growth This {timeRange === 'year' ? 'Year' : timeRange === 'month' ? 'Month' : 'Week'}</p>
              <p className="text-2xl font-bold flex items-center">
                {calculateGrowthRate(growthData.datasets[0]?.data || [])}%
                <ArrowUpward className="text-green-500 ml-1" fontSize="small" />
              </p>
            </div>
            <div className="bg-green-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">Avg. Daily Signups</p>
              <p className="text-2xl font-bold">
                {calculateAverageDaily(growthData.datasets[0]?.data || []).toLocaleString()}
              </p>
            </div>
            <div className="bg-blue-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper functions
const calculateGrowthRate = (data) => {
  if (!data || data.length < 2) return 0;
  const first = data[0];
  const last = data[data.length - 1];
  return (((last - first) / first) * 100).toFixed(1);
};

const calculateAverageDaily = (data) => {
  if (!data || data.length === 0) return 0;
  const total = data[data.length - 1];
  return Math.floor(total / 365); // Adjust based on your time range
};
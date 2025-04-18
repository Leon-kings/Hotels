/* eslint-disable no-unused-vars */
// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// export default function LineGraph() {
//   const data = [
//     { name: "0", users: 0 },
//     { name: "Jan", users: 30 },
//     { name: "Feb", users: 50 },
//     { name: "Mar", users: 40 },
//     { name: "Apr", users: 70 },
//     { name: "May", users: 60 },
//     { name: "Jun", users: 90 },
//     { name: "Jul", users: 30 },
//     { name: "Aug", users: 50 },
//     { name: "Sep", users: 40 },
//     { name: "Oct", users: 70 },
//     { name: "Nov", users: 80 },
//     { name: "Dec", users: 200 },
//   ];

//   return (
//     <div className="bg-white shadow-md rounded-lg p-4">
//       <h4 className="text-lg font-semibold mb-2">USERS</h4>
//       <ResponsiveContainer width="100%" height={330}>
//         <LineChart data={data}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line 
//             type="monotone" 
//             dataKey="users" 
//             stroke="#8884d8" 
//             activeDot={{ r: 8 }} 
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function LineGraph() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to generate month labels starting from the current month
  const generateMonths = () => {
    const months = [];
    const currentMonth = new Date().getMonth(); // April = 3 (0-indexed)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Generate 12 months starting from the current month
    for (let i = 0; i < 12; i++) {
      const monthIndex = (currentMonth + i) % 12;
      months.push(monthNames[monthIndex]);
    }
    return months;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://hotel-nodejs-oa32.onrender.com/83920/92303");
        const months = generateMonths();
        
        // Transform API data to match the generated months
        const formattedData = months.map((month, index) => {
          const monthData = response.data.data.find(item => 
            item.month === month || item.subscribedAt?.includes(month)
          );
          return {
            name: month,
            users: monthData ? monthData.users || monthData.value || 0 : 0,
          };
        });

        setData(formattedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        
        // Fallback data with real-time months
        const months = generateMonths();
        const fallbackData = months.map(month => ({
          name: month,
          users: Math.floor(Math.random() * 100), // Random data for demo
        }));
        setData(fallbackData);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h4 className="text-lg font-semibold mb-2">USERS</h4>
        <div className="flex justify-center items-center h-80">
          Loading data...
        </div>
      </div>
    );
  }

  if (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h4 className="text-lg font-semibold mb-2">USERS</h4>
      <ResponsiveContainer width="100%" height={330}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis label={{ value: "Total Logged In", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="users" 
            stroke="#8884d8" 
            activeDot={{ r: 8 }} 
            name="Logged In Users"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
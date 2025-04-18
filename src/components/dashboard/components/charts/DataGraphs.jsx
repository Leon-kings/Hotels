import React from "react";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import LineGraph from "./LineGraph";
import { MessagesSection } from "../messageContainer";
import { BookingChart } from "./BookingChart";

export const Graphs = () => {
  // Sample Data for Charts

  const pieData = [
    { name: "Users", value: 400 },
    { name: "Bookings", value: 400 },
    { name: "Messages", value: 100 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="w-full flex flex-col  bg-gray-100">
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
        {/* Line Chart */}
        <div className="graphic">
          <LineGraph />
        </div>
        <div className="data">
          <MessagesSection />
        </div>
      </div>
      {/* Make some analysis of data gathered here on API data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
        {/* Bar Chart */}
        <BookingChart />
        {/* Pie Chart */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-2">Pie Chart</h4>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    data={entry.name}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Plus, TrendingUp, TrendingDown, Target } from "lucide-react";

const EnhancedCaloriesDashboard = () => {
  const [newEntry, setNewEntry] = useState({ calories: "", meal: "breakfast" });

  // Extended sample data
  const weeklyData = [
    { day: "Monday", calories: 2100, protein: 120, carbs: 250, fat: 70 },
    { day: "Tuesday", calories: 2300, protein: 130, carbs: 270, fat: 75 },
    { day: "Wednesday", calories: 1950, protein: 115, carbs: 230, fat: 65 },
    { day: "Thursday", calories: 2400, protein: 140, carbs: 280, fat: 80 },
    { day: "Friday", calories: 2200, protein: 125, carbs: 260, fat: 73 },
    { day: "Saturday", calories: 1900, protein: 110, carbs: 220, fat: 63 },
    { day: "Sunday", calories: 2150, protein: 123, carbs: 255, fat: 72 },
  ];

  const macroTrends = [
    { name: "Week 1", calories: 2100, target: 2200 },
    { name: "Week 2", calories: 2250, target: 2200 },
    { name: "Week 3", calories: 2180, target: 2200 },
    { name: "Week 4", calories: 2300, target: 2200 },
  ];

  const mealDistribution = [
    { name: "Breakfast", value: 25, color: "#FF6B6B" },
    { name: "Lunch", value: 35, color: "#4ECDC4" },
    { name: "Dinner", value: 30, color: "#45B7D1" },
    { name: "Snacks", value: 10, color: "#96CEB4" },
  ];

  const totalCalories = weeklyData.reduce((sum, day) => sum + day.calories, 0);
  const dailyAverage = Math.round(totalCalories / weeklyData.length);
  const targetCalories = 2200;
  const completionRate = Math.round((dailyAverage / targetCalories) * 100);
  const caloriesTrend =
    weeklyData[weeklyData.length - 1].calories - weeklyData[0].calories;

  return (
    <div className="p-6 space-y-6 bg-slate-900 min-h-screen text-white">
      {/* Header Section */}
      <div
        className="flex justify-between items-center"
        style={{ marginTop: "100px" }}
      >
        <h1 className="text-2xl font-bold">Enhanced Calorie Analytics</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Week
          </button>
          <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors">
            Month
          </button>
        </div>
      </div>

      {/* Quick Input Form */}
      {/* <div className="bg-slate-800 p-6 rounded-lg"></div> */}

      {/* Main Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Total Intake</h3>
            <TrendingUp className="h-6 w-6" />
          </div>
          <div className="text-4xl font-bold">{totalCalories}kcal</div>
          <div className="text-sm opacity-70">This week</div>
        </div>

        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Daily Average</h3>
            <Target className="h-6 w-6" />
          </div>
          <div className="text-4xl font-bold">{dailyAverage}kcal</div>
          <div className="text-sm opacity-70">Target: {targetCalories}kcal</div>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Completion Rate</h3>
            {caloriesTrend >= 0 ? (
              <TrendingUp className="h-6 w-6" />
            ) : (
              <TrendingDown className="h-6 w-6" />
            )}
          </div>
          <div className="text-4xl font-bold">{completionRate}%</div>
          <div className="text-sm opacity-70">Weekly goal</div>
        </div>

        <div className="bg-gradient-to-br from-rose-600 to-rose-700 p-6 rounded-lg">
          <div className="mb-4">
            <h3 className="font-bold">Macro Balance</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Protein</span>
              <span className="font-bold">
                {weeklyData[weeklyData.length - 1].protein}g
              </span>
            </div>
            <div className="flex justify-between">
              <span>Carbs</span>
              <span className="font-bold">
                {weeklyData[weeklyData.length - 1].carbs}g
              </span>
            </div>
            <div className="flex justify-between">
              <span>Fat</span>
              <span className="font-bold">
                {weeklyData[weeklyData.length - 1].fat}g
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-slate-800 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-4">Daily Progress</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="day" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1e293b", border: "none" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="calories"
                  stroke="#4ECDC4"
                  strokeWidth={2}
                  dot={{ fill: "#4ECDC4" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-4">Macro Trends</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="day" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1e293b", border: "none" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Legend />
                <Bar dataKey="protein" fill="#FF6B6B" />
                <Bar dataKey="carbs" fill="#4ECDC4" />
                <Bar dataKey="fat" fill="#45B7D1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-4">Meal Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mealDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {mealDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: "#1e293b", border: "none" }}
                  itemStyle={{ color: "#fff" }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center mt-4 gap-4">
              {mealDistribution.map((entry) => (
                <div key={entry.name} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-sm">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-4">Monthly Trends vs Target</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={macroTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1e293b", border: "none" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="calories"
                  stroke="#4ECDC4"
                  strokeWidth={2}
                  dot={{ fill: "#4ECDC4" }}
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#FF6B6B"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: "#FF6B6B" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedCaloriesDashboard;

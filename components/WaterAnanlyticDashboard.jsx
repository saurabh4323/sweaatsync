"use client";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  Legend,
  RadialBarChart,
  RadialBar,
} from "recharts";

const WaterAnalyticsDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an API endpoint
        const response = await fetch("/Data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const COLORS = {
    primary: "#2563eb",
    secondary: "#7dd3fc",
    accent1: "#f97316",
    accent2: "#84cc16",
    accent3: "#8b5cf6",
    background: "#f8fafc",
    chartBg: "#ffffff",
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-2xl text-gray-600">Loading dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-2xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!data) return null;

  const { weeklyData, monthlyData, goals } = data;

  const calculateStats = () => {
    const totalIntake = weeklyData.reduce((acc, curr) => acc + curr.intake, 0);
    const avgIntake = Math.round(totalIntake / weeklyData.length);
    const completion = Math.round(
      (totalIntake / (goals.dailyTarget * 7)) * 100
    );
    return { totalIntake, avgIntake, completion };
  };

  const { totalIntake, avgIntake, completion } = calculateStats();

  const timeDistData = weeklyData.reduce((acc, curr) => {
    return [
      { name: "Morning", value: (acc[0]?.value || 0) + curr.morning },
      { name: "Afternoon", value: (acc[1]?.value || 0) + curr.afternoon },
      { name: "Evening", value: (acc[2]?.value || 0) + curr.evening },
    ];
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100">
          <p className="font-bold text-gray-800">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}${data.preferences.measurement}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className="min-h-screen p-6"
      style={{
        background:
          "linear-gradient(to bottom right, rgba(113, 0, 135, 0.7) 0%, rgba(70, 0, 70, 0.6) 15%, rgb(15, 15, 15) 35%, rgb(15, 15, 15) 65%, rgba(80, 50, 0, 0.5) 85%, rgba(121, 76, 0, 0.7) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white-800">
            Hydration Analytics Dashboard
          </h1>
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedPeriod("week")}
              className={`px-4 py-2 rounded-lg ${
                selectedPeriod === "week"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setSelectedPeriod("month")}
              className={`px-4 py-2 rounded-lg ${
                selectedPeriod === "month"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              Month
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
            <h3 className="text-lg font-semibold opacity-90">Total Intake</h3>
            <p className="text-3xl font-bold mt-2">
              {totalIntake}
              {data.preferences.measurement}
            </p>
            <p className="text-sm mt-2 opacity-80">This week</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white">
            <h3 className="text-lg font-semibold opacity-90">Daily Average</h3>
            <p className="text-3xl font-bold mt-2">
              {avgIntake}
              {data.preferences.measurement}
            </p>
            <p className="text-sm mt-2 opacity-80">
              Target: {goals.dailyTarget}
              {data.preferences.measurement}
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
            <h3 className="text-lg font-semibold opacity-90">
              Completion Rate
            </h3>
            <p className="text-3xl font-bold mt-2">{completion}%</p>
            <p className="text-sm mt-2 opacity-80">Weekly goal</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white">
            <h3 className="text-lg font-semibold opacity-90">Best Day</h3>
            <p className="text-3xl font-bold mt-2">
              {Math.max(...weeklyData.map((d) => d.intake))}
              {data.preferences.measurement}
            </p>
            <p className="text-sm mt-2 opacity-80">
              {
                weeklyData.find(
                  (d) =>
                    d.intake === Math.max(...weeklyData.map((d) => d.intake))
                )?.day
              }
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Daily Progress Chart */}
          <div className="bg-white/80 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Daily Progress
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyData}>
                  <defs>
                    <linearGradient
                      id="colorIntake"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor={COLORS.primary}
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor={COLORS.primary}
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="intake"
                    stroke={COLORS.primary}
                    fillOpacity={1}
                    fill="url(#colorIntake)"
                  />
                  <Line
                    type="monotone"
                    dataKey="target"
                    stroke={COLORS.accent1}
                    strokeDasharray="5 5"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Time Distribution Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Time Distribution
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={timeDistData}
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {timeDistData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={Object.values(COLORS)[index]}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Type Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Water Type Distribution
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar
                    dataKey="pureWater"
                    name="Pure Water"
                    fill={COLORS.primary}
                    stackId="a"
                  />
                  <Bar
                    dataKey="caffeineWater"
                    name="Caffeine Water"
                    fill={COLORS.secondary}
                    stackId="a"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Completion Radial */}
          <div className="bg-white/80 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Daily Goals Completion
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  innerRadius="10%"
                  outerRadius="80%"
                  data={weeklyData}
                  startAngle={180}
                  endAngle={0}
                >
                  <RadialBar
                    minAngle={15}
                    label={{ fill: "#666", position: "insideStart" }}
                    background
                    clockWise={true}
                    dataKey="percentage"
                    fill={COLORS.primary}
                  />
                  <Legend />
                  <Tooltip content={<CustomTooltip />} />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* Charts remain the same as before, just using data from the JSON */}
        {/* ... (Previous chart components) ... */}
      </div>
    </div>
  );
};

export default WaterAnalyticsDashboard;

"use client";
import React, { useState, useEffect } from "react";
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
} from "recharts";
import {
  Moon,
  Sun,
  Clock,
  Activity,
  Plus,
  Trash2,
  BedDouble,
} from "lucide-react";

const STORAGE_KEY = "sleep-tracker-data";

const SleepAnalyticsDashboard = () => {
  const defaultData = {
    entries: [],
    targetSleepHours: 8,
  };

  const [data, setData] = useState(defaultData);
  const [newEntry, setNewEntry] = useState({
    date: new Date().toISOString().split("T")[0],
    bedtime: "",
    wakeTime: "",
    quality: "good",
    interruptions: "0",
    notes: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const calculateSleepDuration = (bedtime, wakeTime) => {
    const start = new Date(`2000/01/01 ${bedtime}`);
    const end = new Date(`2000/01/01 ${wakeTime}`);
    if (end < start) end.setDate(end.getDate() + 1);
    return (end - start) / (1000 * 60 * 60);
  };

  const handleAddEntry = () => {
    if (!newEntry.bedtime || !newEntry.wakeTime) return;

    const duration = calculateSleepDuration(
      newEntry.bedtime,
      newEntry.wakeTime
    );

    const updatedData = {
      ...data,
      entries: [
        ...data.entries,
        {
          ...newEntry,
          id: Date.now(),
          duration,
        },
      ],
    };

    setData(updatedData);
    setNewEntry({
      date: new Date().toISOString().split("T")[0],
      bedtime: "",
      wakeTime: "",
      quality: "good",
      interruptions: "0",
      notes: "",
    });
  };

  const handleClearData = () => {
    if (
      window.confirm(
        "Are you sure you want to clear all sleep data? This cannot be undone."
      )
    ) {
      setData(defaultData);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const getWeeklyData = () => {
    const today = new Date();
    const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

    return data.entries
      .filter((entry) => new Date(entry.date) >= lastWeek)
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .map((entry) => ({
        date: new Date(entry.date).toLocaleDateString("en-US", {
          weekday: "short",
        }),
        duration: entry.duration,
        quality: entry.quality,
        interruptions: Number(entry.interruptions),
      }));
  };

  const weeklyData = getWeeklyData();
  const averageSleep = weeklyData.length
    ? (
        weeklyData.reduce((sum, day) => sum + day.duration, 0) /
        weeklyData.length
      ).toFixed(1)
    : 0;
  const bestSleep = weeklyData.length
    ? Math.max(...weeklyData.map((day) => day.duration))
    : 0;
  const sleepDebt =
    data.targetSleepHours * 7 -
    weeklyData.reduce((sum, day) => sum + day.duration, 0);

  return (
    <div
      className="p-6 space-y-6 bg-slate-50 min-h-screen"
      style={{ backgroundColor: "#0f172a" }}
    >
      {/* Header */}
      <div
        className="flex justify-between items-center"
        style={{ marginTop: "80px" }}
      >
        <h1 className="text-2xl font-bold text-gray-800">
          Sleep Analytics Dashboard
        </h1>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-lg flex items-center hover:bg-red-700"
          onClick={handleClearData}
        >
          <Trash2 className="mr-2 h-4 w-4" /> Clear Data
        </button>
      </div>

      {/* Sleep Entry Form */}
      <div className=" p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          <input
            type="date"
            value={newEntry.date}
            onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
            className="rounded-lg border p-2"
          />
          <input
            type="time"
            value={newEntry.bedtime}
            onChange={(e) =>
              setNewEntry({ ...newEntry, bedtime: e.target.value })
            }
            className="rounded-lg border p-2"
            placeholder="Bedtime"
          />
          <input
            type="time"
            value={newEntry.wakeTime}
            onChange={(e) =>
              setNewEntry({ ...newEntry, wakeTime: e.target.value })
            }
            className="rounded-lg border p-2"
            placeholder="Wake Time"
          />
          <select
            className="rounded-lg border p-2"
            value={newEntry.quality}
            onChange={(e) =>
              setNewEntry({ ...newEntry, quality: e.target.value })
            }
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
          <input
            type="number"
            min="0"
            value={newEntry.interruptions}
            onChange={(e) =>
              setNewEntry({ ...newEntry, interruptions: e.target.value })
            }
            className="rounded-lg border p-2"
            placeholder="Interruptions"
          />
          <button
            className="bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center"
            onClick={handleAddEntry}
          >
            <Plus className="mr-2 h-4 w-4" /> Add Sleep
          </button>
        </div>
      </div>

      {data.entries.length > 0 && (
        <>
          {/* Main Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-lg text-white">
              <div className="flex justify-between mb-4">
                <h3 className="font-semibold">Average Sleep</h3>
                <Moon className="h-6 w-6" />
              </div>
              <div className="text-4xl font-bold">{averageSleep}h</div>
              <div className="text-sm opacity-70">This week</div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 rounded-lg text-white">
              <div className="flex justify-between mb-4">
                <h3 className="font-semibold">Best Sleep</h3>
                <BedDouble className="h-6 w-6" />
              </div>
              <div className="text-4xl font-bold">{bestSleep}h</div>
              <div className="text-sm opacity-70">
                Target: {data.targetSleepHours}h
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 rounded-lg text-white">
              <div className="flex justify-between mb-4">
                <h3 className="font-semibold">Sleep Debt</h3>
                <Clock className="h-6 w-6" />
              </div>
              <div className="text-4xl font-bold">
                {Math.abs(sleepDebt).toFixed(1)}h
              </div>
              <div className="text-sm opacity-70">
                {sleepDebt > 0 ? "Under" : "Over"} target
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-600 to-rose-700 p-6 rounded-lg text-white">
              <div className="flex justify-between mb-4">
                <h3 className="font-semibold">Sleep Quality</h3>
                <Activity className="h-6 w-6" />
              </div>
              {weeklyData.length > 0 && (
                <div className="text-4xl font-bold capitalize">
                  {weeklyData[weeklyData.length - 1].quality}
                </div>
              )}
              <div className="text-sm opacity-70">Last night</div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div
              className=" p-6 rounded-lg shadow"
              style={{ border: "1px solid #fff" }}
            >
              <h3 className="text-lg font-semibold mb-4">
                Sleep Duration Trend
              </h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="duration"
                      name="Hours Slept"
                      stroke="#4ECDC4"
                      strokeWidth={2}
                      dot={{ fill: "#4ECDC4" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div
              className=" p-6 rounded-lg shadow"
              style={{ border: "1px solid #fff" }}
            >
              <h3 className="text-lg font-semibold mb-4">
                Sleep Interruptions
              </h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="interruptions"
                      name="Times Woken"
                      fill="#FF6B6B"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SleepAnalyticsDashboard;

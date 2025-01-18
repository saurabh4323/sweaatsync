"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Activity,
  TrendingUp,
  Droplets,
  Apple,
  Dumbbell,
  Moon,
  Target,
  Scale,
  Heart,
  Trophy,
  Clock,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Data = () => {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("diii");
        const response = await axios.get(`api/profile/${email}`);
        setInfo(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading || !info) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  const StatCard = ({ icon: Icon, title, value, color, unit = "" }) => (
    <div className="bg-gray-800 p-6 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
      <div className={`text-${color}-400 mb-3 animate-bounce`}>
        <Icon className="w-8 h-8" />
      </div>
      <div className="text-gray-400 text-sm mb-1">{title}</div>
      <div className="text-2xl font-bold text-white">
        {value}
        {unit}
      </div>
    </div>
  );

  const ProgressBar = ({ current, target, label, color = "blue" }) => {
    const percentage = Math.min((current / target) * 100, 100);
    return (
      <div className="bg-gray-800 p-4 rounded-xl">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-400">{label}</span>
          <span className="text-sm font-medium text-white">
            {percentage.toFixed(1)}%
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
          <div
            className={`bg-${color}-500 h-2.5 rounded-full transition-all duration-1000`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Fitness Dashboard</h1>
          <div className="text-gray-400">{new Date().toLocaleDateString()}</div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Target}
            title="Daily Calories Target"
            value={info.fitnessGoals.caloriesTarget}
            color="green"
            unit=" kcal"
          />
          <StatCard
            icon={Scale}
            title="Current Weight"
            value={info.fitnessGoals.currentWeight}
            color="blue"
            unit=" kg"
          />
          <StatCard
            icon={Droplets}
            title="Water Target"
            value={info.dailyIntake.waterTarget}
            color="cyan"
            unit=" ml"
          />
          <StatCard
            icon={Clock}
            title="Sleep Target"
            value={info.sleep.sleepTarget}
            color="purple"
            unit=" hours"
          />
        </div>

        {/* Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <ProgressBar
            current={info.dailyIntake.waterIntake}
            target={info.dailyIntake.waterTarget}
            label="Daily Water Progress"
            color="blue"
          />
          <ProgressBar
            current={info.lifestyle.stepCountDaily}
            target={info.lifestyle.stepGoal}
            label="Daily Steps Progress"
            color="green"
          />
        </div>

        {/* Nutrition Section */}
        <div className="bg-gray-800 p-6 rounded-xl mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Apple className="text-green-400" />
            Nutrition Tracking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg transform hover:scale-105 transition-all">
              <div className="text-sm text-gray-400">Protein</div>
              <div className="text-2xl font-bold">
                {info.dailyIntake.proteinIntake}g
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg transform hover:scale-105 transition-all">
              <div className="text-sm text-gray-400">Carbs</div>
              <div className="text-2xl font-bold">
                {info.dailyIntake.carbsIntake}g
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg transform hover:scale-105 transition-all">
              <div className="text-sm text-gray-400">Fats</div>
              <div className="text-2xl font-bold">
                {info.dailyIntake.fatIntake}g
              </div>
            </div>
          </div>
        </div>

        {/* Workout Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Dumbbell className="text-purple-400" />
              Workout Schedule
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-400">Weekly Sessions</div>
                    <div className="text-xl font-bold">
                      {info.workout.gymFrequencyPerWeek}
                    </div>
                  </div>
                  <div className="text-sm px-3 py-1 bg-purple-500 rounded-full">
                    {info.workout.gymIntensity}
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="text-sm text-gray-400">Preferred Workout</div>
                <div className="text-xl font-bold">
                  {info.workout.preferredWorkout}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Heart className="text-red-400" />
              Lifestyle
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="text-sm text-gray-400">
                  Active Minutes Today
                </div>
                <div className="text-xl font-bold">
                  {info.lifestyle.activeMinutes}
                </div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="text-sm text-gray-400">Dietary Preferences</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {info.preferences.dietaryRestrictions.map(
                    (restriction, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-600 rounded-full text-sm"
                      >
                        {restriction}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;

"use client";
import React, { useState } from "react";
import { Activity, Clock, Dumbbell, dumbbell } from "lucide-react";

const FitnessTracker = () => {
  const [activeTab, setActiveTab] = useState("intensity");
  const [intensity, setIntensity] = useState(0);
  const [hours, setHours] = useState(0);
  const [exercises, setExercises] = useState(0);
  const [weight, setWeight] = useState(0);

  const getTrackerConfig = () => {
    switch (activeTab) {
      case "weight":
        return {
          title: "Weight Tracker",
          subtitle: "Track your weight changes",
          current: weight,
          setter: setWeight,
          goal: 1,
          unit: "kg",
          options: [
            { value: 0.25, label: "0.25 kg" },
            { value: 0.5, label: "0.5 kg" },
            { value: 0.75, label: "0.75 kg" },
            { value: 1, label: "1 kg" },
          ],
        };
      case "intensity":
        return {
          title: "Intensity Tracker",
          subtitle: "Track your workout intensity",
          current: intensity,
          setter: setIntensity,
          goal: 100,
          unit: "%",
          options: [
            { value: 25, label: "25%" },
            { value: 50, label: "50%" },
            { value: 75, label: "75%" },
            { value: 100, label: "100%" },
          ],
        };
      case "hours":
        return {
          title: "Hours Tracker",
          subtitle: "Track your workout time",
          current: hours,
          setter: setHours,
          goal: 8,
          unit: "h",
          options: [
            { value: 0.5, label: "30min" },
            { value: 1, label: "1h" },
            { value: 1.5, label: "1.5h" },
            { value: 2, label: "2h" },
          ],
        };
      case "exercises":
        return {
          title: "Exercise Tracker",
          subtitle: "Track completed exercises",
          current: exercises,
          setter: setExercises,
          goal: 12,
          unit: "",
          options: [
            { value: 1, label: "+1" },
            { value: 2, label: "+2" },
            { value: 3, label: "+3" },
            { value: 4, label: "+4" },
          ],
        };
      default:
        return {};
    }
  };

  const config = getTrackerConfig();
  const progressPercentage = ((config.current / config.goal) * 100).toFixed(1);
  const remaining = config.goal - config.current;

  return (
    <div
      className="p-8 rounded-3xl max-w-md"
      style={{ border: "2px solid  #fff" }}
    >
      {/* Tab switcher */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("intensity")}
          className={`flex items-center ${
            activeTab === "intensity" ? "text-blue-400" : "text-gray-400"
          }`}
        >
          <Activity className="w-5 h-5 mr-2" />
          Intensity
        </button>
        <button
          onClick={() => setActiveTab("hours")}
          className={`flex items-center ${
            activeTab === "hours" ? "text-blue-400" : "text-gray-400"
          }`}
        >
          <Clock className="w-5 h-5 mr-2" />
          Hours
        </button>
        <button
          onClick={() => setActiveTab("exercises")}
          className={`flex items-center ${
            activeTab === "exercises" ? "text-blue-400" : "text-gray-400"
          }`}
        >
          <Dumbbell className="w-5 h-5 mr-2" />
          Exercises
        </button>
        <button
          onClick={() => setActiveTab("weight")}
          className={`flex items-center ${
            activeTab === "weight" ? "text-blue-400" : "text-gray-400"
          }`}
        >
          <Dumbbell className="w-5 h-5 mr-2" />
          Weight
        </button>
      </div>

      <div className="space-y-2 mb-6">
        <h1 className="text-blue-400 text-3xl font-bold">{config.title}</h1>
        <p className="text-gray-400 text-lg">{config.subtitle}</p>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Main display */}
        <div className="col-span-5">
          <div className="bg-purple-800/50 rounded-2xl p-6 h-48 flex flex-col justify-center items-center relative">
            <div className="text-white text-5xl font-bold mb-2">
              {config.current.toFixed(1)}
              {config.unit}
            </div>
            <div className="text-gray-400 text-sm">
              of {config.goal}
              {config.unit} goal
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-full"
              style={{
                width: `${(config.current / config.goal) * 100}%`,
                maxWidth: "100%",
              }}
            />
          </div>
        </div>

        <div className="col-span-7 grid grid-cols-2 gap-3">
          {config.options.map((option) => (
            <button
              key={option.value}
              onClick={() => config.setter((prev) => prev + option.value)}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-3 px-4 text-center"
            >
              {option.label}
            </button>
          ))}

          <div className="col-span-2 bg-white rounded-xl p-4 flex justify-between items-center">
            <button
              className="text-gray-600 text-2xl font-bold"
              onClick={() => config.setter((prev) => Math.max(0, prev - 0.1))}
            >
              −
            </button>
            <span className="text-gray-800">
              {config.current.toFixed(1)}
              <span className="text-sm text-gray-500 ml-1">{config.unit}</span>
            </span>
            <button
              className="text-gray-600 text-2xl font-bold"
              onClick={() => config.setter((prev) => prev + 0.1)}
            >
              +
            </button>
          </div>

          <div className="bg-white/10 rounded-xl p-4 flex flex-col justify-center items-center">
            <div className="text-blue-400 text-lg font-bold">Progress</div>
            <div className="text-white text-xl">{progressPercentage}%</div>
          </div>

          <div className="bg-white/10 rounded-xl p-4 flex flex-col justify-center items-center">
            <div className="text-gray-400">Status</div>
            <div className="text-white">
              {remaining.toFixed(1)}
              {config.unit}
              <br />
              <span className="text-sm text-gray-400">to go</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessTracker;

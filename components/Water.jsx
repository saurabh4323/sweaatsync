"use client";
import React, { useState, useEffect } from "react";
import { Droplets, Plus, Minus, RotateCcw, Trophy, Waves } from "lucide-react";

const Water = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const [lastDrink, setLastDrink] = useState(null);
  const [showSplash, setShowSplash] = useState(false);
  const targetIntake = 6000; // 4L in ml

  useEffect(() => {
    const saved = localStorage.getItem("waterIntake");
    if (saved) {
      const { amount, date } = JSON.parse(saved);
      const savedDate = new Date(date);
      if (new Date().toDateString() !== savedDate.toDateString()) {
        resetIntake();
      } else {
        setWaterIntake(amount);
        setLastDrink(new Date(date));
      }
    }
  }, []);

  const addWater = (amount) => {
    setWaterIntake((prev) => Math.min(targetIntake, prev + amount));
    setShowSplash(true);
    setTimeout(() => setShowSplash(false), 1000);
    const now = new Date();
    setLastDrink(now);
    localStorage.setItem(
      "waterIntake",
      JSON.stringify({
        amount: Math.min(targetIntake, waterIntake + amount),
        date: now.toISOString(),
      })
    );
  };

  const resetIntake = () => {
    setWaterIntake(0);
    setLastDrink(null);
    localStorage.removeItem("waterIntake");
  };

  const progress = (waterIntake / targetIntake) * 100;

  const getProgressColor = () => {
    if (progress >= 100) return "from-emerald-400 to-emerald-600";
    if (progress >= 75) return "from-yellow-400 to-yellow-600";
    return "from-blue-400 to-blue-600";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div
          className=" backdrop-blur-xl rounded-3xl shadow-2xl p-8"
          // style={{ backgroundColor: "#490056" }}
          style={{ border: "2px solid #fff" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
                Hydration Tracker
              </h1>
              <p className="text-gray-500 mt-1">Stay healthy, stay hydrated</p>
            </div>
            <button
              onClick={resetIntake}
              className="p-3 hover:bg-gray-100 rounded-xl transition-all"
            >
              <RotateCcw className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Main Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Glass Visualization */}
            <div className="relative aspect-[9/16] max-h-80">
              {/* Glass Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl border border-white/50 backdrop-blur overflow-hidden">
                {/* Water Fill */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-b ${getProgressColor()} transition-all duration-1000 ease-out`}
                  style={{ height: `${progress}%` }}
                >
                  {/* Water Surface Effect */}
                  <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-white/0 via-white/30 to-white/0" />

                  {/* Animated Bubbles */}
                  {showSplash && (
                    <>
                      <div className="absolute bottom-0 left-1/4 w-2 h-2 bg-white/50 rounded-full animate-bubble-1" />
                      <div className="absolute bottom-0 left-2/4 w-3 h-3 bg-white/40 rounded-full animate-bubble-2" />
                      <div className="absolute bottom-0 left-3/4 w-2 h-2 bg-white/60 rounded-full animate-bubble-3" />
                    </>
                  )}
                </div>
              </div>

              {/* Progress Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-5xl font-bold text-white drop-shadow-lg">
                    {(waterIntake / 1000).toFixed(1)}L
                  </span>
                  <span className="block text-white/90 font-medium mt-2">
                    of {targetIntake / 1000}L goal
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Controls and Stats */}
            <div className="space-y-6">
              {/* Quick Add Buttons */}
              <div className="grid grid-cols-2 gap-4">
                {[250, 500, 750, 1000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => addWater(amount)}
                    className="group relative overflow-hidden p-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-2xl transition-all duration-300"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-2 text-white">
                      <Droplets className="w-5 h-5" />
                      <span className="font-medium">{amount}ml</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="bg-gray-50 p-4 rounded-2xl space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={() =>
                      waterIntake >= 100 && setWaterIntake((prev) => prev - 100)
                    }
                    className="p-3 hover:bg-gray-200 rounded-xl transition-all"
                  >
                    <Minus className="w-5 h-5 text-gray-600" />
                  </button>
                  <div className="text-center flex-1">
                    <input
                      type="number"
                      value={waterIntake}
                      onChange={(e) =>
                        setWaterIntake(
                          Math.max(
                            0,
                            Math.min(
                              targetIntake,
                              parseInt(e.target.value) || 0
                            )
                          )
                        )
                      }
                      className="w-28 text-center bg-transparent text-2xl font-bold text-gray-800"
                    />
                    <span className="text-gray-500 ml-1">ml</span>
                  </div>
                  <button
                    onClick={() => addWater(100)}
                    className="p-3 hover:bg-gray-200 rounded-xl transition-all"
                  >
                    <Plus className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Status Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-2xl">
                  <div className="flex items-center gap-2 text-blue-600 mb-1">
                    <Waves className="w-4 h-4" />
                    <span className="font-medium">Progress</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-700">
                    {progress.toFixed(1)}%
                  </p>
                </div>
                <div
                  className={`p-4 rounded-2xl ${
                    progress >= 100 ? "bg-emerald-50" : "bg-gray-50"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 mb-1 ${
                      progress >= 100 ? "text-emerald-600" : "text-gray-600"
                    }`}
                  >
                    <Trophy className="w-4 h-4" />
                    <span className="font-medium">Status</span>
                  </div>
                  <p
                    className={`text-sm font-medium ${
                      progress >= 100 ? "text-emerald-700" : "text-gray-700"
                    }`}
                  >
                    {progress >= 100
                      ? "🎉 Goal achieved!"
                      : `${(
                          targetIntake - waterIntake
                        ).toLocaleString()}ml to go`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reminder Message */}
          {lastDrink &&
            (new Date() - new Date(lastDrink)) / 60000 > 120 &&
            progress < 100 && (
              <div className="mt-6 p-4 bg-amber-50 rounded-2xl">
                <p className="text-amber-700 text-center">
                  💧 It's been a while! Time for your next drink.
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Water;

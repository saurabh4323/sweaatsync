"use client";
import React, { useState, useEffect } from "react";
import { Moon, Plus, Minus, RotateCcw, Trophy, Bed } from "lucide-react";

const Sleep = () => {
  const [sleepHours, setSleepHours] = useState(0);
  const [lastLog, setLastLog] = useState(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const targetHours = 8; // Recommended sleep hours

  useEffect(() => {
    const saved = localStorage.getItem("sleepIntake");
    if (saved) {
      const { amount, date } = JSON.parse(saved);
      const savedDate = new Date(date);
      if (new Date().toDateString() !== savedDate.toDateString()) {
        resetSleep();
      } else {
        setSleepHours(amount);
        setLastLog(new Date(date));
      }
    }
  }, []);

  const addSleep = (hours) => {
    setSleepHours((prev) => Math.min(24, prev + hours));
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 1000);
    const now = new Date();
    setLastLog(now);
    localStorage.setItem(
      "sleepIntake",
      JSON.stringify({
        amount: Math.min(24, sleepHours + hours),
        date: now.toISOString(),
      })
    );
  };

  const resetSleep = () => {
    setSleepHours(0);
    setLastLog(null);
    localStorage.removeItem("sleepIntake");
  };

  const progress = (sleepHours / targetHours) * 100;

  const getProgressColor = () => {
    if (progress >= 100) return "from-indigo-400 to-indigo-600";
    if (progress >= 75) return "from-purple-400 to-purple-600";
    return "from-slate-400 to-slate-600";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div
        className="w-full max-w-lg"
        style={{ border: "2px solid #fff", borderRadius: "20px" }}
      >
        <div className="backdrop-blur-xl rounded-3xl shadow-2xl p-8 bg-black/20">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                Sleep Tracker
              </h1>
              <p className="text-gray-400 mt-1">Rest well, live better</p>
            </div>
            <button
              onClick={resetSleep}
              className="p-3 hover:bg-white/10 rounded-xl transition-all"
            >
              <RotateCcw className="w-5 h-5 text-gray-300" />
            </button>
          </div>

          {/* Main Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Moon Visualization */}
            <div className="relative aspect-[9/16] max-h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl border border-white/30 backdrop-blur overflow-hidden">
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-b ${getProgressColor()} transition-all duration-1000 ease-out`}
                  style={{ height: `${progress}%` }}
                >
                  <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-white/0 via-white/30 to-white/0" />
                  {showAnimation && (
                    <>
                      <div className="absolute bottom-0 left-1/4 w-2 h-2 bg-white/50 rounded-full animate-bounce" />
                      <div className="absolute bottom-0 left-2/4 w-3 h-3 bg-white/40 rounded-full animate-bounce" />
                      <div className="absolute bottom-0 left-3/4 w-2 h-2 bg-white/60 rounded-full animate-bounce" />
                    </>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-5xl font-bold text-white drop-shadow-lg">
                    {sleepHours.toFixed(1)}h
                  </span>
                  <span className="block text-white/90 font-medium mt-2">
                    of {targetHours}h goal
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Controls and Stats */}
            <div className="space-y-6">
              {/* Quick Add Buttons */}
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 4, 8].map((hours) => (
                  <button
                    key={hours}
                    onClick={() => addSleep(hours)}
                    className="group relative overflow-hidden p-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-2xl transition-all duration-300"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-2 text-white">
                      <Moon className="w-5 h-5" />
                      <span className="font-medium">{hours}h</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="bg-white/10 p-4 rounded-2xl space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={() =>
                      sleepHours >= 0.5 && setSleepHours((prev) => prev - 0.5)
                    }
                    className="p-3 hover:bg-white/10 rounded-xl transition-all"
                  >
                    <Minus className="w-5 h-5 text-gray-300" />
                  </button>
                  <div className="text-center flex-1">
                    <input
                      type="number"
                      value={sleepHours}
                      onChange={(e) =>
                        setSleepHours(
                          Math.max(
                            0,
                            Math.min(24, parseFloat(e.target.value) || 0)
                          )
                        )
                      }
                      step="0.5"
                      className="w-28 text-center bg-transparent text-2xl font-bold text-white"
                    />
                    <span className="text-gray-400 ml-1">hours</span>
                  </div>
                  <button
                    onClick={() => addSleep(0.5)}
                    className="p-3 hover:bg-white/10 rounded-xl transition-all"
                  >
                    <Plus className="w-5 h-5 text-gray-300" />
                  </button>
                </div>
              </div>

              {/* Status Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <div className="flex items-center gap-2 text-indigo-300 mb-1">
                    <Bed className="w-4 h-4" />
                    <span className="font-medium">Progress</span>
                  </div>
                  <p className="text-2xl font-bold text-white">
                    {progress.toFixed(1)}%
                  </p>
                </div>
                <div
                  className={`p-4 rounded-2xl ${
                    progress >= 100 ? "bg-indigo-900/50" : "bg-white/10"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 mb-1 ${
                      progress >= 100 ? "text-indigo-300" : "text-gray-300"
                    }`}
                  >
                    <Trophy className="w-4 h-4" />
                    <span className="font-medium">Status</span>
                  </div>
                  <p
                    className={`text-sm font-medium ${
                      progress >= 100 ? "text-indigo-200" : "text-gray-300"
                    }`}
                  >
                    {progress >= 100
                      ? "😴 Well rested!"
                      : `${(targetHours - sleepHours).toFixed(1)}h more needed`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sleep Reminder */}
          {lastLog &&
            (new Date() - new Date(lastLog)) / (1000 * 60 * 60) > 16 &&
            progress < 100 && (
              <div className="mt-6 p-4 bg-purple-900/30 rounded-2xl">
                <p className="text-purple-200 text-center">
                  🌙 Time to get some rest! You haven't logged sleep in a while.
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Sleep;

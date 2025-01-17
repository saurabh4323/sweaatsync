"use client"; // pages/index.js
import React, { useState } from "react";
import { Plus, Minus, RotateCcw } from "lucide-react";

const StepCounter = () => {
  const [steps, setSteps] = useState(0);
  const [goal, setGoal] = useState(10000);

  // Calculate progress percentage
  const progress = Math.min((steps / goal) * 100, 100);

  const incrementSteps = () => {
    setSteps((prev) => prev + 1);
  };

  const decrementSteps = () => {
    setSteps((prev) => Math.max(0, prev - 1));
  };

  const resetSteps = () => {
    setSteps(0);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center mb-6">
        Daily Step Counter
      </h1>

      {/* Progress Bar */}
      <div className="w-full h-4 bg-gray-200 rounded-full mb-4">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Step Count Display */}
      <div className="text-center mb-6">
        <span className="text-4xl font-bold">{steps.toLocaleString()}</span>
        <span className="text-gray-500 text-lg ml-2">
          / {goal.toLocaleString()} steps
        </span>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={decrementSteps}
          className="p-3 rounded-full bg-red-100 hover:bg-red-200 transition-colors"
          aria-label="Decrease steps"
        >
          <Minus className="w-6 h-6 text-red-600" />
        </button>

        <button
          onClick={incrementSteps}
          className="p-3 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
          aria-label="Increase steps"
        >
          <Plus className="w-6 h-6 text-green-600" />
        </button>

        <button
          onClick={resetSteps}
          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Reset steps"
        >
          <RotateCcw className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default StepCounter;

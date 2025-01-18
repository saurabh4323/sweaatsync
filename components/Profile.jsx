"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  User,
  Target,
  Droplets,
  Moon,
  Dumbbell,
  HeartPulse,
  Settings,
  Trophy,
  Scale,
  Apple,
  Clock,
} from "lucide-react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    email: "",
    fitnessGoals: {
      caloriesTarget: "",
      currentWeight: "",
      targetWeight: "",
      height: "",
      bodyFatPercentage: "",
    },
    dailyIntake: {
      waterTarget: "",
      proteinIntake: "",
      carbsIntake: "",
      fatIntake: "",
    },
    sleep: {
      sleepTarget: "",
    },
    workout: {
      gymFrequencyPerWeek: "",
      gymIntensity: "medium",
      preferredWorkout: "",
    },
    lifestyle: {
      stepGoal: "",
    },
    preferences: {
      dietaryRestrictions: "",
      activityPreference: "",
    },
  });

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };
  const route = useRouter();
  const handlesubmit = (e) => {
    e.preventDefault();
    const email = formData.email;
    const submit = axios.post("api/profile", formData);
    if (submit) {
      console.log(formData);
      const profilesaved = localStorage.setItem("diii", email);
      alert("Profile updated");
    } else {
      alert("Error updating profile");
    }
    route.push("/profile");
  };
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8 mt-[100px]">
      <div className="max-w-4xl mx-auto">
        <form className="space-y-8">
          {/* Basic Info */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <User className="text-blue-400" />
              Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-700 rounded p-2 text-white"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Fitness Goals */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="text-blue-400" />
              Fitness Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Daily Calories Target
                </label>
                <input
                  type="number"
                  className="w-full bg-gray-700 rounded p-2"
                  value={formData.fitnessGoals.caloriesTarget}
                  onChange={(e) =>
                    handleInputChange(
                      "fitnessGoals",
                      "caloriesTarget",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Current Weight (kg)
                </label>
                <input
                  type="number"
                  className="w-full bg-gray-700 rounded p-2"
                  value={formData.fitnessGoals.currentWeight}
                  onChange={(e) =>
                    handleInputChange(
                      "fitnessGoals",
                      "currentWeight",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Target Weight (kg)
                </label>
                <input
                  type="number"
                  className="w-full bg-gray-700 rounded p-2"
                  value={formData.fitnessGoals.targetWeight}
                  onChange={(e) =>
                    handleInputChange(
                      "fitnessGoals",
                      "targetWeight",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          </div>

          {/* Daily Intake */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Apple className="text-blue-400" />
              Daily Intake
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Water Target (ml)
                </label>
                <input
                  type="number"
                  className="w-full bg-gray-700 rounded p-2"
                  value={formData.dailyIntake.waterTarget}
                  onChange={(e) =>
                    handleInputChange(
                      "dailyIntake",
                      "waterTarget",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Protein (g)
                </label>
                <input
                  type="number"
                  className="w-full bg-gray-700 rounded p-2"
                  value={formData.dailyIntake.proteinIntake}
                  onChange={(e) =>
                    handleInputChange(
                      "dailyIntake",
                      "proteinIntake",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Carbs (g)
                </label>
                <input
                  type="number"
                  className="w-full bg-gray-700 rounded p-2"
                  value={formData.dailyIntake.carbsIntake}
                  onChange={(e) =>
                    handleInputChange(
                      "dailyIntake",
                      "carbsIntake",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Fat (g)
                </label>
                <input
                  type="number"
                  className="w-full bg-gray-700 rounded p-2"
                  value={formData.dailyIntake.fatIntake}
                  onChange={(e) =>
                    handleInputChange(
                      "dailyIntake",
                      "fatIntake",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          </div>

          {/* Sleep */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Moon className="text-blue-400" />
              Sleep
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Sleep Target (hours)
                </label>
                <input
                  type="number"
                  className="w-full bg-gray-700 rounded p-2"
                  value={formData.sleep.sleepTarget}
                  onChange={(e) =>
                    handleInputChange("sleep", "sleepTarget", e.target.value)
                  }
                />
              </div>
            </div>
          </div>

          {/* Workout */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Dumbbell className="text-blue-400" />
              Workout Preferences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Gym Sessions per Week
                </label>
                <input
                  type="number"
                  className="w-full bg-gray-700 rounded p-2"
                  value={formData.workout.gymFrequencyPerWeek}
                  onChange={(e) =>
                    handleInputChange(
                      "workout",
                      "gymFrequencyPerWeek",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Gym Intensity
                </label>
                <select
                  className="w-full bg-gray-700 rounded p-2"
                  value={formData.workout.gymIntensity}
                  onChange={(e) =>
                    handleInputChange("workout", "gymIntensity", e.target.value)
                  }
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Preferred Workout
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded p-2"
                  value={formData.workout.preferredWorkout}
                  onChange={(e) =>
                    handleInputChange(
                      "workout",
                      "preferredWorkout",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          </div>

          {/* Lifestyle */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <HeartPulse className="text-blue-400" />
              Lifestyle
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Daily Step Goal
                </label>
                <input
                  type="number"
                  className="w-full bg-gray-700 rounded p-2"
                  value={formData.lifestyle.stepGoal}
                  onChange={(e) =>
                    handleInputChange("lifestyle", "stepGoal", e.target.value)
                  }
                />
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Settings className="text-blue-400" />
              Preferences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Dietary Restrictions
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded p-2"
                  placeholder="Separate with commas"
                  value={formData.preferences.dietaryRestrictions}
                  onChange={(e) =>
                    handleInputChange(
                      "preferences",
                      "dietaryRestrictions",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Activity Preference
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded p-2"
                  value={formData.preferences.activityPreference}
                  onChange={(e) =>
                    handleInputChange(
                      "preferences",
                      "activityPreference",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          </div>

          <button
            onClick={handlesubmit}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;

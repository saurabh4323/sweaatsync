import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },

  fitnessGoals: {
    caloriesTarget: { type: Number, required: true },
    caloriesConsumed: { type: Number, default: 0 },
    currentWeight: { type: Number, required: true },
    targetWeight: { type: Number, required: true },
    height: { type: Number },
    bodyFatPercentage: { type: Number },
  },

  dailyIntake: {
    waterIntake: { type: Number, default: 0 },
    waterTarget: { type: Number, required: true },
    proteinIntake: { type: Number },
    carbsIntake: { type: Number },
    fatIntake: { type: Number },
  },

  sleep: {
    hoursSlept: { type: Number, default: 0 },
    sleepTarget: { type: Number, required: true },
  },

  workout: {
    gymFrequencyPerWeek: { type: Number },
    gymIntensity: { type: String, enum: ["low", "medium", "high"] },
    preferredWorkout: { type: String },
  },

  lifestyle: {
    stepCountDaily: { type: Number, default: 0 },
    stepGoal: { type: Number },
    activeMinutes: { type: Number, default: 0 },
  },

  preferences: {
    dietaryRestrictions: [{ type: String }],
    activityPreference: { type: String },
  },

  progress: {
    weightHistory: [
      {
        date: { type: Date, default: Date.now },
        weight: { type: Number },
      },
    ],
    milestones: [{ type: String }],
  },
});

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);

export default Profile;

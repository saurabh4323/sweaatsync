import connect from "@/config/connect";
import Profile from "@/scheama/Profile";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  await connect();

  try {
    const body = await req.json();

    const newProfile = new Profile({
      email: body.email,
      fitnessGoals: {
        caloriesTarget: body.fitnessGoals.caloriesTarget,
        currentWeight: body.fitnessGoals.currentWeight,
        targetWeight: body.fitnessGoals.targetWeight,
        height: body.fitnessGoals.height,
        bodyFatPercentage: body.fitnessGoals.bodyFatPercentage,
      },
      dailyIntake: {
        waterTarget: body.dailyIntake.waterTarget,
        proteinIntake: body.dailyIntake.proteinIntake,
        carbsIntake: body.dailyIntake.carbsIntake,
        fatIntake: body.dailyIntake.fatIntake,
      },
      sleep: {
        sleepTarget: body.sleep.sleepTarget,
      },
      workout: {
        gymFrequencyPerWeek: body.workout.gymFrequencyPerWeek,
        gymIntensity: body.workout.gymIntensity,
        preferredWorkout: body.workout.preferredWorkout,
      },
      lifestyle: {
        stepGoal: body.lifestyle.stepGoal,
      },
      preferences: {
        dietaryRestrictions: body.preferences.dietaryRestrictions,
        activityPreference: body.preferences.activityPreference,
      },
    });

    const savedProfile = await newProfile.save();
    return NextResponse.json(
      { message: "Profile created", profile: savedProfile },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating profile:", error);
    return NextResponse.json(
      {
        error: "Failed to create profile",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

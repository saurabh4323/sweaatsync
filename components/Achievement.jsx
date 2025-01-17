import React from "react";
import "./a.css";
import {
  Calendar,
  Award,
  Footprints,
  Trophy,
  Target,
  Flame,
  Heart,
  Dumbbell,
  Timer,
  TrendingUp,
} from "lucide-react";

const Achievement = () => {
  const achievementData = {
    currentStreak: 15,
    longestStreak: 10,
    totalDays: 45,
    stepGoalDays: 28,
    totalSteps: "34k",
    caloriesBurned: "4.5K",
    workoutMinutes: "2,450",
    monthlyProgress: 84,
    badges: [
      {
        name: "Elite Athlete",
        description: "Completed 100 workouts",
        icon: <Dumbbell size={24} />,
        date: "2024-01-15",
        level: "Gold",
      },
      {
        name: "Step Champion",
        description: "Hit 15k steps for 10 days",
        icon: <Footprints size={24} />,
        date: "2024-01-10",
        level: "Gold",
      },
      {
        name: "Dedication Master",
        description: "30 days active streak",
        icon: <Trophy size={24} />,
        date: "2024-01-05",
        level: "Gold",
      },
      {
        name: "Early Riser",
        description: "20 morning workouts",
        icon: <Flame size={24} />,
        date: "2024-01-03",
        level: "Silver",
      },
      {
        name: "Calorie Crusher",
        description: "Burned 50k calories",
        icon: <Heart size={24} />,
        date: "2024-01-01",
        level: "Silver",
      },
      {
        name: "Time Warrior",
        description: "100 hours of exercise",
        icon: <Timer size={24} />,
        date: "2023-12-28",
        level: "Silver",
      },
    ],
    monthlyActivity: Array.from({ length: 365 }, (_, i) => ({
      date: new Date(2024, 0, i + 1),
      activity: Math.random() > 0.3,
      steps: Math.floor(Math.random() * 15000),
    })),
  };

  const renderActivityGrid = () => {
    const weeks = [];
    let currentWeek = [];

    achievementData.monthlyActivity.slice(0, 120).forEach((day, index) => {
      currentWeek.push(day);
      if (
        currentWeek.length === 7 ||
        index === achievementData.monthlyActivity.length - 1
      ) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
    });

    return weeks.map((week, weekIndex) => (
      <div key={weekIndex} className="activity-week">
        {week.map((day, dayIndex) => {
          const intensity =
            day.steps > 10000
              ? "1"
              : day.steps > 7500
              ? "0.75"
              : day.steps > 5000
              ? "0.5"
              : "0.25";
          return (
            <div
              key={dayIndex}
              className="activity-day"
              style={{
                backgroundColor: day.activity
                  ? `rgba(16, 185, 129, ${intensity})`
                  : "#F3F4F6",
              }}
              title={`${day.date.toLocaleDateString()}: ${day.steps.toLocaleString()} steps`}
            />
          );
        })}
      </div>
    ));
  };

  return (
    <div className="containerk">
      <div className="content-wrapper">
        <div className="headera">
          <h1 className="page-title">Fitness Journey</h1>
          <div className="progress-wrapper">
            <span className="progress-label">Monthly Progress</span>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${achievementData.monthlyProgress}%` }}
              />
            </div>
            <span className="progress-value">
              {achievementData.monthlyProgress}%
            </span>
          </div>
        </div>

        <div className="stats-grid">
          {[
            {
              icon: <TrendingUp color="#10B981" />,
              label: "Current Streak",
              value: achievementData.currentStreak,
              unit: "days",
            },
            {
              icon: <Trophy color="#F59E0B" />,
              label: "Longest Streak",
              value: achievementData.longestStreak,
              unit: "days",
            },
            {
              icon: <Footprints color="#3B82F6" />,
              label: "Total Steps",
              value: achievementData.totalSteps,
              unit: "steps",
            },
            {
              icon: <Flame color="#EF4444" />,
              label: "Calories Burned",
              value: achievementData.caloriesBurned,
              unit: "cal",
            },
          ].map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-header">
                {stat.icon}
                <span className="stat-label">{stat.label}</span>
              </div>
              <div className="stat-value-wrapper">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-unit">{stat.unit}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="activity-card">
          <div className="activity-header">
            <h2 className="activity-title">Activity History</h2>
            <div className="activity-legend">
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ backgroundColor: "rgba(16, 185, 129, 0.25)" }}
                />
                <span>Light</span>
              </div>
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ backgroundColor: "rgba(16, 185, 129, 1)" }}
                />
                <span>Intense</span>
              </div>
            </div>
          </div>
          <div className="activity-grid">{renderActivityGrid()}</div>
        </div>

        <div className="badges-card">
          <h2 className="badges-title">Achievements Showcase</h2>
          <div className="badges-grid">
            {achievementData.badges.map((badge, index) => (
              <div key={index} className="badge-card">
                <div className="badge-content">
                  <div className={`badge-icon ${badge.level.toLowerCase()}`}>
                    {badge.icon}
                  </div>
                  <div className="badge-info">
                    <div className="badge-header">
                      <h3 className="badge-name">{badge.name}</h3>
                      <span
                        className={`badge-level ${badge.level.toLowerCase()}`}
                      >
                        {badge.level}
                      </span>
                    </div>
                    <p className="badge-description">{badge.description}</p>
                    <p className="badge-date">Earned {badge.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;

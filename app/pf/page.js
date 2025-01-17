"use client";
import { useState } from "react";
import {
  Dumbbell,
  Heart,
  Weight,
  Clock,
  Target,
  ChevronRight,
  Move,
  Trophy,
  Activity,
  Flame,
} from "lucide-react";

export default function FitnessAdvisor() {
  const [selected, setSelected] = useState("");

  const styles = {
    container: {
      marginTop: "-15%",
      minHeight: "100vh",
      // background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      padding: "32px",
      color: "#fff",
    },
    card: {
      // maxWidth: "800px",
      margin: "0 auto",
      background: "rgba(30, 41, 59, 0.7)",
      backdropFilter: "blur(10px)",
      borderRadius: "24px",
      padding: "32px",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
    },
    title: {
      fontSize: "36px",
      fontWeight: "700",
      background: "linear-gradient(to right, #60a5fa, #a78bfa)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "16px",
    },
    subtitle: {
      color: "#94a3b8",
      fontSize: "18px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
      marginBottom: "32px",
    },
    option: {
      background: "rgba(51, 65, 85, 0.5)",
      borderRadius: "16px",
      padding: "24px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    selectedOption: {
      background: "rgba(96, 165, 250, 0.2)",
      border: "1px solid rgba(96, 165, 250, 0.5)",
    },
    iconWrapper: {
      width: "48px",
      height: "48px",
      borderRadius: "12px",
      background: "rgba(96, 165, 250, 0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    optionText: {
      flex: 1,
    },
    optionTitle: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "4px",
    },
    optionDescription: {
      color: "#94a3b8",
      fontSize: "14px",
    },
    response: {
      background: "rgba(51, 65, 85, 0.5)",
      borderRadius: "16px",
      padding: "24px",
      marginTop: "32px",
      animation: "fadeIn 0.5s ease",
    },
    responseHeader: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "16px",
    },
    responseTitle: {
      fontSize: "20px",
      fontWeight: "600",
    },
    responseText: {
      color: "#94a3b8",
      lineHeight: "1.6",
    },
    goals: {
      display: "flex",
      gap: "16px",
      marginTop: "24px",
    },
    goal: {
      background: "rgba(51, 65, 85, 0.5)",
      borderRadius: "12px",
      padding: "12px",
      flex: 1,
      textAlign: "center",
    },
    goalIcon: {
      marginBottom: "8px",
    },
    goalText: {
      fontSize: "14px",
      color: "#94a3b8",
    },
  };

  const options = [
    {
      id: "weightloss",
      icon: <Weight size={24} color="#60a5fa" />,
      title: "Weight Loss",
      description: "Get advice for healthy weight loss",
      response: {
        title: "Weight Loss Plan",
        text: "Focus on creating a caloric deficit through diet and exercise. Combine cardio with strength training.",
        icon: <Flame size={24} color="#60a5fa" />,
        goals: [
          { icon: <Clock size={20} />, text: "30-45 min cardio daily" },
          { icon: <Dumbbell size={20} />, text: "Strength 3x week" },
          { icon: <Heart size={20} />, text: "500 cal deficit" },
        ],
      },
    },
    {
      id: "muscle",
      icon: <Dumbbell size={24} color="#60a5fa" />,
      title: "Muscle Gain",
      description: "Build strength and muscle mass",
      response: {
        title: "Muscle Building Plan",
        text: "Focus on progressive overload with compound exercises. Ensure adequate protein intake and recovery.",
        icon: <Trophy size={24} color="#60a5fa" />,
        goals: [
          { icon: <Target size={20} />, text: "Progressive overload" },
          { icon: <Clock size={20} />, text: "4-5 workouts weekly" },
          { icon: <Weight size={20} />, text: "1.8g protein/kg" },
        ],
      },
    },
    {
      id: "endurance",
      icon: <Move size={24} color="#60a5fa" />,
      title: "Endurance",
      description: "Improve stamina and cardiovascular fitness",
      response: {
        title: "Endurance Training Plan",
        text: "Incorporate varied cardio workouts with progressive duration and intensity increases.",
        icon: <Activity size={24} color="#60a5fa" />,
        goals: [
          { icon: <Heart size={20} />, text: "150min cardio weekly" },
          { icon: <Move size={20} />, text: "Varied intensities" },
          { icon: <Clock size={20} />, text: "Progressive duration" },
        ],
      },
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <header style={styles.header}>
          <h1 style={styles.title}>Fitness Advisor</h1>
          <p style={styles.subtitle}>Select your primary fitness goal</p>
        </header>

        <div style={styles.grid}>
          {options.map((option) => (
            <div
              key={option.id}
              style={{
                ...styles.option,
                ...(selected === option.id ? styles.selectedOption : {}),
              }}
              onClick={() => setSelected(option.id)}
            >
              <div style={styles.iconWrapper}>{option.icon}</div>
              <div style={styles.optionText}>
                <div style={styles.optionTitle}>{option.title}</div>
                <div style={styles.optionDescription}>{option.description}</div>
              </div>
              <ChevronRight size={20} color="#94a3b8" />
            </div>
          ))}
        </div>

        {selected && (
          <div style={styles.response}>
            <div style={styles.responseHeader}>
              {options.find((o) => o.id === selected)?.response.icon}
              <h2 style={styles.responseTitle}>
                {options.find((o) => o.id === selected)?.response.title}
              </h2>
            </div>
            <p style={styles.responseText}>
              {options.find((o) => o.id === selected)?.response.text}
            </p>
            <div style={styles.goals}>
              {options
                .find((o) => o.id === selected)
                ?.response.goals.map((goal, index) => (
                  <div key={index} style={styles.goal}>
                    <div style={styles.goalIcon}>{goal.icon}</div>
                    <div style={styles.goalText}>{goal.text}</div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

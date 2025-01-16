"use client";
import { useState, useEffect } from "react";
import "./nc.css";
const NumberCounter = () => {
  const stats = [
    { label: "Happy Customers", target: 5000 },
    { label: "Perfect Bodies", target: 4560 },
    { label: "Working Hours", target: 570 },
    { label: "Success Stories", target: 900 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const steps = 50; // Number of steps in the animation
    const interval = duration / steps;

    const incrementValues = stats.map((stat) => stat.target / steps);
    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCounts((prevCounts) =>
          prevCounts.map((count, index) => {
            const newValue = count + incrementValues[index];
            return newValue > stats[index].target
              ? stats[index].target
              : newValue;
          })
        );
        currentStep++;
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="counter-container">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={stat.label} className="stat-item">
            <div className="stat-value">
              {Math.round(counts[index]).toLocaleString()}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberCounter;

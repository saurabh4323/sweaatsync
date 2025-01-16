import React from "react";
import styles from "./SustainableHabits.module.css";

const SustainableHabits = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h2 className={styles.heading}>Building Sustainable Habits</h2>
        <p className={styles.description}>
          Getting fit is the easy part, staying fit is the real deal. We at
          FITTR realize this and integrate fitness into your existing lifestyle
          gradually to ensure you don’t lose the results.
        </p>
        <div className={styles.habits}>
          <img
            src="https://www.fittr.com/static-content/sustainable_habits_124af7fc55.webp" // Update with your image path or URL
            alt="Monitoring"
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.rightSection}>
        <h2 className={styles.heading}>Monitoring and Accountability</h2>
        <p className={styles.description}>
          Our expert coaches don’t just give you diet and training plans — they
          stay by your side as a guide and help you navigate your fitness
          journey.
        </p>
        <div className={styles.imageContainer}>
          <img
            src="https://www.fittr.com/static-content/monitoring_and_accountability_abcdbf501d.webp" // Update with your image path or URL
            alt="Monitoring"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default SustainableHabits;

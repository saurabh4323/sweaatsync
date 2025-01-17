"use client";
import { useState } from "react";

const styles = {
  container: {
    marginTop: "80px",
    maxHeight: "50vh",
    minWidth: "140%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "20px",
  },
  card: {
    width: "150%",
    // Width: "50px",
    // background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
    borderRadius: "24px",
    padding: "40px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    border: "2px solid rgb(255, 255, 255)",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "32px",
    background: "linear-gradient(to right, #667eea, #764ba2)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.5px",
  },
  toggleContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "32px",
    padding: "6px",
    background: "rgba(0, 0, 0, 0.05)",
    borderRadius: "16px",
  },
  toggleButton: {
    padding: "12px 24px",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "15px",
    fontWeight: "500",
  },
  activeButton: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
  },
  inactiveButton: {
    background: "transparent",
    color: "#666",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "15px",
    color: "#4a5568",
    fontWeight: "500",
    marginLeft: "4px",
  },
  input: {
    padding: "16px",
    border: "2px solid rgba(102, 126, 234, 0.2)",
    borderRadius: "14px",
    fontSize: "16px",
    transition: "all 0.3s ease",
    outline: "none",
    color: "#000",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  submitButton: {
    padding: "16px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    border: "none",
    borderRadius: "14px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    marginTop: "8px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
  },
  result: {
    marginTop: "32px",
    padding: "24px",
    borderRadius: "16px",
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    textAlign: "center",
  },
  bmiValue: {
    fontSize: "28px",
    fontWeight: "bold",
    background: "linear-gradient(to right, #667eea, #764ba2)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "8px",
  },
  category: {
    fontSize: "18px",
    color: "#4a5568",
    fontWeight: "500",
  },
};

export default function Bmi() {
  const [unit, setUnit] = useState("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    let bmiValue;
    if (unit === "metric") {
      bmiValue = parseFloat(weight) / Math.pow(parseFloat(height) / 100, 2);
    } else {
      bmiValue = (parseFloat(weight) / Math.pow(parseFloat(height), 2)) * 703;
    }

    bmiValue = parseFloat(bmiValue.toFixed(1));
    setBmi(bmiValue);

    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 25) setCategory("Healthy");
    else if (bmiValue < 30) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>BMI Calculator</h1>

        <div style={styles.toggleContainer}>
          <button
            onClick={() => setUnit("metric")}
            style={{
              ...styles.toggleButton,
              ...(unit === "metric"
                ? styles.activeButton
                : styles.inactiveButton),
            }}
          >
            Metric
          </button>
          <button
            onClick={() => setUnit("imperial")}
            style={{
              ...styles.toggleButton,
              ...(unit === "imperial"
                ? styles.activeButton
                : styles.inactiveButton),
            }}
          >
            Imperial
          </button>
        </div>

        <form onSubmit={calculateBMI} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Height ({unit === "metric" ? "cm" : "inches"})
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              style={{
                ...styles.input,
                ":focus": {
                  borderColor: "#667eea",
                  boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.2)",
                },
              }}
              required
              step="any"
              placeholder="Enter height"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Weight ({unit === "metric" ? "kg" : "lbs"})
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              style={{
                ...styles.input,
                ":focus": {
                  borderColor: "#667eea",
                  boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.2)",
                },
              }}
              required
              step="any"
              placeholder="Enter weight"
            />
          </div>

          <button
            type="submit"
            style={{
              ...styles.submitButton,
              ":hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 16px rgba(102, 126, 234, 0.4)",
              },
            }}
          >
            Calculate BMI
          </button>
        </form>

        {bmi && (
          <div style={styles.result}>
            <div style={styles.bmiValue}>Your BMI: {bmi}</div>
            <div style={styles.category}>Category: {category}</div>
          </div>
        )}
      </div>
    </div>
  );
}

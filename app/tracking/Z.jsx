"use client";
import React, { useEffect, useState } from "react";
import { Search, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./nutrition-search.css";

const API_KEY = "E3YHPl5iWS64yerqGOJuM4gniuFgk4uZCDONB7Rz";

const CalorieTracker = ({ calories }) => {
  const data = parseFloat(localStorage.getItem("calories")) || 0; // Parse and provide default value
  console.log(data);

  const [totalCalories, setTotalCalories] = useState(data);
  const [nus, setnus] = useState(5);
  const maxDailyCalories = 2500;
  const percentage = (totalCalories / maxDailyCalories) * 100;

  const getColor = () => {
    if (percentage <= 35) return "rgb(255, 0, 0)";
    if (percentage <= 75) return "rgb(255, 165, 0)";
    return "rgb(0, 255, 0)";
  };

  const handleAddCalories = () => {
    const calorieValue = parseFloat(calories);
    if (!isNaN(calorieValue)) {
      setTotalCalories((prev) =>
        Math.min(prev + calorieValue, maxDailyCalories)
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="calorie-tracker"
    >
      <div className="tracker-header">
        <h3 className="tracker-title">Daily Calorie Tracker</h3>
      </div>

      <div className="speedometer-container">
        {/* Background semicircle */}
        <div className="speedometer-background"></div>

        {/* Filled semicircle that animates */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            width: "40%",
            margin: "auto",
            // clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0% 100%)",
            // borderRadius: "10rem 10rem 0 0",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `conic-gradient(
                from 0.75turn at 50% 100%,
                ${getColor()} ${percentage * 1.8}deg,
                transparent ${percentage * 1.8}deg
              )`,
              transition: "all 0.5s ease-out",
              borderRadius: "10rem 10rem 0 0",
            }}
          />
        </div>

        {/* Needle */}
        <motion.div
          initial={{ rotate: -90 }}
          animate={{ rotate: (percentage / 100) * 180 - 90 }}
          className="speedometer-needle"
          style={{
            width: "1px",
            backgroundColor: getColor(),
            transformOrigin: "bottom center",
          }}
        />
        <div className="speedometer-center" />
        <div className="calorie-display">
          <div className="current-calories">{totalCalories.toFixed(0)}</div>
          <div className="max-calories">/ {maxDailyCalories} cal</div>
        </div>
      </div>

      <div className="percentage-markers">
        <span>0%</span>
        <span>25%</span>
        <span>50%</span>
        <span>75%</span>
        <span>100%</span>
      </div>
    </motion.div>
  );
};

// export default CalorieTracker;
export default function Home() {
  const [query, setQuery] = useState("mango");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [foodData, setFoodData] = useState(null);

  const fetchFoodData = async (searchQuery) => {
    if (!searchQuery.trim()) {
      setFoodData(null);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const searchResponse = await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=${encodeURIComponent(
          searchQuery
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const searchData = await searchResponse.json();

      if (searchData.foods && searchData.foods.length > 0) {
        const food = searchData.foods[0];
        setFoodData({
          description: food.description,
          nutrients: food.foodNutrients.map((nutrient) => ({
            name: nutrient.nutrientName,
            amount: nutrient.value,
            unit: nutrient.unitName,
          })),
        });
      } else {
        setError("No food found with that name");
      }
    } catch (err) {
      setError("Error fetching food data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoodData(query);
  }, []);

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const debouncedSearch = React.useCallback(
    debounce((searchQuery) => {
      fetchFoodData(searchQuery);
    }, 500),
    []
  );

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    debouncedSearch(newQuery);
  };

  const getNutrientValue = (nutrientName) => {
    if (!foodData?.nutrients) return "N/A";
    const nutrient = foodData.nutrients.find((n) => n.name === nutrientName);
    return nutrient ? `${nutrient.amount.toFixed(1)} ${nutrient.unit}` : "N/A";
  };

  return (
    <>
      <main className="main-container" style={{ display: "none" }}>
        <div
          className="niih"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(113, 0, 135, 0.7) 0%,rgba(70, 0, 70, 0.6) 15%,rgb(15, 15, 15) 35%,rgb(15, 15,15) 65%, rgba(80, 50, 0, 0.5) 85%, rgba(121, 76, 00.7)100%)",
            position: "absolute",
            right: "0",
            top: "0",
            width: "100%",
            minHeight: "220vh",
            zIndex: -1,
          }}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="content-wrapper"
        >
          <h1 className="page-title">Nutrition Search</h1>

          <div className="search-form">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="search-input-container"
            >
              <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Enter food name (e.g., apple)"
                className="search-input"
              />
              <div className="search-button">
                <Search size={20} />
                {loading ? "Analyzing..." : "Search"}
              </div>
            </motion.div>
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="error-message"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {foodData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="results-container"
              >
                <h2 className="food-title">{foodData.description}</h2>

                <div className="nutrient-grid">
                  {[
                    { name: "Calories", value: getNutrientValue("Energy") },
                    { name: "Protein", value: getNutrientValue("Protein") },
                    {
                      name: "Carbohydrates",
                      value: getNutrientValue("Carbohydrate, by difference"),
                    },
                    {
                      name: "Fat",
                      value: getNutrientValue("Total lipid (fat)"),
                    },
                  ].map((nutrient, index) => (
                    <motion.div
                      key={nutrient.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="nutrient-card"
                    >
                      <h3 className="nutrient-name">{nutrient.name}</h3>
                      <p className="nutrient-value">{nutrient.value}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="additional-nutrients"
                >
                  <h3 className="section-title">Additional Nutrients</h3>
                  <div className="nutrients-grid">
                    {foodData.nutrients.map((nutrient, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="nutrient-item"
                      >
                        <span className="nutrient-label">
                          {nutrient.name}:{" "}
                        </span>
                        {nutrient.amount.toFixed(1)} {nutrient.unit}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
      <CalorieTracker calories={parseFloat(getNutrientValue("Energy"))} />
    </>
  );
}

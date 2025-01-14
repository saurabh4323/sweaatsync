"use client";
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  // Parallax Effect
  const { scrollYProgress } = useScroll(); // scroll position
  const overlayTextY = useTransform(scrollYProgress, [0, 1], [0, 900]); // Moves the overlay text up vertically
  const cardY = useTransform(scrollYProgress, [0, 1], [90, -110]); // Moves the cards as you scroll
  const overlayTextYz = useTransform(scrollYProgress, [0, 1], [-20, 50]);
  return (
    <div className="hitbox">
      <div className={styles.heroContainer}>
        <motion.div
          className="imageleft"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 128, 1) 35%, rgba(255, 20, 147, 1) 70%, rgba(0, 0, 0, 1) 100%)",
            position: "absolute",
            right: "0",
            top: "0",
            width: "60%",
            height: "170vh",
            zIndex: -1,
          }}
        ></motion.div>
        <div
          className="cion"
          style={{
            width: "100%",
            // marginLeft: "10%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <motion.div
            className={styles.overlayText}
            style={{ y: overlayTextY }}
          >
            <span>SWEAT</span>
            <span>SYNC</span>
          </motion.div>

          <motion.div
            className={styles.subtitle}
            style={{
              y: overlayTextYz,
              zIndex: 99999, // Ensure it remains above other elements
              // position: "relative",
            }}
          >
            Track. Sync. Progress.
          </motion.div>
        </div>
      </div>

      {/* Parallax Section */}
      <div
        className="parall"
        style={{
          zIndex: "-1",
          height: "100vh",
          width: "100%",
          backgroundColor: "#050505",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          overflow: "hidden",
        }}
      >
        <div
          className="niih"
          style={{
            background:
              "linear-gradient(-90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 128, 1) 35%, rgba(255, 20, 147, 1) 70%, rgba(0, 0, 0, 1) 100%)",
            position: "absolute",
            left: "0",
            width: "60%",
            height: "100vh",
          }}
        ></div>
        {/* Card 1 */}
        <motion.div
          className="card"
          style={{
            backgroundColor: "#000063",
            width: "200px",
            height: "250px",
            borderRadius: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            y: cardY,
          }}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          onClick={() => alert("Card 1 Clicked!")}
        >
          Track Your Progress
        </motion.div>
        {/* Card 2 */}
        <motion.div
          className="card"
          style={{
            backgroundColor: "#4704cf",
            width: "200px",
            height: "200px",
            borderRadius: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            y: cardY,
          }}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          onClick={() => alert("Card 2 Clicked!")}
        >
          Export & Analyze
        </motion.div>
        {/* Card 3 */}
        <motion.div
          className="card"
          style={{
            backgroundColor: "#c71073",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            y: cardY,
          }}
          whileHover={{
            scale: 1.1,
            rotate: 60, // Adjust the rotation degree as needed
            transition: { duration: 0.3 },
          }}
          onClick={() => alert("Card 3 Clicked!")}
        >
          Visualize Your Journey
        </motion.div>
        {/* Card 4 */}
        <motion.div
          className="card"
          style={{
            backgroundColor: "#4704cf",
            width: "200px",
            height: "200px",
            borderRadius: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            y: cardY,
          }}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          onClick={() => alert("Card 4 Clicked!")}
        >
          Stay Motivated
        </motion.div>
        {/* Card 5 */}
        <motion.div
          className="card"
          style={{
            backgroundColor: "#000063",
            width: "200px",
            height: "250px",
            borderRadius: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            y: cardY,
          }}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          onClick={() => alert("Card 5 Clicked!")}
        >
          Achieve Your Goals
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

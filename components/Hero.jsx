import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div
        className="imageleft"
        style={{
          background: "rgba(2, 0, 36, 0.2)",
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 128, 1) 35%, rgba(255, 20, 147, 1) 70%, rgba(0, 0, 0, 1) 100%)",

          position: "absolute",
          right: "0",
          top: "0",

          width: "60%",
          height: "100vh",
        }}
      ></div>

      <div className={styles.overlayText}>
        <span>SWEAT</span>
        <span>SYNC</span>
      </div>
      <div className={styles.parallaxImage}></div>
      <div className={styles.subtitle}>Track. Sync. Progress.</div>
    </div>
  );
};

export default Hero;

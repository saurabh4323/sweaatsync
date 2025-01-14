"use client";
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import styles from "./Hero.module.css";
import Image from "next/image";

const Heropart2 = () => {
  // Parallax Effect
  const { scrollYProgress } = useScroll(); // scroll position
  const overlayTextY = useTransform(scrollYProgress, [0, 1], [0, -500]); // Moves the overlay text up vertically
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
            {/* <span>SWEAT</span>
            <span>SYNC</span> */}
          </motion.div>
        </div>
      </div>

      <div
        className="parall"
        style={{
          zIndex: "-1",
          height: "80vh",
          width: "100%",
          backgroundColor: "#050505",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {" "}
        <div
          className="niih"
          style={{
            background:
              "linear-gradient(-90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 128, 1) 35%, rgba(255, 20, 147, 1) 70%, rgba(0, 0, 0, 1) 100%)",

            position: "absolute",
            left: "0",
            // top: "0",
            width: "60%",
            height: "80vh",
            // zIndex: 100,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Heropart2;

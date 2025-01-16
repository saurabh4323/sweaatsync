"use client";
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import styles from "./Hero.module.css";
import Image from "next/image";
import WellnessHub from "./Wellnesshub";

const Heropart3 = () => {
  // Parallax Effect
  const { scrollYProgress } = useScroll(); // scroll position
  const overlayTextY = useTransform(scrollYProgress, [0, 1], [0, -500]); // Moves the overlay text up vertically
  const cardY = useTransform(scrollYProgress, [0, 1], [90, -110]); // Moves the cards as you scroll
  const overlayTextYz = useTransform(scrollYProgress, [0, 1], [-20, 50]);
  return (
    <div className="hitbox">
      <div
        className="niih"
        style={{
          background:
            "linear-gradient(-90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 128, 1) 35%, rgba(255, 20, 147, 1) 70%, rgba(0, 0, 0, 1) 100%)",
          position: "absolute",
          right: "0",

          width: "80%",
          height: "100vh",
          zIndex: "-1", // Ensure this is behind the text
        }}
      ></div>
      <WellnessHub></WellnessHub>
    </div>
  );
};

export default Heropart3;

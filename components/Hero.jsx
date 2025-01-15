"use client";
import React, { useState } from "react";
// import { motion } from "motion/react";
import { motion, useTransform, useScroll } from "framer-motion";
import styles from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import "./header.css";
import "./Hero.module.css";
const Hero = () => {
  const cardContent = [
    {
      title: "Track Your Progress",
      content:
        "Tracking your progress is key to understanding how far you've come. With our comprehensive progress charts, you can easily monitor all your tasks, see the completion status, and view detailed timelines of what you've achieved so far. Whether you're working on long-term projects or day-to-day tasks, this feature helps you stay on track and visualize your growth. The ability to set milestones and measure your performance ensures you're always moving forward and accomplishing your goals. Stay organized and motivated with the power of data-driven insights.",
      bgColor: "#000063",
      img: "/sec2.webp",
      href: "/track-progress",
    },
    {
      title: "Export & Analyze",
      content:
        "Gain deeper insights into your data by exporting it in various formats such as CSV and PDF. Whether you're presenting to stakeholders, reviewing your progress for personal growth, or analyzing trends, these export features provide the flexibility to manage your data however you need. You can easily convert your charts and reports into downloadable files for further analysis or documentation. The ability to analyze your data in multiple ways ensures you can make informed decisions and optimize your processes for better outcomes.",
      bgColor: "#4704cf",
      img: "/sec2.webp",
      href: "/export-analyze",
    },
    {
      title: "Visualize Your Journey",
      content:
        "Visualizing your journey allows you to see your efforts and growth in a dynamic, clear way. With interactive graphs, you can track your progress over time, highlight key milestones, and identify areas for improvement. The visual aspect makes complex data more accessible and motivates you to keep pushing toward your goals. By representing your progress graphically, you can better understand your strengths, track improvements, and stay focused on your long-term objectives. These visual tools turn data into inspiration, making your journey both engaging and rewarding.",
      bgColor: "#c71073",
      img: "/sec2.webp",
      href: "/visualize-journey",
    },
    {
      title: "Stay Motivated",
      content:
        "Staying motivated can be challenging, but with our goal-setting features and reward system, you can keep your momentum high. Set daily, weekly, or long-term goals and track your progress toward achieving them. Earn badges and other rewards as you reach milestones, making your success feel tangible and encouraging you to push forward. This system not only provides incentives but also reinforces your determination to keep improving. With a focus on personal growth and achievement, you can maintain your enthusiasm and make progress with each task you complete.",
      bgColor: "#4704cf",
      img: "/sec2.webp",
      href: "/stay-motivated",
    },
    {
      title: "Achieve Your Goals",
      content:
        "Achieving your goals is all about strategy, focus, and the right tools. Our platform helps you break down larger goals into smaller, actionable tasks, making them easier to tackle. With clear deadlines, reminders, and priority settings, you can stay organized and motivated. The process is designed to encourage consistent progress, ensuring that you're always moving toward your targets. Whether it's a personal project or a professional milestone, the tools available will help you plan effectively and achieve your goals with confidence. Success is within reach with the right plan in place.",
      bgColor: "#000063",
      img: "/sec2.webp",
      href: "/achieve-goals",
    },
  ];
  const [showmodel, setshowmodel] = useState(false);
  const [num, setnum] = useState(1);

  const { scrollYProgress } = useScroll(); // scroll position
  const overlayTextY = useTransform(scrollYProgress, [0, 1], [0, 900]);
  const overlayTextz = useTransform(scrollYProgress, [0, 1], [-10, 0]);
  const cardY = useTransform(scrollYProgress, [0, 1], [90, -110]); // Moves the cards as you scroll
  const overlayTextYz = useTransform(scrollYProgress, [0, 1], [-20, 50]);
  return (
    <div className="hitbox" style={{ position: "relative" }}>
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
            // style={{ y: overlayTextY }}
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
          height: "100vh",
          position: "relative",
          width: "100%",
          backgroundColor: "#050505",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
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
            zIndex: "1", // Ensure this is behind the text
          }}
        ></div>
        <motion.div
          className="text"
          style={{ zIndex: "10", textAlign: "center", y: overlayTextz }}
        >
          <h2 style={{ color: "#fff", fontSize: "2.5rem", marginTop: "10%" }}>
            Sync Goals
          </h2>
          <p style={{ color: "#ccc", fontSize: "1.2rem", marginTop: "10px" }}>
            Track progress, stay motivated, analyze data, visualize success,
            achieve goals
          </p>
        </motion.div>
        <div
          className="boxi"
          style={{
            display: "flex",
            width: "88%",
            justifyContent: "space-between",
            zIndex: "1000000",
          }}
        >
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
            onClick={() => {
              setnum(0);
              setshowmodel(true);
            }}
          >
            Track Your Progress
          </motion.div>
          {showmodel && (
            <div className="modal-container">
              <div
                className="modal-content"
                style={{ backgroundColor: cardContent[num].bgColor }}
              >
                <button
                  className="close-button"
                  onClick={() => setshowmodel(false)}
                >
                  &times;
                </button>
                <div className="image-container">
                  <img src={cardContent[num].img} alt="Image" />
                </div>
                <div className="text-container">
                  <h1>{cardContent[num].content}</h1>
                  <Link href={cardContent[num].href}>
                    <button className="visit-button">Visit now</button>
                  </Link>
                </div>
              </div>
            </div>
          )}

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
            onClick={() => {
              setnum(1);
              setshowmodel(true);
            }}
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
            onClick={() => {
              setnum(2);
              setshowmodel(true);
            }}
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
            onClick={() => {
              setnum(3);
              setshowmodel(true);
            }}
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
            onClick={() => {
              setnum(4);
              setshowmodel(true);
            }}
          >
            Achieve Your Goals
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div
        className="imageleft"
        style={{
          position: "absolute",
          right: "0",
          top: "0",
        }}
      >
        <Image src={"/sec.webp"} width={500} height={750} />
      </div>

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

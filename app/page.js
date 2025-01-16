"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Heropart2 from "@/components/Heropart2";
import Heropart3 from "@/components/Heropart3";
import Page from "../app/calories/page";
import SustainableHabits from "@/components/C";
// import Heropart4 from "@/components/heropart4";
export default function Home() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = document.querySelector("#hero")?.offsetHeight;

      if (heroHeight && scrollPosition > heroHeight / 2) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        id="hero"
        className={`${styles.parallax} ${isActive ? styles.active : ""}`}
      >
        <Hero />
      </div>
      <Heropart2 />
      {/* <Heropart4></Heropart4> */}
      <Heropart3 />
      <div className="dii" style={{ marginTop: "30%" }}>
        {" "}
        <SustainableHabits></SustainableHabits>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function StepCounter() {
  const [steps, setSteps] = useState(0);
  let lastAccel = { x: 0, y: 0, z: 0 };

  useEffect(() => {
    const handleMotion = (event) => {
      const { x, y, z } = event.accelerationIncludingGravity;
      if (
        Math.abs(x - lastAccel.x) > 1 ||
        Math.abs(y - lastAccel.y) > 1 ||
        Math.abs(z - lastAccel.z) > 1
      ) {
        setSteps((prev) => prev + 1);
      }
      lastAccel = { x, y, z };
    };

    if (window.DeviceMotionEvent) {
      window.addEventListener("devicemotion", handleMotion);
    } else {
      alert("Device motion not supported.");
    }

    return () => {
      window.removeEventListener("devicemotion", handleMotion);
    };
  }, []);

  return <div>Steps counted: {steps}</div>;
}

import StepCounter from "@/components/Fit";
import Sleep from "@/components/Sleep";
import EnhancedWaterTracker from "@/components/Water";
import Wer from "@/components/Wer";
import React from "react";
import Home from "./Z";
import Bmi from "@/components/Bmi";
import FitnessTracker from "@/components/FitnessTracker";
import FitbitDashboard from "@/components/FitbitDashboard";

export default function page() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        background:
          "linear-gradient(to bottom right, rgba(113, 0, 135, 0.7) 0%, rgba(70, 0, 70, 0.6) 15%, rgb(15, 15, 15) 35%, rgb(15, 15, 15) 65%, rgba(80, 50, 0, 0.5) 85%, rgba(121, 76, 0, 0.7) 100%)",
      }}
    >
      {" "}
      <div className="mio" style={{ height: "10vh", marginTop: "50px" }}>
        <FitbitDashboard></FitbitDashboard>
      </div>
      <div
        className="skk"
        style={{
          display: "flex",
          // flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div className="fi" style={{ marginTop: "30px" }}>
          <EnhancedWaterTracker></EnhancedWaterTracker>
          {/* <Wer></Wer> */}
        </div>
        <div className="sec" style={{ marginTop: "100px" }}>
          <FitnessTracker></FitnessTracker>
          {/* <Wer></Wer> */}
        </div>
      </div>
      <div
        className="biiooiii"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "20px",
        }}
      >
        <div className="nio" style={{ marginTop: "-80px" }}>
          <Sleep></Sleep>
        </div>
        <div className="isg" style={{ marginRight: "100px" }}>
          <Bmi></Bmi>
        </div>
      </div>
      <div className="shh" style={{ width: "70%", margin: "auto" }}>
        <Home></Home>
      </div>
    </div>
  );
}

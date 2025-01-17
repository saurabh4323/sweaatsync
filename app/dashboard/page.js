import Dashboard from "@/components/Dashboard";
import WaterAnalyticsDashboard from "@/components/WaterAnanlyticDashboard";
import React from "react";
import FitnessAdvisor from "../pf/page";
import Calendar from "@/components/Calander";

export default function page() {
  return (
    <div
      style={{
        marginTop: "-20px",
        background:
          "linear-gradient(to bottom right, rgba(113, 0, 135, 0.7) 0%, rgba(70, 0, 70, 0.6) 15%, rgb(15, 15, 15) 35%, rgb(15, 15, 15) 65%, rgba(80, 50, 0, 0.5) 85%, rgba(121, 76, 0, 0.7) 100%)",
      }}
    >
      {/* <WaterAnalyticsDashboard></WaterAnalyticsDashboard> */}

      <Dashboard></Dashboard>
      <FitnessAdvisor></FitnessAdvisor>
      <Calendar></Calendar>
    </div>
  );
}

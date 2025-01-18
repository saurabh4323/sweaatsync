import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Clerk() {
  return (
    <div
      style={{
        // margin: "auto",
        alignItems: "center",
        justifyContent: "center",
        height: "110vh",
        display: "flex",
        width: "100%",
      }}
    >
      <SignIn></SignIn>
    </div>
  );
}

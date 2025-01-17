"use client";
import React, { useState } from "react";

export default function Wer() {
  const [num, setnum] = useState(80);
  const color = ["#728095", "#b673f8", "#7b83f6"];
  const [seu, setseu] = useState(0);

  const toggle = () => {
    setnum(num - 40);
    setseu(seu + 1);
  };

  return (
    <>
      <div
        style={{
          // backgroundColor: "gr
          height: "30vh",
          border: "1px solid #000",
          width: "100%",
          backgroundColor: `${color[seu]}`,
          overflow: "hidden",
          marginTop: "100px",
        }}
      >
        <div
          className="box"
          style={{
            border: "1px solid #fff",
            height: `${num}%`,
            width: "100px",
            backgroundColor: `#292929`,
            overflow: "hidden",
          }}
        ></div>
      </div>
      <button onClick={toggle}>increase</button>
    </>
  );
}

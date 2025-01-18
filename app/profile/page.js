"use client";
import Data from "@/components/Data";
import ProfilePage from "@/components/Profile";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function route() {
  const [edit, setedit] = useState(false);
  useEffect(() => {
    const id = localStorage.getItem("diii");
    if (id) {
      setedit(true);
    }
  });
  const route = useRouter();
  return (
    <div style={{ marginTop: "80px" }}>
      <button
        onClick={() => {
          route.push("/edit");
        }}
      >
        Edit
      </button>
      {!edit ? <ProfilePage /> : <Data></Data>}
    </div>
  );
}

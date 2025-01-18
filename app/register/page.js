"use client";
import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Clerk from "@/components/Clerk";
function Signup() {
  const route = useRouter();
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
    gender: "male",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup((prevSignup) => ({
      ...prevSignup,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/register", signup);
      console.log("Signup successful:", response.data);
      const email = localStorage.setItem("email", signup.email);
      alert("signup successfully");
      window.location.href = "/tracking";
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
    }
  };

  return (
    <div
      className="ooo"
      style={{
        color: "#fff",
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        margin: "auto",
        marginTop: "-50px",
        // marginLeft:"50px"
      }}
    >
      <div
        className="containerdd"
        style={{ color: "#fff", marginLeft: "150px" }}
      >
        <div className="box" style={{ color: "#fff" }}></div>
        <div className="signup" style={{ color: "#fff" }}>
          <h1>Sign Up</h1>
          <form
            className="form"
            style={{
              gap: "15px",
              display: "flex",
              flexDirection: "column",
              color: "#ffffff",
            }}
            onSubmit={handleSubmit}
          >
            <p>Name</p>
            <input
              style={{ color: "#fff" }}
              type="text"
              placeholder="Name"
              name="name"
              value={signup.name}
              onChange={handleChange}
            />
            <label htmlFor="gender">Gender :</label>
            <select name="gender" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <p>Email</p>
            <input
              style={{ color: "#fff" }}
              type="email"
              placeholder="Email"
              name="email"
              value={signup.email}
              onChange={handleChange}
            />
            <p>Password</p>
            <input
              style={{ color: "#fff" }}
              type="password"
              placeholder="Password"
              name="password"
              value={signup.password}
              onChange={handleChange}
            />

            <button className="signup-button" type="submit">
              Sign Up
            </button>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "300",
              }}
            >
              Already have an account?{" "}
              <Link href={"/login"}>
                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: "300",
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Click here
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="db">
        <Clerk></Clerk>
      </div>
    </div>
  );
}

export default Signup;

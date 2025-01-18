import connect from "@/config/connect";
import Register from "@/scheama/signup";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  connect();
  try {
    const { name, email, gender, password } = await req.json();
    const user = await Register.create({ name, email, gender, password });
    // const saveuser = user.save();
    return NextResponse.json({
      message: "User created successfully",
      status: 200,
      user,
    });
  } catch (err) {
    return NextResponse.json({
      message: "Error creating user",
      status: 500,
    });
  }
}

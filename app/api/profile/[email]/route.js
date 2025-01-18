import connect from "@/config/connect";
import Profile from "@/scheama/Profile";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connect();
  const { email } = params;
  try {
    const profileData = await Profile.findOne({ email });

    if (!profileData) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    return NextResponse.json(profileData, { status: 200 });
  } catch (err) {
    console.error("Error fetching profile:", err);
    return NextResponse.json(
      { error: "Failed to fetch profile", details: err.message },
      { status: 500 }
    );
  }
}

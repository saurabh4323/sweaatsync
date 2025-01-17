import { NextResponse } from "next/server";

export async function GET() {
  const CLIENT_ID = process.env.FITBIT_CLIENT_ID;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;
  const scope = "activity heartrate";

  const authUrl =
    `https://www.fitbit.com/oauth2/authorize?response_type=code` +
    `&client_id=${CLIENT_ID}&scope=${scope}&redirect_uri=${REDIRECT_URI}`;

  return NextResponse.redirect(authUrl);
}

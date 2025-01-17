"use client";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Activity, Heart } from "lucide-react";

const FitbitDashboard = () => {
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = () => {
    window.location.href = "/api/auth";
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      fetchData(code);
    }
  }, []);

  const fetchData = async (code) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/callback?code=${code}`);
      if (!response.ok) throw new Error("Failed to fetch data");

      const { accessToken } = await response.json();

      // Fetch Fitbit data using the access token (steps, heart rate)
      const stepsResponse = await fetch(`/api/fetch-data`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const healthData = await stepsResponse.json();
      setHealthData(healthData);
    } catch (err) {
      setError("Failed to fetch health data: " + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fitbit Health Dashboard
          </h1>
          {!healthData && !loading && (
            <button
              onClick={handleLogin}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Connect with Fitbit
            </button>
          )}
        </div>

        {loading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        {healthData && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Steps Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Activity className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold">Daily Steps</h2>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={healthData.steps["activities-steps"]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dateTime" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#2563eb"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Heart Rate Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-red-600 mr-2" />
                <h2 className="text-xl font-semibold">Heart Rate</h2>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={healthData.heartRate["activities-heart"]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dateTime" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value.restingHeartRate"
                      stroke="#dc2626"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FitbitDashboard;

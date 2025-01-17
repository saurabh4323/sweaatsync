import React from "react";
import Link from "next/link";
export default function Dashboard() {
  return (
    <div>
      <div className="biii flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          <Link href="/waterhyd">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white w-[400px]">
              <h3 className="text-lg font-semibold opacity-90">
                Water Hyadration
              </h3>
              <p className="text-3xl font-bold mt-2">Track</p>
              <p className="text-sm mt-2 opacity-80">This week</p>
            </div>
          </Link>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white w-[400px]">
            <h3 className="text-lg font-semibold opacity-90">
              Calories Intake
            </h3>
            <p className="text-3xl font-bold mt-2">Track</p>
            <p className="text-sm mt-2 opacity-80">This week</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white w-[400px]">
            <h3 className="text-lg font-semibold opacity-90">Sleep Sechdule</h3>
            <p className="text-3xl font-bold mt-2">Track</p>
            <p className="text-sm mt-2 opacity-80">This week</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl w-[400px] text-white">
            <h3 className="text-lg font-semibold opacity-90">
              Weight Maintainence
            </h3>
            <p className="text-3xl font-bold mt-2">Track</p>
            <p className="text-sm mt-2 opacity-80">This Week</p>
          </div>
        </div>
      </div>
    </div>
  );
}

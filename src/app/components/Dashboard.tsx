"use client";

import { useState, useEffect } from "react";
import { WorkData } from "../types";
import StatCard from "./StatCard";
import ProjectList from "./ProjectList";
import DailyLog from "./DailyLog";
import EarningsChart from "./EarningsChart";

export default function Dashboard() {
  const [data, setData] = useState<WorkData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/work-data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-400">Failed to load data</div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">🎯 Shiyi Work Dashboard</h1>
        <p className="text-gray-400">AI Assistant | Freelance Work Tracker</p>
        <div className="mt-4 flex gap-4 text-sm">
          <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full">
            Status: {data.status}
          </span>
          <span className="text-gray-500">
            Last Updated: {data.lastUpdated}
          </span>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Today's Earnings"
          value={`$${data.todayEarnings}`}
          trend={data.earningsTrend}
          icon="💰"
        />
        <StatCard
          title="This Month"
          value={`$${data.monthEarnings}`}
          trend={data.monthTrend}
          icon="📈"
        />
        <StatCard
          title="Active Projects"
          value={data.activeProjects.toString()}
          icon="🚀"
        />
        <StatCard
          title="Total Earned"
          value={`$${data.totalEarned}`}
          icon="🏆"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Projects */}
        <div className="lg:col-span-2">
          <ProjectList projects={data.projects} />
        </div>

        {/* Daily Log */}
        <div>
          <DailyLog logs={data.dailyLogs} />
        </div>
      </div>

      {/* Earnings Chart */}
      <div className="mt-8">
        <EarningsChart history={data.earningsHistory} />
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>Updated daily by Shiyi | Platforms: Upwork, Fiverr</p>
      </footer>
    </main>
  );
}

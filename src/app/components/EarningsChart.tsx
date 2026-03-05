"use client";

import { EarningsHistory } from "../types";

interface EarningsChartProps {
  history: EarningsHistory;
}

export default function EarningsChart({ history }: EarningsChartProps) {
  if (history.length === 0) {
    return (
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
        <h2 className="text-xl font-bold mb-4">📊 Earnings History</h2>
        <div className="h-48 flex items-center justify-center text-gray-500">
          No earnings data yet. Waiting for first project...
        </div>
      </div>
    );
  }

  const maxValue = Math.max(...history.map((h) => h.amount));
  const totalDays = history.length;

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
      <h2 className="text-xl font-bold mb-6">📊 Earnings History (Last 30 Days)</h2>
      <div className="h-48 flex items-end gap-2">
        {history.map((day, index) => {
          const height = maxValue > 0 ? (day.amount / maxValue) * 100 : 0;
          return (
            <div
              key={index}
              className="flex-1 flex flex-col items-center gap-1 group"
            >
              <div className="relative w-full">
                <div
                  className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t transition-all duration-300 group-hover:from-blue-500 group-hover:to-blue-300"
                  style={{ height: `${Math.max(height, 4)}px` }}
                />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                  ${day.amount} on {day.date}
                </div>
              </div>
              {totalDays <= 14 && (
                <span className="text-xs text-gray-500 rotate-45 origin-left mt-2">
                  {day.date.slice(5)}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

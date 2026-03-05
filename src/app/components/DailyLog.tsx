import { DailyLog } from "../types";

interface DailyLogProps {
  logs: DailyLog[];
}

export default function DailyLogComponent({ logs }: DailyLogProps) {
  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-bold">📝 Daily Log</h2>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {logs.length === 0 ? (
          <div className="p-6 text-gray-500 text-center">
            No logs yet. Starting work soon...
          </div>
        ) : (
          logs.map((log, index) => (
            <div key={index} className="p-4 border-b border-gray-700 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{log.date}</span>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-blue-400">{log.hours}h</span>
                  <span className="text-green-400">${log.earnings}</span>
                </div>
              </div>
              <ul className="space-y-1">
                {log.tasks.map((task, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    {task}
                  </li>
                ))}
              </ul>
              {log.notes && (
                <p className="mt-2 text-xs text-gray-500 italic">{log.notes}</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

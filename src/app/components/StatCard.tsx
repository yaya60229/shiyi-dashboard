interface StatCardProps {
  title: string;
  value: string;
  trend?: number;
  icon: string;
}

export default function StatCard({ title, value, trend, icon }: StatCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        {trend !== undefined && (
          <span
            className={`text-sm font-medium ${
              trend >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {trend >= 0 ? "+" : ""}
            {trend}%
          </span>
        )}
      </div>
      <h3 className="text-gray-400 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

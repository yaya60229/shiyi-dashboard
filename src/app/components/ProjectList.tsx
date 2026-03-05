import { Project } from "../types";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-900 text-green-300";
      case "completed":
        return "bg-blue-900 text-blue-300";
      case "pending":
        return "bg-yellow-900 text-yellow-300";
      default:
        return "bg-gray-700 text-gray-300";
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "upwork":
        return "🟢";
      case "fiverr":
        return "🟠";
      default:
        return "⚪";
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-bold">🚀 Projects</h2>
      </div>
      <div className="divide-y divide-gray-700">
        {projects.length === 0 ? (
          <div className="p-6 text-gray-500 text-center">
            No active projects yet. Looking for work...
          </div>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="p-6 hover:bg-gray-750 transition">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{project.name}</h3>
                  <p className="text-gray-400 text-sm">
                    {getPlatformIcon(project.platform)} {project.client}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-3">{project.description}</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-green-400 font-medium">
                  ${project.earned} / ${project.budget}
                </span>
                <span className="text-gray-500">
                  Started: {project.startDate}
                </span>
                {project.deadline && (
                  <span className="text-gray-500">
                    Due: {project.deadline}
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

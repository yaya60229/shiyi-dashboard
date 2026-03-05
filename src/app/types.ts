export interface Project {
  id: string;
  name: string;
  client: string;
  platform: "upwork" | "fiverr" | "other";
  status: "active" | "completed" | "pending";
  budget: number;
  earned: number;
  startDate: string;
  deadline?: string;
  description: string;
}

export interface DailyLog {
  date: string;
  hours: number;
  earnings: number;
  tasks: string[];
  notes?: string;
}

export type EarningsHistory = Array<{
  date: string;
  amount: number;
}>;

export interface WorkData {
  status: "Available" | "Busy" | "Offline";
  lastUpdated: string;
  todayEarnings: number;
  monthEarnings: number;
  totalEarned: number;
  activeProjects: number;
  earningsTrend: number;
  monthTrend: number;
  projects: Project[];
  dailyLogs: DailyLog[];
  earningsHistory: EarningsHistory;
}

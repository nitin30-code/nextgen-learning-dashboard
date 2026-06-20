import { LayoutDashboard, BookOpen, Activity, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden sm:block w-40 md:w-64 min-h-screen bg-zinc-900 border-r border-zinc-800">
      <div className="p-6 text-xl font-bold">
        LearnDash
      </div>

      <nav className="px-4 space-y-3">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-800">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-800">
          <BookOpen size={20} />
          <span>Courses</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-800">
          <Activity size={20} />
          <span>Activity</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-800">
          <Settings size={20} />
          <span>Settings</span>
        </div>
      </nav>
    </aside>
  );
}
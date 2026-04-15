import { Outlet, NavLink } from "react-router";
import { FileText, Brain, Layout, DollarSign, Play, Home } from "lucide-react";

export default function Root() {
  const navItems = [
    { to: "/", label: "Overview", icon: Home },
    { to: "/prd", label: "PRD", icon: FileText },
    { to: "/ai-blueprint", label: "AI Blueprint", icon: Brain },
    { to: "/wireframes", label: "Wireframes", icon: Layout },
    { to: "/business-case", label: "Business Case", icon: DollarSign },
    { to: "/demo", label: "Live Demo", icon: Play },
  ];

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-200">
          <h1 className="font-bold text-xl text-slate-900">UnifyAI</h1>
          <p className="text-sm text-slate-600 mt-1">Omnichannel CX Platform</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-50"
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200">
          <div className="text-xs text-slate-500">
            <p>Product Design Exercise</p>
            <p className="mt-1">AI-Powered Customer Engagement</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

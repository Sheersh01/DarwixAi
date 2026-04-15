import { Outlet, NavLink } from "react-router";
import {
  FileText,
  Brain,
  Layout,
  DollarSign,
  Play,
  Home,
  Sparkles,
} from "lucide-react";

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
    <div className="app-shell min-h-screen lg:flex">
      <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:border-r lg:border-white/55 lg:bg-white/55 lg:backdrop-blur-xl">
        <div className="p-7 border-b border-white/60">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold tracking-wide text-cyan-900 shadow-sm shadow-cyan-950/10">
            <Sparkles className="h-3.5 w-3.5 text-cyan-700" />
            AI Experience Suite
          </div>
          <h1 className="mt-4 font-bold text-2xl text-slate-900">UnifyAI</h1>
          <p className="text-sm text-slate-600 mt-1">Omnichannel CX Platform</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-600/25"
                    : "text-slate-700 hover:bg-white/70 hover:shadow-sm"
                }`
              }
            >
              <item.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-white/60">
          <div className="rounded-xl bg-slate-900 px-4 py-3 text-xs text-slate-200">
            <p>Product Design Exercise</p>
            <p className="mt-1 text-slate-400">
              AI-Powered Customer Engagement
            </p>
          </div>
        </div>
      </aside>

      <div className="relative flex-1">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 right-[15%] h-72 w-72 rounded-full bg-cyan-300/35 blur-3xl" />
          <div className="absolute bottom-0 left-[5%] h-72 w-72 rounded-full bg-orange-300/25 blur-3xl" />
        </div>

        <header className="sticky top-0 z-20 border-b border-white/60 bg-white/70 backdrop-blur-xl lg:hidden">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  UnifyAI
                </p>
                <p className="text-sm text-slate-600">
                  Omnichannel CX Platform
                </p>
              </div>
              <Sparkles className="h-5 w-5 text-cyan-600" />
            </div>
            <nav className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                      isActive
                        ? "bg-slate-900 text-white"
                        : "bg-white/90 text-slate-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>

        <main className="relative z-10 h-[calc(100vh-76px)] overflow-auto px-4 pb-8 pt-5 lg:h-screen lg:px-8 lg:pt-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

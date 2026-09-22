import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  LayoutDashboard,
  AlertTriangle,
  ShieldAlert,
  FileText,
  Activity,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    {
      name: "Overview",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Alerts",
      path: "/alerts",
      icon: AlertTriangle,
    },
    {
      name: "Threats",
      path: "/threats",
      icon: ShieldAlert,
    },
    {
      name: "Logs",
      path: "/logs",
      icon: Activity,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: FileText,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  // Logout for now.
  // Later we will connect this to the real authentication system.
  const handleLogout = () => {
    localStorage.removeItem("cloudguard_token");
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r border-slate-800 bg-slate-950 transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex h-20 items-center justify-between border-b border-slate-800 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
              <ShieldCheck className="h-6 w-6 text-cyan-400" />
            </div>

            <div>
              <h1 className="text-lg font-bold">CloudGuard</h1>

              <p className="text-[10px] uppercase tracking-wider text-slate-500">
                AI Security Monitor
              </p>
            </div>
          </div>

          {/* Mobile Close Button */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-slate-400 transition hover:text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 p-4">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            Monitoring
          </p>

          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-400"
                      : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                  }`
                }
              >
                <Icon className="h-5 w-5" />

                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-800 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-slate-900/60 p-3">
            {/* User Profile */}
            <NavLink
              to="/settings"
              onClick={() => setSidebarOpen(false)}
              className="flex min-w-0 flex-1 items-center gap-3"
              title="Account Settings"
            >
              {/* Avatar */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400/10">
                <span className="text-sm font-semibold text-cyan-400">
                  U
                </span>
              </div>

              {/* User Information */}
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">
                  User
                </p>

                <p className="truncate text-xs text-slate-500">
                  Security Admin
                </p>
              </div>
            </NavLink>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="rounded-lg p-1.5 text-slate-500 transition hover:bg-red-400/10 hover:text-red-400"
              title="Logout"
              aria-label="Logout"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Header */}
        <header className="sticky top-0 z-30 h-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
          <div className="flex h-full items-center justify-between px-4 md:px-8">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-slate-400 transition hover:text-white lg:hidden"
              aria-label="Open sidebar"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Desktop Header Title */}
            <div className="hidden lg:block">
              <p className="text-xs text-slate-500">
                CloudGuard Security Center
              </p>
            </div>

            {/* Header Actions */}
            <div className="ml-auto flex items-center gap-5">
              {/* Monitoring Status */}
              <div className="hidden items-center gap-2 text-xs text-emerald-400 sm:flex">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                Monitoring Active
              </div>

              {/* Notification / Alerts */}
              <NavLink
                to="/alerts"
                className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition hover:bg-slate-900 hover:text-white"
                title="Security Alerts"
                aria-label="Security Alerts"
              >
                <AlertTriangle className="h-4 w-4" />

                {/* Notification Indicator */}
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-400" />
              </NavLink>

              {/* Profile Avatar */}
              <NavLink
                to="/settings"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 transition hover:border-cyan-400/50 hover:bg-cyan-400/20"
                title="Account Settings"
                aria-label="Account Settings"
              >
                <span className="text-sm font-semibold text-cyan-400">
                  U
                </span>
              </NavLink>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
import {
  ShieldCheck,
  AlertTriangle,
  ShieldAlert,
  Cloud,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

function Dashboard() {
  const stats = [
    {
      title: "Security Score",
      value: "87%",
      change: "+4.2%",
      positive: true,
      icon: ShieldCheck,
    },
    {
      title: "Active Threats",
      value: "12",
      change: "-3",
      positive: true,
      icon: ShieldAlert,
    },
    {
      title: "Security Alerts",
      value: "28",
      change: "+6",
      positive: false,
      icon: AlertTriangle,
    },
    {
      title: "Cloud Resources",
      value: "146",
      change: "+8",
      positive: true,
      icon: Cloud,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm text-slate-400 mb-1">Welcome back</p>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Security Overview
            </h1>

            <p className="text-slate-400 mt-2">
              Monitor your cloud infrastructure and security posture.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            System Monitoring Active
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>

                <div
                  className={`flex items-center gap-1 text-xs ${
                    stat.positive ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {stat.positive ? (
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  )}

                  {stat.change}
                </div>
              </div>

              <p className="text-sm text-slate-400 mt-5">{stat.title}</p>

              <h2 className="text-3xl font-bold mt-1">{stat.value}</h2>
            </div>
          );
        })}
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Threat Activity */}
        <div className="xl:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold">Threat Activity</h2>
              <p className="text-sm text-slate-400 mt-1">
                Security events detected over the last 7 days
              </p>
            </div>

            <Activity className="w-5 h-5 text-cyan-400" />
          </div>

          <div className="h-64 flex items-center justify-center rounded-xl border border-dashed border-slate-800 bg-slate-950/50">
            <div className="text-center">
              <Activity className="w-10 h-10 text-slate-600 mx-auto mb-3" />

              <p className="text-slate-400">
                Threat activity chart
              </p>

              <p className="text-xs text-slate-600 mt-1">
                Chart will be connected to security data
              </p>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
            </div>

            <div>
              <h2 className="font-semibold">AI Security Insights</h2>
              <p className="text-xs text-slate-400">
                CloudGuard AI
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-4">
              <p className="text-sm text-slate-300">
                Your security posture is currently{" "}
                <span className="text-emerald-400 font-medium">
                  healthy
                </span>
                .
              </p>
            </div>

            <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-4">
              <p className="text-sm text-slate-300">
                3 high-priority resources require security review.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-4">
              <p className="text-sm text-slate-300">
                CloudGuard detected unusual activity in your
                infrastructure.
              </p>
            </div>
          </div>

          <button className="w-full mt-5 py-2.5 rounded-xl border border-slate-700 text-sm text-slate-300 hover:bg-slate-800 transition">
            View AI Analysis
          </button>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-lg font-semibold">
              Recent Security Alerts
            </h2>

            <p className="text-sm text-slate-400 mt-1">
              Latest events detected by CloudGuard
            </p>
          </div>

          <button className="text-sm text-cyan-400 hover:text-cyan-300 transition">
            View all
          </button>
        </div>

        <div className="space-y-3">
          {[
            {
              title: "Suspicious login attempt",
              resource: "Production Server",
              severity: "Critical",
            },
            {
              title: "Unusual network traffic",
              resource: "API Gateway",
              severity: "High",
            },
            {
              title: "Open security group detected",
              resource: "AWS EC2 Instance",
              severity: "Medium",
            },
          ].map((alert) => (
            <div
              key={alert.title}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 rounded-xl border border-slate-800 bg-slate-950/40 p-4"
            >
              <div>
                <p className="text-sm font-medium text-slate-200">
                  {alert.title}
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  {alert.resource}
                </p>
              </div>

              <span
                className={`w-fit px-3 py-1 rounded-full text-xs ${
                  alert.severity === "Critical"
                    ? "bg-red-500/10 text-red-400"
                    : alert.severity === "High"
                    ? "bg-orange-500/10 text-orange-400"
                    : "bg-yellow-500/10 text-yellow-400"
                }`}
              >
                {alert.severity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
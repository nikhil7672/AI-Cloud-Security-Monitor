import {
  AlertTriangle,
  Search,
  Filter,
  Clock,
  Server,
  Globe,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

function Alerts() {
  const [severityFilter, setSeverityFilter] = useState("All");

  const alerts = [
    {
      id: 1,
      title: "Suspicious login attempt",
      description:
        "Multiple failed authentication attempts detected from an unfamiliar IP address.",
      resource: "Production Server",
      source: "Authentication Service",
      severity: "Critical",
      time: "2 minutes ago",
      status: "Open",
      icon: ShieldAlert,
    },
    {
      id: 2,
      title: "Unusual network traffic",
      description:
        "Unexpected outbound traffic pattern detected from the API gateway.",
      resource: "API Gateway",
      source: "Network Monitor",
      severity: "High",
      time: "15 minutes ago",
      status: "Investigating",
      icon: Globe,
    },
    {
      id: 3,
      title: "Open security group detected",
      description:
        "A cloud security group allows unrestricted inbound access on a public port.",
      resource: "EC2 Instance",
      source: "Cloud Configuration",
      severity: "Medium",
      time: "32 minutes ago",
      status: "Open",
      icon: Server,
    },
    {
      id: 4,
      title: "Unencrypted storage detected",
      description:
        "A storage resource was detected without server-side encryption enabled.",
      resource: "Cloud Storage",
      source: "Configuration Scanner",
      severity: "High",
      time: "1 hour ago",
      status: "Open",
      icon: Server,
    },
    {
      id: 5,
      title: "Security policy updated",
      description:
        "A security policy was modified in the cloud environment.",
      resource: "IAM Policy",
      source: "Audit Monitor",
      severity: "Low",
      time: "2 hours ago",
      status: "Resolved",
      icon: CheckCircle2,
    },
  ];

  const filteredAlerts =
    severityFilter === "All"
      ? alerts
      : alerts.filter((alert) => alert.severity === severityFilter);

  const severityStyles = {
    Critical: "bg-red-500/10 text-red-400 border-red-500/20",
    High: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    Medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Low: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  };

  const statusStyles = {
    Open: "bg-red-500/10 text-red-400",
    Investigating: "bg-yellow-500/10 text-yellow-400",
    Resolved: "bg-emerald-500/10 text-emerald-400",
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
          <div>
            <p className="text-sm text-slate-500 mb-2">
              Security Monitoring
            </p>

            <h1 className="text-3xl font-bold tracking-tight">
              Security Alerts
            </h1>

            <p className="text-slate-400 mt-2">
              Review and investigate security events detected by CloudGuard.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <AlertTriangle className="w-4 h-4 text-cyan-400" />
            {filteredAlerts.length} alerts
          </div>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <p className="text-sm text-slate-400">Total Alerts</p>
          <p className="text-2xl font-bold mt-2">{alerts.length}</p>
        </div>

        <div className="rounded-2xl border border-red-500/10 bg-slate-900/60 p-5">
          <p className="text-sm text-slate-400">Critical</p>
          <p className="text-2xl font-bold text-red-400 mt-2">
            {alerts.filter((a) => a.severity === "Critical").length}
          </p>
        </div>

        <div className="rounded-2xl border border-orange-500/10 bg-slate-900/60 p-5">
          <p className="text-sm text-slate-400">High</p>
          <p className="text-2xl font-bold text-orange-400 mt-2">
            {alerts.filter((a) => a.severity === "High").length}
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-500/10 bg-slate-900/60 p-5">
          <p className="text-sm text-slate-400">Resolved</p>
          <p className="text-2xl font-bold text-emerald-400 mt-2">
            {alerts.filter((a) => a.status === "Resolved").length}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 mb-5">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />

            <input
              type="text"
              placeholder="Search alerts..."
              className="w-full h-10 rounded-xl border border-slate-800 bg-slate-950 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-400/40"
            />
          </div>

          {/* Severity filter */}
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="w-4 h-4 text-slate-500 shrink-0" />

            {["All", "Critical", "High", "Medium", "Low"].map(
              (severity) => (
                <button
                  key={severity}
                  onClick={() => setSeverityFilter(severity)}
                  className={`px-3 py-2 rounded-lg text-xs whitespace-nowrap transition ${
                    severityFilter === severity
                      ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                      : "text-slate-400 border border-transparent hover:bg-slate-800"
                  }`}
                >
                  {severity}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="space-y-3">
        {filteredAlerts.map((alert) => {
          const Icon = alert.icon;

          return (
            <div
              key={alert.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition"
            >
              <div className="flex flex-col xl:flex-row xl:items-center gap-5">
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>

                {/* Main info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-semibold text-slate-100">
                      {alert.title}
                    </h2>

                    <span
                      className={`px-2.5 py-1 rounded-full border text-[11px] ${severityStyles[alert.severity]}`}
                    >
                      {alert.severity}
                    </span>
                  </div>

                  <p className="text-sm text-slate-400 mt-2 max-w-3xl">
                    {alert.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5" />
                      {alert.resource}
                    </span>

                    <span>{alert.source}</span>

                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {alert.time}
                    </span>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-3 xl:flex-col xl:items-end">
                  <span
                    className={`px-3 py-1.5 rounded-lg text-xs ${
                      statusStyles[alert.status]
                    }`}
                  >
                    {alert.status}
                  </span>

                  <button className="text-xs text-cyan-400 hover:text-cyan-300 transition">
                    View details →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Alerts;
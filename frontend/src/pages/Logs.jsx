import {
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Search,
  ShieldAlert,
} from "lucide-react";
import { useState } from "react";

const logs = [
  {
    id: 1,
    event: "Failed login attempt",
    source: "Authentication Service",
    resource: "Production Server",
    severity: "Warning",
    status: "Blocked",
    timestamp: "2 minutes ago",
    ip: "192.168.1.45",
  },
  {
    id: 2,
    event: "Suspicious API request detected",
    source: "API Gateway",
    resource: "Application API",
    severity: "Critical",
    status: "Investigating",
    timestamp: "8 minutes ago",
    ip: "185.22.14.91",
  },
  {
    id: 3,
    event: "Security group modified",
    source: "Cloud Configuration",
    resource: "EC2 Instance",
    severity: "Warning",
    status: "Reviewed",
    timestamp: "21 minutes ago",
    ip: "10.0.0.24",
  },
  {
    id: 4,
    event: "Successful user login",
    source: "Authentication Service",
    resource: "Admin Portal",
    severity: "Info",
    status: "Allowed",
    timestamp: "35 minutes ago",
    ip: "10.0.0.15",
  },
  {
    id: 5,
    event: "Unusual outbound traffic",
    source: "Network Monitor",
    resource: "Production Server",
    severity: "Critical",
    status: "Investigating",
    timestamp: "48 minutes ago",
    ip: "172.16.0.18",
  },
  {
    id: 6,
    event: "IAM policy updated",
    source: "Identity Service",
    resource: "IAM Role",
    severity: "Info",
    status: "Allowed",
    timestamp: "1 hour ago",
    ip: "10.0.0.31",
  },
  {
    id: 7,
    event: "Storage bucket accessed",
    source: "Cloud Storage",
    resource: "User Data Bucket",
    severity: "Warning",
    status: "Reviewed",
    timestamp: "2 hours ago",
    ip: "172.20.0.12",
  },
];

const severityStyles = {
  Critical: "bg-red-500/10 text-red-400",
  Warning: "bg-yellow-500/10 text-yellow-400",
  Info: "bg-blue-500/10 text-blue-400",
};

const statusStyles = {
  Blocked: "bg-red-500/10 text-red-400",
  Investigating: "bg-orange-500/10 text-orange-400",
  Reviewed: "bg-emerald-500/10 text-emerald-400",
  Allowed: "bg-blue-500/10 text-blue-400",
};

function Logs() {
  const [search, setSearch] = useState("");
  const [severity, setSeverity] = useState("All");

  const filteredLogs = logs.filter((log) => {
    const matchesSearch =
      log.event.toLowerCase().includes(search.toLowerCase()) ||
      log.source.toLowerCase().includes(search.toLowerCase()) ||
      log.resource.toLowerCase().includes(search.toLowerCase()) ||
      log.ip.toLowerCase().includes(search.toLowerCase());

    const matchesSeverity =
      severity === "All" || log.severity === severity;

    return matchesSearch && matchesSeverity;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white">
          Security Logs
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Monitor security events and activity across your cloud
          infrastructure.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Total Events</p>
            <Activity className="h-5 w-5 text-cyan-400" />
          </div>

          <p className="mt-3 text-3xl font-semibold text-white">
            2,847
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Events recorded today
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Critical Events</p>
            <ShieldAlert className="h-5 w-5 text-red-400" />
          </div>

          <p className="mt-3 text-3xl font-semibold text-white">
            18
          </p>

          <p className="mt-1 text-xs text-red-400">
            Requires investigation
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Blocked</p>
            <AlertTriangle className="h-5 w-5 text-orange-400" />
          </div>

          <p className="mt-3 text-3xl font-semibold text-white">
            126
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Threats automatically blocked
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">System Status</p>
            <CheckCircle className="h-5 w-5 text-emerald-400" />
          </div>

          <p className="mt-3 text-3xl font-semibold text-white">
            Active
          </p>

          <p className="mt-1 text-xs text-emerald-400">
            Monitoring in real time
          </p>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

          <input
            type="text"
            placeholder="Search security logs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-slate-800 bg-slate-900 py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-500/50"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {["All", "Critical", "Warning", "Info"].map((item) => (
            <button
              key={item}
              onClick={() => setSeverity(item)}
              className={`rounded-lg border px-4 py-2 text-sm transition ${
                severity === item
                  ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-400"
                  : "border-slate-800 bg-slate-900 text-slate-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Logs Table */}
      <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60">
        {/* Desktop Table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-left">
            <thead className="border-b border-slate-800 bg-slate-900">
              <tr>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Event
                </th>

                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Resource
                </th>

                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Severity
                </th>

                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Status
                </th>

                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Source IP
                </th>

                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Time
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800">
              {filteredLogs.map((log) => (
                <tr
                  key={log.id}
                  className="transition hover:bg-slate-800/30"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-white">
                        {log.event}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {log.source}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-300">
                    {log.resource}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        severityStyles[log.severity]
                      }`}
                    >
                      {log.severity}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        statusStyles[log.status]
                      }`}
                    >
                      {log.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 font-mono text-xs text-slate-400">
                    {log.ip}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5" />
                      {log.timestamp}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="divide-y divide-slate-800 md:hidden">
          {filteredLogs.map((log) => (
            <div key={log.id} className="space-y-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-white">
                    {log.event}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {log.source}
                  </p>
                </div>

                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-xs ${
                    severityStyles[log.severity]
                  }`}
                >
                  {log.severity}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="text-slate-600">Resource</p>
                  <p className="mt-1 text-slate-400">
                    {log.resource}
                  </p>
                </div>

                <div>
                  <p className="text-slate-600">Status</p>
                  <p
                    className={`mt-1 ${
                      statusStyles[log.status]
                        .split(" ")
                        .find((item) => item.startsWith("text-"))
                    }`}
                  >
                    {log.status}
                  </p>
                </div>

                <div>
                  <p className="text-slate-600">Source IP</p>
                  <p className="mt-1 font-mono text-slate-400">
                    {log.ip}
                  </p>
                </div>

                <div>
                  <p className="text-slate-600">Time</p>
                  <p className="mt-1 text-slate-400">
                    {log.timestamp}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredLogs.length === 0 && (
          <div className="p-10 text-center">
            <Activity className="mx-auto h-10 w-10 text-slate-600" />

            <p className="mt-3 text-sm text-slate-400">
              No security logs found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Logs;
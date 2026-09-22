import {
  ShieldAlert,
  Search,
  Filter,
  Clock,
  Server,
  Globe,
  LockKeyhole,
  Activity,
  Brain,
  X,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

function Threats() {
  const [severityFilter, setSeverityFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedThreat, setSelectedThreat] = useState(null);

  const threats = [
    {
      id: 1,
      title: "Brute Force Attack",
      type: "Authentication Attack",
      description:
        "Repeated failed login attempts detected against a production service.",
      resource: "Production Server",
      source: "Authentication Monitor",
      severity: "Critical",
      status: "Active",
      detected: "2 minutes ago",
      icon: LockKeyhole,
      analysis:
        "Multiple authentication failures were detected in a short period. This behavior may indicate an automated credential attack against the production service.",
      recommendation:
        "Review authentication logs, temporarily restrict suspicious sources, enable stronger authentication controls, and verify whether any account was successfully accessed.",
    },
    {
      id: 2,
      title: "Unusual Network Activity",
      type: "Network Threat",
      description:
        "Abnormal outbound traffic pattern detected from a cloud gateway.",
      resource: "API Gateway",
      source: "Network Monitor",
      severity: "High",
      status: "Investigating",
      detected: "15 minutes ago",
      icon: Globe,
      analysis:
        "The observed outbound traffic differs from the expected behavior of this gateway. Further investigation is recommended to determine whether the traffic is legitimate.",
      recommendation:
        "Review destination addresses, traffic volume, recent deployment changes, and network flow records.",
    },
    {
      id: 3,
      title: "Publicly Exposed Port",
      type: "Configuration Threat",
      description:
        "A cloud resource contains a publicly accessible service port.",
      resource: "EC2 Instance",
      source: "Cloud Scanner",
      severity: "High",
      status: "Active",
      detected: "32 minutes ago",
      icon: Server,
      analysis:
        "A service port appears to be accessible from the public network. Public exposure can increase the attack surface of the cloud resource.",
      recommendation:
        "Review security-group rules and restrict the exposed port to trusted networks or required services.",
    },
    {
      id: 4,
      title: "Privilege Escalation Risk",
      type: "Identity Threat",
      description:
        "An identity configuration may provide broader permissions than required.",
      resource: "IAM Role",
      source: "Identity Monitor",
      severity: "Medium",
      status: "Investigating",
      detected: "1 hour ago",
      icon: ShieldAlert,
      analysis:
        "The detected IAM configuration may grant permissions beyond the resource's expected requirements. This creates a potential privilege-management risk.",
      recommendation:
        "Review the role's attached policies and apply least-privilege permissions where possible.",
    },
    {
      id: 5,
      title: "Suspicious API Request",
      type: "Application Threat",
      description:
        "A request pattern differs significantly from normal application activity.",
      resource: "Application API",
      source: "Behavior Monitor",
      severity: "Low",
      status: "Monitoring",
      detected: "2 hours ago",
      icon: Activity,
      analysis:
        "The request pattern differs from the application's normal behavioral baseline. At this stage, additional context is required before treating it as a confirmed threat.",
      recommendation:
        "Continue monitoring the API activity and compare requests against authenticated users, source addresses, and historical application behavior.",
    },
  ];

  const severityStyles = {
    Critical: "bg-red-500/10 text-red-400 border-red-500/20",
    High: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    Medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Low: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  };

  const statusStyles = {
    Active: "bg-red-500/10 text-red-400",
    Investigating: "bg-yellow-500/10 text-yellow-400",
    Monitoring: "bg-cyan-500/10 text-cyan-400",
  };

  const filteredThreats = threats.filter((threat) => {
    const matchesSeverity =
      severityFilter === "All" || threat.severity === severityFilter;

    const query = searchQuery.toLowerCase().trim();

    const matchesSearch =
      query === "" ||
      threat.title.toLowerCase().includes(query) ||
      threat.type.toLowerCase().includes(query) ||
      threat.description.toLowerCase().includes(query) ||
      threat.resource.toLowerCase().includes(query) ||
      threat.source.toLowerCase().includes(query) ||
      threat.status.toLowerCase().includes(query);

    return matchesSeverity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 p-6 text-white md:p-8">
      {/* Header */}
      <div className="mb-8">
        <p className="mb-2 text-sm text-slate-500">
          Security Intelligence
        </p>

        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Threat Detection
            </h1>

            <p className="mt-2 text-slate-400">
              Identify, monitor, and investigate threats across your cloud
              infrastructure.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            AI Detection Active
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <p className="text-sm text-slate-400">Detected Threats</p>

          <p className="mt-2 text-2xl font-bold">
            {threats.length}
          </p>
        </div>

        <div className="rounded-2xl border border-red-500/10 bg-slate-900/60 p-5">
          <p className="text-sm text-slate-400">Critical</p>

          <p className="mt-2 text-2xl font-bold text-red-400">
            {threats.filter((t) => t.severity === "Critical").length}
          </p>
        </div>

        <div className="rounded-2xl border border-orange-500/10 bg-slate-900/60 p-5">
          <p className="text-sm text-slate-400">High Risk</p>

          <p className="mt-2 text-2xl font-bold text-orange-400">
            {threats.filter((t) => t.severity === "High").length}
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/10 bg-slate-900/60 p-5">
          <p className="text-sm text-slate-400">
            Under Investigation
          </p>

          <p className="mt-2 text-2xl font-bold text-cyan-400">
            {threats.filter((t) => t.status === "Investigating").length}
          </p>
        </div>
      </div>

      {/* AI Banner */}
      <div className="mb-6 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
            <Brain className="h-5 w-5 text-cyan-400" />
          </div>

          <div>
            <h2 className="font-semibold">
              CloudGuard AI Detection
            </h2>

            <p className="mt-1 text-sm leading-relaxed text-slate-400">
              AI-based behavioral analysis continuously evaluates cloud
              activity and identifies patterns that may indicate security
              threats.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

            <input
              type="text"
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
              placeholder="Search threats..."
              className="h-10 w-full rounded-xl border border-slate-800 bg-slate-950 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/40"
            />
          </div>

          {/* Severity Filters */}
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="h-4 w-4 shrink-0 text-slate-500" />

            {["All", "Critical", "High", "Medium", "Low"].map(
              (severity) => (
                <button
                  key={severity}
                  onClick={() => setSeverityFilter(severity)}
                  className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs transition ${
                    severityFilter === severity
                      ? "border border-cyan-400/20 bg-cyan-400/10 text-cyan-400"
                      : "border border-transparent text-slate-400 hover:bg-slate-800"
                  }`}
                >
                  {severity}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Result Count */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="text-slate-300">
            {filteredThreats.length}
          </span>{" "}
          of{" "}
          <span className="text-slate-300">
            {threats.length}
          </span>{" "}
          threats
        </p>
      </div>

      {/* Threat List */}
      <div className="space-y-3">
        {filteredThreats.length > 0 ? (
          filteredThreats.map((threat) => {
            const Icon = threat.icon;

            return (
              <div
                key={threat.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-slate-700"
              >
                <div className="flex flex-col gap-5 xl:flex-row xl:items-center">
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-800">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>

                  {/* Threat Information */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-semibold text-slate-100">
                        {threat.title}
                      </h2>

                      <span
                        className={`rounded-full border px-2.5 py-1 text-[11px] ${
                          severityStyles[threat.severity]
                        }`}
                      >
                        {threat.severity}
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-cyan-400">
                      {threat.type}
                    </p>

                    <p className="mt-2 max-w-3xl text-sm text-slate-400">
                      {threat.description}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Server className="h-3.5 w-3.5" />
                        {threat.resource}
                      </span>

                      <span>{threat.source}</span>

                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {threat.detected}
                      </span>
                    </div>
                  </div>

                  {/* Status / Action */}
                  <div className="flex items-center gap-3 xl:flex-col xl:items-end">
                    <span
                      className={`rounded-lg px-3 py-1.5 text-xs ${
                        statusStyles[threat.status]
                      }`}
                    >
                      {threat.status}
                    </span>

                    <button
                      onClick={() => setSelectedThreat(threat)}
                      className="text-xs text-cyan-400 transition hover:text-cyan-300"
                    >
                      Analyze threat →
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-12 text-center">
            <Search className="mx-auto h-8 w-8 text-slate-600" />

            <h3 className="mt-4 font-semibold text-slate-200">
              No threats found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or severity filter.
            </p>

            <button
              onClick={() => {
                setSearchQuery("");
                setSeverityFilter("All");
              }}
              className="mt-5 rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-400 transition hover:bg-cyan-400/20"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Analysis Modal */}
      {selectedThreat && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedThreat(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Sparkles className="h-5 w-5 text-cyan-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-cyan-400">
                    CloudGuard AI Analysis
                  </p>

                  <h2 className="mt-1 text-xl font-bold">
                    {selectedThreat.title}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setSelectedThreat(null)}
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-900 hover:text-white"
                aria-label="Close analysis"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-5 p-6">
              {/* Threat Status */}
              <div className="flex flex-wrap gap-2">
                <span
                  className={`rounded-full border px-3 py-1 text-xs ${
                    severityStyles[selectedThreat.severity]
                  }`}
                >
                  {selectedThreat.severity} Severity
                </span>

                <span
                  className={`rounded-lg px-3 py-1 text-xs ${
                    statusStyles[selectedThreat.status]
                  }`}
                >
                  {selectedThreat.status}
                </span>
              </div>

              {/* AI Analysis */}
              <div className="rounded-xl border border-cyan-400/10 bg-cyan-400/[0.03] p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Brain className="h-4 w-4 text-cyan-400" />

                  <h3 className="font-semibold">
                    AI Assessment
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-slate-400">
                  {selectedThreat.analysis}
                </p>
              </div>

              {/* Threat Details */}
              <div>
                <h3 className="mb-3 font-semibold">
                  Threat Details
                </h3>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                    <p className="text-xs text-slate-500">
                      Threat Type
                    </p>

                    <p className="mt-1 text-sm text-slate-200">
                      {selectedThreat.type}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                    <p className="text-xs text-slate-500">
                      Resource
                    </p>

                    <p className="mt-1 text-sm text-slate-200">
                      {selectedThreat.resource}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                    <p className="text-xs text-slate-500">
                      Detection Source
                    </p>

                    <p className="mt-1 text-sm text-slate-200">
                      {selectedThreat.source}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                    <p className="text-xs text-slate-500">
                      Detected
                    </p>

                    <p className="mt-1 text-sm text-slate-200">
                      {selectedThreat.detected}
                    </p>
                  </div>
                </div>
              </div>

              {/* Recommendation */}
              <div className="rounded-xl border border-yellow-400/10 bg-yellow-400/[0.03] p-5">
                <div className="mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-400" />

                  <h3 className="font-semibold">
                    Recommended Action
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-slate-400">
                  {selectedThreat.recommendation}
                </p>
              </div>

              {/* Current Status */}
              <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />

                <div>
                  <p className="text-sm font-medium">
                    Threat recorded successfully
                  </p>

                  <p className="text-xs text-slate-500">
                    CloudGuard is continuing to monitor this event.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end border-t border-slate-800 p-5">
              <button
                onClick={() => setSelectedThreat(null)}
                className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Threats;
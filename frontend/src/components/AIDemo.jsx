import {
  BrainCircuit,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

function AIDemo() {
  return (
    <section
      id="ai-analysis"
      className="border-t border-white/10 bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Intelligent Threat Analysis
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Security Events{" "}
            <span className="text-blue-400">Analyzed by AI</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400">
            CloudGuard combines rule-based detection with AI-powered analysis
            to turn suspicious activity into understandable security insights.
          </p>
        </div>

        {/* AI Analysis Card */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-blue-950/20">
          {/* Top bar */}
          <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-400/20">
                <BrainCircuit className="h-5 w-5 text-blue-400" />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  AI Threat Analysis
                </h3>
                <p className="text-xs text-slate-500">
                  Automated security intelligence
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Analysis Complete
            </div>
          </div>

          {/* Content */}
          <div className="grid gap-8 p-6 lg:grid-cols-2 lg:p-8">
            {/* Security Event */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Suspicious Security Event
              </p>

              <div className="rounded-2xl border border-white/10 bg-slate-950 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/10">
                    <ShieldAlert className="h-5 w-5 text-red-400" />
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-semibold text-white">
                      Multiple Failed Login Attempts
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      12 failed authentication attempts detected from the same
                      source within a short period.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-white/5 bg-white/2 p-3">
                    <p className="text-xs text-slate-500">Source</p>
                    <p className="mt-1 text-sm font-medium text-slate-200">
                      192.168.1.24
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/5 bg-white/2 p-3">
                    <p className="text-xs text-slate-500">Attempts</p>
                    <p className="mt-1 text-sm font-medium text-slate-200">
                      12
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Result */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                AI Security Assessment
              </p>

              <div className="rounded-2xl border border-blue-400/20 bg-blue-500/4 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-400">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    HIGH
                  </div>

                  <span className="text-sm font-semibold text-white">
                    Brute Force Attack
                  </span>
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">AI Confidence</span>
                    <span className="font-semibold text-blue-400">
                      94%
                    </span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-[94%] rounded-full bg-blue-500" />
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    AI Explanation
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    The repeated authentication failures indicate a likely
                    brute force attempt targeting a user account.
                  </p>
                </div>

                <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-400/10 bg-emerald-400/3 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Recommended Action
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Temporarily restrict the source and review the affected
                      account for unauthorized access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom flow */}
          <div className="border-t border-white/10 px-6 py-5">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-400">
              <span>Security Event</span>

              <ArrowRight className="h-4 w-4 text-blue-400" />

              <span>Rule Detection</span>

              <ArrowRight className="h-4 w-4 text-blue-400" />

              <span className="font-medium text-blue-400">
                AI Analysis
              </span>

              <ArrowRight className="h-4 w-4 text-blue-400" />

              <span>Security Alert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIDemo;
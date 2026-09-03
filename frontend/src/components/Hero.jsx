import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  ShieldCheck,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-28">
        
        {/* Left */}
        <div>
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/5 px-4 py-2 text-sm text-blue-300">
            <BrainCircuit className="h-4 w-4" />
            AI-POWERED CLOUD SECURITY
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Monitor. Detect.
            <br />
            Protect{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Your Cloud.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            CloudGuard uses AI to monitor your cloud environment, detect
            suspicious activity, analyze threats, and provide actionable
            security insights.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold transition hover:bg-blue-500">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-blue-400/40 hover:bg-white/5">
              Explore Features
            </button>
          </div>

          {/* Highlights */}
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-slate-300">
                Real-time Protection
              </span>
            </div>

            <div className="flex items-center gap-3">
              <BrainCircuit className="h-5 w-5 text-purple-400" />
              <span className="text-sm text-slate-300">
                AI Analysis
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Cloud className="h-5 w-5 text-cyan-400" />
              <span className="text-sm text-slate-300">
                Cloud Security
              </span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <DashboardPreview />
        </div>

      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-blue-950/20 backdrop-blur-xl">
      
      {/* Fake dashboard header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-blue-400" />
          <span className="font-semibold">Security Dashboard</span>
        </div>

        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">
          ● Operational
        </span>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Metric title="Total Events" value="24,532" />
        <Metric title="Threats" value="162" />
        <Metric title="Critical" value="8" />
        <Metric title="Active Alerts" value="23" />
      </div>

      {/* Chart placeholder */}
      <div className="mt-4 rounded-xl border border-white/10 bg-slate-950/60 p-4">
        <div className="mb-4 flex justify-between">
          <span className="text-sm font-medium">Threat Activity</span>
          <span className="text-xs text-slate-500">Last 7 Days</span>
        </div>

        <div className="flex h-40 items-end gap-2">
          {[35, 55, 42, 70, 48, 82, 65, 90, 58, 76, 68, 95].map(
            (height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t bg-blue-500/70 transition hover:bg-blue-400"
                style={{ height: `${height}%` }}
              />
            )
          )}
        </div>
      </div>

      {/* Alerts */}
      <div className="mt-4 rounded-xl border border-white/10 bg-slate-950/60 p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-medium">Recent Alerts</span>
          <span className="text-xs text-blue-400">View all</span>
        </div>

        <Alert
          name="Brute Force Attack"
          severity="High"
          severityClass="text-red-400"
        />

        <Alert
          name="Suspicious Login"
          severity="Medium"
          severityClass="text-yellow-400"
        />

        <Alert
          name="Port Scan Detected"
          severity="Medium"
          severityClass="text-yellow-400"
        />
      </div>
    </div>
  );
}

function Metric({ title, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3">
      <p className="text-xs text-slate-500">{title}</p>
      <p className="mt-1 text-lg font-bold">{value}</p>
    </div>
  );
}

function Alert({ name, severity, severityClass }) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 py-3 last:border-0">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-red-500" />
        <span className="text-sm text-slate-300">{name}</span>
      </div>

      <span className={`text-xs font-medium ${severityClass}`}>
        {severity}
      </span>
    </div>
  );
}

export default Hero;
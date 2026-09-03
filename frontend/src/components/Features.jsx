import {
  ShieldAlert,
  BrainCircuit,
  BellRing,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: ShieldAlert,
    title: "Threat Detection",
    description:
      "Detect suspicious cloud activity using intelligent security rules and behavioral patterns.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Analysis",
    description:
      "Use AI to analyze suspicious events, classify threats, and explain what happened.",
  },
  {
    icon: BellRing,
    title: "Real-Time Alerts",
    description:
      "Get immediate alerts when potentially dangerous activity is detected in your environment.",
  },
  {
    icon: BarChart3,
    title: "Security Analytics",
    description:
      "Visualize security events, threat trends, severity levels, and overall cloud activity.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="border-t border-white/10 bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Powerful Security
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything You Need to{" "}
            <span className="text-blue-400">Stay Secure</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400">
            CloudGuard combines intelligent threat detection, AI analysis,
            real-time alerts, and security analytics in one platform.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/3p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/5"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-400/20">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
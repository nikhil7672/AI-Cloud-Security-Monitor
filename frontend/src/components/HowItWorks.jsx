import {
  Database,
  ShieldCheck,
  BrainCircuit,
  LockKeyhole,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Collect",
    description:
      "Collect security events and activity logs from your cloud or simulated cloud environment.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Detect",
    description:
      "Analyze incoming events using security rules to identify suspicious activity and potential threats.",
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "Analyze",
    description:
      "AI analyzes suspicious events, identifies the threat type, determines severity, and explains the risk.",
  },
  {
    number: "04",
    icon: LockKeyhole,
    title: "Protect",
    description:
      "Receive actionable recommendations and security alerts so you can respond to threats quickly.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-white/10 bg-slate-900/40 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Simple Security Workflow
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How <span className="text-blue-400">CloudGuard</span> Works
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400">
            From raw cloud activity to intelligent security insights, our
            system continuously monitors and analyzes your environment.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          {/* Connecting line */}
          <div className="absolute left-[12%] right-[12%] top-8 hidden h-px  bg-linear-to-r from-blue-500/10 via-blue-400/40 to-blue-500/10 md:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative text-center"
              >
                {/* Icon */}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-slate-950 shadow-lg shadow-blue-500/5">
                  <Icon className="h-7 w-7 text-blue-400" />
                </div>

                {/* Number */}
                <span className="mt-5 block text-xs font-bold tracking-widest text-blue-400/70">
                  STEP {step.number}
                </span>

                <h3 className="mt-2 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
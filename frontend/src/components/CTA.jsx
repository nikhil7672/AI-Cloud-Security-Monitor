import { ArrowRight, ShieldCheck } from "lucide-react";

function CTA() {
  return (
    <section
      id="about"
      className="border-t border-white/10 bg-slate-900/40 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-blue-500/5px-6 py-16 text-center sm:px-12">
          <div className="relative z-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-blue-400/20">
              <ShieldCheck className="h-7 w-7 text-blue-400" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Start Monitoring
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Monitor Your Cloud?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
              Detect suspicious activity, understand security threats with AI,
              and keep your cloud environment protected.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

export default CTA;
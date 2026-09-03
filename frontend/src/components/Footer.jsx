import { Shield } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-400/20">
              <Shield className="h-5 w-5 text-blue-400" />
            </div>

            <div>
              <h3 className="font-bold text-white">
                Cloud<span className="text-blue-400">Guard</span>
              </h3>

              <p className="text-xs text-slate-500">
                AI Cloud Security Monitor
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <a
              href="#features"
              className="transition hover:text-white"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="transition hover:text-white"
            >
              How It Works
            </a>

            <a
              href="#ai-analysis"
              className="transition hover:text-white"
            >
              AI Analysis
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} CloudGuard. AI-Based Cloud Security
          Monitoring Dashboard.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
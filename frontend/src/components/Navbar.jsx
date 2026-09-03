import { Shield, ArrowRight } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-400/30">
            <Shield className="h-6 w-6 text-blue-400" />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight">
              Cloud<span className="text-blue-400">Guard</span>
            </h1>

            <p className="text-xs text-slate-400">
              AI Cloud Security Monitor
            </p>
          </div>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            How It Works
          </a>

          <a
            href="#about"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            About
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="hidden rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-blue-400/50 hover:text-white sm:block"
          >
            Login
          </a>

          <a
            href="/register"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Shield,
  ArrowLeft,
  UserPlus,
} from "lucide-react";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-400/30">
              <Shield className="h-6 w-6 text-blue-400" />
            </div>

            <div>
              <h1 className="text-lg font-bold">
                Cloud<span className="text-blue-400">Guard</span>
              </h1>

              <p className="text-xs text-slate-400">
                AI Cloud Security Monitor
              </p>
            </div>
          </Link>
        </div>
      </header>

      {/* Register */}
      <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">

          {/* Back */}
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          {/* Card */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 shadow-2xl shadow-blue-950/20">

            {/* Heading */}
            <div className="mb-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-400/20">
                <UserPlus className="h-6 w-6 text-blue-400" />
              </div>

              <h2 className="text-2xl font-bold">
                Create your account
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Join CloudGuard and start monitoring your cloud security.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5">

              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  autoComplete="name"
                  className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 pr-12 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((previous) => !previous)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-300"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 pr-12 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        (previous) => !previous
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-300"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 text-sm text-slate-400">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-white/20 bg-slate-950 accent-blue-500"
                />

                <span>
                  I agree to the{" "}
                  <button
                    type="button"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Privacy Policy
                  </button>
                  .
                </span>
              </label>

              {/* Create Account */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              >
                Create Account
              </button>
            </form>

            {/* Login */}
            <p className="mt-8 text-center text-sm text-slate-400">
              Already have an account?{" "}

              <Link
                to="/login"
                className="font-medium text-blue-400 transition hover:text-blue-300"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-slate-600">
            Secure account creation for CloudGuard.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Register;
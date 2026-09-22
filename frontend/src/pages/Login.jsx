import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Shield,
  ArrowLeft,
  AlertCircle,
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    // Check empty fields
    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    // Temporary frontend login
    // We will replace this with backend authentication later.
    if (
      email.toLowerCase() === "admin@cloudguard.com" &&
      password === "admin123"
    ) {
      // Store temporary login state
      localStorage.setItem(
        "cloudguard_user",
        JSON.stringify({
          name: "Security Admin",
          email: "admin@cloudguard.com",
          role: "Security Admin",
        })
      );

      localStorage.setItem(
        "cloudguard_token",
        "demo-login-token"
      );

      // Go to dashboard
      navigate("/dashboard");
    } else {
      setError(
        "Invalid email or password. Use the demo credentials shown below."
      );
    }
  };

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

      {/* Login */}
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
              <h2 className="text-2xl font-bold">
                Welcome back
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Sign in to access your security dashboard.
              </p>
            </div>

            {/* Demo Credentials */}
            <div className="mb-5 rounded-xl border border-blue-400/10 bg-blue-400/[0.03] p-4">
              <p className="text-xs font-semibold text-blue-400">
                Demo Login
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Email:{" "}
                <span className="text-slate-300">
                  admin@cloudguard.com
                </span>
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Password:{" "}
                <span className="text-slate-300">
                  admin123
                </span>
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />

                <p className="text-sm text-red-300">
                  {error}
                </p>
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
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
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
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
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 pr-12 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-300"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-400">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/20 bg-slate-950 accent-blue-500"
                  />

                  Remember me
                </label>

                <button
                  type="button"
                  onClick={() =>
                    setError(
                      "Password recovery will be connected when the backend authentication system is added."
                    )
                  }
                  className="text-sm text-blue-400 transition hover:text-blue-300"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Sign In
              </button>
            </form>

            {/* Register */}
            <p className="mt-8 text-center text-sm text-slate-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-blue-400 transition hover:text-blue-300"
              >
                Create an account
              </Link>
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-slate-600">
            Secure access to your cloud security monitoring dashboard.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Login;
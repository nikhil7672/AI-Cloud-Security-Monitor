import {
  Bell,
  Shield,
  User,
  Lock,
  Save,
} from "lucide-react";
import { useState } from "react";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [aiMonitoring, setAiMonitoring] = useState(true);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white">
          Settings
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Manage your CloudGuard account and security preferences.
        </p>
      </div>

      {/* Profile */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-cyan-500/10 p-2.5">
            <User className="h-5 w-5 text-cyan-400" />
          </div>

          <div>
            <h2 className="font-semibold text-white">
              Profile
            </h2>

            <p className="text-sm text-slate-500">
              Manage your account information.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Full Name
            </label>

            <input
              type="text"
              defaultValue="CloudGuard User"
              className="w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-500/50"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Email Address
            </label>

            <input
              type="email"
              defaultValue="user@cloudguard.dev"
              className="w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-500/50"
            />
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-emerald-500/10 p-2.5">
            <Shield className="h-5 w-5 text-emerald-400" />
          </div>

          <div>
            <h2 className="font-semibold text-white">
              Security
            </h2>

            <p className="text-sm text-slate-500">
              Manage authentication and account security.
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between rounded-lg border border-slate-800 p-4">
            <div className="flex items-center gap-3">
              <Lock className="h-4 w-4 text-slate-400" />

              <div>
                <p className="text-sm text-white">
                  Change Password
                </p>

                <p className="text-xs text-slate-500">
                  Update your account password.
                </p>
              </div>
            </div>

            <button className="rounded-lg border border-slate-700 px-3 py-2 text-xs text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400">
              Change
            </button>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-slate-800 p-4">
            <div>
              <p className="text-sm text-white">
                Two-Factor Authentication
              </p>

              <p className="text-xs text-slate-500">
                Add an additional layer of account security.
              </p>
            </div>

            <button className="rounded-lg bg-slate-800 px-3 py-2 text-xs text-slate-300 hover:bg-slate-700">
              Enable
            </button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-500/10 p-2.5">
            <Bell className="h-5 w-5 text-blue-400" />
          </div>

          <div>
            <h2 className="font-semibold text-white">
              Notifications
            </h2>

            <p className="text-sm text-slate-500">
              Control how CloudGuard notifies you.
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <ToggleSetting
            title="Security Notifications"
            description="Receive notifications about important security events."
            enabled={notifications}
            setEnabled={setNotifications}
          />

          <ToggleSetting
            title="Email Alerts"
            description="Receive critical security alerts by email."
            enabled={emailAlerts}
            setEnabled={setEmailAlerts}
          />

          <ToggleSetting
            title="AI Monitoring"
            description="Allow CloudGuard AI to continuously analyze security events."
            enabled={aiMonitoring}
            setEnabled={setAiMonitoring}
          />
        </div>
      </div>

      {/* Save */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-400">
          <Save className="h-4 w-4" />
          Save Changes
        </button>
      </div>
    </div>
  );
}

function ToggleSetting({
  title,
  description,
  enabled,
  setEnabled,
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-slate-800 p-4">
      <div>
        <p className="text-sm text-white">{title}</p>

        <p className="mt-1 text-xs text-slate-500">
          {description}
        </p>
      </div>

      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          enabled ? "bg-cyan-500" : "bg-slate-700"
        }`}
        aria-label={`Toggle ${title}`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}

export default Settings;
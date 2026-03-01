import { useState } from "react";
import { Link } from "react-router-dom";

function getApiBaseUrl() {
  return (import.meta?.env?.VITE_API_URL || "http://127.0.0.1:8000").replace(/\/$/, "");
}

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function validatePassword(pwd) {
    if (pwd.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (!/[a-z]/.test(pwd) || !/[A-Z]/.test(pwd) || !/[0-9]/.test(pwd)) {
      return "Password must include lowercase, uppercase, and a number.";
    }
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const pwdError = validatePassword(password);
    if (pwdError) {
      setError(pwdError);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${getApiBaseUrl()}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (!res.ok) {
        let message = "Sign up failed";
        try {
          const data = await res.json();
          if (typeof data?.detail === "string") {
            message = data.detail;
          }
        } catch {
          // ignore
        }
        throw new Error(message);
      }

      setSuccess("Account created! You can now log in.");
      setEmail("");
      setUsername("");
      setPassword("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign up failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#e5e5e5] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#262626] border border-[#333333] rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/40 flex flex-col items-center">
        <Link to="/" className="flex items-center space-x-2 mb-4 hover:opacity-90 transition-opacity">
          <img
            src="/cook.png"
            alt="CookingAI"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
          <span className="text-2xl sm:text-3xl font-medium">
            <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Cooking
            </span>
            <span className="text-[#e5e5e5]">AI</span>
          </span>
        </Link>

        <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-center">
          Create your account
        </h1>
        <p className="text-sm text-[#a3a3a3] mb-6 text-center">
          Join CookingAI and start generating recipes with AI.
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <label className="block text-sm mb-1.5" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-lg bg-[#1f1f1f] border border-[#3f3f3f] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div>
            <label className="block text-sm mb-1.5" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              className="w-full rounded-lg bg-[#1f1f1f] border border-[#3f3f3f] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              placeholder="chefmaster"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>

          <div>
            <label className="block text-sm mb-1.5" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full rounded-lg bg-[#1f1f1f] border border-[#3f3f3f] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>

          {error && (
            <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
              {error}
            </div>
          )}
          {success && (
            <div className="text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-3 py-2">
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 px-4 py-2.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-black disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] transition-transform"
          >
            {loading ? "Creating account..." : "Sign up"}
          </button>

          <p className="mt-4 text-xs sm:text-sm text-[#a3a3a3] text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-300 hover:text-orange-200 underline underline-offset-4 decoration-orange-400/70 hover:decoration-orange-300 transition-colors"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}


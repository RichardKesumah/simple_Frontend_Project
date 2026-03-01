import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(identifier, password);
      navigate("/");
    } catch {
      // error state is handled inside AuthContext
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
          Sign in to your account
        </h1>
        <p className="text-sm text-[#a3a3a3] mb-6 text-center">
          Welcome back! Enter your details to continue.
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <label className="block text-sm mb-1.5" htmlFor="identifier">
              Email or username
            </label>
            <input
              id="identifier"
              className="w-full rounded-lg bg-[#1f1f1f] border border-[#3f3f3f] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              placeholder="you@example.com or chefmaster"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
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
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 px-4 py-2.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-black disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] transition-transform"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          <p className="mt-4 text-xs sm:text-sm text-[#a3a3a3] text-center">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-orange-300 hover:text-orange-200 underline underline-offset-4 decoration-orange-400/70 hover:decoration-orange-300 transition-colors"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}


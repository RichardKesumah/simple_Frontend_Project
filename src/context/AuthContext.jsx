import { createContext, useContext, useEffect, useMemo, useState } from "react";
import * as api from "../lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // true until we check token
  const [error, setError] = useState("");

  async function refreshMe() {
    setError("");
    const token = api.getToken();
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const me = await api.getMe();
      setUser(me);
    } catch (e) {
      // token invalid/expired -> clear it
      api.clearToken();
      setUser(null);
      setError(e.message || "Session expired");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refreshMe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function login(identifier, password) {
    setLoading(true);
    setError("");
    try {
      await api.login({ identifier, password });
      const me = await api.getMe();
      setUser(me);
      return me;
    } catch (e) {
      setUser(null);
      setError(e.message || "Login failed");
      throw e;
    } finally {
      setLoading(false);
    }
  }

  async function signup(email, username, password) {
    setLoading(true);
    setError("");
    try {
      await api.signup({ email, username, password });
      const me = await api.getMe();
      setUser(me);
      return me;
    } catch (e) {
      setUser(null);
      setError(e.message || "Signup failed");
      throw e;
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    api.clearToken();
    setUser(null);
    setError("");
  }

  const value = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      signup,
      logout,
      refreshMe,
      isAuthenticated: !!user,
    }),
    [user, loading, error]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
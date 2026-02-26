const API_BASE = "http://127.0.0.1:8000";

export function getToken() {
  return localStorage.getItem("token");
}

export function setToken(token) {
  localStorage.setItem("token", token);
}

export function clearToken() {
  localStorage.removeItem("token");
}

export async function signup({ email, username, password }) {
  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, username, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || "Signup failed");

  setToken(data.access_token);
  return data;
}

export async function login({ identifier, password }) {
  // backend expects x-www-form-urlencoded (OAuth2PasswordRequestForm)
  const form = new URLSearchParams();
  form.append("username", identifier); // can be username OR email
  form.append("password", password);

  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form.toString(),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || "Login failed");

  setToken(data.access_token);
  return data;
}

export async function getMe() {
  const token = getToken();
  if (!token) throw new Error("No token");

  const res = await fetch(`${API_BASE}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || "Not authorized");

  return data;
}
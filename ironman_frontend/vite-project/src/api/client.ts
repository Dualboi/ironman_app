const API_URL = "http://localhost:3000";

export async function apiFetch(
  path: string,
  token: string,
  options?: RequestInit
) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // REQUIRED for middleware logic
      ...(options?.headers || {}),
    },
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "API error");
  }

  return res.json();
}
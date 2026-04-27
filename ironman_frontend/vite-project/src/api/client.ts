const API_URL = import.meta.env.VITE_API_URL;

export const apiFetch = async (path: string, token: string, options = {}) => {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options as any).headers,
    },
  });

  if (!res.ok) {
    throw new Error("API request failed");
  }

  return res.json();
};
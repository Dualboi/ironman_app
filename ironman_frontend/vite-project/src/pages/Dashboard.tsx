import { useAuth } from "../auth/AuthContext";

export default function Dashboard() {
  const { user, session, logout } = useAuth();

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>

      <h3>Backend /me response:</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <h3>JWT preview:</h3>
      <pre>{session?.access_token?.slice(0, 25)}...</pre>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
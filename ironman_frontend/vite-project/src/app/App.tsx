import { useAuth } from "../features/auth/AuthContext";
import Login from "../features/dashboard/login";
import Dashboard from "../features/dashboard/Dashboard.tsx";

export default function App() {
  const { session, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return session ? <Dashboard /> : <Login />;
}
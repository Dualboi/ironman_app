import { useAuth } from "../features/auth/AuthContext";
import Login from "../features/dashboard/login";
import Dashboard from "../features/dashboard/Dashboard";

export default function App() {
  const { session, loading } = useAuth();

  if (loading) return <body className="bg-zinc-900/70 backdrop-blur-xl"><div>Loading...</div></body>;

  return session ? <Dashboard /> : <Login />;
}
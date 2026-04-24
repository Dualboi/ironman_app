import { useAuth } from "./auth/AuthContext";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const { session, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return session ? <Dashboard /> : <Login />;
}
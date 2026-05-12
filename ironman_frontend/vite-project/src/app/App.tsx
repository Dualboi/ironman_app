import { useAuth } from "../features/auth/AuthContext";
import Login from "../features/dashboard/login";
import Dashboard from "../features/dashboard/Dashboard";
import { Route, Navigate, Routes } from "react-router-dom";
import Schedule from "../features/schedule/schedule";
import Stats from "../features/training/stats";
import Settings from "../features/settings/settings";
import ManageWorkouts from "../features/settings/ManageWorkouts";

export default function App() {
  const { session, loading } = useAuth();

  if (loading) return <body className="bg-zinc-900 backdrop-blur-xl"><div>Loading...</div></body>;

  return (
    <Routes>
      <Route
        path="/login"
        element={session ? <Navigate to="/dashboard" replace /> : <Login />}
      />

      <Route
        path="/"
        element={<Navigate to={session ? "/dashboard" : "/login"} replace />}
      />
      <Route
        path="/dashboard"
        element={session ? <Dashboard /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/workouts"
        element={session ? <ManageWorkouts /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/schedule"
        element={session ? <Schedule /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/stats"
        element={session ? <Stats /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/settings"
        element={session ? <Settings /> : <Navigate to="/login" replace />}
      />

      <Route
        path="*"
        element={<Navigate to={session ? "/dashboard" : "/login"} replace />}
      />
    </Routes>
  );
}
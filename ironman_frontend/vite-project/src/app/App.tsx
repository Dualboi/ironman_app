import { useAuth } from "../features/auth/AuthContext";
import Login from "../features/dashboard/login";
import Dashboard from "../features/dashboard/Dashboard";
import CompleteProfile from "../features/dashboard/register";
import { Route, Navigate, Routes } from "react-router-dom";
import Schedule from "../features/schedule/schedule";
import Stats from "../features/training/stats";
import Settings from "../features/settings/settings";
import ManageWorkouts from "../features/settings/ManageWorkouts";

export default function App() {
  const { session, loading, needsProfileCompletion } = useAuth();

  if (loading) return <body className="bg-zinc-900 backdrop-blur-xl text-white items-center justify-center"><div className="text-center">Loading...</div></body>;

  return (
    <Routes>
      <Route
        path="/login"
        element={session ? <Navigate to={needsProfileCompletion ? "/complete-profile" : "/dashboard"} replace /> : <Login />}
      />

      <Route
        path="/"
        element={<Navigate to={session ? (needsProfileCompletion ? "/complete-profile" : "/dashboard") : "/login"} replace />}
      />
      <Route
        path="/complete-profile"
        element={session ? <CompleteProfile /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/dashboard"
        element={session ? (needsProfileCompletion ? <Navigate to="/complete-profile" replace /> : <Dashboard />) : <Navigate to="/login" replace />}
      />
      <Route
        path="/workouts"
        element={session ? (needsProfileCompletion ? <Navigate to="/complete-profile" replace /> : <ManageWorkouts />) : <Navigate to="/login" replace />}
      />
      <Route
        path="/schedule"
        element={session ? (needsProfileCompletion ? <Navigate to="/complete-profile" replace /> : <Schedule />) : <Navigate to="/login" replace />}
      />
      <Route
        path="/stats"
        element={session ? (needsProfileCompletion ? <Navigate to="/complete-profile" replace /> : <Stats />) : <Navigate to="/login" replace />}
      />
      <Route
        path="/settings"
        element={session ? (needsProfileCompletion ? <Navigate to="/complete-profile" replace /> : <Settings />) : <Navigate to="/login" replace />}
      />

      <Route
        path="*"
        element={<Navigate to={session ? (needsProfileCompletion ? "/complete-profile" : "/dashboard") : "/login"} replace />}
      />
    </Routes>
  );
}
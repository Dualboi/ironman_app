import { useAuth } from "../auth/AuthContext";
import { Navbar } from "../../shared/components/navbar";
import { Footer } from "../../shared/components/footer";
import { Card } from "../../shared/components/reusable-card";
import { Input } from "../../shared/components/input";
import { Button } from "../../shared/components/button";

export default function Dashboard() {
  const { user, session, logout } = useAuth();

  return (
      <><><Navbar /><div style={{ padding: 20 }}>
      <h2>Dashboard</h2>

      <h3>Backend /me response:</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <h3>JWT preview:</h3>
      <pre>{session?.access_token?.slice(0, 25)}...</pre>

      <button onClick={logout}>Logout</button>
    </div></><><Footer /></></>
  );
}
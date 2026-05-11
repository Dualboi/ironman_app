import { useAuth } from "../auth/AuthContext";
import { Navbar } from "../../shared/components/navbar";
import { Footer } from "../../shared/components/footer";
//import { Card } from "../../shared/components/reusable-card";
//import { Input } from "../../shared/components/input";
import { Button } from "../../shared/components/button";

export default function Dashboard() {
  const { user, session, logout } = useAuth();

  return (
    <div className=" min-h-screen bg-linear-to-br  from-black via-zinc-900 to-black flex flex-col items-center">
      <><header className=" font-display text-2xl font-semibold tracking-tight w-full p-4 text-center text-zinc-300 border-b border-zinc-800">
        IronMan Buddy
      </header><><><Navbar /><div style={{ padding: 20 }}>
        <h2>Dashboard</h2>

        <h3 className="text-zinc-300">Backend /me response:</h3>
      <pre className="text-zinc-300 whitespace-pre-wrap break-words max-w-full overflow-auto text-sm md:text-base">{JSON.stringify(user, null, 2)}</pre>

        <h3 className="text-zinc-300">JWT preview:</h3>
      <pre className="text-zinc-300 max-w-full overflow-auto text-sm md:text-base">{session?.access_token?.slice(0, 25)}...</pre>

        <Button variant="primary" className="text-zinc-300" onClick={logout}>Logout</Button>
      </div></><><Footer /></></></>
    </div>
  );
}
import { useAuth } from "../auth/AuthContext";
import { Navbar } from "../../shared/components/navbar";
import { Footer } from "../../shared/components/footer";

export default function Dashboard() {
  const { user, session } = useAuth();

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-zinc-900 to-black flex flex-col">
      <header className="font-display text-2xl font-semibold tracking-tight w-full p-4 text-center text-zinc-300 border-b border-zinc-800">
        IronMan Buddy
      </header>

      <Navbar />

      <main className="flex-1 w-full px-4 pt-12 md:pt-14">
        <div className="w-full max-w-7xl mx-auto py-6 space-y-6">
          <h2 className="text-zinc-300 text-xl font-semibold">Dashboard</h2>

          <section>
            <h3 className="text-zinc-300">Backend /me response:</h3>
            <pre className="text-zinc-300 whitespace-pre-wrap wrap-break-word max-w-full overflow-auto text-sm md:text-base">
              {JSON.stringify(user, null, 2)}
            </pre>
          </section>

          <section>
            <h3 className="text-zinc-300">JWT preview:</h3>
            <pre className="text-zinc-300 max-w-full overflow-auto text-sm md:text-base">
              {session?.access_token?.slice(0, 25)}...
            </pre>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

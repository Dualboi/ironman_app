import { useAuth } from "../auth/AuthContext";
import { Navbar } from "../../shared/components/navbar";
import { Footer } from "../../shared/components/footer";
import { Card } from "../../shared/components/reusable-card";

export default function Dashboard() {
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-linear-to-br from-black via-zinc-900 to-black flex flex-col">
            <header className="font-display text-2xl font-semibold tracking-tight w-full p-4 text-center text-zinc-300 border-b border-zinc-800">
                IronMan Buddy
            </header>

            <Navbar />

            <main className="flex-1 w-full px-4 pt-12 md:pt-14 overflow-y-auto">
                <div className="w-full max-w-7xl mx-auto py-6 pb-10 space-y-8">
                    <section className="min-h-[70vh] flex items-center justify-center">
                        <Card className="mx-auto text-center" maxWidthClass="max-w-4xl">
                            <p className="text-zinc-300 text-xl">Welcome to your dashboard, {user?.name}!</p>
                        </Card>
                    </section>
                    <section className="min-h-[70vh] flex items-center justify-center">
                        <Card className="mx-auto text-center" maxWidthClass="max-w-4xl">
                            <p className="text-zinc-300 text-xl">Welcome to your dashboard2 {user?.name}!</p>
                        </Card>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}

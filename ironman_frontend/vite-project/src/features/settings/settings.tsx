//import { useAuth } from "../auth/AuthContext";
import { Navbar } from "../../shared/components/navbar";
import { Footer } from "../../shared/components/footer";
import { Button } from "../../shared/components/button";
import { Card } from "../../shared/components/reusable-card";

export default function Settings() {
    //const { user } = useAuth();

    return (
        <div className="min-h-screen bg-linear-to-br from-black via-zinc-900 to-black flex flex-col">
            <header className="fixed top-0 left-0 right-0 z-60 h-12 md:h-14 font-display text-2xl font-semibold tracking-tight w-full px-4 flex items-center justify-center text-zinc-300 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-sm">
                IronMan Buddy
            </header>

            <Navbar />

            <main className="flex-1 w-full px-4 pt-24 md:pt-28">
                <div className="w-full max-w-7xl mx-auto py-6 pb-10 space-y-8">
                    <section className="min-h-[70vh] flex items-center justify-center">
                        <Card className="w-full max-w-4xl">
                            <h2 className="text-zinc-300 text-xl mb-6 text-center">Settings</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <Button variant="primary">Progress</Button>
                                <Button variant="primary">Manage Account</Button>
                                <Button variant="primary">Manage Data</Button>
                                <Button variant="primary">Personal Details</Button>
                                <Button variant="primary">Manage Activities</Button>
                                <Button variant="primary">Get Help</Button>
                                <Button variant="primary">App Updates</Button>
                                <Button variant="primary">Get in Touch</Button>
                            </div>
                        </Card>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

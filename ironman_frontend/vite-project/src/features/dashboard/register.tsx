import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../shared/components/navbar";
import { Footer } from "../../shared/components/footer";
import { Card } from "../../shared/components/reusable-card";
import { Button } from "../../shared/components/button";
import { apiFetch } from "../auth/api/client.ts";

export default function CompleteProfile() {
    const { session, setNeedsProfileCompletion } = useAuth();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [gender, setGender] = useState("male");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (!session?.access_token) {
            setError("Not authenticated. Please log in again.");
            setLoading(false);
            return;
        }

        try {
            await apiFetch("/profile", session.access_token, {
                method: "POST",
                body: JSON.stringify({
                    name: firstName,
                    age: parseInt(age),
                    weight: parseFloat(weight),
                    gender,
                }),
            });

            setNeedsProfileCompletion(false);
            navigate("/dashboard");
        } catch (err) {
            setError("Failed to complete profile. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-black via-zinc-900 to-black flex flex-col">
            <header className="fixed top-0 left-0 right-0 z-60 h-12 md:h-14 font-display text-2xl font-semibold tracking-tight w-full px-4 flex items-center justify-center text-zinc-300 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-sm">
                IronMan Buddy
            </header>

            <Navbar />

            <main className="flex-1 w-full px-4 pt-24 md:pt-28">
                <div className="w-full max-w-7xl mx-auto py-6 pb-10 space-y-8">
                    <section className="min-h-[70vh] flex items-center justify-center">
                        <Card className="mx-auto text-center" maxWidthClass="max-w-4xl">
                            <p className="text-zinc-300 text-xl mb-6">Complete Your Profile</p>
                            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                                {error && <p className="text-red-400 text-sm">{error}</p>}
                                <div>
                                    <label className="block text-zinc-300 mb-1" htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                                </div>
                                <div>
                                    <label className="block text-zinc-300 mb-1" htmlFor="age">Age</label>
                                    <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} required min="1" max="120" className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                                </div>
                                <div>

                                    <label className="block text-zinc-300 mb-1" htmlFor="weight">Weight (kg)</label>
                                    <input type="number" id="weight" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required step="0.1" min="0" className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                                </div>
                                <div>
                                    <label className="block text-zinc-300 mb-1" htmlFor="gender">Gender</label>
                                    <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 text-zinc-300">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <Button type="submit" variant="primary" disabled={loading}>{loading ? "Saving..." : "Complete Profile"}</Button>
                            </form>
                        </Card>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}

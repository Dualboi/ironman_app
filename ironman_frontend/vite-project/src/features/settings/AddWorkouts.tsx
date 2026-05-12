import { useState } from "react";
import { apiFetch } from "../auth/api/client.ts";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { Card } from "../../shared/components/reusable-card.tsx";
import { Button } from "../../shared/components/button.tsx";

export default function AddWorkouts() {
    const { session } = useAuth();
    const navigate = useNavigate();
    const [activityName, setActivityName] = useState("");
    const [intensity, setIntensity] = useState("");
    const [distanceKm, setDistanceKm] = useState("");
    const [durationMinutes, setDurationMinutes] = useState("");
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
            await apiFetch("/addWorkout", session.access_token, {
                method: "POST",
                body: JSON.stringify({
                    name: activityName,
                    intensity: parseInt(intensity),
                    distanceKm: parseFloat(distanceKm),
                    durationMinutes: parseInt(durationMinutes),
                }),
            });

            navigate("//schedule");
        } catch (err) {
            setError("Failed to add workout. Please try again.");
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
            <main className="flex-1 w-full px-4 pt-24 md:pt-28">
                <div className="w-full max-w-7xl mx-auto py-6 pb-10 space-y-8">
                    <section className="min-h-[70vh] flex items-center justify-center">
                        <Card title="Add Workout" className="mx-auto" maxWidthClass="max-w-4xl">
                            <p className="text-zinc-400 text-sm mb-6 text-left">Enter the details for your new workout.</p>
                            <form className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-left" onSubmit={handleSubmit}>
                                {error && <p className="text-red-400 text-sm md:col-span-2">{error}</p>}

                                <div>
                                    <label className="block text-zinc-300 mb-1" htmlFor="activityName">Activity Name</label>
                                    <input
                                        type="text"
                                        id="activityName"
                                        name="activityName"
                                        value={activityName}
                                        onChange={(e) => setActivityName(e.target.value)}
                                        required
                                        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-zinc-300 mb-1" htmlFor="intensity">Intensity</label>
                                    <select
                                        id="intensity"
                                        name="intensity"
                                        value={intensity}
                                        onChange={(e) => setIntensity(e.target.value)}
                                        required
                                        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                    >
                                        <option value="Recovery">Recovery</option>
                                        <option value="Ut2">Ut2</option>
                                        <option value="Threshold">Threshold</option>
                                        <option value="Tempo">Tempo</option>
                                        <option value="Strength">Strength</option>
                                        <option value="Race/Test">Race/Test</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-zinc-300 mb-1" htmlFor="distanceKm">Distance (km)</label>
                                    <input
                                        type="number"
                                        id="distanceKm"
                                        name="distanceKm"
                                        value={distanceKm}
                                        onChange={(e) => setDistanceKm(e.target.value)}
                                        required
                                        step="0.1"
                                        min="0"
                                        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-zinc-300 mb-1" htmlFor="durationMinutes">Duration (minutes)</label>
                                    <input
                                        type="number"
                                        id="durationMinutes"
                                        name="durationMinutes"
                                        value={durationMinutes}
                                        onChange={(e) => setDurationMinutes(e.target.value)}
                                        required
                                        min="1"
                                        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                    />
                                </div>

                                <div className="md:col-span-2 flex items-center justify-center mt-4">
                                    <Button type="submit" variant="primary" disabled={loading} className="w-full md:w-1/3">
                                        {loading ? "Saving..." : "Add Workout"}
                                    </Button>
                                </div>
                            </form>
                        </Card>
                    </section>
                </div>
            </main>
        </div>
    );
}

import { Card } from "../../shared/components/reusable-card";
import { Button } from "../../shared/components/button";
import { Input } from "../../shared/components/input";

const activities = [
    "Swim 2,000m Tempo",
    "Run 14km Zone 2",
    "Cycle 40km Zone 2",
    "Cycle 24km Threshold",
    "Run 8km Tempo",
    "Swim 2,000m Zone 2",
    "Hike Threshold",
    "Strength Training",
    "Injury Prevention Work",
];

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

export function ScheduleCard() {
    return (
        <Card className="mx-auto overflow-hidden" maxWidthClass="max-w-6xl">
            <div className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-3xl font-medium tracking-tight text-zinc-100 sm:text-[2.15rem]">
                        Scheduler
                    </h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
                    <section className="rounded-3xl border border-white/5 bg-[#232b3d] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                        <h3 className="text-2xl font-light tracking-tight text-zinc-100">
                            Activities
                        </h3>

                        <div className="mt-3 max-h-107.5 space-y-3 overflow-y-auto pr-2">
                            {activities.map((activity) => (
                                <div
                                    key={activity}
                                    className="cursor-grab rounded-md bg-zinc-100 px-3 py-2 text-sm text-zinc-700 shadow-sm transition hover:bg-white"
                                >
                                    {activity}
                                </div>
                            ))}
                        </div>

                        <Button
                            type="button"
                            variant="primary"
                            className="mx-auto mt-5 flex-none px-4 py-1.5 text-sm text-slate-950"
                            onClick={() => window.location.assign("/workouts")}
                        >
                            Add more Activities
                        </Button>
                    </section>

                    <section className="rounded-3xl border border-white/5 bg-[#232b3d] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                            <h3 className="max-w-md text-2xl font-light leading-tight tracking-tight text-zinc-100">
                                Drag and drop Activities into the week
                            </h3>

                            <div className="flex flex-col gap-2 xl:items-end">
                                <div className="flex flex-wrap items-end justify-end gap-2 sm:gap-3">
                                    <label className="space-y-1">
                                        <span className="block text-xs font-medium text-zinc-300">
                                            Distance Goal
                                        </span>
                                        <Input
                                            type="text"
                                            id="distanceGoal"
                                            name="distanceGoal"
                                            placeholder="0.00 km"
                                            className="h-7 w-20 rounded-sm border-0 bg-zinc-100 px-2 py-1 text-right text-[11px] text-zinc-100 shadow-sm placeholder:text-zinc-500 focus:ring-2 focus:ring-cyan-400/40"
                                        />
                                    </label>

                                    <label className="space-y-1">
                                        <span className="block text-xs font-medium text-zinc-300">
                                            Time Goal
                                        </span>
                                        <Input
                                            type="text"
                                            id="timeGoal"
                                            name="timeGoal"
                                            placeholder="0:00"
                                            className="h-7 w-20 rounded-sm border-0 bg-zinc-100 px-2 py-1 text-right text-[11px] text-zinc-100 shadow-sm placeholder:text-zinc-500 focus:ring-2 focus:ring-cyan-400/40"
                                        />
                                    </label>

                                    <div className="flex flex-col gap-2 pb-0.5">
                                        <Button
                                            type="button"
                                            variant="primary"
                                            className="h-7 flex-none px-4 py-0 text-xs text-slate-950 flex items-center justify-center"
                                        >
                                            Optimise
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="primary"
                                            className="h-7 flex-none px-4 py-0 text-xs text-slate-950 flex items-center justify-center"
                                        >
                                            Fit to Goal
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7">
                            {days.map((day) => (
                                <div key={day} className="flex flex-col">
                                    <h4 className="mb-1 text-lg font-light tracking-tight text-zinc-100">
                                        {day}
                                    </h4>
                                    <div className="min-h-70 rounded-md border border-zinc-200/70 bg-zinc-100 shadow-sm sm:min-h-75" />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </Card >
    );
};

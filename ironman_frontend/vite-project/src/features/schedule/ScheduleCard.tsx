import { Card } from "../../shared/components/reusable-card";
import { Button } from "../../shared/components/button";
import { Input } from "../../shared/components/input";

export function ScheduleCard() {
    return (
        <Card className="mx-auto text-center" maxWidthClass="max-w-4xl">
            <h2 className="text-zinc-300 text-xl">Scheduler</h2>
            <div>
                <h3>Activities</h3>
                <Button>Add more Activities</Button>
                <Button type="submit" variant="primary" className="w-full md:w-1/3">
                    {"Add more Activities"}
                </Button>
            </div>
            <div>
                <h3>Drag and drop Activities into the week</h3>
                <p>Distance Goal</p>
                <Input
                    type="number"
                    id="distanceGoal"
                    name="distanceGoal"
                    //value={distanceGoal}
                    //onChange={(e) => setDistanceGoal(e.target.value)}
                    min="1"
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <p>Time Goal</p>
                <Input
                    type="number"
                    id="timeGoal"
                    name="timeGoal"
                    //value={timeGoal}
                    //onChange={(e) => setTimeGoal(e.target.value)}
                    min="1"
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <Button type="submit" variant="primary" className="w-full md:w-1/3">{"Optimise"}</Button>
                <Button type="submit" variant="primary" className="w-full md:w-1/3">{"Fit to Goal"}</Button>
                <div className="columns-7 md:columns-7 gap-4 mt-4">
                    <h3>Monday</h3>
                    <div></div>
                    <h3>Tuesday</h3>
                    <div></div>
                    <h3>Wednesday</h3>
                    <div></div>
                    <h3>Thursday</h3>
                    <div></div>
                    <h3>Friday</h3>
                    <div></div>
                    <h3>Saturday</h3>
                    <div></div>
                    <h3>Sunday</h3>
                    <div></div>
                </div>
            </div>
        </Card >
    );
};

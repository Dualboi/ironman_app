exports.generatePlan = (weeks = 12) => {
  const plan = [];

  for (let i = 1; i <= weeks; i++) {
    plan.push({
      week: i,
      sessions: [
        { sport: "swim", duration: 45, intensity: "zone 2" },
        { sport: "bike", duration: 90, intensity: "zone 2" },
        { sport: "run", duration: 60, intensity: "zone 2" },
        { sport: "rest" }
      ]
    });
  }

  return plan;
};
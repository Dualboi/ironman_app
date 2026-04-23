const express = require("express");
const router = express.Router();

const { generatePlan } = require("../services/planService");

router.post("/create", (req, res) => {
  const { weeks } = req.body;

  const plan = generatePlan(weeks);

  res.json({
    message: "Plan created",
    plan
  });
});

module.exports = router;
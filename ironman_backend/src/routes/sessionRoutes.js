const express = require('express');
const router = express.Router();

router.get("/today", (req, res) => {
    res.json({
        message: "Today's training session",
        sessions: [
            {
                sport: "Run",
                duration: 45,
                intensity: "Zone 2"
            }
        ]
    });
});

router.post("/complete", (req, res) => {
  const { sessionId, rpe } = req.body;

  res.json({
    message: "Session marked as complete",
    sessionId,
    rpe
  });
});

module.exports = router;
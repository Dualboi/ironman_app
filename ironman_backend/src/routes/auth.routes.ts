import express from "express";
import { authMiddleware, AuthenticatedRequest } from "../middleware/auth.middleware";
import { prisma } from "../prisma";

const router = express.Router();

router.post("/me", authMiddleware, async (req: AuthenticatedRequest, res) => {
  const userId = req.userId!;
  const email = (req.user as any)?.email ?? null;

  if (!email) {
    return res.status(400).json({ error: "User email missing from token" });
  }

  const user = await prisma.user.upsert({
    where: { id: userId },
    update: { email },
    create: {
      id: userId,
      email,
      name: "",
    },
    include: { profile: true },
  });

  return res.json({
    message: "User authenticated",
    user,
  });
});

// Setting up profile and registration
router.post("/profile", authMiddleware, async (req: AuthenticatedRequest, res) => {
  const userId = req.userId!;
  const { name, age, weight, gender } = req.body;

  if (!name || !age || !weight || !gender) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Update user with name
    const user = await prisma.user.update({
      where: { id: userId },
      data: { name },
    });

    // Create or update user profile
    const profile = await prisma.userProfile.upsert({
      where: { userId },
      update: {
        age: parseInt(age),
        bodyWeight: parseFloat(weight),
        gender: gender.toLowerCase(),
      },
      create: {
        userId,
        age: parseInt(age),
        bodyWeight: parseFloat(weight),
        gender: gender.toLowerCase(),
      },
    });

    return res.json({
      message: "Profile updated successfully",
      user,
      profile,
    });
  } catch (error) {
    console.error("Profile update error:", error);
    return res.status(500).json({ error: "Failed to update profile" });
  }
});

// Used for adding and editing sessions
router.post("/sessions", authMiddleware, async (req: AuthenticatedRequest, res) => {
  const userId = req.userId!;
  const { name, intensity, distanceKm, durationMinutes } = req.body;

  if (!name || !intensity || !durationMinutes) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // 1. Find or create WorkoutType
    const workoutType = await prisma.workoutType.upsert({
      where: { name: name.toLowerCase() },
      update: {},
      create: { name: name.toLowerCase() },
    });

    // 2. Map intensity
    const intensityMap: Record<string, any> = {
      Recovery: "Recovery",
      Ut2: "Zone2",
      Tempo: "Tempo",
      Threshold: "Threshold",
      Strength: "sprint",
      "Race/Test": "TestOrRace",
    };

    const prismaIntensity = intensityMap[intensity];

    if (!prismaIntensity) {
      return res.status(400).json({ error: "Invalid intensity value" });
    }

    // 3. Create UNSCHEDULED session
    const session = await prisma.session.create({
      data: {
        userId,
        workoutTypeId: workoutType.id,
        intensity: prismaIntensity,
        durationMinutes: Number(durationMinutes),
        distanceKm: distanceKm ? Number(distanceKm) : null,
        weekId: null,
        dayOfWeek: null,
      },
    });

    return res.json({
      message: "Workout created (unscheduled)",
      session,
    });

  } catch (error) {
    console.error("Create session error:", error);
    return res.status(500).json({ error: "Failed to create session" });
  }
});

// Sessio Schedule
router.post("/schedule-session", authMiddleware, async (req: AuthenticatedRequest, res) => {
  const userId = req.userId!;
  const { sessionId, dayOfWeek } = req.body;

  if (!sessionId || dayOfWeek === undefined) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const today = new Date();

    // Find active plan
    const plan = await prisma.trainingPlan.findFirst({
      where: {
        userId,
        startDate: { lte: today },
        endDate: { gte: today },
      },
      include: { weeks: true },
    });

    if (!plan) {
      return res.status(404).json({ error: "No active plan" });
    }

    // Find current week
    const currentWeek = plan.weeks.find(week => {
      const start = new Date(week.startDate);
      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      return today >= start && today <= end;
    });

    if (!currentWeek) {
      return res.status(404).json({ error: "No current week" });
    }

    // Assign session to week + day
    const session = await prisma.session.update({
      where: { id: sessionId },
      data: {
        weekId: currentWeek.id,
        dayOfWeek: Number(dayOfWeek),
      },
    });

    return res.json({
      message: "Session scheduled",
      session,
    });

  } catch (error) {
    console.error("Scheduling error:", error);
    return res.status(500).json({ error: "Failed to schedule session" });
  }
});

export default router;
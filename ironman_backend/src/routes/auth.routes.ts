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

export default router;
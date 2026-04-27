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
  });

  return res.json({
    message: "User authenticated",
    user,
  });
});

export default router;
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

  // ensures user exists in the DB
  let user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        id: userId,
        email,
        name: "",
      },
    });
  }

  return res.json({
    message: "User authenticated",
    user,
  });
});

export default router;
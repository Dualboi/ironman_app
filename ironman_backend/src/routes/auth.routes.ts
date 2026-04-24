import express from "express";
import { authMiddleware, AuthenticatedRequest } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/me", authMiddleware, async (req: AuthenticatedRequest, res) => {
  const userId = req.userId;
  const email = (req.user as any)?.email;

  return res.json({
    message: "User authenticated",
    userId,
    email,
  });
});

export default router;
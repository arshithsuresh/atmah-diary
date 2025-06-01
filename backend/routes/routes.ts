import authRoutes from "./auth";
import userRoutes from "./user";
import diaryRoutes from "./diary";
import { Router } from "express";

const router = Router();
router.use("/auth", authRoutes);
router.use("/diary", diaryRoutes);
router.use("/user", userRoutes);

export default router;

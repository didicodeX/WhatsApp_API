import { Router } from "express";
import authRoutes from "../features/auth/auth.routes.js";
import userRoutes from "../features/users/user.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
    status: "success",
  });
});

export default router;
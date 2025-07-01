import { Router } from "express";
import authRoutes from "../features/auth/auth.routes.js";
import messageRoutes from "../features/messages/message.routes.js";
import namespaceRoutes from "../features/namespaces/namespace.routes.js";
import roomRoutes from "../features/rooms/room.routes.js";
import userRoutes from "../features/users/user.routes.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/namespaces", authenticate, namespaceRoutes);
router.use("/rooms", authenticate, roomRoutes);
router.use("/messages", authenticate, messageRoutes);

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
    status: "success",
  });
});

export default router;

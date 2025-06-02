import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { getCurrentUser, login, logout, register } from "./auth.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", authenticate, getCurrentUser);

export default router;

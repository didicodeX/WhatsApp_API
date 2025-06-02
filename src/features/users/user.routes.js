import { Router } from "express";
import { getAllUsers, getUserById } from "./user.controller.js";

const router = Router();

router.post("/", getAllUsers);
router.post("/:id", getUserById);

export default router;

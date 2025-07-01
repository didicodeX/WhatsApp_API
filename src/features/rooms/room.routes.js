import { Router } from "express";
import { createRoom, getRoomsByNamespace } from "./room.controller.js";

const router = Router();

router.post("/", createRoom);
router.get("/:namespaceId", getRoomsByNamespace);

export default router;

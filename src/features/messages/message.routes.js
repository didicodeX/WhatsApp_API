import { Router } from "express";
import {
  createMessage,
  getMessagesByRoom,
} from "./message.controller.js";

const router = Router();

router.post("/", createMessage);
router.get("/:roomId", getMessagesByRoom);

export default router;

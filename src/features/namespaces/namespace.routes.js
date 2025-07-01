import { Router } from "express";
import {
  createNamespace,
  getNamespaces,
  getNamespaceById,
} from "./namespace.controller.js";

const router = Router();

router.post("/", createNamespace);
router.get("/", getNamespaces);
router.get("/:id", getNamespaceById);

export default router;

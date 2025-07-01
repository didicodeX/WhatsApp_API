import { log } from "console";
import { namespaceService } from "./namespace.service.js";

export const createNamespace = async (req, res) => {
  try {
    log("Creating namespace with data:", req.user, req.body);
    const data = { ...req.body, createdBy: req.user.id };
    const namespace = await namespaceService.createNamespace(data);
    res.status(201).json(namespace);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getNamespaces = async (req, res) => {
  try {
    const namespaces = await namespaceService.getAllNamespaces();
    res.status(200).json(namespaces);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNamespaceById = async (req, res) => {
  try {
    const namespace = await namespaceService.getNamespaceById(req.params.id);
    if (!namespace) return res.status(404).json({ message: "Not found" });

    res.status(200).json(namespace);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

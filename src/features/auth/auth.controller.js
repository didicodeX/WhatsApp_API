import { cookieOptions } from "../../config/cookie.config.js";
import { authService } from "./auth.service.js";

export const register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { user, token } = await authService.login(req.body);
    res.cookie("token", token, cookieOptions);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const getCurrentUser = (req, res) => {
  try {
    const user = req.user; 
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("token", cookieOptions);
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userRepository } from "../users/user.repository.js";

export const authService = {
  register: async ({ email, name, password }) => {
    const existing = await userRepository.findByEmail(email);
    if (existing) throw new Error("Email already in use");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    return {
      id: user._id,
      email: user.email,
      name: user.name,
    };
  },

  login: async ({ email, password }) => {
    const user = await userRepository.findByEmail(email);
    if (!user) throw new Error("Invalid credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return {
      token,
      user,
    };
  },
};

import { userRepository } from "./user.repository.js";

export const userService = {
  getAllUsers: async () => {
    return await userRepository.findAll();
  },

  getUserById: async (id) => {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return {
      _id: user._id,
      email: user.email,
      name: user.name,
    };
  },
};

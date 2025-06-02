import User from "./user.model.js";

export const userRepository = {
  create: (userData) => User.create(userData),
  findByEmail: (email) => User.findOne({ email }),
  findById: (id) => User.findById(id),
  findAll: () => User.find({}),
};

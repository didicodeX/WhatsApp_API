import Namespace from "./namespace.model.js";

export const namespaceRepository = {
  create: (data) => Namespace.create(data),
  findAll: () => Namespace.find(),
  findById: (id) => Namespace.findById(id),
};

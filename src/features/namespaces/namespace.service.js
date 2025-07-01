import { namespaceRepository } from "./namespace.repository.js";

export const namespaceService = {
  createNamespace: async (data) => {
    return await namespaceRepository.create(data);
  },

  getAllNamespaces: async () => {
    return await namespaceRepository.findAll();
  },

  getNamespaceById: async (id) => {
    return await namespaceRepository.findById(id);
  },
};

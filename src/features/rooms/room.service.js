import { roomRepository } from "./room.repository.js";

export const roomService = {
  createRoom: async (data) => {
    return await roomRepository.create(data);
  },

  getRoomsByNamespace: async (namespaceId) => {
    return await roomRepository.findByNamespace(namespaceId);
  },
};

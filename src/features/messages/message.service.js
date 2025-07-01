import { messageRepository } from "./message.repository.js";

export const messageService = {
  createMessage: async (data) => {
    return await messageRepository.create(data);
  },

  getMessagesByRoom: async (roomId) => {
    return await messageRepository.findByRoom(roomId);
  },
};

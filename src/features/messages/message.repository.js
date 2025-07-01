import Message from "./message.model.js";

export const messageRepository = {
  create: (data) => Message.create(data),
  findByRoom: (roomId) =>
    Message.find({ room: roomId }).sort({ createdAt: 1 }).limit(50),
};

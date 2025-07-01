import Room from "./room.model.js";

export const roomRepository = {
  create: (data) => Room.create(data),
  findByNamespace: (namespaceId) => Room.find({ namespace: namespaceId }),
};

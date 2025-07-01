import { messageService } from "../../features/messages/message.service.js";

export function registerRoomHandlers(socket) {
  socket.on("joinRoom", async (roomId) => {
    socket.join(roomId);
    const messages = await messageService.getMessagesByRoom(roomId);
    socket.emit("roomMessages", messages);
  });
}

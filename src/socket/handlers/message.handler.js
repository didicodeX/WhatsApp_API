import { messageService } from "../../features/messages/message.service.js";

export function registerMessageHandlers(io, socket) {
  socket.on("newMessage", async (data) => {
    const savedMessage = await messageService.createMessage(data);
    io.to(data.room).emit("message", savedMessage);
  });
}

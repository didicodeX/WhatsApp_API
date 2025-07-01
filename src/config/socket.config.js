// src/config/socket.config.js
import { Server } from "socket.io";
import { messageService } from "../features/messages/message.service.js";
import { namespaceService } from "../features/namespaces/namespace.service.js";
import { roomService } from "../features/rooms/room.service.js";
import { corsOptions } from "./cors.config.js";

export function setupSocket(server) {
  const io = new Server(server, {
    cors: corsOptions,
  });

  io.on("connection", async (socket) => {
    console.log("✅ Socket connected:", socket.id);

    // 1. Envoyer la liste des namespaces au client
    const namespaces = await namespaceService.getAllNamespaces();
    socket.emit("namespaces", namespaces);

    // 2. Rejoindre un namespace (optionnel si multi-namespaces)
    socket.on("joinNamespace", async (namespaceId) => {
      const rooms = await roomService.getRoomsByNamespace(namespaceId);
      socket.emit("rooms", rooms);
    });

    // 3. Rejoindre une room spécifique
    socket.on("joinRoom", async (roomId) => {
      socket.join(roomId);

      // Envoyer l'historique des messages
      const messages = await messageService.getMessagesByRoom(roomId);
      socket.emit("roomMessages", messages);
    });

    // 4. Réception d’un nouveau message
    socket.on("newMessage", async (data) => {
      const savedMessage = await messageService.createMessage(data);

      // Émettre le message à tous les clients dans la room
      io.to(data.room).emit("message", savedMessage);
    });

    socket.on("disconnect", () => {
      console.log("❌ Socket disconnected:", socket.id);
    });
  });
}

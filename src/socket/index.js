import { Server } from "socket.io";
import { corsOptions } from "../config/cors.config.js";

import { namespaceService } from "../features/namespaces/namespace.service.js";

import { registerConnectionHandlers } from "./handlers/connection.handler.js";
import { registerMessageHandlers } from "./handlers/message.handler.js";
import { registerNamespaceHandlers } from "./handlers/namespace.handler.js";
import { registerRoomHandlers } from "./handlers/room.handler.js";

export function setupSocket(server) {
  const io = new Server(server, { cors: corsOptions });

  io.on("connection", async (socket) => {
    console.log("✅ Socket connected:", socket.id);

    // Événement de départ
    const namespaces = await namespaceService.getAllNamespaces();
    socket.emit("namespaces", namespaces);

    // Enregistrer les gestionnaires socket
    registerNamespaceHandlers(socket);
    registerRoomHandlers(socket);
    registerMessageHandlers(io, socket);
    registerConnectionHandlers(socket);
  });
}

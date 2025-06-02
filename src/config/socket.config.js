// src/config/socket.config.js
import { Server } from "socket.io";
import { corsOptions } from "./cors.config.js";

export function setupSocket(server) {
  const io = new Server(server, {
    cors: corsOptions,
  });

  io.on("connection", (socket) => {
    console.log("🟢 Nouveau client connecté :", socket.id);

    socket.on("message", (msg) => {
      console.log("💬 Message reçu :", msg);
      socket.broadcast.emit("message", msg);
    });

    socket.on("disconnect", () => {
      console.log("🔴 Client déconnecté :", socket.id);
    });
  });
}

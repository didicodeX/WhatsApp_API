import { namespaceService } from "../../features/namespaces/namespace.service.js";
import { roomService } from "../../features/rooms/room.service.js";

export function registerNamespaceHandlers(socket) {
  socket.on("joinNamespace", async (namespaceId) => {
    const rooms = await roomService.getRoomsByNamespace(namespaceId);
    socket.emit("rooms", rooms);
  });

  // Ajouter d'autres actions liées aux namespaces ici si besoin
}

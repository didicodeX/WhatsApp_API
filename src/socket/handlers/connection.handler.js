export function registerConnectionHandlers(socket) {
  socket.on("disconnect", () => {
    console.log("🔴 Client disconnected:", socket.id);
  });
}

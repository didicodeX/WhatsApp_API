// main.js
import "dotenv/config";
import "./src/config/database.config.js";

import http from "http";
import app from "./app.js";
import { setupSocket } from "./src/config/socket.config.js";

const PORT = process.env.PORT || 3000;

// Création du serveur HTTP à partir d’Express
const server = http.createServer(app);

// Initialisation de Socket.IO
setupSocket(server);

// Démarrage du serveur
server.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});

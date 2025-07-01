import { roomService } from "./room.service.js";

export const createRoom = async (req, res) => {
  try {
    const room = await roomService.createRoom(req.body);
    res.status(201).json(room);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getRoomsByNamespace = async (req, res) => {
  try {
    const rooms = await roomService.getRoomsByNamespace(req.params.namespaceId);
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// export const getRoomById = async (req, res) => {
//   try {
//     const room = await roomService.getRoomById(req.params.id);
//     if (!room) return res.status(404).json({ message: "Not found" });

//     res.status(200).json(room);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
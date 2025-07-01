import { messageService } from "./message.service.js";

export const createMessage = async (req, res) => {
  try {
    const message = await messageService.createMessage(req.body);
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getMessagesByRoom = async (req, res) => {
  try {
    const messages = await messageService.getMessagesByRoom(req.params.roomId);
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

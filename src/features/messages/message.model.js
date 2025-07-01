import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    authorName: { type: String }, // pour éviter de requêter `User` à chaque fois
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;

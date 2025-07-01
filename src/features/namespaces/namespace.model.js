import mongoose from "mongoose";

const namespaceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    image: { type: String, default: "" },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Namespace = mongoose.model("Namespace", namespaceSchema);
export default Namespace;

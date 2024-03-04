import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      enum: ["user", "assistant"],
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Message = mongoose.model("Message", messageSchema);

export interface IMessage {
  role: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
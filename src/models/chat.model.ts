import mongoose from "mongoose";
import { IMessage } from "./message.model";

const chatSchema = new mongoose.Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
      type: String,
      required: true,
      default: "New Chat",
    },
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ]
  },
  {
    timestamps: true,
  },
);

export const Chat = mongoose.model("Chat", chatSchema);

export interface IChat {
  user: string;
  title: string;
  messages: IMessage[];
  createdAt: Date;
  updatedAt: Date;
}

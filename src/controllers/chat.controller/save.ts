import { Request, Response } from "express";
import { AppResponse } from "../../utils/response";
import { Chat, Message } from "../../models";

export const saveChat = async (req: Request, res: Response) => {
  const { success, failed } = new AppResponse(res);
  const id = req.body.id;
  const chatId = req.body.chatId || null;
  const title = req.body.title;
  const message = req.body.message;

  if (!id) return failed("User id is required", "User id is required", 400);
  if (!message)
    return failed("Message is required", "Message is required", 400);

  try {
    if (chatId) {
      const chat = await Chat.findById(chatId);
      if (!chat) return failed("Chat not found", "Chat not found", 404);

      const newMessage = new Message(message);
      await newMessage.save();

      chat.messages.push(newMessage._id);
      await chat.save();
    } else {
      const newChat = new Chat({
        title: title || "New Chat",
        user: id,
        messages: [message],
      });
      await newChat.save();
      success("Chat saved successfully", newChat);
    }
  } catch (error) {}
};

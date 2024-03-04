import { Request, Response } from "express";
import { AppResponse } from "../../utils/response";
import { Chat } from "../../models";

export const retrieveChats = async (req: Request, res: Response) => {
  const { success, failed } = new AppResponse(res);
  const id = req.body.id;

  try {
    const chats = await Chat.find({ user: id });
    success("Chats retrieved successfully", chats);
  } catch (error: any) {
    failed("Failed to retrieve chats", error);
  }
};

import { Request, Response } from "express";
import { AppResponse } from "../../utils/response";
import { Chat } from "../../models";

export const retrieveChat = async (req: Request, res: Response) => {
    const { success, failed } = new AppResponse(res);
    const id = req.body.id;
    const { id: chatId } = req.params;

    try {
        const chat = await Chat.findById(chatId).populate("messages");
        success("Chat retrieved successfully", chat);
    } catch (error: any) {
        failed("Failed to retrieve chat", error);
    }

};

import { Router } from "express";
import { saveChat, retrieveChat, retrieveChats } from "../controllers";

const router = Router();

// Get all chats
router.get("/", retrieveChats);

// Get chat by id
router.get("/:id", retrieveChat);

// Save chat
router.post("/", saveChat);

export { router as chatRoutes };

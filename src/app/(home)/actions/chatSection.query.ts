'use server'

import { getChatMessages } from "@/db/orm/text-message/get-chat-messages";

export async function getChatMessagesAction(id: string) {
    return await getChatMessages(id);
}
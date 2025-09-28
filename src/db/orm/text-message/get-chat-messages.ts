'server-only'

import { db } from "@/db/index"
import { chat, message } from "@/db/schema";
import { CreateMessageProp, getMessagesType } from "@/types/message-create-types";
import { eq } from "drizzle-orm";

export async function getChatMessages(id: string){
    const response = await db
    .select({
        id:message.id,
        chatId:message.chatId,
        sender:message.sender,
        body:message.body,
        image:message.image,
    })
    .from(message)
    .where(eq(message.chatId,id))

    return response as getMessagesType[];
}
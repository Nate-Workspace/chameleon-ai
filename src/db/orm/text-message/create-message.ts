'server-only'

import { db } from "@/db/index"
import { message } from "@/db/schema";
import { CreateMessageProp } from "@/types/message-create-types";

export async function createMessage(data: CreateMessageProp){
    const [response] = await db
    .insert(message)
    .values({
        chatId: data.chatId,
        sender: data.sender,
        body: data.content,
    })
    .returning({
        id: message.id
    })

    return response;
}
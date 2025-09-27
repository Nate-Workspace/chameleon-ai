'server-only'

import { db } from "@/db/index"
import { chat } from "@/db/schema";

export async function createChat(data: {title: string}){
    const [response] = await db
    .insert(chat)
    .values({
        title: data.title,
    })
    .returning({
        id: chat.id
    })

    return response;
}
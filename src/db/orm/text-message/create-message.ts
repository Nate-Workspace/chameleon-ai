import { db } from "@/db";
import { message } from "@/db/schema";

export async function createMessage(data: {id: string, sender: "user"| "ai", content: string}){
    return await db
    .insert(message)
    .values({
        sender: data.sender,
        body: data.content,
    })
    .returning({
        id: message.id
    })
}
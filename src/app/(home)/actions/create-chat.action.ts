import { createChat } from "@/db/orm/chat/create-chat";

export async function createChatAction(data: {title:string}){
    return await createChat(data);
}
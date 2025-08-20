'use server'

import { createMessage } from "@/db/orm/text-message/create-message";
import { CreateMessageProp } from "@/types/message-create-types";

export async function createMessageAction( message: CreateMessageProp){
    try{
        const data = await createMessage(message)
        console.log("Message created successfully:", data);
    }catch(error){
        console.error("Error creating message:", error);
    }
}
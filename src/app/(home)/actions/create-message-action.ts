import { createMessage } from "@/db/orm/text-message/create-message";

export async function createMessageAction( message: { id: string, sender: "user"| "ai", content: string}){
    try{
        const data = await createMessage(message)
        console.log("Message created successfully:", data);
    }catch(error){
        console.error("Error creating message:", error);
    }
}
'use server'

import { createMessage } from "@/db/orm/text-message/create-message";
import { CreateMessageProp } from "@/types/message-create-types";

export async function createMessageAction( message: CreateMessageProp){
        return createMessage(message)
}
'use server'

import { createUser } from "@/db/orm/user/create-user"

export const createUserAction = async ()=>{
    return await createUser()
}
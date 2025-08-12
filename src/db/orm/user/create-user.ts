import 'server-only'

import { db } from '@/db/index';
import { usersTable } from '@/db/schema';

export const createUser = async () =>{
    const user ={
        name: 'Nathan Israel',
        age: 22,
        email: 'nathanisrael.pro@gmail.com'
    }

    return await db.insert(usersTable).values(user).returning();
}
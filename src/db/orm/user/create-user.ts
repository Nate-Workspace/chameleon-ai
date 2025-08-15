import 'server-only'

import { db } from '@/db/index';
import { user } from '@/db/schema';

export const createUser = async () =>{
    const userTrial ={
        name: 'Nathan Israel',
        age: 22,
        email: 'nathanisrael.pro@gmail.com'
    }

    return await db.insert(user).values(userTrial).returning();
}
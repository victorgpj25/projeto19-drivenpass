import { prisma } from '../config/database'

import * as userTypes from '../types/userTypes'

export async function insert(userInsertData: userTypes.userInsertData) {
    await prisma.users.create({
        data: userInsertData
    })
}

export async function findByEmail(email: string) {
    const user: userTypes.User | null = await prisma.users.findUnique({
        where: {
            email: email
        }
    })
    return user
}


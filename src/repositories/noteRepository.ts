import { prisma } from '../config/database'

import * as noteTypes from '../types/noteTypes'

export async function insert(noteInsertData: noteTypes.INoteInsertData) {
    await prisma.notes.create({
        data: noteInsertData
    })
}

export async function findByTagAndUserId(userId: number, tag: string) {
    const note: noteTypes.INote | null = await prisma.notes.findFirst({
        where: {
            userId,
            tag
        }
    })

    return note
}